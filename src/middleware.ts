// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Add nextauth property to NextRequest
declare module "next/server" {
  interface NextRequest {
    nextauth: {
      token: {
        role?: string;
        [key: string]: any;
      } | null;
    };
  }
}

export default withAuth(
  function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token as { role?: string } | undefined;

    // Si no hay token, withAuth ya redirige por defecto a /api/auth/signin
    // Aquí solo manejamos permisos por ruta/rol

    // Rutas de administrador
    if (pathname.startsWith("/admin") && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Rutas de profesional (admin también puede entrar)
    if (
      pathname.startsWith("/pro") &&
      token?.role !== "professional" &&
      token?.role !== "admin"
    ) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Rutas de cliente
    if (pathname.startsWith("/client") && token?.role !== "client") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Si pasa todas las comprobaciones, continúa
    return NextResponse.next();
  },
  {
    callbacks: {
      // Solo permite avanzar a usuarios autenticados
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  // Aplica middleware a estas rutas
  matcher: ["/admin/:path*", "/pro/:path*", "/client/:path*"],
};
