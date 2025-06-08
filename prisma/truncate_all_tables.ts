// prisma/truncate_all_tables.ts
// Script para borrar todas las filas de todas las tablas principales de la base de datos Atlas
// Ejecutar con: npx tsx prisma/truncate_all_tables.ts
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

/**
 * @function main
 * @description Elimina todas las filas de las tablas principales de la base de datos Atlas.
 */

async function main() {
  console.info("⏳  Borrando todas las filas de la base de datos…");
  await prisma.$transaction([
    prisma.message.deleteMany(),
    prisma.chat.deleteMany(),
    prisma.file.deleteMany(),
    prisma.report.deleteMany(),
    prisma.case.deleteMany(),
    prisma.client.deleteMany(),
    prisma.professional.deleteMany(),
    prisma.image.deleteMany(),
    prisma.section.deleteMany(),
    prisma.article.deleteMany(),
    prisma.legalStep.deleteMany(),
    prisma.footerLink.deleteMany(),
    prisma.unitServer.deleteMany(),
    prisma.unitConfig.deleteMany(),
    prisma.constellation.deleteMany(),
    prisma.user.deleteMany(),
    prisma.serverLog.deleteMany(),
  ]);
  console.info("✅  Todas las filas han sido eliminadas.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect(); // Cierra la conexión a la base de datos
    console.info("🔌  Conexión a la base de datos cerrada");
  });
