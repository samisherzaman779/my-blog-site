import Link from "next/link";

interface BlogCardProps {
  title: string;
  desc: string;
  date: string;
  slug: string;
}

export default function BlogCard({ title, desc, date, slug }: BlogCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{desc}</p>
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
