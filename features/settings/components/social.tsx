// SocialSettings.jsx
"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
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
import { updateSettings } from "@/features/settings/setting-actions";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface Setting {
  key: string;
  value: string;
}

// Define schema for social tab
const socialSchema = z.object({
  facebook_url: z.string().url().or(z.literal("")),
  twitter_url: z.string().url().or(z.literal("")),
  instagram_url: z.string().url().or(z.literal("")),
  linkedin_url: z.string().url().or(z.literal("")),
  youtube_url: z.string().url().or(z.literal("")),
});

export default function SocialSettings({
  setting,
}: {
  setting: Record<string, string>;
}) {
  const [loading, setLoading] = useState(false);
  // Define form with default values
  const socialForm = useForm({
    resolver: zodResolver(socialSchema),
    defaultValues: {
      facebook_url: setting.facebook_url ?? "",
      twitter_url: setting.twitter_url ?? "",
      instagram_url: setting.instagram_url ?? "",
      linkedin_url: setting.linkedin_url ?? "",
      youtube_url: setting.youtube_url ?? "",
    },
  });

  // Handle social media form submission
  const onSocialSubmit = async (data: z.infer<typeof socialSchema>) => {
    try {
      setLoading(true);
      // Update settings
      await updateSettings(
        Object.entries(data).map(([key, value]) => ({
          key,
          value,
        })) as Setting[]
      );
      toast("Social settings updated successfully");
    } catch (error) {
      console.error(error);
      toast("Failed to update social settings");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...socialForm}>
      <form onSubmit={socialForm.handleSubmit(onSocialSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Social Media Links</CardTitle>
            <CardDescription>
              Connect your social media accounts.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={socialForm.control}
                name="facebook_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facebook URL</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="https://facebook.com/your-page"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={socialForm.control}
                name="twitter_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter URL</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="https://twitter.com/your-handle"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={socialForm.control}
                name="instagram_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram URL</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="https://instagram.com/your-handle"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={socialForm.control}
                name="linkedin_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn URL</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="https://linkedin.com/company/your-company"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={socialForm.control}
              name="youtube_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>YouTube URL</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="https://youtube.com/your-channel"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading} className="text-sm">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Social Settings
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
