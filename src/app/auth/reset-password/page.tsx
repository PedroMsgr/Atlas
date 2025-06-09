// Página de restablecimiento de contraseña (reset password)
// Permite al usuario establecer una nueva contraseña usando un token recibido por email.
// Valida el token, muestra mensajes de error o éxito, y envía la nueva contraseña al endpoint /api/auth/reset-password.

"use client";
// uso de dynamic y fetchCache para evitar caché en esta página
// Esto es necesario para que el token de restablecimiento funcione correctamente
// debido a que es un proceso sensible y no debe ser cacheado.
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, Heading, Text, Flex } from "@radix-ui/themes";
import { AtlasButton } from "@/components/ui/AtlasButton";
import Layout from "@/components/layout/Layout";

function ResetPasswordForm() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get("token") || "";
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!password || password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (password !== confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      setLoading(false);
      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        setError(data.message || "Error al cambiar la contraseña");
      }
    } catch (err) {
      setLoading(false);
      setError("Error de red o servidor");
    }
  };

  // Si no hay token, muestra un mensaje de error y un botón para solicitar un nuevo enlace
  if (!token) {
    return (
      <Flex
        align="center"
        justify="center"
        className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-blue-950"
      >
        <Card className="w-full max-w-md p-8">
          <Text color="red">Token inválido o faltante.</Text>
          <AtlasButton
            className="mt-4 w-full"
            onClick={() => router.push("/auth/forgot-password")}
          >
            Solicitar nuevo enlace
          </AtlasButton>
        </Card>
      </Flex>
    );
  }

  return (
    <Flex
      align="center"
      justify="center"
      className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-blue-950"
    >
      <Card className="w-full max-w-md p-8">
        <Heading size="6" className="mb-4 text-center">
          Restablecer contraseña
        </Heading>
        {success ? (
          <>
            <Text color="green">¡Contraseña cambiada correctamente!</Text>
            <AtlasButton
              className="mt-4 w-full"
              onClick={() => router.push("/auth/signin")}
            >
              Iniciar sesión
            </AtlasButton>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="password">Nueva contraseña</label>
            <input
              id="password"
              type="password"
              required
              className="border rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <label htmlFor="confirm">Confirmar contraseña</label>
            <input
              id="confirm"
              type="password"
              required
              className="border rounded px-3 py-2"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              autoComplete="new-password"
            />
            {error && <Text color="red">{error}</Text>}
            <AtlasButton type="submit" disabled={loading} className="w-full">
              {loading ? "Cambiando..." : "Cambiar contraseña"}
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
  );
}

export default function ResetPasswordPage() {
  // Aplica el layout principal para mantener la coherencia visual
  return (
    <Layout>
      <Suspense fallback={<div>Cargando...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </Layout>
  );
}
