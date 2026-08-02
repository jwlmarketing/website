"use client";

import { useState } from "react";

const QUESTIONS = [
  { id: "verified", label: "Ta fiche est-elle vérifiée par Google ? (coche verte)", pts: 10 },
  { id: "name", label: "Ton nom d'entreprise est-il exact ? (sans mot-clé ajouté artificiellement)", pts: 5 },
  { id: "address", label: "Ton adresse ou ta zone de service est-elle renseignée ?", pts: 5 },
  { id: "contact", label: "Ton numéro de téléphone et ton site web sont-ils renseignés ?", pts: 5 },
  { id: "photos", label: "As-tu des photos sur ta fiche ? (intérieur, équipe, réalisations...)", pts: 8 },
  { id: "hours", label: "Tes horaires sont-ils complets et à jour ?", pts: 5 },
  { id: "posts", label: "Publies-tu des posts sur ta fiche au moins une fois par mois ?", pts: 7 },
  { id: "reviewsReply", label: "Réponds-tu à tous tes avis — bons comme mauvais ?", pts: 8 },
  { id: "blog", label: "Publies-tu au moins 1 article de blog par mois sur ton site web ?", pts: 15 },
  { id: "qa", label: "Les questions/réponses de ta fiche sont-elles remplies ?", pts: 2 },
];

export default function GmbAuditQuiz() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const score = QUESTIONS.reduce(
    (sum, q) => sum + (answers[q.id] ? q.pts : 0),
    0
  );

  return (
    <div className="mx-auto max-w-[700px] rounded-2xl border border-gold bg-white p-8">
      <p className="text-center font-heading text-lg font-semibold text-black">
        Audite ta fiche Google en quelques clics
      </p>
      <p className="mt-1 text-center text-sm text-[#888]">
        Coche ce qui est vrai pour ta fiche.
      </p>

      <div className="mt-6 space-y-3">
        {QUESTIONS.map((q) => (
          <label
            key={q.id}
            className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-neutral-100 px-4 py-3 text-sm hover:border-gold"
          >
            <span className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={!!answers[q.id]}
                onChange={(e) =>
                  setAnswers((a) => ({ ...a, [q.id]: e.target.checked }))
                }
                className="h-4 w-4 accent-[#c9a84c]"
              />
              {q.label}
            </span>
            <span className="shrink-0 text-xs font-semibold text-gold">
              {q.pts} pts
            </span>
          </label>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="font-heading text-4xl font-bold text-gold">
          {score} <span className="text-lg text-[#888]">/ 100</span>
        </p>
        <p className="mt-1 text-sm text-[#555]">
          {score < 40
            ? "Ta fiche a un vrai potentiel inexploité."
            : score < 75
            ? "Bonne base, mais il reste des points à optimiser."
            : "Belle fiche ! Quelques réglages fins pour aller plus loin."}
        </p>
      </div>
    </div>
  );
}
