import BlogCard from "./BlogCard";
import Link from "next/link";


const blogs = [
  {
    title: "Top 5 Web Development Trends in 2025",
    desc: "Discover the latest trends shaping the future of web development.",
    date: "July 20, 2025",
    slug: "web-development-trends-2025",
  },
  {
    title: "How AI is Changing the Freelancing Industry",
    desc: "Explore how artificial intelligence is revolutionizing freelancing.",
    date: "July 18, 2025",
    slug: "ai-in-freelancing",
  },
  {
    title: "Next.js 15 New Features Explained",
    desc: "Learn about the powerful updates in Next.js 15 and how to use them.",
    date: "July 15, 2025",
    slug: "nextjs-15-features",
  },
]

export default function BlogSection() {
  return (
    <section className="w-full px-4 py-10 sm:px-8 lg:px-20 bg-white dark:bg-gray-900" id="blog">
      <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
        Latest Blogs
      </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              desc={blog.desc}
              date={blog.date}
              slug={blog.slug}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  )
}
