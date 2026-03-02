"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.4]"
            >
                <source src="/video.mp4" type="video/mp4" />
            </video>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block py-1 px-4 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        Next-Gen AI Engineering
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight text-gradient">
                        The Intelligence Singularity for Enterprise
                    </h1>

                    <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Engineering bespoke AI solutions and high-performance data architectures
                        that transform complex enterprise operations into autonomous engines of growth.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold group">
                            Book a Strategy Call
                            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-white font-bold group">
                            Explore Solutions
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-60 bg-primary/20 blur-[120px] rounded-full z-0" />
        </section>
    );
}
