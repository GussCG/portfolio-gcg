export const projects = [
  {
    id: 1,
    title: "MusedMX",
    description:
      "Plataforma web enfocada en optimizar la exploración cultural en la zona centro de la Ciudad de México mediante recomendaciones personalizadas. El sistema utiliza algoritmos de recomendación basados en preferencias individuales, temáticas de interés, ubicación geográfica (radio de búsqueda) e historial de visitas. La aplicación ofrece una experiencia interactiva con mapas y permite a los usuarios calificar y comentar sus visitas para mejorar las recomendaciones futuras.",
    tech: [
      "Node.js",
      "Express.js",
      "React",
      "SASS",
      "MySQL",
      "Scikit-learn",
      "API de Google Maps",
    ],
    highlights: [
      "Sistema de recomendación de museos de la Ciudad de México basado en preferencias del usuario, ubicación e historial de visitas.",
      "Integración de un algoritmo de recomendación utilizando Scikit-learn para ofrecer sugerencias personalizadas.",
      "Interfaz de usuario interactiva con React y SASS para una experiencia fluida.",
      "Implementación de la API de Google Maps para mostrar la ubicación de los museos recomendados y facilitar la navegación.",
      "Sistema de calificación y comentarios para que los usuarios puedan compartir sus experiencias y mejorar las recomendaciones futuras.",
    ],
    demo: "",
    github: "https://github.com/GussCG/project-musedmx",
    category: "Web",
    achievements: [
      "Calificación final de 10/10 con mención honorífica en el Trabajo Terminal de la carrera de Ingeniería en Sistemas Computacionales en la EScom-IPN.",
      "Presentación del proyecto en el Congreso Internacional CAECH 2025.",
    ],
  },
  {
    id: 2,
    title: "Editor de Diagramas E-R",
    description:
      "Sistema de diseño de diagramas Entidad-Relación con validación y generación de diagrama relacional y exportación a SQL. Integración de ChatIA (Gemini) para asistencia en la creación de diagramas y resolución de dudas técnicas.",
    tech: ["React", "Node.js", "React Flow", "Gemini API"],
    highlights: [
      "Validación de diagramas E-R con reglas de integridad referencial.",
      "Interfaz de usuario intuitiva para diseñar diagramas E-R.",
      "Generación automática de código SQL a partir de los diagramas.",
      "Implementación de ChatIA (Gemini) para asistencia en la creación de diagramas y resolución de dudas técnicas.",
    ],
    demo: "https://app-der.vercel.app/",
    github: "https://github.com/GussCG/app-der",
    category: "Web",
  },

  {
    id: 3,
    title: "GeoWess",
    description:
      "Sistema integral para la gestión y seguimiento eficiente de proyectos de obra pública en la CDMX, diseñado bajo los lineamientos de la Ley de Obras Públicas local. La plataforma permite centralizar el control administrativo, financiero y operativo de las construcciones. Con funcionalidades que incluyen la generación automática de reportes mensuales, cálculo de estimaciones monetarias, control presupuestal y seguimiento de proyectos. Además, cuenta con un sistema multi-rol con permisos dinámicos para garantizar la seguridad y eficiencia en la gestión de los proyectos.",
    tech: ["Node.js", "Express.js", "Handlebars", "CSS", "MySQL"],
    highlights: [
      "Generación automática de reportes mensuales",
      "Calculo de estimaciones monetarias",
      "Control presupuestal y seguimiento de proyectos",
      "Sistema multi-rol con permisos dinámicos",
    ],
    demo: "",
    github: "https://github.com/GussCG/GeoWess/tree/master/src",
    category: "Web",
  },
  {
    id: 4,
    title: "NBA.GG API",
    description:
      "API REST desarrollada en Python utilizando FastAPI que consume datos oficiales de la NBA para generar estadísticas avanzadas y predicciones de resultados de partidos mediante un modelo predictivo. El sistema está diseñado para integrarse fácilmente con aplicaciones web o móviles, proporcionando endpoints estructurados y documentados. Implementación de modelo estadístico para predicción basada en métricas históricas.",
    tech: ["Python", "FastAPI", "Uvicorn"],
    highlights: [
      "Consumo de datos en tiempo real de la NBA.",
      "Modelo predictivo para pronosticar resultados de partidos.",
      "Arquitectura RESTful para facilitar la integración con aplicaciones de terceros.",
    ],
    demo: "",
    github: "https://github.com/GussCG/nba-gg",
    category: "Backend",
  },
  {
    id: 5,
    title: "QuizUp",
    description:
      "Aplicación móvil de trivia con múltiples categorías y niveles de dificultad. Permite a los usuarios participar en juegos de preguntas y respuestas, con un sistema de puntuación y ranking. La aplicación incluye autenticación de usuarios, gestión de perfiles y persistencia de records y estadísticas en la nube. Desarrollada con Flutter y Dart, utilizando Supabase para la autenticación y gestión de datos, e integrando una API REST para obtener preguntas de trivia actualizadas y dinámicas.",
    tech: ["Flutter", "Dart", "Supabase", "API REST"],
    highlights: [
      "Aplicación móvil de trivia con múltiples categorías y niveles de dificultad.",
      "Sistema de autenticación y gestión de usuarios utilizando Supabase.",
      "Integración de una API REST para obtener preguntas de trivia actualizadas y dinámicas.",
      "Persistencia de records y estadísticas de los usuarios en la nube",
      "Arquitectura móvil multiplataforma",
    ],
    demo: null,
    github: "https://github.com/GussCG/quizup",
    category: "Mobile",
  },
];
