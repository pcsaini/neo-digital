"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { SettingFormValues, SettingActionResponse, Setting } from "./types";

export async function createSetting(
  data: SettingFormValues
): Promise<SettingActionResponse<Setting>> {
  try {
    const existingSetting = await prisma.settings.findUnique({
      where: { key: data.key },
    });

    if (existingSetting) {
      return {
        success: false,
        error: `Setting with key "${data.key}" already exists`,
      };
    }

    const setting = await prisma.settings.create({
      data: {
        key: data.key,
        value: data.value,
      },
    });

    revalidatePath("/admin/settings");
    return { success: true, data: setting };
  } catch (error) {
    console.error("Error creating setting:", error);
    return {
      success: false,
      error: "Failed to create setting",
    };
  }
}

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

export async function getSettingByKey(
  key: string
): Promise<SettingActionResponse<Setting>> {
  try {
    const setting = await prisma.settings.findUnique({
      where: { key },
    });

    if (!setting) {
      return {
        success: false,
        error: "Setting not found",
      };
    }

    return { success: true, data: setting };
  } catch (error) {
    console.error("Error fetching setting:", error);
    return {
      success: false,
      error: "Failed to fetch setting",
    };
  }
}

export async function updateSetting(
  id: string,
  data: SettingFormValues
): Promise<SettingActionResponse<Setting>> {
  try {
    if (data.key) {
      const existingSetting = await prisma.settings.findFirst({
        where: {
          key: data.key,
          NOT: {
            id,
          },
        },
      });

      if (existingSetting) {
        return {
          success: false,
          error: `Setting with key "${data.key}" already exists`,
        };
      }
    }

    const setting = await prisma.settings.update({
      where: { id },
      data: {
        key: data.key,
        value: data.value,
      },
    });

    revalidatePath("/admin/settings");
    return { success: true, data: setting };
  } catch (error) {
    console.error("Error updating setting:", error);
    return {
      success: false,
      error: "Failed to update setting",
    };
  }
}

export async function deleteSetting(
  id: string
): Promise<SettingActionResponse<void>> {
  try {
    await prisma.settings.delete({
      where: { id },
    });

    revalidatePath("/admin/settings");
    return { success: true };
  } catch (error) {
    console.error("Error deleting setting:", error);
    return {
      success: false,
      error: "Failed to delete setting",
    };
  }
}

export async function getSettingValue(
  key: string,
  defaultValue: string = ""
): Promise<string> {
  try {
    const setting = await prisma.settings.findUnique({
      where: { key },
      select: { value: true },
    });

    return setting ? setting.value : defaultValue;
  } catch (error) {
    console.error(`Error fetching setting value for key "${key}":`, error);
    return defaultValue;
  }
}

export async function setSettingValue(
  key: string,
  value: string
): Promise<SettingActionResponse<Setting>> {
  try {
    const existingSetting = await prisma.settings.findUnique({
      where: { key },
    });

    let setting;

    if (existingSetting) {
      setting = await prisma.settings.update({
        where: { key },
        data: { value },
      });
    } else {
      setting = await prisma.settings.create({
        data: { key, value },
      });
    }

    revalidatePath("/admin/settings");
    return { success: true, data: setting };
  } catch (error) {
    console.error(`Error setting value for key "${key}":`, error);
    return {
      success: false,
      error: "Failed to update setting value",
    };
  }
}
