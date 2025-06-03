import React from 'react';
import { Box, Button, TextField, Heading, Flex } from "@radix-ui/themes";
import { Textarea } from "@/components/ui/textarea";
import SortableItem from '../dndkit/SortableItem';
import { DndProvider } from '../dndkit/DndProvider';
import SortableList from '../dndkit/SortableList';

export default function LegalStepsTab({
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
      const oldIndex = prev.findIndex((step: any, idx: number) => (step.id || `new-${idx}`) === active.id);
      const newIndex = prev.findIndex((step: any, idx: number) => (step.id || `new-${idx}`) === over.id);
      if (oldIndex === -1 || newIndex === -1) return prev;
      const newSteps = prev.slice();
      const moved = newSteps.splice(oldIndex, 1)[0];
      newSteps.splice(newIndex, 0, moved);
      return newSteps.map((step: any, idx: number) => ({ ...step, order: idx + 1 }));
    });
  };

  return (
    <Box className="p-4">
      <Heading size="5">Pasos legales</Heading>
      <Box className="mt-4 space-y-2 border p-4 rounded-lg">
        <Heading size="6">{editingLegalStepId ? "Editar paso legal" : "Nuevo paso legal"}</Heading>
        <TextField.Root
          name="title"
          placeholder="Título del paso"
          value={legalStepForm.title}
          onChange={e => setLegalStepForm((prev: any) => ({ ...prev, title: e.target.value }))}
          required
        />
        <Textarea
          name="description"
          placeholder="Contenido del paso (puede ser varios pasos o texto largo)"
          value={legalStepForm.description}
          onChange={e => setLegalStepForm((prev: any) => ({ ...prev, description: e.target.value }))}
          required
        />
        <Flex gap="2" className="mt-2">
          <Button color="green" 
            disabled={!legalStepForm.title}
            onClick={editingLegalStepId ? handleEditLegalStep : handleAddLegalStep}>
            {editingLegalStepId ? "Actualizar" : "Agregar"}
          </Button>
          {editingLegalStepId && (
            <Button variant="soft" onClick={() => { setEditingLegalStepId(null); setLegalStepForm({ id: undefined, title: '', description: '' }); }}>Cancelar</Button>
          )}
        </Flex>
      </Box>
      {/* Listado de pasos legales con drag & drop */}
      {loadingLegalSteps ? (
        <Box className="mt-4">Cargando pasos legales...</Box>
      ) : (
        <DndProvider onDragEnd={handleDragEnd}>
          <SortableList
            items={legalSteps?.map((step: any, idx: number) => step.id || `new-${idx}`) || []}
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
                  <div className="text-xs text-gray-500">{(step.description || '').slice(0, 30)}{(step.description || '').length > 30 ? '...' : ''}</div>
                </div>
                <Flex gap="2">
                  <Button type="button" size="1" onClick={() => loadLegalStepForEdit(step)}>
                    Editar
                  </Button>
                  <Button type="button" color="red" size="1" onClick={() => handleDeleteLegalStep(step.id)}>
                    Eliminar
                  </Button>
                </Flex>
              </SortableItem>
            ))}
          </SortableList>
        </DndProvider>
      )}
    </Box>
  );
}
