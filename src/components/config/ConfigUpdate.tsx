"use client";
// src/components/config-components/CreateConfigForm.tsx

import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Tabs, Box, Button, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import {
  UPDATE_CONFIG,
} from "@/graphql/mutations/config.mutations";
import { GET_SECTIONS_BY_CONFIG } from "@/graphql/queries/section.queries";
import {
  CREATE_SECTION,
  UPDATE_SECTION,
  DELETE_SECTION,
} from "@/graphql/mutations/section.mutations";
import { GET_ARTICLES_BY_CONFIG } from "@/graphql/queries/article.queries";
import {
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
} from "@/graphql/mutations/article.mutations";
import { GET_IMAGES_BY_CONFIG } from "@/graphql/queries/image.queries";
import {
  CREATE_IMAGE,
  UPDATE_IMAGE,
  DELETE_IMAGE,
} from "@/graphql/mutations/image.mutations";
import { CREATE_LEGALSTEP, UPDATE_LEGALSTEP, DELETE_LEGALSTEP } from "@/graphql/mutations/legalstep.mutations";
import { GET_LEGALSTEPS_BY_CONFIG } from "@/graphql/queries/legalstep.queries";
import { CREATE_FOOTERLINK, UPDATE_FOOTERLINK, DELETE_FOOTERLINK } from "@/graphql/mutations/footerlink.mutations";
import { GET_FOOTERLINKS_BY_CONFIG } from "@/graphql/queries/footerlink.queries";
import { uploadImage } from "@/lib/uploadImage";
import ConfigGeneralTab from './ConfigGeneralTab';
import ConfigSectionsTab from './ConfigSectionsTab';
import ConfigArticlesTab from './ConfigArticlesTab';
import ImagesTab from './ConfigImagesTab';
import ConfigLegalStepsTab from './ConfigLegalStepsTab';
import ConfigFooterLinksTab from './ConfigFooterLinksTab';

interface ConfigUpdateProps {
  config?: any; // UnitConfigWithRelations
  onSuccess?: () => void;
}

