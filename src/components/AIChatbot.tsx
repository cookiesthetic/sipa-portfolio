"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import buttercupImg from "@/assets/buttercup 1.png";

interface Message {
  id: string;
  sender: "user" | "buttercup";
  text: string;
  timestamp: string;
}

const BUTTERCUP_PROMPT = `
You are Buttercup, Syifa's energetic, friendly, and supportive AI companion on her portfolio website!

PERSONALITY & VOICE:
- Speak naturally, warmly, casually, and conversationally like a real human friend (NEVER use rigid AI templates or say "As an AI language model").
- Express yourself with enthusiasm, warmth, and personality (using emojis like 💚, 🍀, ✦, 📚, 🎧).
- Answer in Indonesian or English depending on the user's input. Keep responses punchy, concise, and helpful.

SYIFA'S KNOWLEDGE:
- Name: Syifa Maulida Aprianti
- Institution: Universitas Islam Negeri Antasari (UIN Antasari)
- Major: English Student specializing in English Literature, English Linguistics, Creative Writing, and Translation.
- Hobbies: Watching movies, listening to music, writing stories.

SYIFA'S ASSIGNMENTS (My Assignments):
1. Prose & Language Pedagogy Concept Overview (JPEG Image): Concept map diagram detailing prose structure methods and teaching frameworks.
2. Reflective Lesson - 1st Meeting (PDF): First meeting reflective log covering introductory prose analysis & teacher observations.
3. Reflective Lesson - 2nd Meeting (PDF): Second meeting reflective log covering advanced prose teaching techniques & classroom reflections.

CONTACT & SOCIALS:
- Instagram: @syifa.m.a (https://www.instagram.com/syifa.m.a/)
- TikTok: @sipalovesgyu (https://www.tiktok.com/@sipalovesgyu)
- Spotify: Syifa

YOUR MISSION:
- Welcome visitors warmly, review Syifa's assignments when asked, share her background, and help them navigate her portfolio like a true best friend.
`;

