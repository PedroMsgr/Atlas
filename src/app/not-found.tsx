import React from "react";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe o ha sido movida.</p>
      <a href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>Volver al inicio</a>
    </div>
  );
}
