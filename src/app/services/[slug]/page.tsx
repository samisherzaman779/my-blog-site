// src/app/services/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";

const servicesContent = {
  "ai-solutions": {
    title: "AI Solutions",
    description: "We offer cutting-edge AI services...",
  },
  automation: {
    title: "Automation",
    description: "Streamline your business operations...",
  },
  "web-development": {
    title: "Web Development",
    description: "We build responsive and modern websites...",
  },
  "web-scraping": {
    title: "Web Scraping",
    description: "Extract valuable data from any site...",
  },
} as const; // <-- type safety ke liye const

type ServiceKey = keyof typeof servicesContent;

type Props = {
  params: {
    slug: string;
  };
};

export default function ServicePage({ params }: Props) {
  const serviceKey = params.slug as ServiceKey;
  const service = servicesContent[serviceKey];

  if (!service) return notFound();

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold">{service.title}</h1>
      <p className="mt-4 text-gray-600">{service.description}</p>

      <div className="mt-8 space-x-4">
        <Link
          href="/services/ai-solutions"
          className="text-blue-600 hover:underline"
        >
          AI Solutions
        </Link>
        <Link
          href="/services/web-development"
          className="text-blue-600 hover:underline"
        >
          Web Development
        </Link>
      </div>
    </div>
  );
}
