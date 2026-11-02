"use client";

import { ahoraEnSanJuan } from "@/lib/horario";
import { formatoHora, horarios } from "@/lib/negocio";
import { useAhora } from "./useAhora";

export function TablaHorarios() {
  const ahora = useAhora();
  const hoy = ahora ? ahoraEnSanJuan(ahora).dia : -1;

  return (
    <table className="horarios">
      <caption className="sr-only">Horario de apertura</caption>
      <tbody>
        {horarios.map((h) => (
          <tr key={h.dia} aria-current={h.dia === hoy ? "date" : undefined}>
            <th scope="row">{h.nombre}</th>
            <td>
              {h.abre !== undefined && h.cierra !== undefined
                ? `${formatoHora(h.abre)} a ${formatoHora(h.cierra)}`
                : "Cerrado"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
