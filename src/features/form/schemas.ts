import { z } from 'zod';

export const stepOneSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
});

export const stepTwoSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
});
