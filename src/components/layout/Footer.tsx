import { Brain } from "lucide-react";
import { BRAND, CONTACT_INFO } from "@/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">{BRAND.name}</span>
            </div>
            <p className="text-gray-400 mb-4">
              {BRAND.description}
            </p>
          </div>

          {/* Cursos */}
          <div>
            <h4 className="font-semibold mb-4">Cursos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  Gestión de Proyectos de IA
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  Automatización con n8n
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  Desarrollo con Copilot
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#consultoria" className="hover:text-white transition-colors">
                  Consultoría Especializada
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  Formación Empresarial
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Implementación IA
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {BRAND.name} {BRAND.tagline}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
