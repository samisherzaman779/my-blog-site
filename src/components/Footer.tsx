export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">SamiDev</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Building modern web experiences with Next.js, AI, and scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
              <li><a href="/about" className="hover:text-blue-500 transition">About</a></li>
              <li><a href="/blog" className="hover:text-blue-500 transition">Blog</a></li>
              <li><a href="/contact" className="hover:text-blue-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Follow Me</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://github.com/" target="_blank" className="hover:text-blue-500 transition">GitHub</a>
              <a href="https://linkedin.com/" target="_blank" className="hover:text-blue-500 transition">LinkedIn</a>
              <a href="https://twitter.com/" target="_blank" className="hover:text-blue-500 transition">Twitter</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} <span className="font-semibold">SamiDev</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
