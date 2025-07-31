"use client";

import Link from "next/link";
import { Code, BrainCircuit, ServerCog, Bot } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Modern and scalable websites built with Next.js, React, Tailwind & more.",
      icon: <Code size={40} className="text-indigo-600" />,
      href: "/services/web-development",
    },
    {
      title: "AI Solutions",
      description: "Smart AI-powered tools for automation, content generation, and user engagement.",
      icon: <BrainCircuit size={40} className="text-green-600" />,
      href: "/services/ai-solutions",
    },
    {
      title: "Web Scraping",
      description: "Custom scrapers to extract useful data from websites securely and efficiently.",
      icon: <ServerCog size={40} className="text-blue-600" />,
      href: "/services/web-scraping",
    },
    {
      title: "Automation Services",
      description: "Automate your tasks with bots, Zapier, APIs, and RPA solutions.",
      icon: <Bot size={40} className="text-pink-600" />,
      href: "/services/automation",
    },
  ];

  return (
    <section className="w-full px-4 py-10 sm:px-8 lg:px-20 bg-white dark:bg-gray-900" id="services">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">Our Services</h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-xl mx-auto">
          Explore how we can help you grow your business with the latest technology and solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="group bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-900"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
            <p className="mt-4 text-indigo-600 group-hover:underline text-sm">Learn more →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
