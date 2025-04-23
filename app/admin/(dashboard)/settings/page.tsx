import { Metadata } from "next";
import { getSettings } from "@/features/settings/setting-actions";
import { SettingsList } from "@/features/settings/components/list";

export const metadata: Metadata = {
  title: "Settings | Admin",
  description: "Manage application settings",
};

export default async function SettingsPage() {
  const result = await getSettings();
  const settings = result.success ? result.data || [] : [];

  return (
    <div className="container py-10">
      <SettingsList settings={settings} />
    </div>
  );
}
