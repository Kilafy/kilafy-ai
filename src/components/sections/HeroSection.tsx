import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CONTACT_INFO } from "@/constants";
import Link from "next/link";

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-8 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 text-sm px-4 py-2 rounded-full shadow-sm">
            🚀 Formación Especializada en IA
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Transforma tu empresa con
            <span className="text-emerald-600 block lg:inline"> Inteligencia Artificial</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Cursos prácticos y consultoría especializada para implementar IA de forma estratégica en tu organización.
            <span className="block mt-2">Desde la gestión de proyectos hasta la automatización avanzada.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <MessageCircle className="mr-3 h-6 w-6" />
                Contactar por WhatsApp
              </Button>
            </Link>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate("cursos")}
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Ver Cursos
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
