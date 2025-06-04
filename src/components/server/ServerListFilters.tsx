import React, { useState, useMemo } from "react";
import { Box, Flex, Select } from "@radix-ui/themes";
import { useQuery } from "@apollo/client";
import { GET_CONSTELLATIONS } from "@/graphql/queries/constellation.queries";
import { SearchFrontend } from "@/components/SearchFrontend";
import { UnitServerListItem } from '@/types/server.types';

interface ServerListFiltersProps {
  data: UnitServerListItem[];
  onChange: (filtered: UnitServerListItem[], paginated: UnitServerListItem[]) => void;
}

const ORDER_OPTIONS = [
  { value: "name-az", label: "Nombre A-Z" },
  { value: "name-za", label: "Nombre Z-A" },
  { value: "updated-desc", label: "Actualización más reciente" },
  { value: "updated-asc", label: "Actualización más antigua" },
];

export default function ServerListFilters({ data, onChange }: ServerListFiltersProps) {
  const [constellation, setConstellation] = useState<string>("all");
  const [order, setOrder] = useState<string>("name-az");

  const { data: constellationsData, loading: loadingConstellations } = useQuery(GET_CONSTELLATIONS);
  const constellations = constellationsData?.constellations || [];

  // Filtrado y ordenación
  const processed = useMemo(() => {
    let result = data;
    if (constellation !== "all") {
      result = result.filter(s => s.constellation && s.constellation.name === constellations.find((c: any) => c.id === constellation)?.name);
    }
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
  }, [data, constellation, order]);

  return (
    <Box className="mb-4">
      <Flex gap="3" align="center" className="mb-2">
        <Select.Root value={constellation} onValueChange={setConstellation} size="2">
          <Select.Trigger placeholder="Filtrar por constelación" />
          <Select.Content>
            <Select.Item value="all">Todas las constelaciones</Select.Item>
            {constellations.map((c: any) => (
              <Select.Item key={c.id} value={c.id}>{c.name}</Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
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
        placeholder="Buscar servidor..."
        onChange={onChange}
        pageSize={10}
      />
    </Box>
  );
}
