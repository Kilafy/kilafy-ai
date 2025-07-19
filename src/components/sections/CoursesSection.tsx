import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { COURSES_DATA } from "@/data/courses";

export function CoursesSection() {
  return (
    <section id="cursos" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Nuestros Cursos Especializados
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Formación práctica y estratégica en las áreas más demandadas de la Inteligencia Artificial empresarial.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {COURSES_DATA.map((course) => (
            <Card key={course.id} className="border-0 py-0 gap-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white">
              <CardHeader className={`bg-gradient-to-r ${course.gradient} text-white py-8 px-8`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <DynamicIcon name={course.icon} className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl lg:text-3xl font-bold mb-2">
                      {course.title}
                    </CardTitle>
                    <CardDescription className={`${course.textColor} text-lg lg:text-xl font-medium opacity-90`}>
                      {course.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8 lg:p-12">
                <p className="text-gray-600 mb-10 text-lg lg:text-xl leading-relaxed">
                  {course.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 mb-6 text-lg">Aprenderás a:</h4>
                    <ul className="space-y-3">
                      {course.learningObjectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 leading-relaxed">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 mb-6 text-lg">Detalles del curso:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 leading-relaxed">
                          <strong className="text-gray-800">Modalidad:</strong> {course.modalityDuration.modality}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 leading-relaxed">
                          <strong className="text-gray-800">Duración:</strong> {course.modalityDuration.duration}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 leading-relaxed">
                          <strong className="text-gray-800">Dirigido a:</strong> {course.modalityDuration.targetAudience}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Course Levels Tabs */}
                <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                  <h4 className="font-bold text-gray-900 mb-6 text-lg">Niveles de Profundidad:</h4>

                  <Tabs defaultValue={course.levels[0]?.id || "profundidad-1"} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-white p-1 rounded-lg shadow-sm h-auto gap-1">
                      {course.levels.map((level) => (
                        <TabsTrigger
                          key={level.id}
                          value={level.id}
                          className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white px-1 py-2 sm:px-3 sm:py-2 rounded-md font-medium transition-all duration-200 text-xs sm:text-sm text-center flex-1 min-w-0"
                        >
                          <div className="truncate">
                            <span className="hidden sm:inline">Profundidad </span>
                            <span className="sm:hidden">P</span>
                            {level.title.replace('Profundidad ', '')} - {level.duration}
                          </div>
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {course.levels.map((level) => (
                      <TabsContent key={level.id} value={level.id} className="mt-8">
                        <div className="space-y-6">
                          {level.sessions.map((session, sessionIndex) => (
                            <div
                              key={session.id}
                              className="bg-white border-l-4 border-emerald-500 rounded-r-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                              <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-3">
                                <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full">
                                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                                </div>
                                <span className="text-lg">
                                  Sesión {sessionIndex + 1} – {session.title}
                                </span>
                              </h5>
                              <p className="text-gray-600 leading-relaxed pl-6 sm:pl-11">
                                {session.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
