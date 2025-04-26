"use client";
import { Service } from "@/features/services/types";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import EnquiryButton from "@/components/enquiry-button";

function RelatedServiceItem({ service }: { service: Service }) {
  const random = Math.floor(Math.random() * 4) + 1;

  return (
    <div className="w-full [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-md border border-transparent animate-border">
      <div className="bg-black h-full p-6 rounded-md text-white shadow-md transform transition duration-500 ease-in-out animate-fade-in-up cursor-pointer">
        <div className="flex items-center space-x-4">
          <div className="flex justify-center h-[150px] w-full">
            <Image
              src={service.image || `/services/default-${random}.svg`}
              alt={`${service.name} Icon`}
              width={80}
              height={60}
              className="w-[60%] h-auto"
            />
          </div>
        </div>
        <h3 className="font-bold text-lg mt-2">{service.name}</h3>
        <p className="text-gray-300 mt-2">{service.description}</p>
      </div>
    </div>
  );
}

export function ServiceCard({
  service,
  relatedServices,
}: {
  service: Service;
  relatedServices: Service[];
}) {
  const [openDialog, setOpenDialog] = useState(false);
  const random = Math.floor(Math.random() * 4) + 1;
  const [serviceCurrent, setServiceCurrent] = useState(service);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const getNextThreeServices = () => {
    if (!relatedServices || relatedServices.length <= 1) return [];
    const currentIndex = relatedServices.findIndex((s) => s.id === service.id);
    if (currentIndex === -1) return [];

    const nextServices = [];
    for (let i = 1; i <= 3; i++) {
      const nextIndex = (currentIndex + i) % relatedServices.length;
      nextServices.push(relatedServices[nextIndex]);
    }

    return nextServices;
  };

  const nextThreeServices = getNextThreeServices();

  const handleServiceChange = (newService: Service) => {
    setOpenDialog(false);
    setServiceCurrent(newService);
  };
  return (
    <>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="lg:min-w-[70rem] text-white rounded-xl border shadow-xl overflow-y-scroll max-h-9/10">
          <DialogHeader
            className={"flex flex-row justify-between items-center p-2"}
          >
            <DialogTitle className="text-2xl font-bold">
              {serviceCurrent?.name}
            </DialogTitle>
            <EnquiryButton />
          </DialogHeader>

          <article className="">
            <div className="float-right  flex justify-center items-center ps-20 pb-10">
              <Image
                src={serviceCurrent.image || `/services/default-${random}.svg`}
                alt={`${serviceCurrent?.name} illustration`}
                className="rounded-md shadow-lg w-full h-auto max-w-[500px] object-contain "
                width={1000}
                height={200}
              />
            </div>
            <p className="leading-relaxed text-base">
              {serviceCurrent?.content}
            </p>
          </article>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
            {nextThreeServices.map((relatedService, i) => (
              <div
                key={i}
                onClick={() => {
                  handleServiceChange(relatedService);
                  handleOpenDialog();
                }}
              >
                <RelatedServiceItem service={relatedService} key={i} />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      <div
        onClick={() => handleOpenDialog()}
        className="w-full [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-md border border-transparent animate-border"
      >
        <div className="bg-black h-full p-6 rounded-md text-white shadow-md transform transition duration-500 ease-in-out animate-fade-in-up cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="flex justify-center h-[250px] w-full">
              <Image
                src={service.image || `/services/default-${random}.svg`}
                alt={`${service.name} Icon`}
                width={120}
                height={100}
                className="w-[60%] h-auto"
              />
            </div>
          </div>
          <h3 className="font-bold text-lg mt-2">{service.name}</h3>
          <p className="text-gray-300 mt-2">{service.description}</p>
        </div>
      </div>
    </>
  );
}
