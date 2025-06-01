"use client";

import { Box, Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { GET_CONFIGURATION_BY_ID } from "@/graphql-client/queries/configs.queries";
import CreateConfigForm from "@/components/config-components/CreateConfigForm";

export default function EditConfigPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { data, loading, error } = useQuery(GET_CONFIGURATION_BY_ID, {
    variables: { id: params.id },
    fetchPolicy: "network-only",
  });

  return (
    <Box className="p-8">
      <Button
        variant="soft"
        onClick={() => router.push("/admin/configs")}
        className="mb-4"
      >
        &larr; Volver a la lista
      </Button>
      {loading && <div>Cargando configuración...</div>}
      {error && <div className="text-red-500">Error: {error.message}</div>}
      {data?.configuration && (
        <CreateConfigForm
          config={data.configuration}
          onSuccess={() => router.push("/admin/configs")}
        />
      )}
    </Box>
  );
}
