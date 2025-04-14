import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  className?: string;
}

export function AnimatedCard({
  title,
  description,
  imageUrl,
  className,
}: AnimatedCardProps) {
  return (
    <div className="w-full group/card">
      {/* Card */}
      <div className="w-full [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-md border border-transparent animate-border">
        <div
          className={cn(
            "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl w-full backgroundImage flex flex-col justify-between p-4",
            "bg-cover",
            className
          )}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="flex flex-row items-center space-x-4 z-10"></div>
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              {title}
            </h1>
            {description && (
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>

    // <div className="relative w-full group/card">
    //   <div className="relative inline-flex h-full w-full overflow-hidden rounded-md p-[1px]">
    //     <div className="w-full max-w-[422px] [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
    //       <div
    //         className={cn(
    //           "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl w-full backgroundImage flex flex-col justify-between p-4 m-[1px]",
    //           "bg-cover",
    //           className
    //         )}
    //         style={{ backgroundImage: `url(${imageUrl})` }}
    //       >
    //         <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
    //         <div className="flex flex-row items-center space-x-4 z-10"></div>
    //         <div className="text content">
    //           <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
    //             {title}
    //           </h1>
    //           <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
    //             {description}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
