import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kilafy AI",
  description: "Transformando empresas con Inteligencia Artificial práctica y estratégica. Cursos especializados, consultoría por horas y soluciones de IA para equipos y organizaciones.",
  keywords: ["Inteligencia Artificial", "IA", "Cursos IA", "Consultoría IA", "Automatización", "Machine Learning", "Capacitación empresarial", "Transformación digital"],
  authors: [{ name: "Kilafy AI" }],
  creator: "Kilafy AI",
  publisher: "Kilafy AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Kilafy AI - Transformando Empresas con Inteligencia Artificial",
    description: "Cursos especializados, consultoría por horas y soluciones de IA para equipos y organizaciones. Aprende a implementar IA de forma práctica y estratégica.",
    url: "https://kilafy.com",
    siteName: "Kilafy AI",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Kilafy AI - Transformando Empresas con Inteligencia Artificial",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kilafy AI - Transformando Empresas con IA",
    description: "Cursos especializados y consultoría en Inteligencia Artificial para empresas. Implementa IA de forma práctica y estratégica.",
    images: ["/preview.png"],
    creator: "@KilafyAI",
    site: "@KilafyAI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
    yahoo: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
