import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { INSTRUCTORS_DATA } from "@/data/instructors";

export function InstructoresSection() {
    return (
        <section id="instructores" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                        Nuestros Expertos
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                        Profesionales con experiencia práctica en implementación exitosa de IA en empresas reales.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 lg:gap-8">
                    {INSTRUCTORS_DATA.map((instructor) => (
                        <Card key={instructor.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] md:min-w-[380px] max-w-[380px] border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white group">
                            <CardContent className="p-6 lg:p-8">
                                <div className="mb-6">
                                    <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-6">
                                        <Image
                                            src={instructor.image}
                                            alt={instructor.name}
                                            fill
                                            className="rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                                            sizes="(max-width: 768px) 96px, 128px"
                                        />
                                        <div className="absolute inset-0 rounded-full ring-4 ring-emerald-100 group-hover:ring-emerald-200 transition-colors duration-300"></div>
                                    </div>
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{instructor.name}</h3>
                                <p className="text-emerald-600 font-bold mb-4 text-sm lg:text-base">{instructor.role}</p>
                                <p className="text-gray-600 leading-relaxed">{instructor.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
