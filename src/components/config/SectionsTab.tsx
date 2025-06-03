import React from 'react';
import { Box, Button, TextField, Heading, Flex } from "@radix-ui/themes";
import { Textarea } from "@/components/ui/textarea";
import SortableItem from '../dndkit/SortableItem';
import { DndProvider } from '../dndkit/DndProvider';
import SortableList from '../dndkit/SortableList';

export default function SectionsTab({
  form,
  setForm,
  sectionForm,
  setSectionForm,
  editingSectionId,
  setEditingSectionId,
  currentSectionId,
  setCurrentSectionId,
  loadSectionForEdit,
  handleAddSection,
  handleEditSection,
  handleDeleteSection,
  handleAddImageSection,
  handleDeleteImageSection,
  uploadImage,
  loadingSections,
}: any) {
  // Handler para drag & drop
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = form.sections.findIndex((s: any, idx: number) => (s.id || `new-${idx}`) === active.id);
    const newIndex = form.sections.findIndex((s: any, idx: number) => (s.id || `new-${idx}`) === over.id);
    if (oldIndex === -1 || newIndex === -1) return;
    const newSections = form.sections.slice();
    const moved = newSections.splice(oldIndex, 1)[0];
    newSections.splice(newIndex, 0, moved);
    const reOrdered = newSections.map((s: any, idx: number) => ({ ...s, order: idx + 1 }));
    setForm((prev: any) => ({ ...prev, sections: reOrdered }));
  };

  return (
    <Box className="p-4">
      <Heading size="5">Secciones</Heading>
      {/* Formulario para crear/editar sección */}
      <Box className="mt-4 space-y-2 border p-4 rounded-lg">
        <Heading size="6">
          {editingSectionId ? "Editar sección" : "Nueva sección"}
        </Heading>
        <TextField.Root
          name="title"
          placeholder="Título de sección"
          value={sectionForm.title}
          onChange={(e: any) => setSectionForm({ ...sectionForm, title: e.target.value })}
          required
        />
        <Textarea
          name="body"
          placeholder="Contenido de sección"
          value={sectionForm.body}
          onChange={(e: any) => setSectionForm({ ...sectionForm, body: e.target.value })}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={async (e: any) => {
            const file = e.target.files?.[0];
            if (!file) return;
            const url = await uploadImage(file);
            setSectionForm((prev: any) => ({ ...prev, imageUrl: url }));
          }}
          className="mb-2"
        />
        {sectionForm.imageUrl && (
          <div className="flex items-center space-x-2">
            <img src={sectionForm.imageUrl} alt="Imagen sección" className="h-12 w-24 rounded" />
            <Button type="button" color="red" size="1" onClick={() => setSectionForm((prev: any) => ({ ...prev, imageUrl: "" }))}>Eliminar</Button>
          </div>
        )}
        <Flex gap="2" className="mt-2">
          <Button
            color="green"
            disabled={!sectionForm.title}
            onClick={editingSectionId ? handleEditSection : handleAddSection}
          >
            {editingSectionId ? "Actualizar" : "Agregar"}
          </Button>
          {editingSectionId && (
            <Button
              variant="soft"
              onClick={() => {
                setEditingSectionId(null);
                setSectionForm({
                  id: undefined,
                  title: "",
                  body: "",
                  imageUrl: "",
                });
              }}
            >
              Cancelar
            </Button>
          )}
        </Flex>
      </Box>
      {/* Listado de secciones con drag & drop */}
      {loadingSections ? (
        <Box className="mt-4">Cargando secciones...</Box>
      ) : (
        <DndProvider onDragEnd={handleDragEnd}>
          <SortableList
            items={form.sections?.map((s: any, idx: number) => s.id || `new-${idx}`) || []}
            className="mt-4 space-y-2"
          >
            {form.sections?.map((sec: any, idx: number) => (
              <SortableItem
                key={sec.id || `new-${idx}`}
                id={sec.id || `new-${idx}`}
                className="border rounded-lg p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              >
                <div>
                  <div className="font-semibold">{sec.title}</div>
                  <div className="text-sm text-gray-600">{sec.body}</div>
                  {sec.imageUrl && (
                    <img src={sec.imageUrl} alt="Imagen sección" className="h-10 w-20 rounded mt-1" />
                  )}
                </div>
                <Flex gap="2">
                  <Button type="button" size="1" onClick={() => loadSectionForEdit(sec)}>
                    Editar
                  </Button>
                  <Button type="button" color="red" size="1" onClick={() => handleDeleteSection(sec.id)}>
                    Eliminar
                  </Button>
                </Flex>
              </SortableItem>
            ))}
          </SortableList>
        </DndProvider>
      )}
      {/* Subida de imágenes inline para sección seleccionada */}
      {currentSectionId && (
        <Box className="mt-4 p-3 border rounded-lg bg-slate-50">
          <Heading size="6">Agregar imagen a esta sección</Heading>
          <input
            type="file"
            accept="image/*"
            onChange={handleAddImageSection}
            className="mt-2"
          />
          <Box className="mt-3 space-y-1">
            {form.sections
              ?.find((s: any) => s.id === currentSectionId)
              ?.images?.map((img: any) => (
                <Flex key={img.id} className="justify-between items-center">
                  <img
                    src={img.url}
                    alt={img.altText}
                    className="h-12 w-12 rounded"
                  />
                  <Button
                    variant="soft"
                    onClick={() => handleDeleteImageSection(img.id)}
                  >
                    X
                  </Button>
                </Flex>
              ))}
          </Box>
          <Button
            variant="soft"
            className="mt-4"
            onClick={() => setCurrentSectionId(null)}
          >
            Cerrar
          </Button>
        </Box>
      )}
    </Box>
  );
}
