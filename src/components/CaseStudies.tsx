"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function CaseStudies() {
    const { t } = useLanguage();

    const cases = t.cases.items;

    return (
        <section id="case-studies" className="py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-4 block"
                        >
                            Portfolio
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            {t.cases.heading}
                        </h2>
                        <p className="text-foreground/60 text-lg md:text-xl max-w-xl">
                            {t.cases.subheading}
                        </p>
                    </div>
                    <motion.button 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-primary font-bold group bg-primary/5 px-8 py-4 rounded-full border border-primary/20 hover:bg-primary/10 transition-all"
                    >
                        {t.cases.cta}
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {cases.map((c, i) => (
                        <motion.div
                            key={c.client}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group flex flex-col h-full"
                        >
                            <a 
                                href={c.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="relative aspect-[16/10] mb-8 overflow-hidden rounded-[2rem] border border-white/10 block group-hover:border-primary/30 transition-colors"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40 z-10" />
                                <Image 
                                    src={c.image} 
                                    alt={c.client}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                    <div className="bg-primary text-primary-foreground p-4 rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                                        <ExternalLink className="w-6 h-6" />
                                    </div>
                                </div>
                            </a>

                            <div className="flex flex-col flex-1 px-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
                                        {c.industry}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">
                                    {c.client}
                                </h3>
                                <h4 className="text-lg font-bold text-foreground/80 mb-4">{c.title}</h4>
                                <p className="text-foreground/50 text-sm leading-relaxed mb-8 line-clamp-3">
                                    {c.desc}
                                </p>

                                <div className="space-y-3 mt-auto pt-6 border-t border-white/5">
                                    {c.results.map((r) => (
                                        <div key={r} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]" />
                                            <span className="text-xs font-bold text-foreground/70 uppercase tracking-wider">{r}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

