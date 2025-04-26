import Image from "next/image";
import { getServices } from "@/features/services/actions/service-actions";
import { MonitorCog, Phone, Plane } from "lucide-react";
import { Service } from "@/features/services/types";
import { ServiceCard } from "@/components/ui/service-card";

const Services = async () => {
  const result = await getServices({
    status: "published",
    orderBy: "createdAt",
    order: "asc",
  });
  const services = result.success
    ? (result.data as Service[])
    : ([] as Service[]);

  return (
    <div className="bg-black">
      <section className="max-w-7xl mx-auto pt-42 pb-10 px-6">
        <h3 className="text-lg font-semibold uppercase tracking-wide animate-appear opacity-0 delay-300">
          Services of <span className="text-teal-400">Neo Digital</span>
        </h3>
        <h2 className="text-3xl font-bold mt-2 animate-appear opacity-0 delay-500">
          Empowering Brands with End-to-End Digital Excellence
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 animate-appear opacity-0 delay-700">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} relatedServices={services}/>
          ))}
        </div>
      </section>

      <section className="relative bg-[url(/about-count-img.jpg)] bg-cover bg-center bg-no-repeat py-32 px-6 md:px-12">
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

      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
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
    </div>
  );
};

export default Services;
