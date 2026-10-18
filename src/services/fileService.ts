import { prisma } from "../lib/prisma.js";
import type { FileBody } from "../schemas/fileSchema.js";

class fileService{
    async uploadFile(body: FileBody, fileData:any){
        const file = await prisma.file.create({
            data: {
                key: `${fileData.key}`,
                type: body.type,
                copies: body.copies,
                submissionId: body.submissionId
            }
        })
    }
}

export const FileService = new fileService();