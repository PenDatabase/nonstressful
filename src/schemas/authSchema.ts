import * as z from 'zod';

export const createUserSchema = z.object({
    regNo: z.string("Invalide registration number"),
    name:  z.string("Name cannot be empty"),
    password: z.string("Password cannot be empty")
})

export const loginRequestSchema = z.object({
    regNo: z.string("Invalide registration number"),
    password:  z.string("Password cannot be empty").min(8, "Cannot be less than 8")
})

export type CreateUserRequest = z.infer<typeof createUserSchema>;

