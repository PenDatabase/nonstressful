import { prisma } from "../lib/prisma.js";
import type { FileBody } from "../schemas/fileSchema.js";
import { S3Service } from "../common/services/s3Service.js";
import crypto from 'crypto';

class fileService{
    getUploadUrl = async (fileName: string) => {
        const fileKey = `uploads/${Date.now()}-${crypto.randomBytes(6).toString('hex')}-${fileName}`;
        const fileUploadUrl = await S3Service.getUploadUrl(fileKey);
        return {
            fileUploadUrl: fileUploadUrl,
            fileKey: fileKey
        }
    }

    createFile = async (fileBody: FileBody) => {
        return await prisma.file.create({
            data: {
                type: fileBody.type,
                copies: fileBody.copies,
                submissionId: fileBody.submissionId,
                key: fileBody.key
            }
        });
    }
}

export const FileService = new fileService();