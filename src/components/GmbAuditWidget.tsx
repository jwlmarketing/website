"use client";

import { useEffect, useRef } from "react";

const WIDGET_HTML = `
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">

<style>
.gmb-audit {
  padding: 60px 5%;
  background: #ffffff;
  font-family: 'DM Sans', Arial, sans-serif;
  box-sizing: border-box;
}
.gmb-audit h2 {
  font-size: 40px;
  line-height: 1.3;
  margin: 0 0 10px;
  color: #000;
  font-weight: 500;
  text-align: center;
}
.sous-titre {
  font-size: 20px;
  color: #000;
  font-weight: 400;
  margin: 0 0 40px;
  text-align: center;
}

/* ÉTAPE 0 — recherche */
.step-search {
  max-width: 580px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.step-search input {
  width: 100%;
  padding: 16px 20px;
  font-size: 16px;
  font-family: 'DM Sans', Arial, sans-serif;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  outline: none;
  color: #000;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.step-search input:focus { border-color: #C97B63; }
.step-search input::placeholder { color: #bbb; }
.btn-search {
  padding: 17px 25px;
  background: #C97B63;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'DM Sans', Arial, sans-serif;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-search:hover { background: #b97a63; }
.search-hint {
  font-size: 13px;
  color: #999;
  text-align: center;
}
.search-hint span { color: #C97B63; font-weight: 500; }

/* AUDIT */
.audit-wrap {
  display: none;
  max-width: 680px;
  margin: 0 auto;
  flex-direction: column;
  gap: 0;
}
.audit-wrap.active { display: flex; }

.fiche-ouverte-banner {
  background: #fdf5f2;
  border: 1.5px solid #f0d0c0;
  border-radius: 10px;
  padding: 16px 20px;
  font-size: 14px;
  color: #333;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.fiche-ouverte-banner a {
  color: #C97B63;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
}

/* barre de progression */
.progress-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 32px;
}
.progress-label { font-size: 13px; color: #999; white-space: nowrap; }
.progress-bar { flex: 1; height: 5px; background: #f0f0f0; border-radius: 10px; overflow: hidden; }
.progress-fill { height: 100%; background: #C97B63; border-radius: 10px; transition: width 0.4s; width: 0%; }
.progress-num { font-size: 15px; font-weight: 500; color: #C97B63; min-width: 52px; text-align: right; }

/* sections */
.section-title {
  font-size: 11px;
  color: #C97B63;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 24px 0 10px;
}

/* questions */
.audit-question {
  border: 1.5px solid #e8e8e8;
  border-radius: 10px;
  padding: 18px 20px;
  margin-bottom: 10px;
  transition: border-color 0.2s;
}
.audit-question.ok { border-color: #C97B63; background: #fdf5f2; }
.audit-question.ko { border-color: #f5c6c6; background: #fff5f5; }

.q-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}
.q-label {
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  flex: 1;
}
.q-pts {
  font-size: 12px;
  color: #bbb;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
}
.audit-question.ok .q-pts { color: #C97B63; }

/* input dans question */
.q-input {
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  font-family: 'DM Sans', Arial, sans-serif;
  border: 1.5px solid #e0e0e0;
  border-radius: 6px;
  outline: none;
  color: #000;
  box-sizing: border-box;
  transition: border-color 0.2s;
  margin-bottom: 8px;
}
.q-input:focus { border-color: #C97B63; }
.q-input::placeholder { color: #ccc; font-size: 13px; }

/* oui/non */
.oui-non {
  display: flex;
  gap: 8px;
}
.oui-non button {
  flex: 1;
  padding: 10px;
  border: 1.5px solid #e0e0e0;
  border-radius: 6px;
  background: white;
  font-size: 14px;
  font-family: 'DM Sans', Arial, sans-serif;
  cursor: pointer;
  transition: all 0.2s;
  color: #333;
}
.oui-non button.oui-sel { border-color: #27ae60; background: #f2faf5; color: #27ae60; font-weight: 500; }
.oui-non button.non-sel { border-color: #c0392b; background: #fff5f5; color: #c0392b; font-weight: 500; }

/* nombre */
.q-nombre {
  display: flex;
  align-items: center;
  gap: 10px;
}
.q-nombre input {
  width: 80px;
  padding: 10px 14px;
  font-size: 14px;
  font-family: 'DM Sans', Arial, sans-serif;
  border: 1.5px solid #e0e0e0;
  border-radius: 6px;
  outline: none;
  color: #000;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.q-nombre input:focus { border-color: #C97B63; }
.q-nombre span { font-size: 13px; color: #999; }

/* bouton résultat */
.btn-resultat {
  display: block;
  width: 100%;
  padding: 18px 25px;
  background: #C97B63;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'DM Sans', Arial, sans-serif;
  cursor: pointer;
  text-align: center;
  transition: background 0.2s;
  margin-top: 24px;
}
.btn-resultat:hover { background: #b97a63; }

/* résultat */
.result-wrap {
  display: none;
  max-width: 680px;
  margin: 0 auto;
  flex-direction: column;
  gap: 20px;
}
.result-wrap.active { display: flex; }
.result-score {
  text-align: center;
  padding: 40px 36px;
  border-radius: 12px;
}
.result-score.rouge { background: #fff5f5; border: 1.5px solid #f5c6c6; }
.result-score.orange { background: #fff9f2; border: 1.5px solid #f5d9b8; }
.result-score.jaune { background: #fffbf0; border: 1.5px solid #f5e8b0; }
.result-score.vert { background: #f2faf5; border: 1.5px solid #b8e6c8; }
.score-big { font-size: 72px; font-weight: 500; line-height: 1; margin-bottom: 4px; }
.result-score.rouge .score-big { color: #c0392b; }
.result-score.orange .score-big { color: #C97B63; }
.result-score.jaune .score-big { color: #e0a020; }
.result-score.vert .score-big { color: #27ae60; }
.score-sur { font-size: 13px; color: #999; margin-bottom: 16px; }
.score-msg { font-size: 20px; font-weight: 500; color: #000; line-height: 1.3; margin-bottom: 10px; }
.score-detail { font-size: 15px; color: #555; line-height: 1.6; }

.points-forts, .points-faibles {
  background: #f8f8f8;
  border-radius: 10px;
  padding: 20px 24px;
}
.pf-title { font-size: 13px; color: #999; margin: 0 0 12px; }
.pf-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 7px 0;
  border-bottom: 0.5px solid #eee;
  font-size: 14px;
  color: #333;
  line-height: 1.4;
}
.pf-item:last-child { border-bottom: none; }
.pf-pts { margin-left: auto; font-size: 12px; font-weight: 500; white-space: nowrap; flex-shrink: 0; }
.ok-pts { color: #27ae60; }
.ko-pts { color: #C97B63; }

.email-box {
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  padding: 24px;
}
.email-box p { font-size: 15px; color: #333; margin: 0 0 14px; line-height: 1.5; }
.email-box input {
  width: 100%;
  padding: 14px 18px;
  font-size: 15px;
  font-family: 'DM Sans', Arial, sans-serif;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  outline: none;
  color: #000;
  box-sizing: border-box;
  margin-bottom: 12px;
  transition: border-color 0.2s;
}
.email-box input:focus { border-color: #C97B63; }
.btn-send {
  width: 100%;
  padding: 16px 25px;
  background: #C97B63;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'DM Sans', Arial, sans-serif;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-send:hover { background: #b97a63; }
.success-msg {
  display: none;
  text-align: center;
  padding: 20px;
  background: #f2faf5;
  border: 1.5px solid #b8e6c8;
  border-radius: 10px;
  font-size: 15px;
  color: #27ae60;
  font-weight: 500;
}
.btn-restart {
  background: none;
  border: none;
  color: #999;
  font-size: 13px;
  font-family: 'DM Sans', Arial, sans-serif;
  cursor: pointer;
  text-decoration: underline;
  text-align: center;
}
@media (max-width: 768px) {
  .gmb-audit h2 { font-size: 28px; }
  .sous-titre { font-size: 16px; }
  .score-big { font-size: 56px; }
  .score-msg { font-size: 17px; }
}
</style>

<div class="gmb-audit">

  <h2>
    Audite ta fiche <span style="color:#4285F4">G</span><span style="color:#EA4335">o</span><span style="color:#FBBC05">o</span><span style="color:#4285F4">g</span><span style="color:#34A853">l</span><span style="color:#EA4335">e</span> en direct
  </h2>
  <p class="sous-titre">
    On ouvre ensemble ta fiche, un onglet s'ouvre, reviens ici et réponds aux questions en la regardant.
  </p>

  <!-- RECHERCHE -->
  <div class="step-search" id="step-search">
    <input type="text" id="nom-entreprise" placeholder="nom de ton entreprise" />
    <input type="text" id="nom-ville" placeholder="ta ville (ex : Aix-en-Provence)" />
    <button class="btn-search" onclick="ouvrirFiche()">
      ouvrir ma fiche <span style="color:#4285F4">G</span><span style="color:#EA4335">o</span><span style="color:#FBBC05">o</span><span style="color:#4285F4">g</span><span style="color:#34A853">l</span><span style="color:#EA4335">e</span> →
    </button>
    <p class="search-hint">ta fiche s'ouvre dans un nouvel onglet — <span>garde les deux ouverts</span></p>
  </div>

  <!-- AUDIT -->
  <div class="audit-wrap" id="audit-wrap">

    <div class="fiche-ouverte-banner">
      📋 ta fiche est ouverte dans un autre onglet — réponds aux questions en la regardant.
      <a onclick="rouvrir()">rouvrir ma fiche</a>
    </div>

    <div class="progress-wrap">
      <span class="progress-label">score en cours</span>
      <div class="progress-bar"><div class="progress-fill" id="prog-fill"></div></div>
      <span class="progress-num" id="prog-num">0 / 100</span>
    </div>

    <!-- SECTION 1 -->
    <div class="section-title">🔐 les bases</div>

    <div class="audit-question" id="q1" data-max="10">
      <div class="q-top">
        <span class="q-label">ta fiche est-elle vérifiée par Google ? (coche verte sur ta fiche)</span>
        <span class="q-pts">10 pts</span>
      </div>
      <div class="oui-non">
        <button onclick="repondreOuiNon('q1', true, 10)">oui ✓</button>
        <button onclick="repondreOuiNon('q1', false, 0)">non ✗</button>
      </div>
    </div>

    <div class="audit-question" id="q2" data-max="5">
      <div class="q-top">
        <span class="q-label">ton nom d'entreprise est-il exact ? (sans mot-clé ajouté artificiellement)</span>
        <span class="q-pts">5 pts</span>
      </div>
      <div class="oui-non">
        <button onclick="repondreOuiNon('q2', true, 5)">oui ✓</button>
        <button onclick="repondreOuiNon('q2', false, 0)">non ✗</button>
      </div>
    </div>

    <div class="audit-question" id="q3" data-max="10">
      <div class="q-top">
        <span class="q-label">quelle est ta catégorie principale sur ta fiche ? (copie-la ici)</span>
        <span class="q-pts">10 pts</span>
      </div>
      <input class="q-input" id="q3-val" type="text" placeholder="ex : coach bien-être, plombier, boulangerie..." oninput="repondreTexte('q3', 'q3-val', 10)" />
    </div>

    <div class="audit-question" id="q4" data-max="5">
      <div class="q-top">
        <span class="q-label">ton adresse ou ta zone de service est-elle renseignée ?</span>
        <span class="q-pts">5 pts</span>
      </div>
      <div class="oui-non">
        <button onclick="repondreOuiNon('q4', true, 5)">oui ✓</button>
        <button onclick="repondreOuiNon('q4', false, 0)">non ✗</button>
      </div>
    </div>

    <div class="audit-question" id="q5" data-max="5">
      <div class="q-top">
        <span class="q-label">ton numéro de téléphone et ton site web sont-ils renseignés ?</span>
        <span class="q-pts">5 pts</span>
      </div>
      <div class="oui-non">
        <button onclick="repondreOuiNon('q5', true, 5)">oui ✓</button>
        <button onclick="repondreOuiNon('q5', false, 0)">non ✗</button>
      </div>
    </div>

    <!-- SECTION 2 -->
    <div class="section-title">✍️ le contenu</div>

    <div class="audit-question" id="q6" data-max="10">
      <div class="q-top">
        <span class="q-label">copie ta description Google ici — on vérifie si elle contient les bons mots</span>
        <span class="q-pts">10 pts</span>
      </div>
      <input class="q-input" id="q6-val" type="text" placeholder="copie ta description GMB ici..." oninput="repondreTexte('q6', 'q6-val', 10)" />
    </div>

    <div class="audit-question" id="q7" data-max="8">
      <div class="q-top">
        <span class="q-label">tu as des photos sur ta fiche ? (intérieur, équipe, réalisations...)</span>
        <span class="q-pts">8 pts</span>
      </div>
      <div class="oui-non">
        <button onclick="repondreOuiNon('q7', true, 8)">oui ✓</button>
        <button onclick="repondreOuiNon('q7', false, 0)">non ✗</button>
      </div>
    </div>

    <div class="audit-question" id="q8" data-max="5">
      <div class="q-top">
        <span class="q-label">tes horaires sont-ils complets et à jour ?</span>
        <span class="q-pts">5 pts</span>
      </div>
      <div class="oui-non">
        <button onclick="repondreOuiNon('q8', true, 5)">oui ✓</button>
        <button onclick="repondreOuiNon('q8', false, 0)">non ✗</button>
      </div>
    </div>

    <div class="audit-question" id="q9" data-max="7">
      <div class="q-top">
        <span class="q-label">tu publies des posts sur ta fiche au moins une fois par mois ?</span>
        <span class="q-pts">7 pts</span>
      </div>
      <div class="oui-non">
        <button onclick="repondreOuiNon('q9', true, 7)">oui ✓</button>
        <button onclick="repondreOuiNon('q9', false, 0)">non ✗</button>
      </div>
    </div>

    <!-- SECTION 3 -->
    <div class="section-title">⭐ la réputation</div>

    <div class="audit-question" id="q10" data-max="10">
      <div class="q-top">
        <span class="q-label">combien d'avis clients tu as sur ta fiche ?</span>
        <span class="q-pts">10 pts</span>
      </div>
      <div class="q-nombre">
        <input type="number" id="q10-val" min="0" placeholder="0" oninput="repondreNombre('q10', 'q10-val', [[0,0],[1,3],[4,6],[7,9],[10,10]])" />
        <span>avis — 10 pts si ≥ 10 avis</span>
      </div>
    </div>

    <div class="audit-question" id="q11" data-max="8">
      <div class="q-top">
        <span class="q-label">tu réponds à tous tes avis — bons comme mauvais ?</span>
        <span class="q-pts">8 pts</span>
      </div>
      <div class="oui-non">
        <button onclick="repondreOuiNon('q11', true, 8)">oui ✓</button>
        <button onclick="repondreOuiNon('q11', false, 0)">non ✗</button>
      </div>
    </div>

    <!-- SECTION 4 -->
    <div class="section-title">📝 le référencement</div>

    <div class="audit-question" id="q12" data-max="15">
      <div class="q-top">
        <span class="q-label">tu publies au moins 1 article de blog par mois sur ton site web ?</span>
        <span class="q-pts">15 pts</span>
      </div>
      <div class="oui-non">
        <button onclick="repondreOuiNon('q12', true, 15)">oui ✓</button>
        <button onclick="repondreOuiNon('q12', false, 0)">non ✗</button>
      </div>
    </div>

    <div class="audit-question" id="q13" data-max="2">
      <div class="q-top">
        <span class="q-label">les questions/réponses de ta fiche sont-elles remplies ?</span>
        <span class="q-pts">2 pts</span>
      </div>
      <div class="oui-non">
        <button onclick="repondreOuiNon('q13', true, 2)">oui ✓</button>
        <button onclick="repondreOuiNon('q13', false, 0)">non ✗</button>
      </div>
    </div>

    <button class="btn-resultat" onclick="afficherResultat()">
      voir mon diagnostic →
    </button>

  </div>

  <!-- RÉSULTAT -->
  <div class="result-wrap" id="result-wrap">

    <div class="result-score" id="result-score">
      <div class="score-big" id="score-big">0</div>
      <div class="score-sur">points sur 100</div>
      <div class="score-msg" id="score-msg"></div>
      <div class="score-detail" id="score-detail"></div>
    </div>

    <div class="points-faibles" id="points-faibles" style="display:none">
      <p class="pf-title">ce qui te fait perdre le plus de points :</p>
      <div id="pf-list"></div>
    </div>

    <div class="points-forts" id="points-forts" style="display:none">
      <p class="pf-title">tes points forts :</p>
      <div id="pts-list"></div>
    </div>

    <div class="email-box">
      <p>tu veux recevoir ton diagnostic complet et un audit gratuit de ta fiche <span style="color:#4285F4">G</span><span style="color:#EA4335">o</span><span style="color:#FBBC05">o</span><span style="color:#4285F4">g</span><span style="color:#34A853">l</span><span style="color:#EA4335">e</span> ?</p>
      <input type="email" id="email-input" placeholder="ton adresse mail" />
      <button class="btn-send" onclick="envoyerMail()">je veux mon audit gratuit →</button>
    </div>

    <div class="success-msg" id="success-msg">
      ✓ reçu ! je reviens vers toi très vite pour ton audit.
    </div>

    <button class="btn-restart" onclick="restart()">recommencer l'audit</button>

  </div>

</div>
`;

