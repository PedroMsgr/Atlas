"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CASE } from "@/graphql/queries/case.queries";
import { UPDATE_CASE_STATUS } from "@/graphql/mutations/case.mutations";
import {
  Box,
  Card,
  Heading,
  Flex,
  Text,
  Select,
  Button,
  Badge,
  Spinner,
} from "@radix-ui/themes";
import { useState } from "react";

const CASE_STATUS = [
  { value: "open", label: "Abierto", color: "blue" },
  { value: "inProgress", label: "En progreso", color: "orange" },
  { value: "pending", label: "Pendiente", color: "yellow" },
  { value: "closed", label: "Cerrado", color: "gray" },
];

export default function ProCaseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const caseId = params.id as string;
  const { data, loading, error, refetch } = useQuery(GET_CASE, {
    variables: { id: caseId },
    fetchPolicy: "cache-and-network",
  });
  const [updateStatus, { loading: updating }] = useMutation(
    UPDATE_CASE_STATUS,
    {
      onCompleted: () => refetch(),
    }
  );
  const [status, setStatus] = useState<string | undefined>(undefined);

  if (loading) {
    return (
      <Flex align="center" justify="center" className="min-h-screen">
        <Spinner />
      </Flex>
    );
  }
  if (error || !data?.case) {
    return (
      <Flex align="center" justify="center" className="min-h-screen">
        <Text color="red">No se pudo cargar el caso.</Text>
      </Flex>
    );
  }

  const c = data.case;
  const currentStatus = status || c.status;
  const statusObj =
    CASE_STATUS.find((s) => s.value === currentStatus) || CASE_STATUS[0];

  return (
    <main className="min-h-screen">
      <Box className="p-8 max-w-xl mx-auto">
        <Card>
          <Heading size="5" mb="4">
            Detalle del Caso
          </Heading>
          <Flex direction="column" gap="4" p="2">
            <Flex gap="2" align="center">
              <Text weight="bold">Estado:</Text>
              <Badge color={statusObj.color as any}>{statusObj.label}</Badge>
              <Select.Root
                value={currentStatus}
                onValueChange={(val) => setStatus(val)}
                disabled={updating}
              >
                <Select.Trigger style={{ minWidth: 120 }} />
                <Select.Content>
                  {CASE_STATUS.map((s) => (
                    <Select.Item key={s.value} value={s.value}>
                      {s.label}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
              <Button
                size="1"
                color="blue"
                disabled={updating || currentStatus === c.status}
                onClick={() =>
                  updateStatus({
                    variables: { id: c.id, status: currentStatus },
                  })
                }
              >
                Guardar
              </Button>
            </Flex>
            <Text>
              <b>Cliente:</b> {c.client?.user?.firstName}{" "}
              {c.client?.user?.lastName} ({c.client?.user?.email})
            </Text>
            <Text>
              <b>Servidor:</b> {c.server?.name}
            </Text>
            <Text>
              <b>Creado:</b> {new Date(c.createdAt).toLocaleString()}
            </Text>
            <Text>
              <b>Última actualización:</b>{" "}
              {new Date(c.updatedAt).toLocaleString()}
            </Text>
            <Button variant="soft" onClick={() => router.back()}>
              Volver
            </Button>
          </Flex>
        </Card>
      </Box>
    </main>
  );
}
