// app/actions/service-actions.ts
"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/prisma"
import { ServiceFormValues } from "../types"

export async function createService(data: ServiceFormValues) {
    try {
        const service = await prisma.service.create({
            data: {
                name: data.name,
                description: data.description,
                keywords: data.keywords,
                content: data.content,
                image: data.image,
                status: data.status,
            },
        })

        revalidatePath("/services")
        return { success: true, data: service }
    } catch (error) {
        console.error("Error creating service:", error)
        return { success: false, error: "Failed to create service" }
    }
}

export async function getServices(options?: { status?: string; limit?: number }) {
    try {
        const services = await prisma.service.findMany({
            where: options?.status ? { status: options.status } : undefined,
            take: options?.limit,
            orderBy: { updatedAt: "desc" },
        })

        return { success: true, data: services }
    } catch (error) {
        console.error("Error fetching services:", error)
        return { success: false, error: "Failed to fetch services" }
    }
}

export async function getServiceById(id: string) {
    try {
        const service = await prisma.service.findUnique({
            where: { id },
        })

        if (!service) {
            return { success: false, error: "Service not found" }
        }

        return { success: true, data: service }
    } catch (error) {
        console.error("Error fetching service:", error)
        return { success: false, error: "Failed to fetch service" }
    }
}

export async function updateService(id: string, data: ServiceFormValues) {
    try {
        const service = await prisma.service.update({
            where: { id },
            data: {
                name: data.name,
                description: data.description,
                keywords: data.keywords,
                content: data.content,
                image: data.image,
                status: data.status,
            },
        })

        revalidatePath("/services")
        revalidatePath(`/services/${id}`)
        return { success: true, data: service }
    } catch (error) {
        console.error("Error updating service:", error)
        return { success: false, error: "Failed to update service" }
    }
}

export async function deleteService(id: string) {
    try {
        await prisma.service.delete({
            where: { id },
        })

        revalidatePath("/services")
        return { success: true }
    } catch (error) {
        console.error("Error deleting service:", error)
        return { success: false, error: "Failed to delete service" }
    }
}