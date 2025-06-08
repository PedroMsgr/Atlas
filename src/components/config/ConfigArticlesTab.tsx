// Componente para gestionar y ordenar artículos de la configuración.
// Permite crear, editar, eliminar y reordenar artículos mediante drag & drop.

import React from "react";
import { Box, TextField, Heading, Flex } from "@radix-ui/themes";
import { Textarea } from "@/components/ui-shadcn/textarea";
import SortableItem from "../dndkit/SortableItem";
import { DndProvider } from "../dndkit/DndProvider";
import SortableList from "../dndkit/SortableList";
import { AtlasButton } from "../ui/AtlasButton";

export default function ConfigArticlesTab({
  form,
  setForm,
  articleForm,
  setArticleForm,
  editingArticleId,
  setEditingArticleId,
  loadArticleForEdit,
  handleAddArticle,
  handleEditArticle,
  handleDeleteArticle,
  loadingArticles,
}: any) {
  // Handler para drag & drop
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = form.articles.findIndex(
      (a: any, idx: number) => (a.id || `new-${idx}`) === active.id
    );
    const newIndex = form.articles.findIndex(
      (a: any, idx: number) => (a.id || `new-${idx}`) === over.id
    );
    if (oldIndex === -1 || newIndex === -1) return;
    const newArticles = form.articles.slice();
    const moved = newArticles.splice(oldIndex, 1)[0];
    newArticles.splice(newIndex, 0, moved);
    const reOrdered = newArticles.map((a: any, idx: number) => ({
      ...a,
      order: idx + 1,
    }));
    setForm((prev: any) => ({ ...prev, articles: reOrdered }));
  };

  return (
    <Box className="p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
      <Heading size="5" style={{ marginBottom: "1em" }}>
        Artículos
      </Heading>
      {/* Formulario para crear/editar artículo */}
      <Box className="mt-4 space-y-2 border p-4 rounded-lg">
        <Heading size="6">
          {editingArticleId ? "Editar artículo" : "Nuevo artículo"}
        </Heading>
        <TextField.Root
          name="title"
          placeholder="Título del artículo"
          value={articleForm.title}
          onChange={(e: any) =>
            setArticleForm({ ...articleForm, title: e.target.value })
          }
          required
        />
        <Textarea
          name="content"
          placeholder="Contenido del artículo"
          value={articleForm.content}
          onChange={(e: any) =>
            setArticleForm({ ...articleForm, content: e.target.value })
          }
          required
        />
        <TextField.Root
          name="url"
          placeholder="URL del artículo"
          value={articleForm.url}
          onChange={(e: any) =>
            setArticleForm({ ...articleForm, url: e.target.value })
          }
        />
        <TextField.Root
          name="publishedAt"
          type="date"
          value={articleForm.publishedAt}
          onChange={(e: any) =>
            setArticleForm({ ...articleForm, publishedAt: e.target.value })
          }
        />
        <Flex gap="2" className="mt-2">
          <AtlasButton
            variant="success"
            disabled={!articleForm.title || !articleForm.url}
            onClick={editingArticleId ? handleEditArticle : handleAddArticle}
          >
            {editingArticleId ? "Actualizar" : "Agregar"}
          </AtlasButton>
          {editingArticleId && (
            <AtlasButton
              variant="cancel"
              onClick={() => {
                setEditingArticleId(null);
                setArticleForm({
                  id: undefined,
                  title: "",
                  content: "",
                  url: "",
                  publishedAt: new Date().toISOString().split("T")[0],
                  order: undefined,
                });
              }}
            >
              Cancelar
            </AtlasButton>
          )}
        </Flex>
      </Box>
      {/* Listado de artículos con drag & drop */}
      {loadingArticles ? (
        <Box className="mt-4">Cargando artículos...</Box>
      ) : (
        <DndProvider onDragEnd={handleDragEnd}>
          <SortableList
            items={
              form.articles?.map(
                (a: any, idx: number) => a.id || `new-${idx}`
              ) || []
            }
            className="mt-4 space-y-2"
          >
            {form.articles?.map((art: any, idx: number) => (
              <SortableItem
                key={art.id || `new-${idx}`}
                id={art.id || `new-${idx}`}
                className="border rounded-lg p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              >
                <div>
                  <div className="font-semibold">{art.title}</div>
                  <div className="text-sm text-gray-600 line-clamp-2">
                    {art.content}
                  </div>
                  <div className="text-xs text-blue-700 break-all">
                    {art.url}
                  </div>
                  <div className="text-xs text-gray-500">{art.publishedAt}</div>
                </div>
                <Flex gap="2">
                  <AtlasButton
                    variant="update"
                    type="button"
                    onClick={() => loadArticleForEdit(art)}
                  >
                    Editar
                  </AtlasButton>
                  <AtlasButton
                    variant="delete"
                    type="button"
                    onClick={() => handleDeleteArticle(art.id)}
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
