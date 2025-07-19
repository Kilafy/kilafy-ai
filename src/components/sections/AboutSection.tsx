import { Target, Zap, Users, Cog, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  const features = [
    {
      icon: Target,
      title: "Enfoque Práctico",
      description: "Nos enfocamos en casos de uso reales y aplicables inmediatamente en tu organización, no en teoría abstracta."
    },
    {
      icon: Zap,
      title: "Estratégico",
      description: "Te ayudamos a identificar las mejores oportunidades de IA para tu negocio y a implementarlas con criterio estratégico."
    },
    {
      icon: Users,
      title: "Personalizado",
      description: "Adaptamos nuestros cursos y consultoría a las necesidades específicas de tu industria y equipo."
    }
  ];

  const targetAudience = [
    {
      icon: Users,
      title: "Líderes y Gerentes",
      description: "Que buscan liderar proyectos de IA estratégicos"
    },
    {
      icon: Cog,
      title: "Equipos Técnicos",
      description: "Desarrolladores y especialistas en automatización"
    },
    {
      icon: Target,
      title: "Consultores",
      description: "Que quieren especializarse en IA empresarial"
    },
    {
      icon: Brain,
      title: "Empresas",
      description: "Organizaciones que buscan adoptar IA"
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            ¿Por qué elegir Kilafy IA?
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            Somos especialistas en transformación empresarial con IA. Nuestro enfoque único combina 
            estrategia, práctica y resultados medibles.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white group">
                <CardHeader className="pb-3 pt-6">
                  <div className="p-3 bg-emerald-50 rounded-xl w-fit mx-auto mb-4 group-hover:bg-emerald-100 transition-colors">
                    <IconComponent className="h-8 w-8 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-6">
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Target Audience */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 lg:p-10 shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            ¿A quién está dirigido?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => {
              const IconComponent = audience.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                    <IconComponent className="h-8 w-8 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{audience.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{audience.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
