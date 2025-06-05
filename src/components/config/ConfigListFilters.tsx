import React, { useState, useMemo } from "react";
import { Box, Flex, Select } from "@radix-ui/themes";
import { SearchFrontend } from "@/components/ui/SearchFrontend";
import { UnitConfigBase } from '@/types/config.types';

interface Configuration extends UnitConfigBase {
  updatedAt: string;
  servers: any[];
  [key: string]: any;
}

interface ConfigListFiltersProps {
  data: Configuration[];
  onChange: (filtered: Configuration[], paginated: Configuration[]) => void;
}

const ORDER_OPTIONS = [
  { value: "name-az", label: "Nombre A-Z" },
  { value: "name-za", label: "Nombre Z-A" },
  { value: "updated-desc", label: "Actualización más reciente" },
  { value: "updated-asc", label: "Actualización más antigua" },
];

export default function ConfigListFilters({ data, onChange }: ConfigListFiltersProps) {
  const [order, setOrder] = useState<string>("name-az");

  const processed = useMemo(() => {
    let result = data;
    switch (order) {
      case "name-az":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-za":
        result = [...result].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "updated-desc":
        result = [...result].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
        break;
      case "updated-asc":
        result = [...result].sort((a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime());
        break;
    }
    return result;
  }, [data, order]);

  return (
    <Box className="mb-4">
      <Flex gap="3" align="center" className="mb-2">
        <Select.Root value={order} onValueChange={setOrder} size="2">
          <Select.Trigger placeholder="Ordenar por" />
          <Select.Content>
            {ORDER_OPTIONS.map(opt => (
              <Select.Item key={opt.value} value={opt.value}>{opt.label}</Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </Flex>
      <SearchFrontend
        data={processed}
        searchField="name"
        placeholder="Buscar configuración..."
        onChange={onChange}
        pageSize={10}
      />
    </Box>
  );
}
