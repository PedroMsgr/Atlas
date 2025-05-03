import { PrismaClient, Rol, SeccionTipo, CasoStatus, Remitente } from '@prisma/client';	
const prisma = new PrismaClient();

async function main() {
  // Limpiar la base de datos (opcional)
  await prisma.$transaction([
    prisma.mensaje.deleteMany(),
    prisma.chat.deleteMany(),
    prisma.archivo.deleteMany(),
    prisma.reporte.deleteMany(),
    prisma.caso.deleteMany(),
    prisma.noticiasConfig.deleteMany(),
    prisma.fuenteAutomatica.deleteMany(),
    prisma.manualArticle.deleteMany(),
    prisma.seccion.deleteMany(),
    prisma.cliente.deleteMany(),
    prisma.profesional.deleteMany(),
    prisma.servidorUnitario.deleteMany(),
    prisma.constelacion.deleteMany(),
    prisma.usuario.deleteMany(),
  ]);

  // Crear usuarios
  const admin = await prisma.usuario.create({
    data: {
      email: 'admin@atlas.com',
      rol: 'admin',
      firstName: 'Admin',
      lastName: 'Principal',
      telefono: '666777888',
      isActive: true,
    },
  });

  const profesionales = await Promise.all(
    Array.from({ length: 5 }).map((_, i) =>
      prisma.usuario.create({
        data: {
          email: `pro${i + 1}@atlas.com`,
          rol: 'profesional',
          firstName: `Profesional${i + 1}`,
          lastName: `Apellido${i + 1}`,
          telefono: `66677${i}888`,
          isActive: true,
        },
      })
    )
  );

  // Crear un profesional adicional
  const nuevoProfesional = await prisma.usuario.create({
    data: {
      email: 'nuevo_profesional@atlas.com',
      rol: 'profesional',
      firstName: 'Nuevo',
      lastName: 'Profesional',
      telefono: '666778899',
      isActive: true,
    },
  });

  // Agregar el nuevo profesional a la lista de profesionales
  profesionales.push(nuevoProfesional);

  const clientes = await Promise.all(
    Array.from({ length: 10 }).map((_, i) =>
      prisma.usuario.create({
        data: {
          email: `cliente${i + 1}@mail.com`,
          rol: 'cliente',
          firstName: `Cliente${i + 1}`,
          lastName: `Apellido${i + 1}`,
          telefono: `66688${i}999`,
          isActive: true,
        },
      })
    )
  );

  // Crear constelaciones
  const constelaciones = await Promise.all(
    ['Madrid', 'Barcelona', 'Valencia'].map(nombre =>
      prisma.constelacion.create({
        data: {
          nombre,
          descripcion: `Constelación de ${nombre}`,
        },
      })
    )
  );

  // Crear servidores unitarios
  const servidores = await Promise.all(
    constelaciones.flatMap(constelacion =>
      Array.from({ length: 2 }).map((_, i) =>
        prisma.servidorUnitario.create({
          data: {
            dominio: `servidor-${constelacion.nombre.toLowerCase()}-${i + 1}.atlas.com`,
            nombre: `Servidor ${constelacion.nombre} ${i + 1}`,
            apiToken: `token-${constelacion.nombre.toLowerCase()}-${i + 1}`,
            constelacionId: constelacion.id,
          },
        })
      )
    )
  );

  // Crear profesionales vinculados
  const profesionalesVinculados = await Promise.all(
    profesionales.map((pro, i) =>
      prisma.profesional.create({
        data: {
          usuarioId: pro.id,
          servidorId: servidores[i % servidores.length].id,
        },
      })
    )
  );

  // Crear clientes vinculados
  const clientesVinculados = await Promise.all(
    clientes.map((cliente, i) =>
      prisma.cliente.create({
        data: {
          usuarioId: cliente.id,
          servidorId: servidores[i % servidores.length].id,
        },
      })
    )
  );

  // Crear casos
  const casos = await Promise.all(
    clientesVinculados.flatMap(cliente =>
      Array.from({ length: 2 }).map((_, i) =>
        prisma.caso.create({
          data: {
            clienteId: cliente.id,
            profesionalId: profesionalesVinculados[i % profesionalesVinculados.length].id,
            servidorId: cliente.servidorId,
            status: ['abierto', 'enProceso', 'enEspera', 'cerrado'][Math.floor(Math.random() * 4)] as CasoStatus,
          },
        })
      )
    )
  );

  // Crear chats para cada caso
  const chats = await Promise.all(
    casos.map(caso =>
      prisma.chat.create({
        data: {
          casoId: caso.id,
          mensajes: {
            create: Array.from({ length: 3 }).map((_, i) => ({
              remitente: i % 2 === 0 ? 'cliente' : 'profesional',
              contenido: `Mensaje ${i + 1} del caso ${caso.id}`,
            })),
          },
        },
      })
    )
  );

  // Crear secciones para cada servidor
  await Promise.all(
    servidores.flatMap(servidor =>
      ['texto', 'guiaLegal', 'manual', 'noticiasConfig'].map((tipo, i) =>
        prisma.seccion.create({
          data: {
            servidorId: servidor.id,
            tipo: tipo as SeccionTipo,
            titulo: `Sección ${tipo} - ${servidor.nombre}`,
            contenido: `Contenido de la sección ${tipo}`,
            orden: i + 1,
          },
        })
      )
    )
  );

  // Crear noticias config para cada servidor
  await Promise.all(
    servidores.map(servidor =>
      prisma.noticiasConfig.create({
        data: {
          servidorId: servidor.id,
          palabraClave: 'legal',
          limite: 10,
        },
      })
    )
  );

  // Crear fuentes automáticas
  await Promise.all(
    servidores.flatMap(servidor =>
      Array.from({ length: 2 }).map((_, i) =>
        prisma.fuenteAutomatica.create({
          data: {
            servidorId: servidor.id,
            nombre: `Fuente ${i + 1} - ${servidor.nombre}`,
            url: `https://fuente${i + 1}.com`,
            tipo: 'RSS',
          },
        })
      )
    )
  );

  // Crear artículos manuales
  await Promise.all(
    servidores.flatMap(servidor =>
      Array.from({ length: 3 }).map((_, i) =>
        prisma.manualArticle.create({
          data: {
            servidorId: servidor.id,
            titulo: `Artículo ${i + 1} - ${servidor.nombre}`,
            contenido: `Contenido del artículo ${i + 1}`,
            publishedAt: new Date(),
          },
        })
      )
    )
  );

  // Crear archivos para algunos casos
  await Promise.all(
    casos.flatMap(caso =>
      Array.from({ length: 2 }).map((_, i) =>
        prisma.archivo.create({
          data: {
            casoId: caso.id,
            clienteId: caso.clienteId,
            nombre: `archivo${i + 1}.pdf`,
            url: `https://storage.atlas.com/archivo${i + 1}.pdf`,
            tipo: 'pdf',
          },
        })
      )
    )
  );

  // Crear reportes para algunos casos
  await Promise.all(
    casos.slice(0, 5).map(caso =>
      prisma.reporte.create({
        data: {
          casoId: caso.id,
          clienteId: caso.clienteId,
          razon: 'Reporte de prueba',
        },
      })
    )
  );

  console.log('Base de datos poblada con éxito');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 