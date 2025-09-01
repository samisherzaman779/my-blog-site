import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BlogSection from "@/components/BlogSection";

export const metadata = {
  title: "TechXiz Solutions | Web Development & AI Services",
  description: "We provide modern web development, AI automation, and innovative digital solutions to help businesses grow.",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>

      {/* Blog Section */}
      <section id="blogs" className="scroll-mt-20">
        <BlogSection />
      </section>
    </main>
  );
}
