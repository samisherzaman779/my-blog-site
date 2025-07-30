// app/blog/[slug]/page.tsx
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';

// revalidation time for ISR
export const revalidate = 60;

// GROQ query to get a blog post by slug
const query = groq`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    _createdAt
  }
`;

// Properly typed params directly in the function
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch(query, { slug: params.slug });

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">
        Published on {new Date(post._createdAt).toLocaleDateString()}
      </p>
      <div className="prose dark:prose-invert">
        <PortableText value={post.body} />
      </div>
    </div>
  );
}
