'use client';

import { Box, Flex, Text, Separator } from '@radix-ui/themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Layout from '@/components/layout-components/Layout';

const menuItems = [
  { name: 'Dashboard',      path: '/admin',               icon: '📊' },
  { name: 'Servidores',     path: '/admin/servers',       icon: '🌐' },
  { name: 'Configuraciones',path: '/admin/configs',       icon: '⚙️' },
  { name: 'Profesionales',  path: '/admin/professionals', icon: '👨‍⚖️' },
  { name: 'Clientes',       path: '/admin/clients',       icon: '👥' },
  { name: 'Casos',          path: '/admin/cases',         icon: '📁' },
  { name: 'Contenido',      path: '/admin/content',       icon: '📝' },
  { name: 'Estadísticas',   path: '/admin/stats',         icon: '📈' },
  { name: 'Seguridad',      path: '/admin/security',      icon: '🔒' },
  { name: 'Emulador',       path: '/admin/emulador',      icon: '🖥️' },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Layout>
      <Flex className="min-h-screen">
        {/* Sidebar */}
        <Box className="w-64 bg-gray-50 border-r border-gray-200 p-4">
          <Box className="mb-8">
            <Text size="5" weight="bold" className="text-blue-600">
              Atlas Admin
            </Text>
          </Box>

          <Separator size="4" />

          <Flex direction="column" gap="2" className="mt-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
                  pathname === item.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-100'
                }`}
              >
                <Text size="2">{item.icon}</Text>
                <Text size="2">{item.name}</Text>
              </Link>
            ))}
          </Flex>
        </Box>

        <Box className="flex-1 bg-white p-6">
          {children}
        </Box>
      </Flex>
    </Layout>
  );
}
