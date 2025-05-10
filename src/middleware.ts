import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import { NextRequestWithAuth } from 'next-auth/middleware';

// Middleware que se ejecuta en cada solicitud
export default withAuth(
  // `withAuth` aumenta la request con la sesión del usuario
  function middleware(request: NextRequestWithAuth) {
    // Obtener la ruta actual y la sesión
    const pathname = request.nextUrl.pathname;
    const role = request.nextauth.token?.role as string | undefined;
    
    // Rutas para el panel de administración
    if (pathname.startsWith('/admin')) {
      // Solo permitir acceso a administradores
      if (role !== 'admin') {
        const url = new URL('/auth/signin', request.url);
        url.searchParams.set('callbackUrl', encodeURI(request.url));
        url.searchParams.set('error', 'AccessDenied');
        return NextResponse.redirect(url);
      }
    }
    
    // Rutas para profesionales
    if (pathname.startsWith('/pro')) {
      // Permitir acceso a profesionales y administradores
      if (!(role === 'professional' || role === 'admin')) {
        const url = new URL('/auth/signin', request.url);
        url.searchParams.set('callbackUrl', encodeURI(request.url));
        url.searchParams.set('error', 'AccessDenied');
        return NextResponse.redirect(url);
      }
    }
    
    // Si la autenticación pasa, continuar con la solicitud
    return NextResponse.next();
  },
  {
    // Configuración de withAuth
    callbacks: {
      // Verificar si el usuario tiene sesión para estas rutas
      authorized: ({ token }) => !!token,
    },
  }
);

// Configurar en qué rutas se ejecutará el middleware
export const config = {
  matcher: ['/admin/:path*', '/pro/:path*'],
};
