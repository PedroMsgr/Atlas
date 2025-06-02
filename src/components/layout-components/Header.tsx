'use client';

import { Button, Flex, Heading, Avatar, Text, Box } from '@radix-ui/themes';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { ExitIcon, HomeIcon, GearIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

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
      <Box className="bg-blue-600 text-white p-6">
        <Flex justify="between" align="center">
          <Flex align="center" gap="3">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src="/globe.svg" width={30} height={30} alt="Atlas" />
            </Link>
            <Heading size="6">
              {user?.role === 'admin' ? 'Panel de Administración' : 
               user?.role === 'professional' ? 'Portal Profesional' : 'Atlas Legal Platform'}
            </Heading>
          </Flex>
          
          <Flex align="center" gap="4">
            {session ? (
              <>
                <Flex align="center" gap="2">
                  <Avatar
                    fallback={((user?.name?.[0]) || 'A')}
                    color="blue"
                    variant="solid"
                  />
                  <Text>{user?.name || user?.email}</Text>
                </Flex>
                {user?.role === 'admin' && (
                  <Link href="/admin">
                    <Button variant="soft">
                      <GearIcon />
                      Admin
                    </Button>
                  </Link>
                )}
                {user?.role === 'professional' && (
                  <Link href="/pro">
                    <Button variant="soft">
                      <HomeIcon />
                      Portal
                    </Button>
                  </Link>
                )}
                <Button 
                  variant="solid" 
                  color="red"
                  onClick={() => signOut({ callbackUrl: '/' })}
                >
                  <ExitIcon />
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <Link href="/auth/signin">
                <Button variant="solid">
                  Iniciar sesión
                </Button>
              </Link>
            )}
          </Flex>
        </Flex>
      </Box>
    </header>
  );
}