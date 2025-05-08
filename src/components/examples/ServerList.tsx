import { useEffect, useState } from 'react';

interface Constellation {
  name: string | null;
}

interface UnitServer {
  id: string;
  name: string;
  domain: string;
  requiresUpdate: boolean;
  constellation: Constellation | null;
}

export default function ServerList() {
  const [servers, setServers] = useState<UnitServer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServers = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/servers');
        
        if (!response.ok) {
          throw new Error('Error al obtener los servidores');
        }
        
        const data = await response.json();
        setServers(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchServers();
  }, []);
  
  if (loading) return <p className="text-center py-4">Cargando servidores...</p>;
  if (error) return <p className="text-center py-4 text-red-500">Error: {error}</p>;
  
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Listado de servidores</h2>
      
      {servers.length === 0 ? (
        <p>No hay servidores disponibles.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Nombre</th>
                <th className="py-2 px-4 border-b text-left">Dominio</th>
                <th className="py-2 px-4 border-b text-left">Constelación</th>
                <th className="py-2 px-4 border-b text-left">Estado</th>
              </tr>
            </thead>
            <tbody>
              {servers.map((server) => (
                <tr key={server.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{server.name}</td>
                  <td className="py-2 px-4 border-b">{server.domain}</td>
                  <td className="py-2 px-4 border-b">{server.constellation?.name || '-'}</td>
                  <td className="py-2 px-4 border-b">
                    <span className={`inline-block rounded-full px-3 py-1 text-sm ${server.requiresUpdate ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                      {server.requiresUpdate ? 'Actualización pendiente' : 'Actualizado'}
                    </span>
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