import { useState, useEffect } from 'react';
import { Box, TextField, Select, Button, Flex } from '@radix-ui/themes';

const CASE_STATUS = [
  { value: 'all', label: 'Todos' },
  { value: 'open', label: 'Abierto' },
  { value: 'inProgress', label: 'En progreso' },
  { value: 'pending', label: 'Pendiente' },
  { value: 'closed', label: 'Cerrado' },
];

interface CaseSearchBackendProps {
  filters: { search: string; status: string };
  onChange: (filters: { search: string; status: string }) => void;
  onManualSearch?: () => void;
}

export default function CaseSearchBackend({ filters, onChange, onManualSearch }: CaseSearchBackendProps) {
  const [search, setSearch] = useState(filters.search);
  const [status, setStatus] = useState(filters.status);

  // Retraso para búsqueda backend
  useEffect(() => {
    const handler = setTimeout(() => {
      onChange({ search, status });
    }, 1000); 
    return () => clearTimeout(handler);
  }, [search, status]);

  return (
    <Flex gap="3" mb="4" align="end">
      <TextField.Root
        placeholder="Buscar por nombre o email..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        autoFocus
        style={{ minWidth: 220 }}
      />
      <Select.Root value={status} onValueChange={setStatus}>
        <Select.Trigger style={{ minWidth: 180 }} />
        <Select.Content>
          {CASE_STATUS.map((s) => (
            <Select.Item key={s.value} value={s.value}>{s.label}</Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      {onManualSearch && (
        <Button onClick={onManualSearch}>Buscar</Button>
      )}
    </Flex>
  );
}
