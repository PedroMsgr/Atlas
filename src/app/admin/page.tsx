'use client';

import { Card, Flex, Heading, Text, Box, Grid, Button } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';

export default function AdminDashboard() {
  const { data: session } = useSession();

  return (
    <Box className="p-8">
      {/* Header */}
      <Flex justify="between" align="center" mb="6">
        <Heading size="6">Panel de Administración</Heading>
        <Text size="2" color="gray">Bienvenido, {session?.user?.name}</Text>
      </Flex>

      {/* Quick Stats */}
      <Grid columns="3" gap="4" mb="6">
        <Card>
          <Flex direction="column" gap="2" p="4">
            <Text size="2" color="gray">Servidores Activos</Text>
            <Heading size="5">12</Heading>
            <Text size="1" color="green">+2 este mes</Text>
          </Flex>
        </Card>
        
        <Card>
          <Flex direction="column" gap="2" p="4">
            <Text size="2" color="gray">Casos Activos</Text>
            <Heading size="5">156</Heading>
            <Text size="1" color="blue">+23 esta semana</Text>
          </Flex>
        </Card>
        
        <Card>
          <Flex direction="column" gap="2" p="4">
            <Text size="2" color="gray">Clientes Totales</Text>
            <Heading size="5">1,234</Heading>
            <Text size="1" color="green">+45 este mes</Text>
          </Flex>
        </Card>
      </Grid>

      {/* Main Content */}
      <Grid columns="2" gap="6">
        {/* Recent Activity */}
        <Card>
          <Box p="4">
            <Heading size="4" mb="4">Actividad Reciente</Heading>
            <Flex direction="column" gap="3">
              <Box className="p-3 bg-gray-50 rounded-md">
                <Text size="2" weight="bold">Nuevo caso creado</Text>
                <Text size="1" color="gray">Hace 5 minutos</Text>
              </Box>
              <Box className="p-3 bg-gray-50 rounded-md">
                <Text size="2" weight="bold">Actualización de servidor</Text>
                <Text size="1" color="gray">Hace 1 hora</Text>
              </Box>
              <Box className="p-3 bg-gray-50 rounded-md">
                <Text size="2" weight="bold">Nuevo profesional registrado</Text>
                <Text size="1" color="gray">Hace 2 horas</Text>
              </Box>
            </Flex>
          </Box>
        </Card>

        {/* Quick Actions */}
        <Card>
          <Box p="4">
            <Heading size="4" mb="4">Acciones Rápidas</Heading>
            <Flex direction="column" gap="3">
              <Button variant="soft" color="blue">
                Crear Nuevo Servidor
              </Button>
              <Button variant="soft" color="green">
                Añadir Profesional
              </Button>
              <Button variant="soft" color="purple">
                Generar Reporte
              </Button>
            </Flex>
          </Box>
        </Card>

        {/* System Status */}
        <Card>
          <Box p="4">
            <Heading size="4" mb="4">Estado del Sistema</Heading>
            <Flex direction="column" gap="3">
              <Flex justify="between" align="center" className="p-2 bg-gray-50 rounded-md">
                <Text size="2">API Status</Text>
                <Text size="2" color="green">Operativo</Text>
              </Flex>
              <Flex justify="between" align="center" className="p-2 bg-gray-50 rounded-md">
                <Text size="2">Base de Datos</Text>
                <Text size="2" color="green">Conectado</Text>
              </Flex>
              <Flex justify="between" align="center" className="p-2 bg-gray-50 rounded-md">
                <Text size="2">Servicios de Scraping</Text>
                <Text size="2" color="green">Activo</Text>
              </Flex>
            </Flex>
          </Box>
        </Card>

        {/* Notifications */}
        <Card>
          <Box p="4">
            <Heading size="4" mb="4">Notificaciones</Heading>
            <Flex direction="column" gap="3">
              <Box className="p-3 bg-yellow-50 rounded-md">
                <Text size="2" weight="bold">Actualización Pendiente</Text>
                <Text size="1" color="gray">3 servidores requieren actualización</Text>
              </Box>
              <Box className="p-3 bg-red-50 rounded-md">
                <Text size="2" weight="bold">Error de Conexión</Text>
                <Text size="1" color="gray">Servidor unitario offline</Text>
              </Box>
              <Box className="p-3 bg-blue-50 rounded-md">
                <Text size="2" weight="bold">Nuevo Reporte</Text>
                <Text size="1" color="gray">5 reportes pendientes de revisión</Text>
              </Box>
            </Flex>
          </Box>
        </Card>
      </Grid>
    </Box>
  );
}