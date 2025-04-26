"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { MEDIA_TYPE, ServiceFormValues } from "../types";

export async function createService(data: ServiceFormValues) {
  try {
    const mediaUrl = data.media?.url || data.image || "";
    const mediaType =
      data.media?.type ||
      (mediaUrl && (mediaUrl.includes(".json") || mediaUrl.endsWith("/lottie")))
        ? MEDIA_TYPE.LOTTIE
        : MEDIA_TYPE.IMAGE;

    const lottie =
      mediaType === MEDIA_TYPE.LOTTIE
        ? JSON.stringify({ url: mediaUrl, type: mediaType })
        : null;

    const service = await prisma.services.create({
      data: {
        name: data.name,
        description: data.description,
        keywords: data.keywords || [],
        content: data.content,
        image: mediaUrl,
        lottie: lottie,
        status: data.status,
        slug: data.name
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, ""),
      },
    });

    revalidatePath("/admin/services");

    return { success: true, data: service };
  } catch (error) {
    console.error("Error creating service:", error);
    return { success: false, error: "Failed to create service" };
  }
}

export async function getServicesList() {
  try {
    const services = await prisma.services.findMany({
      where: { status: "published" },
      select: {
        id: true,
        name: true,
      },
    });
    return { success: true, data: services };
  } catch (error) {
    console.error("Error fetching services:", error);
    return { success: false, error: "Failed to fetch services" };
  }
}

export async function getServices(options?: {
  status?: string;
  limit?: number;
  orderBy?: string;
  order?: "asc" | "desc";
}) {
  try {
    const services = await prisma.services.findMany({
      where: options?.status ? { status: options.status } : undefined,
      take: options?.limit,
      orderBy: { [options?.orderBy || "updatedAt"]: options?.order || "desc" },
    });

    return { success: true, data: services };
  } catch (error) {
    console.error("Error fetching services:", error);
    return { success: false, error: "Failed to fetch services" };
  }
}

export async function getServiceById(id: string) {
  try {
    const service = await prisma.services.findUnique({
      where: { id },
    });

    if (!service) {
      return { success: false, error: "Service not found" };
    }

    let media;
    if (service.lottie) {
      try {
        media = JSON.parse(service.lottie);
      } catch (e) {
        console.error("Error parsing lottie:", e);
      }
    }

    const enhancedService = {
      ...service,
      media:
        media ||
        (service.image
          ? {
              url: service.image,
              type:
                service.image.includes(".json") ||
                service.image.endsWith("/lottie")
                  ? MEDIA_TYPE.LOTTIE
                  : MEDIA_TYPE.IMAGE,
            }
          : undefined),
    };

    return { success: true, data: enhancedService };
  } catch (error) {
    console.error("Error fetching service:", error);
    return { success: false, error: "Failed to fetch service" };
  }
}

export async function updateService(id: string, data: ServiceFormValues) {
  try {
    const mediaUrl = data.media?.url || data.image || "";
    const mediaType =
      data.media?.type ||
      (mediaUrl && (mediaUrl.includes(".json") || mediaUrl.endsWith("/lottie")))
        ? MEDIA_TYPE.LOTTIE
        : MEDIA_TYPE.IMAGE;

    const lottie =
      mediaType === MEDIA_TYPE.LOTTIE
        ? JSON.stringify({ url: mediaUrl, type: mediaType })
        : null;

    const service = await prisma.services.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        keywords: data.keywords || [],
        content: data.content,
        image: mediaUrl,
        lottie: lottie,
        status: data.status,
      },
    });


    revalidatePath("/admin/services");
    revalidatePath(`/admin/services/${id}`);
    revalidatePath(`/admin/services/${id}/edit`);

    return { success: true, data: service };
  } catch (error) {
    console.error("Error updating service:", error);
    return { success: false, error: "Failed to update service" };
  }
}

export async function deleteService(id: string) {
  try {
    await prisma.services.delete({
      where: { id },
    });

    revalidatePath("/admin/services");
    return { success: true };
  } catch (error) {
    console.error("Error deleting service:", error);
    return { success: false, error: "Failed to delete service" };
  }
}
