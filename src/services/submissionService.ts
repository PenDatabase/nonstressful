import { prisma } from '../lib/prisma.js';


class submissionService {
    async createSubmission(data: any){
        return await prisma.submission.create({
            data: data,
        });
    }

    async getSubmission(id: string){
        return await prisma.submission.findUnique({
            where: {id: id}
        });
    }

    async getSubmissions(){
        return await prisma.submission.findMany();
    }

    async deleteSubmission(id: string){
        await prisma.submission.delete({
            where: {id: id}
        });
    }
}

export const SubmissionService = new submissionService();