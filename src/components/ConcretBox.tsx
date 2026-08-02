export default function ConcretBox({
  title = "Tu repars avec",
  items,
  note,
}: {
  title?: string;
  items: string[];
  note?: string;
}) {
  return (
    <div className="relative mx-auto mt-6 max-w-[900px] overflow-hidden rounded-[10px] border border-[#3C6E52]/25 bg-[#EAF2EC] p-9 shadow-[0_2px_20px_rgba(60,110,82,0.08)] before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:bg-gold before:opacity-60 before:content-['']">
      <span className="inline-block rounded-full bg-[#3C6E52] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[2.5px] text-white">
        Concret
      </span>
      <p className="mt-3 font-heading text-lg font-semibold text-black">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-[#333]">
            <span className="text-[#3C6E52]">✓</span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
      {note && (
        <p className="mt-4 text-xs leading-relaxed text-[#6b6862]">
          <strong>★ Hors prestation :</strong> {note}
        </p>
      )}
    </div>
  );
}
