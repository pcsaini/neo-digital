// app/contact/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// Define the service type
interface Service {
  id: string;
  name: string;
}

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(1, "Message is required"),
});

export default function ContactPage() {
  // State for dynamic services
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  // Fetch services (simulated)
  useEffect(() => {
    // In a real application, you would fetch from an API
    const fetchServices = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Example services data
        const servicesData: Service[] = [
          { id: "web-dev", name: "Web Development" },
          { id: "mobile-dev", name: "Mobile App Development" },
          { id: "ui-design", name: "UI/UX Design" },
          { id: "consulting", name: "IT Consulting" },
          { id: "cloud", name: "Cloud Services" },
        ];

        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching services:", error);
        // Set fallback services in case of error
        setServices([
          { id: "web-dev", name: "Web Development" },
          { id: "consulting", name: "Consulting" },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      // Add your form submission logic here
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 py-40 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Get In Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to contact us - submit your queries here and we will get
            back to you as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="bg-teal-500 text-white p-6 rounded-lg flex flex-col items-center text-center">
            <div className="p-3 rounded-full border border-white mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-medium">Address</h3>
            <p className="text-white">789 Oak Lane, Lakeside, TX 54321</p>
          </Card>

          <Card className="bg-gray-800 text-white p-6 rounded-lg flex flex-col items-center text-center">
            <div className="p-3 rounded-full border border-gray-600 mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Contact</h3>
            <p className="text-gray-300">470-601-1911</p>
          </Card>

          <Card className="bg-gray-800 text-white p-6 rounded-lg flex flex-col items-center text-center">
            <div className="p-3 rounded-full border border-gray-600 mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Email</h3>
            <p className="text-gray-300">pagedone1234@gmail.com</p>
          </Card>
        </div>

        {/* Map and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="aspect-video w-full h-full bg-gray-700 relative">
              {/* This is a placeholder for the map - in production you'd integrate Google Maps or similar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400">Map Placeholder</p>
                {/* In a real implementation, you'd use something like:
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!..."
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe> */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Email"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Phone"
                          type="tel"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Select Service</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={isLoading}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue
                              placeholder={
                                isLoading
                                  ? "Loading services..."
                                  : "Select Service"
                              }
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.name}
                            </SelectItem>
                          ))}
                          {services.length === 0 && !isLoading && (
                            <SelectItem value="no-services" disabled>
                              No services available
                            </SelectItem>
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter Your Query"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="mt-6 w-full md:w-auto">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
