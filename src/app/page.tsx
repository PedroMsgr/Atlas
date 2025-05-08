import { Button, Container, Flex, Heading, Section, Text, Card, Box } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section size="3" className="bg-gradient-to-b from-blue-50 to-white">
        <Container size="4">
          <Flex direction="column" align="center" gap="6" className="py-16 md:py-24 text-center">
            <Image 
              src="/globe.svg" 
              width={120} 
              height={120} 
              alt="Atlas Logo" 
              className="mb-6"
            />
            <Heading size="9" className="max-w-3xl">
              Bienvenido a <span className="text-blue-600">Atlas</span>
            </Heading>
            <Text size="5" className="text-gray-600 max-w-2xl">
              La plataforma que conecta profesionales legales con clientes de manera eficiente y transparente
            </Text>
            <Link href="/auth/signin">
              <Button size="4" className="mt-8 px-10 py-6">
                Iniciar sesión
              </Button>
            </Link>
          </Flex>
        </Container>
      </Section>

      {/* Features Section */}
      <Section size="3">
        <Container size="4">
          <Heading size="6" className="mb-10 text-center">¿Qué ofrecemos?</Heading>
          
          <Flex gap="6" wrap="wrap" justify="center">
            <Card className="w-full md:w-[30%] p-6">
              <Flex direction="column" gap="3" align="start">
                <Image src="/file.svg" width={48} height={48} alt="Gestión de casos" />
                <Heading size="4">Gestión de casos</Heading>
                <Text>Administra todos tus casos legales en un solo lugar con un sistema intuitivo y eficiente.</Text>
              </Flex>
            </Card>
            
            <Card className="w-full md:w-[30%] p-6">
              <Flex direction="column" gap="3" align="start">
                <Image src="/window.svg" width={48} height={48} alt="Comunicación directa" />
                <Heading size="4">Comunicación directa</Heading>
                <Text>Comunícate con tus clientes o abogados mediante un sistema de chat integrado y seguro.</Text>
              </Flex>
            </Card>
            
            <Card className="w-full md:w-[30%] p-6">
              <Flex direction="column" gap="3" align="start">
                <Image src="/globe.svg" width={48} height={48} alt="Portales personalizados" />
                <Heading size="4">Portales personalizados</Heading>
                <Text>Crea y gestiona portales jurídicos especializados para diferentes áreas del derecho.</Text>
              </Flex>
            </Card>
          </Flex>
        </Container>
      </Section>
      
      {/* CTA Section */}
      <Section size="3" className="bg-blue-50">
        <Container size="4">
          <Flex direction="column" align="center" gap="6" className="py-16 text-center">
            <Heading size="7">¿Listo para empezar?</Heading>
            <Text size="4" className="max-w-lg">
              Accede a tu cuenta para gestionar tus casos o contacta con nuestro equipo para más información
            </Text>
            <Flex gap="4" wrap="wrap" justify="center">
              <Link href="/auth/signin">
                <Button size="3">Iniciar sesión</Button>
              </Link>
              <Link href="mailto:info@atlasnode.com">
                <Button size="3" variant="outline">Contactar</Button>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Section>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <Container size="4">
          <Flex justify="between" wrap="wrap" gap="4">
            <Box>
              <Text size="2" weight="bold">© 2025 Atlas Legal Platform</Text>
            </Box>
            <Flex gap="4">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">Privacidad</Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600">Términos</Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600">Contacto</Link>
            </Flex>
          </Flex>
        </Container>
      </footer>
    </main>
  );
}
