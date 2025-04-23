import { ContactForm } from "@/components/contact-from";
import { Card } from "@/components/ui/card";
import { getCachedSettings } from "@/lib/settings";
import { MapPin, Phone, Mail } from "lucide-react";
import { getServicesList } from "@/features/services/actions/service-actions";
import { Service } from "@/features/services/types";

export default async function ContactPage() {
  const settings = await getCachedSettings();
  const safeSettings: Record<string, string> = settings || {};

  const servicesList = await getServicesList();
  const services = servicesList.success
    ? (servicesList.data as Service[])
    : ([] as Service[]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 py-40 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 animate-appear opacity-0 delay-300">
            Get In Touch
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto animate-appear opacity-0 delay-500">
            Feel free to contact us - submit your queries here and we will get
            back to you as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 animate-appear opacity-0 delay-700">
          <Card className="bg-teal-500 hover:bg-teal-600 transition-all text-white p-6 rounded-lg flex flex-col items-center text-center">
            <div className="p-3 rounded-full border border-white mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-medium">Address</h3>
            <p className="text-white">{safeSettings.address}</p>
          </Card>

          <Card className="bg-gray-800 hover:bg-teal-500 transition-all text-white p-6 rounded-lg flex flex-col items-center text-center">
            <div className="p-3 rounded-full border border-white mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Contact</h3>
            <p className="text-gray-300">{safeSettings.phone}</p>
          </Card>

          <Card className="bg-gray-800 hover:bg-teal-500 transition-all text-white p-6 rounded-lg flex flex-col items-center text-center">
            <div className="p-3 rounded-full border border-white mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Email</h3>
            <p className="text-gray-300">{safeSettings.support_email}</p>
          </Card>
        </div>

        {/* Map and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-appear opacity-0 delay-700">
          {/* Map Section */}
          <div className="bg-gray-800 rounded-lg overflow-hidden h-full">
            <div className="aspect-video w-full h-full bg-gray-700 relative">
              {/* This is a placeholder for the map - in production you'd integrate Google Maps or similar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67370.47954581145!2d55.28757995982139!3d25.163823117498307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69c36f082541%3A0x16f65b407bb87f9!2sMeydan%20Grandstand!5e0!3m2!1sen!2sin!4v1745388351745!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm services={services} />
        </div>
      </div>
    </div>
  );
}
