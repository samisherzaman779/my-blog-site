"use client";
import { useState } from "react";
import { Bot, X } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user" as const, text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botMessage = {
        sender: "bot",
        text: typeof data.reply === "string" ? data.reply : "No response.",
      } as const;
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot" as const, text: "Error: Failed to get response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-[26rem] h-[40rem] md:w-96 md:h-[28rem] lg:w-[26rem] lg:h-[30rem] bg-gray-400 shadow-xl rounded-2xl flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-gray-200 p-4 flex justify-between items-center">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Bot size={28} /> AI Assistant
            </h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-600">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 text-sm rounded-lg max-w-[75%] whitespace-pre-wrap ${
                  msg.sender === "user"
                    ? "bg-blue-300 ml-auto text-gray-800"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <p className="text-gray-400 text-xs italic">Bot is typing...</p>}
          </div>
          <div className="p-3 border-t flex gap-2 bg-blue-100">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 text-black text-sm border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 rounded-lg transition"
            >
              ➤
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
        >
          💬
        </button>
      )}
    </div>
  );
}
