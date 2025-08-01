import Link from "next/link";

interface BlogCardProps {
  title: string;
  desc: string;
  date: string;
  slug: string;
}

export default function BlogCard({ title, desc, date, slug }: BlogCardProps) {
  return (
    <div className="group bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
      <p className="text-gray-400 text-xs mb-4">📅 {date}</p>
      <Link
        href={`/blog/${slug}`}
        className="text-blue-600 font-medium hover:underline"
      >
        Read More →
      </Link>
    </div>
  );
}
