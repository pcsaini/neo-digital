import { PrismaClient } from "@prisma/client";
import settings from "../data/settings.json";

const prisma = new PrismaClient();

/**
 * Script to seed a super admin user
 * Usage: npx ts-node scripts/seed-settings.ts
 */
export async function seedSettings() {
  try {
    for (const setting of settings) {
      await prisma.settings.upsert({
        where: { key: setting.key },
        update: setting,
        create: setting,
      });
    }

    console.log(`Settings seeded successfully:`);
  } catch (error) {
    console.error("Error seeding settings:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
