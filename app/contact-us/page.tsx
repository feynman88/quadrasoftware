"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import contactFormSchema from "@/lib/schema";
import { ContactFormInput } from "@/lib/schema";
import { useState } from "react";

// server action importing
import onSubmitAction from "@/actions/formSubmit";

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
  });

  // server action
  const onSubmit = async (data: ContactFormInput) => {
    // Set loading state and clear any previous error messages
    setIsLoading(true);
    setErrorMessage(null);

    try {
      // Submit form data to the server
      const result = await onSubmitAction(data);

      if (!result) {
        throw new Error("No response from server");
      }
      // Add a 1-second delay for better UX
      reset(); // Reset form

      // Handle the response
      if (result.success) {
        // if the submission is succesfull > show success message and reset form
        setIsSuccess(true);
        reset();
      } else {
        // Display error message from server
        setErrorMessage(result.message);
      }
    } catch (error) {
      // Handle any unexpected errors
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      // Reset loading state regardless of outcome
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1
          className={` text-4xl md:text-6xl font-bold mb-8 text-center text-white`}
        >
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-300 mb-12">
          Have questions? We would love to hear from you. Send us a message and
          we will respond as soon as possible.
        </p>

        {isSuccess ? (
          <div className="bg-green-900/50 border border-green-500 text-green-100 px-4 py-3 rounded relative mb-6">
            <p className="text-center">
              Thank you for your message! We will get back to you soon.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-4 w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-800/50 backdrop-blur-md rounded-3xl shadow-lg p-8 border border-gray-700"
          >
            {errorMessage && (
              <div className="bg-red-900/50 border border-red-500 text-red-100 px-4 py-3 rounded relative mb-6">
                <p>{errorMessage}</p>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200"
                >
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  className="p-2 mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-700/50 text-white placeholder-gray-400"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="mt-1 p-2 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-700/50 text-white placeholder-gray-400"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200"
                >
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="p-2 mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-700/50 text-white placeholder-gray-400"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
