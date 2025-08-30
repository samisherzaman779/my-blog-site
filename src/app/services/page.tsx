// src/app/services/page.tsx
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    { title: "Web Development", slug: "web-development" },
    { title: "AI Solutions", slug: "ai-solutions" },
    { title: "Web Scraping", slug: "web-scraping" },
    { title: "Automation", slug: "automation" },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Our Services</h1>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li
            key={service.slug}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <Link
              href={`/services/${service.slug}`}
              className="text-blue-600 hover:underline"
            >
              Learn More →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
