"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.services, href: "#services" },
    { name: t.nav.chat, href: "#v-ai" },
    { name: t.nav.cases, href: "#case-studies" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-3 mx-4 mt-4 rounded-2xl glass border-white/10 shadow-2xl" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="/arcano-logo.png"
              alt="Arcano Intelligence"
              className="h-9 w-auto relative z-10 transition-transform group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-semibold tracking-wide text-foreground/60 hover:text-primary transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 border-l border-white/10 pl-10">
            {/* Language Switcher */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLanguage("en")}
                className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                  language === "en" ? "text-primary scale-110" : "text-foreground/30 hover:text-foreground"
                }`}
              >
                EN
              </button>
              <span className="text-white/5 text-[10px]">/</span>
              <button
                onClick={() => setLanguage("es")}
                className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                  language === "es" ? "text-primary scale-110" : "text-foreground/30 hover:text-foreground"
                }`}
              >
                ES
              </button>
            </div>

            <Link href="#contact">
              <Button 
                variant="outline" 
                className="h-10 px-6 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 rounded-full group"
              >
                <span className="text-[12px] font-bold uppercase tracking-wider">{t.nav.contactBtn}</span>
                <ArrowRight className="ml-2 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button onClick={() => setLanguage("en")} className={`text-[10px] font-bold ${language === "en" ? "text-primary" : "text-foreground/40"}`}>EN</button>
            <span className="text-white/10 text-[10px]">|</span>
            <button onClick={() => setLanguage("es")} className={`text-[10px] font-bold ${language === "es" ? "text-primary" : "text-foreground/40"}`}>ES</button>
          </div>
          <button
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 mt-4 px-6 py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="#contact" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground">
                {t.nav.contactBtn}
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
