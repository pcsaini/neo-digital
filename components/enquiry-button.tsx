import Link from "next/link";
import React from "react";

const EnquiryButton = () => {
    return <>
        <Link href="/contact-us">
            <button
                className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none mr-7">
                                    <span
                                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00bba7_0%,#393BB2_50%,#7ccf00_100%)]"/>
                <span
                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Enquiry Now
              </span>
            </button>
        </Link>
    </>
}

export default EnquiryButton