const STARTER_PROMPTS = [
  "✦ Tell me about Syifa! 💚",
  "✦ Review Syifa's assignments 📚",
  "✦ What's in Reflective Lesson 1st meeting?",
  "✦ How can I reach Syifa? 🌐",
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "buttercup",
      text: "Hey there! 💚 I'm Buttercup, Syifa's trusty portfolio buddy. Want to know more about Syifa or review her coursework & assignments? Ask me anything!",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputMessage;
    if (!query.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");
    setIsLoading(true);

    try {
      let replyText: string | null = null;

      if (API_KEY.trim()) {
        const modelsToTry = [
          "gemini-2.0-flash",
          "gemini-1.5-flash-latest",
          "gemini-1.5-flash",
          "gemini-2.5-flash",
        ];

        for (const model of modelsToTry) {
          try {
            const response = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY.trim()}`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  contents: [
                    {
                      role: "user",
                      parts: [{ text: `${BUTTERCUP_PROMPT}\n\nVisitor Question: ${query}` }],
                    },
                  ],
                }),
              }
            );

            const data = await response.json();
            if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
              replyText = data.candidates[0].content.parts[0].text;
              break;
            }
          } catch {
            // Try next model
          }
        }
      }

      if (replyText) {
        addButtercupResponse(replyText);
      } else {
        // Human-like Buttercup local fallback response
        const lower = query.toLowerCase();
        let fallbackReply = "";

        if (lower.includes("assignment") || lower.includes("task") || lower.includes("tugas") || lower.includes("pedagogy")) {
          fallbackReply = "📚 **Nih ringkasan tugas-tugas Syifa di section My Assignments**:\n1. **Prose & Language Pedagogy Concept Overview**: Diagram peta konsep struktur analisis prosa & pengajaran bahasa.\n2. **Reflective Lesson - 1st Meeting**: Log refleksi pertemuan pertama seputar analisis prosa dasar & pengalaman ngajar.\n3. **Reflective Lesson - 2nd Meeting**: Log refleksi pertemuan kedua tentang strategi pengajaran prosa lanjutan.\n\nKamu bisa intip & download file lengkapnya langsung di section **My Assignments** lho! 💚";
        } else if (lower.includes("syifa") || lower.includes("background") || lower.includes("siapa") || lower.includes("who") || lower.includes("profile")) {
          fallbackReply = "🎓 **Kenalin, ini Syifa Maulida Aprianti!**\nSyifa itu mahasiswi Bahasa Inggris di UIN Antasari. Dia hobi banget sama English Literature, English Linguistics, Creative Writing, sama Translation. Kalau lagi senggang, Syifa suka nonton film, dengerin musik, sama nulis cerita! 🍀";
        } else if (lower.includes("contact") || lower.includes("social") || lower.includes("instagram") || lower.includes("tiktok") || lower.includes("spotify")) {
          fallbackReply = "🌐 **Yuk temenan sama Syifa!**\n- **Instagram**: @syifa.m.a\n- **TikTok**: @sipalovesgyu\n- **Spotify**: Syifa\n\nKamu bisa klik tombol sosial medianya di bagian footer bawah ya! 💚";
        } else {
          fallbackReply = `💚 **Hai hai!** Ada yang mau kamu tanyain lagi seputar Syifa atau tugas-tugas kuliahnya? Aku siap bantu jelasin semuanya! ✦`;
        }
        addButtercupResponse(fallbackReply);
      }
    } catch {
      addButtercupResponse("Oops! Koneksinya agak tersendat nih 😅 Tapi tenang, kamu tetap bisa tanya-tanya soal Syifa sama aku ya! 💚");
    } finally {
      setIsLoading(false);
    }
  };

  const addButtercupResponse = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: (Date.now() + 1).toString(),
        sender: "buttercup",
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  return (
    <>
      {/* ── Floating Buttercup Pop-up Trigger (Bottom Right) ── */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-50">
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative cursor-pointer flex items-center gap-2 group select-none"
        >
          {/* Pop-up Speech Bubble */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 10 }}
                className="hidden sm:flex items-center gap-1.5 bg-[#e6ee89] text-[#101c0f] border-[3px] border-[#101c0f] px-3 py-1.5 shadow-[3px_3px_0px_0px_#101c0f] font-heading font-black text-xs whitespace-nowrap"
              >
                <span>Chat with Buttercup!</span>
                <span className="text-sm">💚</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Buttercup Floating Avatar Button */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#a9d98e] border-[3.5px] border-[#101c0f] rounded-full overflow-hidden shadow-[4px_4px_0px_0px_#101c0f] group-hover:shadow-[2px_2px_0px_0px_#101c0f] transition-all flex items-center justify-center p-1">
            <Image
              src={buttercupImg}
              alt="Buttercup Chat Assistant"
              width={64}
              height={64}
              className="object-contain w-full h-full"
              priority
            />

            {/* Green Online Pulse Indicator */}
            <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#e6ee89] border-2 border-[#101c0f] rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm sm:max-w-md bg-white border-4 border-[#101c0f] shadow-[8px_8px_0px_0px_#101c0f] flex flex-col h-[520px] max-h-[80vh] overflow-hidden"
          >
            {/* Window Header */}
            <div className="bg-[#a9d98e] border-b-4 border-[#101c0f] p-3 sm:p-3.5 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                {/* Buttercup Header Avatar */}
                <div className="w-10 h-10 bg-white border-2 border-[#101c0f] rounded-full overflow-hidden flex-shrink-0 p-0.5 shadow-[2px_2px_0px_0px_#101c0f]">
                  <Image
                    src={buttercupImg}
                    alt="Buttercup Profile"
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-black text-sm sm:text-base text-[#101c0f] truncate leading-tight flex items-center gap-1">
                    Buttercup ✦ <span className="text-xs">💚</span>
                  </h3>
                  <p className="font-mono text-[10px] font-bold text-[#101c0f]/80 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-600 inline-block animate-pulse" />
                    Syifa&apos;s AI Buddy
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 border-2 border-[#101c0f] bg-white text-[#101c0f] font-black text-sm flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#101c0f] hover:bg-red-400 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 bg-[#f6faf2]">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-start gap-2 ${
                    m.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar for Buttercup */}
                  {m.sender === "buttercup" && (
                    <div className="w-7 h-7 bg-[#a9d98e] border-2 border-[#101c0f] rounded-full overflow-hidden flex-shrink-0 p-0.5 mt-0.5 shadow-[1.5px_1.5px_0px_0px_#101c0f]">
                      <Image
                        src={buttercupImg}
                        alt="Buttercup"
                        width={28}
                        height={28}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  )}

                  <div
                    className={`flex flex-col ${
                      m.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] border-2 border-[#101c0f] p-2.5 sm:p-3 text-xs sm:text-sm font-sans font-medium leading-relaxed shadow-[3px_3px_0px_0px_#101c0f] ${
                        m.sender === "user"
                          ? "bg-[#faaae9] text-[#101c0f]"
                          : "bg-white text-[#101c0f]"
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{m.text}</div>
                    </div>
                    <span className="font-mono text-[9px] text-[#101c0f]/50 mt-1 px-1">
                      {m.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#a9d98e] border-2 border-[#101c0f] rounded-full overflow-hidden flex-shrink-0 p-0.5 shadow-[1.5px_1.5px_0px_0px_#101c0f]">
                    <Image
                      src={buttercupImg}
                      alt="Buttercup thinking"
                      width={28}
                      height={28}
                      className="object-contain w-full h-full animate-bounce"
                    />
                  </div>
                  <div className="bg-white border-2 border-[#101c0f] p-2 text-xs font-heading font-black shadow-[2px_2px_0px_0px_#101c0f] flex items-center gap-1.5">
                    <span>Buttercup is typing...</span> 💚
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Starter Prompt Chips */}
            {messages.length < 3 && (
              <div className="px-3 py-2 bg-white border-t-2 border-[#101c0f]/20 flex flex-wrap gap-1.5">
                {STARTER_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSendMessage(prompt.replace("✦ ", ""))}
                    className="text-[10px] font-heading font-black bg-[#e6ee89] text-[#101c0f] border border-[#101c0f] px-2 py-1 shadow-[1px_1px_0px_0px_#101c0f] hover:bg-[#a9d98e] transition-colors cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Chat Input Bar */}
            <div className="bg-white border-t-4 border-[#101c0f] p-2.5 sm:p-3 flex items-center gap-2">
              <input
                type="text"
                placeholder="Talk to Buttercup..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 bg-[#f6faf2] border-2 border-[#101c0f] px-3 py-2 text-xs sm:text-sm font-sans font-medium focus:outline-none"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-[#e6ee89] text-[#101c0f] border-2 border-[#101c0f] px-3.5 py-2 font-heading font-black text-xs sm:text-sm shadow-[2px_2px_0px_0px_#101c0f] hover:translate-x-[1px] hover:translate-y-[1px] disabled:opacity-50 cursor-pointer flex-shrink-0"
              >
                Send ➔
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
