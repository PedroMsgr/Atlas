// API Route: /api/auth/forgot-password
// Recibe un email, genera un token de recuperación y envía un enlace por correo electrónico si el usuario existe.
// No revela si el email existe para mayor seguridad.
// Utiliza nodemailer y almacena el token y su expiración en la base de datos.

import { NextRequest, NextResponse } from "next/server";
import { authService } from "@/services/auth.service";

export async function POST(req: NextRequest) {
  // Procesa la solicitud de recuperación de contraseña
  const { email } = await req.json();
  console.log(`[ForgotPassword] Solicitud recibida para email: ${email}`);
  if (!email) {
    return NextResponse.json(
      { success: false, message: "Email requerido" },
      { status: 400 }
    );
  }

  try {
    await authService.requestPasswordReset(email);
    // El método ya maneja la lógica de seguridad y envío de email
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(`[FORGOT PASSWORD] Error en recuperación:`, err);
    return NextResponse.json(
      { success: false, message: "Error interno al procesar la solicitud" },
      { status: 500 }
    );
  }
}
