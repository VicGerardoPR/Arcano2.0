import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ChatBot from "@/components/ChatBot";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <ChatBot />
      <CaseStudies />
      <Contact />

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <p className="text-foreground/30 text-xs font-bold uppercase tracking-widest">
            Arcano Intelligence &copy; {new Date().getFullYear()} | Engineered for Excellence
          </p>
        </div>
      </footer>
    </main>
  );
}
