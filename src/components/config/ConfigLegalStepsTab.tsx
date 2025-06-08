// Componente para gestionar y ordenar pasos legales de la configuración.
// Permite crear, editar, eliminar y reordenar pasos mediante drag & drop.

import React from "react";
import { Box, TextField, Heading, Flex } from "@radix-ui/themes";
import { Textarea } from "@/components/ui-shadcn/textarea";
import SortableItem from "../dndkit/SortableItem";
import { DndProvider } from "../dndkit/DndProvider";
import SortableList from "../dndkit/SortableList";
import { AtlasButton } from "../ui/AtlasButton";

export default function ConfigLegalStepsTab({
  legalSteps,
  setLegalSteps,
  legalStepForm,
  setLegalStepForm,
  editingLegalStepId,
  setEditingLegalStepId,
  loadLegalStepForEdit,
  handleAddLegalStep,
  handleEditLegalStep,
  handleDeleteLegalStep,
  loadingLegalSteps,
}: any) {
  // Handler para drag & drop
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setLegalSteps((prev: any[]) => {
      const oldIndex = prev.findIndex(
        (step: any, idx: number) => (step.id || `new-${idx}`) === active.id
      );
      const newIndex = prev.findIndex(
        (step: any, idx: number) => (step.id || `new-${idx}`) === over.id
      );
      if (oldIndex === -1 || newIndex === -1) return prev;
      const newSteps = prev.slice();
      const moved = newSteps.splice(oldIndex, 1)[0];
      newSteps.splice(newIndex, 0, moved);
      return newSteps.map((step: any, idx: number) => ({
        ...step,
        order: idx + 1,
      }));
    });
  };

  return (
    <Box className="p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
      <Heading size="5" style={{ marginBottom: "1em" }}>
        Pasos legales
      </Heading>
      <Box className="mt-4 space-y-2 border p-4 rounded-lg">
        <Heading size="6">
          {editingLegalStepId ? "Editar paso legal" : "Nuevo paso legal"}
        </Heading>
        <TextField.Root
          name="title"
          placeholder="Título del paso"
          value={legalStepForm.title}
          onChange={(e) =>
            setLegalStepForm((prev: any) => ({
              ...prev,
              title: e.target.value,
            }))
          }
          required
        />
        <Textarea
          name="description"
          placeholder="Contenido del paso (puede ser varios pasos o texto largo)"
          value={legalStepForm.description}
          onChange={(e) =>
            setLegalStepForm((prev: any) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          required
        />
        <Flex gap="2" className="mt-2">
          <AtlasButton
            variant="success"
            disabled={!legalStepForm.title}
            onClick={
              editingLegalStepId ? handleEditLegalStep : handleAddLegalStep
            }
          >
            {editingLegalStepId ? "Actualizar" : "Agregar"}
          </AtlasButton>
          {editingLegalStepId && (
            <AtlasButton
              variant="cancel"
              onClick={() => {
                setEditingLegalStepId(null);
                setLegalStepForm({ id: undefined, title: "", description: "" });
              }}
            >
              Cancelar
            </AtlasButton>
          )}
        </Flex>
      </Box>
      {/* Listado de pasos legales con drag & drop */}
      {loadingLegalSteps ? (
        <Box className="mt-4">Cargando pasos legales...</Box>
      ) : (
        <DndProvider onDragEnd={handleDragEnd}>
          <SortableList
            items={
              legalSteps?.map(
                (step: any, idx: number) => step.id || `new-${idx}`
              ) || []
            }
            className="mt-4 space-y-2"
          >
            {legalSteps?.map((step: any, idx: number) => (
              <SortableItem
                key={step.id || `new-${idx}`}
                id={step.id || `new-${idx}`}
                className="border rounded-lg p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              >
                <div className="flex-1">
                  <div className="font-semibold">{step.title}</div>
                  <div className="text-xs text-gray-500">
                    {(step.description || "").slice(0, 30)}
                    {(step.description || "").length > 30 ? "..." : ""}
                  </div>
                </div>
                <Flex gap="2">
                  <AtlasButton
                    type="button"
                    variant="update"
                    onClick={() => loadLegalStepForEdit(step)}
                  >
                    Editar
                  </AtlasButton>
                  <AtlasButton
                    type="button"
                    variant="delete"
                    onClick={() => handleDeleteLegalStep(step.id)}
                  >
                    Eliminar
                  </AtlasButton>
                </Flex>
              </SortableItem>
            ))}
          </SortableList>
        </DndProvider>
      )}
    </Box>
  );
}
