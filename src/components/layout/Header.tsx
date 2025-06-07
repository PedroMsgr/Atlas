'use client';

import { Button, Flex, Avatar, Box } from '@radix-ui/themes';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { ExitIcon, HomeIcon, GearIcon } from '@radix-ui/react-icons';
import AtlasLogo from '@/components/ui/AtlasLogo';

// Extender el tipo de sesión para incluir role
interface CustomUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
}

export default function Header() {
  const { data: session } = useSession();
  const user = session?.user as CustomUser | undefined;

  return (
    <header>
      <Box className="bg-blue-600 text-white px-4 py-4 md:px-6 md:py-6">
        <div className="container mx-auto">
          <Flex align="center" justify="between" className="w-full">
            {/* Logo a la izquierda */}
            <Link href="/" className="flex items-center gap-2">
              <AtlasLogo width={36} height={36} style={{ minWidth: 32, minHeight: 32 }} />
              <span className="font-bold text-lg hidden sm:inline">Atlas</span>
            </Link>
            <Flex align="center" gap="2" wrap="wrap">
              {session ? (
                <>
                  {/* Avatar como botón de perfil */}
                  {(user?.role === 'admin' || user?.role === 'professional') && (
                    <Link href="/profile" className="block">
                      <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-lg border border-gray-300">
                        {/* Iniciales del usuario o icono estándar */}
                        {user?.name ? user.name[0] : <span>P</span>}
                      </div>
                    </Link>
                  )}
                  {/* Botón solo icono para admin/professional */}
                  {user?.role === 'admin' && (
                    <Link href="/admin">
                      <Button variant="soft" size="2" className="rounded-full p-0 w-9 h-9 flex items-center justify-center bg-white/10 text-white hover:bg-white/20" aria-label="Administración" style={{ minWidth: 36, minHeight: 36 }}>
                        <GearIcon color="white" />
                      </Button>
                    </Link>
                  )}
                  {user?.role === 'professional' && (
                    <Link href="/pro">
                      <Button variant="soft" size="2" className="rounded-full p-0 w-9 h-9 flex items-center justify-center bg-white/10 text-white hover:bg-white/20" aria-label="Portal" style={{ minWidth: 36, minHeight: 36 }}>
                        <HomeIcon color="white" />
                      </Button>
                    </Link>
                  )}
                  {/* Botón solo icono para logout */}
                  <Button 
                    variant="solid" 
                    color="red"
                    size="2"
                    className="rounded-full p-0 w-9 h-9 flex items-center justify-center"
                    onClick={() => signOut({ callbackUrl: '/' })}
                    aria-label="Cerrar sesión"
                  >
                    <ExitIcon />
                  </Button>
                </>
              ) : (
                <Link href="/auth/signin">
                  <Button variant="solid" size="2" >
                    Iniciar sesión
                  </Button>
                </Link>
              )}
            </Flex>
          </Flex>
        </div>
      </Box>
    </header>
  );
}