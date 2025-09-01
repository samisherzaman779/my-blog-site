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
            w-[95vw] h-[80vh] sm:w-[28rem] sm:h-[32rem] md:w-[24rem] md:h-[28rem] lg:w-[26rem] lg:h-[30rem]
            bg-gray-100 dark:bg-gray-900 shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-gray-300 dark:border-gray-700
            transition-all duration-300
          "
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 sm:p-4 flex justify-between items-center">
            <h4 className="font-semibold text-base sm:text-lg flex items-center gap-2">
              <Bot size={24} className="sm:size-6" /> AI Assistant
            </h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-2 sm:p-3 overflow-y-auto space-y-2 bg-gray-200 dark:bg-gray-800 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 transition-colors duration-300">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-2 text-sm sm:text-base rounded-lg max-w-[80%] whitespace-pre-wrap break-words transition-colors duration-300 ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <p className="text-gray-500 dark:text-gray-400 text-xs italic">Bot is typing...</p>
            )}
          </div>

          {/* Input Area */}
          <div className="p-2 sm:p-3 border-t border-gray-300 dark:border-gray-700 flex gap-2 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 text-gray-900 dark:text-gray-100 text-sm sm:text-base border border-gray-400 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 transition-colors duration-300"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-4 rounded-lg transition shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              ➤
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          💬
        </button>
      )}
    </div>
  );
}
