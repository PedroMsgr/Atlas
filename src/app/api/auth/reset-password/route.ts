import { NextRequest, NextResponse } from "next/server";
import { UsersRepository } from "@/db/repositories/users.repo";
import bcrypt from "bcryptjs";

const usersRepo = new UsersRepository();

export async function POST(req: NextRequest) {
  const { token, password } = await req.json();
  console.log(`[RESET PASSWORD] Token recibido: ${token}`);
  if (!token || !password) {
    return NextResponse.json(
      { success: false, message: "Token y contraseña requeridos" },
      { status: 400 }
    );
  }

  // Buscar usuario por token
  const user = await usersRepo.findByResetToken(token);
  if (!user) {
    console.log(`[RESET PASSWORD] Usuario no encontrado para token: ${token}`);
  } else {
    console.log(`[RESET PASSWORD] Usuario encontrado: ${user.email}`);
  }
  if (
    !user ||
    !user.resetTokenExpiry ||
    new Date(user.resetTokenExpiry) < new Date()
  ) {
    console.log(
      `[RESET PASSWORD] Token inválido o expirado para token: ${token}`
    );
    return NextResponse.json(
      { success: false, message: "Token inválido o expirado" },
      { status: 400 }
    );
  }

  // Actualizar contraseña y limpiar token
  const hashed = await bcrypt.hash(password, 10);
  await usersRepo.update(user.id, {
    password: hashed,
    resetToken: null,
    resetTokenExpiry: null,
  });
  console.log(
    `[RESET PASSWORD] Contraseña cambiada correctamente para usuario: ${user.email}`
  );

  return NextResponse.json({ success: true });
}
