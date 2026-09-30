// Lecture/envoi de mails en direct via IMAP/SMTP — aucun webmail tiers.
const { ImapFlow } = require("imapflow");
const nodemailer = require("nodemailer");
const MailComposer = require("nodemailer/lib/mail-composer");
const { simpleParser } = require("mailparser");

const SNI_HOST = process.env.MAILU_HOSTNAME || "mail.jwlmarketing.fr";
// Connect over loopback: this app and Mailu run on the same VPS, and Mailu's
// ports are already published on 127.0.0.1. Going out to the public IP and
// back in (hairpin) adds a full internet round trip to every request.
const CONNECT_HOST = process.env.MAILU_CONNECT_HOST || "127.0.0.1";

function imapClient(account) {
  return new ImapFlow({
    host: CONNECT_HOST,
    port: 993,
    secure: true,
    auth: { user: account.address, pass: account.password },
    logger: false,
    tls: { rejectUnauthorized: true, servername: SNI_HOST },
  });
}

function smtpTransport(account) {
  return nodemailer.createTransport({
    host: CONNECT_HOST,
    port: 465,
    secure: true,
    auth: { user: account.address, pass: account.password },
    tls: { servername: SNI_HOST },
  });
}

async function verifyLogin(account) {
  const client = imapClient(account);
  await client.connect();
  await client.logout().catch(() => {});
  return true;
}

const FOLDER_MAP = {
  inbox: "INBOX",
  sent: "Sent",
  drafts: "Drafts",
  archive: "Archive",
  spam: "Junk",
  trash: "Trash",
};

async function listFolderCounts(account) {
  const client = imapClient(account);
  await client.connect();
  try {
    const out = {};
    for (const [key, mailbox] of Object.entries(FOLDER_MAP)) {
      try {
        const status = await client.status(mailbox, { messages: true, unseen: true });
        out[key] = { messages: status.messages || 0, unseen: status.unseen || 0 };
      } catch {
        out[key] = { messages: 0, unseen: 0 };
      }
    }
    return out;
  } finally {
    await client.logout().catch(() => {});
  }
}

async function listMessages(account, folder, { limit = 40 } = {}) {
  const mailbox = FOLDER_MAP[folder] || "INBOX";
  const client = imapClient(account);
  await client.connect();
  try {
    const lock = await client.getMailboxLock(mailbox);
    try {
      const total = client.mailbox.exists;
      if (total === 0) return [];
      const start = Math.max(1, total - limit + 1);
      const messages = [];
      for await (const msg of client.fetch(`${start}:${total}`, { envelope: true, flags: true, uid: true, size: true })) {
        messages.push({
          uid: msg.uid,
          from: msg.envelope.from?.[0] || null,
          to: msg.envelope.to || [],
          subject: msg.envelope.subject || "(sans objet)",
          date: msg.envelope.date ? new Date(msg.envelope.date).toISOString() : null,
          seen: msg.flags.has("\\Seen"),
          flagged: msg.flags.has("\\Flagged"),
          size: msg.size,
        });
      }
      messages.reverse();
      return messages;
    } finally {
      lock.release();
    }
  } finally {
    await client.logout().catch(() => {});
  }
}

async function getMessage(account, folder, uid) {
  const mailbox = FOLDER_MAP[folder] || "INBOX";
  const client = imapClient(account);
  await client.connect();
  try {
    const lock = await client.getMailboxLock(mailbox);
    try {
      const raw = await client.download(String(uid), undefined, { uid: true });
      if (!raw) return null;
      const chunks = [];
      for await (const chunk of raw.content) chunks.push(chunk);
      const buffer = Buffer.concat(chunks);
      const parsed = await simpleParser(buffer);
      await client.messageFlagsAdd(String(uid), ["\\Seen"], { uid: true }).catch(() => {});
      return {
        uid,
        from: parsed.from?.value?.[0] || null,
        to: parsed.to?.value || [],
        subject: parsed.subject || "(sans objet)",
        date: parsed.date ? new Date(parsed.date).toISOString() : null,
        text: parsed.text || "",
        html: parsed.html || null,
        attachments: (parsed.attachments || []).map((a) => ({ filename: a.filename, size: a.size, contentType: a.contentType })),
      };
    } finally {
      lock.release();
    }
  } finally {
    await client.logout().catch(() => {});
  }
}

async function moveMessage(account, folder, uid, targetFolder) {
  const mailbox = FOLDER_MAP[folder] || "INBOX";
  const target = FOLDER_MAP[targetFolder] || targetFolder;
  const client = imapClient(account);
  await client.connect();
  try {
    const lock = await client.getMailboxLock(mailbox);
    try {
      await client.messageMove(String(uid), target, { uid: true });
    } finally {
      lock.release();
    }
  } finally {
    await client.logout().catch(() => {});
  }
}

async function sendMessage(account, { to, cc, bcc, subject, text, html, inReplyTo, references }) {
  const mail = { from: account.address, to, cc, bcc, subject, text, html, inReplyTo, references };
  // Build the raw MIME once — nodemailer's sendMail() result has no `message`
  // property, only envelope/messageId/response, so we compose it ourselves
  // and reuse the exact same bytes for both the SMTP send and the Sent append.
  const raw = await new Promise((resolve, reject) => {
    new MailComposer(mail).compile().build((err, message) => (err ? reject(err) : resolve(message)));
  });

  const transport = smtpTransport(account);
  const info = await transport.sendMail({ raw, envelope: { from: account.address, to, cc, bcc } });

  const client = imapClient(account);
  await client.connect();
  try {
    await client.append(FOLDER_MAP.sent, raw, ["\\Seen"]);
  } finally {
    await client.logout().catch(() => {});
  }
  return info;
}

module.exports = { FOLDER_MAP, verifyLogin, listFolderCounts, listMessages, getMessage, moveMessage, sendMessage };
