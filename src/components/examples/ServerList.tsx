import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import { Button } from '@radix-ui/themes';
import { useState } from 'react';

const GET_SERVERS = gql`
  query GetServers {
    servers {
      id
      name
      domain
      requiresUpdate
      isActive
      constellation {
        name
      }
      updatedAt
    }
  }
`;

interface Constellation {
  name: string | null;
}

interface UnitServer {
  id: string;
  name: string;
  domain: string;
  requiresUpdate: boolean;
  isActive: boolean;
  constellation: Constellation | null;
  updatedAt: string;
}

export default function ServerList() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { data, loading, error, refetch } = useQuery<{ servers: UnitServer[] }>(GET_SERVERS, {
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });
  
  // Función para refrescar la lista
  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await refetch();
    } catch (error) {
      console.error('Error al refrescar servidores:', error);
    } finally {
      setIsRefreshing(false);
    }
  };
  
  if (loading && !data) return <p className="text-center py-4">Cargando servidores...</p>;
  if (error) return (
    <div className="text-center py-4">
      <p className="text-red-500 mb-2">Error al cargar servidores: {error.message}</p>
      <Button onClick={handleRefresh} color="blue">Reintentar</Button>
    </div>
  );
  
  const servers = data?.servers || [];
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Listado de servidores</h2>
        <Button 
          onClick={handleRefresh} 
          disabled={loading || isRefreshing}
          variant="outline"
        >
          {isRefreshing ? "Actualizando..." : "Actualizar lista"}
        </Button>
      </div>
      
      {servers.length === 0 ? (
        <div className="bg-white p-6 text-center rounded-lg shadow-sm">
          <p className="text-gray-500">No hay servidores disponibles.</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dominio</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Constelación</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actualización</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Última modificación</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {servers.map((server) => (
                <tr key={server.id} 
                  className="hover:bg-gray-50 transition duration-150"
                  onClick={() => window.location.href = `/admin/servers/server/${server.id}`}
                  style={{ cursor: 'pointer' }}
                >
                  <td className="py-4 px-4 whitespace-nowrap font-medium">
                    <Link href={`/admin/servers/server/${server.id}`} className="text-blue-600 hover:underline">
                      {server.name}
                    </Link>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap text-sm">{server.domain}</td>
                  <td className="py-4 px-4 whitespace-nowrap text-sm">{server.constellation?.name || '-'}</td>
                  <td className="py-4 px-4 whitespace-nowrap text-sm">
                    <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${server.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {server.isActive ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap text-sm">
                    <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${server.requiresUpdate ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                      {server.requiresUpdate ? 'Pendiente' : 'Actualizado'}
                    </span>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(server.updatedAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}