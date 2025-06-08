"use client";

import { Card, Flex, Heading, Text, Box, Grid } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import { useQuery } from "@apollo/client";
import {
  GET_DASHBOARD_STATS,
  GET_RECENT_CASES,
  GET_SYSTEM_STATUS,
} from "@/graphql/queries/dashboard.queries";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/date-formatter";
import { useState } from "react";
import { AtlasButton } from "@/components/ui/AtlasButton";

export default function AdminDashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const { data: statsData, loading: statsLoading } =
    useQuery(GET_DASHBOARD_STATS);
  const { data: recentData, loading: recentLoading } = useQuery(
    GET_RECENT_CASES,
    { variables: { limit: 9 } }
  );
  const { data: systemData, loading: systemLoading } =
    useQuery(GET_SYSTEM_STATUS);

  const stats = statsData?.dashboardStats;
  const recentCases = recentData?.recentCases || [];
  const systemStatus = systemData?.systemStatus;

  // Estado para paginación de actividad reciente
  const [recentPage, setRecentPage] = useState(1);
  const recentPerPage = 3;
  const paginatedCases = recentCases.slice(
    (recentPage - 1) * recentPerPage,
    recentPage * recentPerPage
  );
  const totalRecentPages = Math.ceil(recentCases.length / recentPerPage);

  return (
    <Box className="p-4 md:p-8">
      {/* Header */}
      <Flex
        justify="between"
        align="center"
        mb="6"
        className="flex-col sm:flex-row gap-2 sm:gap-0 text-center sm:text-left"
      >
        <Heading size="6">Panel de Administración</Heading>
        <Text size="2" color="gray">
          Bienvenido, {session?.user?.name}
        </Text>
      </Flex>

      {/* Quick Stats */}
      <Grid columns={{ initial: "1", md: "3" }} gap="4" mb="6">
        <Card>
          <Flex direction="column" gap="2" p="4">
            <Text size="2" color="gray">
              Servidores Activos
            </Text>
            <Heading size="5">
              {statsLoading ? "..." : stats?.activeServers ?? "-"}
            </Heading>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="2" p="4">
            <Text size="2" color="gray">
              Casos Activos
            </Text>
            <Heading size="5">
              {statsLoading ? "..." : stats?.activeCases ?? "-"}
            </Heading>
          </Flex>
        </Card>
        <Card>
          <Flex direction="column" gap="2" p="4">
            <Text size="2" color="gray">
              Clientes Totales
            </Text>
            <Heading size="5">
              {statsLoading ? "..." : stats?.totalClients ?? "-"}
            </Heading>
          </Flex>
        </Card>
      </Grid>

      {/* Main Content */}
      <Grid columns={{ initial: "1", md: "2" }} gap="6">
        {/* Recent Activity */}
        <Card>
          <Box p="4">
            <Heading size="4" mb="4">
              Actividad Reciente
            </Heading>
            <Flex direction="column" gap="3">
              {recentLoading ? (
                <Text>Cargando...</Text>
              ) : paginatedCases.length === 0 ? (
                <Text color="gray">Sin actividad reciente</Text>
              ) : (
                paginatedCases.map((c: any) => (
                  <Box key={c.id} className="p-3 bg-gray-50 rounded-md">
                    <Text as="div" size="2" weight="bold" mb="1">
                      {c.status === "open"
                        ? "Nuevo caso abierto"
                        : `Caso actualizado (${c.status})`}
                    </Text>
                    <Text as="div" size="1" color="gray" mb="1">
                      {c.client?.user?.firstName} {c.client?.user?.lastName} |{" "}
                      {c.professional?.user?.firstName}{" "}
                      {c.professional?.user?.lastName}
                    </Text>
                    <Text as="div" size="1" color="gray">
                      {formatDate(c.updatedAt, "full")}
                    </Text>
                  </Box>
                ))
              )}

              {/* Paginación */}
              {totalRecentPages > 1 && (
                <Flex mt="2" gap="2" align="center" justify="center">
                  <AtlasButton
                    variant="back"
                    style={{
                      padding: "0.25rem 1rem",
                      marginInline: "auto",
                      fontSize: 14,
                    }}
                    disabled={recentPage === 1}
                    onClick={() => setRecentPage(recentPage - 1)}
                  >
                    Anterior
                  </AtlasButton>
                  <Text size="1">
                    Página {recentPage} de {totalRecentPages}
                  </Text>
                  <AtlasButton
                    variant="next"
                    style={{
                      padding: "0.25rem 1rem",
                      marginInline: "auto",
                      fontSize: 14,
                    }}
                    disabled={recentPage === totalRecentPages}
                    onClick={() => setRecentPage(recentPage + 1)}
                  >
                    Siguiente
                  </AtlasButton>
                </Flex>
              )}
            </Flex>
          </Box>
        </Card>

        {/* Quick Actions */}
        <Card>
          <Box p="4">
            <Heading size="4" mb="4">
              Acciones Rápidas
            </Heading>
            <Flex direction="column" gap="3">
              <AtlasButton
                variant="dashboard-primary"
                onClick={() => router.push("/admin/servers/create")}
              >
                Crear Nuevo Servidor
              </AtlasButton>
              <AtlasButton
                variant="dashboard-secondary"
                onClick={() => router.push("/admin/configs/create")}
              >
                Crear Nueva Configuración
              </AtlasButton>
            </Flex>
          </Box>
        </Card>

        {/* System Status */}
        <Card>
          <Box p="4">
            <Heading size="4" mb="4">
              Estado del Sistema
            </Heading>
            <Flex direction="column" gap="3">
              <Flex
                justify="between"
                align="center"
                className="p-2 bg-gray-50 rounded-md"
              >
                <Text size="2">API Status</Text>
                <Text size="2" color={systemStatus?.api ? "green" : "red"}>
                  {systemLoading
                    ? "..."
                    : systemStatus?.api
                    ? "Operativo"
                    : "Caído"}
                </Text>
              </Flex>
              <Flex
                justify="between"
                align="center"
                className="p-2 bg-gray-50 rounded-md"
              >
                <Text size="2">Base de Datos</Text>
                <Text size="2" color={systemStatus?.db ? "green" : "red"}>
                  {systemLoading
                    ? "..."
                    : systemStatus?.db
                    ? "Conectado"
                    : "Desconectado"}
                </Text>
              </Flex>
              <Flex
                justify="between"
                align="center"
                className="p-2 bg-gray-50 rounded-md"
              >
                <Text size="2">Fecha/Hora</Text>
                <Text size="2">
                  {systemLoading
                    ? "..."
                    : systemStatus?.time
                    ? new Date(systemStatus.time).toLocaleString()
                    : "-"}
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Card>

        {/* Notifications (maqueta) */}
        <Card>
          <Box p="4">
            <Heading size="4" mb="4">
              Notificaciones
            </Heading>
            <Flex direction="column" gap="3">
              <Box className="p-3 bg-yellow-50 rounded-md">
                <Text size="2" weight="bold">
                  Actualización Pendiente
                </Text>
                <Text size="1" color="gray">
                  3 servidores requieren actualización
                </Text>
              </Box>
              <Box className="p-3 bg-red-50 rounded-md">
                <Text size="2" weight="bold">
                  Error de Conexión
                </Text>
                <Text size="1" color="gray">
                  Servidor unitario offline
                </Text>
              </Box>
              <Box className="p-3 bg-blue-50 rounded-md">
                <Text size="2" weight="bold">
                  Nuevo Reporte
                </Text>
                <Text size="1" color="gray">
                  5 reportes pendientes de revisión
                </Text>
              </Box>
            </Flex>
          </Box>
        </Card>
      </Grid>
    </Box>
  );
}
