export const personalInfo = {
  name: "Ximena Valeria Velasco",
  title: "Profesional de QA",
  email: "xvaler@yahoo.es",
  linkedin: "https://www.linkedin.com/in/valeria-velasco-garcia/",
  github: "https://github.com/xvalevg",
}

export const aboutMe = {
  description: `Soy una profesional de QA con experiencia en pruebas funcionales de APIs y automatización, comprometida con garantizar productos de calidad y con una fuerte orientación al usuario final. Me apasiona participar en proyectos que representen un reto, no solo técnico, sino también en términos de comunicación, análisis y empatía con los usuarios.

A lo largo de mi experiencia he trabajado con herramientas como Postman, Python, Selenium y Azure DevOps para diseñar, ejecutar y gestionar pruebas efectivas. He contribuido activamente a mejorar interfaces, procesos y funcionalidades proponiendo cambios basados en la experiencia de pruebas reales.

Me destaco por mi capacidad para colaborar con equipos multidisciplinarios, comunicar hallazgos de manera clara y aportar una mirada detallista y estratégica al proceso de aseguramiento de calidad. Más allá del testing, busco entender el propósito de cada producto para asegurar que realmente funcione para quienes lo van a usar.`,
}

export const projects = [
  {
    id: 1,
    title: "Urban Grocers Apps",
    summary:
      "Plataforma de pedidos en línea con kits categorizados. Este trabajo se enfocó en las pruebas de API para la funcionalidad de creación de kits por usuario.",
    motivation:
      "El proyecto me permitió explorar y fortalecer mis habilidades en pruebas de API, área clave dentro del testing backend.",
    role: "QA Junior trabajando en equipo",
    tools: ["Postman", "Python"],
    testTypes: ["Pruebas de API"],
    keyDecision:
      "Participación activa en desarrollo, aportando desde QA para mejorar la lógica y estabilidad de las APIs.",
    softSkills: ["Comunicación con el equipo de desarrollo"],
    impact:
      "Se realizaron 9 pruebas; 5 pasaron, 4 fallaron. Se reportaron a tiempo para su corrección antes del despliegue.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Flow Creator",
    summary:
      "Herramienta para crear flujos dinámicos con múltiples etapas que representan tareas dentro de una organización.",
    motivation: "El reto técnico y lógico de probar flujos altamente personalizados y ramificados.",
    role: "Responsable de pruebas funcionales",
    tools: ["Azure DevOps"],
    testTypes: ["Pruebas funcionales basadas en casos de prueba"],
    keyDecision:
      "Propuesta de rediseño de la interfaz de usuario al detectar complejidad innecesaria para usuarios no técnicos.",
    softSkills: ["Comunicación efectiva con el equipo de desarrollo", "Enfoque en la experiencia del usuario"],
    impact:
      "Se ejecutaron 160 casos de prueba, con un 85% aprobados inicialmente. Después de ajustes, se logró el 100%.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
]

export const skills = [
  { name: "Pruebas Funcionales", level: 90 },
  { name: "Pruebas de API", level: 85 },
  { name: "Postman", level: 80 },
  { name: "Python", level: 75 },
  { name: "Azure DevOps", level: 85 },
  { name: "Documentación de Pruebas", level: 90 },
  { name: "Análisis de Requerimientos", level: 95 },
]
