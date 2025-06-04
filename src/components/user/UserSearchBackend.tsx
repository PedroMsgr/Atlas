import { useState, useEffect } from 'react';
import { TextField, Button, Flex } from '@radix-ui/themes';

interface UserSearchBackendProps {
  search: string;
  onChange: (search: string) => void;
  onManualSearch?: () => void;
  autoFocus?: boolean;
}

export default function UserSearchBackend({ search: initialSearch, onChange, onManualSearch, autoFocus }: UserSearchBackendProps) {
  const [search, setSearch] = useState(initialSearch);

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(search);
    }, 700);
    return () => clearTimeout(handler);
  }, [search]);

  return (
    <Flex gap="3" mb="4" align="end">
      <TextField.Root
        placeholder="Buscar por nombre o email..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        autoFocus={autoFocus}
        style={{ minWidth: 220 }}
      />
      {onManualSearch && (
        <Button onClick={onManualSearch}>Buscar</Button>
      )}
    </Flex>
  );
}
