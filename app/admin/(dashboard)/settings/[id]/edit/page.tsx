import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SettingForm } from "@/features/settings/components/form";
import { getSettings } from "@/features/settings/setting-actions";

export const metadata: Metadata = {
  title: "Edit Setting | Admin",
  description: "Edit an existing application setting",
};

export default async function EditSettingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = await getSettings();

  if (!result.success) {
    throw new Error(result.error || "Failed to fetch setting");
  }

  const setting = result.data?.find((s) => s.id === id);

  if (!setting) {
    notFound();
  }

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Edit Setting</h1>
        <p className="text-muted-foreground">
          Update the setting with key:{" "}
          <span className="font-medium">{setting.key}</span>
        </p>
      </div>
      <div className="max-w-2xl">
        <SettingForm mode="edit" initialData={setting} />
      </div>
    </div>
  );
}
