import { Carousel } from "@/components/ui/Carousel";
import { COMPANIES_DATA } from "@/data/companies";

export function EmpresasSection() {
  return (
    <section id="empresas" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Empresas que Confían en Nosotros</h2>
          <p className="text-lg text-gray-600">
            Hemos trabajado con organizaciones de diferentes sectores e industrias.
          </p>
        </div>

        <Carousel items={COMPANIES_DATA} itemsPerSlide={3} />
      </div>
    </section>
  );
}
