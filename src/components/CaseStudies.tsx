"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Layers, ArrowRight } from "lucide-react";

const cases = [
    {
        client: "Lumen Capital",
        industry: "FinTech",
        title: "AI-Driven Market Analysis Engine",
        description: "Developed a real-time sentiment analysis and predictive engine that processes millions of financial data points to identify high-alpha opportunities.",
        results: ["+45% Analysis Speed", "92% Prediction Accuracy", "Real-time Processing"],
        stack: ["NLP", "PyTorch", "GCP"]
    },
    {
        client: "Isla Verde Collective",
        industry: "Hospitality",
        title: "Autonomous Guest Intelligence",
        description: "Implemented a multimodal AI system that personalizes the guest experience through computer vision and natural language processing.",
        results: ["30% Increase in Upsales", "Automated Check-in", "Sentiment Monitoring"],
        stack: ["Computer Vision", "LLMs", "Node.js"]
    },
    {
        client: "ShopWave Retail",
        industry: "E-commerce",
        title: "Dynamic Inventory Orchestration",
        description: "A large-scale data engineering project that optimizes global inventory distribution based on real-time demand signals and logistical constraints.",
        results: ["20% Less Waste", "Optimized Logistics", "Global Visibility"],
        stack: ["Data Pipelines", "BigQuery", "Spark"]
    }
];

import { useLanguage } from "@/context/LanguageContext";

export default function CaseStudies() {
    const { t } = useLanguage();

    const cases = t.cases.items.map((c, i) => ({
        ...c,
        industry: i === 0 ? "FinTech" : i === 1 ? "Hospitality" : "E-commerce",
        stack: i === 0 ? ["NLP", "PyTorch", "GCP"] : i === 1 ? ["Computer Vision", "LLMs", "Node.js"] : ["Data Pipelines", "BigQuery", "Spark"]
    }));

    return (
        <section id="case-studies" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">{t.cases.heading}</h2>
                        <p className="text-foreground/60 text-lg">
                            {t.cases.subheading}
                        </p>
                    </div>
                    <button className="flex items-center gap-2 text-primary font-bold group">
                        {t.cases.cta}
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {cases.map((c, i) => (
                        <motion.div
                            key={c.client}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-3xl flex flex-col h-full hover:bg-white/[0.04] transition-colors border-white/5"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{c.industry}</p>
                                    <h3 className="text-2xl font-bold">{c.client}</h3>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                    <ExternalLink className="w-4 h-4 text-white/40" />
                                </div>
                            </div>

                            <h4 className="text-lg font-bold mb-4">{c.title}</h4>
                            <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-1">
                                {c.desc}
                            </p>

                            <div className="space-y-3 mb-8">
                                {c.results.map((r) => (
                                    <div key={r} className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-primary" />
                                        <span className="text-xs font-bold">{r}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                {c.stack.map((s) => (
                                    <span key={s} className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">{s}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

