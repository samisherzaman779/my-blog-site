// src/components/Services.tsx

"use client";

import Link from "next/link";
import { Code, BrainCircuit, ServerCog, Bot } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Modern websites built with Next.js, React, Tailwind & scalable architectures.",
      icon: <Code size={40} className="text-indigo-600 dark:text-indigo-400" />,
      href: "/services/web-development",
    },
    {
      title: "AI Solutions",
      description: "Smart AI-powered tools for automation, insights, and personalization.",
      icon: <BrainCircuit size={40} className="text-green-600 dark:text-green-400" />,
      href: "/services/ai-solutions",
    },
    {
      title: "Web Scraping",
      description: "Custom scrapers to gather structured data for analysis and decision-making.",
      icon: <ServerCog size={40} className="text-blue-600 dark:text-blue-400" />,
      href: "/services/web-scraping",
    },
    {
      title: "Automation",
      description: "Bots, workflows, and API integrations to automate business processes.",
      icon: <Bot size={40} className="text-pink-600 dark:text-pink-400" />,
      href: "/services/automation",
    },
  ];

  return (
    <section
      className="w-full px-4 py-10 sm:px-8 lg:px-20 transition-colors duration-300"
      id="services"
    >
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold ">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
            Services
          </span>
        </h2>
        <p className=" mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Explore how we help businesses grow with modern technology, AI, and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="group border-3 border-gray-500 dark:border-gray-500 rounded-2xl p-6 hover:shadow-xl transition duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 shadow-md flex flex-col justify-between"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold  group-hover:text-indigo-600 dark:group-hover:text-indigo-300">
              {service.title}
            </h3>
            <p className="mt-2 text-base landing-relaxed mb-2">
              {service.description}
            </p>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md transition-colors duration-300"
            >
              Learn more →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
