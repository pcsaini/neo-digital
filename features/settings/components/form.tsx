"use client"

import {useState} from "react"
import {useRouter} from "next/navigation"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {Loader2} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Textarea} from "@/components/ui/textarea"
import {SettingFormValues, settingSchema} from "../types"
import {createSetting, updateSetting} from "../setting-actions"
import {toast} from "sonner"

interface SettingFormProps {
    initialData?: SettingFormValues & { id?: string }
    mode: "create" | "edit"
}

export function SettingForm({initialData, mode}: SettingFormProps) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const defaultValues: Partial<SettingFormValues> = {
        key: initialData?.key || "", value: initialData?.value || "",
    }

    const form = useForm<SettingFormValues>({
        resolver: zodResolver(settingSchema), defaultValues,
    })

    const onSubmit = async (data: SettingFormValues) => {
        try {
            setIsLoading(true)

            let result
            if (mode === "create") {
                result = await createSetting(data)
            } else if (mode === "edit" && initialData?.id) {
                result = await updateSetting(initialData.id, data)
            }

            if (!result?.success) {
                throw new Error(result?.error || "Operation failed")
            }

            toast(mode === "create" ? "Setting created successfully!" : "Setting updated successfully!")
            router.push("/admin/settings")
        } catch (error) {
            console.error(error)
            toast(error instanceof Error ? error.message : "Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (<Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="key"
                    render={({field}) => (<FormItem>
                            <FormLabel>Setting Key</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter setting key"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>)}
                />

                <FormField
                    control={form.control}
                    name="value"
                    render={({field}) => (<FormItem>
                            <FormLabel>Setting Value</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter setting value"
                                    className="min-h-32"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage/>
                        </FormItem>)}
                />

                <div className="flex items-center gap-x-2">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => router.push("/admin/settings")}
                        disabled={isLoading}
                    >
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
                        {mode === "create" ? "Create" : "Update"} Setting
                    </Button>
                </div>
            </form>
        </Form>)
}