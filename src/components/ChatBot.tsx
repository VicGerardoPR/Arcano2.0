"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
    role: "user" | "assistant";
    content: string;
};

import { useLanguage } from "@/context/LanguageContext";

export default function ChatBot() {
    const { t, language } = useLanguage();
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: t.chat.welcome
        }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Reset messages when language changes to show the welcome message in the new language
    useEffect(() => {
        setMessages([
            {
                role: "assistant",
                content: t.chat.welcome
            }
        ]);
    }, [language, t.chat.welcome]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map(m => ({
                        role: m.role,
                        content: m.content
                    }))
                }),
            });

            const data = await response.json();

            if (data.content) {
                setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
            } else {
                throw new Error("Invalid response");
            }
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: t.chat.error }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="v-ai" className="py-24 bg-white/[0.02]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 text-primary mb-4">
                                <Sparkles className="w-5 h-5" />
                                <span className="text-xs font-bold uppercase tracking-widest">{t.chat.tag}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                {t.chat.title}
                            </h2>
                            <p className="text-foreground/60 text-lg mb-8 leading-relaxed">
                                {t.chat.desc}
                            </p>

                            <div className="space-y-4">
                                {t.chat.features.map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span className="font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-[600px] flex flex-col glass rounded-3xl overflow-hidden border-primary/20 shadow-2xl shadow-primary/5"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-primary/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">{t.chat.assistantName}</p>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-wider">{t.chat.online}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div
                            className="flex-1 p-6 overflow-y-auto"
                            ref={scrollRef}
                        >
                            <div className="space-y-6">
                                {messages.map((message, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div className={`flex gap-3 max-w-[85%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${message.role === "user" ? "bg-white/10" : "bg-primary/20 text-primary"
                                                }`}>
                                                {message.role === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                                            </div>
                                            <div className={`p-4 rounded-2xl text-sm leading-relaxed ${message.role === "user"
                                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                                : "bg-white/5 text-foreground rounded-tl-none border border-white/5"
                                                }`}>
                                                {message.content}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="flex gap-3 items-center text-primary/50 text-xs font-bold px-4 py-2 rounded-full bg-primary/5">
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            {t.chat.thinking}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Input */}
                        <div className="p-6 border-t border-white/10 bg-black/20">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex gap-2"
                            >
                                <Input
                                    placeholder={t.chat.placeholder}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="bg-white/5 border-white/10 focus-visible:ring-primary h-12"
                                />
                                <Button size="icon" className="h-12 w-12 bg-primary hover:bg-primary/90 rounded-xl">
                                    <Send className="w-5 h-5" />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

