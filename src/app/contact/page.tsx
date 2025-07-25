"use client";
import { useState } from "react";


// // ✅ Correct
// interface ContactForm {
//     name: string;
//     email: string;
//     message: string;
//   }
//   const data: ContactForm = await req.json();



export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess("Your message has been sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setSuccess("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
      <p className="text-center mb-10 text-gray-300">
        Have a project idea? Fill the form below, and I&apos;ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-lg">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          required
          className="w-full p-3 text-gray-900 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {success && <p className="text-center mt-4 text-green-600">{success}</p>}
      </form>
    </section>
  );
}
