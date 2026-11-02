// Única fuente de datos del restaurante. Edita aquí horarios, carta y contacto.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lapuertanegrasjr.com"
).replace(/\/$/, "");

export const negocio = {
  nombre: "La Puerta Negra",
  nombreLargo: "La Puerta Negra Restaurante del Mar",
  lema: "Aquí no vienes nomás a tomar. Vienes a pasarla bien.",
  descripcion:
    "Restaurante de mariscos y bar en el Centro de San Juan del Río, Querétaro. Tostadas, tacos de camarón, antojitos, coctelería, karaoke, música en vivo y DJ.",
  direccion: {
    calle: "C. Corregidora 2",
    colonia: "Centro",
    cp: "76800",
    ciudad: "San Juan del Río",
    estado: "Querétaro",
    estadoCorto: "Qro.",
    pais: "MX",
  },
  geo: { lat: 20.3853647, lng: -100.0035152 },
  telefono: "427 186 8397",
  telefonoE164: "+524271868397",
  whatsapp: "524271868397",
  instagram: "https://www.instagram.com/puertanegrasjr/",
  facebook: "https://www.facebook.com/PuertaNegraSJR",
  googleMaps: "https://maps.google.com/?cid=11221524905492853423",
  calificacion: { valor: "4.0", opiniones: 770 },
} as const;

export const direccionCompleta = `${negocio.direccion.calle}, ${negocio.direccion.colonia}, ${negocio.direccion.cp} ${negocio.direccion.ciudad}, ${negocio.direccion.estadoCorto}`;

export const enlaces = {
  llamar: `tel:${negocio.telefonoE164}`,
  comoLlegar: `https://www.google.com/maps/dir/?api=1&destination=${negocio.geo.lat},${negocio.geo.lng}`,
  mapaEmbed: `https://www.google.com/maps?q=${encodeURIComponent(
    `La Puerta Negra Restaurante, ${direccionCompleta}`,
  )}&output=embed`,
  whatsapp: (mensaje: string) =>
    `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`,
};

export const mensajes = {
  reservar: "Hola, quiero reservar una mesa en La Puerta Negra.",
  evento: "Hola, quiero cotizar un festejo en La Puerta Negra.",
};

/** Día 0 = domingo. Horas en formato 24 h; `cierra` > 24 significa después de medianoche. */
export type Horario = { dia: number; nombre: string; abre?: number; cierra?: number };

export const horarios: Horario[] = [
  { dia: 1, nombre: "Lunes" },
  { dia: 2, nombre: "Martes" },
  { dia: 3, nombre: "Miércoles", abre: 13, cierra: 25 },
  { dia: 4, nombre: "Jueves", abre: 13, cierra: 25 },
  { dia: 5, nombre: "Viernes", abre: 13, cierra: 25 },
  { dia: 6, nombre: "Sábado", abre: 13, cierra: 25 },
  { dia: 0, nombre: "Domingo", abre: 13, cierra: 23 },
];

export function formatoHora(h: number) {
  const hora = h % 24;
  const sufijo = hora < 12 ? "a.m." : "p.m.";
  const h12 = hora % 12 === 0 ? 12 : hora % 12;
  return `${h12} ${sufijo}`;
}

export const carta = [
  {
    nombre: "Tostada de pulpo enamorado",
    detalle: "La que más nos piden. Pulpo sobre tostada crujiente.",
  },
  {
    nombre: "Tacos de camarón",
    detalle: "Camarón, pico de gallo y aguacate en tortilla de harina.",
  },
  {
    nombre: "Alitas",
    detalle: "Para la mesa, mientras alguien se anima a cantar.",
  },
  {
    nombre: "Antojitos mexicanos",
    detalle: "Gorditas, flautas, tostadas y pozole rojo o verde.",
  },
];

export const noches = [
  {
    nombre: "Karaoke",
    detalle: "Toma el micrófono. Aquí todos cantan, afinados o no.",
  },
  {
    nombre: "Música en vivo",
    detalle: "Artistas y shows en el escenario del salón.",
  },
  {
    nombre: "DJ",
    detalle: "Cuando cae la noche, la pista se prende.",
  },
];

export const opiniones = [
  "Muy buen ambiente y excelente atención al cliente, hay variedad en la música.",
  "Pedimos piña colada porque no consumimos alcohol y estaban muy ricas.",
  "Buen lugar, buen ambiente, excelente servicio.",
];

export const preguntas = [
  {
    pregunta: "¿Cuál es el horario de La Puerta Negra?",
    respuesta:
      "Abrimos de miércoles a sábado de 1 p.m. a 1 a.m. y los domingos de 1 p.m. a 11 p.m. Lunes y martes descansamos.",
  },
  {
    pregunta: "¿Cómo reservo una mesa?",
    respuesta: `Escríbenos por WhatsApp o llámanos al ${negocio.telefono} con el día, la hora y el número de personas.`,
  },
  {
    pregunta: "¿Dónde están?",
    respuesta: `En ${direccionCompleta}, en el Centro de San Juan del Río.`,
  },
  {
    pregunta: "¿Hay karaoke y música en vivo?",
    respuesta:
      "Sí. Tenemos karaoke, música en vivo y DJ, con eventos cada semana. La cartelera se publica en nuestro Instagram.",
  },
  {
    pregunta: "¿Tienen bebidas sin alcohol?",
    respuesta:
      "Sí. Preparamos bebidas sin alcohol, como la piña colada.",
  },
  {
    pregunta: "¿Puedo celebrar mi cumpleaños o un evento?",
    respuesta:
      "Claro. Escríbenos por WhatsApp con la fecha y el número de invitados y te ayudamos a organizarlo.",
  },
  {
    pregunta: "¿El lugar es accesible en silla de ruedas?",
    respuesta:
      "Sí. La entrada, el salón y el estacionamiento son accesibles para personas en silla de ruedas.",
  },
];
