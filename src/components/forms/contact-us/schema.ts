import { z } from "zod";

export const contactUsFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email(),
    message: z.string().min(1, "Message is required"),
});


export type ContactUsFormData = z.infer<typeof contactUsFormSchema>;