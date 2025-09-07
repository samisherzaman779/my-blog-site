// src/app/services/page.tsx
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    { title: "Web Development", slug: "web-development", desc: "Modern, responsive, and SEO-friendly websites to grow your business online." },
    { title: "AI Solutions", slug: "ai-solutions", desc: "Smart AI-powered tools & automation that save time and boost productivity." },
    { title: "Web Scraping", slug: "web-scraping", desc: "Extract valuable data from websites to make informed business decisions." },
    { title: "Automation", slug: "automation", desc: "Automate repetitive workflows to improve efficiency and reduce costs." },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6 ">Our Services for Your Business</h1>
      <p className="text-gray-500 mb-12">
        At <span className="font-semibold text-blue-500">TechXiz-Solutions</span>, we provide cutting-edge services designed to
        help your business grow, scale, and stay ahead in the digital world.
      </p>
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li
            key={service.slug}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.desc}</p>
            <Link
              href={`/services/${service.slug}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
