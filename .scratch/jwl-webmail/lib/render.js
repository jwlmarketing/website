function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function timeAgo(iso) {
  if (!iso) return "";
  const then = new Date(iso);
  const now = new Date();
  const sameDay = then.toDateString() === now.toDateString();
  if (sameDay) return then.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  const s = Math.floor((now - then) / 1000);
  if (Number.isNaN(s)) return esc(iso);
  if (s < 172800) return "Hier";
  if (s < 6 * 86400) return then.toLocaleDateString("fr-FR", { weekday: "short" });
  return then.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" });
}

function initials(addr) {
  const name = (addr || "?").split("@")[0].replace(/[._-]/g, " ").trim();
  const parts = name.split(/\s+/).filter(Boolean);
  const letters = parts.length >= 2 ? parts[0][0] + parts[1][0] : name.slice(0, 2);
  return esc(letters.toUpperCase());
}

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --bg: #f5f1ea;
    --surface: #ffffff;
    --surface-2: #ece5d8;
    --border: #ddd3c1;
    --ink: #1c1712;
    --ink-dim: #6b6255;
    --ink-faint: #a49a8a;
    --accent: #b86a4f;
    --accent-ink: #ffffff;
    --gold: #a3792f;
    --gold-soft: #f1e2c2;
    --danger: #a3382e;
    --ok: #3f6e4e;
    --sidebar-bg: #141110;
    --sidebar-ink: #ece5d8;
    --sidebar-ink-dim: #9c9285;
    --sidebar-border: #2a251f;
    --sidebar-hover: #221d18;
    --shadow: 0 1px 2px rgba(28,23,18,0.04), 0 8px 24px rgba(28,23,18,0.06);
  }

  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --bg: #171310;
      --surface: #1e1a16;
      --surface-2: #241f1a;
      --border: #322b23;
      --ink: #efe8dc;
      --ink-dim: #a89d8b;
      --ink-faint: #756a5a;
      --accent: #d38a68;
      --accent-ink: #171310;
      --gold: #d4ac5e;
      --gold-soft: #3a3021;
      --danger: #d97a6c;
      --ok: #7fb08e;
      --sidebar-bg: #0e0c0a;
      --sidebar-ink: #efe8dc;
      --sidebar-ink-dim: #857a68;
      --sidebar-border: #221d18;
      --sidebar-hover: #1a1613;
      --shadow: 0 1px 2px rgba(0,0,0,0.3), 0 8px 28px rgba(0,0,0,0.45);
    }
  }
  :root[data-theme="dark"] {
    --bg: #171310; --surface: #1e1a16; --surface-2: #241f1a; --border: #322b23;
    --ink: #efe8dc; --ink-dim: #a89d8b; --ink-faint: #756a5a;
    --accent: #d38a68; --accent-ink: #171310; --gold: #d4ac5e; --gold-soft: #3a3021;
    --danger: #d97a6c; --ok: #7fb08e;
    --sidebar-bg: #0e0c0a; --sidebar-ink: #efe8dc; --sidebar-ink-dim: #857a68;
    --sidebar-border: #221d18; --sidebar-hover: #1a1613;
    --shadow: 0 1px 2px rgba(0,0,0,0.3), 0 8px 28px rgba(0,0,0,0.45);
  }

  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--ink); font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
  h1, h2, h3, .display { font-family: 'Playfair Display', Georgia, serif; text-wrap: balance; margin: 0; }
  .mono { font-family: 'JetBrains Mono', ui-monospace, monospace; font-variant-numeric: tabular-nums; }
  a { color: inherit; }
  img { max-width: 100%; }

  .topbar { display: flex; align-items: center; gap: 14px; justify-content: space-between; padding: 18px 28px; border-bottom: 1px solid var(--border); }
  .topbar .left { display: flex; align-items: center; gap: 14px; }
  .menu-toggle { display: none; width: 34px; height: 34px; align-items: center; justify-content: center; border-radius: 8px; border: 1px solid var(--border); background: var(--surface); color: var(--ink); cursor: pointer; flex-shrink: 0; }
  .brand { display: flex; align-items: baseline; gap: 10px; text-decoration: none; }
  .brand .mark { font-family: 'Playfair Display', serif; font-weight: 700; font-size: 22px; letter-spacing: 0.02em; color: var(--ink); }
  .brand .mark em { color: var(--accent); font-style: italic; }
  .brand .sub { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-faint); }
  .usermenu { display: flex; align-items: center; gap: 16px; font-size: 13px; color: var(--ink-dim); }

  section.screen { padding: 28px; max-width: 1400px; margin: 0 auto; }

  .nav-backdrop { display: none; }
  .back-link { display: none; }

  /* ---- webmail layout ---- */
  .mail-shell { display: grid; grid-template-columns: 220px 340px 1fr; gap: 0; border: 1px solid var(--border); border-radius: 16px; overflow: hidden; background: var(--surface); box-shadow: var(--shadow); min-height: 640px; }
  .mail-sidebar { background: var(--sidebar-bg); color: var(--sidebar-ink); padding: 20px 14px; border-right: 1px solid var(--sidebar-border); }
  .compose-btn { display: block; text-align: center; text-decoration: none; width: 100%; padding: 12px 16px; border-radius: 10px; border: none; background: var(--accent); color: var(--accent-ink); font-weight: 700; font-size: 14px; font-family: inherit; cursor: pointer; margin-bottom: 18px; }
  .mail-account { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--sidebar-ink-dim); padding: 0 10px; margin: 18px 0 8px; }
  .folder-list { list-style: none; margin: 0; padding: 0; }
  .folder-list li a { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 8px 10px; border-radius: 8px; color: var(--sidebar-ink-dim); text-decoration: none; font-size: 13.5px; font-weight: 500; }
  .folder-list li a.active { background: var(--sidebar-hover); color: var(--sidebar-ink); }
  .folder-list li a .count { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--sidebar-ink-dim); }
  .folder-list li a.active .count { color: var(--gold); }
  .sidebar-foot { margin-top: 20px; padding-top: 14px; border-top: 1px solid var(--sidebar-border); }
  .sidebar-foot a { color: var(--sidebar-ink-dim); font-size: 12.5px; text-decoration: none; }
  .sidebar-foot a:hover { color: var(--sidebar-ink); }

  .mail-list { border-right: 1px solid var(--border); overflow-y: auto; max-height: 640px; }
  .mail-list-head { padding: 16px 18px 10px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border); }
  .mail-list-head h3 { font-size: 16px; font-weight: 600; }
  .mail-list-head .count-pill { font-size: 11px; font-weight: 700; color: var(--ink-dim); background: var(--surface-2); padding: 3px 9px; border-radius: 999px; }
  .mail-row { display: flex; align-items: flex-start; gap: 12px; padding: 14px 18px; border-bottom: 1px solid var(--border); text-decoration: none; color: inherit; }
  .mail-row.selected { background: var(--gold-soft); }
  .mail-row .row-avatar { width: 34px; height: 34px; border-radius: 999px; background: var(--surface-2); color: var(--ink-dim); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 12.5px; font-family: 'Playfair Display', serif; flex-shrink: 0; }
  .mail-row.unread .row-avatar { background: var(--accent); color: var(--accent-ink); }
  .mail-row .row-body { min-width: 0; flex: 1; }
  .mail-row .row-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 4px; }
  .mail-row .from { font-weight: 600; font-size: 13.5px; }
  .mail-row:not(.unread) .from { color: var(--ink-dim); font-weight: 500; }
  .mail-row .time { font-size: 11.5px; color: var(--ink-faint); font-family: 'JetBrains Mono', monospace; flex-shrink: 0; }
  .mail-row .subject { font-size: 13.5px; margin-bottom: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .mail-row:not(.unread) .subject { color: var(--ink-dim); }
  .mail-row .preview { font-size: 12.5px; color: var(--ink-faint); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

  .mail-reading { padding: 26px 30px; overflow-y: auto; max-height: 640px; }
  .reading-head { border-bottom: 1px solid var(--border); padding-bottom: 18px; margin-bottom: 18px; }
  .reading-head h2 { font-size: 22px; margin-bottom: 12px; }
  .reading-meta { display: flex; align-items: center; gap: 12px; }
  .avatar { width: 38px; height: 38px; border-radius: 999px; background: var(--accent); color: var(--accent-ink); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; font-family: 'Playfair Display', serif; flex-shrink: 0; }
  .reading-meta .who { font-size: 13.5px; font-weight: 600; }
  .reading-meta .addr { font-size: 12px; color: var(--ink-faint); }
  .reading-meta .when { margin-left: auto; font-size: 12px; color: var(--ink-faint); font-family: 'JetBrains Mono', monospace; }
  .reading-body { font-size: 14.5px; line-height: 1.7; color: var(--ink); max-width: 66ch; }
  .reading-body p { margin: 0 0 14px; }
  .reading-actions { display: flex; gap: 10px; margin-top: 24px; }
  .btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 18px; border-radius: 9px; font-size: 13px; font-weight: 700; font-family: inherit; border: 1px solid var(--border); background: var(--surface); color: var(--ink); cursor: pointer; text-decoration: none; }
  .btn:hover { text-decoration: none; }
  .btn.primary { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); }
  .empty-state { padding: 60px 20px; text-align: center; color: var(--ink-faint); font-size: 13.5px; }

  .compose-pane { padding: 26px 30px; }
  .compose-pane h2 { font-size: 20px; margin-bottom: 18px; }
  .field { margin-bottom: 16px; }
  label.field-label { font-size: 11.5px; font-weight: 700; color: var(--ink-dim); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px; }
  input.field, textarea.field { width: 100%; padding: 10px 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface-2); color: var(--ink); font-family: inherit; font-size: 13.5px; }
  textarea.field { line-height: 1.6; resize: vertical; }
  input.field::placeholder { color: var(--ink-faint); }

  .alert { padding: 11px 14px; border-radius: 9px; font-size: 13.5px; margin-bottom: 18px; border: 1px solid; }
  .alert-error { background: color-mix(in srgb, var(--danger) 12%, transparent); border-color: color-mix(in srgb, var(--danger) 40%, transparent); color: var(--danger); }

  .fab-compose { display: none; }

  /* ---- mobile: Proton-style single-pane + off-canvas nav ---- */
  @media(max-width:820px){
    section.screen { padding: 0; max-width: none; }
    .topbar { padding: 12px 14px; }
    .menu-toggle { display: flex; }
    .usermenu span { display: none; }
    .brand .sub { display: none; }

    .mail-shell { grid-template-columns: 1fr; min-height: calc(100dvh - 65px); border: none; border-radius: 0; box-shadow: none; }

    .mail-sidebar { position: fixed; top: 0; left: 0; bottom: 0; width: 260px; z-index: 60; padding-top: 70px; transform: translateX(-100%); transition: transform .22s ease; overflow-y: auto; }
    body.nav-open .mail-sidebar { transform: translateX(0); }
    .nav-backdrop { display: block; position: fixed; inset: 0; background: rgba(20,17,16,.45); opacity: 0; pointer-events: none; transition: opacity .22s ease; z-index: 55; }
    body.nav-open .nav-backdrop { opacity: 1; pointer-events: auto; }

    .mail-list, .mail-reading, .compose-pane { max-height: none; border: none; }
    .mail-shell[data-view="reading"] .mail-list,
    .mail-shell[data-view="reading"] .mail-list-head { display: none; }
    .mail-shell[data-view="list"] .mail-reading { display: none; }
    .compose-pane { grid-column: 1 !important; }

    .back-link { display: inline-flex; align-items: center; gap: 4px; font-size: 13px; font-weight: 600; color: var(--ink-dim); text-decoration: none; margin-bottom: 14px; }

    .mail-reading, .mail-list-head, .compose-pane { padding-left: 16px; padding-right: 16px; }
    .mail-row { padding: 14px 16px; }

    .fab-compose { display: flex; position: fixed; right: 18px; bottom: 22px; width: 54px; height: 54px; border-radius: 999px; background: var(--accent); color: var(--accent-ink); align-items: center; justify-content: center; font-size: 22px; box-shadow: var(--shadow); text-decoration: none; z-index: 40; }
    .mail-shell[data-view="reading"] .fab-compose { display: none; }
  }
