import { z } from "zod";

export const SERVICE_STATUS = {
  DRAFT: "draft",
  PUBLISHED: "published",
  ARCHIVED: "archived",
} as const;

export type ServiceStatus =
  (typeof SERVICE_STATUS)[keyof typeof SERVICE_STATUS];

export const MEDIA_TYPE = {
  IMAGE: "image",
  LOTTIE: "lottie",
} as const;

export type MediaTypeValue = (typeof MEDIA_TYPE)[keyof typeof MEDIA_TYPE];

export const mediaSchema = z.object({
  url: z.string().min(1, "Media URL is required"),
  type: z.enum([MEDIA_TYPE.IMAGE, MEDIA_TYPE.LOTTIE]),
});

export const serviceSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  keywords: z.array(z.string()).min(1, "At least one keyword is required"),
  content: z.string().min(50, "Content must be at least 50 characters"),

  media: mediaSchema.optional(),

  image: z.string().optional(),

  status: z.enum([
    SERVICE_STATUS.DRAFT,
    SERVICE_STATUS.PUBLISHED,
    SERVICE_STATUS.ARCHIVED,
  ]),
});

export type MediaType = z.infer<typeof mediaSchema>;
export type ServiceFormValues = z.infer<typeof serviceSchema>;

export interface Service extends ServiceFormValues {
  id: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  lottie?: string | null;
}

export interface ServiceWithMedia extends Service {
  media?: MediaType;
}

export interface ServiceActionResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}
