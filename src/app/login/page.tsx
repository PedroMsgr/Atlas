// Página de login (redirección).
// Redirige automáticamente a la página de inicio de sesión de NextAuth.

import { redirect } from "next/navigation";

export default function LoginRedirect() {
  redirect("/auth/signin");
}
