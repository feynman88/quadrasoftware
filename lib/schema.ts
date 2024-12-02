import { z } from "zod";

// Define the schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

// Export the schema for use on both the client and server
export type ContactFormInput = z.infer<typeof contactFormSchema>;
export default contactFormSchema;
