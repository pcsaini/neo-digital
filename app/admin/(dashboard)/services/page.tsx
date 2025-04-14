
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {getServices} from "@/features/services/actions/service-actions";
import {ServicesList} from "@/features/services/components/services-list";
import {Service} from "@/features/services/types";

export const metadata = {
    title: "Services Management",
}

export default async function ServicesPage() {
    const result = await getServices()
    const services = result.success ? result.data as Service[] : [] as Service[]

    return (
        <div className="container mx-auto py-10">
            <Card>
                <CardHeader>
                    <CardTitle>Services Management</CardTitle>
                </CardHeader>
                <CardContent>
                    <ServicesList services={services} />
                </CardContent>
            </Card>
        </div>
    )
}