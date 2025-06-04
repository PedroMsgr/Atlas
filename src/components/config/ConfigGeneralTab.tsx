import React from "react";
import { Box, Button, TextField, Heading, Flex } from "@radix-ui/themes";

export default function ConfigGeneralTab({
  form,
  handleChange,
  handleFileUpload,
  updateError,
  updating,
  handleSubmit,
  router,
}: any) {
  return (
    <Box className="w-full">
      <form className="space-y-4 p-4" onSubmit={e => e.preventDefault()}>
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
              <Button
                type="button"
                color="red"
                size="1"
                onClick={() => handleChange({ target: { name: "bannerUrl", value: "" } })}
              >
                Eliminar
              </Button>
            </div>
          )}
        </Box>
        <Box>
          <label className="block text-sm font-medium mb-1">Icono</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, "iconUrl")}
            className="mb-2"
          />
          {form.iconUrl && (
            <div className="flex items-center space-x-2">
              <img src={form.iconUrl} alt="Icono actual" className="h-12 w-12 rounded-full" />
              <span className="text-sm break-all">{form.iconUrl}</span>
              <Button
                type="button"
                color="red"
                size="1"
                onClick={() => handleChange({ target: { name: "iconUrl", value: "" } })}
              >
                Eliminar
              </Button>
            </div>
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
          <Button type="button" variant="soft" onClick={() => router.push("/admin/configs")}>Cancelar</Button>
          <Button type="button" color="green" disabled={updating} onClick={handleSubmit}>
            Actualizar Configuración
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
