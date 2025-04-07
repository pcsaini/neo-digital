"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Sample service object (for DRY data creation)
const baseService = {
  icon: "services-icons.svg",
  title: "Web Development Technology",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
};

// Generating servicesData with mock inner services
const servicesData = Array.from({ length: 6 }, (_, id) => ({
  id: id + 1,
  ...baseService,
  services: Array.from({ length: 3 }, (_, idx) => ({
    id: `${id + 1}-${idx + 1}`,
    ...baseService,
  })),
}));

const Services = () => {
  const [viewDialog, setViewDialog] = useState(false);
  const [serviceContent, setServiceContent] = useState<{
    title: string;
    description: string;
    services: { id: string; title: string; description: string; icon: string }[];
  }>({
    title: "",
    description: "",
    services: [],
  });

  const handleServiceClick = (service: typeof servicesData[number]) => {
    setServiceContent(service);
    setViewDialog(true);
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-center text-white text-3xl font-bold">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mt-12 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="cursor-pointer w-full p-6 bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors duration-300 rounded-2xl shadow-md text-white"
              onClick={() => handleServiceClick(service)}
            >
              <Image
                src={`/${service.icon}`}
                alt={`${service.title} Icon`}
                width={80}
                height={80}
              />
              <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Dialog open={viewDialog} onOpenChange={setViewDialog}>
        <DialogContent className="bg-gray-900 text-white max-w-3xl p-8">
          <h3 className="text-3xl font-bold mb-4">{serviceContent?.title}</h3>
          <p className="text-gray-300 mb-6">{serviceContent?.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {serviceContent?.services.map((subService) => (
              <div
                key={subService.id}
                className="bg-white bg-opacity-10 rounded-xl p-4"
              >
                <Image
                  src={`/${subService.icon}`}
                  alt={`${subService.title} Icon`}
                  width={60}
                  height={60}
                />
                <h4 className="mt-4 text-lg font-semibold">{subService.title}</h4>
                <p className="text-sm text-gray-300">{subService.description}</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Services;
