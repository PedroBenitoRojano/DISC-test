import { AnimalType, AnimalProfile, Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Ante un problema urgente o crisis, tú sueles:",
    options: [
      { text: "Tomar el mando de inmediato y decidir rápido.", type: AnimalType.LION },
      { text: "Buscar el lado positivo e improvisar una solución con el equipo.", type: AnimalType.OTTER },
      { text: "Intentar calmar los ánimos y mantener un buen ambiente.", type: AnimalType.GOLDEN },
      { text: "Investigar los datos y analizar la causa raíz antes de actuar.", type: AnimalType.BEAVER },
    ]
  },
  {
    id: 2,
    text: "¿Qué te molesta más en el trabajo o la vida?",
    options: [
      { text: "La ineficiencia y la pérdida de tiempo.", type: AnimalType.LION },
      { text: "El aburrimiento y la gente pesimista.", type: AnimalType.OTTER },
      { text: "El conflicto y la presión excesiva.", type: AnimalType.GOLDEN },
      { text: "El desorden y la falta de precisión.", type: AnimalType.BEAVER },
    ]
  },
  {
    id: 3,
    text: "¿Cuál es tu estilo de comunicación predominante?",
    options: [
      { text: "Directo, breve y al grano.", type: AnimalType.LION },
      { text: "Entusiasta, persuasivo y expresivo.", type: AnimalType.OTTER },
      { text: "Diplomático, paciente y buen oyente.", type: AnimalType.GOLDEN },
      { text: "Preciso, detallado y basado en datos.", type: AnimalType.BEAVER },
    ]
  },
  {
    id: 4,
    text: "¿Qué es lo que más te motiva?",
    options: [
      { text: "Los retos, ganar y alcanzar metas.", type: AnimalType.LION },
      { text: "El reconocimiento, la diversión y la popularidad.", type: AnimalType.OTTER },
      { text: "La seguridad, la estabilidad y ayudar a otros.", type: AnimalType.GOLDEN },
      { text: "La perfección, la lógica y el orden.", type: AnimalType.BEAVER },
    ]
  },
  {
    id: 5,
    text: "Al tomar decisiones importantes:",
    options: [
      { text: "Decido rápido buscando el resultado inmediato.", type: AnimalType.LION },
      { text: "Me guío por la intuición y cómo afectará a las personas.", type: AnimalType.OTTER },
      { text: "Busco el consenso y evito tomar riesgos innecesarios.", type: AnimalType.GOLDEN },
      { text: "Soy meticuloso y reviso todos los datos antes de decidir.", type: AnimalType.BEAVER },
    ]
  },
  {
    id: 6,
    text: "¿Cómo reaccionas ante los cambios repentinos?",
    options: [
      { text: "Me adapto rápidamente si sirve para lograr la meta.", type: AnimalType.LION },
      { text: "Me emocionan, me gusta la novedad.", type: AnimalType.OTTER },
      { text: "Me resisto un poco, prefiero la seguridad y la rutina.", type: AnimalType.GOLDEN },
      { text: "Necesito entender la lógica y tener un plan antes de cambiar.", type: AnimalType.BEAVER },
    ]
  },
  {
    id: 7,
    text: "¿Cuál crees que es tu rol natural en un equipo?",
    options: [
      { text: "El líder resolutivo que empuja al grupo.", type: AnimalType.LION },
      { text: "El promotor que conecta y motiva a todos.", type: AnimalType.OTTER },
      { text: "El apoyo leal que mantiene la cohesión.", type: AnimalType.GOLDEN },
      { text: "El analista que asegura la calidad y el detalle.", type: AnimalType.BEAVER },
    ]
  },
  {
    id: 8,
    text: "¿Cuál es tu mayor miedo?",
    options: [
      { text: "Perder el control de la situación.", type: AnimalType.LION },
      { text: "El rechazo social o ser ignorado.", type: AnimalType.OTTER },
      { text: "Los cambios bruscos y la inseguridad.", type: AnimalType.GOLDEN },
      { text: "Equivocarse, las críticas o el trabajo mal hecho.", type: AnimalType.BEAVER },
    ]
  },
];

