// src/app/auth/layout.tsx
// Layout global para todas las páginas de /auth
import Layout from "@/components/layout/Layout";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
