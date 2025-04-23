import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import * as crypto from "crypto";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client =
  process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID &&
  process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID
    ? new S3Client({
        region:
          process.env.NEXT_PUBLIC_AWS_S3_REGION || ("eu-west-3" as string),
        credentials: {
          accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID as string,
          secretAccessKey: process.env
            .NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY as string,
        },
      })
    : null;

const isLocalEnvironment = () => {
  return (
    process.env.NEXT_PUBLIC_NODE_ENV === "development" ||
    process.env.APP_ENV === "local"
  );
};

const uploadToS3 = async (
  buffer: Buffer,
  filename: string,
  contentType: string,
  type: string
): Promise<string> => {
  if (!s3Client) {
    throw new Error("S3 client not configured");
  }

  const bucket = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME;
  if (!bucket) {
    throw new Error("S3 bucket name not configured");
  }

  const key = `storage/${type}/${filename}`;

  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: buffer,
    ContentType: contentType,
  });

  await s3Client.send(command);
  const s3Domain =
    process.env.S3_DOMAIN ||
    `https://${bucket}.s3.${
      process.env.AWS_REGION || "eu-west-3"
    }.amazonaws.com`;
  return `${s3Domain}/${key}`;
};

const getContentType = (extension: string): string => {
  const contentTypes: Record<string, string> = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".json": "application/json",
  };

  return contentTypes[extension.toLowerCase()] || "application/octet-stream";
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const type = formData.get("type") as string | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!type || (type !== "image" && type !== "lottie")) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    const fileExt = path.extname(file.name);
    const validImageExts = [".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp"];
    const validLottieExts = [".json"];

    if (type === "image" && !validImageExts.includes(fileExt.toLowerCase())) {
      return NextResponse.json(
        { error: "Invalid image file format" },
        { status: 400 }
      );
    }

    if (type === "lottie" && !validLottieExts.includes(fileExt.toLowerCase())) {
      return NextResponse.json(
        { error: "Invalid lottie file format" },
        { status: 400 }
      );
    }

    const uniqueId = crypto.randomUUID();
    const uniqueFilename = `${uniqueId}${fileExt}`;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const contentType = getContentType(fileExt);

    let fileUrl: string;

    if (isLocalEnvironment()) {
      const storageDirPath = path.join(process.cwd(), "public", "storage");
      const typeDirPath = path.join(storageDirPath, type);

      try {
        await mkdir(storageDirPath, { recursive: true });
        await mkdir(typeDirPath, { recursive: true });
      } catch (error) {
        console.error("Error creating directories:", error);
      }

      const filePath = path.join(typeDirPath, uniqueFilename);
      await writeFile(filePath, buffer);

      fileUrl = `/storage/${type}/${uniqueFilename}`;

      console.log(`File saved locally at: ${filePath}`);
    } else {
      try {
        fileUrl = await uploadToS3(buffer, uniqueFilename, contentType, type);
        console.log(`File uploaded to S3: ${fileUrl}`);
      } catch (error) {
        console.error("Error uploading to S3:", error);
        return NextResponse.json(
          { error: "Failed to upload to cloud storage" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      url: fileUrl,
      filename: uniqueFilename,
      type: type,
    });
  } catch (error) {
    console.error("Error processing upload:", error);
    return NextResponse.json(
      { error: "Error processing upload" },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
