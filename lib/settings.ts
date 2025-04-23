import { Setting } from "@/features/settings/types";
import { prisma } from "@/lib/prisma";

let cachedSettings: Record<string, string> | null = null;
let lastFetched = 0;
const CACHE_TTL = 60 * 1000; // 1 minute

export async function getCachedSettings() {
  const now = Date.now();
  if (cachedSettings && now - lastFetched < CACHE_TTL) {
    return cachedSettings;
  }

  const settingsArray = await prisma.settings.findMany();
  cachedSettings = settingsArray.reduce(
    (acc: Record<string, string>, setting: Setting) => {
      acc[setting.key] = setting.value;
      return acc;
    },
    {} as Record<string, string>
  );
  lastFetched = now;
  return cachedSettings;
}

export async function getSettingValue(key: string) {
  const settings = await getCachedSettings();
  return settings?.[key] || "";
}
