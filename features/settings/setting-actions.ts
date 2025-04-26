"use server";

import { prisma } from "@/lib/prisma";
import { SettingActionResponse, Setting, SettingFormValues } from "./types";

export async function getSettings(): Promise<SettingActionResponse<Setting[]>> {
  try {
    const settings = await prisma.settings.findMany({
      orderBy: { key: "asc" },
    });

    return { success: true, data: settings };
  } catch (error) {
    console.error("Error fetching settings:", error);
    return {
      success: false,
      error: "Failed to fetch settings",
    };
  }
}

export async function getSystemSetting(): Promise<
  SettingActionResponse<Record<string, string>>
> {
  try {
    const settings = await prisma.settings.findMany({
      orderBy: { key: "asc" },
    });

    const settingsObject = settings.reduce(
      (acc: Record<string, string>, curr: Setting) => {
        acc[curr.key] = curr.value;
        return acc;
      },
      {} as Record<string, string>
    );

    return { success: true, data: settingsObject };
  } catch (error) {
    console.error("Error fetching settings:", error);
    return {
      success: false,
      error: "Failed to fetch settings",
    };
  }
}

// Update settings (Update multiple rows)
export async function updateSettings(
  settings: SettingFormValues[]
): Promise<SettingActionResponse<void>> {
  try {
    for (const setting of settings) {
      if (!setting.key || !setting.value) {
        continue;
      }
      await prisma.settings.upsert({
        where: { key: setting.key },
        update: { value: setting.value },
        create: { key: setting.key, value: setting.value },
      });
    }
    return { success: true };
  } catch (error) {
    console.error("Error updating settings:", error);
    return {
      success: false,
      error: "Failed to update settings",
    };
  }
}
