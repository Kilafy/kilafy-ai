"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { ConsultoriaSection } from "@/components/sections/ConsultoriaSection";
import { InstructoresSection } from "@/components/sections/InstructoresSection";
import { EmpresasSection } from "@/components/sections/EmpresasSection";
import { ContactoSection } from "@/components/sections/ContactoSection";
import { useScrollToSection } from "@/lib/hooks";

export default function KilafyLanding() {
  const { scrollToSection } = useScrollToSection();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />
      
      {/* Header fijo con mejor z-index y blur */}
      <Header onNavigate={scrollToSection} />
      
      {/* Contenido principal con mejor espaciado */}
      <main className="relative z-10">
        {/* Hero con animaciones mejoradas */}
        <HeroSection onNavigate={scrollToSection} />
        
        {/* Secciones principales con separadores visuales y transiciones */}
        <div className="space-y-0">
          <div className="transition-all duration-500 ease-in-out">
            <AboutSection />
          </div>
          
          <div className="transition-all duration-500 ease-in-out">
            <CoursesSection />
          </div>
          
          <div className="transition-all duration-500 ease-in-out">
            <ConsultoriaSection />
          </div>
          
          <div className="transition-all duration-500 ease-in-out">
            <InstructoresSection />
          </div>
          
          <div className="transition-all duration-500 ease-in-out">
            <EmpresasSection />
          </div>
          
          <div className="transition-all duration-500 ease-in-out">
            <ContactoSection />
          </div>
        </div>
      </main>

      {/* Footer mejorado */}
      <Footer />
    </div>
  );
}
    