import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

/**
 * Gets the current authenticated user with their role and organization details
 * Use this in server components and server actions
 */
export async function getCurrentUser() {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error) {
    console.error("Error fetching session:", error);
    return null;
  }
}
