// src/components/config-components/CreateConfigBasicForm.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { CREATE_CONFIG } from "@/graphql/mutations/config.mutations";
import { uploadImage } from "@/lib/uploadImage";
import { Box, Button, Heading, Text, Flex, TextField } from "@radix-ui/themes";

interface ConfigCreateProps {
  onSuccess?: (id: string) => void;
}

/**
 * Formulario para crear una configuración básica.
 * Solo pide los datos principales y sube imágenes a Firebase.
 * Al crear, redirige a la página de edición avanzada.
 */
export default function ConfigCreate({ onSuccess }: ConfigCreateProps) {
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
        if (onSuccess) onSuccess(data.createConfig.id);
        else router.push(`/admin/configs/${data.createConfig.id}`);
      }
    } catch {
      // Manejo de error opcional
    }
  };

  return (
    <Box className="max-w-2xl w-full bg-white border rounded-lg p-8 shadow-sm">
      <Heading size="5" className="mb-2">Crear nueva configuración</Heading>
      <Text as="p" size="3" color="gray" className="mb-6">
        Completa los datos para registrar una nueva configuración. Los campos marcados con * son obligatorios.
      </Text>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Text as="label" size="2" weight="bold" htmlFor="config-name" className="block mb-1">
            Nombre de la configuración *
          </Text>
          <TextField.Root
            id="config-name"
            name="name"
            placeholder="Nombre de la configuración"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div>
          <Text as="label" size="2" weight="bold" htmlFor="config-pageTitle" className="block mb-1">
            Título de la landing *
          </Text>
          <TextField.Root
            id="config-pageTitle"
            name="pageTitle"
            placeholder="Título de la landing"
            value={form.pageTitle}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div>
          <Text as="label" size="2" weight="bold" htmlFor="config-servicesDescription" className="block mb-1">
            Descripción de servicios *
          </Text>
          <TextField.Root
            id="config-servicesDescription"
            name="servicesDescription"
            placeholder="Descripción de servicios"
            value={form.servicesDescription}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div>
          <Text as="label" size="2" weight="bold" htmlFor="config-pageDescription" className="block mb-1">
            Descripción de la página (opcional)
          </Text>
          <TextField.Root
            id="config-pageDescription"
            name="pageDescription"
            placeholder="Descripción de la página"
            value={form.pageDescription}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <Box>
          <Text as="label" size="2" weight="bold" className="block mb-1">
            Banner principal
          </Text>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, "bannerUrl")}
            className="mb-2"
          />
          {(bannerPreview || form.bannerUrl) && (
            // TODO: Migrar <img> a <Image /> para optimización Next.js
            <img
              src={bannerPreview || form.bannerUrl}
              alt="Banner preview"
              className="h-16 w-auto rounded shadow mb-2"
            />
          )}
        </Box>
        <Box>
          <Text as="label" size="2" weight="bold" className="block mb-1">
            Icono
          </Text>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, "iconUrl")}
            className="mb-2"
          />
          {(iconPreview || form.iconUrl) && (
            // TODO: Migrar <img> a <Image /> para optimización Next.js
            <img
              src={iconPreview || form.iconUrl}
              alt="Icon preview"
              className="h-12 w-12 rounded-full shadow mb-2"
            />
          )}
        </Box>
        <div>
          <Text as="label" size="2" weight="bold" htmlFor="config-footerInfo" className="block mb-1">
            Información de pie de página (opcional)
          </Text>
          <TextField.Root
            id="config-footerInfo"
            name="footerInfo"
            placeholder="Información de pie de página"
            value={form.footerInfo}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        {error && (
          <Text color="red" size="2">{error.message}</Text>
        )}
        <Flex justify="end" className="pt-2">
          <Button type="submit" disabled={loading} color="green">
            {loading ? 'Creando...' : 'Crear Configuración'}
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
