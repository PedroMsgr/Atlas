import React from 'react';
import { Box, Button, TextField, Heading, Flex } from "@radix-ui/themes";
import SortableItem from '../dndkit/SortableItem';
import { DndProvider } from '../dndkit/DndProvider';
import SortableList from '../dndkit/SortableList';

export default function ConfigFooterLinksTab({
  footerLinks,
  setFooterLinks,
  footerLinkForm,
  setFooterLinkForm,
  editingFooterLinkId,
  setEditingFooterLinkId,
  loadFooterLinkForEdit,
  handleAddFooterLink,
  handleEditFooterLink,
  handleDeleteFooterLink,
  loadingFooterLinks,
}: any) {
  // Handler para drag & drop
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setFooterLinks((prev: any[]) => {
      const oldIndex = prev.findIndex((link: any, idx: number) => (link.id || `new-${idx}`) === active.id);
      const newIndex = prev.findIndex((link: any, idx: number) => (link.id || `new-${idx}`) === over.id);
      if (oldIndex === -1 || newIndex === -1) return prev;
      const newLinks = prev.slice();
      const moved = newLinks.splice(oldIndex, 1)[0];
      newLinks.splice(newIndex, 0, moved);
      return newLinks.map((link: any, idx: number) => ({ ...link, order: idx + 1 }));
    });
  };

  return (
    <Box className="p-4">
      <Heading size="5">Enlaces de pie de página</Heading>
      <Box className="mt-4 space-y-2 border p-4 rounded-lg">
        <Heading size="6">{editingFooterLinkId ? "Editar enlace" : "Nuevo enlace"}</Heading>
        <TextField.Root
          name="label"
          placeholder="Texto del enlace"
          value={footerLinkForm.label}
          onChange={e => setFooterLinkForm((prev: any) => ({ ...prev, label: e.target.value }))}
          required
        />
        <TextField.Root
          name="url"
          placeholder="URL del enlace"
          value={footerLinkForm.url}
          onChange={e => setFooterLinkForm((prev: any) => ({ ...prev, url: e.target.value }))}
          required
        />
        <Flex gap="2" className="mt-2">
          <Button color="green" 
            disabled={!footerLinkForm.label || !footerLinkForm.url}
            onClick={editingFooterLinkId ? handleEditFooterLink : handleAddFooterLink}>
            {editingFooterLinkId ? "Actualizar" : "Agregar"}
          </Button>
          {editingFooterLinkId && (
            <Button variant="soft" onClick={() => { setEditingFooterLinkId(null); setFooterLinkForm({ id: undefined, label: '', url: '' }); }}>Cancelar</Button>
          )}
        </Flex>
      </Box>
      {/* Listado de enlaces con drag & drop */}
      {loadingFooterLinks ? (
        <Box className="mt-4">Cargando enlaces...</Box>
      ) : (
        <DndProvider onDragEnd={handleDragEnd}>
          <SortableList
            items={footerLinks?.map((link: any, idx: number) => link.id || `new-${idx}`) || []}
            className="mt-4 space-y-2"
          >
            {footerLinks?.map((link: any, idx: number) => (
              <SortableItem
                key={link.id || `new-${idx}`}
                id={link.id || `new-${idx}`}
                className="border rounded-lg p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              >
                <div className="flex-1">
                  <div className="font-semibold">{link.label}</div>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-700 break-all"
                  >
                    {link.url}
                  </a>
                </div>
                <Flex gap="2">
                  <Button type="button" size="1" onClick={() => loadFooterLinkForEdit(link)}>
                    Editar
                  </Button>
                  <Button type="button" color="red" size="1" onClick={() => handleDeleteFooterLink(link.id)}>
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
