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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass border-b border-white/10" : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo actual placeholder - se asume que esta en public/arcano-logo.png */}
          <img
            src="/arcano-logo.png"
            alt="Arcano Intelligence"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-white/10 pl-8">
            <button
              onClick={() => setLanguage("en")}
              className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${language === "en" ? "text-primary" : "text-foreground/30 hover:text-foreground"
                }`}
            >
              EN
            </button>
            <span className="text-white/10 text-[10px]">|</span>
            <button
              onClick={() => setLanguage("es")}
              className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${language === "es" ? "text-primary" : "text-foreground/30 hover:text-foreground"
                }`}
            >
              ES
            </button>
          </div>

          <Link href="#contact">
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 group">
              {t.nav.contactBtn}
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
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
