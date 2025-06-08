// Hook para detectar si la pantalla es considerada móvil según un breakpoint dado (por defecto 640px).
// Utiliza un listener de resize para actualizar el estado en tiempo real.
//
// Parámetro:
//   breakpoint: ancho máximo en px para considerar móvil (opcional, default 640)
// Retorna:
//   isMobile: booleano que indica si el ancho de la ventana es menor o igual al breakpoint

import { useState, useEffect } from "react";

export default function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener("resize", check);
    check();
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}
