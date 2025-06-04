import React, { useState, useMemo } from 'react';
import { Box, TextField, Flex, Button, Text } from '@radix-ui/themes';

interface SearchFrontendProps<T> {
  data: T[];
  searchField?: keyof T & string;
  placeholder?: string;
  pageSize?: number;
  onChange: (filtered: T[], paginated: T[], page: number, totalPages: number) => void;
}

export function SearchFrontend<T>({
  data,
  searchField,
  placeholder = 'Buscar...',
  pageSize = 10,
  onChange,
}: SearchFrontendProps<T>) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (!searchField || !search) return data;
    return data.filter((item) => {
      const value = item[searchField];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(search.toLowerCase());
      }
      return false;
    });
  }, [data, search, searchField]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  React.useEffect(() => {
    setPage(1);
  }, [search]);

  React.useEffect(() => {
    onChange(filtered, paginated, page, totalPages);
    // eslint-disable-next-line
  }, [filtered, paginated, page, totalPages]);

  return (
    <Box>
      <Flex align="center" gap="2" className="mb-4">
        <TextField.Root
          placeholder={placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Text size="2" color="gray">
          {filtered.length} resultados
        </Text>
      </Flex>
      {totalPages > 1 && (
        <Flex gap="2" align="center" justify="center" className="mt-4">
          <Button size="1" onClick={() => setPage(page - 1)} disabled={page === 1}>
            Anterior
          </Button>
          <Text size="2">Página {page} de {totalPages}</Text>
          <Button size="1" onClick={() => setPage(page + 1)} disabled={page === totalPages}>
            Siguiente
          </Button>
        </Flex>
      )}
    </Box>
  );
}
