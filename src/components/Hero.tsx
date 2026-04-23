"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Video with improved overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105 blur-[2px] brightness-[0.3]"
                >
                    <source src="/video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_100%)] opacity-60" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 z-[1] bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-20" />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 py-2 px-5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-10 backdrop-blur-md"
                    >
                        <Sparkles className="w-3 h-3" />
                        {t.hero.tag}
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
                        <span className="block opacity-90">{t.hero.title.split(' ').slice(0, -1).join(' ')}</span>
                        <span className="text-gradient drop-shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                            {t.hero.title.split(' ').pop()}
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="#contact">
                                <Button size="lg" className="h-16 px-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-black text-lg group shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] transition-all">
                                    {t.hero.getStarted}
                                    <ArrowRight className="ml-3 h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="lg" variant="outline" className="h-16 px-10 border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-full text-white font-black text-lg group transition-all">
                                {t.hero.explore}
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[150px] rounded-full animate-pulse z-0" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[150px] rounded-full animate-pulse z-0" />
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 group"
            >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-primary transition-colors">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
}
