// Componente para gestionar y ordenar secciones de la configuración.
// Permite crear, editar, eliminar y reordenar secciones, así como asociar imágenes a cada sección.

import React, { useState } from "react";
import { Box, TextField, Heading, Flex } from "@radix-ui/themes";
import { Textarea } from "@/components/ui-shadcn/textarea";
import SortableItem from "../dndkit/SortableItem";
import { DndProvider } from "../dndkit/DndProvider";
import SortableList from "../dndkit/SortableList";
import Image from "next/image";
import { AtlasButton } from "../ui/AtlasButton";

export default function ConfigSectionsTab({
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
  loadingSections,
  sectionImageFile,
  sectionImagePreview,
  handleFileSelectSection,
  handleRemoveImageSection,
}: any) {
  // Handler para drag & drop
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = form.sections.findIndex(
      (s: any, idx: number) => (s.id || `new-${idx}`) === active.id
    );
    const newIndex = form.sections.findIndex(
      (s: any, idx: number) => (s.id || `new-${idx}`) === over.id
    );
    if (oldIndex === -1 || newIndex === -1) return;
    const newSections = form.sections.slice();
    const moved = newSections.splice(oldIndex, 1)[0];
    newSections.splice(newIndex, 0, moved);
    const reOrdered = newSections.map((s: any, idx: number) => ({
      ...s,
      order: idx + 1,
    }));
    setForm((prev: any) => ({ ...prev, sections: reOrdered }));
  };

  return (
    <Box className="p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
      <Heading size="5" style={{ marginBottom: "1em" }}>
        Secciones
      </Heading>
      {/* Formulario para crear/editar sección */}
      <Box className="mt-4 space-y-2 border p-4 rounded-lg">
        <Heading size="6">
          {editingSectionId ? "Editar sección" : "Nueva sección"}
        </Heading>
        <TextField.Root
          name="title"
          placeholder="Título de sección"
          value={sectionForm.title}
          onChange={(e: any) =>
            setSectionForm({ ...sectionForm, title: e.target.value })
          }
          required
        />
        <Textarea
          name="body"
          placeholder="Contenido de sección"
          value={sectionForm.body}
          onChange={(e: any) =>
            setSectionForm({ ...sectionForm, body: e.target.value })
          }
          required
        />
        <input
          id="section-image-upload"
          type="file"
          accept="image/*"
          onChange={handleFileSelectSection}
          className="hidden"
        />
        <label htmlFor="section-image-upload">
          <AtlasButton
            asChild
            type="button"
            variant="upload"
            className="mb-2 cursor-pointer"
          >
            <span>Subir imagen</span>
          </AtlasButton>
        </label>
        {(sectionImagePreview || sectionImageFile) && sectionImagePreview && (
          <Flex align="center" gap="2">
            <img
              src={sectionImagePreview}
              alt="Section preview"
              className="h-12 w-24 rounded"
            />
            <span className="text-sm break-all">
              {sectionImageFile ? sectionImageFile.name : ""}
            </span>
            <AtlasButton
              type="button"
              variant="delete"
              onClick={handleRemoveImageSection}
            >
              Eliminar
            </AtlasButton>
          </Flex>
        )}
        {/* Mostrar imagen guardada si no hay preview ni archivo */}
        {!sectionImagePreview && !sectionImageFile && sectionForm.imageUrl && (
          <Flex align="center" gap="2">
            <img
              src={sectionForm.imageUrl}
              alt="Imagen guardada"
              className="h-12 w-24 rounded"
            />
            <span className="text-xs text-gray-500">Imagen guardada</span>
            <AtlasButton
              type="button"
              variant="delete"
              onClick={handleRemoveImageSection}
            >
              Eliminar
            </AtlasButton>
          </Flex>
        )}
        <Flex gap="2" className="mt-2">
          <AtlasButton
            variant="success"
            disabled={!sectionForm.title}
            onClick={editingSectionId ? handleEditSection : handleAddSection}
          >
            {editingSectionId ? "Actualizar" : "Agregar"}
          </AtlasButton>
          {editingSectionId && (
            <AtlasButton
              variant="cancel"
              onClick={() => {
                setEditingSectionId(null);
                setSectionForm({
                  id: undefined,
                  title: "",
                  body: "",
                  imageUrl: "",
                  order: undefined,
                });
              }}
            >
              Cancelar
            </AtlasButton>
          )}
        </Flex>
      </Box>
      {/* Listado de secciones con drag & drop */}
      {loadingSections ? (
        <Box className="mt-4">Cargando secciones...</Box>
      ) : (
        <DndProvider onDragEnd={handleDragEnd}>
          <SortableList
            items={
              form.sections?.map(
                (s: any, idx: number) => s.id || `new-${idx}`
              ) || []
            }
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
                    <Image
                      src={sec.imageUrl}
                      alt="Imagen sección"
                      width={80}
                      height={40}
                      className="h-10 w-20 rounded mt-1"
                    />
                  )}
                </div>
                <Flex gap="2">
                  <AtlasButton
                    type="button"
                    variant="update"
                    onClick={() => loadSectionForEdit(sec)}
                  >
                    Editar
                  </AtlasButton>
                  <AtlasButton
                    type="button"
                    variant="delete"
                    onClick={() => handleDeleteSection(sec.id)}
                  >
                    Eliminar
                  </AtlasButton>
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
                  <Image
                    src={img.url}
                    alt={img.altText}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded"
                  />
                  <AtlasButton
                    variant="cancel"
                    onClick={() => handleDeleteImageSection(img.id)}
                  >
                    X
                  </AtlasButton>
                </Flex>
              ))}
          </Box>
          <AtlasButton
            variant="cancel"
            className="mt-4"
            onClick={() => setCurrentSectionId(null)}
          >
            Cerrar
          </AtlasButton>
        </Box>
      )}
    </Box>
  );
}
