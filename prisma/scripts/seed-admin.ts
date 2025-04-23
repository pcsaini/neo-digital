import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

/**
 * Script to seed a super admin user
 * Usage: npx ts-node scripts/seed-admin.ts
 */
export async function seedSuperAdmin() {
  try {
    const name = "Super Admin";
    const email = "info@neodgtl.com";
    const password = "12345678";

    console.log("Starting super admin creation...");

    const existingSuperAdmin = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (existingSuperAdmin) {
      console.log("Super admin already exists:");
      console.log(`Email: ${existingSuperAdmin.email}`);
      console.log("To new a new admin, please delete the existing one first.");
      return;
    }

    const hashedPassword = await hash(password, 10);

    await prisma.users.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    console.log(`Super admin created successfully:`);
  } catch (error) {
    console.error("Error creating super admin:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
