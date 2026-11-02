"use client";

import { estadoActual } from "@/lib/horario";
import { useAhora } from "./useAhora";

export function EstadoAbierto() {
  const ahora = useAhora();
  const estado = ahora ? estadoActual(ahora) : null;

  return (
    <p className="estado" data-abierto={estado?.abierto ?? undefined} aria-live="polite">
      <span className="estado__punto" aria-hidden="true" />
      {estado ? estado.texto : "Miércoles a domingo desde la 1 p.m."}
    </p>
  );
}
