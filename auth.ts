import NextAuth, { DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User {
    id?: string;
  }
}
//
// declare module "next-auth/jwt" {
//     interface JWT {
//         id: string;
//     }
// }

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/admin/auth/signin",
    error: "/admin/auth/error",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id!;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id as string,
        };
      }
      return session;
    },
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const userEmail = credentials.email as string;
          console.log("userEmail", userEmail);
          const user = await prisma.user.findUnique({
            where: {
              email: userEmail,
            },
          });

          if (!user) {
            return null;
          }

          const isPasswordValid = await compare(
            credentials.password as string,
            user.password
          );

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  trustHost: true,
});
