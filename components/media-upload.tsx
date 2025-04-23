
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Upload, Film, Image as ImageIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Player } from '@lottiefiles/react-lottie-player';
import {toast} from "sonner";

interface MediaUploadProps {
    value: string;
    onChange: (value: string) => void;
    onRemove: () => void;
    type?: "image" | "lottie";
}

export default function MediaUpload({
                                        value,
                                        onChange,
                                        onRemove,
                                        type = "image",
                                    }: MediaUploadProps) {
    const [preview, setPreview] = useState<string | null>(null);
    const [isLocalFile, setIsLocalFile] = useState(false);
    const [activeTab, setActiveTab] = useState<"image" | "lottie">(type);
    const [fileType, setFileType] = useState<"image" | "lottie">(type);

    useEffect(() => {
        if (value && !isLocalFile) {
            setPreview(value);
            if (value.includes('.json') || value.endsWith('/lottie')) {
                setFileType("lottie");
            } else {
                setFileType("image");
            }
        }
    }, [value, isLocalFile]);

    const handleFileUpload = async (file: File, type: "image" | "lottie") => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', type);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Upload failed');
            }

            const data = await response.json();


            onChange(data.url);
            setFileType(type);
            setIsLocalFile(false);
            setPreview(data.url);

        } catch (error) {
            console.error('Error uploading file:', error);
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result as string);
                setIsLocalFile(true);
                onChange(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (activeTab === "image") {
            if (!file.type.startsWith('image/')) {
                toast('Please upload an image file');
                return;
            }
            handleFileUpload(file, "image").then(r => {});
        } else {
            if (file.type !== 'application/json' && !file.name.endsWith('.json')) {
                toast('Please upload a Lottie JSON file');
                return;
            }
            handleFileUpload(file, "lottie").then(r => {});
        }
    };

    const handleRemove = () => {
        setPreview(null);
        setIsLocalFile(false);
        onRemove();
    };


    const handleTabChange = (tab: "image" | "lottie") => {
        setActiveTab(tab);
        if (!preview) {
            setFileType(tab);
        }
    };

    return (
        <div className="space-y-4">
            <Tabs value={activeTab} onValueChange={(v) => handleTabChange(v as "image" | "lottie")} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="image" className="flex items-center">
                        <ImageIcon className="mr-2 h-4 w-4" />
                        Image
                    </TabsTrigger>
                    <TabsTrigger value="lottie" className="flex items-center">
                        <Film className="mr-2 h-4 w-4" />
                        Lottie
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="image" className="mt-4">
                    {preview && fileType === "image" ? (
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
                    ) : activeTab === "image" ? (
                        <UploadArea
                            id="image-upload"
                            accept="image/*"
                            handleFileChange={handleFileChange}
                            type="image"
                        />
                    ) : null}
                </TabsContent>

                <TabsContent value="lottie" className="mt-4">
                    {preview && fileType === "lottie" ? (
                        <div className="relative w-full bg-black rounded-md h-64 h-1/2">
                            <Player
                                autoplay
                                loop
                                src={preview}
                                style={{ height: '100%', width: '100%' }}
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
                    ) : activeTab === "lottie" ? (
                        <UploadArea
                            id="lottie-upload"
                            accept=".json"
                            handleFileChange={handleFileChange}
                            type="lottie"
                        />
                    ) : null}
                </TabsContent>
            </Tabs>
        </div>
    );
}

interface UploadAreaProps {
    id: string;
    accept: string;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: "image" | "lottie";
}

function UploadArea({ id, accept, handleFileChange, type }: UploadAreaProps) {
    return (
        <div className="flex items-center justify-center w-full">
            <label
                htmlFor={id}
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80"
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                        {type === "image"
                            ? "SVG, PNG, JPG or GIF (Max 5MB)"
                            : "Lottie JSON files (Max 5MB)"}
                    </p>
                </div>
                <Input
                    id={id}
                    type="file"
                    accept={accept}
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>
        </div>
    );
}