const WIDGET_SCRIPT = `
var scores = {};
var labels = {
  q1: 'fiche vérifiée par Google', q2: 'nom d\\'entreprise exact',
  q3: 'catégorie principale renseignée', q4: 'adresse/zone de service',
  q5: 'téléphone et site web', q6: 'description avec mots-clés',
  q7: 'photos sur la fiche', q8: 'horaires à jour',
  q9: 'posts réguliers sur la fiche', q10: 'avis clients (≥10)',
  q11: 'réponses aux avis', q12: 'articles de blog mensuels',
  q13: 'questions/réponses remplies'
};
var maxPts = { q1:10,q2:5,q3:10,q4:5,q5:5,q6:10,q7:8,q8:5,q9:7,q10:10,q11:8,q12:15,q13:2 };
var ficheUrl = '';

function ouvrirFiche() {
  var nom = document.getElementById('nom-entreprise').value.trim();
  var ville = document.getElementById('nom-ville').value.trim();
  if (!nom || !ville) { alert('indique le nom de ton entreprise et ta ville.'); return; }
  ficheUrl = 'https://www.google.com/maps/search/' + encodeURIComponent(nom + ' ' + ville);
  window.open(ficheUrl, '_blank');
  document.getElementById('step-search').style.display = 'none';
  document.getElementById('audit-wrap').classList.add('active');
  document.getElementById('audit-wrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function rouvrir() {
  if (ficheUrl) window.open(ficheUrl, '_blank');
}

function majScore() {
  var total = 0;
  Object.values(scores).forEach(function(v){ total += v; });
  document.getElementById('prog-fill').style.width = total + '%';
  document.getElementById('prog-num').textContent = total + ' / 100';
}

function repondreOuiNon(qid, oui, pts) {
  scores[qid] = oui ? pts : 0;
  var q = document.getElementById(qid);
  q.classList.remove('ok', 'ko');
  q.classList.add(oui ? 'ok' : 'ko');
  var btns = q.querySelectorAll('.oui-non button');
  btns[0].className = oui ? 'oui-sel' : '';
  btns[1].className = oui ? '' : 'non-sel';
  majScore();
}

function repondreTexte(qid, inputId, pts) {
  var val = document.getElementById(inputId).value.trim();
  var ok = val.length > 10;
  scores[qid] = ok ? pts : 0;
  var q = document.getElementById(qid);
  q.classList.remove('ok', 'ko');
  if (val.length > 0) q.classList.add(ok ? 'ok' : 'ko');
  majScore();
}

function repondreNombre(qid, inputId, seuils) {
  var val = parseInt(document.getElementById(inputId).value) || 0;
  var pts = 0;
  if (val >= 10) pts = 10;
  else if (val >= 7) pts = 7;
  else if (val >= 4) pts = 4;
  else if (val >= 1) pts = 2;
  scores[qid] = pts;
  var q = document.getElementById(qid);
  q.classList.remove('ok', 'ko');
  q.classList.add(pts > 0 ? 'ok' : 'ko');
  majScore();
}

function afficherResultat() {
  var total = 0;
  Object.values(scores).forEach(function(v){ total += v; });

  var box = document.getElementById('result-score');
  box.classList.remove('rouge','orange','jaune','vert');
  document.getElementById('score-big').textContent = total + '/100';

  var msg = document.getElementById('score-msg');
  var det = document.getElementById('score-detail');

  if (total <= 30) {
    box.classList.add('rouge');
    msg.textContent = 'ta fiche est quasi invisible sur Google.';
    det.textContent = 'tes clients te cherchent — et ne te trouvent pas. chaque jour sans action, c\\'est des opportunités perdues.';
  } else if (total <= 55) {
    box.classList.add('orange');
    msg.textContent = 'ta fiche existe, mais elle ne travaille pas vraiment pour toi.';
    det.textContent = 'il y a du potentiel — mais des points clés manquent. quelques ajustements bien ciblés changent tout.';
  } else if (total <= 80) {
    box.classList.add('jaune');
    msg.textContent = 'pas mal — mais tes concurrents peuvent encore te dépasser.';
    det.textContent = 'tu es sur la bonne voie. les points manquants sont souvent ceux qui font la vraie différence.';
  } else {
    box.classList.add('vert');
    msg.textContent = 'ta fiche est bien optimisée, bravo !';
    det.textContent = 'tu es sur la bonne voie. un audit complet peut révéler des opportunités encore inexploitées.';
  }

  var faibles = [], forts = [];
  Object.keys(maxPts).forEach(function(qid) {
    var got = scores[qid] || 0;
    var max = maxPts[qid];
    if (got < max) faibles.push({ label: labels[qid], perdu: max - got, max: max });
    else if (got === max && max >= 5) forts.push({ label: labels[qid], pts: max });
  });

  faibles.sort(function(a,b){ return b.perdu - a.perdu; });

  if (faibles.length > 0) {
    var pfList = document.getElementById('pf-list');
    pfList.innerHTML = '';
    faibles.slice(0,5).forEach(function(f) {
      pfList.innerHTML += '<div class="pf-item">✗ ' + f.label + '<span class="pf-pts ko-pts">−' + f.perdu + ' pts</span></div>';
    });
    document.getElementById('points-faibles').style.display = 'block';
  }

  if (forts.length > 0) {
    var ptsList = document.getElementById('pts-list');
    ptsList.innerHTML = '';
    forts.forEach(function(f) {
      ptsList.innerHTML += '<div class="pf-item">✓ ' + f.label + '<span class="pf-pts ok-pts">+' + f.pts + ' pts</span></div>';
    });
    document.getElementById('points-forts').style.display = 'block';
  }

  document.getElementById('audit-wrap').style.display = 'none';
  document.getElementById('result-wrap').classList.add('active');
  document.getElementById('result-wrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function envoyerMail() {
  var email = document.getElementById('email-input').value.trim();
  if (!email || !email.includes('@')) { alert('entre une adresse mail valide.'); return; }

  var total = 0;
  Object.values(scores).forEach(function(v){ total += v; });

  var details = [];
  Object.keys(maxPts).forEach(function(qid) {
    var got = scores[qid] || 0;
    details.push((got >= maxPts[qid] ? '✓' : '✗') + ' ' + labels[qid] + ' : ' + got + '/' + maxPts[qid] + ' pts');
  });

  var nom = document.getElementById('nom-entreprise') ? document.getElementById('nom-entreprise').value : '';
  var ville = document.getElementById('nom-ville') ? document.getElementById('nom-ville').value : '';

  var data = new FormData();
  data.append('email', email);
  data.append('_subject', 'Audit GMB — ' + nom + ' ' + ville + ' — score ' + total + '/100');
  data.append('entreprise', nom + ' ' + ville);
  data.append('score', total + '/100');
  data.append('details', details.join('\\n'));

  fetch('https://formspree.io/f/xojrpyyy', {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(function(r) {
    if (r.ok) {
      document.querySelector('.email-box').style.display = 'none';
      document.getElementById('success-msg').style.display = 'block';
    } else { alert('une erreur est survenue, réessaie.'); }
  }).catch(function() { alert('une erreur est survenue, réessaie.'); });
}

function restart() {
  scores = {};
  ficheUrl = '';
  document.getElementById('step-search').style.display = 'flex';
  document.getElementById('nom-entreprise').value = '';
  document.getElementById('nom-ville').value = '';
  document.getElementById('audit-wrap').classList.remove('active');
  document.getElementById('audit-wrap').style.display = '';
  document.getElementById('result-wrap').classList.remove('active');
  document.getElementById('points-faibles').style.display = 'none';
  document.getElementById('points-forts').style.display = 'none';
  document.querySelector('.email-box').style.display = 'block';
  document.getElementById('success-msg').style.display = 'none';
  document.getElementById('prog-fill').style.width = '0%';
  document.getElementById('prog-num').textContent = '0 / 100';
  document.querySelectorAll('.audit-question').forEach(function(q) {
    q.classList.remove('ok','ko');
    q.querySelectorAll('.oui-non button').forEach(function(b){ b.className=''; });
    q.querySelectorAll('.q-input, .q-nombre input').forEach(function(i){ i.value=''; });
  });
  document.getElementById('result-score').className = 'result-score';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.ouvrirFiche = ouvrirFiche;
window.rouvrir = rouvrir;
window.repondreOuiNon = repondreOuiNon;
window.repondreTexte = repondreTexte;
window.repondreNombre = repondreNombre;
window.afficherResultat = afficherResultat;
window.envoyerMail = envoyerMail;
window.restart = restart;
`;

export default function GmbAuditWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptInjected = useRef(false);

  useEffect(() => {
    if (scriptInjected.current) return;
    scriptInjected.current = true;
    const script = document.createElement("script");
    script.textContent = WIDGET_SCRIPT;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: WIDGET_HTML }} />
  );
}
