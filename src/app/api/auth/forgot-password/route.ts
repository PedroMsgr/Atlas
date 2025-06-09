import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import { UsersRepository } from "@/db/repositories/users.repo";

const usersRepo = new UsersRepository();

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  console.log(`[ForgotPassword] Solicitud recibida para email: ${email}`);
  if (!email) {
    return NextResponse.json(
      { success: false, message: "Email requerido" },
      { status: 400 }
    );
  }

  console.log(`[FORGOT PASSWORD] Email recibido: ${email}`);

  // Buscar usuario
  const user = await usersRepo.findByEmail(email);
  if (!user) {
    // No revelar si existe o no
    console.log(`[FORGOT PASSWORD] Usuario no encontrado para email: ${email}`);
    return NextResponse.json({ success: true });
  }

  // Generar token y guardar en BD (campo resetToken y resetTokenExpiry)
  const token = uuidv4();
  const expiry = new Date(Date.now() + 1000 * 60 * 10); // 10 minutos
  await usersRepo.update(user.id, {
    resetToken: token,
    resetTokenExpiry: expiry,
  });
  console.log(
    `[FORGOT PASSWORD] Token generado: ${token} (expira: ${expiry.toISOString()}) para usuario: ${
      user.email
    }`
  );

  // Configurar transporte
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Enviar email
  const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`;
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Recupera tu contraseña - Atlas",
      html: `<p>Hola,</p><p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p><p><a href="${resetUrl}">${resetUrl}</a></p><p>Si no solicitaste este cambio, ignora este correo.</p>`,
    });
    console.log(`[FORGOT PASSWORD] Email de recuperación enviado a: ${email}`);
  } catch (err) {
    console.error(`[FORGOT PASSWORD] Error enviando email a ${email}:`, err);
  }

  return NextResponse.json({ success: true });
}
