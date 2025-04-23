import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServiceById } from "@/features/services/actions/service-actions";
import { ServiceForm } from "@/features/services/components/service-form";

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = await getServiceById(id);

  if (!result.success || !result.data) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Edit Service: {result.data.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ServiceForm mode="edit" initialData={result.data as any} />
        </CardContent>
      </Card>
    </div>
  );
}
