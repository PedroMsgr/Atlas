import { useState, ChangeEvent } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_SERVER } from '@/graphql/mutations/server.mutations';
import { GET_SERVERS } from '@/graphql/queries/server.querys';
import { GET_CONSTELLATIONS } from '@/graphql/queries/constellation.querys';
import { Button, Card, TextField, Select, Text } from '@radix-ui/themes';

export default function CreateServer() {
  const [name, setName] = useState('');
  const [domain, setDomain] = useState('');
  const [constellationId, setConstellationId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  
  // Obtener las constelaciones disponibles
  const { data: constellationsData, loading: loadingConstellations, error: constellationsError } = useQuery(GET_CONSTELLATIONS, {
    onError: (error: any) => {
      console.error('Error al cargar constelaciones:', error);
      // Manejo más detallado del error
      if (error.graphQLErrors) {
        const errorMessage = error.graphQLErrors.map((e: any) => e.message).join(', ');
        setError(`Error GraphQL: ${errorMessage}`);
      } else if (error.networkError) {
        setError(`Error de red: ${error.networkError.message}`);
      } else {
        setError(`Error al cargar constelaciones: ${error.message}`);
      }
    }
  });
  
  const [createServer, { loading }] = useMutation(CREATE_SERVER, {
    refetchQueries: [{ query: GET_SERVERS }],
    onError: (error: any) => {
      console.error('Error al crear servidor:', error);
      // Manejo más detallado del error
      if (error.graphQLErrors) {
        const errorMessage = error.graphQLErrors.map((e: any) => e.message).join(', ');
        setError(`Error GraphQL: ${errorMessage}`);
      } else if (error.networkError) {
        setError(`Error de red: ${error.networkError.message}`);
      } else {
        setError(`Error: ${error.message}`);
      }
    },
    onCompleted: () => {
      setName('');
      setDomain('');
      setConstellationId(null);
      setError(null);
      setValidationError(null);
    },
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setValidationError(null);
    
    // Validación del dominio
    const domainRegex = /^[a-z0-9]([a-z0-9-]+\.)+([a-z0-9]{2,})$/;
    if (!domainRegex.test(domain)) {
      setValidationError("El dominio debe tener un formato válido (ej: servidor1.example.com)");
      return;
    }

    try {
      await createServer({
        variables: {
          name,
          domain,
          constellationId: constellationId && constellationId !== "none" ? constellationId : undefined,
        },
      });
    } catch (error) {
      console.error('Error al crear servidor:', error);
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleDomainChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Eliminar espacios y caracteres especiales no permitidos en dominios
    const sanitizedValue = e.target.value.trim().toLowerCase().replace(/[^a-z0-9.-]/g, '');
    setDomain(sanitizedValue);
  };

  return (
    <Card className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Text size="5" weight="bold" className="mb-4">Crear Nuevo Servidor</Text>
        
        <div className="space-y-2">
          <TextField.Root>
            <TextField.Slot>
              <input
                type="text"
                placeholder="Nombre del servidor"
                value={name}
                onChange={handleNameChange}
                required
                className="w-full px-3 py-2 bg-transparent outline-none"
              />
            </TextField.Slot>
          </TextField.Root>
        </div>

        <div className="space-y-2">
          <TextField.Root>
            <TextField.Slot>
              <input
                type="text"
                placeholder="Dominio (ej: servidor1.example.com)"
                value={domain}
                onChange={handleDomainChange}
                required
                className="w-full px-3 py-2 bg-transparent outline-none"
              />
            </TextField.Slot>
          </TextField.Root>
        </div>

        <div className="space-y-2">
          <Select.Root 
            value={constellationId || undefined} 
            onValueChange={setConstellationId}
            disabled={loadingConstellations || !!constellationsError}
          >
            <Select.Trigger placeholder={loadingConstellations ? "Cargando constelaciones..." : "Seleccionar constelación (opcional)"} />
            <Select.Content>
              <Select.Item value="none">Sin constelación</Select.Item>
              {!loadingConstellations && constellationsData?.constellations?.map((constellation: { id: string, name: string }) => (
                <Select.Item key={constellation.id} value={constellation.id}>
                  {constellation.name}
                </Select.Item>
              ))}
              {loadingConstellations && <Select.Item disabled value="loading">Cargando...</Select.Item>}
              {!loadingConstellations && (!constellationsData?.constellations || constellationsData.constellations.length === 0) && (
                <Select.Item disabled value="no-options">No hay constelaciones disponibles</Select.Item>
              )}
            </Select.Content>
          </Select.Root>
        </div>
        
        {(error || validationError) && (
          <Text color="red" size="2" className="mt-2">
            {error || validationError}
          </Text>
        )}

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Creando...' : 'Crear Servidor'}
        </Button>
      </form>
    </Card>
  );
}
