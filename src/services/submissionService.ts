import { prisma } from '../lib/prisma.js';
import type { User } from '../types/user.js';


class submissionService {
    async createSubmission(user: User){
        return await prisma.submission.create({
            data: {
                userId: user.id
            }
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