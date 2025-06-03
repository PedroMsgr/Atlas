// src/components/config-components/CreateConfigBasicForm.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { CREATE_CONFIG } from "@/graphql-client/mutations/config.mutations";
import { uploadImage } from "@/lib/uploadImage";
import { Box, Button, Heading, TextField, Flex } from "@radix-ui/themes";

/**
 * Formulario para crear una configuración básica.
 * Solo pide los datos principales y sube imágenes a Firebase.
 * Al crear, redirige a la página de edición avanzada.
 */
export default function CreateConfigBasicForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    pageTitle: "",
    servicesDescription: "",
    iconUrl: "",
    pageDescription: "",
    bannerUrl: "",
    footerInfo: "",
  });
  const [createConfig, { loading, error }] = useMutation(CREATE_CONFIG);
  const [bannerPreview, setBannerPreview] = useState<string>("");
  const [iconPreview, setIconPreview] = useState<string>("");

  // Maneja el cambio de los inputs de texto
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Maneja la subida de archivos a Firebase y guarda la URL
  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "bannerUrl" | "iconUrl"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // Preview local
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (field === "bannerUrl") setBannerPreview(ev.target?.result as string);
      if (field === "iconUrl") setIconPreview(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
    // Subida a Firebase
    const url = await uploadImage(file);
    setForm((prev) => ({ ...prev, [field]: url }));
  };

  // Envía la mutación para crear la configuración
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.pageTitle || !form.servicesDescription) return;
    try {
      const { data } = await createConfig({ variables: { data: form } });
      if (data?.createConfig?.id) {
        // Redirige a la página de edición avanzada
        router.push(`/admin/configs/${data.createConfig.id}`);
      }
    } catch (err) {
      // Manejo de error opcional
    }
  };

  return (
    <Box className="max-w-lg mx-auto p-6 border rounded-lg bg-white">
      <Heading size="5" className="mb-4">Crear nueva configuración</Heading>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField.Root
          name="name"
          placeholder="Nombre único de configuración"
          value={form.name}
          onChange={handleChange}
          required
        />
        <TextField.Root
          name="pageTitle"
          placeholder="Título de la landing"
          value={form.pageTitle}
          onChange={handleChange}
          required
        />
        <TextField.Root
          name="servicesDescription"
          placeholder="Descripción de servicios"
          value={form.servicesDescription}
          onChange={handleChange}
          required
        />
        <TextField.Root
          name="pageDescription"
          placeholder="Descripción de la página (opcional)"
          value={form.pageDescription}
          onChange={handleChange}
        />
        {/* Subida de banner */}
        <Box>
          <label className="block text-sm font-medium mb-1">Banner principal</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, "bannerUrl")}
            className="mb-2"
          />
          {(bannerPreview || form.bannerUrl) && (
            <img
              src={bannerPreview || form.bannerUrl}
              alt="Banner preview"
              className="h-16 w-auto rounded shadow mb-2"
            />
          )}
        </Box>
        {/* Subida de icono */}
        <Box>
          <label className="block text-sm font-medium mb-1">Icono</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, "iconUrl")}
            className="mb-2"
          />
          {(iconPreview || form.iconUrl) && (
            <img
              src={iconPreview || form.iconUrl}
              alt="Icon preview"
              className="h-12 w-12 rounded-full shadow mb-2"
            />
          )}
        </Box>
        <TextField.Root
          name="footerInfo"
          placeholder="Información de pie de página (opcional)"
          value={form.footerInfo}
          onChange={handleChange}
        />
        <Flex gap="3" className="mt-4">
          <Button type="submit" color="green" disabled={loading}>
            Crear configuración
          </Button>
        </Flex>
        {error && (
          <div className="text-red-600 mt-2">{error.message}</div>
        )}
      </form>
    </Box>
  );
}
