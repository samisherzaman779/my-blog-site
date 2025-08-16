// src/app/blog/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { groq } from "next-sanity";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const query = groq`*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    mainImage,
    body
  }`;
  const post = await client.fetch(query, { slug });
  return post;
}

export async function generateStaticParams() {
  const query = groq`*[_type == "post"] {
    "slug": slug.current
  }`;

  const slugs: { slug: string }[] = await client.fetch(query);
  return slugs.map((slugObj) => ({
    slug: slugObj.slug,
  }));
}

// Optional: generateMetadata for better SEO
export async function generateMetadata({ params }: BlogPageProps) {
  const post = await getPost(params.slug);
  return {
    title: post ? post.title : "Blog Post",
    description: post ? post.body?.[0]?.children?.[0]?.text || "" : "Blog post",
  };
}

export default async function BlogPost({ params }: BlogPageProps) {
  const post = await getPost(params.slug);

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
