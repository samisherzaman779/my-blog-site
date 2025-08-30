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

type SegmentParams = {
  title?: string;
  slug?: {
    current: string;
  };
  _createdAt: string;
};

export default async function BlogListPage() {
  const posts: SegmentParams[] = await client.fetch(query);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>

      {posts.length === 0 ? (
        <p className="text-gray-500">No posts found.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug?.current}>
              <Link href={`/blog/${post.slug?.current}`} className="block">
                <h2 className="text-xl text-blue-600 hover:underline">{post.title}</h2>
                <p className="text-sm text-gray-500">
                  {new Date(post._createdAt).toLocaleDateString()}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
