import { formatoHora, horarios, type Horario } from "./negocio";

const ZONA = "America/Mexico_City";
const DIAS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function ahoraEnSanJuan(fecha = new Date()) {
  const partes = new Intl.DateTimeFormat("en-US", {
    timeZone: ZONA,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(fecha);
  const valor = (tipo: string) => partes.find((p) => p.type === tipo)?.value ?? "0";
  return {
    dia: DIAS.indexOf(valor("weekday")),
    minutos: Number(valor("hour")) * 60 + Number(valor("minute")),
  };
}

const delDia = (dia: number) => horarios.find((h) => h.dia === dia) as Horario;
const aLaHora = (h: number) => `${h % 12 === 1 ? "a la" : "a las"} ${formatoHora(h)}`;

export type Estado = { abierto: boolean; texto: string };

export function estadoActual(fecha = new Date()): Estado {
  const { dia, minutos } = ahoraEnSanJuan(fecha);

  const ayer = delDia((dia + 6) % 7);
  if (ayer.cierra && ayer.cierra > 24 && minutos < (ayer.cierra - 24) * 60) {
    return { abierto: true, texto: `Abierto ahora. Cerramos ${aLaHora(ayer.cierra)}` };
  }

  const hoy = delDia(dia);
  if (hoy.abre !== undefined && hoy.cierra !== undefined) {
    if (minutos >= hoy.abre * 60 && minutos < hoy.cierra * 60) {
      return { abierto: true, texto: `Abierto ahora. Cerramos ${aLaHora(hoy.cierra)}` };
    }
    if (minutos < hoy.abre * 60) {
      return { abierto: false, texto: `Hoy abrimos ${aLaHora(hoy.abre)}` };
    }
  }

  for (let i = 1; i <= 7; i++) {
    const siguiente = delDia((dia + i) % 7);
    if (siguiente.abre !== undefined) {
      const cuando = i === 1 ? "mañana" : `el ${siguiente.nombre.toLowerCase()}`;
      return { abierto: false, texto: `Cerrado ahora. Abrimos ${cuando} ${aLaHora(siguiente.abre)}` };
    }
  }
  return { abierto: false, texto: "Cerrado ahora" };
}
