"use client";

import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import useIsMobile from "@/hooks/useIsMobile";

const menuItems = [
  { name: "Dashboard", path: "/pro", icon: "📊" },
  { name: "Casos", path: "/pro/cases", icon: "📁" },
];

export default function ProLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarPinned, setSidebarPinned] = useState(true);
  const isMobile = useIsMobile(768);

  useEffect(() => {
    if (isMobile && !sidebarPinned) setSidebarPinned(true);
  }, [isMobile, sidebarPinned]);

  return (
    <Layout>
      <Flex className="min-h-screen">
        {/* Sidebar */}
        <Box
          className={`fixed z-40 top-0 left-0 h-full bg-gray-50 border-r border-gray-200 p-4 transition-transform duration-200 flex flex-col justify-between
            w-64 ${
              sidebarOpen || (!isMobile && sidebarPinned)
                ? "translate-x-0"
                : "-translate-x-full"
            }
            md:static md:block md:translate-x-0 ${
              !isMobile && !sidebarPinned ? "md:w-20" : "md:w-64"
            }
            md:rounded-3xl md:my-4 md:ml-4
          `}
          style={{ minWidth: 0 }}
        >
          {/* Botón para fijar/desplegar el menú en desktop */}
          <button
            className="hidden md:flex items-center justify-center w-full mt-4 p-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors"
            onClick={() => setSidebarPinned((v) => !v)}
            aria-label={sidebarPinned ? "Colapsar menú" : "Expandir menú"}
            type="button"
          >
            {sidebarPinned ? (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 6 15 12 9 18" />
              </svg>
            )}
          </button>
          <div>
            <Flex direction="column" gap="4" className={`mt-14 md:mt-4`}>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors whitespace-nowrap overflow-hidden ${
                    pathname === item.path
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-gray-100"
                  } ${
                    !isMobile && !sidebarPinned
                      ? "md:justify-center md:px-0"
                      : ""
                  } md:transition-all`}
                  onClick={() => {
                    if (isMobile) setSidebarOpen(false);
                  }}
                >
                  <Text size="2">{item.icon}</Text>
                  {(sidebarPinned || isMobile) && (
                    <Text size="2">{item.name}</Text>
                  )}
                </Link>
              ))}
            </Flex>
          </div>
        </Box>
        {/* Overlay para sidebar en móvil */}
        {sidebarOpen && isMobile && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        {/* Botón menú hamburguesa solo en móvil */}
        <button
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white shadow-md md:hidden"
          onClick={() => setSidebarOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        {/* Contenido principal */}
        <Box className="flex p-4 md:p-6 ml-0 md:ml-0" style={{ minWidth: 0 }}>
          {children}
        </Box>
      </Flex>
    </Layout>
  );
}
