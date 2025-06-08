import React from "react";
import Link from "next/link";

/**
 * Componente de página 404 - No encontrado.
 * Muestra un mensaje de error y un enlace para volver al inicio.
 */
export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe o ha sido movida.</p>
      <Link href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
        Volver al inicio
      </Link>
    </div>
  );
}
