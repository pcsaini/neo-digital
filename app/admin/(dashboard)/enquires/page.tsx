import { Metadata } from "next";
import { EnquiresList } from "@/features/enquires/components/list";

export const metadata: Metadata = {
  title: "Enquires | Admin",
  description: "Manage application enquires",
};

export default async function EnquiresPage() {
  return (
    <div className="container py-10">
      <EnquiresList />
    </div>
  );
}
