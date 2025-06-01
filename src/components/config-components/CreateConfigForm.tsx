"use client";

import { useState, useEffect } from "react";
import { Box, Button, TextField, Heading, Flex, Tabs } from "@radix-ui/themes";
import { useMutation } from "@apollo/client";
import { CREATE_CONFIG, UPDATE_CONFIG } from "@/graphql-client/mutations/config.mutations";
import { useRouter } from "next/navigation";
import { UnitConfigWithRelations } from "@/types/config.types";

interface CreateConfigFormProps {
  config?: Partial<UnitConfigWithRelations>;
  onSuccess?: () => void;
}

export default function CreateConfigForm({ config, onSuccess }: CreateConfigFormProps) {
  const [tab, setTab] = useState("general");
  const [form, setForm] = useState({
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
    sections: [],
    articles: [],
    images: [],
    ...config,
  });
  const router = useRouter();
  const [createConfig, { loading: creating, error: createError }] = useMutation(CREATE_CONFIG);
  const [updateConfig, { loading: updating, error: updateError }] = useMutation(UPDATE_CONFIG);

  useEffect(() => {
    if (config) {
      setForm(prev => ({ ...prev, ...config }));
    }
  }, [config]);

  // Manejo de campos generales
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Manejo de subida de imágenes (icono/banner)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm({ ...form, [field]: `/uploads/${file.name}` });
    }
  };

  // Placeholder para CRUD de secciones, artículos, imágenes
  // Aquí deberías implementar lógica de añadir/editar/eliminar y reordenar

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.id) {
      // Edición
      await updateConfig({ variables: { id: form.id, ...form } });
    } else {
      // Creación
      await createConfig({ variables: form });
    }
    if (onSuccess) onSuccess();
    else router.push("/admin/configs");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Tabs.Root value={tab} onValueChange={setTab} className="w-full">
        <Tabs.List>
          <Tabs.Trigger value="general">General & SEO</Tabs.Trigger>
          <Tabs.Trigger value="sections">Secciones</Tabs.Trigger>
          <Tabs.Trigger value="articles">Artículos</Tabs.Trigger>
          <Tabs.Trigger value="images">Imágenes</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="general">
          <Box className="space-y-4">
            <Heading size="4">Datos generales y SEO</Heading>
            <TextField.Root name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
            <TextField.Root name="pageTitle" placeholder="Título de la página" value={form.pageTitle} onChange={handleChange} required />
            <TextField.Root name="pageType" placeholder="Tipo de página" value={form.pageType} onChange={handleChange} required />
            <TextField.Root name="footerInfo" placeholder="Footer info" value={form.footerInfo || ""} onChange={handleChange} />
            <TextField.Root name="legalStepsCount" placeholder="Pasos legales" value={form.legalStepsCount} onChange={handleChange} type="number" />
            <label className="block mt-2">Icono:
              <input type="file" accept="image/*" onChange={e => handleFileChange(e, "iconUrl")}/>
              {form.iconUrl && <span className="ml-2">{form.iconUrl}</span>}
            </label>
            <label className="block mt-2">Banner:
              <input type="file" accept="image/*" onChange={e => handleFileChange(e, "bannerUrl")}/>
              {form.bannerUrl && <span className="ml-2">{form.bannerUrl}</span>}
            </label>
          </Box>
        </Tabs.Content>
        <Tabs.Content value="sections">
          <Box className="space-y-2">
            <Heading size="4">Secciones</Heading>
            {/* Aquí va el CRUD visual de secciones (añadir, editar, eliminar, reordenar) */}
            <p className="text-gray-500">(Próximamente: gestión visual de secciones, tipo, orden, imágenes por sección...)</p>
          </Box>
        </Tabs.Content>
        <Tabs.Content value="articles">
          <Box className="space-y-2">
            <Heading size="4">Artículos globales</Heading>
            {/* Aquí va el CRUD visual de artículos globales */}
            <p className="text-gray-500">(Próximamente: gestión visual de artículos globales y orden)</p>
          </Box>
        </Tabs.Content>
        <Tabs.Content value="images">
          <Box className="space-y-2">
            <Heading size="4">Imágenes globales</Heading>
            {/* Aquí va el CRUD visual de imágenes globales */}
            <p className="text-gray-500">(Próximamente: gestión visual de imágenes globales y orden. Sube imágenes a <b>/public/uploads</b>.)</p>
          </Box>
        </Tabs.Content>
      </Tabs.Root>
      <Flex gap="3">
        <Button type="submit" color="green" disabled={creating || updating}>{form.id ? "Actualizar" : "Crear"}</Button>
        <Button type="button" variant="soft" onClick={() => router.push("/admin/configs")}>Cancelar</Button>
      </Flex>
      {(createError || updateError) && <div className="text-red-500">{createError?.message || updateError?.message}</div>}
    </form>
  );
}
