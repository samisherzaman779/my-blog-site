import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();

    if (!title || !content) {
      return NextResponse.json({ error: "Title and Content required" }, { status: 400 });
    }

    const slug = title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

    const newPost = await client.create({
      _type: "post",
      title,
      slug: { current: slug },
      excerpt: content.substring(0, 120) + "...",
      content,
      publishedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, post: newPost });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
