"use client";

export default function CategoryForm({
  category,
  action,
}: {
  category?: { id?: string; name?: string; slug?: string; color?: string; description?: string | null };
  action: (formData: FormData) => void;
}) {
  return (
    <form action={action} className="max-w-md space-y-4">
      {category?.id && <input type="hidden" name="id" value={category.id} />}
      <div>
        <label className="block text-sm font-semibold text-black">Nom</label>
        <input name="name" defaultValue={category?.name} required placeholder="ex: SEO Local" className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-black">Slug</label>
        <input name="slug" defaultValue={category?.slug} required placeholder="ex: seo-local" className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-black">Couleur</label>
        <input name="color" type="color" defaultValue={category?.color ?? "#A8874A"} className="mt-1 h-10 w-20 rounded border border-[#ddd]" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-black">Description</label>
        <textarea name="description" defaultValue={category?.description ?? ""} rows={2} className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold" />
      </div>
      <button type="submit" className="inline-block rounded-[5px] border-2 border-gold bg-gold px-8 py-3 text-sm font-medium text-white hover:border-[#b8952f] hover:bg-[#b8952f]">
        Enregistrer
      </button>
    </form>
  );
}
