"use client";
// src/app/admin/configs/[id]/page.tsx

import { Box, Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { GET_CONFIGURATION_BY_ID } from "@/graphql-client/queries/configs.querys";
import CreateConfigForm from "@/components/config-components/CreateConfigForm";

export default function EditConfigPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { data, loading, error } = useQuery(GET_CONFIGURATION_BY_ID, {
    variables: { id: params.id },
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <Box className="p-4">Cargando configuración...</Box>;
  }
  if (error) {
    return (
      <Box className="p-4 text-red-600">
        Error al cargar la configuración: {error.message}
      </Box>
    );
  }

  return (
    <Box className="p-8">
      <Button
        variant="soft"
        onClick={() => router.push("/admin/configs")}
        className="mb-4"
      >
        &larr; Volver a la lista
      </Button>
      {data?.configuration && (
        <CreateConfigForm
          config={data.configuration}
          onSuccess={() => router.push("/admin/configs")}
        />
      )}
    </Box>
  );
}
