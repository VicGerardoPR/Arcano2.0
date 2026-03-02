"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Brain,
    Database,
    Cpu,
    Layout,
    CheckCircle2,
    ArrowUpRight,
    Globe,
    Palette,
    Layers,
    Megaphone
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
    const { t } = useLanguage();

    const services = [
        {
            ...t.services.items.ai,
            icon: Brain,
            tech: ["PyTorch", "TensorFlow", "HuggingFace", "Mistral", "GPT-4"]
        },
        {
            ...t.services.items.data,
            icon: Database,
            tech: ["Spark", "Airflow", "dbt", "Kafka", "Data-mesh"]
        },
        {
            ...t.services.items.automation,
            icon: Cpu,
            tech: ["Node.js", "Python", "Zapier", "n8n", "Custom SDKs"]
        },
        {
            ...t.services.items.saas,
            icon: Layout,
            tech: ["Next.js", "React", "PostgreSQL", "Vercel", "AWS"]
        },
        {
            ...t.services.items.web,
            icon: Globe,
            tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"]
        },
        {
            ...t.services.items.branding,
            icon: Palette,
            tech: ["Strategy", "Visuals", "Identity", "Premium", "Modern"]
        },
        {
            ...t.services.items.graphics,
            icon: Layers,
            tech: ["Adobe", "Figma", "Design", "Vector", "Creativity"]
        },
        {
            ...t.services.items.marketing,
            icon: Megaphone,
            tech: ["Ads", "SEO", "Strategy", "Analytics", "Scaling"]
        }
    ];

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-6"
                    >
                        {t.services.heading}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/60 max-w-2xl mx-auto text-lg"
                    >
                        {t.services.subheading}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl glass hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="text-primary w-6 h-6" />
                            </div>

                            <div className="flex items-start gap-6 mb-8">
                                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                    <p className="text-foreground/60 leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {service.subs.map((sub: string) => (
                                    <div key={sub} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-medium">{sub}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                {service.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-foreground/40 uppercase tracking-tighter">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

