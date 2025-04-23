import { PrismaClient } from "@prisma/client";
import { seedSuperAdmin } from "./scripts/seed-admin";
import { seedSettings } from "./scripts/seed-settings";
import { seedServices } from "./scripts/seed-services";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting database seed process...");

  try {
    await seedSuperAdmin();
    await seedSettings();
    await seedServices();

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
main();
