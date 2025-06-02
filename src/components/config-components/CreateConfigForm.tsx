"use client";
// src/components/config-components/CreateConfigForm.tsx

import { useState, useEffect } from "react";
import { Box, Button, TextField, Heading, Flex, Tabs } from "@radix-ui/themes";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import {
  CREATE_CONFIG,
  UPDATE_CONFIG,
} from "@/graphql-client/mutations/config.mutations";
import { GET_SECTIONS_BY_CONFIG } from "@/graphql-client/queries/section.querys";
import {
  CREATE_SECTION,
  UPDATE_SECTION,
  DELETE_SECTION,
} from "@/graphql-client/mutations/section.mutations";
import { GET_ARTICLES_BY_CONFIG } from "@/graphql-client/queries/article.querys";
import {
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
} from "@/graphql-client/mutations/article.mutations";
import { GET_IMAGES_BY_CONFIG } from "@/graphql-client/queries/image.querys";
import {
  CREATE_IMAGE,
  UPDATE_IMAGE,
  DELETE_IMAGE,
} from "@/graphql-client/mutations/image.mutations";
import { UnitConfigWithRelations } from "@/types/config.types";
import { uploadImage } from "@/lib/uploadImage";

interface CreateConfigFormProps {
  config?: Partial<UnitConfigWithRelations>;
  onSuccess?: () => void;
}

