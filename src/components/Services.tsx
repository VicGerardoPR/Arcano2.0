"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Brain,
    Database,
    Cpu,
    Layout,
    CheckCircle2,
    ArrowUpRight
} from "lucide-react";

const services = [
    {
        title: "AI & Machine Learning",
        icon: Brain,
        description: "Advanced model development tailored to your enterprise needs, from predictive analytics to generative systems.",
        subservices: [
            "Custom NLP & LLM Fine-tuning",
            "Computer Vision Systems",
            "Predictive Modeling & Forecasting",
            "Multimodal AI Integration",
            "Autonomous AI Agents"
        ],
        tech: ["PyTorch", "TensorFlow", "HuggingFace", "Mistral", "GPT-4"]
    },
    {
        title: "Data Engineering",
        icon: Database,
        description: "Building resilient data foundations that ensure high-quality information flows across your entire organization.",
        subservices: [
            "End-to-end ETL Pipelines",
            "Data Warehousing (BigQuery, Snowflake)",
            "Real-time Analytics Streaming",
            "Data Governance & Quality",
            "Executive Dashboards"
        ],
        tech: ["Spark", "Airflow", "dbt", "Kafka", "Data-mesh"]
    },
    {
        title: "Intelligent Automation",
        icon: Cpu,
        description: "Orchestrating complex workflows through intelligent bots and API integrations that eliminate manual bottlenecks.",
        subservices: [
            "Workflow Orchestration",
            "Custom API Ecosystems",
            "Intelligent Monitoring Bots",
            "Legacy System Integration",
            "Process Optimization"
        ],
        tech: ["Node.js", "Python", "Zapier", "n8n", "Custom SDKs"]
    },
    {
        title: "Custom SaaS Products",
        icon: Layout,
        description: "Developing scalable, AI-native applications that provide unique value to your customers and internal teams.",
        subservices: [
            "AI-Powered Platforms",
            "Enterprise Portal Design",
            "MVP Fast-track Development",
            "Cloud-native Architectures",
            "SaaS Scaling & Security"
        ],
        tech: ["Next.js", "React", "PostgreSQL", "Vercel", "AWS"]
    }
];

export default function Services() {
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
                        Enterprise-Grade AI Excellence
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/60 max-w-2xl mx-auto text-lg"
                    >
                        We don't just build software; we engineer competitive advantages through
                        advanced data strategy and cutting-edge artificial intelligence.
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
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {service.subservices.map((sub) => (
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
