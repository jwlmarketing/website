import { redirect } from "next/navigation";
import { requireAdminUser } from "@/lib/jwlAuth";
import { getSettings } from "@/lib/blog";
import SettingsForm from "./SettingsForm";

export default async function SettingsPage() {
  const user = await requireAdminUser();
  if (!user) redirect("/admin/login");

  return <SettingsForm settings={getSettings()} />;
}
