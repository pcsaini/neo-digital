import { redirect } from "next/navigation";
import LoginForm from "@/features/auth/components/login";
import { auth } from "@/auth";
import { Metadata } from "next";
import { GalleryVerticalEnd } from "lucide-react";

export const metadata: Metadata = {
  title: "Login | NEO DIGITAL",
  description: "Login",
};
export default async function SignInPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/admin/dashboard");
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a
          href="#"
          className="flex items-center gap-2 self-center font-medium text-primary"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          NEO DIGITAL
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
