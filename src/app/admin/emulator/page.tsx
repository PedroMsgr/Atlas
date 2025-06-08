"use client";
// src/app/admin/emulator/page.tsx

import { useState } from "react";
import { AtlasButton } from "@/components/ui/AtlasButton";

/**
 * Página del emulador de landing para administración.
 * Permite generar landings de prueba a partir de un token unitario.
 */
export default function EmulatorGeneratorPage() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<
    null | "idle" | "loading" | "success" | "error"
  >(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!token.trim()) {
      setErrorMsg("Por favor, ingresa un token válido");
      return;
    }
    setErrorMsg(null);
    setStatus("loading");
    try {
      const res = await fetch("/api/generate-landing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Asegura que el servidor entienda el cuerpo como JSON
        },
        body: JSON.stringify({ token: token.trim() }),
      });
      if (!res.ok) {
        throw new Error("Error al generar la landing");
      }
      // Procesar la respuesta del servidor
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Error desconocido");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Error de red");
      setStatus("error");
    }
  };

  // Layout responsivo: dos tarjetas horizontales en desktop, vertcales en mobile
  return (
    <div className="min-h-screen flex items-center top-0 justify-center p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full max-w-4xl">
        {/* Left panel: info */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col justify-center transition-shadow duration-200 hover:shadow-xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Generar Landing Estática
          </h1>
          <p className="text-gray-700 text-base mb-3 md:mb-4">
            Ingresa el <span className="font-semibold">unitToken</span> de tu
            servidor para generar una landing estática personalizada. Este
            proceso es seguro y no afecta tu servidor.
          </p>
          <ul className="text-gray-600 text-sm list-disc pl-5 mb-3 md:mb-4">
            <li>
              La landing se genera en base a la configuración actual del
              servidor.
            </li>
            <li>El proceso puede tardar unos segundos.</li>
            <li>Recibirás un mensaje de confirmación al finalizar.</li>
          </ul>
          <div className="mt-auto text-xs text-gray-400">
            Atlas Admin &copy; {new Date().getFullYear()}
          </div>
        </div>
        {/* Right panel: form */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col justify-center transition-shadow duration-200 hover:shadow-xl">
          <label htmlFor="token" className="block text-sm font-medium mb-1">
            Token del servidor unitario
          </label>
          <input
            id="token"
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            placeholder="Ingresa aquí el unitToken"
          />
          {errorMsg && <p className="text-red-600 text-sm mb-3">{errorMsg}</p>}
          <AtlasButton
            onClick={handleGenerate}
            disabled={status === "loading"}
            variant="primary"
            className="w-full mb-2"
          >
            {status === "loading" ? "Generando..." : "Generar Landing"}
          </AtlasButton>
          {status === "success" && (
            <p className="text-green-600 text-sm mt-3 text-center">
              Landing generada correctamente.
            </p>
          )}
          {status === "error" && !errorMsg && (
            <p className="text-red-600 text-sm mt-3 text-center">
              Ocurrió un error al generar la landing.
            </p>
          )}
          <div className="mt-6 text-center">
            <AtlasButton
              type="button"
              variant="back"
              className="w-full"
              onClick={() => (window.location.href = "/emulator")}
              disabled={status === "loading"}
            >
              Ir a la página del emulador
            </AtlasButton>
          </div>
        </div>
      </div>
    </div>
  );
}
