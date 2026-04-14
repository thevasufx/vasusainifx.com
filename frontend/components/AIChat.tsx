import React, { useEffect, useRef, useState } from "react";
import type { ChatMessage } from "../types";
import { sendChatMessage } from "../services/chatApi";

export function AIChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      content:
        "Hi! I’m Vasu’s AI persona. Ask me about my background, skills, or projects.",
    },
  ]);
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [statusText, setStatusText] = useState<string>("Ready");
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  const send = async () => {
    const text = draft.trim();
    if (!text || isSending) return;

    setDraft("");
    setIsSending(true);
    setStatusText("Thinking…");
    setMessages((prev) => [...prev, { role: "user", content: text }]);

    try {
      const reply = await sendChatMessage(text);
      setMessages((prev) => [...prev, { role: "model", content: reply }]);
      setStatusText("Ready");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to reach the backend.";
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content:
            `I couldn't connect to the chat server. ` +
            `Make sure the backend is running on port 8080.\n\n` +
            `Error: ${message}`,
        },
      ]);
      setStatusText("Offline");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="glass-panel rounded-3xl border border-gray-700 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <div>
          <div className="text-sm font-extrabold tracking-widest text-amber-300 uppercase">
            Digital Twin
          </div>
          <div className="text-xs text-gray-400">Backend chat API</div>
        </div>
        <div
          className={`h-2.5 w-2.5 rounded-full ${
            statusText === "Offline"
              ? "bg-rose-400"
              : isSending
                ? "bg-amber-400 animate-pulse"
                : "bg-emerald-400"
          }`}
          aria-label={statusText}
          title={statusText}
        />
      </div>

      <div className="h-[420px] overflow-y-auto px-5 py-4 space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow ${
                m.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-900/70 text-gray-100 border border-gray-700"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="border-t border-gray-700 p-4">
        <div className="flex items-end gap-3">
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void send();
              }
            }}
            placeholder="Type a message…"
            rows={2}
            className="w-full resize-none rounded-2xl bg-black/40 border border-gray-700 px-4 py-3 text-sm text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          />
          <button
            type="button"
            onClick={() => void send()}
            disabled={!draft.trim() || isSending}
            className="px-5 py-3 rounded-2xl bg-amber-500 text-gray-900 text-sm font-extrabold tracking-wide disabled:opacity-40 disabled:cursor-not-allowed hover:bg-amber-400 transition-all"
          >
            {isSending ? "…" : "Send"}
          </button>
        </div>
        <div className="mt-2 text-[11px] text-gray-500">
          Press Enter to send, Shift+Enter for a new line.
        </div>
      </div>
    </div>
  );
}
