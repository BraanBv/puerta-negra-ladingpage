"use client";

import { useEffect, useState } from "react";

/** Fecha actual en el cliente; `null` durante el render del servidor para evitar desajustes de hidratación. */
export function useAhora() {
  const [ahora, setAhora] = useState<Date | null>(null);
  useEffect(() => {
    setAhora(new Date());
    const id = setInterval(() => setAhora(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);
  return ahora;
}
