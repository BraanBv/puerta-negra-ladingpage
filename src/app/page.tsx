import Image from "next/image";
import { Aldaba } from "@/components/Aldaba";
import { EstadoAbierto } from "@/components/EstadoAbierto";
import { TablaHorarios } from "@/components/TablaHorarios";
import {
  carta,
  direccionCompleta,
  enlaces,
  mensajes,
  negocio,
  noches,
  opiniones,
  preguntas,
} from "@/lib/negocio";
import { schemaPreguntas, schemaRestaurante } from "@/lib/schema";

import salon from "../../public/fotos/salon-la-puerta-negra.jpg";
import antojitos from "../../public/fotos/antojitos-mexicanos.jpg";
import tacoCamaron from "../../public/fotos/taco-de-camaron.jpg";
import coctelFuego from "../../public/fotos/coctel-con-fuego.jpg";
import margarita from "../../public/fotos/margarita-y-mojito.jpg";
import coctelRojo from "../../public/fotos/coctel-frutos-rojos.jpg";
import karaoke from "../../public/fotos/show-karaoke.jpg";
import escenario from "../../public/fotos/escenario.jpg";
import festejo from "../../public/fotos/festejo-decorado.jpg";
import fachada from "../../public/fotos/fachada-y-terraza.jpg";

const jsonLd = JSON.stringify([schemaRestaurante(), schemaPreguntas()]).replace(/</g, "\\u003c");

function BotonWhatsApp({ mensaje, children, className = "boton" }: { mensaje: string; children: React.ReactNode; className?: string }) {
  return (
    <a className={className} href={enlaces.whatsapp(mensaje)} target="_blank" rel="noopener">
      {children}
    </a>
  );
}

