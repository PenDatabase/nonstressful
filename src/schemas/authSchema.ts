import * as z from 'zod';

export const createUserSchema = z.object({
    email: z.string("Invalide email"),
    name:  z.string("Name cannot be empty"),
    password: z.string("Password cannot be empty")
})

export const loginRequestSchema = z.object({
    email: z.string("Invalide email"),
    password:  z.string("Password cannot be empty").min(8, "Cannot be less than 8")
})

export type CreateUserRequest = z.infer<typeof createUserSchema>;

