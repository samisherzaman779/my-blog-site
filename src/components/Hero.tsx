import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-20 px-4 sm:px-8 lg:px-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug">
            Web Development &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
              AI Solutions
            </span>{" "}
            for Your Business
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto lg:mx-0">
            I build modern websites, smart AI automation, and scalable digital solutions 
            that help businesses grow faster in today’s tech-driven world.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 transition"
            >
              🚀 Explore Services
            </Link>
            <Link
              href="/contact"
              className="bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition"
            >
              📩 Contact Me
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end animate-slideIn">
          <Image
            src="/assets/hero-bg.png"
            alt="Web Development"
            width={500}
            height={500}
            priority
            className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm lg:max-w-md transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
