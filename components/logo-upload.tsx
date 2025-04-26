import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

export default function LogoUpload({
  title = "Logo",
  value,
  onChange,
}: {
  title?: string;
  value: string;
  onChange: (value: File) => void;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      onChange(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-start gap-4 p-6">
      <div className="cursor-pointer relative group" onClick={triggerFileInput}>
        <div
          className={`h-24 w-52 border-2 border-gray-200 hover:border-primary transition-colors rounded-md overflow-hidden flex items-center justify-center`}
        >
          {selectedImage || value ? (
            <img
              src={selectedImage || value}
              alt="Profile"
              className="h-auto max-h-full max-w-full w-auto"
            />
          ) : (
            <div className="h-full w-full bg-gray-100 flex items-center justify-center">
              <Image className={`h-12 w-12 text-gray-400`} />
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
          <span className="text-white text-xs font-medium">Change {title}</span>
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={triggerFileInput}
        className="mt-2"
      >
        Change {title}
      </Button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
}
