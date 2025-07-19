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
    <section id="consultoria" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Consultoría por Horas</h2>
          <p className="text-lg text-gray-600">
            Oferta flexible de consultoría especializada en IA para equipos y empresas que necesitan asesoría
            específica.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="h-8 w-8 text-emerald-600" />
                    <CardTitle className="text-2xl text-gray-900">Flexibilidad Total</CardTitle>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Contrata nuestros servicios por horas según tus necesidades específicas. 
                    Ideal para resolver dudas puntuales, implementar soluciones rápidas o 
                    recibir mentoría especializada.
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">¿Qué incluye?</h4>
                    {consultoriaFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Solicitar Consultoría
                    </Button>
                  </Link>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="h-8 w-8 text-emerald-600" />
                    <h3 className="text-xl font-bold text-gray-900">Modalidades y Precios</h3>
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
