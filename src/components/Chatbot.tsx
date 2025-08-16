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
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div
          className="
            w-[95vw] h-[80vh]           /* mobile view */
            sm:w-[28rem] sm:h-[32rem]   /* tablet view */
            md:w-[24rem] md:h-[28rem]   /* medium screens */
            lg:w-[26rem] lg:h-[30rem]   /* large screens */
            bg-gray-400 shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-gray-200 transition-all duration-300
          "
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-gray-200 p-3 sm:p-4 flex justify-between items-center">
            <h4 className="font-semibold text-base sm:text-lg flex items-center gap-2">
              <Bot size={24} className="sm:size-6" /> AI Assistant
            </h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-2 sm:p-3 overflow-y-auto space-y-2 bg-gray-600 scrollbar-thin scrollbar-thumb-gray-400">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-2 text-sm sm:text-base rounded-lg max-w-[80%] whitespace-pre-wrap break-words ${
                  msg.sender === "user"
                    ? "bg-blue-300 ml-auto text-gray-800"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <p className="text-gray-300 text-xs italic">Bot is typing...</p>}
          </div>

          {/* Input Area */}
          <div className="p-2 sm:p-3 border-t flex gap-2 bg-blue-100">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 text-black text-sm sm:text-base border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-4 rounded-lg transition shadow-md"
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
