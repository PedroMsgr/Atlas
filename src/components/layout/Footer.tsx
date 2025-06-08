"use client";

// Componente de pie de página global para la plataforma Atlas.
// Muestra enlaces de privacidad, términos y contacto, y el copyright.

import { Box, Container, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-8">
      <Container size="4">
        <Flex
          justify="between"
          wrap="wrap"
          gap="4"
          className="flex-col md:flex-row items-center md:items-start text-center md:text-left"
        >
          <Box className="mb-4 md:mb-0">
            <Text size="2" weight="bold">
              © 2025 Atlas Legal Platform
            </Text>
          </Box>
          <Flex
            gap="4"
            className="flex-col sm:flex-row items-center md:items-start"
          >
            <Link
              href="/privacy"
              className="text-sm text-gray-600 hover:text-blue-600 mb-2 sm:mb-0"
            >
              Privacidad
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 hover:text-blue-600 mb-2 sm:mb-0"
            >
              Términos
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Contacto
            </Link>
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
}
