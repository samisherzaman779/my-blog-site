"use client";

import Link from "next/link";
import { Code, BrainCircuit, ServerCog, Bot } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Modern and scalable websites built with Next.js, React, Tailwind & more.",
      icon: <Code size={40} className="text-indigo-600 dark:text-indigo-400" />,
      href: "/services/web-development",
    },
    {
      title: "AI Solutions",
      description: "Smart AI-powered tools for automation, content generation, and user engagement.",
      icon: <BrainCircuit size={40} className="text-green-600 dark:text-green-400" />,
      href: "/services/ai-solutions",
    },
    {
      title: "Web Scraping",
      description: "Custom scrapers to extract useful data from websites securely and efficiently.",
      icon: <ServerCog size={40} className="text-blue-600 dark:text-blue-400" />,
      href: "/services/web-scraping",
    },
    {
      title: "Automation Services",
      description: "Automate your tasks with bots, Zapier, APIs, and RPA solutions.",
      icon: <Bot size={40} className="text-pink-600 dark:text-pink-400" />,
      href: "/services/automation",
    },
  ];

  return (
    <section className="w-full px-4 py-10 sm:px-8 lg:px-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="services">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
            Services
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Explore how we can help you grow your business with the latest technology and innovative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="group bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition hover:bg-indigo-100 dark:hover:bg-indigo-700"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
            <p className="mt-4 text-indigo-600 dark:text-indigo-400 group-hover:underline text-sm">Learn more →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
