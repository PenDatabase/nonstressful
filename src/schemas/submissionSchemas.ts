import * as z from 'zod';

export const createSubmissionSchema = z.object({
    userId: z.uuid("Invalid user ID")
})

export const submissionSchema = z.object({
    id: z.uuid(),
    verified: z.boolean(),
    userId: z.uuid(),
    createdAt: z.coerce.date()
})