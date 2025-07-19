import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { INSTRUCTORS_DATA } from "@/data/instructors";

export function InstructoresSection() {
  return (
    <section id="instructores" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Nuestros Instructores</h2>
          <p className="text-lg text-gray-600">
            Expertos con experiencia práctica en implementación de IA en empresas reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INSTRUCTORS_DATA.map((instructor) => (
            <Card key={instructor.id} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 768px) 128px, 128px"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                <p className="text-emerald-600 font-semibold mb-3">{instructor.role}</p>
                <p className="text-gray-600 text-sm">{instructor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
