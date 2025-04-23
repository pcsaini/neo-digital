import { z } from "zod";

export const settingSchema = z.object({
  key: z.string().min(1, "Key is required"),
  value: z.string().min(1, "Value is required"),
});

export type SettingFormValues = z.infer<typeof settingSchema>;

export interface Setting extends SettingFormValues {
  id: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface SettingActionResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}
