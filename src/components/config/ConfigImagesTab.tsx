import React from 'react';
import { Box, Button, Heading, Flex } from "@radix-ui/themes";
import SortableItem from '../dndkit/SortableItem';
import { DndProvider } from '../dndkit/DndProvider';
import SortableList from '../dndkit/SortableList';
import Image from 'next/image';

export default function ImagesTab({
  form,
  setForm,
  loadingImages,
  handleAddImageGlobal,
  handleDeleteImageGlobal,
}: any) {
  // Handler para drag & drop
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = form.images.findIndex((img: any, idx: number) => (img.id || `new-${idx}`) === active.id);
    const newIndex = form.images.findIndex((img: any, idx: number) => (img.id || `new-${idx}`) === over.id);
    if (oldIndex === -1 || newIndex === -1) return;
    const newImages = form.images.slice();
    const moved = newImages.splice(oldIndex, 1)[0];
    newImages.splice(newIndex, 0, moved);
    // Reasignar orden
    const reOrdered = newImages.map((img: any, idx: number) => ({ ...img, order: idx + 1 }));
    setForm((prev: any) => ({ ...prev, images: reOrdered }));
  };

  return (
    <Box className="p-4">
      <Heading size="5">Imágenes globales</Heading>
      <Box className="mt-4 space-y-2 border p-4 rounded-lg">
        <input
          type="file"
          accept="image/*"
          onChange={handleAddImageGlobal}
        />
      </Box>
      {loadingImages ? (
        <Box className="mt-4">Cargando imágenes...</Box>
      ) : (
        <DndProvider onDragEnd={handleDragEnd}>
          <SortableList
            items={form.images?.map((img: any, idx: number) => img.id || `new-${idx}`) || []}
            className="mt-4 space-y-2"
          >
            {form.images?.map((img: any, idx: number) => (
              <SortableItem
                key={img.id || `new-${idx}`}
                id={img.id || `new-${idx}`}
                className="border rounded-lg p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              >
                <Flex align="center" gap="3">
                  <Image
                    src={img.url}
                    alt={img.altText || 'Imagen'}
                    width={128}
                    height={64}
                    className="h-16 w-32 object-cover rounded"
                  />
                  <div className="text-xs text-gray-500 break-all">{img.altText}</div>
                </Flex>
                <Button type="button" color="red" size="1" onClick={() => handleDeleteImageGlobal(img.id)}>
                  Eliminar
                </Button>
              </SortableItem>
            ))}
          </SortableList>
        </DndProvider>
      )}
    </Box>
  );
}