export default function CreateConfigForm({
  config,
  onSuccess,
}: CreateConfigFormProps) {
  const [tab, setTab] = useState("general");
  const [form, setForm] = useState<any>({
    id: "",
    name: "",
    pageTitle: "",
    pageType: "landing",
    footerInfo: "",
    legalStepsCount: 5,
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    ogImage: "",
    iconUrl: "",
    bannerUrl: "",
    sections: [] as any[],
    articles: [] as any[],
    images: [] as any[],
    ...config,
  });
  const router = useRouter();
  const [createConfig, { loading: creating, error: createError }] =
    useMutation(CREATE_CONFIG);
  const [updateConfig, { loading: updating, error: updateError }] =
    useMutation(UPDATE_CONFIG);

  // SECCIONES
  const {
    data: dataSections,
    loading: loadingSections,
    refetch: refetchSections,
  } = useQuery(GET_SECTIONS_BY_CONFIG, {
    variables: { configId: form.id },
    skip: !form.id,
  });
  const [createSection] = useMutation(CREATE_SECTION);
  const [updateSection] = useMutation(UPDATE_SECTION);
  const [deleteSection] = useMutation(DELETE_SECTION);

  // ARTÍCULOS
  const {
    data: dataArticles,
    loading: loadingArticles,
    refetch: refetchArticles,
  } = useQuery(GET_ARTICLES_BY_CONFIG, {
    variables: { configId: form.id },
    skip: !form.id,
  });
  const [createArticle] = useMutation(CREATE_ARTICLE);
  const [updateArticle] = useMutation(UPDATE_ARTICLE);
  const [deleteArticle] = useMutation(DELETE_ARTICLE);

  // IMÁGENES
  const {
    data: dataImages,
    loading: loadingImages,
    refetch: refetchImages,
  } = useQuery(GET_IMAGES_BY_CONFIG, {
    variables: { configId: form.id },
    skip: !form.id,
  });
  const [createImage] = useMutation(CREATE_IMAGE);
  const [updateImage] = useMutation(UPDATE_IMAGE);
  const [deleteImage] = useMutation(DELETE_IMAGE);

  // Formulario local de sección
  const [sectionForm, setSectionForm] = useState<{
    id?: string;
    title: string;
    content: string;
    order: number;
    type: string;
  }>({
    title: "",
    content: "",
    order: 1,
    type: "text",
  });
  const [editingSectionId, setEditingSectionId] = useState<string | null>(null);

  // Formulario local de artículo
  const [articleForm, setArticleForm] = useState<{
    id?: string;
    title: string;
    content: string;
    url: string;
    publishedAt: string;
  }>({
    title: "",
    content: "",
    url: "",
    publishedAt: new Date().toISOString().split("T")[0],
  });
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);

  // Sección actual para imágenes “inline”
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);

  // Inicializar estado si recibimos `config` (edición)
  useEffect(() => {
    if (config) {
      setForm((prev: any) => ({ ...prev, ...config }));
    }
  }, [config]);

  // Sincronizar secciones/ artículos/ imágenes al estado general
  useEffect(() => {
    if (dataSections?.sectionsByConfig) {
      setForm((prev: any) => ({
        ...prev,
        sections: dataSections.sectionsByConfig,
      }));
    }
  }, [dataSections]);
  useEffect(() => {
    if (dataArticles?.articlesByConfig) {
      setForm((prev: any) => ({
        ...prev,
        articles: dataArticles.articlesByConfig,
      }));
    }
  }, [dataArticles]);
  useEffect(() => {
    if (dataImages?.imagesByConfig) {
      setForm((prev: any) => ({
        ...prev,
        images: dataImages.imagesByConfig,
      }));
    }
  }, [dataImages]);

  /** Manejo de inputs generales **/

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /** Subida de archivos a Firebase para icono/banner/ogImage **/

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "iconUrl" | "bannerUrl" | "ogImage"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const downloadURL = await uploadImage(file);
      setForm({ ...form, [field]: downloadURL });
    } catch (err) {
      console.error("Error subiendo imagen a Firebase:", err);
    }
  };

  /** Creación / edición de la configuración **/

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.pageTitle.trim()) {
      alert("Debe completar al menos el nombre y título de la página.");
      return;
    }

    try {
      if (form.id) {
        // Edición
        await updateConfig({
          variables: {
            id: form.id,
            name: form.name,
            pageTitle: form.pageTitle,
            pageType: form.pageType,
            footerInfo: form.footerInfo,
            legalStepsCount: parseInt(form.legalStepsCount.toString(), 10),
            seoTitle: form.seoTitle,
            seoDescription: form.seoDescription,
            seoKeywords: form.seoKeywords,
            ogImage: form.ogImage,
            iconUrl: form.iconUrl,
            bannerUrl: form.bannerUrl,
          },
        });
        // Refrescar subentidades
        refetchSections();
        refetchArticles();
        refetchImages();
        if (onSuccess) onSuccess();
        else router.push("/admin/configs");
      } else {
        // Creación
        const { data } = await createConfig({
          variables: {
            name: form.name,
            pageTitle: form.pageTitle,
            pageType: form.pageType,
            footerInfo: form.footerInfo,
            legalStepsCount: parseInt(form.legalStepsCount.toString(), 10),
            seoTitle: form.seoTitle,
            seoDescription: form.seoDescription,
            seoKeywords: form.seoKeywords,
            ogImage: form.ogImage,
            iconUrl: form.iconUrl,
            bannerUrl: form.bannerUrl,
          },
        });
        // Redirijo a la ruta de edición, para permitir CRUD de secciones/artículos/imágenes
        const newId = data.createConfig.id;
        router.push(`/admin/configs/${newId}`);
      }
    } catch (err: any) {
      console.error("Error guardando configuración:", err);
    }
  };

  /** CRUD Secciones **/

  const loadSectionForEdit = (sec: any) => {
    setSectionForm({
      id: sec.id,
      title: sec.title,
      content: sec.content,
      order: sec.order,
      type: sec.type,
    });
    setEditingSectionId(sec.id);
  };

  const handleAddSection = async () => {
    if (!form.id) return;
    await createSection({
      variables: {
        data: {
          configId: form.id,
          title: sectionForm.title,
          content: sectionForm.content,
          order: sectionForm.order,
          type: sectionForm.type,
        },
      },
    });
    await refetchSections();
    setSectionForm({
      id: undefined,
      title: "",
      content: "",
      order: (form.sections?.length || 0) + 1,
      type: "text",
    });
    setEditingSectionId(null);
  };

  const handleEditSection = async () => {
    if (!sectionForm.id) return;
    await updateSection({
      variables: {
        id: sectionForm.id!,
        data: {
          configId: form.id,
          title: sectionForm.title,
          content: sectionForm.content,
          order: sectionForm.order,
          type: sectionForm.type,
        },
      },
    });
    await refetchSections();
    setSectionForm({
      id: undefined,
      title: "",
      content: "",
      order: (form.sections?.length || 0) + 1,
      type: "text",
    });
    setEditingSectionId(null);
  };

  const handleDeleteSection = async (sectionId: string) => {
    await deleteSection({ variables: { id: sectionId } });
    await refetchSections();
  };

  /** CRUD Artículos **/

  const loadArticleForEdit = (art: any) => {
    setArticleForm({
      id: art.id,
      title: art.title,
      content: art.content,
      url: art.url || "",
      publishedAt: art.publishedAt
        ? art.publishedAt.split("T")[0]
        : new Date().toISOString().split("T")[0],
    });
    setEditingArticleId(art.id);
  };

  const handleAddArticle = async () => {
    if (!form.id) return;
    await createArticle({
      variables: {
        data: {
          configId: form.id,
          title: articleForm.title,
          content: articleForm.content,
          url: articleForm.url,
          publishedAt: articleForm.publishedAt,
        },
      },
    });
    await refetchArticles();
    setArticleForm({
      id: undefined,
      title: "",
      content: "",
      url: "",
      publishedAt: new Date().toISOString().split("T")[0],
    });
    setEditingArticleId(null);
  };

  const handleEditArticle = async () => {
    if (!articleForm.id) return;
    await updateArticle({
      variables: {
        id: articleForm.id!,
        data: {
          configId: form.id,
          title: articleForm.title,
          content: articleForm.content,
          url: articleForm.url,
          publishedAt: articleForm.publishedAt,
        },
      },
    });
    await refetchArticles();
    setArticleForm({
      id: undefined,
      title: "",
      content: "",
      url: "",
      publishedAt: new Date().toISOString().split("T")[0],
    });
    setEditingArticleId(null);
  };

  const handleDeleteArticle = async (articleId: string) => {
    await deleteArticle({ variables: { id: articleId } });
    await refetchArticles();
  };

  /** CRUD Imágenes Globales **/

  const handleAddImageGlobal = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file || !form.id) return;
    const url = await uploadImage(file);
    await createImage({
      variables: {
        data: {
          configId: form.id,
          sectionId: null,
          url,
          altText: file.name,
          type: "global",
          order: (form.images?.length || 0) + 1,
        },
      },
    });
    await refetchImages();
  };

  const handleDeleteImageGlobal = async (imgId: string) => {
    await deleteImage({ variables: { id: imgId } });
    await refetchImages();
  };

  /** CRUD Imágenes por Sección **/

  const handleAddImageSection = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file || !currentSectionId || !form.id) return;
    const url = await uploadImage(file);
    await createImage({
      variables: {
        data: {
          configId: form.id,
          sectionId: currentSectionId,
          url,
          altText: file.name,
          type: "inline",
          order:
            (form.sections?.find((s: any) => s.id === currentSectionId)?.images
              ?.length || 0) + 1,
        },
      },
    });
    await refetchSections();
  };

  const handleDeleteImageSection = async (imgId: string) => {
    await deleteImage({ variables: { id: imgId } });
    await refetchSections();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs.Root value={tab} onValueChange={setTab} className="w-full">
        <Tabs.List className="flex space-x-2 border-b mb-4">
          <Tabs.Trigger
            value="general"
            className="px-3 py-1 border-b-2 border-transparent data-[state=active]:border-blue-600"
          >
            General & SEO
          </Tabs.Trigger>
          <Tabs.Trigger
            value="sections"
            className="px-3 py-1 border-b-2 border-transparent data-[state=active]:border-blue-600"
          >
            Secciones
          </Tabs.Trigger>
          <Tabs.Trigger
            value="articles"
            className="px-3 py-1 border-b-2 border-transparent data-[state=active]:border-blue-600"
          >
            Artículos
          </Tabs.Trigger>
          <Tabs.Trigger
            value="images"
            className="px-3 py-1 border-b-2 border-transparent data-[state=active]:border-blue-600"
          >
            Imágenes
          </Tabs.Trigger>
        </Tabs.List>

        {/* -------- PESTAÑA GENERAL & SEO -------- */}
        <Tabs.Content value="general">
          <Box className="space-y-4">
            <Heading size="5">Datos generales y SEO</Heading>
            <TextField.Root
              name="name"
              placeholder="Nombre único de la configuración"
              value={form.name}
              onChange={handleChange}
              required
            />
            <TextField.Root
              name="pageTitle"
              placeholder="Título que aparecerá en la landing"
              value={form.pageTitle}
              onChange={handleChange}
              required
            />
            <TextField.Root
              name="pageType"
              placeholder="Tipo de página (p. ej.: landing)"
              value={form.pageType}
              onChange={handleChange}
              required
            />
            <TextField.Root
              name="footerInfo"
              placeholder="Información de pie de página"
              value={form.footerInfo || ""}
              onChange={handleChange}
            />
            <TextField.Root
              name="legalStepsCount"
              placeholder="Número de pasos legales (ej.: 3)"
              value={form.legalStepsCount}
              onChange={handleChange}
              type="number"
              min={1}
              required
            />
            <TextField.Root
              name="seoTitle"
              placeholder="Título SEO (opcional)"
              value={form.seoTitle || ""}
              onChange={handleChange}
            />
            <TextField.Root
              name="seoDescription"
              placeholder="Descripción SEO (opcional)"
              value={form.seoDescription || ""}
              onChange={handleChange}
            />
            <TextField.Root
              name="seoKeywords"
              placeholder="Palabras clave SEO (separadas por comas)"
              value={form.seoKeywords || ""}
              onChange={handleChange}
            />

            <Box>
              <label className="block text-sm font-medium mb-1">
                Icono (favicon)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, "iconUrl")}
                className="mb-2"
              />
              {form.iconUrl && (
                <div className="flex items-center space-x-2">
                  <img
                    src={form.iconUrl}
                    alt="Icono actual"
                    className="h-8 w-8 rounded"
                  />
                  <span className="text-sm break-all">{form.iconUrl}</span>
                </div>
              )}
            </Box>

            <Box>
              <label className="block text-sm font-medium mb-1">
                Banner principal
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, "bannerUrl")}
                className="mb-2"
              />
              {form.bannerUrl && (
                <div className="flex items-center space-x-2">
                  <img
                    src={form.bannerUrl}
                    alt="Banner actual"
                    className="h-12 w-24 rounded"
                  />
                  <span className="text-sm break-all">{form.bannerUrl}</span>
                </div>
              )}
            </Box>
          </Box>
        </Tabs.Content>

        {/* -------- PESTAÑA SECCIONES -------- */}
        <Tabs.Content value="sections">
          <Box>
            <Heading size="5">Secciones</Heading>

            {/* Formulario interno para crear/editar sección */}
            <Box className="mt-4 space-y-2 border p-4 rounded-lg">
              <Heading size="6">
                {editingSectionId ? "Editar sección" : "Nueva sección"}
              </Heading>
              <TextField.Root
                name="title"
                placeholder="Título de sección"
                value={sectionForm.title}
                onChange={(e) =>
                  setSectionForm({ ...sectionForm, title: e.target.value })
                }
                required
              />
              <TextField.Root
                name="content"
                placeholder="Contenido de sección"
                value={sectionForm.content}
                onChange={(e) =>
                  setSectionForm({ ...sectionForm, content: e.target.value })
                }
                required
              />
              <TextField.Root
                name="order"
                placeholder="Orden"
                value={sectionForm.order}
                onChange={(e) =>
                  setSectionForm({
                    ...sectionForm,
                    order: parseInt(e.target.value, 10),
                  })
                }
                type="number"
                min={1}
                required
              />
              <TextField.Root
                name="type"
                placeholder="Tipo (text/legalGuide/ etc.)"
                value={sectionForm.type}
                onChange={(e) =>
                  setSectionForm({ ...sectionForm, type: e.target.value })
                }
                required
              />
              <Flex gap="2" className="mt-2">
                <Button
                  color="green"
                  onClick={
                    editingSectionId ? handleEditSection : handleAddSection
                  }
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
                        content: "",
                        order: (form.sections?.length || 0) + 1,
                        type: "text",
                      });
                    }}
                  >
                    Cancelar
                  </Button>
                )}
              </Flex>
            </Box>

            {/* Listado de secciones existentes */}
            {loadingSections ? (
              <Box className="mt-4">Cargando secciones...</Box>
            ) : (
              <Box className="mt-4 space-y-2">
                {(form.sections || []).map((sec: any) => (
                  <Box
                    key={sec.id}
                    className="border p-3 rounded-lg flex justify-between items-center"
                  >
                    <Box>
                      <Heading size="6">{sec.title}</Heading>
                      <p>
                        Orden: {sec.order} | Tipo: {sec.type}
                      </p>
                    </Box>
                    <Flex gap="2">
                      <Button
                        variant="soft"
                        onClick={() => loadSectionForEdit(sec)}
                      >
                        Editar
                      </Button>
                      <Button
                        color="red"
                        onClick={() => handleDeleteSection(sec.id)}
                      >
                        Eliminar
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => setCurrentSectionId(sec.id)}
                      >
                        Subir imagenes
                      </Button>
                    </Flex>
                  </Box>
                ))}
              </Box>
            )}

            {/* Subida de imágenes “inline” para la sección seleccionada */}
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
                      <Flex
                        key={img.id}
                        className="justify-between items-center"
                      >
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
        </Tabs.Content>

        {/* -------- PESTAÑA ARTÍCULOS -------- */}
        <Tabs.Content value="articles">
          <Box>
            <Heading size="5">Artículos Globales</Heading>

            {/* Formulario interno para crear/editar artículo */}
            <Box className="mt-4 space-y-2 border p-4 rounded-lg">
              <Heading size="6">
                {editingArticleId ? "Editar artículo" : "Nuevo artículo"}
              </Heading>
              <TextField.Root
                name="title"
                placeholder="Título del artículo"
                value={articleForm.title}
                onChange={(e) =>
                  setArticleForm({ ...articleForm, title: e.target.value })
                }
                required
              />
              <TextField.Root
                name="content"
                placeholder="Contenido breve"
                value={articleForm.content}
                onChange={(e) =>
                  setArticleForm({ ...articleForm, content: e.target.value })
                }
                required
              />
              <TextField.Root
                name="url"
                placeholder="URL de la noticia"
                value={articleForm.url}
                onChange={(e) =>
                  setArticleForm({ ...articleForm, url: e.target.value })
                }
                required
              />
              <TextField.Root
                name="publishedAt"
                placeholder="Fecha de publicación"
                type="date"
                value={articleForm.publishedAt}
                onChange={(e) =>
                  setArticleForm({
                    ...articleForm,
                    publishedAt: e.target.value,
                  })
                }
                required
              />
              <Flex gap="2" className="mt-2">
                <Button
                  color="green"
                  onClick={
                    editingArticleId ? handleEditArticle : handleAddArticle
                  }
                >
                  {editingArticleId ? "Actualizar" : "Agregar"}
                </Button>
                {editingArticleId && (
                  <Button
                    variant="soft"
                    onClick={() => {
                      setEditingArticleId(null);
                      setArticleForm({
                        id: undefined,
                        title: "",
                        content: "",
                        url: "",
                        publishedAt: new Date().toISOString().split("T")[0],
                      });
                    }}
                  >
                    Cancelar
                  </Button>
                )}
              </Flex>
            </Box>

            {/* Listado de artículos */}
            {loadingArticles ? (
              <Box className="mt-4">Cargando artículos...</Box>
            ) : (
              <Box className="mt-4 space-y-2">
                {(form.articles || []).map((art: any) => (
                  <Box
                    key={art.id}
                    className="border p-3 rounded-lg flex justify-between items-center"
                  >
                    <Box>
                      <Heading size="6">{art.title}</Heading>
                      <p>
                        {new Date(art.publishedAt).toLocaleDateString()} –{" "}
                        <a
                          href={art.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          Ver noticia
                        </a>
                      </p>
                    </Box>
                    <Flex gap="2">
                      <Button
                        variant="soft"
                        onClick={() => loadArticleForEdit(art)}
                      >
                        Editar
                      </Button>
                      <Button
                        color="red"
                        onClick={() => handleDeleteArticle(art.id)}
                      >
                        Eliminar
                      </Button>
                    </Flex>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Tabs.Content>

        {/* -------- PESTAÑA IMÁGENES -------- */}
        <Tabs.Content value="images">
          <Box>
            <Heading size="5">Imágenes Globales</Heading>
            <Box className="mt-4 p-3 border rounded-lg">
              <label className="block text-sm font-medium mb-1">
                Agregar imagen global:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleAddImageGlobal}
                className="mb-2"
              />
            </Box>

            {/* Listado de imágenes globales */}
            {loadingImages ? (
              <Box className="mt-4">Cargando imágenes...</Box>
            ) : (
              <Box className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                {(form.images || []).map((img: any) => (
                  <Box
                    key={img.id}
                    className="relative rounded-lg overflow-hidden border"
                  >
                    <img
                      src={img.url}
                      alt={img.altText}
                      className="w-full h-32 object-cover"
                    />
                    <Button
                      size="1"
                      variant="soft"
                      className="absolute top-2 right-2"
                      onClick={() => handleDeleteImageGlobal(img.id)}
                    >
                      X
                    </Button>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Tabs.Content>
      </Tabs.Root>

      <Flex gap="3" className="mt-4">
        <Button type="submit" color="green" disabled={creating || updating}>
          {form.id ? "Actualizar configuración" : "Crear configuración"}
        </Button>
        <Button
          type="button"
          variant="soft"
          onClick={() => router.push("/admin/configs")}
        >
          Cancelar
        </Button>
      </Flex>

      {(createError || updateError) && (
        <div className="text-red-600 mt-2">
          {createError?.message || updateError?.message}
        </div>
      )}
    </form>
  );
}
