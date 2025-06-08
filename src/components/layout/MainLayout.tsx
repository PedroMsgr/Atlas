// Componente de layout de alto nivel para envolver la app con Layout.
// Permite reutilizar la estructura global en todas las páginas.

import Layout from "./Layout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
