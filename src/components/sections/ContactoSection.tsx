"use client";

import { MessageCircle, Mail, Phone, MapPin, Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/constants";
import Link from "next/link";

export function ContactoSection() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hola, me interesa conocer más sobre Kilafy AI")}`;

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-gradient-to-br from-emerald-500 to-teal-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400 rounded-full blur-2xl opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            ¿Listo para Transformar tu Empresa?
          </h2>
          <p className="text-xl lg:text-2xl text-emerald-100 leading-relaxed">
            Contáctanos hoy y comienza tu viaje hacia la transformación digital con Inteligencia Artificial
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* WhatsApp CTA Principal */}
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Prefieres WhatsApp?</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Obtén una respuesta inmediata. Nuestro equipo está listo para ayudarte con tu proyecto de IA.
              </p>
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Escribir por WhatsApp
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-4">
                Respuesta típica en menos de 2 horas
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email & Phone */}
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-900 hover:text-emerald-600 font-medium">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Teléfono</p>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-900 hover:text-emerald-600 font-medium">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Ubicación</p>
                      <span className="text-gray-900 font-medium">{CONTACT_INFO.address}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Horarios de Atención</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Lunes - Viernes</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sábado</span>
                    <span className="font-medium text-gray-900">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Domingo</span>
                    <span className="font-medium text-red-500">Cerrado</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Zona horaria: Colombia (UTC-5)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4">
            <MessageCircle className="h-6 w-6 text-white" />
            <span className="text-white font-medium">¿Tienes una pregunta específica?</span>
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                Preguntar ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
