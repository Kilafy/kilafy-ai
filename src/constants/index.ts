import { ContactInfo, NavigationItem } from "@/types";

export const CONTACT_INFO: ContactInfo = {
  whatsappNumber: "+573165266949",
  whatsappMessage: "Hola, me interesa conocer más sobre los cursos de IA de Kilafy",
  email: "info@kilafy.com",
  phone: "+57 316 526 6949",
  address: "Colombia"
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: "inicio", label: "Inicio", href: "#inicio" },
  { id: "cursos", label: "Cursos", href: "#cursos" },
  { id: "consultoria", label: "Consultoría", href: "#consultoria" },
  { id: "instructores", label: "Instructores", href: "#instructores" },
  { id: "empresas", label: "Empresas", href: "#empresas" },
  { id: "contacto", label: "Contacto", href: "#contacto" }
];

export const BRAND = {
  name: "Kilafy IA",
  tagline: "para Empresas",
  description: "Transformando empresas con Inteligencia Artificial práctica y estratégica."
};
