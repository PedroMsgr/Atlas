"use client";
// src/app/admin/configs/[id]/page.tsx

import React from "react";
import { Box } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { GET_CONFIGURATION_BY_ID } from "@/graphql/queries/config.queries";
import ConfigUpdate from "@/components/config/ConfigUpdate";
import { AtlasButton } from "@/components/ui/AtlasButton";

export default function EditConfigPage({ params }: { params: any }) {
  const router = useRouter();
  const { id } = React.use(params) as { id: string };
  const { data, loading, error } = useQuery(GET_CONFIGURATION_BY_ID, {
    variables: { id },
    fetchPolicy: "network-only",
  });

  // DEBUG: Mostrar la data recibida de la query
  console.log("CONFIG QUERY DATA:", data);

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
      <AtlasButton
        variant="back"
        onClick={() => router.push("/admin/configs")}
        className="mb-4"
      >
        &larr; Volver a la lista
      </AtlasButton>
      {data?.configuration && (
        <ConfigUpdate
          config={data.configuration}
          onSuccess={() => router.push("/admin/configs")}
        />
      )}
    </Box>
  );
}
