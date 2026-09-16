<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html lang="fr">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Sitemap — JWL Marketing</title>
<meta name="robots" content="noindex"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,500&amp;family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<style>
  :root {
    --bg: #f5f1ea;
    --surface: #ffffff;
    --border: #e4dccb;
    --ink: #1c1712;
    --ink-dim: #6b6255;
    --gold: #c9a84c;
    --terracotta: #c9846f;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--ink);
    font-family: 'Inter', -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .hero {
    padding: 72px 24px 48px;
    text-align: center;
    background:
      radial-gradient(ellipse at top, rgba(201,168,76,.14) 0%, transparent 60%),
      var(--bg);
    border-bottom: 1px solid var(--border);
  }
  .hero .eyebrow {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--terracotta);
    margin: 0 0 14px;
  }
  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    font-size: clamp(28px, 5vw, 44px);
    margin: 0 0 12px;
    letter-spacing: -0.01em;
  }
  .hero h1 em { color: var(--terracotta); font-style: italic; }
  .hero p {
    margin: 0 auto;
    max-width: 560px;
    color: var(--ink-dim);
    font-size: 15px;
    line-height: 1.6;
  }
  .stats {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 28px;
    flex-wrap: wrap;
  }
  .stat { text-align: center; }
  .stat b {
    display: block;
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    color: var(--gold);
  }
  .stat span {
    font-size: 12px;
    color: var(--ink-dim);
    text-transform: uppercase;
    letter-spacing: .06em;
  }
  main {
    max-width: 860px;
    margin: 0 auto;
    padding: 48px 24px 96px;
  }
  .search {
    width: 100%;
    padding: 14px 18px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--surface);
    font-size: 14px;
    font-family: inherit;
    color: var(--ink);
    margin-bottom: 28px;
    outline: none;
    transition: border-color .15s ease, box-shadow .15s ease;
  }
  .search:focus { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(201,168,76,.15); }
  table {
    width: 100%;
    border-collapse: collapse;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
  }
  thead th {
    text-align: left;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: .08em;
    color: var(--ink-dim);
    font-weight: 600;
    padding: 14px 18px;
    background: #efe8da;
    border-bottom: 1px solid var(--border);
  }
  tbody tr { border-bottom: 1px solid var(--border); transition: background .12s ease; }
  tbody tr:last-child { border-bottom: none; }
  tbody tr:hover { background: #faf6ee; }
  td { padding: 13px 18px; font-size: 14px; vertical-align: middle; }
  td.url a {
    color: var(--ink);
    text-decoration: none;
    font-weight: 500;
  }
  td.url a:hover { color: var(--terracotta); text-decoration: underline; }
  td.url .path { color: var(--ink-dim); font-weight: 400; }
  .badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 999px;
    background: rgba(201,168,76,.15);
    color: #8a6d1f;
    white-space: nowrap;
  }
  td.meta { color: var(--ink-dim); font-variant-numeric: tabular-nums; white-space: nowrap; }
  footer {
    text-align: center;
    padding: 32px 24px 64px;
    color: var(--ink-dim);
    font-size: 12.5px;
  }
  footer a { color: var(--terracotta); text-decoration: none; }
</style>
</head>
<body>
  <div class="hero">
    <p class="eyebrow">Plan du site — XML</p>
    <h1>Toutes les pages de <em>JWL Marketing</em></h1>
    <p>Ce fichier liste les URLs indexables du site pour les moteurs de recherche. Il est aussi lisible ici, pour les humains curieux.</p>
    <div class="stats">
      <div class="stat">
        <b><xsl:value-of select="count(sm:urlset/sm:url)"/></b>
        <span>URLs</span>
      </div>
      <div class="stat">
        <b><xsl:value-of select="count(sm:urlset/sm:url[contains(sm:loc, '/en/') or substring(sm:loc, string-length(sm:loc) - 2) = '/en'])"/></b>
        <span>En anglais</span>
      </div>
      <div class="stat">
        <b><xsl:value-of select="count(sm:urlset/sm:url[contains(sm:loc, '/blog/')])"/></b>
        <span>Articles</span>
      </div>
    </div>
  </div>
  <main>
    <input class="search" type="text" placeholder="Filtrer les URLs..." oninput="jwlFilterSitemap(this.value)"/>
    <table>
      <thead>
        <tr>
          <th>URL</th>
          <th>Fréquence</th>
          <th>Priorité</th>
        </tr>
      </thead>
      <tbody id="jwl-sitemap-rows">
        <xsl:for-each select="sm:urlset/sm:url">
          <xsl:sort select="sm:priority" order="descending"/>
          <tr>
            <td class="url">
              <a href="{sm:loc}" target="_blank" rel="noopener">
                <xsl:value-of select="sm:loc"/>
              </a>
            </td>
            <td class="meta">
              <span class="badge"><xsl:value-of select="sm:changefreq"/></span>
            </td>
            <td class="meta"><xsl:value-of select="sm:priority"/></td>
          </tr>
        </xsl:for-each>
      </tbody>
    </table>
  </main>
  <footer>
    Généré automatiquement par <a href="/">jwl-marketing.fr</a> — usage XML pur pour les robots, cette mise en forme est pour toi.
  </footer>
  <script>
    function jwlFilterSitemap(q) {
      var query = q.toLowerCase();
      var rows = document.getElementById('jwl-sitemap-rows').getElementsByTagName('tr');
      for (var i = 0; i &lt; rows.length; i++) {
        var text = rows[i].textContent.toLowerCase();
        rows[i].style.display = text.indexOf(query) !== -1 ? '' : 'none';
      }
    }
  </script>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
