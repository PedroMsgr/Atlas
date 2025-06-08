import {
  Container,
  Flex,
  Heading,
  Section,
  Text,
  Card,
} from "@radix-ui/themes";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import AtlasLogo from "@/components/ui/AtlasLogo";
import Image from "next/image";
import { AtlasButton } from "@/components/ui/AtlasButton";

export default function Home() {
  return (
    <MainLayout>
      <main className="">
        {/* Seccion de bienvenida */}
        <Section
          size="3"
          className="bg-gradient-to-b from-blue-50 to-white py-8 md:py-12"
        >
          <Container size="2">
            <Flex
              direction="column"
              align="center"
              gap="3"
              className="text-center px-4"
            >
              <AtlasLogo width={80} height={80} className="mb-4" />
              <Heading size="9" className="max-w-2xl text-2xl md:text-4xl">
                Bienvenido a <span className="text-blue-600">Atlas</span>
              </Heading>
              <Text
                size="3"
                className="text-gray-600 max-w-xl text-base md:text-lg"
              >
                La plataforma que conecta profesionales legales con clientes de
                manera eficiente y transparente
              </Text>
              <Link href="/auth/signin">
                <AtlasButton
                  variant="primary"
                  className="mt-6 px-6 py-3 md:px-8 md:py-4 w-full sm:w-auto"
                >
                  Iniciar sesión
                </AtlasButton>
              </Link>
            </Flex>
          </Container>
        </Section>

        {/* Seccion de información */}
        <Section size="3">
          <Container size="4">
            <Heading
              size="6"
              className="mb-12 md:mb-16 text-center text-2xl md:text-3xl"
              style={{ marginBottom: "1em" }}
            >
              ¿Qué ofrecemos?
            </Heading>
            <Flex
              gap="6"
              wrap="wrap"
              justify="center"
              className="flex-col md:flex-row md:gap-6 gap-4"
            >
              <Card className="w-full md:w-[30%] p-6 mb-4 md:mb-0">
                <Flex direction="column" gap="3" align="start">
                  <Image
                    src="/file.svg"
                    width={48}
                    height={48}
                    alt="Gestión de casos"
                  />
                  <Heading size="4">Gestión de casos</Heading>
                  <Text>
                    Administra todos tus casos legales en un solo lugar con un
                    sistema intuitivo y eficiente.
                  </Text>
                </Flex>
              </Card>
              <Card className="w-full md:w-[30%] p-6 mb-4 md:mb-0">
                <Flex direction="column" gap="3" align="start">
                  <Image
                    src="/window.svg"
                    width={48}
                    height={48}
                    alt="Comunicación directa"
                  />
                  <Heading size="4">Comunicación directa</Heading>
                  <Text>
                    Comunícate con tus clientes o abogados mediante un sistema
                    de chat integrado y seguro.
                  </Text>
                </Flex>
              </Card>
              <Card className="w-full md:w-[30%] p-6">
                <Flex direction="column" gap="3" align="start">
                  <AtlasLogo width={48} height={48} />
                  <Heading size="4">Portales personalizados</Heading>
                  <Text>
                    Crea y gestiona portales jurídicos especializados para
                    diferentes áreas del derecho.
                  </Text>
                </Flex>
              </Card>
            </Flex>
          </Container>
        </Section>

        <Section size="3" className="bg-blue-50">
          <Container size="4">
            <Flex
              direction="column"
              align="center"
              gap="6"
              className="py-12 md:py-16 text-center px-4"
            >
              <Heading size="7" className="text-2xl md:text-4xl">
                ¿Listo para empezar?
              </Heading>
              <Text size="4" className="max-w-lg text-base md:text-lg">
                Accede a tu cuenta para gestionar tus casos o contacta con
                nuestro equipo para más información
              </Text>
              <Flex
                gap="4"
                wrap="wrap"
                justify="center"
                className="flex-col sm:flex-row w-full sm:w-auto"
              >
                <Link href="/auth/signin" className="w-full sm:w-auto">
                  <AtlasButton variant="primary" className="w-full sm:w-auto">
                    Iniciar sesión
                  </AtlasButton>
                </Link>
                <Link
                  href="mailto:info@atlasnode.com"
                  className="w-full sm:w-auto"
                >
                  <AtlasButton variant="primary" className="w-full sm:w-auto">
                    Contactar
                  </AtlasButton>
                </Link>
              </Flex>
            </Flex>
          </Container>
        </Section>

        {/* Footer */}
      </main>
    </MainLayout>
  );
}
