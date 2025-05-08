import { FormEvent, useEffect, useState } from 'react';

interface Constellation {
  id: string;
  name: string;
}

export default function CreateServer() {
  const [name, setName] = useState('');
  const [domain, setDomain] = useState('');
  const [constellationId, setConstellationId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [constellations, setConstellations] = useState<Constellation[]>([]);
  const [loading, setLoading] = useState(false);
  const [constellationLoading, setConstellationLoading] = useState(true);

  // Obtener las constelaciones al cargar el componente
  useEffect(() => {
    const fetchConstellations = async () => {
      try {
        setConstellationLoading(true);
        const response = await fetch('/api/constellations');
        
        if (!response.ok) {
          throw new Error('Error al obtener las constelaciones');
        }
        
        const data = await response.json();
        setConstellations(data);
      } catch (err) {
        console.error('Error al cargar constelaciones:', err);
      } finally {
        setConstellationLoading(false);
      }
    };

    fetchConstellations();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!name || !domain) {
      setError('El nombre y dominio son obligatorios');
      return;
    }
    
    try {
      setLoading(true);
      setError('');
      setMessage('');
      
      const response = await fetch('/api/servers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          domain,
          constellationId: constellationId || undefined,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Error al crear el servidor');
      }
      
      // Éxito
      setMessage(`Servidor "${data.name}" creado correctamente`);
      setName('');
      setDomain('');
      setConstellationId('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-md bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Crear nuevo servidor</h2>
      
      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
          {message}
        </div>
      )}
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Nombre del servidor"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">
            Dominio
          </label>
          <input
            type="text"
            id="domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="ejemplo.com"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="constellation" className="block text-sm font-medium text-gray-700 mb-1">
            Constelación
          </label>
          <select
            id="constellation"
            value={constellationId}
            onChange={(e) => setConstellationId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={constellationLoading}
          >
            <option value="">Selecciona una constelación (opcional)</option>
            {constellations.map((constellation) => (
              <option key={constellation.id} value={constellation.id}>
                {constellation.name}
              </option>
            ))}
          </select>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? 'Creando...' : 'Crear servidor'}
        </button>
      </form>
    </div>
  );
}