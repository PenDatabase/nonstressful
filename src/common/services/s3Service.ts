import { S3Client, PutObjectCommand, S3 } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

class s3Service{
  s3 = new S3Client({
    region: process.env.AWS_DEFAULT_REGION ?? '',
    endpoint: process.env.AWS_ENDPOINT_URL ?? '',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? ''
    },
  });

  getUploadUrl = async (key: string) => {
    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: key,
    });
    return getSignedUrl(this.s3, command, { expiresIn: 3600 });
  }
}

export const S3Service = new s3Service();