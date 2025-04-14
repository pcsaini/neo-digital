"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import { MonitorCog, Phone, Plane } from "lucide-react";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

const servicesData: Service[] = [
  {
    id: 1,
    icon: "/images/services-icons.svg",
    title: "Digital Content Services",
    description:
      "We create content that captures attention and drives engagement — from compelling copy to rich multimedia experiences tailored for every platform",
    services: [
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the of the 1500s.",
      },
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
    ],
  },
  {
    id: 2,
    icon: "/images/services-icons.svg",
    title: "Concept & Design Consultancy",
    description:
      "Transforming ideas into powerful visual strategies. Our design experts craft creative concepts that align with your brand identity and audience goals",
    services: [
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
    ],
  },
  {
    id: 3,
    icon: "/images/services-icons.svg",
    title: "Project Management Services",
    description:
      "From planning to delivery, we manage your digital projects with precision and agility, ensuring timelines, budgets, and quality standards are always met.",
    services: [
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
    ],
  },
  {
    id: 4,
    icon: "/images/services-icons.svg",
    title: "Online Marketing Services",
    description:
      "Boost your visibility with data-driven digital marketing campaigns designed to attract, convert, and retain customers across all major platforms",
    services: [
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
    ],
  },
  {
    id: 5,
    icon: "/images/services-icons.svg",
    title: "Social Media Services",
    description:
      "We build and grow your brand's presence on social platforms, engaging with audiences and fostering community growth",
    services: [
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
    ],
  },
  {
    id: 6,
    icon: "/images/services-icons.svg",
    title: "Digital Marketing",
    description:
      "Our full-funnel marketing solutions combine SEO, PPC, email, and more — all tailored to maximize ROI and grow your digital footprint.",
    services: [
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        icon: "/images/services-icons.svg",
        title: "Web Development Technology",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
    ],
  },
];

const Services = () => {
  const [viewDialog, setViewDialog] = useState(false);
  const [serviceContent, setServiceContent] = useState<Service | null>(null);

  return (
    <div className="bg-black">
      <section className="max-w-7xl mx-auto py-32 px-6">
        <h3 className="text-lg font-semibold uppercase tracking-wide">
          Services of <span className="text-teal-400">Neo Digital</span>
        </h3>
        <h2 className="text-3xl font-bold mt-2">
          Empowering Brands with End-to-End Digital Excellence
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {servicesData.map((service) => (
            <div
              className="w-full [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-md border border-transparent animate-border"
              key={service.id}
            >
              <div
                className="bg-black h-full p-6 rounded-md text-white shadow-md transform transition duration-500 ease-in-out animate-fade-in-up cursor-pointer"
                onClick={() => {
                  setServiceContent(service);
                  setViewDialog(true);
                }}
              >
                <div className="flex items-center space-x-4">
                  <div>
                    <Image
                      src={service.icon}
                      alt={`${service.title} Icon`}
                      width={120}
                      height={80}
                      className="w-30"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-lg mt-2">{service.title}</h3>
                <p className="text-gray-300 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-[url(/about-count-img.jpg)] bg-cover bg-center bg-no-repeat py-10 px-6 md:px-12">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl m-auto relative mx-auto text-center text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
            Our History
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-teal-400">
                10+
              </p>
              <p className="text-lg text-gray-300 font-medium">
                Active Clients
              </p>
            </div>

            <div>
              <p className="text-3xl sm:text-4xl font-bold text-teal-400">
                50+
              </p>
              <p className="text-lg text-gray-300 font-medium">Projects Done</p>
            </div>

            <div>
              <p className="text-3xl sm:text-4xl font-bold text-teal-400">
                25+
              </p>
              <p className="text-lg text-gray-300 font-medium">Team Advisors</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <p className="text-sm uppercase font-semibold">
          How to Get Started with <span className="text-teal-400">NEO</span>{" "}
          Digital
        </p>
        <h2 className="text-3xl font-bold mt-2">
          A Simple 3-Step Journey to Transform Your Digital Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 justify-items-center mt-12 gap-6">
          <div className="text-center max-w-xs">
            <div className="bg-white p-4 rounded-lg inline-block shadow-lg transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
              <Phone className="w-10 h-10 text-teal-500" />
            </div>
            <h3 className="text-teal-400 mt-4 font-semibold">
              Book a Discovery Call
            </h3>
            <p className="text-gray-300 mt-2 text-sm">
              Start with a quick, no-obligation consultation. We&apos;ll learn
              about your business, goals, and current marketing efforts.
            </p>
          </div>

          <div className="hidden lg:block w-80 top-10 left-1/3">
            <Image
              src="/images/arc-2.png"
              alt="Arc"
              width={320}
              height={100}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>

          <div className="text-center max-w-xs">
            <div className="bg-white p-4 rounded-lg inline-block shadow-lg transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
              <MonitorCog className="w-10 h-10 text-teal-500" />
            </div>
            <h3 className="text-teal-400 mt-4 font-semibold">
              Receive a Tailored Strategy
            </h3>
            <p className="text-gray-300 mt-2 text-sm">
              Our team will develop a custom digital marketing plan aligned with
              your objectives — clear, actionable, and results-focused.
            </p>
          </div>

          <div className="hidden lg:block w-80 top-10 left-1/3">
            <Image
              src="/images/arc-1.png"
              alt="Arc"
              width={320}
              height={100}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md pt-10 mt-10"
            />
          </div>

          <div className="text-center max-w-xs">
            <div className="bg-white p-4 rounded-lg inline-block shadow-lg transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
              <Plane className="w-10 h-10 text-teal-500" />
            </div>
            <h3 className="text-teal-400 mt-4 font-semibold">
              Execute & Optimize
            </h3>
            <p className="text-gray-300 mt-2 text-sm">
              Once approved, we’ll launch your campaign and continuously
              monitor, analyze, and refine it to ensure maximum performance and
              ROI.
            </p>
          </div>
        </div>
      </div>

      <Dialog open={viewDialog} onOpenChange={setViewDialog}>
        <DialogContent className="bg-black lg:max-w-[1200px] h-[80vh] overflow-y-auto">
          <DialogTitle></DialogTitle>
          <div className="bg-black text-white mt-4">
            <section className="py-10 px-6 md:px-10 lg:px-10">
              <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-3xl md:text-4xl font-bold mb-6">
                    {serviceContent?.title}
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {serviceContent?.description}
                  </p>
                  <button className="bg-teal-400 text-black px-6 py-3 rounded-lg text-lg font-semibold transition hover:bg-teal-500">
                    Enquiry Now
                  </button>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/contact-img.png"
                    alt="services"
                    width={400}
                    height={300}
                    className="w-full max-w-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
                {serviceContent?.services?.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-6 rounded-xl text-black shadow-md"
                  >
                    <div className="flex items-center space-x-4">
                      <div>
                        <Image
                          src={service.icon}
                          alt={`${service.title} Icon`}
                          width={120}
                          height={80}
                          className="w-30"
                        />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mt-2">{service.title}</h3>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;
