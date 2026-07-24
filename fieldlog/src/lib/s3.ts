import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export const S3_BUCKET = process.env.S3_BUCKET || "fieldlog-audio-uploads";

export async function uploadAudioToS3(
  key: string,
  blob: Blob
): Promise<string> {
  const { PutObjectCommand } = await import("@aws-sdk/client-s3");
  const buffer = Buffer.from(await blob.arrayBuffer());

  await s3Client.send(
    new PutObjectCommand({
      Bucket: S3_BUCKET,
      Key: key,
      Body: buffer,
      ContentType: blob.type || "audio/webm",
    })
  );

  return `https://${S3_BUCKET}.s3.amazonaws.com/${key}`;
}

export async function getAudioUrl(key: string): Promise<string> {
  const { GetObjectCommand } = await import("@aws-sdk/client-s3");

  const command = new GetObjectCommand({
    Bucket: S3_BUCKET,
    Key: key,
  });

  const response = await s3Client.send(command);
  return `https://${S3_BUCKET}.s3.amazonaws.com/${key}`;
}

export default s3Client;