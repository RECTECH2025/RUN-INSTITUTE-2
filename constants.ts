import { CourseData } from './types';

export const COURSE_DATA: CourseData = {
  title: "Programa Liderazgo Femenino",
  subtitle: "La Academia - ¡Lidera tu mundo!",
  targetAudience: "Solo para mujeres. Mujeres que buscan conectarse con su esencia, descubrir cualidades y potenciar su capacidad de influencia.",
  price: "USD 110,00",
  duration: "25 horas en 10 sesiones de 2,5 h",
  modules: [
    { id: 1, title: "Contextualización y Networking" },
    { id: 2, title: "Visión Integral del Ser" },
    { id: 3, title: "Líneas de Desarrollo: Cuerpo, Emociones, Mente y Espíritu" },
    { id: 4, title: "Sabiduría de las Emociones" },
    { id: 5, title: "Lo Masculino y lo Femenino" },
    { id: 6, title: "La Lingüística Primordial" },
    { id: 7, title: "La Responsabilidad" },
    { id: 8, title: "La Auto Observación, El Otro, La Otra y Lo Otro" },
    { id: 9, title: "5 Virtudes de la Líder Transformacional" },
    { id: 10, title: "El Empoderamiento y el Decreto" }
  ],
  keyQuestions: [
    "¿Estás logrando tus objetivos?",
    "¿Utilizas bien tus tiempos?",
    "¿Qué hábitos te limitan?",
    "¿Qué barreras internas frenan tus capacidades?",
    "¿Le huyes al conflicto?",
    "¿Te sientes cómoda proponiendo tus ideas?"
  ],
  statistics: [
    "En Latinoamérica, las mujeres ocupan un 25% de los puestos directivos.",
    "Solo un 17% son gerentes generales.",
    "64% de las empresas de la región tienen mujeres en sus Juntas Directivas.",
    "50% de los emprendimientos son liderados por mujeres."
  ],
  facilitators: [
    {
      name: "Lourdes Calderón",
      role: "Counselor & Coach Primordial",
      bio: "25 años de experiencia. Mentora en Desarrollo Humano Integral. Profesora de Danza Primal."
    },
    {
      name: "Lina Velásquez T.",
      role: "Executive & Life Coach",
      bio: "Comunicadora social, Coach de Equipos, Terapeuta Transpersonal."
    },
    {
      name: "Alfredo Carrera",
      role: "Master in International Management",
      bio: "35+ años de experiencia. Coach Ontológico Corporativo y Transpersonal."
    }
  ],
  testimonials: [
    {
      name: "Natalia Silva",
      role: "Gerente Ejecutiva",
      location: "Venezuela",
      text: "Una experiencia enriquecedora tanto a nivel profesional como personal. Su orientación ha sido de gran impacto."
    },
    {
      name: "Natalia Fernández",
      role: "Emprendedora",
      location: "Argentina",
      text: "No solo herramientas, fue una experiencia inmersiva profunda. Aprendí a ejercer un liderazgo transformacional."
    }
  ],
  contact: {
    emails: ["runinstituteca@gmail.com", "linavelasquezt@gmail.com", "lourdesycalderon@gmail.com", "alfcarrerab@gmail.com"],
    phones: ["+593 99 933 9010", "+593 99 522 0273", "+593 99 777 7764"]
  }
};