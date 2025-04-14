"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import TypingAnimation from "@/components/ui/typing-animation";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { AnimatedCard } from "@/components/ui/animated-card";
import Link from "next/link";

export default function Home() {
  const typingTexts = ["Marketing", "Solutions", "Presence"];

  return (
    <div>
      <BackgroundBeamsWithCollision>
        <div className="max-w-7xl m-auto text-white py-35 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto items-center justify-between">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold">
                Our Expertise In Digital <TypingAnimation texts={typingTexts} />
              </h1>
              <p className="text-gray-300 text-lg mt-3">
                We combine creativity with strategy to create campaigns that not
                only look great — but perform even better. Let’s build something
                your audience can’t ignore
              </p>
              <Link href="/services">
                <button className="mt-6 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00bba7_0%,#393BB2_50%,#7ccf00_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Explore Our Services
                  </span>
                </button>
              </Link>
            </div>

            <div
              className="mt-10 lg:mt-0 flex justify-center"
              style={{ height: "500px" }}
            >
              <DotLottieReact
                src="https://lottie.host/bad20bd1-aa9a-4885-b3bc-cd1d1c036759/wkl9CwSWrn.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      <section>
        <div className="max-w-7xl m-auto text-center py-25 px-4">
          <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl">
            Solutions That Drive <span className="text-teal-400">Results</span>
          </h1>
          <div className="w-40 h-1 bg-teal-400 mx-auto my-4"></div>
          <p className="text-gray-300 text-lg">
            From SEO and social media to paid ads and content — we turn strategy
            into success
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <AnimatedCard
              title="Social media services"
              imageUrl="https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
            />

            <AnimatedCard
              title="Project management services"
              imageUrl="https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
            />

            <AnimatedCard
              title="Concept & design consultancy"
              imageUrl="https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
            />
          </div>
        </div>
      </section>

      <section className="relative flex items-center bg-black h-150">
        <div className="absolute inset-0">
          <Image
            src="/images/story-img.jpg"
            alt="Our Story Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-7xl relative m-auto py-25 px-4">
          <h4 className="text-sm font-semibold tracking-wider text-white border-l-4 border-teal-400 pl-2 inline-block">
            STORY OF <span className="text-teal-400">NEO</span> DIGITAL
          </h4>
          <h2 className="mt-2 text-2xl font-bold md:text-4xl lg:text-4xl text-white">
            We Build With the Best Minds in the{" "}
            <span className="text-teal-400">Digital World</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed md:text-lg text-white">
            At NEO DIGITAL, we’re more than a team — we’re a collective of
            innovative thinkers, marketers, designers, and developers dedicated
            to delivering high-impact digital solutions
          </p>
          <p className="mt-4 text-sm text-gray-300 md:text-base">
            Our partnerships are built on trust, results, and a shared vision
            for excellence. With a track record of delivering smart, scalable
            solutions — from websites to performance marketing — we’re the team
            you can rely on from start to success.
          </p>

          <div className="mt-6">
            <Link href="/contact-us">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00bba7_0%,#393BB2_50%,#7ccf00_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Contact us
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="max-w-7xl m-auto py-25 px-4">
          <h1 className="text-white text-4xl md:text-4xl font-extrabold text-center">
            How to Get Started with <span className="text-teal-400">NEO</span>{" "}
            Digital
          </h1>
          <div className="w-40 h-1 bg-teal-400 mx-auto my-4"></div>
          <p className="text-gray-300 text-lg text-center">
            A Simple 3-Step Journey to Transform Your Digital Experience
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border-b-6 border-teal-500 transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 flex items-center justify-center bg-teal-100 rounded-full">
                  <span className="text-teal-600 text-xl font-semibold">
                    01
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Book a Discovery Call
              </h2>
              <p className="mt-4 text-gray-700">
                Start with a quick, no-obligation consultation. We&apos;ll learn
                about your business, goals, and current marketing efforts.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border-b-6 border-teal-500 transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 flex items-center justify-center bg-teal-100 rounded-full">
                  <span className="text-teal-600 text-xl font-semibold">
                    02
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Receive a Tailored Strategy
              </h2>
              <p className="mt-4 text-gray-700">
                Our team will develop a custom digital marketing plan aligned
                with your objectives — clear, actionable, and results-focused.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border-b-6 border-teal-500 transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in-up">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 flex items-center justify-center bg-teal-100 rounded-full">
                  <span className="text-teal-600 text-xl font-semibold">
                    03
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Execute & Optimize
              </h2>
              <p className="mt-4 text-gray-700">
                Once approved, we’ll launch your campaign and continuously
                monitor, analyze, and refine it to ensure maximum performance
                and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
