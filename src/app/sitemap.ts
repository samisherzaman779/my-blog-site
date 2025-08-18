// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const query = `*[_type == "post"]{
    "slug": slug.current,
    publishedAt
  }`;

  const blogs: { slug: string; publishedAt: string }[] = await client.fetch(query);

  return [
    {
      url: "https://my-blog-site-lake.vercel.app",
      lastModified: new Date(),
    },
    ...blogs.map((blog) => ({
      url: `https://my-blog-site-lake.vercel.app/blog/${blog.slug}`,
      lastModified: blog.publishedAt ? new Date(blog.publishedAt) : new Date(),
    })),
  ];
}
