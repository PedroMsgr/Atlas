"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button, Card, Flex, Heading, Text, Box } from "@radix-ui/themes";
import Link from "next/link";
import useIsMobile from "@/hooks/useIsMobile"; // Hook para detectar si es móvil
import AtlasLogo from "@/components/ui/AtlasLogo"; // Asegúrate de que la ruta sea correcta
import BanishTransition from "@/components/ui/BanishTransition";

export default function LoginForm() {
  const isMobile = useIsMobile();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    setLoading(false);
    if (result?.error) {
      setError(
        result.error.includes("clientes")
          ? "Los clientes no pueden acceder al orquestador."
          : "Credenciales incorrectas"
      );
    }
  };

  return (
    <>
      <BanishTransition show={isMobile} duration={1}>
        {isMobile && (
          <div className="min-h-screen flex items-center justify-center ">
            <Card className="p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl flex flex-col items-center border-none">
              <div className="flex flex-col items-center w-full mb-2 mt-2">
                <AtlasLogo width={80} height={80} className="mb-3" />
                <Heading size="6" className="text-center w-full mb-2">
                  Iniciar sesión en Atlas
                </Heading>
              </div>
              {error && (
                <Box className="w-full mb-3 p-2 bg-red-50 text-red-700 rounded-md text-center text-sm">
                  {error}
                </Box>
              )}
              <form onSubmit={handleSubmit} className="w-full space-y-3">
                <Flex direction="column" gap="2">
                  <label htmlFor="email">
                    <Text size="2" weight="medium">
                      Correo electrónico
                    </Text>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 transition-all"
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="username"
                  />
                </Flex>
                <Flex direction="column" gap="2">
                  <label htmlFor="password">
                    <Text size="2" weight="medium">
                      Contraseña
                    </Text>
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 transition-all"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </Flex>
                <div className="flex flex-col items-center w-full gap-2 mt-2">
                  <Button
                    type="submit"
                    className="w-full rounded-2xl py-3 font-semibold text-base max-w-xs"
                    disabled={loading}
                    variant="surface"
                    radius="full"
                  >
                    {loading ? "Iniciando sesión..." : "Iniciar sesión"}
                  </Button>
                  <Link
                    href="#"
                    className="text-xs text-blue-600 hover:underline text-center"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </form>
            </Card>
          </div>
        )}
      </BanishTransition>
      <BanishTransition show={!isMobile} duration={1}>
        {!isMobile && (
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-2xl">
              <Card className="flex flex-col items-center p-0 bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden border-none min-h-[600px]">
                {/* Fila superior: Logo y branding */}
                <div className="flex flex-col justify-center items-center w-full py-12 bg-gradient-to-t from-blue-900 via-blue-700 to-white dark:from-blue-950 dark:via-blue-900 dark:to-gray-900 rounded-t-[2.5rem]">
                  <AtlasLogo width={140} height={140} className="mb-6" />
                  <Heading
                    size="8"
                    className="text-center w-full mb-2 text-white font-bold"
                  >
                    Atlas
                  </Heading>
                  <Text
                    size="4"
                    className="text-center text-blue-100 font-medium"
                  >
                    Orquestador Legal
                  </Text>
                </div>
                {/* Fila inferior: Formulario */}
                <div className="flex-1 flex flex-col justify-center bg-white items-center w-full px-8 py-12 rounded-b-[2.5rem]">
                  <div className="w-full max-w-md mx-auto">
                    <Heading size="7" className="text-center w-full mb-4">
                      Iniciar sesión
                    </Heading>
                    {error && (
                      <Box className="w-full mb-3 p-2 bg-red-50 text-red-700 rounded-md text-center text-base">
                        {error}
                      </Box>
                    )}
                    <form onSubmit={handleSubmit} className="w-full space-y-4">
                      <Flex direction="column" gap="2">
                        <label htmlFor="email">
                          <Text size="3" weight="medium">
                            Correo electrónico
                          </Text>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 transition-all text-lg"
                          placeholder="ejemplo@correo.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="username"
                        />
                      </Flex>
                      <Flex direction="column" gap="2">
                        <label htmlFor="password">
                          <Text size="3" weight="medium">
                            Contraseña
                          </Text>
                        </label>
                        <input
                          id="password"
                          type="password"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 transition-all text-lg"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="current-password"
                        />
                      </Flex>
                      <div className="flex flex-col items-center w-full gap-2 mt-2">
                        <Button
                          type="submit"
                          className="w-full rounded-2xl py-3 font-semibold text-lg max-w-xs"
                          disabled={loading}
                          variant="surface"
                          radius="full"
                        >
                          {loading ? "Iniciando sesión..." : "Iniciar sesión"}
                        </Button>
                        <Link
                          href="#"
                          className="text-xs text-blue-600 hover:underline text-center"
                        >
                          ¿Olvidaste tu contraseña?
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </BanishTransition>
    </>
  );
}
