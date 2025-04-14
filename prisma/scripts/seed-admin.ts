import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

/**
 * Script to seed a super admin user
 * Usage: npx ts-node scripts/seed-admin.ts
 */
export async function seedSuperAdmin() {
    try {
        console.log("Starting super admin creation...");

        const existingSuperAdmin = await prisma.user.findFirst();

        if (existingSuperAdmin) {
            console.log("Super admin already exists:");
            console.log(`Email: ${existingSuperAdmin.email}`);
            console.log("To new a new admin, please delete the existing one first.");
            return;
        }

        const name = "Super Admin";
        const email = "admin@neodigital.com";
        const password = "12345678";

        const hashedPassword = await hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        console.log(`Super admin created successfully:`);
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
    } catch (error) {
        console.error("Error creating super admin:", error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}
