"use server"; // Indicates that this code is intended to run on the server side

import contactFormSchema from "@/lib/schema"; // Import the schema for validating the contact form data
import type { ContactFormInput } from "@/lib/schema"; // Import the type definition for the contact form input
import { Resend } from "resend"; // Import the nodemailer library for sending emails
import { headers } from "next/headers";
import sanitizeHtml from "isomorphic-dompurify"; // Add this package
import { rateLimit } from "@/lib/rateLimit"; // Create this utility

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function onSubmitAction(data: ContactFormInput) {
  try {
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || "unknown";
    const rateLimitResult = await rateLimit(ip);

    if (!rateLimitResult.success) {
      return {
        success: false,
        message: "Too many requests, please try again later",
      };
    }

    // Validate the input data using the schema
    const validatedFormData = contactFormSchema.safeParse(data);
    if (!validatedFormData.success) {
      // If validation fails, return an error response with validation errors
      return {
        success: false,
        message: "Validation failed",
        errors: validatedFormData.error.errors,
      };
    }

    // Sanitize user input
    const sanitizedData = {
      name: sanitizeHtml.sanitize(data.name),
      email: sanitizeHtml.sanitize(data.email),
      message: sanitizeHtml.sanitize(data.message),
    };

    await resend.emails.send({
      from: `Quadra Software Solutions <onboarding@resend.dev>`,
      to: ["maro1913@gmail.com"],
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0; padding: 20px; background-color: #f3f4f6; border-radius: 8px;">
            <p><strong>Name:</strong> ${sanitizedData.name}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">
            Sent from LaVela Red Sea contact form
          </p>
        </div>
      `,
    });

    // Add success response
    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error("Error sending email:", error); // Log the error

    return {
      success: false,
      message: "An error occurred while processing your request",
    }; // Return failure response
  }
}
