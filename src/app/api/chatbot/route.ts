import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Gemini Client Initialize
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { title } = await req.json();

    if (!title || title.trim() === "") {
      return NextResponse.json({ error: "Blog title is required" }, { status: 400 });
    }

    // Model selection
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Prompt for blog generation
    const prompt = `Write a detailed, SEO-friendly blog (1000 words) on the topic: "${title}". 
    Use headings (H2, H3), bullet points, and include a conclusion.`;

    // Generate content
    const result = await model.generateContent(prompt);
    const content = result.response.text();

    return NextResponse.json({ content });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to generate blog" }, { status: 500 });
  }
}
