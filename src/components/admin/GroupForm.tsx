"use client";

export default function GroupForm({
  group,
  action,
}: {
  group?: { id?: string; name?: string; slug?: string };
  action: (formData: FormData) => void;
}) {
  return (
    <form action={action} className="max-w-md space-y-4">
      {group?.id && <input type="hidden" name="id" value={group.id} />}
      <div>
        <label className="block text-sm font-semibold text-black">Nom du groupe</label>
        <input
          name="name"
          defaultValue={group?.name}
          required
          placeholder="ex: Services"
          className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-black">Slug (identifiant technique)</label>
        <input
          name="slug"
          defaultValue={group?.slug}
          required
          placeholder="ex: services"
          className="mt-1 w-full rounded border border-[#ddd] px-4 py-2.5 text-sm outline-none focus:border-gold"
        />
      </div>
      <button
        type="submit"
        className="inline-block rounded-[5px] border-2 border-gold bg-gold px-8 py-3 text-sm font-medium text-white hover:border-[#b8952f] hover:bg-[#b8952f]"
      >
        Enregistrer
      </button>
    </form>
  );
}
