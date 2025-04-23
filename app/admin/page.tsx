import { redirect } from "next/navigation";

export default async function AdminPage() {
  // redirect to dashboard
  redirect("/admin/dashboard");
}
