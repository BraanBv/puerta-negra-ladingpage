import type { Metadata, Viewport } from "next";
import { Archivo, Marcellus } from "next/font/google";
import { negocio, SITE_URL } from "@/lib/negocio";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-titulo",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-texto",
  display: "swap",
});

const titulo = "La Puerta Negra | Mariscos, bar y karaoke en San Juan del Río";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: titulo,
  description:
    "Restaurante de mariscos y bar en el Centro de San Juan del Río, Qro. Tostada de pulpo, tacos de camarón, coctelería, karaoke, música en vivo y DJ. Reserva por WhatsApp.",
  keywords: [
    "restaurante en San Juan del Río",
    "mariscos San Juan del Río",
    "karaoke San Juan del Río",
    "bar en el Centro de San Juan del Río",
    "música en vivo San Juan del Río",
    "La Puerta Negra",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: negocio.nombre,
    title: titulo,
    description: negocio.descripcion,
    images: [
      {
        url: "/fotos/salon-la-puerta-negra.jpg",
        width: 1100,
        height: 1100,
        alt: "Salón de La Puerta Negra con piso chevron, ladrillo y candelabros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: negocio.descripcion,
    images: ["/fotos/salon-la-puerta-negra.jpg"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, address: true },
  category: "restaurant",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${marcellus.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
