import { COMPANIES_DATA } from "@/data/companies";
import { CarouselCompanies } from "@/components/layout/CarouselCompanies";

export function EmpresasSection() {

  return (
    <section id="empresas" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Empresas que Confían en Nosotros
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Hemos trabajado con organizaciones de diferentes sectores e industrias, 
            transformando sus procesos con Inteligencia Artificial.
          </p>
        </div>

        <CarouselCompanies companies={COMPANIES_DATA} />

        {/* Texto adicional de confianza */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-lg">
            + Muchas más empresas confían en nuestras soluciones de IA
          </p>
        </div>
      </div>
    </section>
  );
}

