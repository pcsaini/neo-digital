"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSettings } from "@/features/settings/setting-actions";
import GeneralSettings from "@/features/settings/components/general";
import ContactSettings from "@/features/settings/components/contact";
import SocialSettings from "@/features/settings/components/social";
import { Loader2 } from "lucide-react";

interface Setting {
  key: string;
  value: string;
}

export default function SettingsManagement() {
  const [activeTab, setActiveTab] = useState("general");
  const [settings, setSettings] = useState<Setting[]>([]);

  useEffect(() => {
    const fetchSettings = async () => {
      const result = await getSettings();
      if (result.success) {
        setSettings(result.data as Setting[]);
      }
    };
    fetchSettings();
  }, []);

  if (!settings.length) {
    return <div className="container mx-auto py-10"></div>;
  }
  const generalFormValues: string[] = [
    "site_name",
    "site_description",
    "site_keywords",
    "site_logo",
    "site_favicon",
  ];

  const contactFormValues: string[] = [
    "address",
    "phone",
    "whatsapp_number",
    "support_email",
    "inquiry_receive_email",
    "map_url",
  ];

  const socialFormValues: string[] = [
    "facebook_url",
    "twitter_url",
    "instagram_url",
    "linkedin_url",
    "youtube_url",
  ];

  const generalFormDefaultValues = (settings || [])
    .filter((setting) => generalFormValues.includes(setting.key))
    .reduce((acc, setting) => {
      acc[setting.key] = setting.value;
      return acc;
    }, {} as Record<string, string>);

  const contactFormDefaultValues = (settings || [])
    .filter((setting) => contactFormValues.includes(setting.key))
    .reduce((acc, setting) => {
      acc[setting.key] = setting.value;
      return acc;
    }, {} as Record<string, string>);

  const socialFormDefaultValues = (settings || [])
    .filter((setting) => socialFormValues.includes(setting.key))
    .reduce((acc, setting) => {
      acc[setting.key] = setting.value;
      return acc;
    }, {} as Record<string, string>);

  // State for active tab

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Website Settings</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="contact">Contact Info</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
        </TabsList>

        {/* General Settings Tab */}
        <TabsContent value="general">
          <GeneralSettings setting={generalFormDefaultValues} />
        </TabsContent>

        {/* Contact Info Tab */}
        <TabsContent value="contact">
          <ContactSettings setting={contactFormDefaultValues} />
        </TabsContent>

        {/* Social Media Tab */}
        <TabsContent value="social">
          <SocialSettings setting={socialFormDefaultValues} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
