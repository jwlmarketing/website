const express = require("express");
const session = require("express-session");
const R = require("./lib/render");
const mc = require("./lib/mailClient");
const { esc, timeAgo, initials } = R;

const app = express();
app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "jwl-mail-dev-secret-change-me",
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: true, sameSite: "lax", maxAge: 12 * 60 * 60 * 1000 },
  })
);

const FOLDERS = [
  ["inbox", "Réception"],
  ["sent", "Envoyés"],
  ["drafts", "Brouillons"],
  ["archive", "Archivés"],
  ["spam", "Spam"],
  ["trash", "Corbeille"],
];

function requireAuth(req, res, next) {
  if (!req.session.account) return res.redirect("/login");
  next();
}

function fmtAddr(a) {
  if (!a) return "";
  return a.name ? `${esc(a.name)} <${esc(a.address)}>` : esc(a.address);
}

function folderLabel(folder) {
  return (FOLDERS.find(([k]) => k === folder) || [, folder])[1];
}

function mailRow(m, folder, extraClass) {
  return `<a class="mail-row ${m.seen ? "" : "unread"} ${extraClass || ""}" href="/${folder}/${m.uid}">
    <div class="row-avatar">${initials(m.from?.address)}</div>
    <div class="row-body">
      <div class="row-top"><span class="from">${fmtAddr(m.from)}</span><span class="time">${timeAgo(m.date)}</span></div>
      <div class="subject">${esc(m.subject)}</div>
    </div>
  </a>`;
}

function sidebar(account, activeFolder, counts) {
  return `<aside class="mail-sidebar">
    <a class="compose-btn" href="/compose">✎ Nouveau message</a>
    <div class="mail-account">${esc(account.address)}</div>
    <ul class="folder-list">
      ${FOLDERS.map(
        ([key, label]) =>
          `<li><a href="/${key}" class="${activeFolder === key ? "active" : ""}">${label} <span class="count">${(counts && counts[key]) || ""}</span></a></li>`
      ).join("")}
    </ul>
    <div class="sidebar-foot">
      <a href="https://hub.jwlmarketing.fr/mail/admin" target="_blank">⚙ Domaines &amp; boîtes</a>
    </div>
  </aside>`;
}

/* ============ Auth ============ */

app.get("/login", (req, res) => {
  if (req.session.account) return res.redirect("/inbox");
  res.send(R.loginPage({}));
});

