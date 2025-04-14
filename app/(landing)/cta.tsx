import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";

export default function CTA() {
  return (
    <>
      <section className="bg-black">
        <div className="max-w-7xl m-auto py-25">
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <h1 className="text-white text-4xl font-extrabold">
              Let’s Talk About Growing Your{" "}
              <span className="text-teal-400">Business</span>
            </h1>
            <p className="text-gray-300 mt-2">
              Whether you&apos;re looking to boost leads, improve your online
              presence, or build a full-scale digital strategy — we&apos;re here
              to help.
            </p>

            <Link href="/contact-us">
              <button className="mt-6 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00bba7_0%,#393BB2_50%,#7ccf00_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Contact Us
                </span>
              </button>
            </Link>
          </BackgroundLines>
        </div>
      </section>
    </>
  );
}
