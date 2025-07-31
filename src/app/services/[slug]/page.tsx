// src/app/services/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from 'next/link';


const servicesContent = {
  "ai-solutions": {
    title: "AI Solutions",
    description: "We offer cutting-edge AI services...",
  },
  "automation": {
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
};

type Props = {
  params: {
    slug: string;
  };
};

export default function ServicePage({ params }: Props) {
  const service = servicesContent[params.slug as keyof typeof servicesContent];

  if (!service) return notFound();

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold">{service.title}</h1>
      <p className="mt-4 text-gray-600">{service.description}</p>
      <Link href="/services/ai-solutions">AI Solutions</Link>
      <Link href="/services/web-development">Web Development</Link>
    </div>
  );
}
