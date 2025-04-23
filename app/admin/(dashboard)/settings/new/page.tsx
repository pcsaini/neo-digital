import { Metadata } from "next"
import { SettingForm } from "@/features/settings/components/form"

export const metadata: Metadata = {
    title: "Create Setting | Admin",
    description: "Create a new application setting",
}

export default function NewSettingPage() {
    return (
        <div className="container py-10">
            <div className="mb-8">
                <h1 className="text-2xl font-bold">Create New Setting</h1>
                <p className="text-muted-foreground">
                    Add a new configuration setting to the application
                </p>
            </div>
            <div className="max-w-2xl">
                <SettingForm mode="create" />
            </div>
        </div>
    )
}