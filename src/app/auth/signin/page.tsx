'use client';

import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Flex, Text } from '@radix-ui/themes';
import LoginForm from '@/components/auth/LoginForm';
import Layout from '@/components/layout/Layout';

// Extender el tipo Session para incluir role
interface UserWithRole {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
}

export default function SignIn() {
  const [pageReady, setPageReady] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  // Usuario con el tipo extendido
  const user = session?.user as UserWithRole | undefined;

  // Marcar que el componente ya está montado en cliente
  useEffect(() => {
    setPageReady(true);
  }, []);

  // Redirección automática si ya está autenticado
  useEffect(() => {
    if (status === 'authenticated') {
      if (user?.role === 'admin') {
        router.push('/admin');
      } else if (user?.role === 'professional') {
        router.push('/pro');
      } else {
        // Cualquier otro (cliente u otro) va a la home
        router.push('/');
      }
    }
  }, [status, user, router]);

  // Mientras carga la sesión o no estamos en cliente, mostramos cargando
  if (!pageReady || status === 'loading') {
    return (
      <Flex justify="center" align="center" className="min-h-screen">
        <Text>Cargando...</Text>
      </Flex>
    );
  }

  // Evitar parpadeo: si ya está autenticado, mostramos mensaje de redirección
  if (status === 'authenticated') {
    return (
      <Flex justify="center" align="center" className="min-h-screen">
        <Text>Redirigiendo...</Text>
      </Flex>
    );
  }

  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
}
