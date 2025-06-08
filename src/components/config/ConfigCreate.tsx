"use client";

// Componente para crear una configuración básica de unidad.
// Permite ingresar los datos principales y subir imágenes, redirigiendo a la edición avanzada tras crear.

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { CREATE_CONFIG } from "@/graphql/mutations/config.mutations";
import { uploadImage } from "@/lib/uploadImage";
import { Box, Button, Heading, Text, Flex, TextField } from "@radix-ui/themes";
import { AtlasButton } from "../ui/AtlasButton";

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
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [iconFile, setIconFile] = useState<File | null>(null);

  // Maneja el cambio de los inputs de texto
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Maneja la subida de archivos (solo guarda el archivo y preview, no sube a Firebase)
  const handleFileSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "bannerUrl" | "iconUrl"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (field === "bannerUrl") setBannerPreview(ev.target?.result as string);
      if (field === "iconUrl") setIconPreview(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
    if (field === "bannerUrl") {
      setBannerFile(file);
      setForm((prev) => ({ ...prev, bannerUrl: "" }));
    }
    if (field === "iconUrl") {
      setIconFile(file);
      setForm((prev) => ({ ...prev, iconUrl: "" }));
    }
  };

  // Eliminar archivo seleccionado antes de guardar
  const handleRemoveImage = (field: "bannerUrl" | "iconUrl") => {
    if (field === "bannerUrl") {
      setBannerFile(null);
      setBannerPreview("");
      setForm((prev) => ({ ...prev, bannerUrl: "" }));
    }
    if (field === "iconUrl") {
      setIconFile(null);
      setIconPreview("");
      setForm((prev) => ({ ...prev, iconUrl: "" }));
    }
  };

  // Envía la mutación para crear la configuración
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.pageTitle || !form.servicesDescription) return;
    let bannerUrl = form.bannerUrl;
    let iconUrl = form.iconUrl;
    try {
      // Solo sube imágenes a Firebase si el usuario confirma (submit)
      if (bannerFile) bannerUrl = await uploadImage(bannerFile);
      if (iconFile) iconUrl = await uploadImage(iconFile);
      const { data } = await createConfig({
        variables: { data: { ...form, bannerUrl, iconUrl } },
      });
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
      <Heading size="5" className="mb-2">
        Crear nueva configuración
      </Heading>
      <Text as="p" size="3" color="gray" className="mb-6">
        Completa los datos para registrar una nueva configuración. Los campos
        marcados con * son obligatorios.
      </Text>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Text
            as="label"
            size="2"
            weight="bold"
            htmlFor="config-name"
            className="block mb-1"
          >
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
          <Text
            as="label"
            size="2"
            weight="bold"
            htmlFor="config-pageTitle"
            className="block mb-1"
          >
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
          <Text
            as="label"
            size="2"
            weight="bold"
            htmlFor="config-servicesDescription"
            className="block mb-1"
          >
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
          <Text
            as="label"
            size="2"
            weight="bold"
            htmlFor="config-pageDescription"
            className="block mb-1"
          >
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
        <div>
          <Text
            as="label"
            size="2"
            weight="bold"
            htmlFor="config-bannerUrl"
            className="block mb-1"
          >
            Banner principal
          </Text>
          <input
            id="config-bannerUrl"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileSelect(e, "bannerUrl")}
            className="hidden"
          />
          <label htmlFor="config-bannerUrl">
            <AtlasButton
              type="button"
              variant="upload"
              className="mb-2 cursor-pointer"
              asChild={false}
              disabled={loading}
            >
              {bannerFile ? "Cambiar imagen" : "Subir imagen"}
            </AtlasButton>
          </label>
          {(bannerPreview || bannerFile) && bannerPreview && (
            <Flex align="center" gap="2">
              <img
                src={bannerPreview}
                alt="Banner preview"
                className="h-12 w-24 rounded"
              />
              <span className="text-sm break-all">
                {bannerFile ? bannerFile.name : ""}
              </span>
              <AtlasButton
                type="button"
                variant="delete"
                onClick={() => handleRemoveImage("bannerUrl")}
                disabled={loading}
              >
                Eliminar
              </AtlasButton>
            </Flex>
          )}
        </div>
        <div>
          <Text
            as="label"
            size="2"
            weight="bold"
            htmlFor="config-iconUrl"
            className="block mb-1"
          >
            Icono
          </Text>
          <input
            id="config-iconUrl"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileSelect(e, "iconUrl")}
            className="hidden"
          />
          <label htmlFor="config-iconUrl">
            <AtlasButton
              type="button"
              variant="upload"
              className="mb-2 cursor-pointer"
              asChild={false}
              disabled={loading}
            >
              {iconFile ? "Cambiar icono" : "Subir icono"}
            </AtlasButton>
          </label>
          {(iconPreview || iconFile) && iconPreview && (
            <Flex align="center" gap="2">
              <img
                src={iconPreview}
                alt="Icon preview"
                className="h-12 w-12 rounded-full"
              />
              <span className="text-sm break-all">
                {iconFile ? iconFile.name : ""}
              </span>
              <AtlasButton
                type="button"
                variant="delete"
                onClick={() => handleRemoveImage("iconUrl")}
                disabled={loading}
              >
                Eliminar
              </AtlasButton>
            </Flex>
          )}
        </div>
        <div>
          <Text
            as="label"
            size="2"
            weight="bold"
            htmlFor="config-footerInfo"
            className="block mb-1"
          >
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
          <Text color="red" size="2">
            {error.message}
          </Text>
        )}
        <Flex justify="end" className="pt-2">
          <AtlasButton type="submit" disabled={loading} variant="success">
            {loading ? "Creando..." : "Crear configuración"}
          </AtlasButton>
        </Flex>
      </form>
    </Box>
  );
}
