import { MetadataRoute } from "next";
import { client } from "@/lib/sanity";


// // ✅ Correct
// interface ContactForm {
//     name: string;
//     email: string;
//     message: string;
//   }
//   const data: ContactForm = await req.json();


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const query = `*[_type == "post"]{ "slug": slug.current, publishedAt }`;
  const blogs = await client.fetch(query);

  return [
    {
      url: "https://your-website-url.com",
      lastModified: new Date(),
    },
    ...blogs.map((blog: any) => ({
      url: `https://your-website-url.com/blog/${blog.slug}`,
      lastModified: new Date(blog.publishedAt),
    })),
  ];
}
