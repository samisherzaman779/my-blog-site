"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%]
        mx-auto space-y-4 p-6 sm:p-8 
        border border-gray-300 dark:border-gray-700 
        rounded-2xl shadow-lg 
        bg-white dark:bg-gray-900 
        transition-colors duration-300
      "
    >
      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="
          w-full p-3 sm:p-4 text-base sm:text-lg
          border border-gray-300 dark:border-gray-600 
          rounded-lg 
          bg-gray-50 dark:bg-gray-800 
          text-gray-900 dark:text-gray-100 
          placeholder-gray-500 dark:placeholder-gray-400 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-colors duration-300
        "
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="
          w-full p-3 sm:p-4 text-base sm:text-lg
          border border-gray-300 dark:border-gray-600 
          rounded-lg 
          bg-gray-50 dark:bg-gray-800 
          text-gray-900 dark:text-gray-100 
          placeholder-gray-500 dark:placeholder-gray-400 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-colors duration-300
        "
      />

      {/* Message */}
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        className="
          w-full p-3 sm:p-4 text-base sm:text-lg
          border border-gray-300 dark:border-gray-600 
          rounded-lg 
          bg-gray-50 dark:bg-gray-800 
          text-gray-900 dark:text-gray-100 
          placeholder-gray-500 dark:placeholder-gray-400 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-colors duration-300
        "
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="
          w-full py-3 sm:py-4 px-6 text-base sm:text-lg font-medium
          rounded-lg
          bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 
          text-white
          transition-colors duration-300 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
          shadow-md
        "
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {/* Status Message */}
      {status && (
        <p
          className={`
            text-sm sm:text-base text-center mt-2 font-medium transition-colors duration-300
            ${
              status === "success"
                ? "text-green-600 dark:text-green-400"
                : status === "error"
                ? "text-red-600 dark:text-red-400"
                : "text-gray-600 dark:text-gray-300"
            }
          `}
        >
          {status === "success"
            ? "✅ Message sent successfully!"
            : status === "error"
            ? "❌ Failed to send message. Try again later."
            : status === "sending"
            ? "⏳ Sending..."
            : ""}
        </p>
      )}
    </form>
  );
}
