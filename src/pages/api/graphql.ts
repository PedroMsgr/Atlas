import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import prisma from '@/lib/prisma';

const typeDefs = gql`
  type Usuario {
    id: String
    email: String
    rol: String
    firstName: String
    lastName: String
    telefono: String
    direccion: String
    avatarUrl: String
    isActive: Boolean
    createdAt: String
    updatedAt: String
    lastLoginAt: String
  }

  type Cliente {
    id: String
    usuarioId: String
    servidorId: String
  }

  type Profesional {
    id: String
    usuarioId: String
    servidorId: String
  }

  type Caso {
    id: String
    clienteId: String
    profesionalId: String
    servidorId: String
    status: String
    createdAt: String
    updatedAt: String
  }

  type ServidorUnitario {
    id: String
    dominio: String
    nombre: String
    apiToken: String
    requiereActualizacion: Boolean
    constelacionId: String
  }

  type Constelacion {
    id: String
    nombre: String
    descripcion: String
  }

  type Seccion {
    id: String
    servidorId: String
    tipo: String
    titulo: String
    contenido: String
    orden: Int
  }

  type Chat {
    id: String
    casoId: String
  }

  type Mensaje {
    id: String
    chatId: String
    remitente: String
    contenido: String
    fecha: String
  }

  type NoticiasConfig {
    id: String
    servidorId: String
    palabraClave: String
    limite: Int
  }

  type FuenteAutomatica {
    id: String
    servidorId: String
    nombre: String
    url: String
    tipo: String
  }

  type ManualArticle {
    id: String
    servidorId: String
    titulo: String
    contenido: String
    publishedAt: String
  }

  type Archivo {
    id: String
    casoId: String
    clienteId: String
    profesionalId: String
    nombre: String
    url: String
    tipo: String
    fecha: String
  }

  type Reporte {
    id: String
    casoId: String
    clienteId: String
    razon: String
    createdAt: String
  }

  type Query {
    usuarios: [Usuario]
    clientes: [Cliente]
    profesionales: [Profesional]
    casos: [Caso]
    servidoresUnitarios: [ServidorUnitario]
    constelaciones: [Constelacion]
    secciones: [Seccion]
    chats: [Chat]
    mensajes: [Mensaje]
    noticiasConfigs: [NoticiasConfig]
    fuentesAutomaticas: [FuenteAutomatica]
    manualArticles: [ManualArticle]
    archivos: [Archivo]
    reportes: [Reporte]
  }
`;

const resolvers = {
  Query: {
    usuarios: () => prisma.usuario.findMany(),
    clientes: () => prisma.cliente.findMany(),
    profesionales: () => prisma.profesional.findMany(),
    casos: () => prisma.caso.findMany(),
    servidoresUnitarios: () => prisma.servidorUnitario.findMany(),
    constelaciones: () => prisma.constelacion.findMany(),
    secciones: () => prisma.seccion.findMany(),
    chats: () => prisma.chat.findMany(),
    mensajes: () => prisma.mensaje.findMany(),
    noticiasConfigs: () => prisma.noticiasConfig.findMany(),
    fuentesAutomaticas: () => prisma.fuenteAutomatica.findMany(),
    manualArticles: () => prisma.manualArticle.findMany(),
    archivos: () => prisma.archivo.findMany(),
    reportes: () => prisma.reporte.findMany(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => {
    return {
      prisma,
      req,
      res
    };
  },
}); 