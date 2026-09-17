export default function PriceRow({
  title,
  desc,
  price,
  from = true,
  free = false,
  note,
}: {
  title: string;
  desc: string;
  price: string;
  from?: boolean;
  free?: boolean;
  note?: string;
}) {
  return (
    <div className="mb-4 grid items-center gap-5 rounded-md border border-gold bg-white p-7 sm:grid-cols-[1fr_auto]">
      <div>
        <h4 className="font-heading text-lg font-bold text-gold">{title}</h4>
        <p className="mt-1.5 text-sm text-[#6b6862]">{desc}</p>
        {note && <p className="mt-1.5 text-sm text-[#6b6862]">{note}</p>}
      </div>
      <div className={`text-right font-heading text-xl font-semibold whitespace-nowrap ${free ? "text-[#C97B63]" : "text-black"}`}>
        {from && (
          <span className="block text-[11px] font-sans font-bold uppercase tracking-wide text-[#C97B63]">
            À partir de
          </span>
        )}
        {price}
      </div>
    </div>
  );
}
