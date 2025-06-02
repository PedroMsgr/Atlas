"use client";
// src/components/config-components/CreateConfigForm.tsx

import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Tabs, Box, Button, TextField, Heading, Flex, Card } from "@radix-ui/themes";
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
import { CREATE_LEGALSTEP, UPDATE_LEGALSTEP, DELETE_LEGALSTEP } from "@/graphql-client/mutations/legalstep.mutations";
import { GET_LEGALSTEPS_BY_CONFIG } from "@/graphql-client/queries/legalstep.querys";
import { CREATE_FOOTERLINK, UPDATE_FOOTERLINK, DELETE_FOOTERLINK } from "@/graphql-client/mutations/footerlink.mutations";
import { GET_FOOTERLINKS_BY_CONFIG } from "@/graphql-client/queries/footerlink.querys";
import { uploadImage } from "@/lib/uploadImage";
import { Textarea } from "@/components/ui/textarea";

interface CreateConfigFormProps {
  config?: any; // UnitConfigWithRelations
  onSuccess?: () => void;
}

export default function UpdateConfig({
  config,
  onSuccess,
}: CreateConfigFormProps) {
  const router = useRouter();
  const [tab, setTab] = useState<"general"|"sections"|"articles"|"images"|"legalsteps"|"footerlinks">("general");

  // Estado principal de configuración
  const [form, setForm] = useState<any>({
    id: '',
    name: '',
    pageTitle: '',
    servicesDescription: '',
    iconUrl: '',
    // campos opcionales
    pageDescription: '',
    bannerUrl: '',
    footerInfo: '',
    sections: [] as any[],
    articles: [] as any[],
    images: [] as any[],
    legalSteps: [] as any[],
    footerLinks: [] as any[],
    ...config,
  });

  // Crear / actualizar Config
  const [createConfig, { loading: creating, error: createError }] = useMutation(CREATE_CONFIG);
  const [updateConfig, { loading: updating, error: updateError }] = useMutation(UPDATE_CONFIG);

  // ------------------ SECCIONES ------------------
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

  // ------------------ ARTÍCULOS ------------------
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

  // ------------------ IMÁGENES ------------------
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

  // ------------------ PASOS LEGALES ------------------
  const {
    data: dataLegalSteps,
    loading: loadingLegalSteps,
    refetch: refetchLegalSteps,
  } = useQuery(GET_LEGALSTEPS_BY_CONFIG, {
    variables: { configId: form.id },
    skip: !form.id,
  });
  const [createLegalStep] = useMutation(CREATE_LEGALSTEP);
  const [updateLegalStep] = useMutation(UPDATE_LEGALSTEP);
  const [deleteLegalStep] = useMutation(DELETE_LEGALSTEP);

  // ------------------ FOOTER LINKS ------------------
  const {
    data: dataFooterLinks,
    loading: loadingFooterLinks,
    refetch: refetchFooterLinks,
  } = useQuery(GET_FOOTERLINKS_BY_CONFIG, {
    variables: { configId: form.id },
    skip: !form.id,
  });
  const [createFooterLink] = useMutation(CREATE_FOOTERLINK);
  const [updateFooterLink] = useMutation(UPDATE_FOOTERLINK);
  const [deleteFooterLink] = useMutation(DELETE_FOOTERLINK);

  // ------------------ Sincronizar con datos recibidos ------------------
  useEffect(() => {
    if (config) {
      setForm((prev: any) => ({ ...prev, ...config }));
    }
  }, [config]);

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

  useEffect(() => {
    if (dataLegalSteps?.legalStepsByConfig) {
      setForm((prev: any) => ({
        ...prev,
        legalSteps: dataLegalSteps.legalStepsByConfig,
      }));
    }
  }, [dataLegalSteps]);

  useEffect(() => {
    if (dataFooterLinks?.footerLinksByConfig) {
      setForm((prev: any) => ({
        ...prev,
        footerLinks: dataFooterLinks.footerLinksByConfig,
      }));
    }
  }, [dataFooterLinks]);

  // ------------------ Handlers generales ------------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'bannerUrl' | 'iconUrl'
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = await uploadImage(file);
    setForm((prev: any) => ({ ...prev, [field]: url }));
  };

  // ------------------ Crear/Editar Configuración ------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.pageTitle || !form.servicesDescription) return;
    const input = {
      name: form.name,
      pageTitle: form.pageTitle,
      servicesDescription: form.servicesDescription,
      iconUrl: form.iconUrl || '',
      pageDescription: form.pageDescription || '',
      bannerUrl: form.bannerUrl || '',
      footerInfo: form.footerInfo || '',
    };
    try {
      const { data } = await createConfig({ variables: { data: input } });
      if (data?.createConfig?.id) {
        setForm((prev: any) => ({ ...prev, id: data.createConfig.id }));
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      // Manejo de error
    }
  };

  // =================== PESTAÑA SECCIONES ===================
  const [sectionForm, setSectionForm] = useState<{
    id?: string;
    title: string;
    body: string;
    imageUrl: string;
    order: number;
  }>({
    title: "",
    body: "",
    imageUrl: "",
    order: (form.sections?.length || 0) + 1,
  });
  const [editingSectionId, setEditingSectionId] = useState<string | null>(null);
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);

  const loadSectionForEdit = (sec: any) => {
    setSectionForm({
      id: sec.id,
      title: sec.title,
      body: sec.body,
      imageUrl: sec.imageUrl || "",
      order: sec.order,
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
          body: sectionForm.body,
          imageUrl: sectionForm.imageUrl,
          order: sectionForm.order,
        },
      },
    });
    await refetchSections();
    setSectionForm({
      id: undefined,
      title: "",
      body: "",
      imageUrl: "",
      order: (form.sections?.length || 0) + 1,
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
          body: sectionForm.body,
          imageUrl: sectionForm.imageUrl,
          order: sectionForm.order,
        },
      },
    });
    await refetchSections();
    setSectionForm({
      id: undefined,
      title: "",
      body: "",
      imageUrl: "",
      order: (form.sections?.length || 0) + 1,
    });
    setEditingSectionId(null);
  };

  const handleDeleteSection = async (sectionId: string) => {
    await deleteSection({ variables: { id: sectionId } });
    await refetchSections();
  };

  // =================== PESTAÑA ARTÍCULOS ===================
  const [articleForm, setArticleForm] = useState<{
    id?: string;
    title: string;
    content: string;
    url: string;
    publishedAt: string;
    order: number;
  }>({
    title: "",
    content: "",
    url: "",
    publishedAt: new Date().toISOString().split("T")[0],
    order: (form.articles?.length || 0) + 1,
  });
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);

  const loadArticleForEdit = (art: any) => {
    setArticleForm({
      id: art.id,
      title: art.title,
      content: art.content,
      url: art.url || "",
      publishedAt: art.publishedAt ? art.publishedAt.split("T")[0] : new Date().toISOString().split("T")[0],
      order: art.order,
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
          order: articleForm.order,
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
      order: (form.articles?.length || 0) + 1,
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
          order: articleForm.order,
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
      order: (form.articles?.length || 0) + 1,
    });
    setEditingArticleId(null);
  };

  const handleDeleteArticle = async (articleId: string) => {
    await deleteArticle({ variables: { id: articleId } });
    await refetchArticles();
  };

  // =================== PESTAÑA IMÁGENES ===================
  const handleAddImageGlobal = async (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleAddImageSection = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
          order: (form.sections?.find((s: any) => s.id === currentSectionId)?.images?.length || 0) + 1,
        },
      },
    });
    await refetchSections();
  };

  const handleDeleteImageSection = async (imgId: string) => {
    await deleteImage({ variables: { id: imgId } });
    await refetchSections();
  };

  // =================== PESTAÑA PASOS LEGALES ===================
  const [legalStepForm, setLegalStepForm] = useState<{
    id?: string;
    title: string;
    description: string;
    iconUrl: string;
    order: number;
  }>({
    title: "",
    description: "",
    iconUrl: "",
    order: (form.legalSteps?.length || 0) + 1,
  });
  const [editingLegalStepId, setEditingLegalStepId] = useState<string | null>(null);

  const loadLegalStepForEdit = (step: any) => {
    setLegalStepForm({
      id: step.id,
      title: step.title,
      description: step.description,
      iconUrl: step.iconUrl || "",
      order: step.order,
    });
    setEditingLegalStepId(step.id);
  };

  const handleAddLegalStep = async () => {
    if (!form.id) return;
    await createLegalStep({
      variables: {
        data: {
          configId: form.id,
          title: legalStepForm.title,
          description: legalStepForm.description,
          iconUrl: legalStepForm.iconUrl,
          order: legalStepForm.order,
        },
      },
    });
    await refetchLegalSteps();
    setLegalStepForm({
      id: undefined,
      title: "",
      description: "",
      iconUrl: "",
      order: (form.legalSteps?.length || 0) + 1,
    });
    setEditingLegalStepId(null);
  };

  const handleEditLegalStep = async () => {
    if (!legalStepForm.id) return;
    await updateLegalStep({
      variables: {
        id: legalStepForm.id!,
        data: {
          configId: form.id,
          title: legalStepForm.title,
          description: legalStepForm.description,
          iconUrl: legalStepForm.iconUrl,
          order: legalStepForm.order,
        },
      },
    });
    await refetchLegalSteps();
    setLegalStepForm({
      id: undefined,
      title: "",
      description: "",
      iconUrl: "",
      order: (form.legalSteps?.length || 0) + 1,
    });
    setEditingLegalStepId(null);
  };

  const handleDeleteLegalStep = async (stepId: string) => {
    await deleteLegalStep({ variables: { id: stepId } });
    await refetchLegalSteps();
  };

  // =================== PESTAÑA FOOTER LINKS ===================
  const [footerLinkForm, setFooterLinkForm] = useState<{
    id?: string;
    label: string;
    url: string;
    order: number;
  }>({
    label: "",
    url: "",
    order: (form.footerLinks?.length || 0) + 1,
  });
  const [editingFooterLinkId, setEditingFooterLinkId] = useState<string | null>(null);

  const loadFooterLinkForEdit = (link: any) => {
    setFooterLinkForm({
      id: link.id,
      label: link.label,
      url: link.url,
      order: link.order,
    });
    setEditingFooterLinkId(link.id);
  };

  const handleAddFooterLink = async () => {
    if (!form.id) return;
    await createFooterLink({
      variables: {
        data: {
          configId: form.id,
          label: footerLinkForm.label,
          url: footerLinkForm.url,
          order: footerLinkForm.order,
        },
      },
    });
    await refetchFooterLinks();
    setFooterLinkForm({
      id: undefined,
      label: "",
      url: "",
      order: (form.footerLinks?.length || 0) + 1,
    });
    setEditingFooterLinkId(null);
  };

  const handleEditFooterLink = async () => {
    if (!footerLinkForm.id) return;
    await updateFooterLink({
      variables: {
        id: footerLinkForm.id!,
        data: {
          configId: form.id,
          label: footerLinkForm.label,
          url: footerLinkForm.url,
          order: footerLinkForm.order,
        },
      },
    });
    await refetchFooterLinks();
    setFooterLinkForm({
      id: undefined,
      label: "",
      url: "",
      order: (form.footerLinks?.length || 0) + 1,
    });
    setEditingFooterLinkId(null);
  };

  const handleDeleteFooterLink = async (linkId: string) => {
    await deleteFooterLink({ variables: { id: linkId } });
    await refetchFooterLinks();
  };

  return (
    <Tabs.Root value={tab} onValueChange={value => setTab(value as typeof tab)} className="w-full">
      <Tabs.List>
        <Tabs.Trigger value="general">General</Tabs.Trigger>
        {form.id && (
          <>
            <Tabs.Trigger value="sections">Secciones</Tabs.Trigger>
            <Tabs.Trigger value="articles">Artículos</Tabs.Trigger>
            <Tabs.Trigger value="images">Imágenes</Tabs.Trigger>
            <Tabs.Trigger value="legalsteps">Pasos Legales</Tabs.Trigger>
            <Tabs.Trigger value="footerlinks">FooterLinks</Tabs.Trigger>
          </>
        )}
      </Tabs.List>

      {/* ========= PESTAÑA GENERAL ========= */}
      <Tabs.Content value="general">
        <form onSubmit={handleSubmit} className="space-y-4 p-4">
          <Heading size="5">Datos Generales y Configuración</Heading>

          <TextField.Root
            name="name"
            placeholder="Nombre único de configuración"
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
            name="pageDescription"
            placeholder="Descripción de la página (opcional)"
            value={form.pageDescription || ""}
            onChange={handleChange}
          />

          <TextField.Root
            name="servicesDescription"
            placeholder="Descripción de servicios"
            value={form.servicesDescription || ""}
            onChange={handleChange}
            required
          />

          <Box>
            <label className="block text-sm font-medium mb-1">Banner principal</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, "bannerUrl")}
              className="mb-2"
            />
            {form.bannerUrl && (
              <div className="flex items-center space-x-2">
                <img src={form.bannerUrl} alt="Banner actual" className="h-12 w-24 rounded" />
                <span className="text-sm break-all">{form.bannerUrl}</span>
              </div>
            )}
          </Box>

          <TextField.Root
            name="footerInfo"
            placeholder="Información de pie de página"
            value={form.footerInfo || ""}
            onChange={handleChange}
          />

          <TextField.Root
            name="iconUrl"
            placeholder="URL del ícono (opcional)"
            value={form.iconUrl}
            onChange={handleChange}
          />

          <Flex gap="3" className="mt-4">
            <Button type="submit" color="green" disabled={creating || updating}>
              {form.id ? "Actualizar Configuración" : "Crear Configuración"}
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
      </Tabs.Content>

      {/* ========= PESTAÑA SECCIONES ========= */}
      <Tabs.Content value="sections">
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
              onChange={(e) =>
                setSectionForm({ ...sectionForm, title: e.target.value })
              }
              required
            />
            <Textarea
              name="body"
              placeholder="Contenido de sección"
              value={sectionForm.body}
              onChange={(e) =>
                setSectionForm({ ...sectionForm, body: e.target.value })
              }
              required
            />
            <TextField.Root
              name="imageUrl"
              placeholder="URL de la imagen (opcional)"
              value={sectionForm.imageUrl}
              onChange={(e) =>
                setSectionForm({ ...sectionForm, imageUrl: e.target.value })
              }
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
            <Flex gap="2" className="mt-2">
              <Button
                color="green"
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
                      order: (form.sections?.length || 0) + 1,
                    });
                  }}
                >
                  Cancelar
                </Button>
              )}
            </Flex>
          </Box>

          {/* Listado de secciones */}
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
                    <p>Orden: {sec.order}</p>
                    {sec.imageUrl && (
                      <img
                        src={sec.imageUrl}
                        alt={`Imagen ${sec.title}`}
                        className="h-12 w-12 mt-1 rounded"
                      />
                    )}
                  </Box>
                  <Flex gap="2">
                    <Button variant="soft" onClick={() => loadSectionForEdit(sec)}>
                      Editar
                    </Button>
                    <Button color="red" onClick={() => handleDeleteSection(sec.id)}>
                      Eliminar
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => setCurrentSectionId(sec.id)}
                    >
                      Subir imágenes
                    </Button>
                  </Flex>
                </Box>
              ))}
            </Box>
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
      </Tabs.Content>

      {/* ========= PESTAÑA ARTÍCULOS ========= */}
      <Tabs.Content value="articles">
        <Box className="p-4">
          <Heading size="5">Artículos Globales</Heading>

          {/* Formulario para crear/editar artículo */}
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
            <Textarea
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
              type="date"
              value={articleForm.publishedAt}
              onChange={(e) =>
                setArticleForm({ ...articleForm, publishedAt: e.target.value })
              }
              required
            />
            <TextField.Root
              name="order"
              placeholder="Orden"
              type="number"
              min={1}
              value={articleForm.order}
              onChange={(e) =>
                setArticleForm({
                  ...articleForm,
                  order: parseInt(e.target.value, 10),
                })
              }
              required
            />
            <Flex gap="2" className="mt-2">
              <Button
                color="green"
                onClick={editingArticleId ? handleEditArticle : handleAddArticle}
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
                      order: (form.articles?.length || 0) + 1,
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
                    <p>Orden: {art.order}</p>
                  </Box>
                  <Flex gap="2">
                    <Button variant="soft" onClick={() => loadArticleForEdit(art)}>
                      Editar
                    </Button>
                    <Button color="red" onClick={() => handleDeleteArticle(art.id)}>
                      Eliminar
                    </Button>
                  </Flex>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Tabs.Content>

      {/* ========= PESTAÑA IMÁGENES ========= */}
      <Tabs.Content value="images">
        <Box className="p-4">
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

      {/* ========= PESTAÑA PASOS LEGALES ========= */}
      <Tabs.Content value="legalsteps">
        <Box className="p-4">
          <Heading size="5">Pasos Legales</Heading>

          {/* Formulario para crear/editar paso legal */}
          <Box className="mt-4 space-y-2 border p-4 rounded-lg">
            <Heading size="6">
              {editingLegalStepId ? "Editar paso legal" : "Nuevo paso legal"}
            </Heading>
            <TextField.Root
              name="title"
              placeholder="Título del paso legal"
              value={legalStepForm.title}
              onChange={(e) =>
                setLegalStepForm({ ...legalStepForm, title: e.target.value })
              }
              required
            />
            <Textarea
              name="description"
              placeholder="Descripción del paso legal"
              value={legalStepForm.description}
              onChange={(e) =>
                setLegalStepForm({ ...legalStepForm, description: e.target.value })
              }
              required
            />
            <TextField.Root
              name="order"
              placeholder="Orden"
              type="number"
              min={1}
              value={legalStepForm.order}
              onChange={(e) =>
                setLegalStepForm({
                  ...legalStepForm,
                  order: parseInt(e.target.value, 10),
                })
              }
              required
            />
            <TextField.Root
              name="iconUrl"
              placeholder="URL del icono (opcional)"
              value={legalStepForm.iconUrl}
              onChange={(e) =>
                setLegalStepForm({ ...legalStepForm, iconUrl: e.target.value })
              }
            />
            <Flex gap="2" className="mt-2">
              <Button
                color="green"
                onClick={editingLegalStepId ? handleEditLegalStep : handleAddLegalStep}
              >
                {editingLegalStepId ? "Actualizar" : "Agregar"}
              </Button>
              {editingLegalStepId && (
                <Button
                  variant="soft"
                  onClick={() => {
                    setEditingLegalStepId(null);
                    setLegalStepForm({
                      id: undefined,
                      title: "",
                      description: "",
                      iconUrl: "",
                      order: (form.legalSteps?.length || 0) + 1,
                    });
                  }}
                >
                  Cancelar
                </Button>
              )}
            </Flex>
          </Box>

          {/* Listado de pasos legales */}
          {loadingLegalSteps ? (
            <Box className="mt-4">Cargando pasos legales...</Box>
          ) : (
            <Box className="mt-4 space-y-2">
              {(form.legalSteps || []).map((step: any) => (
                <Box
                  key={step.id}
                  className="border p-3 rounded-lg flex justify-between items-center"
                >
                  <Box>
                    <Heading size="6">{step.title}</Heading>
                    <p>Orden: {step.order}</p>
                    {step.iconUrl && (
                      <img
                        src={step.iconUrl}
                        alt={`Icono ${step.title}`}
                        className="h-8 w-8 mt-1"
                      />
                    )}
                  </Box>
                  <Flex gap="2">
                    <Button variant="soft" onClick={() => loadLegalStepForEdit(step)}>
                      Editar
                    </Button>
                    <Button color="red" onClick={() => handleDeleteLegalStep(step.id)}>
                      Eliminar
                    </Button>
                  </Flex>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Tabs.Content>

      {/* ========= PESTAÑA FOOTER LINKS ========= */}
      <Tabs.Content value="footerlinks">
        <Box className="p-4">
          <Heading size="5">Enlaces de Footer</Heading>

          {/* Formulario para crear/editar enlace de footer */}
          <Box className="mt-4 space-y-2 border p-4 rounded-lg">
            <Heading size="6">
              {editingFooterLinkId ? "Editar enlace de footer" : "Nuevo enlace de footer"}
            </Heading>
            <TextField.Root
              name="label"
              placeholder="Texto del enlace"
              value={footerLinkForm.label}
              onChange={(e) =>
                setFooterLinkForm({ ...footerLinkForm, label: e.target.value })
              }
              required
            />
            <TextField.Root
              name="url"
              placeholder="URL del enlace"
              value={footerLinkForm.url}
              onChange={(e) =>
                setFooterLinkForm({ ...footerLinkForm, url: e.target.value })
              }
              required
            />
            <TextField.Root
              name="order"
              placeholder="Orden"
              type="number"
              min={1}
              value={footerLinkForm.order}
              onChange={(e) =>
                setFooterLinkForm({
                  ...footerLinkForm,
                  order: parseInt(e.target.value, 10),
                })
              }
              required
            />
            <Flex gap="2" className="mt-2">
              <Button
                color="green"
                onClick={
                  editingFooterLinkId ? handleEditFooterLink : handleAddFooterLink
                }
              >
                {editingFooterLinkId ? "Actualizar" : "Agregar"}
              </Button>
              {editingFooterLinkId && (
                <Button
                  variant="soft"
                  onClick={() => {
                    setEditingFooterLinkId(null);
                    setFooterLinkForm({
                      id: undefined,
                      label: "",
                      url: "",
                      order: (form.footerLinks?.length || 0) + 1,
                    });
                  }}
                >
                  Cancelar
                </Button>
              )}
            </Flex>
          </Box>

          {/* Listado de enlaces de footer */}
          {loadingFooterLinks ? (
            <Box className="mt-4">Cargando enlaces de footer...</Box>
          ) : (
            <Box className="mt-4 space-y-2">
              {(form.footerLinks || []).map((link: any) => (
                <Box
                  key={link.id}
                  className="border p-3 rounded-lg flex justify-between items-center"
                >
                  <Box>
                    <Heading size="6">{link.label}</Heading>
                    <p>URL: {link.url}</p>
                    <p>Orden: {link.order}</p>
                  </Box>
                  <Flex gap="2">
                    <Button variant="soft" onClick={() => loadFooterLinkForEdit(link)}>
                      Editar
                    </Button>
                    <Button color="red" onClick={() => handleDeleteFooterLink(link.id)}>
                      Eliminar
                    </Button>
                  </Flex>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Tabs.Content>
    </Tabs.Root>
  );
}
