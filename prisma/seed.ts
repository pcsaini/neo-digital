import { PrismaClient } from "@prisma/client";
import {seedSuperAdmin} from "./scripts/seed-admin";

const prisma = new PrismaClient();


async function main() {
    console.log("Starting database seed process...");

    try {
        await seedSuperAdmin();

        console.log("Seed completed successfully");
    } catch (error) {
        console.error("Seed failed:", error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}
main()