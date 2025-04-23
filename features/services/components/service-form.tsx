"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TiptapEditor from "@/components/tiptap-editor";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import MediaUpload from "@/components/media-upload";
import {
  SERVICE_STATUS,
  MEDIA_TYPE,
  ServiceFormValues,
  ServiceWithMedia,
  MediaTypeValue,
  serviceSchema,
} from "../types";
import {
  createService,
  updateService,
} from "@/features/services/actions/service-actions";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

interface ServiceFormProps {
  initialData?: Partial<ServiceWithMedia> & { id?: string };
  mode: "create" | "edit";
}

export function ServiceForm({ initialData, mode }: ServiceFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const initialMediaUrl = initialData?.media?.url || initialData?.image || "";
  const initialMediaType =
    initialData?.media?.type ||
    (initialMediaUrl &&
      (initialMediaUrl.includes(".json") ||
        initialMediaUrl.endsWith("/lottie")))
      ? MEDIA_TYPE.LOTTIE
      : MEDIA_TYPE.IMAGE;

  const defaultValues: Partial<ServiceFormValues> = {
    name: initialData?.name || "",
    description: initialData?.description || "",
    keywords: initialData?.keywords || [],
    content: initialData?.content || "",
    media: initialMediaUrl
      ? {
          url: initialMediaUrl,
          type: initialMediaType,
        }
      : undefined,
    image: initialMediaUrl,
    status: initialData?.status || SERVICE_STATUS.DRAFT,
  };

  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceSchema),
    defaultValues,
  });

  const onSubmit = async (data: ServiceFormValues) => {
    try {
      setIsLoading(true);

      if (data.media?.url && !data.image) {
        data.image = data.media.url;
      }

      console.log("Submitting form data:", data);

      let result;
      if (mode === "create") {
        result = await createService(data);
      } else if (mode === "edit" && initialData?.id) {
        result = await updateService(initialData.id, data);
      } else {
        throw new Error("Invalid mode or missing ID");
      }

      if (!result?.success) {
        throw new Error(result?.error || "Operation failed");
      }

      toast(
        mode === "create"
          ? "Service created successfully!"
          : "Service updated successfully!"
      );

      router.push("/admin/services");
    } catch (error) {
      console.error("Form submission error:", error);
      toast(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const [keywordsInput, setKeywordsInput] = useState(
    initialData?.keywords ? initialData.keywords.join(", ") : ""
  );

  const handleKeywordsChange = (value: string) => {
    setKeywordsInput(value);

    const keywordArray = value
      .split(",")
      .map((k) => k.trim())
      .filter((k) => k !== "");

    form.setValue("keywords", keywordArray, { shouldValidate: true });
  };

  const handleMediaChange = (url: string, type: MediaTypeValue) => {
    form.setValue("media", { url, type }, { shouldValidate: true });
    form.setValue("image", url, { shouldValidate: true });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter service name" {...field} />
              </FormControl>
              <FormDescription>
                The name of your service as it will appear to users.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter a short description of the service"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A brief description that will be used in service listings.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="keywords"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Keywords</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter keywords separated by commas"
                  value={keywordsInput}
                  onChange={(e) => handleKeywordsChange(e.target.value)}
                />
              </FormControl>
              <FormDescription>
                Keywords help with search and categorization (comma separated).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2">
              <FormLabel>Content</FormLabel>
              <FormControl>
                <TiptapEditor
                  content={field.value}
                  onChange={field.onChange}
                  placeholder="Enter the full content of your service"
                />
              </FormControl>
              <FormDescription>
                The detailed content of your service. Use the toolbar to format
                your content.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="media"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Media</FormLabel>
              <FormControl>
                <MediaUpload
                  value={field.value?.url || ""}
                  onChange={(url) =>
                    handleMediaChange(
                      url,
                      url.includes(".json") || url.endsWith("/lottie")
                        ? MEDIA_TYPE.LOTTIE
                        : MEDIA_TYPE.IMAGE
                    )
                  }
                  onRemove={() => {
                    form.setValue("media", undefined, { shouldValidate: true });
                    form.setValue("image", "", { shouldValidate: true });
                  }}
                  type={field.value?.type || initialMediaType}
                />
              </FormControl>
              <FormDescription>
                Upload an image or Lottie animation for your service.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Status</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={SERVICE_STATUS.DRAFT} />
                    </FormControl>
                    <FormLabel className="font-normal">Draft</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={SERVICE_STATUS.PUBLISHED} />
                    </FormControl>
                    <FormLabel className="font-normal">Published</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={SERVICE_STATUS.ARCHIVED} />
                    </FormControl>
                    <FormLabel className="font-normal">Archived</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormDescription>
                Set the current status of this service.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-x-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/services")}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading} className="text-sm">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {mode === "create" ? "Create" : "Update"} Service
          </Button>
        </div>
      </form>
    </Form>
  );
}
