import { Metadata } from "next";
import { EnquiresList } from "@/features/enquires/components/list";
import { enquiryGetAll } from "@/features/enquires/actions/enquiry-action";

export const metadata: Metadata = {
  title: "Enquires | Admin",
  description: "Manage application enquires",
};

export default async function EnquiresPage() {
  const result = await enquiryGetAll();
  const enquires = result.success ? (result.data as any[]) : ([] as any[]);
  return (
    <div className="container py-10">
      <EnquiresList enquires={enquires} />
    </div>
  );
}
