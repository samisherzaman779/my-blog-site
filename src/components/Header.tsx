import Link from "next/link";


export default function Header() {
    return (
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold text-blue-600">TechXiz-Solutions</h1>
          <nav className="space-x-6 text-blue-800">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/services" className="hover:text-blue-500">Services</Link>
            <Link href="/blog" className="hover:text-blue-500">Blog</Link>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          </nav>
        </div>
      </header>
    )
  }
  