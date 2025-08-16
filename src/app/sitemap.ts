// app/sitemap.ts
import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client"; // ✅ fixed import path
import { groq } from "next-sanity";

// Define type for blog
type Blog = {
  slug: string;
  publishedAt: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const query = groq`*[_type == "post"]{ "slug": slug.current, publishedAt }`;
  const blogs: Blog[] = await client.fetch(query);

  return [
    {
      url: "https://my-blog-site-lake.vercel.app",
      lastModified: new Date(),
    },
    ...blogs
      .filter((blog) => blog.slug) // ✅ ensure slug exists
      .map((blog) => ({
        url: `https://my-blog-site-lake.vercel.app/blog/${blog.slug}`,
        lastModified: blog.publishedAt
          ? new Date(blog.publishedAt)
          : new Date(),
      })),
  ];
}
