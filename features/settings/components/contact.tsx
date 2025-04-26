// ContactSettings.jsx
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
import { updateSettings } from "@/features/settings/setting-actions";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface Setting {
  key: string;
  value: string;
}

// Define schema for contact tab
const contactSchema = z.object({
  address: z.string().min(1, "Address is required"),
  phone: z
    .string()
    .regex(/^\+?[0-9\s\-()]+$/, "Please enter a valid phone number"),
  support_email: z.string().email("Please enter a valid email"),
  whatsapp_number: z
    .string()
    .regex(/^\+?[0-9\s\-()]+$/, "Please enter a valid WhatsApp number"),
  map_url: z.string().url("Please enter a valid map URL"),
  inquiry_receive_email: z.string().email("Please enter a valid email"),
});

export default function ContactSettings({
  setting,
}: {
  setting: Record<string, string>;
}) {
  // Define form with default values
  const [loading, setLoading] = useState(false);
  const contactForm = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      address: setting.address ?? "",
      phone: setting.phone ?? "",
      whatsapp_number: setting.whatsapp_number ?? "",
      support_email: setting.support_email ?? "",
      inquiry_receive_email: setting.inquiry_receive_email ?? "",
      map_url: setting.map_url ?? "",
    },
  });

  // Handle contact form submission
  const onContactSubmit = async (data: z.infer<typeof contactSchema>) => {
    try {
      setLoading(true);
      // Update settings
      await updateSettings(
        Object.entries(data).map(([key, value]) => ({
          key,
          value,
        })) as Setting[]
      );
      toast("Contact settings updated successfully");
    } catch (error) {
      console.error(error);
      toast("Failed to update contact settings");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...contactForm}>
      <form onSubmit={contactForm.handleSubmit(onContactSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Update your business contact details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={contactForm.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={2} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={contactForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={contactForm.control}
                name="whatsapp_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={contactForm.control}
              name="support_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Support Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={contactForm.control}
              name="inquiry_receive_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Inquiry Receive Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={contactForm.control}
              name="map_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Google Maps Embed URL</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={3} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Map Preview */}
            {contactForm.watch("map_url") && (
              <div className="mt-4">
                <FormLabel>Map Preview</FormLabel>
                <div className="border rounded-md overflow-hidden h-64 mt-2">
                  <iframe
                    src={contactForm.watch("map_url")}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading} className="text-sm">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Contact Settings
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