export default function Inicio() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <a className="saltar" href="#contenido">
        Saltar al contenido
      </a>

      <header className="cabecera">
        <a className="marca" href="#inicio" aria-label="La Puerta Negra, inicio">
          <Aldaba className="marca__aldaba" />
          <span>La Puerta Negra</span>
        </a>
        <nav aria-label="Secciones">
          <ul className="cabecera__nav">
            <li><a href="#carta">Carta</a></li>
            <li><a href="#barra">Barra</a></li>
            <li><a href="#noches">Noches</a></li>
            <li><a href="#visitanos">Visítanos</a></li>
          </ul>
        </nav>
        <BotonWhatsApp mensaje={mensajes.reservar} className="boton boton--chico">
          Reservar
        </BotonWhatsApp>
      </header>

      <main id="contenido">
        {/* Portada: la puerta se abre y deja ver el salón */}
        <section className="portada" id="inicio" aria-labelledby="titulo-portada">
          <div className="portada__texto">
            <h1 id="titulo-portada" className="portada__titulo">
              La Puerta Negra
            </h1>
            <p className="portada__sub">
              Mariscos, tragos y karaoke en el Centro de San&nbsp;Juan del Río.
            </p>
            <p className="portada__lema">“{negocio.lema}”</p>
            <EstadoAbierto />
            <div className="portada__acciones">
              <BotonWhatsApp mensaje={mensajes.reservar}>Reservar por WhatsApp</BotonWhatsApp>
              <a className="enlace" href={enlaces.comoLlegar} target="_blank" rel="noopener">
                Cómo llegar
              </a>
            </div>
          </div>

          <div className="puerta">
            <Image
              src={salon}
              alt="Salón de La Puerta Negra: piso chevron blanco y negro, muro de ladrillo, candelabros y barra al fondo"
              fill
              priority
              quality={80}
              sizes="(min-width: 960px) 46vw, 100vw"
              className="puerta__vista"
            />
            <div className="puerta__hoja puerta__hoja--izq" aria-hidden="true">
              <Aldaba className="puerta__aldaba" />
            </div>
            <div className="puerta__hoja puerta__hoja--der" aria-hidden="true">
              <Aldaba className="puerta__aldaba" />
            </div>
          </div>
        </section>

        <div className="chevron" aria-hidden="true" />

        {/* Carta */}
        <section className="seccion carta" id="carta" aria-labelledby="titulo-carta">
          <figure className="carta__foto-grande">
            <Image
              src={antojitos}
              alt="Mesa con gorditas, flautas, tostadas, pozole rojo y pozole verde"
              sizes="(min-width: 960px) 42vw, 100vw"
              quality={70}
              placeholder="blur"
            />
          </figure>

          <div className="carta__texto">
            <h2 id="titulo-carta">Del mar a la mesa</h2>
            <p className="entrada">
              Cocina de mariscos con sazón mexicana y antojitos para compartir.
              Platillos que se piden al centro, entre canción y canción.
            </p>
            <dl className="platillos">
              {carta.map((p) => (
                <div key={p.nombre} className="platillo">
                  <dt>{p.nombre}</dt>
                  <dd>{p.detalle}</dd>
                </div>
              ))}
            </dl>
            <p className="nota">La carta cambia. Pregunta por los especiales del día cuando reserves.</p>
            <figure className="carta__foto-chica">
              <Image
                src={tacoCamaron}
                alt="Taco de camarón con pico de gallo y aguacate en tortilla de harina"
                sizes="(min-width: 960px) 20vw, 60vw"
                quality={70}
                placeholder="blur"
              />
            </figure>
          </div>
        </section>

        {/* Barra */}
        <section className="barra" id="barra" aria-labelledby="titulo-barra">
          <div className="seccion barra__interior">
            <div className="barra__texto">
              <h2 id="titulo-barra">La barra</h2>
              <p className="entrada">
                Margaritas escarchadas con chile, mojitos, coctelería con fuego y cerveza bien fría.
              </p>
              <p>
                ¿No tomas alcohol? También preparamos bebidas sin alcohol, como la piña colada que
                tanto recomiendan nuestros clientes.
              </p>
            </div>
            <div className="barra__fotos">
              <figure className="barra__foto barra__foto--alta">
                <Image
                  src={coctelFuego}
                  alt="Coctel cremoso de piña servido frente a una llamarada en la barra"
                  sizes="(min-width: 960px) 30vw, 60vw"
                  quality={70}
                  placeholder="blur"
                />
              </figure>
              <figure className="barra__foto">
                <Image
                  src={margarita}
                  alt="Margarita de mango escarchada con chile junto a un mojito de pepino"
                  sizes="(min-width: 960px) 22vw, 40vw"
                  quality={70}
                  placeholder="blur"
                />
              </figure>
              <figure className="barra__foto">
                <Image
                  src={coctelRojo}
                  alt="Coctel de frutos rojos con escarchado de chile"
                  sizes="(min-width: 960px) 22vw, 40vw"
                  quality={70}
                  placeholder="blur"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* Noches */}
        <section className="seccion noches" id="noches" aria-labelledby="titulo-noches">
          <div className="noches__texto">
            <h2 id="titulo-noches">Las noches</h2>
            <p className="entrada">
              Karaoke, música en vivo y DJ en el Centro de San Juan del Río, con eventos cada semana.
            </p>
            <ul className="noches__lista">
              {noches.map((n) => (
                <li key={n.nombre}>
                  <h3>{n.nombre}</h3>
                  <p>{n.detalle}</p>
                </li>
              ))}
            </ul>
            <a className="enlace" href={negocio.instagram} target="_blank" rel="noopener">
              Ver la cartelera en Instagram
            </a>
          </div>
          <div className="noches__fotos">
            <figure className="noches__foto noches__foto--escenario">
              <Image
                src={escenario}
                alt="Escenario de La Puerta Negra con el letrero iluminado y pantallas"
                sizes="(min-width: 960px) 30vw, 70vw"
                quality={70}
                placeholder="blur"
              />
            </figure>
            <figure className="noches__foto noches__foto--show">
              <Image
                src={karaoke}
                alt="Cantante con micrófono durante un show en el salón"
                sizes="(min-width: 960px) 20vw, 45vw"
                quality={70}
                placeholder="blur"
              />
            </figure>
          </div>
        </section>

        <div className="chevron" aria-hidden="true" />

        {/* Festejos */}
        <section className="seccion festejos" aria-labelledby="titulo-festejos">
          <figure className="festejos__foto">
            <Image
              src={festejo}
              alt="Rincón decorado con globos y piñatas para un cumpleaños"
              sizes="(min-width: 960px) 28vw, 80vw"
              quality={70}
              placeholder="blur"
            />
          </figure>
          <div className="festejos__texto">
            <h2 id="titulo-festejos">Festeja con nosotros</h2>
            <p className="entrada">
              Cumpleaños, despedidas y reuniones de la oficina. Escríbenos con la fecha y el número de
              invitados y te ayudamos a organizarlo.
            </p>
            <BotonWhatsApp mensaje={mensajes.evento}>Cotizar mi festejo</BotonWhatsApp>
          </div>
        </section>

        {/* Opiniones */}
        <section className="seccion opiniones" aria-labelledby="titulo-opiniones">
          <h2 id="titulo-opiniones" className="opiniones__cifra">
            <span className="opiniones__valor">{negocio.calificacion.valor}</span>
            <span className="opiniones__detalle">
              de 5 en Google, con {negocio.calificacion.opiniones} opiniones
            </span>
          </h2>
          <ul className="opiniones__lista">
            {opiniones.map((o) => (
              <li key={o}>
                <blockquote>“{o}”</blockquote>
              </li>
            ))}
          </ul>
          <a className="enlace" href={negocio.googleMaps} target="_blank" rel="noopener">
            Leer todas las opiniones en Google
          </a>
        </section>

        {/* Visítanos */}
        <section className="visitanos" id="visitanos" aria-labelledby="titulo-visitanos">
          <figure className="visitanos__foto">
            <Image
              src={fachada}
              alt="Vista aérea de la fachada de La Puerta Negra y su terraza con sombrillas en la calle Corregidora"
              sizes="100vw"
              quality={70}
              placeholder="blur"
            />
          </figure>

          <div className="seccion visitanos__interior">
            <div className="visitanos__datos">
              <h2 id="titulo-visitanos">Visítanos</h2>
              <address className="visitanos__direccion">
                {negocio.direccion.calle}, {negocio.direccion.colonia}
                <br />
                {negocio.direccion.cp} {negocio.direccion.ciudad}, {negocio.direccion.estado}
              </address>
              <p>
                <a className="visitanos__tel" href={enlaces.llamar}>
                  {negocio.telefono}
                </a>
              </p>
              <TablaHorarios />
              <p className="nota">Terraza al aire libre. Entrada, salón y estacionamiento accesibles en silla de ruedas.</p>
              <div className="portada__acciones">
                <a className="boton" href={enlaces.comoLlegar} target="_blank" rel="noopener">
                  Cómo llegar
                </a>
                <BotonWhatsApp mensaje={mensajes.reservar} className="enlace">
                  Reservar por WhatsApp
                </BotonWhatsApp>
              </div>
            </div>
            <div className="visitanos__mapa">
              <iframe
                title={`Mapa de La Puerta Negra en ${direccionCompleta}`}
                src={enlaces.mapaEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="seccion preguntas" aria-labelledby="titulo-preguntas">
          <h2 id="titulo-preguntas">Preguntas frecuentes</h2>
          <div className="preguntas__lista">
            {preguntas.map((p) => (
              <details key={p.pregunta}>
                <summary>{p.pregunta}</summary>
                <p>{p.respuesta}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="pie">
        <div className="pie__interior">
          <p className="pie__marca">
            <Aldaba className="marca__aldaba" />
            La Puerta Negra
          </p>
          <p>
            Restaurante de mariscos, bar y karaoke.
            <br />
            {direccionCompleta}
          </p>
          <ul className="pie__redes">
            <li><a href={negocio.instagram} target="_blank" rel="noopener">Instagram</a></li>
            <li><a href={negocio.facebook} target="_blank" rel="noopener">Facebook</a></li>
            <li><a href={negocio.googleMaps} target="_blank" rel="noopener">Google Maps</a></li>
          </ul>
          <p className="pie__legal">Consumo responsable de bebidas alcohólicas.</p>
        </div>
      </footer>

      {/* Barra de acciones en móvil */}
      <nav className="acciones-movil" aria-label="Acciones rápidas">
        <a href={enlaces.whatsapp(mensajes.reservar)} target="_blank" rel="noopener">Reservar</a>
        <a href={enlaces.llamar}>Llamar</a>
        <a href={enlaces.comoLlegar} target="_blank" rel="noopener">Cómo llegar</a>
      </nav>
    </>
  );
}
