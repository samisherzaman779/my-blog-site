import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 mt-16 transition-colors bg-white/10 dark:bg-gray-800/90 duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Branding */}
          <div>
            <h3 className="text-gray-600 dark:text-blue-500 text-xl font-bold">SamiDev</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-base leading-relaxed line-clamp-3">
              Building modern web experiences with Next.js, AI, and scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">Quick Links</h4>
            <ul className="space-y-2 text-base leading-relaxed">
              <li><a href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">Home</a></li>
              <li><a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">About</a></li>
              <li><a href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">Blog</a></li>
              <li><a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-600 dark:text-gray-300">Follow Me</h4>
            <div className="flex justify-center md:justify-start gap-4">
              {/* GitHub */}
              <Link
                href="https://github.com/samisherzaman779"
                target="_blank"
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition shadow-md"
              >
                <FaGithub size={20} /> GitHub
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/sami-sherzaman"
                target="_blank"
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition shadow-md"
              >
                <FaLinkedin size={20} /> LinkedIn
              </Link>

              {/* Twitter */}
              <Link
                href="https://x.com/SamiSherzaman"
                target="_blank"
                className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition shadow-md"
              >
                <FaTwitter size={20} /> Twitter
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t text-gray-600 dark:text-gray-300 pt-4 text-center text-base leading-relaxed">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-600 dark:text-blue-600 font-semibold">SamiDev</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
