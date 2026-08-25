"use client";

import { useEffect } from "react";

const HTML = `
<style>
.guarantees-section {
  font-family:'Poppins', sans-serif;
  box-sizing:border-box;
  background:transparent;
}

.guarantees-columns {
  max-width:1200px;
  margin:0 auto;
  display:flex;
  gap:40px;
  align-items:stretch;
}

.guarantees-wrap {
  flex:1;
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  gap:22px;
  align-items:stretch;
}

.guarantees-photo {
  flex:0 0 40%;
  display:flex;
  align-items:center;
}

.guarantees-photo img {
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:16px;
  display:block;
}

@media (max-width:900px) {
  .guarantees-columns {
    flex-direction:column;
  }
  .guarantees-photo {
    flex:none;
    order:-1;
    max-height:400px;
  }
}

@media (max-width:600px) {
  .guarantees-wrap {
    grid-template-columns:1fr;
  }
}

.jwl-id-card {
  font-family:'Poppins', Arial, sans-serif;
  background:#141414;
  border:1px solid #2a2a2a;
  border-radius:16px;
  padding:32px 24px;
  box-sizing:border-box;
  text-align:center;
  transition:border-color .3s ease, transform .3s ease;
}

.jwl-id-card:hover {
  border-color:#C9A84C;
  transform:translateY(-6px);
}

.jwl-id-card h3 {
  font-family:'Playfair Display', serif;
  font-size:22px;
  font-weight:600;
  color:#ffffff;
  margin:0 0 20px 0;
  line-height:1.25;
}

.jwl-id-card .card-icon {
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0 auto 20px auto;
}

.jwl-id-card .card-desc {
  font-size:14px;
  color:#bbbbbb;
  line-height:1.6;
  margin:0;
  text-align:left;
}

.jwl-id-card ul {
  list-style:none;
  margin:0;
  padding:0;
  text-align:left;
}

.jwl-id-card ul li {
  display:flex;
  align-items:flex-start;
  gap:10px;
  font-size:13px;
  color:#dddddd;
  line-height:1.5;
  margin-bottom:10px;
}

.jwl-id-card ul li:last-child {
  margin-bottom:0;
}

.jwl-id-card ul .id-check {
  flex-shrink:0;
  width:20px;
  height:20px;
  border-radius:50%;
  background:rgba(201,168,76,0.18);
  display:flex;
  align-items:center;
  justify-content:center;
  color:#C9A84C;
  font-weight:700;
  font-size:11px;
  margin-top:1px;
}

.jwl-id-card,
.guarantees-photo img {
  opacity:0;
  transform:translateY(24px);
}

.jwl-id-card.anim {
  animation:jwlFadeUp .6s ease forwards;
}

.jwl-id-card.anim:nth-child(1) { animation-delay:0s; }
.jwl-id-card.anim:nth-child(2) { animation-delay:.15s; }
.jwl-id-card.anim:nth-child(3) { animation-delay:.3s; }
.jwl-id-card.anim:nth-child(4) { animation-delay:.45s; }

.guarantees-photo img.anim {
  animation:jwlFadeIn .9s ease forwards;
  animation-delay:.2s;
  transform:none;
}

@keyframes jwlFadeUp {
  from { opacity:0; transform:translateY(24px); }
  to { opacity:1; transform:translateY(0); }
}

@keyframes jwlFadeIn {
  from { opacity:0; }
  to { opacity:1; }
}

.guarantees-cta {
  text-align:center;
  margin-top:28px;
}
.guarantees-cta a {
  display:inline-block;
  border-radius:5px;
  background:#C9A84C;
  color:#fff;
  padding:12px 32px;
  font-weight:500;
  text-decoration:none;
  font-family:'Poppins', sans-serif;
  transition:background-color .2s ease;
}
.guarantees-cta a:hover {
  background:#b8952f;
}
</style>

<div class="guarantees-section">

  <div class="guarantees-columns">

    <div class="guarantees-wrap">

      <!-- UNE SEULE INTERLOCUTRICE -->
      <div class="jwl-id-card">
        <h3>Une seule<br>interlocutrice</h3>
        <div class="card-icon">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="#C9A84C">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </div>
        <p class="card-desc" style="text-align:center;">
          En tant que consultante SEO et développeuse commerciale indépendante, je pilote personnellement chaque mission afin de garantir un accompagnement réactif, cohérent et transparent.
        </p>
      </div>

      <!-- DES ECHANGES RAPIDES -->
      <div class="jwl-id-card">
        <h3>Des échanges<br>rapides</h3>
        <div class="card-icon">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="#25D366">
            <path d="M12.01 2C6.49 2 2 6.48 2 12c0 1.77.46 3.45 1.28 4.93L2 22l5.2-1.36A9.9 9.9 0 0 0 12.01 22C17.53 22 22 17.52 22 12S17.53 2 12.01 2zm0 18.06c-1.6 0-3.14-.43-4.48-1.24l-.32-.19-3.09.81.83-3.01-.21-.31A8.06 8.06 0 0 1 3.94 12c0-4.45 3.62-8.06 8.07-8.06 4.45 0 8.06 3.61 8.06 8.06 0 4.45-3.61 8.06-8.06 8.06zm4.42-6.03c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.11-.22-.17-.46-.29z"/>
          </svg>
        </div>
        <p class="card-desc" style="text-align:center;">
          Profite d'un contact direct pour poser tes questions, suivre ton projet et obtenir des réponses rapides lorsque tu en as besoin.
        </p>
      </div>

      <!-- UN ESPACE SECURISE -->
      <div class="jwl-id-card" style="text-align:center;">
        <h3 style="text-align:center;">Un espace sécurisé.</h3>
        <ul>
          <li><span class="id-check">1</span><span>Suis l'avancement de tes projets en temps réel</span></li>
          <li><span class="id-check">2</span><span>Consulte tes audits SEO et documents importants</span></li>
          <li><span class="id-check">3</span><span>Accède à tes devis, contrats et factures</span></li>
          <li><span class="id-check">4</span><span>Retrouve tes statistiques Google Analytics et Search Console</span></li>
          <li><span class="id-check">5</span><span>Visualise le suivi de tes mots-clés</span></li>
          <li><span class="id-check">6</span><span>Échange directement avec ton interlocuteur via une messagerie intégrée</span></li>
          <li><span class="id-check">7</span><span>Consulte tes rendez-vous et planifie de nouveaux échanges</span></li>
          <li><span class="id-check">8</span><span>Télécharge l'application pour accéder à tes données partout</span></li>
          <li><span class="id-check">9</span><span>Bénéficie d'un accès sécurisé avec double authentification sur le Play Store</span></li>
        </ul>
      </div>

      <!-- UNE APPLICATION -->
      <div class="jwl-id-card" style="text-align:center;">
        <h3 style="text-align:center;">Une application.</h3>
        <img src="/images/jwl-intranet-playstore.png" alt="JWL Intranet sur le Play Store" style="width:100%;border-radius:14px;display:block;margin-bottom:20px;">
        <p class="card-desc">
          Retrouve tes statistiques Google, tes documents, tes rendez-vous et le suivi de ton activité. Accessible depuis ton intranet client ou en téléchargeant l'application JWL MARKETING sur le Play Store.
        </p>
      </div>

    </div>

    <div class="guarantees-photo">
      <img src="/images/jodie-marketing-digital-seo.png" alt="Jodie Lapaillerie - JWL Marketing">
    </div>

  </div>

  <div class="guarantees-cta">
    <a href="/consultant-seo-aix-en-provence">Qui suis je ?</a>
  </div>

</div>
`;

const SCRIPT = `
(function(){
  var cards = document.querySelectorAll('.jwl-id-card');
  var photo = document.querySelector('.guarantees-photo img');

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('anim');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(function(card){ observer.observe(card); });
  if (photo) observer.observe(photo);
})();
`;

export default function GuaranteesCards() {
  useEffect(() => {
    const script = document.createElement("script");
    script.textContent = SCRIPT;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: HTML }} />;
}
