"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import {
  Box,
  Heading,
  Spinner,
  Text,
  Card,
  Flex,
  Button,
} from "@radix-ui/themes";
import { GET_CASE } from "@/graphql/queries/case.queries";

export default function CaseDetailPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const { data, loading, error, refetch } = useQuery(GET_CASE, {
    variables: { id },
  });
  const c = data?.case;

  if (loading)
    return (
      <Box className="p-8">
        <Spinner />
      </Box>
    );
  if (error)
    return (
      <Box className="p-8">
        <Text color="red">Error: {error.message}</Text>
      </Box>
    );
  if (!c)
    return (
      <Box className="p-8">
        <Text color="gray">No se encontró el caso.</Text>
      </Box>
    );

  return (
    <Box className="p-8">
      <Flex justify="between" align="center" mb="4">
        <Heading size="5">Detalle del caso</Heading>
        <Button onClick={() => refetch()}>Refrescar</Button>
      </Flex>
      <Card mb="4">
        <Text as="div">
          <b>Estado:</b> {c.status}
        </Text>
        <Text as="div">
          <b>Cliente:</b>{" "}
          {c.client?.user ? (
            `${c.client.user.firstName} ${c.client.user.lastName} (${c.client.user.email})`
          ) : (
            <span style={{ color: "red" }}>Sin usuario asignado</span>
          )}
        </Text>
        <Text as="div">
          <b>Profesional:</b>{" "}
          {c.professional?.user ? (
            `${c.professional.user.firstName} ${c.professional.user.lastName} (${c.professional.user.email})`
          ) : (
            <span style={{ color: "red" }}>Sin usuario asignado</span>
          )}
        </Text>
        <Text as="div">
          <b>Servidor:</b> {c.server?.name}
        </Text>
        <Text as="div">
          <b>Creado:</b> {new Date(c.createdAt).toLocaleString()}
        </Text>
        <Text as="div">
          <b>Actualizado:</b> {new Date(c.updatedAt).toLocaleString()}
        </Text>
        <Text as="div" mt="2">
          <b>Archivos:</b>{" "}
          {Array.isArray(c.files) && c.files.length > 0
            ? `${c.files.length} archivo(s)`
            : "Sin archivos"}
        </Text>
        <Text as="div" mt="2">
          <b>Chat:</b>{" "}
          {c.chat
            ? Array.isArray(c.chat.messages) && c.chat.messages.length > 0
              ? `Con mensajes (${c.chat.messages.length})`
              : "Sin mensajes"
            : "Sin chat"}
        </Text>
      </Card>

      <Text as="div" mb="4">
        Futuras seccionnes por implementar
      </Text>
      <Flex justify="end">
        <Button color="blue" onClick={() => window.history.back()}>
          Volver
        </Button>
      </Flex>
    </Box>
  );
}
