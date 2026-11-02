import { horarios, negocio, preguntas, SITE_URL } from "./negocio";

const DIAS_SCHEMA = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const hora = (h: number) => `${String(h % 24).padStart(2, "0")}:00`;

export function schemaRestaurante() {
  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "BarOrPub"],
    "@id": `${SITE_URL}/#restaurante`,
    name: negocio.nombre,
    alternateName: negocio.nombreLargo,
    description: negocio.descripcion,
    url: `${SITE_URL}/`,
    image: [
      `${SITE_URL}/fotos/salon-la-puerta-negra.jpg`,
      `${SITE_URL}/fotos/fachada-y-terraza.jpg`,
      `${SITE_URL}/fotos/antojitos-mexicanos.jpg`,
    ],
    telephone: negocio.telefonoE164,
    servesCuisine: ["Mariscos", "Mexicana", "Antojitos"],
    priceRange: "$$",
    acceptsReservations: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: negocio.direccion.calle,
      addressLocality: negocio.direccion.ciudad,
      addressRegion: negocio.direccion.estado,
      postalCode: negocio.direccion.cp,
      addressCountry: negocio.direccion.pais,
    },
    geo: { "@type": "GeoCoordinates", latitude: negocio.geo.lat, longitude: negocio.geo.lng },
    hasMap: negocio.googleMaps,
    openingHoursSpecification: horarios
      .filter((h) => h.abre !== undefined && h.cierra !== undefined)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: DIAS_SCHEMA[h.dia],
        opens: hora(h.abre!),
        closes: hora(h.cierra!),
      })),
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Karaoke", value: true },
      { "@type": "LocationFeatureSpecification", name: "Música en vivo", value: true },
      { "@type": "LocationFeatureSpecification", name: "Terraza", value: true },
      { "@type": "LocationFeatureSpecification", name: "Acceso para silla de ruedas", value: true },
    ],
    sameAs: [negocio.instagram, negocio.facebook, negocio.googleMaps],
  };
}

export function schemaPreguntas() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map((p) => ({
      "@type": "Question",
      name: p.pregunta,
      acceptedAnswer: { "@type": "Answer", text: p.respuesta },
    })),
  };
}
