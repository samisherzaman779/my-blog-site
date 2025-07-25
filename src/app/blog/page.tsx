// app/blog/page.tsx
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export const revalidate = 60;

const query = groq`
  *[_type == "post"] | order(_createdAt desc){
    title,
    slug,
    _createdAt
  }
`;

type Post = {
  title: string;
  slug: {
    current: string;
  };
  _createdAt: string;
};

export default async function BlogListPage() {
  const posts: Post[] = await client.fetch(query);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug.current}>
            <Link href={`/blog/${post.slug.current}`}>
              <span className="text-xl text-blue-600 hover:underline">{post.title}</span>
              <p className="text-sm text-gray-500">
                {new Date(post._createdAt).toLocaleDateString()}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
