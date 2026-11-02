# La Puerta Negra — sitio web

Landing page de La Puerta Negra, restaurante de mariscos, bar y karaoke en C. Corregidora 2, Centro, San Juan del Río, Qro.
Hecha con Next.js 16 y React 19. Es una página estática.

## Desarrollo

```bash
npm install
npm run dev
```

Para producción: `npm run build` y luego `npm start`. También se puede desplegar en Vercel tal cual.

## Qué editar

- **Datos del negocio** (horarios, teléfono, platillos, noches, opiniones y preguntas frecuentes): `src/lib/negocio.ts`.
  La página, el estado "Abierto ahora", la tabla de horarios y los datos estructurados de Google leen de ese archivo.
- **Fotos**: `public/fotos/`. Si cambias una, conserva el nombre o actualiza el `import` en `src/app/page.tsx`.
- **Dominio**: copia `.env.example` a `.env.local` y pon el dominio real en `NEXT_PUBLIC_SITE_URL`.
  Se usa en la URL canónica, el sitemap, Open Graph y el JSON-LD.

## SEO incluido

- Título y descripción con palabras clave locales (mariscos, karaoke y bar en San Juan del Río).
- JSON-LD `Restaurant` con dirección, coordenadas, horarios, servicios y redes, además de `FAQPage`.
- `sitemap.xml`, `robots.txt`, Open Graph/Twitter, `lang="es-MX"` y textos alternativos descriptivos en todas las fotos.
- Imágenes optimizadas (AVIF/WebP) con `next/image`.

## Pendientes antes de publicar

1. **Derechos de las fotos**: se tomaron del perfil público de Google Maps. Algunas pueden ser de clientes.
   Confirma con el restaurante o cámbialas por fotos propias.
2. Agrega la URL del sitio en el Perfil de Empresa de Google y en las biografías de Instagram y Facebook.
3. Da de alta el dominio en Google Search Console y envía el sitemap.