`;

function layout({ title, body, user }) {
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} · JWL Mail</title>
<style>${STYLES}</style></head><body>
<div class="topbar">
  <div class="left">
    ${user ? `<button class="menu-toggle" type="button" onclick="document.body.classList.toggle('nav-open')" aria-label="Menu">☰</button>` : ""}
    <a class="brand" href="/"><span class="mark">JWL <em>Mail</em></span><span class="sub">Messagerie</span></a>
  </div>
  ${
    user
      ? `<div class="usermenu">
          <span>${esc(user.address)}</span>
          <form method="POST" action="/logout" style="margin:0"><button class="btn" type="submit" style="padding:7px 14px">Déconnexion</button></form>
        </div>`
      : ""
  }
</div>
${user ? `<div class="nav-backdrop" onclick="document.body.classList.remove('nav-open')"></div>` : ""}
<section class="screen">${body}</section>
</body></html>`;
}

function loginPage({ error }) {
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>Connexion · JWL Mail</title>
<style>${STYLES}
body{display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}
.login{width:360px;background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:38px 34px;box-shadow:var(--shadow)}
.login .mark{display:block;text-align:center;font-size:26px;margin-bottom:22px}
.login h1{font-size:16px;text-align:center;margin-bottom:26px;font-weight:500;color:var(--ink-dim);font-family:'Inter',sans-serif}
</style></head><body>
<form class="login" method="POST" action="/login">
  <span class="mark">JWL <em>Mail</em></span>
  <h1>Connexion à ta messagerie</h1>
  ${error ? `<div class="alert alert-error">${esc(error)}</div>` : ""}
  <div class="field"><label class="field-label">Adresse mail</label><input class="field" type="text" name="address" required autofocus placeholder="toi@jwlmarketing.fr"></div>
  <div class="field"><label class="field-label">Mot de passe</label><input class="field" type="password" name="password" required placeholder="••••••••"></div>
  <button class="btn primary" type="submit" style="width:100%;justify-content:center;margin-top:8px">Se connecter</button>
</form>
</body></html>`;
}

module.exports = { esc, timeAgo, initials, layout, loginPage };
