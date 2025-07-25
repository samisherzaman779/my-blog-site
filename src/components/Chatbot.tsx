"use client";
import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    const botMessage = { sender: "bot", text: data.reply || "No response." };

    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h4 className="font-bold">AI Assistant</h4>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 text-gray-900 rounded-lg max-w-[75%] ${
                  msg.sender === "user" ? "bg-blue-100 ml-auto" : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <p className="text-gray-400 text-sm">Bot is typing...</p>}
          </div>
          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me..."
              className="flex-1 text-gray-900 border rounded p-2"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 rounded"
            >
              ➤
            </button>
          </div>
        </div>
      )}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-gray-800 p-4 rounded-full shadow-lg"
        >
          💬
        </button>
      )}
    </div>
  );
}
