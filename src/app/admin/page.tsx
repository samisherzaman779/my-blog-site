"use client";
import { useState } from "react";

export default function AdminPage() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const generateBlog = async () => {
    setLoading(true);
    setResult("");
    const res = await fetch("/api/generate-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic }),
    });
    const data = await res.json();
    setResult(data.content || "Failed to generate blog.");
    setLoading(false);
  };

  const saveBlog = async () => {
    setSaving(true);
    await fetch("/api/save-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: topic, content: result }),
    });
    setSaving(false);
    alert("Blog saved to Sanity!");
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">AI Blog Generator</h1>
      <input
        type="text"
        placeholder="Enter blog topic"
        className="w-full p-3 border rounded mb-4"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button
        onClick={generateBlog}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        {loading ? "Generating..." : "Generate Blog"}
      </button>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-semibold mb-2">Generated Content:</h2>
          <p className="whitespace-pre-line mb-4">{result}</p>
          <button
            onClick={saveBlog}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            {saving ? "Saving..." : "Save to CMS"}
          </button>
        </div>
      )}
    </section>
  );
}
