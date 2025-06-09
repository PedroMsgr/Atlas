// API Route: /api/auth/reset-password
// Recibe un token y una nueva contraseña, valida el token y actualiza la contraseña del usuario si es válido.
// Limpia el token tras el uso y no revela información sensible.

import { NextRequest, NextResponse } from "next/server";
import { authService } from "@/services/auth.service";

export async function POST(req: NextRequest) {
  // Procesa la solicitud de restablecimiento de contraseña
  const { token, password } = await req.json();
  console.log(`[RESET PASSWORD] Token recibido: ${token}`);
  if (!token || !password) {
    return NextResponse.json(
      { success: false, message: "Token y contraseña requeridos" },
      { status: 400 }
    );
  }

  try {
    const ok = await authService.resetPassword(token, password);
    if (ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: "Token inválido o expirado" },
        { status: 400 }
      );
    }
  } catch (err) {
    console.error(`[RESET PASSWORD] Error al cambiar contraseña:`, err);
    return NextResponse.json(
      { success: false, message: "Error interno al procesar la solicitud" },
      { status: 500 }
    );
  }
}
