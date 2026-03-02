"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="glass rounded-[3rem] overflow-hidden border-white/5 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Contact Info */}
                        <div className="p-12 lg:p-20 bg-primary flex flex-col justify-between text-primary-foreground">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Ready to Engineer Your Future?</h2>
                                <p className="text-primary-foreground/80 text-lg mb-12 max-w-md">
                                    Let's discuss your enterprise's potential for intelligent transformation.
                                    Send us a message to start the conversation.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest opacity-60">Email Address</p>
                                            <p className="text-lg font-bold">info@arcanointelligence.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest opacity-60">Business Inquiry</p>
                                            <p className="text-lg font-bold">1 939 383 3645</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 pt-12 border-t border-white/10 uppercase tracking-widest text-xs font-black">
                                ARCANO INTELLIGENCE &copy; 2024
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-12 lg:p-20 bg-black/40 backdrop-blur-3xl">
                            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                                <input type="hidden" name="access_key" value="0e0333d7-27d1-4f1f-a3f0-9a262444a155" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">Full Name</label>
                                        <Input name="name" required placeholder="John Doe" className="bg-white/5 border-white/10 h-14 rounded-2xl focus:ring-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">Company Email</label>
                                        <Input name="email" type="email" required placeholder="john@company.com" className="bg-white/5 border-white/10 h-14 rounded-2xl focus:ring-primary" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">Project Scope</label>
                                    <select name="project_scope" className="w-full bg-white/5 border border-white/10 h-14 rounded-2xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                                        <option className="bg-background">AI & Machine Learning</option>
                                        <option className="bg-background">Data Engineering</option>
                                        <option className="bg-background">SaaS Development</option>
                                        <option className="bg-background">Strategy Consulting</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/40 ml-1">How can we help?</label>
                                    <textarea
                                        name="message"
                                        required
                                        placeholder="Briefly describe your project or challenges..."
                                        className="w-full bg-white/5 border border-white/10 min-h-[150px] rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button type="submit" className="h-16 flex-1 rounded-2xl bg-primary text-primary-foreground font-black text-lg group w-full">
                                        Send Message
                                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
