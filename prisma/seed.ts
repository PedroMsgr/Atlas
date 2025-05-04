// Prisma seed script para generar datos de prueba en la base de datos
// Para ejecutar: npx ts-node prisma/seedNewSchema.ts
import { PrismaClient, Role, CaseStatus, Sender, SectionType } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

/**
 * Convierte un texto a slug sencillo (lowercase-kebab) eliminando tildes.
 */
function slug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function main() {
  console.info('⏳  Limpiando la base de datos…');

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
    prisma.autoSource.deleteMany(),
    prisma.manualArticle.deleteMany(),
    prisma.section.deleteMany(),
    prisma.unitConfig.deleteMany(),
    prisma.unitServer.deleteMany(),
    prisma.constellation.deleteMany(),
    prisma.user.deleteMany(),
  ]);

  console.info('🚀  Insertando datos de prueba…');

  // Usuarios
  const admin = await prisma.user.create({
    data: {
      email: 'admin@atlasnode.com',
      password: bcrypt.hashSync('Admin2050!', 10),
      role: Role.admin,
      firstName: 'Atlas',
      lastName: 'Admin',
      phone: '600111222',
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
          lastName: 'Legal',
        },
      }),
    ),
  );

  const clientUsers = await Promise.all(
    Array.from({ length: 10 }).map((_, i) =>
      prisma.user.create({
        data: {
          email: `cliente${i + 1}@example.com`,
          password: bcrypt.hashSync(`Client${i + 1}Key#`, 10),
          role: Role.client,
          firstName: `Cliente${i + 1}`,
          lastName: 'Usuario',
        },
      }),
    ),
  );

  // Constelaciones y servidores unitarios
  const topics = ['Laboral', 'Familia', 'Accidentes'];
  const constellations = await Promise.all(
    topics.map(name =>
      prisma.constellation.create({ data: { name, description: `Micrositio de derecho ${name.toLowerCase()}` } }),
    ),
  );

  const unitServers: any[] = [];
  const unitConfigs: any[] = [];

  for (const constellation of constellations) {
    for (let i = 1; i <= 2; i++) {
      const server = await prisma.unitServer.create({
        data: {
          domain: `${slug(constellation.name)}-${i}.atlasnode.com`,
          name: `Portal ${constellation.name} ${i}`,
          orchestratorToken: `orch-${slug(constellation.name)}-${i}`,
          unitToken: `unit-${slug(constellation.name)}-${i}`,
          constellationId: constellation.id,
        },
      });
      unitServers.push(server);

      const config = await prisma.unitConfig.create({
        data: {
          name: `Config ${server.name}`,
          pageTitle: `Abogados especialistas en ${constellation.name}`,
          footerInfo: '© 2025 Atlas Legal',
          legalStepsCount: 5,
          pageType: 'landing',
          externalLinks: { facebook: 'https://facebook.com/atlaslegal' },
          newsParams: { keyword: constellation.name.toLowerCase(), limit: 5 },
          selectedNews: [],
          infoSections: [
            { title: '¿Cómo trabajamos?', content: 'Te explicamos el proceso legal paso a paso.' },
          ],
          servers: { connect: { id: server.id } },
        },
      });
      unitConfigs.push({ config, server });

      await prisma.unitServer.update({ where: { id: server.id }, data: { activeConfigId: config.id } });
    }
  }

  // Profesionales y clientes vinculados
  const professionals = await Promise.all(
    professionalUsers.map((u, idx) =>
      prisma.professional.create({ data: { userId: u.id, serverId: unitServers[idx % unitServers.length].id } }),
    ),
  );

  const clients = await Promise.all(
    clientUsers.map((u, idx) =>
      prisma.client.create({ data: { userId: u.id, serverId: unitServers[idx % unitServers.length].id } }),
    ),
  );

  // Casos, chat, mensajes, archivos y reportes
  const cases = await Promise.all(
    clients.map((cl, idx) =>
      prisma.case.create({
        data: {
          clientId: cl.id,
          professionalId: professionals[idx % professionals.length].id,
          serverId: cl.serverId,
          status: idx % 3 === 0 ? CaseStatus.open : CaseStatus.inProgress,
        },
      }),
    ),
  );

  for (const c of cases) {
    const chat = await prisma.chat.create({
      data: {
        caseId: c.id,
        messages: {
          create: [
            { sender: Sender.client, content: 'Hola, ¿qué novedades hay sobre mi caso?' },
            { sender: Sender.professional, content: 'Estamos avanzando, te envío documentos en breve.' },
          ],
        },
      },
    });

    await prisma.file.createMany({
      data: [
        { caseId: c.id, clientId: c.clientId, name: 'contrato.pdf', url: 'https://.../contrato.pdf', type: 'pdf' },
        { caseId: c.id, professionalId: c.professionalId, name: 'evidencia.jpg', url: 'https://.../evidencia.jpg', type: 'image' },
      ],
    });

    if (cases.indexOf(c) < 2) {
      await prisma.report.create({ data: { caseId: c.id, clientId: c.clientId, reason: 'Retraso en respuesta' } });
    }
  }

  // Secciones, artículos manuales, fuentes automáticas e imágenes
  for (const { config, server } of unitConfigs) {
    // Secciones
    await prisma.section.createMany({ data: [
      { configId: config.id, serverId: server.id, type: SectionType.text, title: 'Bienvenida', content: 'Bienvenido a nuestro portal.', order: 1 },
      { configId: config.id, serverId: server.id, type: SectionType.legalGuide, title: 'Guía Legal', content: JSON.stringify(['Paso 1', 'Paso 2', 'Paso 3']), order: 2 },
      { configId: config.id, serverId: server.id, type: SectionType.manual, title: 'Artículo Destacado', content: 'Contenido curado manualmente.', order: 3 },
      { configId: config.id, serverId: server.id, type: SectionType.newsConfig, title: 'Noticias', content: JSON.stringify({ enabled: true }), order: 4 },
    ]});

    // Artículos manuales
    await prisma.manualArticle.create({ data: {
      configId: config.id,
      serverId: server.id,
      title: `Manual de ${server.name}`,
      content: 'Este artículo provee instrucciones detalladas.',
    }});

    // Fuentes automáticas
    await prisma.autoSource.createMany({ data: [
      { configId: config.id, serverId: server.id, name: 'Blog Legal', url: 'https://blog.atlaslegal.com/rss', type: 'RSS' },
      { configId: config.id, serverId: server.id, name: 'Noticias Legales', url: 'https://noticias.legales.com/api', type: 'API' },
    ]});

    // Imágenes de la landing
    await prisma.image.createMany({ data: [
      { configId: config.id, url: 'https://.../hero.jpg', altText: 'Imagen Hero', type: 'hero', order: 1 },
      { configId: config.id, url: 'https://.../gallery1.jpg', altText: 'Galería 1', type: 'gallery', order: 2 },
    ]});
  }

  console.info('✅  Base de datos de prueba generada con éxito');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
