-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('cliente', 'profesional', 'admin');

-- CreateEnum
CREATE TYPE "Remitente" AS ENUM ('cliente', 'profesional');

-- CreateEnum
CREATE TYPE "SeccionTipo" AS ENUM ('texto', 'guiaLegal', 'manual', 'noticiasConfig');

-- CreateEnum
CREATE TYPE "CasoStatus" AS ENUM ('abierto', 'enProceso', 'enEspera', 'cerrado');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "rol" "Rol" NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "telefono" TEXT,
    "direccion" TEXT,
    "avatarUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLoginAt" TIMESTAMP(3),

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServidorUnitario" (
    "id" TEXT NOT NULL,
    "dominio" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apiToken" TEXT NOT NULL,
    "requiereActualizacion" BOOLEAN NOT NULL DEFAULT false,
    "constelacionId" TEXT NOT NULL,

    CONSTRAINT "ServidorUnitario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "servidorId" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profesional" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "servidorId" TEXT NOT NULL,

    CONSTRAINT "Profesional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Caso" (
    "id" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "profesionalId" TEXT NOT NULL,
    "servidorId" TEXT NOT NULL,
    "status" "CasoStatus" NOT NULL DEFAULT 'abierto',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Caso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "casoId" TEXT NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mensaje" (
    "id" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "remitente" "Remitente" NOT NULL,
    "contenido" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mensaje_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NoticiasConfig" (
    "id" TEXT NOT NULL,
    "servidorId" TEXT NOT NULL,
    "palabraClave" TEXT NOT NULL,
    "limite" INTEGER NOT NULL DEFAULT 10,

    CONSTRAINT "NoticiasConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FuenteAutomatica" (
    "id" TEXT NOT NULL,
    "servidorId" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "FuenteAutomatica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManualArticle" (
    "id" TEXT NOT NULL,
    "servidorId" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ManualArticle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Archivo" (
    "id" TEXT NOT NULL,
    "casoId" TEXT NOT NULL,
    "clienteId" TEXT,
    "profesionalId" TEXT,
    "nombre" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Archivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reporte" (
    "id" TEXT NOT NULL,
    "casoId" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "razon" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reporte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Constelacion" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "Constelacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seccion" (
    "id" TEXT NOT NULL,
    "servidorId" TEXT NOT NULL,
    "tipo" "SeccionTipo" NOT NULL,
    "titulo" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "orden" INTEGER NOT NULL,

    CONSTRAINT "Seccion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ServidorUnitario_dominio_key" ON "ServidorUnitario"("dominio");

-- CreateIndex
CREATE UNIQUE INDEX "ServidorUnitario_apiToken_key" ON "ServidorUnitario"("apiToken");

-- CreateIndex
CREATE UNIQUE INDEX "Chat_casoId_key" ON "Chat"("casoId");

-- CreateIndex
CREATE UNIQUE INDEX "NoticiasConfig_servidorId_key" ON "NoticiasConfig"("servidorId");

-- AddForeignKey
ALTER TABLE "ServidorUnitario" ADD CONSTRAINT "ServidorUnitario_constelacionId_fkey" FOREIGN KEY ("constelacionId") REFERENCES "Constelacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_servidorId_fkey" FOREIGN KEY ("servidorId") REFERENCES "ServidorUnitario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profesional" ADD CONSTRAINT "Profesional_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profesional" ADD CONSTRAINT "Profesional_servidorId_fkey" FOREIGN KEY ("servidorId") REFERENCES "ServidorUnitario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caso" ADD CONSTRAINT "Caso_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caso" ADD CONSTRAINT "Caso_profesionalId_fkey" FOREIGN KEY ("profesionalId") REFERENCES "Profesional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Caso" ADD CONSTRAINT "Caso_servidorId_fkey" FOREIGN KEY ("servidorId") REFERENCES "ServidorUnitario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_casoId_fkey" FOREIGN KEY ("casoId") REFERENCES "Caso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensaje" ADD CONSTRAINT "Mensaje_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NoticiasConfig" ADD CONSTRAINT "NoticiasConfig_servidorId_fkey" FOREIGN KEY ("servidorId") REFERENCES "ServidorUnitario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuenteAutomatica" ADD CONSTRAINT "FuenteAutomatica_servidorId_fkey" FOREIGN KEY ("servidorId") REFERENCES "ServidorUnitario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManualArticle" ADD CONSTRAINT "ManualArticle_servidorId_fkey" FOREIGN KEY ("servidorId") REFERENCES "ServidorUnitario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Archivo" ADD CONSTRAINT "Archivo_casoId_fkey" FOREIGN KEY ("casoId") REFERENCES "Caso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Archivo" ADD CONSTRAINT "Archivo_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Archivo" ADD CONSTRAINT "Archivo_profesionalId_fkey" FOREIGN KEY ("profesionalId") REFERENCES "Profesional"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reporte" ADD CONSTRAINT "Reporte_casoId_fkey" FOREIGN KEY ("casoId") REFERENCES "Caso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reporte" ADD CONSTRAINT "Reporte_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seccion" ADD CONSTRAINT "Seccion_servidorId_fkey" FOREIGN KEY ("servidorId") REFERENCES "ServidorUnitario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
