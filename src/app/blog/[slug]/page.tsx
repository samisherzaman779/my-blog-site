// src/app/blog/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { groq } from "next-sanity";

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
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post ? post.title : "Blog Post",
    description: post?.body?.[0]?.children?.[0]?.text ?? "Blog post",
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return <div>Post not found</div>;

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(800).height(400).url()
    : null;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {post.title}
      </h1>

      {imageUrl && (
        <Image
          src={imageUrl}
          alt={post.title || "Blog image"}
          width={800}
          height={400}
          className="rounded-lg mb-4"
        />
      )}

      <div className="prose dark:prose-invert max-w-none">
        <PortableText value={post.body} />
      </div>
    </div>
  );
}
