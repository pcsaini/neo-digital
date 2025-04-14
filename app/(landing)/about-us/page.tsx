"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <section className="max-w-7xl m-auto text-white py-10 px-6 md:px-12">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 ">
          <div className="h-[600px]">
            <DotLottieReact
              src="https://lottie.host/f2d27194-170e-4a06-ac57-8a9b90f33eac/sb6I7JsMYH.lottie"
              style={{ maxWidth: "600px", maxHeight: "600px" }}
              loop
              autoplay
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="text-white uppercase text-xs sm:text-sm font-semibold border-l-4 border-teal-400 pl-2 inline-block">
              Meaning of NEO DIGITAL
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight">
              <span className="text-teal-400">NEO</span> DIGITAL Is Focused On{" "}
              <span className="text-teal-400"> Great Collaboration</span>
            </h2>
            <p className="mt-4 text-gray-300 text-sm sm:text-base">
              NEO DIGITAL represents innovation, versatility, and end-to-end
              digital transformation. We are a one-stop destination for all
              technology solutions — from strategy and design to full-scale
              development and marketing.
            </p>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              At our core, we believe in building strong collaborations with
              clients, partners, and teams to create scalable, future-ready
              solutions that truly make an impact.
            </p>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              Together, we turn ideas into digital realities
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl m-auto text-white pt-10 pb-20 px-6 md:px-12">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="text-center lg:text-left">
            <p className="text-white uppercase text-xs sm:text-sm font-semibold border-l-4 border-teal-400 pl-2 inline-block">
              Choose Us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight">
              Our <span className="text-teal-400">Vision</span>
            </h2>
            <p className="mt-4 text-gray-300 text-sm sm:text-base">
              At NEO DIGITAL, we are committed to delivering top-tier digital
              solutions that prioritize quality, reliability, and timely
              execution. Our vision is to empower businesses through technology
              that is not only innovative but also dependable and scalable.
            </p>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              We believe that when the mission is clear, there’s always a way to
              succeed — even against the odds
            </p>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              By fostering long-term partnerships and understanding the unique
              needs of every client, we turn ambitious ideas into powerful
              digital experiences.
            </p>
          </div>

          <DotLottieReact
            src="https://lottie.host/f4a50a35-4e7d-4412-b831-45532fb1a249/7mZXkRyDK4.lottie"
            loop
            autoplay
          />
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

      <section className="max-w-7xl m-auto relative py-10 px-6">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15 p-4">
            <div className="min-w-[250px] sm:min-w-[300px] rounded-2xl p-10 shadow-lg flex flex-col items-center bg-[#EAF3FF] transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-xl animate-bounce">
                <Image
                  src="/images/about-icon-1.png"
                  alt="services icon"
                  title="services icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="mt-4 font-bold text-black text-center text-lg">
                Software Customization
              </h3>
              <p className="text-gray-600 text-center mt-2">
                We create tailored software solutions that align with your
                business needs, ensuring you get the right tools to succeed.
              </p>
            </div>

            <div className="min-w-[250px] sm:min-w-[300px] rounded-2xl p-10 shadow-lg flex flex-col items-center bg-[#FFEBE6] transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-xl animate-bounce">
                <Image
                  src="/images/about-icon-2.png"
                  alt="services icon"
                  title="services icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="mt-4 font-bold text-black text-center text-lg">
                System Planning & Design
              </h3>
              <p className="text-gray-600 text-center mt-2">
                We design and plan systems that meet your business needs,
                ensuring you have the right infrastructure to succeed.
              </p>
            </div>

            <div className="min-w-[250px] sm:min-w-[300px] rounded-2xl p-10 shadow-lg flex flex-col items-center bg-[#E5F9FF] transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-xl animate-bounce">
                <Image
                  src="/images/about-icon-3.png"
                  alt="services icon"
                  title="services icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="mt-4 font-bold text-black text-center text-lg">
                Digital Content Services
              </h3>
              <p className="text-gray-600 text-center mt-2">
                We create content that captures attention and drives engagement
                — from compelling copy to rich multimedia experiences tailored
                for every platform.
              </p>
            </div>

            <div className="min-w-[250px] sm:min-w-[300px] rounded-2xl p-10 shadow-lg flex flex-col items-center bg-[#FFF3E9] transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-xl animate-bounce">
                <Image
                  src="/images/about-icon-4.png"
                  alt="services icon"
                  title="services icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="mt-4 font-bold text-black text-center text-lg">
                Project Management Services
              </h3>
              <p className="text-gray-600 text-center mt-2">
                We manage your digital projects with precision and agility,
                ensuring timelines, budgets, and quality standards are always
                met.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
