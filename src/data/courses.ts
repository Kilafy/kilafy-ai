import { Course } from "@/types";

export const COURSES_DATA: Course[] = [
  {
    id: "gestion-proyectos-ia",
    title: "Gestión de Proyectos de Inteligencia Artificial",
    subtitle: "Desde la idea hasta la implementación: cómo liderar con éxito proyectos de IA en tu organización",
    description: "Este curso está diseñado para profesionales, líderes y equipos que buscan entender, planificar y ejecutar proyectos de inteligencia artificial de forma estratégica y efectiva, sin necesidad de ser expertos técnicos.",
    icon: "Target",
    gradient: "from-emerald-500 to-teal-500",
    textColor: "text-emerald-100",
    learningObjectives: [
      "Comprender las capacidades reales de la IA (LLMs, GenAI, Machine Learning, etc.)",
      "Identificar casos de uso viables en tu organización",
      "Diseñar proyectos de IA centrados en impacto, datos y escalabilidad",
      "Elegir herramientas, modelos y proveedores adecuados",
      "Coordinar equipos de producto, tecnología y negocio",
      "Medir el éxito, iterar y evitar los errores más comunes en implementación de IA"
    ],
    modalityDuration: {
      modality: "Teórico-práctico con ejemplos reales",
      duration: "Flexible (8h, 12h o 16h)",
      targetAudience: "Gerentes, líderes de producto, consultores, analistas, CTOs, Project Managers y cualquier profesional que quiera liderar proyectos de IA con criterio y claridad."
    },
    levels: [
      {
        id: "profundidad-1",
        title: "Profundidad 1",
        duration: "8h",
        sessions: [
          {
            id: "session-1-1",
            title: "Fundamentos de la IA y oportunidades en los negocios",
            description: "Entiende qué es la inteligencia artificial, cómo funciona y cómo está transformando industrias. Identificarás oportunidades reales para aplicar IA en procesos empresariales, con ejemplos de casos de uso en diferentes sectores."
          },
          {
            id: "session-1-2",
            title: "Diseño de casos de uso de IA aplicados a tu empresa",
            description: "Aprende a detectar problemas que la IA puede resolver. Aplicarás un marco práctico para diseñar casos de uso, definir objetivos, recopilar requisitos y validar su viabilidad técnica y estratégica."
          },
          {
            id: "session-1-3",
            title: "Herramientas clave y aspectos técnicos básicos",
            description: "Explora las herramientas más comunes para implementar IA sin necesidad de programar. Comprenderás conceptos como APIs, modelos de lenguaje, RAG, bases vectoriales, y cómo orquestar soluciones usando herramientas como OpenAI, Gemini, Zapier o n8n."
          },
          {
            id: "session-1-4",
            title: "Implementación, riesgos y buenas prácticas",
            description: "Descubre cómo ejecutar un proyecto de IA: desde el prototipo hasta el despliegue. Analizarás riesgos (privacidad, sesgos, seguridad), aprenderás a documentar y liderar un proyecto ágilmente, y verás ejemplos reales de implementación exitosa."
          }
        ]
      },
      {
        id: "profundidad-2",
        title: "Profundidad 2",
        duration: "12h",
        sessions: [
          {
            id: "session-2-1",
            title: "Introducción a la Inteligencia Artificial en los negocios",
            description: "Explora los fundamentos de la IA y su impacto en empresas reales. Verás las principales aplicaciones (IA generativa, modelos de lenguaje, automatización), qué la hace diferente de otras tecnologías y cómo identificar oportunidades valiosas en tu organización."
          },
          {
            id: "session-2-2",
            title: "Detección de oportunidades y diseño de casos de uso",
            description: "Aprende a mapear procesos, identificar puntos de dolor, y detectar áreas donde la IA puede generar eficiencia o ingresos. Aplicarás plantillas para estructurar casos de uso reales y aprenderás cómo transformar ideas en soluciones viables."
          },
          {
            id: "session-2-3",
            title: "Planificación y diseño de soluciones con IA",
            description: "Convertirás un caso de uso en un plan ejecutable. Aprenderás a definir objetivos, procesos involucrados, requisitos de datos, herramientas necesarias, y criterios de éxito. Se cubrirá el diseño funcional, incluso sin ser técnico."
          },
          {
            id: "session-2-4",
            title: "Herramientas, plataformas y aspectos técnicos clave",
            description: "Revisaremos las herramientas más utilizadas para implementar IA (OpenAI, Claude, Gemini, Zapier, n8n, Pinecone, etc.). Entenderás conceptos esenciales como APIs, LLMs, bases vectoriales, embeddings, y cómo elegir la tecnología adecuada."
          },
          {
            id: "session-2-5",
            title: "Ética, privacidad y riesgos en proyectos de IA",
            description: "Analiza los aspectos éticos, de seguridad y privacidad al implementar IA. Cubriremos temas como protección de datos, sesgos algorítmicos, transparencia, cumplimiento regulatorio y cómo crear soluciones responsables y confiables."
          },
          {
            id: "session-2-6",
            title: "Ejecución de proyectos de IA y buenas prácticas",
            description: "Descubre cómo liderar y gestionar un proyecto de IA de forma efectiva. Verás cómo organizar equipos, aplicar ciclos ágiles (MVPs), documentar, iterar y medir impacto. Finalizaremos con un caso práctico completo de principio a fin."
          }
        ]
      },
      {
        id: "profundidad-3",
        title: "Profundidad 3",
        duration: "16h",
        sessions: [
          {
            id: "session-3-1",
            title: "Introducción a la IA aplicada en proyectos reales",
            description: "Comprende qué es (y qué no es) la inteligencia artificial, sus principales tipos (IA generativa, LLMs, machine learning) y cómo se está aplicando en diferentes industrias. Exploraremos casos de uso, mitos comunes y cómo evaluar oportunidades reales para tu organización."
          },
          {
            id: "session-3-2",
            title: "Identificación de casos de uso y oportunidades de IA",
            description: "Aprende a detectar procesos y flujos donde la IA puede generar mayor valor. Usaremos herramientas de mapeo de procesos, análisis de ROI y priorización. Verás ejemplos prácticos en ventas, atención al cliente, operaciones y marketing."
          },
          {
            id: "session-3-3",
            title: "Diseño de soluciones: de la idea al plan de implementación",
            description: "Te enseñaremos a estructurar un proyecto de IA paso a paso: definición de objetivos, datos necesarios, flujo de información, herramientas a considerar y métricas clave. El foco estará en traducir una necesidad de negocio en una solución ejecutable."
          },
          {
            id: "session-3-4",
            title: "Fundamentos técnicos para líderes no técnicos",
            description: "Sin necesidad de programar, entenderás los conceptos clave que necesitas para comunicarte con equipos técnicos: qué son los modelos, cómo se entrenan, qué es un embedding, cómo funcionan los LLMs, qué es RAG, qué es una base vectorial, y más."
          },
          {
            id: "session-3-5",
            title: "Evaluación de herramientas, modelos y plataformas",
            description: "Conoce el panorama actual de herramientas de IA: APIs (OpenAI, Claude, Gemini), plataformas sin código (n8n, Zapier, Make), proveedores de servicios, y cómo elegir la opción adecuada según presupuesto, velocidad, control de datos y escalabilidad."
          },
          {
            id: "session-3-6",
            title: "Gestión de datos, privacidad y riesgos éticos",
            description: "Abordaremos los temas clave en el manejo de datos para IA: calidad de datos, privacidad, tratamiento de datos sensibles, sesgos, transparencia y riesgos éticos. También exploraremos la regulación vigente y cómo actuar de forma responsable."
          },
          {
            id: "session-3-7",
            title: "Liderazgo, equipos y metodologías para proyectos de IA",
            description: "Aprende cómo armar equipos multidisciplinarios, establecer roles claros, aplicar metodologías ágiles, ciclos de prueba rápida (MVPs de IA), y cómo alinear objetivos de negocio y tecnología. También trataremos cómo gestionar expectativas internas."
          },
          {
            id: "session-3-8",
            title: "Casos prácticos y mejores prácticas",
            description: "Cerramos con un caso práctico de extremo a extremo: desde la identificación del problema hasta el diseño y despliegue simulado de una solución con IA. Aprenderás a documentar, iterar, medir impacto y compartir resultados para escalar tu proyecto."
          }
        ]
      }
    ]
  },
  {
    id: "automatizacion-n8n",
    title: "Automatización Inteligente con n8n",
    subtitle: "Automatiza procesos, integra herramientas y potencia tu empresa con IA",
    description: "Descubre el poder de la automatización sin código con n8n, una herramienta flexible, de código abierto y altamente conectable. En este curso práctico aprenderás desde los fundamentos hasta la construcción de flujos avanzados con inteligencia artificial, APIs, webhooks y agentes inteligentes.",
    icon: "Cog",
    gradient: "from-blue-500 to-cyan-500",
    textColor: "text-blue-100",
    learningObjectives: [
      "Crear workflows automatizados desde cero",
      "Integrar herramientas como Gmail, Slack, Google Sheets, CRMs y más",
      "Usar APIs y Webhooks para conectar cualquier servicio",
      "Implementar agentes de inteligencia artificial con memoria y contexto",
      "Conectar bases de datos vectoriales para aplicar RAG (Retrieval-Augmented Generation)",
      "Aplicar buenas prácticas para que tus automatizaciones sean seguras y escalables"
    ],
    modalityDuration: {
      modality: "100% teórico-práctico",
      duration: "Personalizable (8h, 12h o 16h)",
      targetAudience: "Equipos de tecnología, operaciones, producto, marketing o cualquier área que busque optimizar tareas repetitivas y tomar decisiones más inteligentes."
    },
    levels: [
      {
        id: "profundidad-1",
        title: "Profundidad 1",
        duration: "8h",
        sessions: [
          {
            id: "session-1-1",
            title: "Introducción y Primeros Workflows",
            description: "Descubre qué es n8n, por qué es tan potente para automatizar procesos y cómo se instala. Nos familiarizaremos con la interfaz, estructura del curso y objetivos. Luego crearás tus primeros workflows paso a paso, aprendiendo a importar/exportar, transformar datos y conectar credenciales."
          },
          {
            id: "session-1-2",
            title: "Integraciones: APIs, Webhooks y herramientas clave",
            description: "Aprende cómo conectar n8n con servicios externos usando APIs REST y Webhooks. Entenderás cómo obtener API keys, integrar herramientas como Slack o Gmail, y aplicar conceptos básicos de seguridad en automatizaciones reales."
          },
          {
            id: "session-1-3",
            title: "IA en acción: LLMs, Agentes y Automatización",
            description: "Conoce los fundamentos de la inteligencia artificial moderna y cómo integrarla con n8n. Aprenderás qué son los LLMs, cómo funcionan los agentes de IA, cómo aplicar prompt engineering y cómo darles memoria y contexto para tareas reales."
          },
          {
            id: "session-1-4",
            title: "Caso práctico guiado + Buenas prácticas",
            description: "Aplicarás todo lo aprendido en un caso práctico real: construirás un flujo automatizado con IA (como un asistente o chatbot). También abordaremos buenas prácticas para documentar, manejar errores y dejar tus flujos listos para producción."
          }
        ]
      },
      {
        id: "profundidad-2",
        title: "Profundidad 2",
        duration: "12h",
        sessions: [
          {
            id: "session-2-1",
            title: "Domina la Automatización con n8n",
            description: "Descubre qué es n8n, por qué es una herramienta poderosa para automatizar tareas y cómo se posiciona frente a otras plataformas. Aprenderás a instalarlo en distintos sistemas operativos, conocerás su estructura y entenderás cómo será el recorrido del curso."
          },
          {
            id: "session-2-2",
            title: "IA para Automatizadores: De GPT a GenAI",
            description: "Explora los fundamentos de la inteligencia artificial, desde cómo funcionan los modelos de lenguaje (LLMs) hasta su aplicación práctica en automatizaciones. Te introducirás en técnicas de prompt engineering y comprenderás el papel de la IA en procesos modernos."
          },
          {
            id: "session-2-3",
            title: "Crea tus Primeros Workflows",
            description: "Sumérgete en la interfaz de n8n y aprende a construir tus primeros workflows paso a paso. Verás cómo importar/exportar flujos, conectar credenciales, transformar datos y controlar el flujo de información para automatizar tareas efectivas desde cero."
          },
          {
            id: "session-2-4",
            title: "Conecta el Mundo: APIs, Webhooks y Servicios",
            description: "Aprende a integrar n8n con herramientas externas usando APIs y Webhooks. Conectarás servicios como Slack, Gmail o Airtable, entenderás cómo conseguir API keys, aplicar seguridad básica y automatizar flujos interconectados con el ecosistema digital."
          },
          {
            id: "session-2-5",
            title: "IA Inteligente: Agentes, Memoria y RAG",
            description: "Adéntrate en el mundo de los agentes de IA: cómo funcionan, cómo integran memoria, herramientas e instrucciones. Además, conocerás qué es RAG, cómo alimentar una base vectorial como Pinecone, y cómo lograr que tu IA acceda a conocimiento personalizado."
          },
          {
            id: "session-2-6",
            title: "Del Taller a la Acción: Buenas Prácticas y Caso Final",
            description: "Cierra el curso aplicando todo lo aprendido en un caso práctico de asistente personal inteligente. Aprenderás buenas prácticas como control de errores, documentación, modularidad y preparación para entornos de producción."
          }
        ]
      },
      {
        id: "profundidad-3",
        title: "Profundidad 3",
        duration: "16h",
        sessions: [
          {
            id: "session-3-1",
            title: "Introducción a n8n",
            description: "Descubre qué es n8n, por qué es una herramienta poderosa para automatizar procesos y cómo se compara con otras soluciones del mercado. Instalaremos n8n en diferentes sistemas operativos y nos familiarizaremos con el objetivo y estructura del curso."
          },
          {
            id: "session-3-2",
            title: "Fundamentos de Inteligencia Artificial",
            description: "Explora los conceptos esenciales de la inteligencia artificial, el papel de los modelos como GPT y cómo estas tecnologías están transformando el mundo. Aprenderás sobre LLMs, GenAI y técnicas de prompt engineering."
          },
          {
            id: "session-3-3",
            title: "Primeros pasos con n8n",
            description: "Conoce la interfaz de n8n y crea tus primeros workflows. Aprenderás a importar y exportar flujos, conectar credenciales y transformar datos paso a paso, entendiendo cómo fluye la información dentro de n8n."
          },
          {
            id: "session-3-4",
            title: "APIs, Webhooks y herramientas clave",
            description: "Aprende a integrar n8n con otras herramientas mediante APIs y Webhooks. Verás cómo conectar servicios populares, obtener API keys y aplicar principios básicos de seguridad en tus automatizaciones."
          },
          {
            id: "session-3-5",
            title: "Automatización de procesos reales",
            description: "Comprende cómo se aplica la automatización en la vida real y en la industria. Estudia y construye dos casos prácticos que te mostrarán el impacto de los workflows bien diseñados en tareas repetitivas y de negocio."
          },
          {
            id: "session-3-6",
            title: "Agentes de IA y memoria",
            description: "Adéntrate en el mundo de los agentes inteligentes. Aprende cómo funcionan, qué pueden hacer, cómo integran instrucciones, memoria, herramientas y toman decisiones basadas en contexto. Verás su arquitectura interna y rendimiento."
          },
          {
            id: "session-3-7",
            title: "RAG y bases de datos vectoriales",
            description: "Descubre cómo conectar tus agentes de IA a bases de datos vectoriales como Pinecone para permitirles acceder a conocimiento personalizado. Aprende sobre RAG, embeddings, tokens y cómo alimentar y consultar tu vector DB desde n8n."
          },
          {
            id: "session-3-8",
            title: "Buenas prácticas y caso práctico final",
            description: "Consolida todo lo aprendido aplicándolo en un caso real: un asistente personal inteligente. Aprenderás a documentar workflows, manejar errores, trabajar en equipo y asegurar tus automatizaciones para producción."
          }
        ]
      }
    ]
  },
  {
    id: "desarrollo-copilot",
    title: "Desarrollo con Copilot + Bolt/Lovable/V0",
    subtitle: "Desarrollo asistido por IA: maximiza tu productividad con herramientas modernas",
    description: "Aprende a desarrollar de forma más eficiente usando herramientas de IA como GitHub Copilot, Bolt, Lovable y V0. Descubre cómo colaborar efectivamente con la IA para crear aplicaciones de calidad.",
    icon: "Code",
    gradient: "from-purple-500 to-pink-500",
    textColor: "text-purple-100",
    learningObjectives: [
      "Dominar el desarrollo asistido por IA con GitHub Copilot",
      "Estructurar proyectos para colaboración efectiva con IA",
      "Crear documentación técnica optimizada para IA",
      "Implementar frameworks escalables de frontend y backend",
      "Utilizar herramientas visuales como Bolt, Lovable y V0",
      "Organizar equipos de desarrollo que trabajen con IA"
    ],
    modalityDuration: {
      modality: "Práctico con proyectos reales",
      duration: "Personalizable (8h, 12h o 16h)",
      targetAudience: "Desarrolladores, líderes técnicos, equipos de producto y cualquier profesional que quiera acelerar el desarrollo con IA."
    },
    levels: [
      {
        id: "profundidad-1",
        title: "Profundidad 1",
        duration: "8h",
        sessions: [
          {
            id: "session-1-1",
            title: "Fundamentos y preparación de proyectos con IA",
            description: "Explora cómo trabajar junto a copilotos como GitHub Copilot desde la planeación técnica del proyecto. Aprenderás cómo definir objetivos, usuarios, flujos y restricciones, y cómo estructurar documentación clara y útil para IA. Se introduce el concepto de la IA como colaborador técnico y cómo preparar contexto efectivo."
          },
          {
            id: "session-1-2",
            title: "Framework propio de Frontend y Backend con IA",
            description: "Sumérgete en tu framework propio de desarrollo frontend y backend basado en IA. Aprende cómo generar componentes, construir APIs, mantener modularidad y escalar desarrollos técnicos en colaboración con copilotos. Se abordan buenas prácticas, tests automáticos y diseño atómico para una implementación limpia y mantenible."
          },
          {
            id: "session-1-3",
            title: "Organización escalada + flujos de trabajo IA/Humano",
            description: "Comprende cómo escalar equipos que trabajan con IA: roles, pair programming humano-IA, revisión de código generada por copilotos, gobernanza técnica, manejo de deuda y versionado de prompts. Verás cómo coordinar entregas asincrónicas y sostener la calidad del desarrollo en el tiempo."
          },
          {
            id: "session-1-4",
            title: "Herramientas AI-first (Bolt, Lovable, V0) + Proyecto final",
            description: "Conoce plataformas como Bolt, Lovable y V0 para crear interfaces y lógica sin código. Aprende cuándo usarlas, cómo integrarlas a tu stack técnico y en qué casos aceleran el desarrollo sin sacrificar calidad. En la segunda parte, aplicarás todos los aprendizajes construyendo un mini-proyecto supervisado, combinando copiloto, frameworks y herramientas visuales."
          }
        ]
      },
      {
        id: "profundidad-2",
        title: "Profundidad 2",
        duration: "12h",
        sessions: [
          {
            id: "session-2-1",
            title: "Fundamentos y preparación de proyectos con IA",
            description: "Explora el rol del desarrollo asistido por IA y cómo colaborar efectivamente con herramientas como GitHub Copilot. Aprenderás principios clave para estructurar tu pensamiento técnico, detectar límites de la IA y cómo preparar correctamente un proyecto (objetivo, usuarios, restricciones, ética) antes de escribir código."
          },
          {
            id: "session-2-2",
            title: "Documentación técnica para IA: arquitectura, flujos y prompts",
            description: "Aprende a diseñar documentación pensada para consumo por IA. Verás cómo estructurar flujos, endpoints, lógica de negocio y cómo transformar esa documentación en contexto útil para copilotos. Se trabaja el concepto de la IA como 'nuevo miembro del equipo'."
          },
          {
            id: "session-2-3",
            title: "Framework de Frontend con IA",
            description: "Explora el framework propio de frontend basado en IA. Aprende a generar componentes escalables y reutilizables en colaboración con Copilot, siguiendo principios de diseño atómico y flujos de trabajo orientados a prompt + implementación + refinamiento."
          },
          {
            id: "session-2-4",
            title: "Framework de Backend con IA",
            description: "Profundiza en el framework propio de backend. Verás cómo construir APIs modulares, documentadas y testeadas con ayuda de IA. Aprenderás patrones para mantener consistencia, seguridad y claridad, aprovechando al máximo copilotos en tareas repetitivas y estructurales."
          },
          {
            id: "session-2-5",
            title: "Escalabilidad organizacional y trabajo en equipo con IA",
            description: "Comprende cómo organizar y escalar un equipo de desarrollo que trabaja con IA. Verás estrategias de colaboración humano-IA, pair programming, versionado de prompts, revisión de código, manejo de contexto y gobernanza técnica en proyectos a gran escala."
          },
          {
            id: "session-2-6",
            title: "Herramientas AI-first (Bolt, Lovable, V0) + Proyecto final",
            description: "Aprende a integrar herramientas visuales como Bolt, Lovable y V0 para prototipado rápido y lógica no-code. Se exploran sus casos de uso y cómo integrarlas con tu stack técnico sin perder control. En la segunda parte de la sesión se ejecuta un mini-proyecto práctico aplicando todos los conceptos aprendidos."
          }
        ]
      },
      {
        id: "profundidad-3",
        title: "Profundidad 3",
        duration: "16h",
        sessions: [
          {
            id: "session-3-1",
            title: "Fundamentos de desarrollo asistido por IA",
            description: "Explora cómo ha evolucionado el desarrollo con herramientas como GitHub Copilot. Aprende a estructurar tu pensamiento técnico para trabajar junto a la IA, entendiendo sus capacidades y límites. Se introducen los conceptos de colaboración humano-IA y cómo maximizar la productividad."
          },
          {
            id: "session-3-2",
            title: "Diseño y planificación de proyectos con IA",
            description: "Aprende a preparar un proyecto correctamente antes de escribir una línea de código. Abordaremos la importancia de definir bien el objetivo, usuarios, contexto, restricciones técnicas y consideraciones éticas. Se introducen formatos de diseño para inyectar contexto a la IA de forma eficiente."
          },
          {
            id: "session-3-3",
            title: "Documentación para IA: arquitectura, flujos y lógica",
            description: "Aprende cómo estructurar documentación orientada a IA que sea legible, accionable y actualizable. Verás cómo diseñar mapas de flujo, estructuras de endpoints, y documentación viva para el copiloto. Introducción al concepto de 'IA como desarrollador nuevo en el equipo'."
          },
          {
            id: "session-3-4",
            title: "Framework de Frontend con IA",
            description: "Conoce el framework propio de frontend basado en IA. Aprende a generar componentes escalables, reutilizables y documentados. Flujo de diseño → prompt → implementación → ajuste. Aplicación de principios de diseño atómico y separación de lógica en colaboración con IA."
          },
          {
            id: "session-3-5",
            title: "Framework de Backend con IA",
            description: "Explora el framework propio de backend optimizado para escalar con IA. Aprende a construir APIs modulares, seguras y claras. Se cubren patrones de diseño, generación de tests automáticos, y buenas prácticas para mantener consistencia en el código generado con copiloto."
          },
          {
            id: "session-3-6",
            title: "Organización escalada y trabajo en equipo con IA",
            description: "Aprende cómo escalar un equipo que usa IA en el día a día. Roles, flujos de trabajo asincrónicos, gestión de contexto, pair programming humano-IA, y revisión de código IA. Se introducen prácticas de gobernanza técnica, versionado de prompts y gestión de deuda técnica con IA."
          },
          {
            id: "session-3-7",
            title: "Bolt, Lovable y V0: herramientas low-code AI-first",
            description: "Explora plataformas como Bolt, Lovable y V0. Aprende cómo usarlas para prototipar interfaces, lógica y flujos de producto con velocidad. Comparativa, casos de uso ideales y cómo conectarlas con tus flujos tradicionales sin perder control técnico."
          },
          {
            id: "session-3-8",
            title: "Proyecto final + revisión cruzada IA/Humano",
            description: "Aplicación práctica de todos los conceptos: cada estudiante o equipo construye un módulo de frontend y backend con su respectiva documentación, usando herramientas Copilot + IA + frameworks + Bolt/V0 según el caso. Se realiza revisión cruzada y reflexiones finales sobre eficiencia, control y calidad."
          }
        ]
      }
    ]
  }
];
