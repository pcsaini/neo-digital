import { PrismaClient } from "@prisma/client";
import services from "../data/services.json";

const prisma = new PrismaClient();

/**
 * Script to seed services
 * Usage: npx ts-node scripts/seed-services.ts
 */
export async function seedServices() {
  try {
    for (const service of services) {
      await prisma.services.upsert({
        where: { slug: service.slug },
        update: service,
        create: service,
      });
    }

    console.log(`Services seeded successfully:`);
  } catch (error) {
    console.error("Error seeding services:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
