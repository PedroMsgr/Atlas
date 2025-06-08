// Página de perfil de usuario.
// Detecta si es móvil o escritorio y muestra el componente correspondiente (ProfileMobile o ProfileDesktop).
// Además, asegura que la información del usuario se cargue correctamente antes de renderizar.

"use client";

import dynamic from "next/dynamic";
import useIsMobile from "@/hooks/useIsMobile";
import { useEffect, useState } from "react";

// Importa los componentes de perfil dinámicamente para evitar problemas de hidratación en Next.js
const ProfileMobile = dynamic(
  () => import("../../components/profile/ProfileMobile"),
  { ssr: false }
);
const ProfileDesktop = dynamic(
  () => import("../../components/profile/ProfileDesktop"),
  {
    ssr: false,
  }
);

export default function ProfilePage() {
  const isMobile = useIsMobile();
  // Forzar renderizado solo en cliente para evitar problemas de hidratación y asegurar que los hooks funcionen correctamente
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return <>{isMobile ? <ProfileMobile /> : <ProfileDesktop />}</>;
}
