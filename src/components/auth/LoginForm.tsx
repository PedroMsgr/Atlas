import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button, Card, Flex, Heading, Text, Box } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

// Extender el tipo Session para incluir role
interface UserWithRole {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
}

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }
    setLoading(true);
    setError('');
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    if (result?.error) {
      if (result.error.includes('clientes no pueden acceder')) {
        setError('Los clientes no pueden acceder al orquestador. Usa tu portal correspondiente.');
      } else {
        setError('Credenciales incorrectas');
      }
      setLoading(false);
    }
    // No llamamos a router.push aquí: el useEffect de sesión hará la redirección
  };

  return (
    <Flex justify="center" align="center" className="min-h-screen bg-gray-200">
      <Card className="w-full max-w-md p-10 bg-white rounded-2xl shadow-md">
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
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
              />
            </Flex>
            <Flex direction="column" gap="3" className="w-full">
              <label htmlFor="password">
                <Text size="2" weight="medium">Contraseña</Text>
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800"
                placeholder="Tu contraseña"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                required
              />
            </Flex>
            <Flex justify="center">
              <Button
                type="submit"
                className="w-full rounded-2xl py-4 px-6 shadow-lg font-semibold"
                disabled={loading}
                variant="surface"
                radius="full"
              >
                {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </Button>
            </Flex>
          </form>
        </Flex>
      </Card>
    </Flex>
  );
}
