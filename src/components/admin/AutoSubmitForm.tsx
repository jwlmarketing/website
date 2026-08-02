"use client";

import { useEffect, useRef } from "react";

export default function AutoSubmitForm({
  action,
}: {
  action: () => Promise<void>;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    formRef.current?.requestSubmit();
  }, []);

  return (
    <form ref={formRef} action={action}>
      <p className="mt-2 text-sm text-[#555]">Redirection vers Google…</p>
    </form>
  );
}
