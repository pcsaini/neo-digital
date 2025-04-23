import { Service } from "@/features/services/types";
import Image from "next/image";

export function ServiceCard({ service }: { service: Service }) {
  const random = Math.floor(Math.random() * 4) + 1;
  return (
    <div className="w-full [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-md border border-transparent animate-border">
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
  );
}
