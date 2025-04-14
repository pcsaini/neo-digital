import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServiceById } from "@/features/services/actions/service-actions";
import { ServiceForm } from "@/features/services/components/service-form";

interface EditServicePageProps {
  params: {
    id: string;
  };
}

export default async function EditServicePage({
  params,
}: EditServicePageProps) {
  const result = await getServiceById(params.id);

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
          {/* <ServiceForm mode="edit" initialData={result.data} /> */}
        </CardContent>
      </Card>
    </div>
  );
}
