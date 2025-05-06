'use client';

import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Card, Flex, Heading, Text, Theme, Box } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Image from 'next/image';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  // Redireccionar si ya está autenticado
  useEffect(() => {
    if (status === 'authenticated') {
      if (session?.user?.role === 'admin') {
        router.push('/admin');
      } else if (session?.user?.role === 'professional') {
        router.push('/pro');
      } else if (session?.user?.role === 'client') {
        router.push('/client');
      } else {
        router.push('/');
      }
    }
  }, [status, session, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      
      if (result?.error) {
        if (result.error === 'Los clientes no pueden acceder al orquestador') {
          setError('Los clientes no pueden acceder al orquestador. Por favor, accede a través de tu portal específico.');
        } else {
          setError('Credenciales incorrectas');
        }
        setLoading(false);
      } else if (result?.ok) {
        // Obtenemos la información del usuario para determinar su rol
        const userResponse = await fetch('/api/auth/session');
        const session = await userResponse.json();
        
        // Redirigimos según el rol
        if (session?.user?.role === 'admin') {
          router.push('/admin');
        } else if (session?.user?.role === 'professional') {
          router.push('/pro');
        } else if (session?.user?.role === 'client') {
          router.push('/client');
        } else {
          router.push('/');
        }
      }
    } catch (err) {
      setError('Error al iniciar sesión. Inténtalo más tarde.');
      setLoading(false);
    }
  };

  // Si está cargando la sesión, mostrar pantalla de carga
  if (status === 'loading') {
    return (
      <Flex justify="center" align="center" className="min-h-screen">
        <Text>Cargando...</Text>
      </Flex>
    );
  }

  return (
    <Theme appearance="light" accentColor="blue">
      <Flex justify="center" align="center" className="min-h-screen bg-gray-50">
        <Card className="w-full max-w-md p-8">
          <Flex direction="column" gap="6" align="center">
            <Link href="/">
              <Image src="/globe.svg" width={60} height={60} alt="Atlas Logo" />
            </Link>
            
            <Heading size="6">Iniciar sesión en Atlas</Heading>
            
            {error && (
              <Box className="w-full p-3 bg-red-50 text-red-700 rounded-md">
                {error}
              </Box>
            )}
            
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <Flex direction="column" gap="3" className="w-full">
                <label htmlFor="email">
                  <Text size="2" weight="medium">Correo electrónico</Text>
                </label>
                <TextField.Root
                  id="email"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Flex>
              
              <Flex direction="column" gap="3" className="w-full">
                <label htmlFor="password">
                  <Text size="2" weight="medium">Contraseña</Text>
                </label>
                <TextField.Root 
                  id="password"
                  type="password"
                  placeholder="Tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Flex>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={loading}
              >
                {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </Button>
            </form>
            
            <Text size="2" className="text-gray-500">
              ¿No puedes acceder a tu cuenta? Contacta con tu administrador.
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Theme>
  );
}