import { prisma } from "../lib/prisma";
import { FileBody } from "../schemas/fileSchema";

class fileService{
    async uploadFile(body: FileBody, fileData){
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