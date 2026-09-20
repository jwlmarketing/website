"use client";

import { useState } from "react";
import Modal from "@/components/Modal";

const ROWS: { label: string; values: [string, string, string] }[] = [
  { label: "Site web", values: ["✅", "✅", "✅"] },
  { label: "Pages SEO", values: ["3", "5", "6"] },
  {
    label: "Blog",
    values: ["❌", "Intégration d'un blog", "+ 1 article par mois"],
  },
  {
    label: "GBP",
    values: ["Conseils", "Gestion partielle", "Gestion complète"],
  },
  {
    label: "RDV",
    values: ["Trimestriel", "Mensuel", "Mensuel prioritaire"],
  },
];

export default function ComparisonTableCta() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full bg-[#c9846f] px-8 py-[15px] text-center font-semibold text-white transition-colors hover:bg-[#b8735f]"
        >
          Comparer les offres en détail
        </button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h3 className="mb-6 text-center font-heading text-2xl text-black">
          Comparatif des offres
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-[#eee] pb-3 pr-4 font-medium text-black/60" />
                <th className="border-b border-[#eee] px-4 pb-3 text-center font-heading text-base text-black">
                  Start
                </th>
                <th className="border-b border-[#eee] px-4 pb-3 text-center font-heading text-base text-black">
                  Perform
                </th>
                <th className="border-b border-[#eee] px-4 pb-3 text-center font-heading text-base text-black">
                  Master
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label}>
                  <td className="border-b border-[#eee] py-3 pr-4 font-semibold text-black">
                    {row.label}
                  </td>
                  {row.values.map((value, i) => (
                    <td
                      key={i}
                      className="border-b border-[#eee] px-4 py-3 text-center text-black/80"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
}
