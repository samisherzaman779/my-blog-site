import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 text-center md:text-left">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Web Development & AI Solutions for Your Business
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              I help businesses grow with modern websites, AI automation, and cutting-edge technology.
            </p>
            <div className="space-x-4">
              <Link
                href="/services"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>
  
          {/* Right Image */}
          <div className="flex-1 ml-60 mt-8 md:mt-0">
            <Image
            src="/assets/AI-Advancements-to-Expect-in-the-Next-10-Years-scaled.jpeg"
            alt="Web Development"
            className="rounded-xl shadow-lg"
            width={1000} height={1000}/>
          </div>
        </div>
      </section>
    )
  }
  
  