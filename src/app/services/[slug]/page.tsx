// src/app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>; // 👈 async params
};

const servicesContent = {
  "ai-solutions": {
    title: "AI Solutions",
    description: `
      Leverage Artificial Intelligence to transform your business. 
      From chatbots and recommendation systems to predictive analytics, 
      we create solutions that reduce costs, save time, and unlock growth.
    `,
    features: [
      "AI chatbots for customer engagement & support",
      "Machine learning models for business insights",
      "Recommendation systems to boost conversions",
      "AI-driven content generation & personalization",
    ],
  },
  automation: {
    title: "Automation",
    description: `
      Eliminate repetitive tasks and streamline operations with smart automation. 
      Our solutions integrate with your workflows, saving you time and reducing human error.
    `,
    features: [
      "Business process automation (BPA)",
      "Email, CRM, and social media automation",
      "Custom workflow bots & scripts",
      "Integration with third-party APIs & SaaS",
    ],
  },
  "web-development": {
    title: "Web Development",
    description: `
      We build fast, secure, and scalable websites that work seamlessly across devices. 
      Our solutions are designed to increase visibility, drive traffic, and enhance brand identity.
    `,
    features: [
      "Responsive, mobile-first design",
      "SEO-optimized architecture",
      "E-commerce integration & payment gateways",
      "Custom dashboards and API integrations",
    ],
  },
  "web-scraping": {
    title: "Web Scraping",
    description: `
      Extract and organize large-scale data securely with our web scraping services. 
      Perfect for market research, competitor analysis, and business intelligence.
    `,
    features: [
      "E-commerce product & price monitoring",
      "Competitor analysis & research data",
      "Structured datasets for analytics",
      "Lead generation from multiple sources",
    ],
  },
} as const;

export default async function ServicePage({ params }: PageProps) {
  // ✅ Await params
  const { slug } = await params;

  const service = servicesContent[slug as keyof typeof servicesContent];

  if (!service) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-4 text-blue-700">
        {service.title}
      </h1>

      {/* Subtitle */}
      <p className="text-lg mb-6">
        Discover how our {service.title.toLowerCase()} can empower your business.
      </p>

      {/* Description */}
      <p className=" leading-relaxed mb-8">
        {service.description}
      </p>

      {/* Features List */}
      <ul className="space-y-4">
        {service.features.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
            <span className="">{item}</span>
          </li>
        ))}
      </ul>

      {/* Call to Action */}
      <div className="mt-10 p-6 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">
          Ready to get started?
        </h2>
        <p className="">
          Contact us today to explore how{" "}
          <span className="font-medium">{service.title}</span> can transform
          your business operations.
        </p>
      </div>
    </div>
  );
}
