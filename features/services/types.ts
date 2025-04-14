import { z } from "zod"

export const SERVICE_STATUS = {
    DRAFT: "draft",
    PUBLISHED: "published",
    ARCHIVED: "archived",
} as const

export type ServiceStatus = (typeof SERVICE_STATUS)[keyof typeof SERVICE_STATUS]

export const serviceSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
    description: z.string().min(10, { message: "Description must be at least 10 characters" }),
    keywords: z.array(z.string()).min(1, { message: "At least one keyword is required" }),
    content: z.string().min(20, { message: "Content must be at least 20 characters" }),
    image: z.string().optional(),
    status: z.enum([SERVICE_STATUS.DRAFT, SERVICE_STATUS.PUBLISHED, SERVICE_STATUS.ARCHIVED])
})

export type ServiceFormValues = z.infer<typeof serviceSchema>

export type Service = ServiceFormValues & {
    id: string
    createdAt: Date
    updatedAt: Date
}