export default function ConfigUpdate({
  config,
  onSuccess,
}: ConfigUpdateProps) {
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

  useEffect(() => {
    if (dataImages?.imagesByConfig) {
      setForm((prev: any) => ({
        ...prev,
        images: dataImages.imagesByConfig,
      }));
    }
  }, [dataImages]);

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

  // =================== PESTAÑA PASOS LEGALES Y FOOTER LINKS: DRAFT STATE ===================
  const [draftLegalSteps, setDraftLegalSteps] = useState<any[]>([]);
  const [deletedLegalStepIds, setDeletedLegalStepIds] = useState<string[]>([]);
  const [draftFooterLinks, setDraftFooterLinks] = useState<any[]>([]);
  const [deletedFooterLinkIds, setDeletedFooterLinkIds] = useState<string[]>([]);

  // Sync draft state with backend data
  useEffect(() => {
    if (dataLegalSteps?.legalStepsByConfig) {
      setDraftLegalSteps(
        dataLegalSteps.legalStepsByConfig
          .slice()
          .sort((a: any, b: any) => a.order - b.order)
      );
    }
  }, [dataLegalSteps]);
  useEffect(() => {
    if (dataFooterLinks?.footerLinksByConfig) {
      setDraftFooterLinks(
        dataFooterLinks.footerLinksByConfig
          .slice()
          .sort((a: any, b: any) => a.order - b.order)
      );
    }
  }, [dataFooterLinks]);

  // --- Legal Steps Handlers ---
  const handleAddLegalStepDraft = () => {
    if (!legalStepForm.title || !legalStepForm.description) return;
    setDraftLegalSteps((prev) => [
      ...prev,
      {
        ...legalStepForm,
        id: undefined,
        order: prev.length + 1,
      },
    ]);
    setLegalStepForm({ id: undefined, title: '', description: '' });
  };
  const handleEditLegalStepDraft = () => {
    setDraftLegalSteps((prev) =>
      prev.map((step) =>
        step.id === legalStepForm.id || (!step.id && !legalStepForm.id && step.title === legalStepForm.title)
          ? { ...step, title: legalStepForm.title, description: legalStepForm.description }
          : step
      )
    );
    setLegalStepForm({ id: undefined, title: '', description: '' });
    setEditingLegalStepId(null);
  };
  const handleDeleteLegalStepDraft = (id: string | undefined) => {
    setDraftLegalSteps(prev => {
      const filtered = prev.filter(step => step.id !== id);
      return filtered.map((step, idx) => ({ ...step, order: idx + 1 }));
    });
    if (id) setDeletedLegalStepIds(prev => [...prev, id]);
  };

  // --- Footer Links Handlers ---
  const handleAddFooterLinkDraft = () => {
    setDraftFooterLinks(prev => {
      const newArr = [
        ...prev,
        {
          id: undefined,
          label: footerLinkForm.label,
          url: footerLinkForm.url,
          order: prev.length + 1,
        },
      ];
      return newArr.map((link, idx) => ({ ...link, order: idx + 1 }));
    });
    setFooterLinkForm({ id: undefined, label: "", url: "" });
    setEditingFooterLinkId(null);
  };
  const handleEditFooterLinkDraft = () => {
    setDraftFooterLinks(prev => {
      const newArr = prev.map(link =>
        link.id === footerLinkForm.id ? { ...link, ...footerLinkForm } : link
      );
      return newArr.map((link, idx) => ({ ...link, order: idx + 1 }));
    });
    setFooterLinkForm({ id: undefined, label: "", url: "" });
    setEditingFooterLinkId(null);
  };
  const handleDeleteFooterLinkDraft = (id: string | undefined) => {
    setDraftFooterLinks(prev => {
      const filtered = prev.filter(link => link.id !== id);
      return filtered.map((link, idx) => ({ ...link, order: idx + 1 }));
    });
    if (id) setDeletedFooterLinkIds(prev => [...prev, id]);
  };

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
    if (!form.id) {
      alert('No se puede actualizar: falta el ID de la configuración.');
      return;
    }
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
      // 1. Actualizar la config principal
      const { data } = await updateConfig({ variables: { id: form.id, data: input } });
      // 2. Eliminar secciones marcadas
      for (const id of deletedSectionIds) {
        if (id) await deleteSection({ variables: { id } });
      }
      // 3. Crear nuevas secciones y actualizar existentes
      for (const sec of form.sections) {
        if (!sec.id) {
          await createSection({
            variables: {
              data: {
                configId: form.id,
                title: sec.title,
                body: sec.body,
                imageUrl: sec.imageUrl,
                order: sec.order,
              },
            },
          });
        } else {
          await updateSection({
            variables: {
              id: sec.id,
              data: {
                configId: form.id,
                title: sec.title,
                body: sec.body,
                imageUrl: sec.imageUrl,
                order: sec.order,
              },
            },
          });
        }
      }
      setDeletedSectionIds([]);
      // --- LEGAL STEPS ---
      for (const id of deletedLegalStepIds) {
        if (id) await deleteLegalStep({ variables: { id } });
      }
      for (const step of draftLegalSteps) {
        if (!step.id) {
          await createLegalStep({
            variables: {
              data: {
                configId: form.id,
                title: step.title,
                description: step.description ?? "",
                order: step.order,
              },
            },
          });
        } else {
          await updateLegalStep({
            variables: {
              id: step.id,
              data: {
                configId: form.id,
                title: step.title,
                description: step.description ?? "",
                order: step.order,
              },
            },
          });
        }
      }
      setDeletedLegalStepIds([]);
      // --- FOOTER LINKS ---
      for (const id of deletedFooterLinkIds) {
        if (id) await deleteFooterLink({ variables: { id } });
      }
      for (const link of draftFooterLinks) {
        if (!link.id) {
          await createFooterLink({
            variables: {
              data: {
                configId: form.id,
                label: link.label,
                url: link.url,
                order: link.order,
              },
            },
          });
        } else {
          await updateFooterLink({
            variables: {
              id: link.id,
              data: {
                configId: form.id,
                label: link.label,
                url: link.url,
                order: link.order,
              },
            },
          });
        }
      }
      setDeletedFooterLinkIds([]);
      if (data?.updateConfig?.id) {
        setForm((prev: any) => ({ ...prev, ...data.updateConfig }));
        if (onSuccess) onSuccess();
      }
    } catch (err: any) {
      if (
        err?.message?.includes('Unique constraint failed') ||
        err?.graphQLErrors?.some((e: any) =>
          e.message.includes('Unique constraint failed')
        )
      ) {
        alert('Ya existe una configuración con ese nombre. Por favor, elige otro nombre único.');
      } else {
        alert('Error al guardar la configuración.');
      }
    }
  };

  // =================== PESTAÑA SECCIONES ===================
  const [sectionForm, setSectionForm] = useState<{
    id?: string;
    title: string;
    body: string;
    imageUrl: string;
  }>({
    title: "",
    body: "",
    imageUrl: "",
  });
  const [editingSectionId, setEditingSectionId] = useState<string | null>(null);
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);

  // Estado para cambios diferidos de secciones
  const [deletedSectionIds, setDeletedSectionIds] = useState<string[]>([]);

  const loadSectionForEdit = (sec: any) => {
    setSectionForm({
      id: sec.id,
      title: sec.title,
      body: sec.body,
      imageUrl: sec.imageUrl || "",
    });
    setEditingSectionId(sec.id);
  };

  const handleAddSection = () => {
    setForm((prev: any) => ({
      ...prev,
      sections: [
        ...prev.sections,
        {
          id: undefined,
          title: sectionForm.title,
          body: sectionForm.body,
          imageUrl: sectionForm.imageUrl,
          order: (prev.sections?.length || 0) + 1,
        },
      ],
    }));
    setSectionForm({ id: undefined, title: "", body: "", imageUrl: "" });
    setEditingSectionId(null);
  };

  const handleEditSection = () => {
    setForm((prev: any) => ({
      ...prev,
      sections: prev.sections.map((sec: any) =>
        sec.id === sectionForm.id
          ? { ...sec, ...sectionForm }
          : sec
      ),
    }));
    setSectionForm({ id: undefined, title: "", body: "", imageUrl: "" });
    setEditingSectionId(null);
  };

  const handleDeleteSection = (sectionId: string) => {
    setForm((prev: any) => ({
      ...prev,
      sections: prev.sections.filter((sec: any) => sec.id !== sectionId),
    }));
    setDeletedSectionIds((prev) => [...prev, sectionId]);
  };

  // =================== PESTAÑA ARTÍCULOS ===================
  const [articleForm, setArticleForm] = useState<{
    id?: string;
    title: string;
    content: string;
    url: string;
    publishedAt: string;
    order?: number;
  }>(
    {
      title: "",
      content: "",
      url: "",
      publishedAt: new Date().toISOString().split("T")[0],
      order: undefined,
    }
  );
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);

  const loadArticleForEdit = (art: any) => {
    setArticleForm({
      id: art.id,
      title: art.title || "",
      content: art.content || "",
      url: art.url || "",
      publishedAt: art.publishedAt ? art.publishedAt.split("T")[0] : new Date().toISOString().split("T")[0],
      order: art.order || 1,
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
          publishedAt: new Date(articleForm.publishedAt).toISOString(),
          order: (form.articles?.length || 0) + 1,
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
      order: undefined,
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
          publishedAt: new Date(articleForm.publishedAt).toISOString(),
          order: articleForm.order || 1,
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
      order: undefined,
    });
    setEditingArticleId(null);
  };

  const handleDeleteArticle = async (articleId: string) => {
    await deleteArticle({ variables: { id: articleId } });
    await refetchArticles();
  };

  // =================== PESTAÑA IMÁGENES ===================
  // Mostrar previsualización de imágenes globales
  const renderImages = () => (
    <div className="flex flex-wrap gap-4 mt-2">
      {form.images?.map((img: any) => (
        <div key={img.id} className="flex flex-col items-center">
          <img src={img.url} alt={img.altText || ''} className="w-32 h-32 object-cover rounded shadow" />
          <span className="text-xs mt-1">{img.altText}</span>
        </div>
      ))}
    </div>
  );

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
  const [legalStepForm, setLegalStepForm] = useState({
    id: undefined,
    title: '',
    description: '',
  });
  const [editingLegalStepId, setEditingLegalStepId] = useState<string | null>(null);

  const loadLegalStepForEdit = (step: any) => {
    setLegalStepForm({
      id: step.id,
      title: step.title,
      description: step.description,
    });
    setEditingLegalStepId(step.id);
  };

  // =================== PESTAÑA FOOTER LINKS ===================
  const [footerLinkForm, setFooterLinkForm] = useState<{
    id?: string;
    label: string;
    url: string;
  }>({
    label: "",
    url: "",
  });
  const [editingFooterLinkId, setEditingFooterLinkId] = useState<string | null>(null);

  const loadFooterLinkForEdit = (link: any) => {
    setFooterLinkForm({
      id: link.id,
      label: link.label,
      url: link.url,
    });
    setEditingFooterLinkId(link.id);
  };

  // Renderizado de tabs
  return (
    <Box className="w-full">
      <Flex justify="end" align="center" className="mb-4 gap-2">
        <Button type="button" variant="soft" onClick={() => router.push("/admin/configs")}>Cancelar</Button>
        <Button type="button" color="green" disabled={updating} onClick={handleSubmit}>
          Actualizar Configuración
        </Button>
      </Flex>
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
          <ConfigGeneralTab
            form={form}
            handleChange={handleChange}
            handleFileUpload={handleFileUpload}
            updateError={updateError}
            updating={updating}
            handleSubmit={handleSubmit}
            router={router}
          />
        </Tabs.Content>

        {/* ========= PESTAÑA SECCIONES ========= */}
        <Tabs.Content value="sections">
          <ConfigSectionsTab
            form={form}
            setForm={setForm}
            sectionForm={sectionForm}
            setSectionForm={setSectionForm}
            editingSectionId={editingSectionId}
            setEditingSectionId={setEditingSectionId}
            currentSectionId={currentSectionId}
            setCurrentSectionId={setCurrentSectionId}
            loadSectionForEdit={loadSectionForEdit}
            handleAddSection={handleAddSection}
            handleEditSection={handleEditSection}
            handleDeleteSection={handleDeleteSection}
            handleAddImageSection={handleAddImageSection}
            handleDeleteImageSection={handleDeleteImageSection}
            uploadImage={uploadImage}
            loadingSections={loadingSections}
          />
        </Tabs.Content>

        {/* ========= PESTAÑA ARTÍCULOS ========= */}
        <Tabs.Content value="articles">
          <ConfigArticlesTab
            form={form}
            setForm={setForm}
            articleForm={articleForm}
            setArticleForm={setArticleForm}
            editingArticleId={editingArticleId}
            setEditingArticleId={setEditingArticleId}
            loadArticleForEdit={loadArticleForEdit}
            handleAddArticle={handleAddArticle}
            handleEditArticle={handleEditArticle}
            handleDeleteArticle={handleDeleteArticle}
            loadingArticles={loadingArticles}
          />
        </Tabs.Content>

        {/* ========= PESTAÑA IMÁGENES ========= */}
        <Tabs.Content value="images">
          <ImagesTab
            form={form}
            setForm={setForm}
            loadingImages={loadingImages}
            handleAddImageGlobal={handleAddImageGlobal}
            handleDeleteImageGlobal={handleDeleteImageGlobal}
          />
        </Tabs.Content>

        {/* ========= PESTAÑA PASOS LEGALES ========= */}
        <Tabs.Content value="legalsteps">
          <ConfigLegalStepsTab
            legalSteps={draftLegalSteps}
            setLegalSteps={setDraftLegalSteps}
            legalStepForm={legalStepForm}
            setLegalStepForm={setLegalStepForm}
            editingLegalStepId={editingLegalStepId}
            setEditingLegalStepId={setEditingLegalStepId}
            loadLegalStepForEdit={loadLegalStepForEdit}
            handleAddLegalStep={handleAddLegalStepDraft}
            handleEditLegalStep={handleEditLegalStepDraft}
            handleDeleteLegalStep={handleDeleteLegalStepDraft}
            loadingLegalSteps={loadingLegalSteps}
          />
        </Tabs.Content>

        {/* ========= PESTAÑA FOOTER LINKS ========= */}
        <Tabs.Content value="footerlinks">
          <ConfigFooterLinksTab
            footerLinks={draftFooterLinks}
            setFooterLinks={setDraftFooterLinks}
            footerLinkForm={footerLinkForm}
            setFooterLinkForm={setFooterLinkForm}
            editingFooterLinkId={editingFooterLinkId}
            setEditingFooterLinkId={setEditingFooterLinkId}
            loadFooterLinkForEdit={loadFooterLinkForEdit}
            handleAddFooterLink={handleAddFooterLinkDraft}
            handleEditFooterLink={handleEditFooterLinkDraft}
            handleDeleteFooterLink={handleDeleteFooterLinkDraft}
            loadingFooterLinks={loadingFooterLinks}
          />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
}
