import * as z from 'zod';
import { FileType } from '../generated.prisma/enums.js';

export const FileSchema = z.object({
    type: z.enum(FileType),
    file: z.file(),
    copies: z.number().min(1,"You cannot upload 0 copies"),
    submissionId: z.uuid("Invalid Submission Id")
});

export type FileBody = z.infer<typeof FileSchema>;