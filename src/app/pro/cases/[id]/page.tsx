// Página de detalle de caso para profesionales.
// Permite ver y editar el estado y tags del caso, mostrando feedback de carga y error.

"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CASE } from "@/graphql/queries/case.queries";
import { UPDATE_CASE } from "@/graphql/mutations/case.mutations";
import {
  Box,
  Card,
  Heading,
  Flex,
  Text,
  Select,
  Badge,
  Spinner,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { AtlasButton } from "@/components/ui/AtlasButton";

const CASE_STATUS = [
  { value: "open", label: "Abierto", color: "blue" },
  { value: "inProgress", label: "En progreso", color: "orange" },
  { value: "pending", label: "Pendiente", color: "yellow" },
  { value: "closed", label: "Cerrado", color: "gray" },
];

export default function ProCaseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const caseId = Array.isArray(params.id) ? params.id[0] : params.id;
  const { data, loading, error, refetch } = useQuery(GET_CASE, {
    variables: { id: caseId },
    fetchPolicy: "cache-and-network",
  });
  const [updateCase, { loading: updating }] = useMutation(UPDATE_CASE, {
    onCompleted: () => refetch(),
  });
  const c = data?.case;
  const [status, setStatus] = useState<string | undefined>(undefined);
  const [tags, setTags] = useState<string[]>(c?.tags || []);
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    if (c?.tags) setTags(c.tags);
  }, [c?.tags]);

  if (loading) {
    return (
      <Flex align="center" justify="center" className="min-h-screen">
        <Spinner />
      </Flex>
    );
  }
  if (error || !c) {
    return (
      <Flex align="center" justify="center" className="min-h-screen">
        <Text color="red">No se pudo cargar el caso.</Text>
      </Flex>
    );
  }

  const currentStatus = status || c.status;
  const statusObj =
    CASE_STATUS.find((s) => s.value === currentStatus) || CASE_STATUS[0];

  // Añadir tag
  const handleAddTag = () => {
    const newTag = tagInput.trim();
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
    setTagInput("");
  };
  // Eliminar tag
  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };
  // Añadir con Enter
  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <main className="min-h-screen">
      <Box className="p-8 max-w-xl mx-auto">
        <Card>
          <Heading size="5" mb="4">
            Detalle del Caso
          </Heading>
          <Flex direction="column" gap="4" p="2">
            <Flex gap="2" align="center" wrap="wrap">
              <Text weight="bold">Estado:</Text>
              <Badge color={statusObj.color as any}>{statusObj.label}</Badge>
              <Select.Root
                value={currentStatus}
                onValueChange={(val) => setStatus(val)}
                disabled={updating}
              >
                <Select.Trigger style={{ minWidth: 120 }} />
                <Select.Content>
                  {CASE_STATUS.map((s) => (
                    <Select.Item key={s.value} value={s.value}>
                      {s.label}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Flex>
            <Flex gap="2" align="center" wrap="wrap">
              <Text weight="bold">Tags:</Text>
              <Flex gap="1" align="center" wrap="wrap">
                {tags.length === 0 && <Text color="gray">Sin tags</Text>}
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    color="gray"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      marginRight: 4,
                    }}
                  >
                    {tag}
                    <button
                      type="button"
                      aria-label={`Eliminar tag ${tag}`}
                      style={{
                        marginLeft: 4,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#888",
                      }}
                      onClick={() => handleRemoveTag(tag)}
                      disabled={updating}
                    >
                      ×
                    </button>
                  </Badge>
                ))}
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagInputKeyDown}
                  placeholder="Agregar tag"
                  style={{
                    minWidth: 80,
                    border: "1px solid #ddd",
                    borderRadius: 6,
                    padding: "4px 8px",
                  }}
                  disabled={updating}
                />
                <AtlasButton
                  variant="success"
                  style={{ padding: "0 8px" }}
                  onClick={handleAddTag}
                  disabled={updating || !tagInput.trim()}
                >
                  +
                </AtlasButton>
              </Flex>
            </Flex>
            <AtlasButton
              variant="success"
              disabled={
                updating ||
                (currentStatus === c.status &&
                  JSON.stringify(tags) === JSON.stringify(c.tags))
              }
              onClick={() =>
                updateCase({
                  variables: {
                    id: c.id,
                    data: { status: currentStatus, tags },
                  },
                })
              }
            >
              Guardar
            </AtlasButton>
            <Text>
              <b>Cliente:</b> {c.client?.user?.firstName}{" "}
              {c.client?.user?.lastName} ({c.client?.user?.email})
            </Text>
            <Text>
              <b>Servidor:</b> {c.server?.name}
            </Text>
            <Text>
              <b>Creado:</b> {new Date(c.createdAt).toLocaleString()}
            </Text>
            <Text>
              <b>Última actualización:</b>{" "}
              {new Date(c.updatedAt).toLocaleString()}
            </Text>
            <AtlasButton variant="back" onClick={() => router.back()}>
              Volver
            </AtlasButton>
          </Flex>
        </Card>
      </Box>
    </main>
  );
}