app.post("/login", async (req, res) => {
  const address = (req.body.address || "").trim().toLowerCase();
  const password = req.body.password || "";
  if (!address || !password) return res.send(R.loginPage({ error: "Adresse et mot de passe requis." }));
  try {
    await mc.verifyLogin({ address, password });
    req.session.account = { address, password };
    res.redirect("/inbox");
  } catch (err) {
    res.send(R.loginPage({ error: "Connexion impossible : identifiants incorrects." }));
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy(() => res.redirect("/login"));
});

app.get("/", (req, res) => res.redirect(req.session.account ? "/inbox" : "/login"));

/* ============ List ============ */

app.get("/:folder", requireAuth, async (req, res, next) => {
  const folder = req.params.folder;
  if (!FOLDERS.some(([k]) => k === folder)) return next();
  const account = req.session.account;

  try {
    const [messages, counts] = await Promise.all([
      mc.listMessages(account, folder, { limit: 50 }),
      mc.listFolderCounts(account).catch(() => null),
    ]);
    const folderCounts = counts
      ? Object.fromEntries(FOLDERS.map(([k]) => [k, counts[k]?.unseen ? String(counts[k].unseen) : ""]))
      : null;

    const rows = messages.map((m) => mailRow(m, folder)).join("");

    res.send(
      R.layout({
        title: folderLabel(folder),
        user: account,
        body: `<div class="mail-shell" data-view="list">
          ${sidebar(account, folder, folderCounts)}
          <div class="mail-list">
            <div class="mail-list-head"><h3>${folderLabel(folder)}</h3><span class="count-pill">${messages.length}</span></div>
            ${rows || `<div class="empty-state">Aucun message.</div>`}
          </div>
          <div class="mail-reading"><div class="empty-state">Sélectionne un message.</div></div>
          <a class="fab-compose" href="/compose" aria-label="Nouveau message">✎</a>
        </div>`,
      })
    );
  } catch (err) {
    res.status(502).send(
      R.layout({
        title: "Erreur",
        user: account,
        body: `<div class="alert alert-error">Connexion à la boîte impossible : ${esc(err.message)}</div>`,
      })
    );
  }
});

/* ============ Compose ============ */

app.get("/compose", requireAuth, (req, res) => {
  const account = req.session.account;
  res.send(
    R.layout({
      title: "Nouveau message",
      user: account,
      body: `<div class="mail-shell" data-view="reading">
        ${sidebar(account, "inbox")}
        <div class="compose-pane" style="grid-column:2 / span 2">
          <a class="back-link" href="/inbox">← Retour</a>
          <h2>Nouveau message</h2>
          <form method="POST" action="/send">
            <div class="field"><label class="field-label">À</label><input class="field" type="text" name="to" required placeholder="destinataire@exemple.fr"></div>
            <div class="field"><label class="field-label">Objet</label><input class="field" type="text" name="subject" required></div>
            <div class="field"><label class="field-label">Message</label><textarea class="field" name="text" rows="16" required></textarea></div>
            <button class="btn primary" type="submit">Envoyer</button>
          </form>
        </div>
      </div>`,
    })
  );
});

app.post("/send", requireAuth, async (req, res) => {
  const account = req.session.account;
  const { to, subject, text, inReplyTo } = req.body;
  try {
    await mc.sendMessage(account, { to, subject, text, inReplyTo: inReplyTo || undefined });
    res.redirect("/sent");
  } catch (err) {
    res.status(502).send(`Échec de l'envoi : ${esc(err.message)}`);
  }
});

/* ============ Read / reply / move ============ */

app.get("/:folder/:uid/reply", requireAuth, async (req, res) => {
  const account = req.session.account;
  const { folder, uid } = req.params;
  const msg = await mc.getMessage(account, folder, uid).catch(() => null);
  if (!msg) return res.status(404).send("Message introuvable");

  const quoted = (msg.text || "").split("\n").map((l) => `> ${l}`).join("\n");
  res.send(
    R.layout({
      title: "Répondre",
      user: account,
      body: `<div class="mail-shell" data-view="reading">
        ${sidebar(account, folder)}
        <div class="compose-pane" style="grid-column:2 / span 2">
          <a class="back-link" href="/${folder}/${uid}">← Retour</a>
          <h2>Répondre à ${fmtAddr(msg.from)}</h2>
          <form method="POST" action="/send">
            <input type="hidden" name="inReplyTo" value="${esc(uid)}">
            <div class="field"><label class="field-label">À</label><input class="field" type="text" name="to" required value="${esc(msg.from?.address || "")}"></div>
            <div class="field"><label class="field-label">Objet</label><input class="field" type="text" name="subject" required value="${esc(msg.subject && msg.subject.startsWith("Re :") ? msg.subject : `Re : ${msg.subject || ""}`)}"></div>
            <div class="field"><label class="field-label">Message</label><textarea class="field" name="text" rows="16" required>\n\nLe ${msg.date ? new Date(msg.date).toLocaleString("fr-FR") : ""}, ${fmtAddr(msg.from).replace(/<[^>]*>/g, "").trim()} a écrit :\n${quoted}</textarea></div>
            <button class="btn primary" type="submit">Envoyer</button>
          </form>
        </div>
      </div>`,
    })
  );
});

app.post("/:folder/:uid/move", requireAuth, async (req, res) => {
  const account = req.session.account;
  const { folder, uid } = req.params;
  await mc.moveMessage(account, folder, uid, req.body.to).catch(() => {});
  res.redirect(`/${folder}`);
});

app.get("/:folder/:uid", requireAuth, async (req, res, next) => {
  const { folder, uid } = req.params;
  if (!FOLDERS.some(([k]) => k === folder)) return next();
  const account = req.session.account;

  try {
    const [messages, msg] = await Promise.all([
      mc.listMessages(account, folder, { limit: 50 }),
      mc.getMessage(account, folder, uid),
    ]);
    if (!msg) return res.status(404).send("Message introuvable");

    const rows = messages.map((m) => mailRow(m, folder, m.uid == uid ? "selected" : "")).join("");

    const bodyHtml = msg.html ? msg.html : `<pre style="white-space:pre-wrap;font-family:inherit">${esc(msg.text)}</pre>`;

    res.send(
      R.layout({
        title: msg.subject || "(sans objet)",
        user: account,
        body: `<div class="mail-shell" data-view="reading">
          ${sidebar(account, folder)}
          <div class="mail-list">
            <div class="mail-list-head"><h3>${folderLabel(folder)}</h3><span class="count-pill">${messages.length}</span></div>
            ${rows}
          </div>
          <div class="mail-reading">
            <div class="reading-head">
              <a class="back-link" href="/${folder}">← Retour</a>
              <h2>${esc(msg.subject)}</h2>
              <div class="reading-meta">
                <div class="avatar">${initials(msg.from?.address)}</div>
                <div>
                  <div class="who">${fmtAddr(msg.from)}</div>
                  <div class="addr">à ${(msg.to || []).map(fmtAddr).join(", ")}</div>
                </div>
                <div class="when">${msg.date ? new Date(msg.date).toLocaleString("fr-FR") : ""}</div>
              </div>
            </div>
            <div class="reading-body">${bodyHtml}</div>
            ${
              msg.attachments.length
                ? `<div class="attachments">${msg.attachments.map((a) => `<span class="tag client">📎 ${esc(a.filename || "pièce jointe")}</span>`).join(" ")}</div>`
                : ""
            }
            <div class="reading-actions">
              <a class="btn primary" href="/${folder}/${uid}/reply">Répondre</a>
              <form method="POST" action="/${folder}/${uid}/move" style="display:inline">
                <input type="hidden" name="to" value="${folder === "archive" ? "inbox" : "archive"}">
                <button class="btn" type="submit">${folder === "archive" ? "Désarchiver" : "Archiver"}</button>
              </form>
              ${
                folder !== "trash"
                  ? `<form method="POST" action="/${folder}/${uid}/move" style="display:inline">
                      <input type="hidden" name="to" value="trash">
                      <button class="btn" type="submit">Supprimer</button>
                    </form>`
                  : ""
              }
            </div>
          </div>
        </div>`,
      })
    );
  } catch (err) {
    res.status(502).send(`Erreur : ${esc(err.message)}`);
  }
});

const PORT = process.env.PORT || 4700;
app.listen(PORT, "127.0.0.1", () => console.log(`jwl-webmail listening on 127.0.0.1:${PORT}`));
