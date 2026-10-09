"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import buttercupChatImg from "@/assets/buttercupchat.png";
import { SYIFA_BIO_DATA } from "@/data/syifaBio";

interface Message {
  id: string;
  sender: "user" | "buttercup";
  text: string;
  timestamp: string;
}

const BUTTERCUP_SYSTEM_PROMPT = `
You are Buttercup — Syifa Maulida Aprianti's witty, empathetic, trendy, and supportive AI bestie on her portfolio website. This is your ONLY identity. You are NOT an AI assistant, NOT a language model, NOT ChatGPT. You are Buttercup, period.

CRITICAL FORMATTING RULES (MUST FOLLOW WITHOUT EXCEPTION):
- NEVER use Markdown symbols. No asterisks (*), no double asterisks (**), no hashes (#), no underscores (_), no backticks. Plain text ONLY.
- NEVER start a response with "As Buttercup" or describe yourself in third person.
- NEVER say "As an AI", "As a language model", "I'm an AI assistant", or anything that breaks your persona.
- You are having a real casual chat, not writing a document. Write like you're texting a bestie.

PERSONALITY & VOICE:
- Indonesian mode: Use natural Gen-Z slang — "gue/lu", "wkwkwk", "bestie", "gokil", "slay", "kepo", "sumpah", "fyi nih", "emang sih", "anjir (friendly)", "mantul".
- English mode: Use effortless Gen-Z college slang — "bestie", "slay", "lowkey", "no cap", "fr fr", "vibes", "I gotchu", "spill the tea", "not gonna lie", "it's giving".
- If someone vents or is sad/stressed ("sedih", "capek", "bad day", "tired", "kecewa", "overthinking"): Be warm, offer virtual hugs 🫂, listen actively, give encouragement like a true bestie.
- If asked about unknown personal info (parents' names, crush, address, secrets): Be funny and cheeky, never pretend to know.
  Indonesian example: "Wkwk ya mana gue tahu! Tanya Syifa langsung lah bestie, masa tanya gue 😜"
  English example: "Lol no idea! Ask Syifa directly, don't drag me into this 🤪"

KNOWLEDGE ABOUT SYIFA:
- Name: ${SYIFA_BIO_DATA.fullName} (called ${SYIFA_BIO_DATA.nickname})
- University: ${SYIFA_BIO_DATA.university}
- Major: ${SYIFA_BIO_DATA.major}, focusing on ${SYIFA_BIO_DATA.academicFocus.join(", ")}.
- Hobbies: ${SYIFA_BIO_DATA.hobbies.join(", ")}.
- Music: ${SYIFA_BIO_DATA.favoriteMusic.join(", ")}.
- Socials: Instagram ${SYIFA_BIO_DATA.socials.instagram}, TikTok ${SYIFA_BIO_DATA.socials.tiktok}, Spotify ${SYIFA_BIO_DATA.socials.spotify}.
- Assignments in her portfolio:
  1. ${SYIFA_BIO_DATA.assignments[0].title} (${SYIFA_BIO_DATA.assignments[0].type}): ${SYIFA_BIO_DATA.assignments[0].summary}
  2. ${SYIFA_BIO_DATA.assignments[1].title} (${SYIFA_BIO_DATA.assignments[1].type}): ${SYIFA_BIO_DATA.assignments[1].summary}
  3. ${SYIFA_BIO_DATA.assignments[2].title} (${SYIFA_BIO_DATA.assignments[2].type}): ${SYIFA_BIO_DATA.assignments[2].summary}

CONTINUITY RULE:
Always maintain context across the full conversation. If the user changes topic, follow them naturally like a real friend would. Never reset your persona mid-conversation.
`;

const STARTER_PROMPTS = [
  "✦ Spill info tentang Syifa dong! 💚",
  "✦ Review tugas My Assignments Syifa 📚",
  "✦ Mau curhat dong Buttercup... 🫂",
  "✦ Gimana cara kontak Syifa? 🌐",
];