export const PROFILES: Record<AnimalType, AnimalProfile> = {
  [AnimalType.LION]: {
    type: AnimalType.LION,
    name: "León",
    archetype: "El Comandante (D)",
    color: "bg-lion",
    description: "Eres una fuerza de la naturaleza. Como un León, tomas el mando y no tienes miedo a rugir para defender tus objetivos. Tu lenguaje es la acción y los resultados.",
    keyTraits: "Decisión, Liderazgo, Visión Estratégica.",
    fear: "Perder el control de la situación.",
    motivation: "Los retos, el poder y la independencia.",
    teamRole: "Eres resolutivo; tomas decisiones difíciles cuando otros dudan.",
    advice: "La impaciencia es tu talón de Aquiles. Recuerda escuchar a la manada antes de atacar.",
    // Embedded SVG for immediate rendering
    imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23FF4D4D' fill-opacity='0.2'/%3E%3Ctext x='50' y='72' font-size='70' text-anchor='middle'%3E🦁%3C/text%3E%3C/svg%3E",
  },
  [AnimalType.OTTER]: {
    type: AnimalType.OTTER,
    name: "Nutria",
    archetype: "El Inspirador (I)",
    color: "bg-otter",
    description: "Eres el alma de la fiesta. Como una Nutria, eres juguetón, sociable y crees que todo se resuelve mejor con una sonrisa y buena comunicación. Vendes sueños y conectas personas.",
    keyTraits: "Sociable, Persuasivo, Optimista.",
    fear: "El rechazo social o perder popularidad.",
    motivation: "El reconocimiento, la diversión y las experiencias nuevas.",
    teamRole: "Abres puertas y ves oportunidades donde otros ven problemas.",
    advice: "Cuidado con la dispersión. Tu entusiasmo es genial, pero asegúrate de terminar lo que empiezas.",
    imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23FFD700' fill-opacity='0.2'/%3E%3Ctext x='50' y='72' font-size='70' text-anchor='middle'%3E🦦%3C/text%3E%3C/svg%3E",
  },
  [AnimalType.GOLDEN]: {
    type: AnimalType.GOLDEN,
    name: "Golden Retriever",
    archetype: "El Guardián (S)",
    color: "bg-golden",
    description: "Eres la lealtad personificada. Como un Golden Retriever, eres el compañero ideal: paciente, empático y siempre dispuesto a ayudar. Mantienes la armonía y cuidas de que todos estén bien.",
    keyTraits: "Estable, Servicial, Buen oyente.",
    fear: "Los cambios bruscos y la pérdida de seguridad.",
    motivation: "La tranquilidad, la seguridad y agradar a los suyos.",
    teamRole: "Eres el pegamento que mantiene unido al grupo; das apoyo y constancia.",
    advice: "Aprende a decir 'No'. Tu deseo de agradar a veces hace que cargues con demasiado peso.",
    imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%234CAF50' fill-opacity='0.2'/%3E%3Ctext x='50' y='72' font-size='70' text-anchor='middle'%3E🐕%3C/text%3E%3C/svg%3E",
  },
  [AnimalType.BEAVER]: {
    type: AnimalType.BEAVER,
    name: "Castor",
    archetype: "El Estratega (C)",
    color: "bg-beaver",
    description: "Eres el arquitecto de la perfección. Como un Castor, construyes estructuras sólidas y precisas. No te interesan las suposiciones, sino los hechos, los datos y que las cosas se hagan 'bien'.",
    keyTraits: "Metódico, Analítico, Realista.",
    fear: "Equivocarse o cometer un error crítico.",
    motivation: "La precisión, el orden y entender el 'porqué' de las cosas.",
    teamRole: "Calidad y análisis. Encuentras los errores que todos los demás pasaron por alto.",
    advice: "Cuidado con la parálisis por análisis. No busques lo perfecto a costa de lo bueno.",
    imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%232196F3' fill-opacity='0.2'/%3E%3Ctext x='50' y='72' font-size='70' text-anchor='middle'%3E🦫%3C/text%3E%3C/svg%3E",
  },
};