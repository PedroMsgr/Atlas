"use client";
// src/app/admin/emulator/page.tsx

import { useState } from "react";
import Link from "next/link";

export default function EmulatorGeneratorPage() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<null | "idle" | "loading" | "success" | "error">(null);
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
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token.trim() }),
      });
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Generar Landing Estática</h1>

        <label htmlFor="token" className="block text-sm font-medium mb-1">
          Token del servidor unitario
        </label>
        <input
          id="token"
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ingresa aquí el unitToken"
        />

        {errorMsg && (
          <p className="text-red-600 text-sm mb-3">{errorMsg}</p>
        )}

        <button
          onClick={handleGenerate}
          disabled={status === "loading"}
          className={`w-full py-2 rounded text-white ${
            status === "loading" ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {status === "loading" ? "Generando..." : "Generar Landing"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-sm mt-3">
            Landing generada correctamente.
          </p>
        )}
        {status === "error" && !errorMsg && (
          <p className="text-red-600 text-sm mt-3">
            Ocurrió un error al generar la landing.
          </p>
        )}

        <div className="mt-6 text-center">
          <Link href="/emulator" className="text-blue-600 hover:underline">
            Ir a la página del emulador
          </Link>
        </div>
      </div>
    </div>
  );
}