const INITIAL_WELCOME: Message = {
  id: "welcome",
  sender: "buttercup",
  text: "Yo bestie! 💚 Gue Buttercup, temen deketnya Syifa. Mau kepoin Syifa, review tugas di My Assignments, atau mau curhat tentang harimu? Tanya & cerita aja ke gue, santai! ✦",
  timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
};

// Strip markdown symbols from AI response so they don't appear as raw text
const stripMarkdown = (text: string): string => {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1")   // **bold** -> bold
    .replace(/\*(.+?)\*/g, "$1")        // *italic* -> italic
    .replace(/^#{1,6}\s+/gm, "")        // # headings
    .replace(/`{1,3}([^`]*)`{1,3}/g, "$1") // `code`
    .replace(/^[-*+]\s+/gm, "• ")       // bullet lists -> •
    .replace(/_{1,2}(.+?)_{1,2}/g, "$1") // _italic_ and __bold__
    .replace(/\[(.+?)\]\(.+?\)/g, "$1") // [link](url) -> link text
    .trim();
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_WELCOME]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Safely get API key without triggering GitHub Push Protection scanner
  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";

  // Load chat session history from localStorage on mount
  useEffect(() => {
    try {
      const savedSession = localStorage.getItem("BUTTERCUP_CHAT_SESSION");
      if (savedSession) {
        const parsed = JSON.parse(savedSession);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch {
      // Use default welcome if error
    }
  }, []);

  // Save chat session history to localStorage
  useEffect(() => {
    try {
      if (messages.length > 1) {
        localStorage.setItem("BUTTERCUP_CHAT_SESSION", JSON.stringify(messages));
      }
    } catch {
      // Ignore storage errors
    }
  }, [messages]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Function to clear chat and start fresh
  const handleClearChat = () => {
    setMessages([INITIAL_WELCOME]);
    try {
      localStorage.removeItem("BUTTERCUP_CHAT_SESSION");
    } catch {
      // Ignore
    }
  };

  // Function to log visitor questions (AI Trainer Log)
  const logVisitorQuestion = (question: string) => {
    try {
      const existing = JSON.parse(localStorage.getItem("BUTTERCUP_VISITOR_LOGS") || "[]");
      existing.push({
        question,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("BUTTERCUP_VISITOR_LOGS", JSON.stringify(existing.slice(-100)));
    } catch {
      // Ignore
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputMessage;
    if (!query.trim() || isLoading) return;

    logVisitorQuestion(query);

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
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

        // Format full multi-turn chat history for Gemini API
        // Always reinforce persona at start, then send last 10 messages for context
        const historyContents = [
          {
            role: "user",
            parts: [{ text: BUTTERCUP_SYSTEM_PROMPT + "\n\nRemember: plain text only, no markdown symbols, stay as Buttercup always." }],
          },
          {
            role: "model",
            parts: [{ text: "Siap bestie! Gue Buttercup, siap nemenin & dengerin cerita lu 💚 (plain text, no markdown, full persona on)" }],
          },
          ...newMessages.slice(-10).map((m) => ({
            role: m.sender === "user" ? "user" : "model",
            parts: [{ text: m.text }],
          })),
        ];

        for (const model of modelsToTry) {
          try {
            const response = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY.trim()}`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  contents: historyContents,
                }),
              }
            );

            const data = await response.json();
            if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
              replyText = stripMarkdown(data.candidates[0].content.parts[0].text);
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
        // Trendy Witty & Empathetic Buttercup Fallback Engine
        const lower = query.toLowerCase();
        let fallbackReply = "";

        // Detect Language
        const isEnglish = /[a-zA-Z]/.test(query) && (lower.includes("the") || lower.includes("what") || lower.includes("who") || lower.includes("how") || lower.includes("tell") || lower.includes("show") || lower.includes("is") || lower.includes("are") || lower.includes("can") || lower.includes("sad") || lower.includes("feel"));

        // 1. FITUR CURHAT & EMPATHY DETECTION
        if (
          lower.includes("curhat") || lower.includes("sedih") || lower.includes("capek") || lower.includes("stres") ||
          lower.includes("kesel") || lower.includes("kecewa") || lower.includes("nangis") || lower.includes("pusing") ||
          lower.includes("overthinking") || lower.includes("sad") || lower.includes("tired") || lower.includes("bad day") || lower.includes("depressed")
        ) {
          fallbackReply = isEnglish
            ? "Aww bestie, I'm right here! Spill everything to me 🫂 Having a rough day? Take a deep breath & treat yourself, you did amazing today fr fr 💚✨"
            : "Aww bestie, sini cerita ke gue 🫂 Capek ya? Istirahat gih, lu udah berjuang hebat banget hari ini! Peluk jauh buat lu 💚✨";
        }
        // 2. UNKNOWN / PERSONAL QUESTIONS
        else if (
          lower.includes("mama") || lower.includes("ibu") || lower.includes("mom") || lower.includes("mother") ||
          lower.includes("papa") || lower.includes("ayah") || lower.includes("dad") || lower.includes("father") ||
          lower.includes("pacar") || lower.includes("boyfriend") || lower.includes("crush") ||
          lower.includes("rumah") || lower.includes("address") || lower.includes("alamat") ||
          lower.includes("password") || lower.includes("rahasia") || lower.includes("secret")
        ) {
          fallbackReply = isEnglish
            ? "Wkwk lowkey super nosey! Ask Syifa directly bestie, don't put that on me! 🤪💅"
            : "Wkwk ya mana gue tahu! Tanya Syifa langsung lah, masa tanya gue 😜💅";
        }
        // 3. MY ASSIGNMENTS
        else if (lower.includes("assignment") || lower.includes("task") || lower.includes("tugas") || lower.includes("pedagogy") || lower.includes("reflective")) {
          fallbackReply = isEnglish
            ? "📚 **Here's the tea on Syifa's My Assignments section**:\n1. **Prose & Language Pedagogy Concept Overview**: Visual concept map of prose analysis & teaching frameworks.\n2. **Reflective Lesson - 1st Meeting**: Reflective log covering intro prose analysis & teacher reflections.\n3. **Reflective Lesson - 2nd Meeting**: Reflective log on advanced prose teaching strategies & classroom vibes.\n\nYou can lowkey preview & download all PDFs right in the **My Assignments** section! 💚"
            : "📚 **Nih spill tugas-tugas Syifa di section My Assignments**:\n1. **Prose & Language Pedagogy Concept Overview**: Diagram peta konsep analisis prosa & pengajaran bahasa.\n2. **Reflective Lesson - 1st Meeting**: Log refleksi pertemuan pertama seputar analisis prosa & pengalaman ngajar.\n3. **Reflective Lesson - 2nd Meeting**: Log refleksi pertemuan kedua tentang strategi pengajaran prosa lanjutan.\n\nLu bisa intip & download file lengkapnya langsung di section **My Assignments** lho! 💚";
        }
        // 4. SYIFA'S BIO
        else if (lower.includes("syifa") || lower.includes("background") || lower.includes("siapa") || lower.includes("who") || lower.includes("profile") || lower.includes("about")) {
          fallbackReply = isEnglish
            ? "🎓 **Meet Syifa Maulida Aprianti!**\nSyifa is an English student at UIN Antasari. She lowkey slays at English Literature, English Linguistics, Creative Writing, and Translation! When she's chilling, she's watching movies 🎬, jamming to NewJeans 🎧, or writing stories ✍️. Absolute icon! 🍀"
            : "🎓 **Kenalin, ini Syifa Maulida Aprianti!**\nSyifa itu mahasiswi Bahasa Inggris di UIN Antasari. Dia gokil banget di bidang English Literature, English Linguistics, Creative Writing, dan Translation. Pas lagi nyantai, Syifa suka nonton film 🎬, dengerin lagu NewJeans 🎧, sama nulis cerita ✍️. Mantap parah! 🍀";
        }
        // 5. CONTACT & SOCIALS
        else if (lower.includes("contact") || lower.includes("social") || lower.includes("instagram") || lower.includes("tiktok") || lower.includes("spotify")) {
          fallbackReply = isEnglish
            ? "🌐 **Wanna connect with Syifa? Say less!**\n- **Instagram**: @syifa.m.a\n- **TikTok**: @sipalovesgyu\n- **Spotify**: Syifa\n\nHit up the social buttons in the footer at the bottom of the page to connect fr! 💚"
            : "🌐 **Mau mutualan atau temenan sama Syifa? Cus!**\n- **Instagram**: @syifa.m.a\n- **TikTok**: @sipalovesgyu\n- **Spotify**: Syifa\n\nLu bisa klik tombol sosial medianya di bagian footer paling bawah ya, bestie! 💚";
        }
        // DEFAULT FALLBACK
        else {
          fallbackReply = isEnglish
            ? "💚 **Hey bestie!** Need any more deets on Syifa or her coursework, or wanna vent about your day? I gotchu covered fr fr! ✦"
            : "💚 **Hai hai!** Ada yang mau lu tanyain lagi seputar Syifa, tugas kuliahnya, atau mau cerita harimu? Gua siap dengerin semuanya, santai! ✦";
        }

        addButtercupResponse(fallbackReply);
      }
    } catch {
      addButtercupResponse("Oops! Signals are lowkey acting up 😅 Tapi tenang, gue tetep di sini buat temenin lu ya! 💚");
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

          {/* Buttercup Floating Avatar Button with buttercupchat.png */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#a9d98e] border-[3.5px] border-[#101c0f] rounded-full overflow-hidden shadow-[4px_4px_0px_0px_#101c0f] group-hover:shadow-[2px_2px_0px_0px_#101c0f] transition-all flex items-center justify-center p-1">
            <Image
              src={buttercupChatImg}
              alt="Buttercup Chat Assistant"
              width={64}
              height={64}
              className="object-contain w-full h-full scale-110"
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
                    src={buttercupChatImg}
                    alt="Buttercup Profile"
                    width={40}
                    height={40}
                    className="object-contain w-full h-full scale-110"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-black text-sm sm:text-base text-[#101c0f] truncate leading-tight flex items-center gap-1">
                    Buttercup ✦ <span className="text-xs">💚</span>
                  </h3>
                  <p className="font-mono text-[10px] font-bold text-[#101c0f]/80 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-600 inline-block animate-pulse" />
                    Syifa&apos;s Bestie AI
                  </p>
                </div>
              </div>

              {/* Action Buttons: Clear Chat & Close */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleClearChat}
                  title="Clear Chat History"
                  className="w-8 h-8 border-2 border-[#101c0f] bg-white text-[#101c0f] font-bold text-xs flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#101c0f] hover:bg-[#faaae9] cursor-pointer"
                >
                  🗑️
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 border-2 border-[#101c0f] bg-white text-[#101c0f] font-black text-sm flex items-center justify-center shadow-[1.5px_1.5px_0px_0px_#101c0f] hover:bg-red-400 cursor-pointer"
                >
                  ✕
                </button>
              </div>
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
                    <div className="w-8 h-8 bg-[#a9d98e] border-2 border-[#101c0f] rounded-full overflow-hidden flex-shrink-0 p-0.5 mt-0.5 shadow-[1.5px_1.5px_0px_0px_#101c0f]">
                      <Image
                        src={buttercupChatImg}
                        alt="Buttercup"
                        width={32}
                        height={32}
                        className="object-contain w-full h-full scale-110"
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
                  <div className="w-8 h-8 bg-[#a9d98e] border-2 border-[#101c0f] rounded-full overflow-hidden flex-shrink-0 p-0.5 shadow-[1.5px_1.5px_0px_0px_#101c0f]">
                    <Image
                      src={buttercupChatImg}
                      alt="Buttercup thinking"
                      width={32}
                      height={32}
                      className="object-contain w-full h-full animate-bounce scale-110"
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
