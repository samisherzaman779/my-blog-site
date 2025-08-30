// src/app/blog/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { groq } from "next-sanity";

// ---- Match Next.js generated PageProps shape ----
type RouteParams = { slug: string };
type PageProps = {
  params: Promise<RouteParams>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

async function getPost(slug: string) {
  const query = groq`*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    // NOTE: If using Sanity image object, you'll need a URL builder.
    // For now assuming it's a URL string already:
    mainImage,
    body,
    publishedAt
  }`;
  return client.fetch(query, { slug });
}

export async function generateStaticParams() {
  const query = groq`*[_type == "post"]{ "slug": slug.current }`;
  const slugs: { slug: string }[] = await client.fetch(query);
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params; // 👈 await the Promise
  const post = await getPost(slug);

  return {
    title: post ? post.title : "Blog Post",
    description: post ? post.body?.[0]?.children?.[0]?.text || "" : "Blog post",
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params; // 👈 await the Promise
  const post = await getPost(slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      {post.mainImage && (
        <Image
          src={post.mainImage}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-lg mb-4"
        />
      )}

      <PortableText value={post.body} />
    </div>
  );
}
