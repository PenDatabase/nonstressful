import * as z from 'zod';
import { FileType } from '../generated.prisma/enums.js';

export const FileSchema = z.object({
    type: z.enum(FileType),
    key: z.string(),
    copies: z.number().min(1,"You cannot upload 0 copies"),
    submissionId: z.uuid("Invalid Submission Id")
});

export const UploadFileSchema = z.object({
    fileName: z.string(),
    contentType: z.string()
})

export const DownloadFileSchema = z.object({
    fileKey: z.string()
})

export type FileBody = z.infer<typeof FileSchema>;