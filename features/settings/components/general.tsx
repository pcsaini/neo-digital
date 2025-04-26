// GeneralSettings.jsx
"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import LogoUpload from "@/components/logo-upload";
import { updateSettings } from "@/features/settings/setting-actions";
import { log } from "console";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface Setting {
  key: string;
  value: string;
}

// Define schema for general tab
const generalSchema = z.object({
  site_name: z.string().min(1, "Site name is required"),
  site_description: z
    .string()
    .min(10, "Description must be at least 10 characters"),
  site_keywords: z.string(),
  site_logo: z.string().min(1, "Logo path is required"),
  site_favicon: z.string().min(1, "Favicon path is required"),
});

export default function GeneralSettings({
  setting,
}: {
  setting: Record<string, string>;
}) {
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [faviconFile, setFaviconFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  // Define form with default values
  const generalForm = useForm({
    resolver: zodResolver(generalSchema),
    defaultValues: {
      site_name: setting.site_name,
      site_description: setting.site_description ?? "",
      site_keywords: setting.site_keywords ?? "",
      site_logo: setting.site_logo ?? "",
      site_favicon: setting.site_favicon ?? "",
    },
  });

  // Upload images and return their paths
  const uploadImages = async () => {
    const uploadPromises = [];
    let logoPath = generalForm.getValues("site_logo");
    let faviconPath = generalForm.getValues("site_favicon");

    if (logoFile) {
      // Create form data for logo upload
      const logoFormData = new FormData();
      logoFormData.append("file", logoFile);
      logoFormData.append("type", "image");

      // Upload logo
      const logoUploadPromise = fetch("/api/upload", {
        method: "POST",
        body: logoFormData,
      })
        .then((res) => res.json())
        .then((data) => {
          logoPath = data.url;
          return data.url;
        });

      uploadPromises.push(logoUploadPromise);
    }

    if (faviconFile) {
      // Create form data for favicon upload
      const faviconFormData = new FormData();
      faviconFormData.append("file", faviconFile);
      faviconFormData.append("type", "image");

      // Upload favicon
      const faviconUploadPromise = fetch("/api/upload", {
        method: "POST",
        body: faviconFormData,
      })
        .then((res) => res.json())
        .then((data) => {
          faviconPath = data.url;
          return data.url;
        });

      uploadPromises.push(faviconUploadPromise);
    }

    if (uploadPromises.length > 0) {
      await Promise.all(uploadPromises);
    }

    return { logoPath, faviconPath };
  };

  // Handle general settings form submission
  const onGeneralSubmit = async (data: z.infer<typeof generalSchema>) => {
    try {
      setLoading(true);
      // First upload images if new files were selected
      const { logoPath, faviconPath } = await uploadImages();

      // Update paths with the newly uploaded ones
      const updatedData = {
        ...data,
        site_logo: logoPath,
        site_favicon: faviconPath,
      };

      const settingsToUpdate = Object.entries(updatedData).map(
        ([key, value]) => ({
          key,
          value,
        })
      ) as Setting[];

      // Update settings
      await updateSettings(settingsToUpdate);

      toast("General settings updated successfully");
      // Clear file references after successful upload
      setLogoFile(null);
      setFaviconFile(null);
    } catch (error) {
      console.error(error);
      toast("Failed to update general settings");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...generalForm}>
      <form onSubmit={generalForm.handleSubmit(onGeneralSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>General Information</CardTitle>
            <CardDescription>
              Manage your website's basic information and appearance.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={generalForm.control}
              name="site_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={generalForm.control}
              name="site_description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={3} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={generalForm.control}
              name="site_keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keywords (comma separated)</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={2} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Logo Upload & Preview */}
            <FormField
              control={generalForm.control}
              name="site_logo"
              render={({ field }) => (
                <FormItem>
                  <LogoUpload
                    title="Logo"
                    onChange={(img) => {
                      setLogoFile(img);
                    }}
                    value={field.value}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Favicon Upload & Preview */}
            <div className="flex flex-col gap-4">
              <FormField
                control={generalForm.control}
                name="site_favicon"
                render={({ field }) => (
                  <FormItem>
                    <LogoUpload
                      title="Favicon"
                      onChange={(img) => {
                        setFaviconFile(img);
                      }}
                      value={field.value}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading} className="text-sm">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {"Save General Settings"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
