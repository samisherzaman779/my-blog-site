import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
            Web Development & AI Solutions for Your Business
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-8">
            I help businesses grow with modern websites, AI automation, and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image
            src="/assets/hero-bg.png"
            alt="Web Development"
            width={500}
            height={500}
            className="rounded-xl shadow-xl w-full max-w-xs sm:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

  