'use client';

import { Button, Flex, Heading, Avatar, Text, Box } from '@radix-ui/themes';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { ExitIcon, HomeIcon, GearIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header>
      <Box className="bg-blue-600 text-white p-6">
        <Flex justify="between" align="center">
          <Flex align="center" gap="3">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src="/globe.svg" width={30} height={30} alt="Atlas" />
            </Link>
            <Heading size="6">
              {session?.user?.role === 'admin' ? 'Panel de Administración' : 
               session?.user?.role === 'professional' ? 'Portal Profesional' : 'Atlas Legal Platform'}
            </Heading>
          </Flex>
          
          <Flex align="center" gap="4">
            {session ? (
              <>
                <Flex align="center" gap="2">
                  <Avatar
                    fallback={(session.user.name?.[0] || 'A') as string}
                    color="blue"
                    variant="solid"
                  />
                  <Text>{session.user.name || session.user.email}</Text>
                </Flex>
                {session.user.role === 'admin' && (
                  <Link href="/admin">
                    <Button variant="soft">
                      <GearIcon />
                      Admin
                    </Button>
                  </Link>
                )}
                {session.user.role === 'professional' && (
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