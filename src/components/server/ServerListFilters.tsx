import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Box, Flex, Select } from "@radix-ui/themes";
import { useQuery } from "@apollo/client";
import { GET_CONSTELLATIONS } from "@/graphql/queries/constellation.queries";
import { GET_ALL_CONFIGURATIONS } from "@/graphql/queries/config.queries";
import { SearchFrontend } from "@/components/ui/SearchFrontend";
import { UnitServerListItem } from "@/types/server.types";

interface ServerListFiltersProps {
  data: UnitServerListItem[];
  onChange: (paginated: UnitServerListItem[]) => void;
}

const ORDER_OPTIONS = [
  { value: "name-az", label: "Nombre A-Z" },
  { value: "name-za", label: "Nombre Z-A" },
];

export default function ServerListFilters({
  data,
  onChange,
}: ServerListFiltersProps) {
  const renderCount = useRef(0);
  renderCount.current++;
  console.log("[ServerListFilters] Render count:", renderCount.current);

  const [constellation, setConstellation] = useState<string>("all");
  const [config, setConfig] = useState<string>("all");
  const [order, setOrder] = useState<string>("name-az");

  // Cargar constelaciones y configuraciones
  const { data: constellationsData } = useQuery(GET_CONSTELLATIONS);
  const { data: configsData } = useQuery(GET_ALL_CONFIGURATIONS);
  const constellations = constellationsData?.constellations || [];
  const configs = configsData?.configurations || [];

  // Resetear filtros si el valor seleccionado ya no existe (versión robusta, sin bucles)
  useEffect(() => {
    console.log("[ServerListFilters] useEffect reset filtros", {
      constellation,
      config,
      constellations,
      configs,
    });
    if (
      constellation !== "all" &&
      !constellations.some((c: any) => c.id === constellation)
    ) {
      setConstellation("all");
    }
    if (config !== "all" && !configs.some((c: any) => c.id === config)) {
      setConfig("all");
    }
  }, [constellations, configs, constellation, config]);

  // Filtrado y ordenación
  const processed = useMemo(() => {
    console.log("[ServerListFilters] useMemo filtrado", {
      data,
      constellation,
      config,
      order,
      constellations,
    });
    let result = data;
    if (constellation !== "all") {
      result = result.filter(
        (s) =>
          s.constellation &&
          constellations.find((c: any) => c.id === constellation)?.name ===
            s.constellation.name
      );
    }
    if (config !== "all") {
      result = result.filter((s) => s.config && s.config.id === config);
    }
    switch (order) {
      case "name-az":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-za":
        result = [...result].sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
    return result;
  }, [data, constellation, config, order, constellations]);

  // Callback estable para SearchFrontend
  const stableOnChange = useCallback(
    (_filtered: UnitServerListItem[], paginated: UnitServerListItem[]) =>
      onChange(paginated),
    [onChange]
  );

  // Si los datos de selects no están listos, no renderizar los Selects
  if (!constellations.length || !configs.length) {
    return (
      <Box className="mb-4">
        <span>Cargando filtros...</span>
      </Box>
    );
  }

  return (
    <Box className="mb-4">
      <Flex gap="3" align="center" className="mb-2">
        <Select.Root
          value={constellation}
          onValueChange={setConstellation}
          size="2"
        >
          <Select.Trigger placeholder="Filtrar por constelación" />
          <Select.Content>
            <Select.Item value="all">Todas las constelaciones</Select.Item>
            {constellations.map((c: any) => (
              <Select.Item key={c.id} value={c.id}>
                {c.name}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
        <Select.Root value={config} onValueChange={setConfig} size="2">
          <Select.Trigger placeholder="Filtrar por configuración" />
          <Select.Content>
            <Select.Item value="all">Todas las configuraciones</Select.Item>
            {configs.map((c: any) => (
              <Select.Item key={c.id} value={c.id}>
                {c.name}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
        <Select.Root value={order} onValueChange={setOrder} size="2">
          <Select.Trigger placeholder="Ordenar por" />
          <Select.Content>
            {ORDER_OPTIONS.map((opt) => (
              <Select.Item key={opt.value} value={opt.value}>
                {opt.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </Flex>
      <SearchFrontend
        data={processed}
        searchField="name"
        placeholder="Buscar servidor..."
        onChange={stableOnChange}
        pageSize={10}
      />
    </Box>
  );
}
