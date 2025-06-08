// Componente para crear un nuevo servidor unitario.
// Permite ingresar nombre, dominio y constelación, validando el dominio antes de crear.
// Al enviar el formulario, se llama a la mutación CREATE_SERVER con los datos ingresados.
// Si la creación es exitosa, se limpian los campos y se llama a la función onSuccess
// con el ID del nuevo servidor. Si ocurre un error, se muestra un mensaje de error
// correspondiente.

import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_SERVER } from "@/graphql/mutations/server.mutations";
import { GET_CONSTELLATIONS } from "@/graphql/queries/constellation.queries";
import { TextField, Select, Text, Box, Heading, Flex } from "@radix-ui/themes";
import { AtlasButton } from "../ui/AtlasButton";

interface ServerCreateProps {
  onSuccess?: (id: string) => void;
}

export default function ServerCreate({ onSuccess }: ServerCreateProps) {
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [constellationId, setConstellationId] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const {
    data: constellationsData,
    loading: loadingConstellations,
    error: constellationsError,
  } = useQuery(GET_CONSTELLATIONS);

  const [createServer, { loading }] = useMutation(CREATE_SERVER, {
    onError: (error: any) => {
      if (error.graphQLErrors) {
        const errorMessage = error.graphQLErrors
          .map((e: any) => e.message)
          .join(", ");
        setValidationError(`Error GraphQL: ${errorMessage}`);
      } else if (error.networkError) {
        setValidationError(`Error de red: ${error.networkError.message}`);
      } else {
        setValidationError(`Error: ${error.message}`);
      }
    },
    onCompleted: (data) => {
      setName("");
      setDomain("");
      setConstellationId(null);
      setValidationError(null);
      if (onSuccess && data?.createServer?.id) {
        onSuccess(data.createServer.id);
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    const domainRegex = /^[a-z0-9]([a-z0-9-]+\.)+([a-z0-9]{2,})$/;
    if (!domainRegex.test(domain)) {
      setValidationError(
        "El dominio debe tener un formato válido (ej: servidor1.example.com)"
      );
      return;
    }
    try {
      await createServer({
        variables: {
          name,
          domain,
          constellationId:
            constellationId && constellationId !== "none"
              ? constellationId
              : undefined,
        },
      });
    } catch (error) {
      // error ya manejado en onError
    }
  };

  return (
    <Box className="max-w-2xl w-full bg-white border rounded-lg p-8 shadow-sm">
      <Heading size="5" className="mb-2">
        Crear nuevo servidor
      </Heading>
      <Text as="p" size="3" color="gray" className="mb-6">
        Completa los datos para registrar un nuevo servidor. Los campos marcados
        con * son obligatorios.
      </Text>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Text
            as="label"
            size="2"
            weight="bold"
            htmlFor="server-name"
            className="block mb-1"
          >
            Nombre del servidor *
          </Text>
          <TextField.Root
            id="server-name"
            name="name"
            placeholder="Nombre del servidor"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div>
          <Text
            as="label"
            size="2"
            weight="bold"
            htmlFor="server-domain"
            className="block mb-1"
          >
            Dominio *
          </Text>
          <TextField.Root
            id="server-domain"
            name="domain"
            placeholder="Dominio (ej: servidor1.example.com)"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div>
          <Text
            as="label"
            size="2"
            weight="bold"
            htmlFor="server-constellation"
            className="block mb-1"
          >
            Constelación (opcional)
          </Text>
          <Select.Root
            value={constellationId || undefined}
            onValueChange={setConstellationId}
            disabled={loadingConstellations || !!constellationsError}
          >
            <Select.Trigger
              id="server-constellation"
              className="w-full"
              placeholder={
                loadingConstellations
                  ? "Cargando constelaciones..."
                  : "Seleccionar constelación (opcional)"
              }
            />
            <Select.Content>
              <Select.Item value="none">Sin constelación</Select.Item>
              {(constellationsData?.constellations || []).map((c: any) => (
                <Select.Item key={c.id} value={c.id}>
                  {c.name}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>
        {validationError && (
          <Text color="red" size="2">
            {validationError}
          </Text>
        )}
        <Flex justify="end" className="pt-2">
          <AtlasButton type="submit" disabled={loading} variant="success">
            {loading ? "Creando..." : "Crear Servidor"}
          </AtlasButton>
        </Flex>
      </form>
    </Box>
  );
}
