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
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="w-full px-4 py-12 sm:px-8 lg:px-20 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        {/* <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-12">
          Latest Blogs
        </h2> */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-12">
          Latest{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
            Blogs
          </span>
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* View All Button */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-block bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
