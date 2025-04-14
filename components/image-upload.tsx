"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Upload } from "lucide-react";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  onRemove: () => void;
}

export default function ImageUpload({
  value,
  onChange,
  onRemove,
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isLocalFile, setIsLocalFile] = useState(false);

  useEffect(() => {
    if (value && !isLocalFile) {
      setPreview(value);
    }
  }, [value, isLocalFile]);

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setPreview(reader.result as string);
        setIsLocalFile(true);

        onChange(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  // Handle image removal
  const handleRemove = () => {
    setPreview(null);
    setIsLocalFile(false);
    onRemove();
  };

  // Handle URL input
  const handleUrlInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setIsLocalFile(false);
    onChange(url);

    // Don't set preview here, it will be set by the useEffect when value changes
  };

  return (
    <div className="space-y-4">
      {preview ? (
        <div className="relative w-full h-64">
          <Image
            src={preview}
            alt="Preview"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
              <p className="mb-2 text-sm text-muted-foreground">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-muted-foreground">
                SVG, PNG, JPG or GIF (Max 5MB)
              </p>
            </div>
            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      )}

      <div className="flex items-center space-x-2">
        <Input
          type="text"
          placeholder="Or enter image URL"
          value={isLocalFile ? "" : value}
          onChange={handleUrlInput}
          className="flex-1"
        />
      </div>
    </div>
  );
}
