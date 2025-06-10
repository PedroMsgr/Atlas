// Prisma seed script para generar datos de prueba en la base de datos
// Para ejecutar: npx prisma db seed
import {
  PrismaClient,
  Role,
  CaseStatus,
  Sender,
  ClientStatus,
} from "../src/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

/**
 * Convierte un texto a slug sencillo (lowercase-kebab), eliminando diacríticos y caracteres especiales.
 */
function slug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * @function main
 * @description Limpia la base de datos y genera datos de prueba para el entorno de desarrollo.
 * @returns {Promise<void>} Promesa que se resuelve cuando se completa la inserción de datos.
 * @throws {Error} Si ocurre un error durante la conexión a la base de datos o la inserción de datos.
 */
async function main() {
  console.info("⏳  Limpiando la base de datos…");
  // Elimina datos respetando dependencias
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
  ]);
  console.info("✅  Base de datos limpia");

  // Eliminar servidores y configuraciones en un orden que respete las dependencias
  await prisma.$transaction(async (tx) => {
    // Eliminar la relación entre unitServer y unitConfig
    await tx.unitServer.updateMany({
      data: { configId: null },
    });

    await tx.unitConfig.deleteMany();
    await tx.unitServer.deleteMany();
    await tx.constellation.deleteMany();
    await tx.user.deleteMany();
  });

  console.info("🚀  Insertando datos de prueba…");

  // Usuarios
  const admin = await prisma.user.create({
    data: {
      email: "admin@atlasnode.com",
      password: bcrypt.hashSync("Admin2050!", 10),
      role: Role.admin,
      firstName: "Atlas",
      lastName: "Admin",
      phone: "600111222",
    },
  });

  const professionalUsers = await Promise.all(
    Array.from({ length: 5 }).map((_, i) =>
      prisma.user.create({
        data: {
          email: `pro${i + 1}@atlasnode.com`,
          password: bcrypt.hashSync(`Pro${i + 1}Pass!`, 10),
          role: Role.professional,
          firstName: `Profesional${i + 1}`,
          lastName: "Legal",
        },
      })
    )
  );

  const clientUsers = await Promise.all(
    Array.from({ length: 10 }).map((_, i) =>
      prisma.user.create({
        data: {
          email: `cliente${i + 1}@example.com`,
          password: bcrypt.hashSync(`Client${i + 1}Key#`, 10),
          role: Role.client,
          firstName: `Cliente${i + 1}`,
          lastName: "Usuario",
        },
      })
    )
  );

  // Constelaciones y servidores unitarios
  const topics = ["Laboral", "Familia", "Accidentes"];
  const constellations = await Promise.all(
    topics.map((name) =>
      prisma.constellation.create({
        data: {
          name,
          description: `Micrositio de derecho ${name.toLowerCase()}`,
        },
      })
    )
  );

  // Crear servidores unitarios y configuraciones
  const unitServers: any[] = [];
  const unitConfigs: any[] = [];
  for (const constellation of constellations) {
    for (let i = 1; i <= 2; i++) {
      const now = new Date();
      const server = await prisma.unitServer.create({
        data: {
          domain: `${slug(constellation.name)}-${i}.atlasnode.com`,
          name: `Portal ${constellation.name} ${i}`,
          orchestratorToken: `orch-${slug(constellation.name)}-${i}`,
          unitToken: `unit-${slug(constellation.name)}-${i}`,
          constellationId: constellation.id,
          createdAt: now,
          updatedAt: now,
        },
      });
      unitServers.push(server);
      const config = await prisma.unitConfig.create({
        data: {
          name: `Config ${server.name}`,
          pageTitle: `Abogados especialistas en ${constellation.name}`,
          pageDescription: `Portal especializado en derecho ${constellation.name.toLowerCase()}.`,
          servicesDescription: `Servicios legales para casos de ${constellation.name.toLowerCase()}.`,
          footerInfo: "© 2025 Atlas Legal",
        },
      });
      unitConfigs.push({ config, server });

      // Establecer este config como activo en el servidor
      await prisma.unitServer.update({
        where: { id: server.id },
        data: { configId: config.id },
      });
    }
  }

  // Profesionales y clientes vinculados
  const professionals = await Promise.all(
    professionalUsers.map((u, idx) =>
      prisma.professional.create({
        data: {
          userId: u.id,
        },
      })
    )
  );
  const clients = await Promise.all(
    clientUsers.map((u, idx) =>
      prisma.client.create({
        data: {
          userId: u.id,
          serverId: unitServers[idx % unitServers.length].id,
          status: ClientStatus.active,
        },
      })
    )
  );

  // Casos, chat, mensajes, archivos y reportes
  const TAGS = [
    "laboral",
    "familiar",
    "accidente",
    "despido",
    "herencia",
    "divorcio",
    "reclamación",
    "urgente",
    "consulta",
    "penal",
    "civil",
  ];
  const cases = await Promise.all(
    clients.map((cl, idx) =>
      prisma.case.create({
        data: {
          clientId: cl.id,
          professionalId: professionals[idx % professionals.length].id,
          serverId: cl.serverId,
          status: idx % 3 === 0 ? CaseStatus.open : CaseStatus.inProgress,
          tags: [
            TAGS[idx % TAGS.length],
            TAGS[(idx + 1) % TAGS.length],
            ...(idx % 4 === 0 ? ["urgente"] : []),
          ],
        },
      })
    )
  );

  for (const c of cases) {
    const chat = await prisma.chat.create({
      data: {
        caseId: c.id,
        messages: {
          create: [
            {
              sender: Sender.client,
              content: "Hola, ¿qué novedades hay sobre mi caso?",
            },
            {
              sender: Sender.professional,
              content: "Estamos avanzando, te envío documentos en breve.",
            },
          ],
        },
      },
    });

    if (cases.indexOf(c) < 2) {
      await prisma.report.create({
        data: {
          caseId: c.id,
          clientId: c.clientId,
          reason: "Retraso en respuesta",
        },
      });
    }
  }

  // Secciones, artículos, pasos legales y footer links (sin imágenes ni iconos)
  for (const { config, server } of unitConfigs) {
    // Secciones
    await prisma.section.createMany({
      data: [
        {
          configId: config.id,
          title: "Bienvenida",
          body: "Bienvenido a nuestro portal.",
          imageUrl: null,
          order: 1,
        },
        {
          configId: config.id,
          title: "Guía Legal",
          body: "Te guiamos paso a paso en tu proceso legal.",
          imageUrl: null,
          order: 2,
        },
        {
          configId: config.id,
          title: "Artículo Destacado",
          body: "Contenido curado manualmente.",
          imageUrl: null,
          order: 3,
        },
        {
          configId: config.id,
          title: "Noticias",
          body: "Noticias legales relevantes.",
          imageUrl: null,
          order: 4,
        },
      ],
    });

    // Artículos
    await prisma.article.create({
      data: {
        configId: config.id,
        title: `Artículo destacado de ${server.name}`,
        content: "Este es un artículo de ejemplo para la landing.",
        url: null,
        order: 1,
      },
    });
    await prisma.article.create({
      data: {
        configId: config.id,
        title: `Guía rápida de ${server.name}`,
        content: "Guía rápida para usuarios del portal.",
        url: null,
        order: 2,
      },
    });

    // Pasos legales (sin iconos)
    await prisma.legalStep.createMany({
      data: [
        {
          configId: config.id,
          title: "Evaluación inicial",
          description: "Analizamos tu caso y te orientamos.",
          order: 1,
        },
        {
          configId: config.id,
          title: "Revisión documental",
          description: "Revisamos toda la documentación relevante.",
          order: 2,
        },
        {
          configId: config.id,
          title: "Negociación",
          description: "Negociamos con la parte contraria.",
          order: 3,
        },
        {
          configId: config.id,
          title: "Acción legal",
          description: "Si es necesario, iniciamos acciones legales.",
          order: 4,
        },
        {
          configId: config.id,
          title: "Resolución",
          description: "Te acompañamos hasta la resolución del caso.",
          order: 5,
        },
      ],
    });

    // Footer links
    await prisma.footerLink.createMany({
      data: [
        {
          configId: config.id,
          label: "Aviso Legal",
          url: "/aviso-legal",
          order: 1,
        },
        {
          configId: config.id,
          label: "Política de Privacidad",
          url: "/privacidad",
          order: 2,
        },
        { configId: config.id, label: "Contacto", url: "/contacto", order: 3 },
      ],
    });
  }

  console.info("✅  Base de datos de prueba generada con éxito");
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
