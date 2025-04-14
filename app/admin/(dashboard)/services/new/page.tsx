import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {ServiceForm} from "@/features/services/components/service-form";

export const metadata = {
    title: "Create New Service",
}

export default function NewServicePage() {
    return (
        <div className="container mx-auto py-10">
            <Card>
                <CardHeader>
                    <CardTitle>Create New Service</CardTitle>
                </CardHeader>
                <CardContent>
                    <ServiceForm mode="create" />
                </CardContent>
            </Card>
        </div>
    )
}