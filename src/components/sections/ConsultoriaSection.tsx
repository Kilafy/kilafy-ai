import { Clock, Users, CheckCircle, MessageCircle } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/constants";
import Link from "next/link";

export function ConsultoriaSection() {
  const consultoriaFeatures = [
    "Asesoría personalizada en proyectos de IA",
    "Workshops y sesiones privadas para equipos",
    "Implementación de soluciones específicas",
    "Auditoría de procesos para automatización",
    "Mentoría técnica en herramientas de IA",
    "Estrategia de adopción de IA empresarial"
  ];

  const pricingDetails = [
    { label: "Consultoría Individual", price: "Desde $150 USD/hora" },
    { label: "Consultoría para Equipos", price: "Desde $200 USD/hora" },
    { label: "Workshop Empresarial", price: "Desde $300 USD/hora" },
    { label: "Implementación Completa", price: "Cotización personalizada" }
  ];

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hola, me interesa conocer más sobre la consultoría por horas de Kilafy IA")}`;

  return (
    <section id="consultoria" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Consultoría por Horas
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Oferta flexible de consultoría especializada en IA para equipos y empresas que necesitan asesoría
            específica y resultados inmediatos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-emerald-100 rounded-xl">
                      <Clock className="h-8 w-8 text-emerald-600" />
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">Flexibilidad Total</CardTitle>
                  </div>
                  
                  <p className="text-gray-600 text-lg lg:text-xl mb-8 leading-relaxed">
                    Contrata nuestros servicios por horas según tus necesidades específicas. 
                    Ideal para resolver dudas puntuales, implementar soluciones rápidas o 
                    recibir mentoría especializada.
                  </p>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-bold text-gray-900 text-lg">¿Qué incluye?</h4>
                    {consultoriaFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <MessageCircle className="mr-3 h-5 w-5" />
                      Solicitar Consultoría
                    </Button>
                  </Link>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-emerald-100 rounded-xl">
                      <Users className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Modalidades y Precios</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {pricingDetails.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">{item.label}</span>
                        <span className="text-emerald-600 font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                    <p className="text-sm text-emerald-800">
                      <strong>Descuentos disponibles:</strong> Paquetes de 10+ horas tienen descuentos especiales. 
                      Contactanos para una cotización personalizada.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
