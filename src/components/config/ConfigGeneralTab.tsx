import React from "react";
import { Box, Button, TextField, Heading, Flex } from "@radix-ui/themes";

export default function ConfigGeneralTab({
  form,
  handleChange,
  handleFileSelect,
  handleRemoveImage,
  bannerPreview,
  bannerFile,
  iconPreview,
  iconFile,
  updateError,
  updating,
  handleSubmit,
  router,
}: any) {
  return (
    <Box className="w-full bg-white dark:bg-zinc-900 rounded-lg shadow-md">
      <form className="space-y-4 p-4" onSubmit={(e) => e.preventDefault()}>
        <Heading size="5" style={{ marginBottom: "1em" }}>
          Datos Generales y Configuración
        </Heading>
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
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="config-bannerUrl"
          >
            Banner principal
          </label>
          <input
            id="config-bannerUrl"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileSelect(e, "bannerUrl")}
            className="hidden"
          />
          <label htmlFor="config-bannerUrl">
            <Button
              asChild
              type="button"
              color="blue"
              size="1"
              className="mb-2 cursor-pointer"
            >
              <span>{bannerFile ? "Cambiar imagen" : "Subir imagen"}</span>
            </Button>
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
              <Button
                type="button"
                color="red"
                size="1"
                onClick={() => handleRemoveImage("bannerUrl")}
              >
                Eliminar
              </Button>
            </Flex>
          )}
        </Box>
        <Box>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="config-iconUrl"
          >
            Icono
          </label>
          <input
            id="config-iconUrl"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileSelect(e, "iconUrl")}
            className="hidden"
          />
          <label htmlFor="config-iconUrl">
            <Button
              asChild
              type="button"
              color="blue"
              size="1"
              className="mb-2 cursor-pointer"
            >
              <span>{iconFile ? "Cambiar icono" : "Subir icono"}</span>
            </Button>
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
              <Button
                type="button"
                color="red"
                size="1"
                onClick={() => handleRemoveImage("iconUrl")}
              >
                Eliminar
              </Button>
            </Flex>
          )}
        </Box>
        <TextField.Root
          name="footerInfo"
          placeholder="Información de pie de página"
          value={form.footerInfo || ""}
          onChange={handleChange}
        />
        {updateError && (
          <div className="text-red-600 mt-2">{updateError.message}</div>
        )}
        <Flex justify="end" align="center" className="gap-2">
          <Button
            type="button"
            variant="soft"
            onClick={() => router.push("/admin/configs")}
          >
            Cancelar
          </Button>
          <Button
            type="button"
            color="green"
            disabled={updating}
            onClick={handleSubmit}
          >
            Actualizar Configuración
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
