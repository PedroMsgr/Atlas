// Página de recuperación de contraseña (forgot password)
// Permite al usuario solicitar un enlace para restablecer su contraseña.
// Envía el email al endpoint /api/auth/forgot-password y muestra mensajes de éxito o error.

"use client";
import { useState, Suspense } from "react";
import { Card, Heading, Text, Flex } from "@radix-ui/themes";
import { AtlasButton } from "@/components/ui/AtlasButton";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    // Envía el email al endpoint de recuperación y gestiona el estado de carga y errores
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setLoading(false);
      if (res.ok) {
        setSent(true);
      } else {
        const data = await res.json();
        setError(data.message || "Error al enviar el email");
      }
    } catch (err) {
      setLoading(false);
      setError("Error de red o servidor");
    }
  };

  return (
    <Layout>
      <Suspense fallback={<div>Cargando...</div>}>
        {/* Renderiza el formulario y mensajes de estado */}
        <Flex
          align="center"
          justify="center"
          className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-blue-950"
        >
          <Card className="w-full max-w-md p-8">
            <Heading size="6" className="mb-4 text-center">
              Recuperar contraseña
            </Heading>
            {sent ? (
              <Text color="green">
                Si el email existe, se ha enviado un enlace para restablecer la
                contraseña.
              </Text>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="border rounded px-3 py-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
                {error && <Text color="red">{error}</Text>}
                <AtlasButton
                  type="submit"
                  disabled={loading}
                  className="w-full"
                >
                  {loading ? "Enviando..." : "Enviar enlace"}
                </AtlasButton>
                <AtlasButton
                  variant="cancel"
                  className="w-full"
                  onClick={() => router.push("/auth/signin")}
                >
                  Volver a iniciar sesión
                </AtlasButton>
              </form>
            )}
          </Card>
        </Flex>
      </Suspense>
    </Layout>
  );
}
