"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");

// Creamos un cliente Prisma con tiempos de espera más largos
var prisma = new client_1.PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        }
    },
    log: ['warn', 'error'],
});

// Función auxiliar para eliminar datos con manejo de errores
function eliminarDatos(modelo, nombreModelo) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log("Eliminando datos de ".concat(nombreModelo, "..."));
                    return [4 /*yield*/, modelo.deleteMany()];
                case 1:
                    _a.sent();
                    console.log("Datos de ".concat(nombreModelo, " eliminados con \u00E9xito"));
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.warn("Error al eliminar ".concat(nombreModelo, ": ").concat(error_1.message));
                    // Continuamos a pesar de los errores
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}

function main() {
    return __awaiter(this, void 0, void 0, function () {
        var admin, profesionales, nuevoProfesional, clientes, constelaciones, servidores, profesionalesVinculados, clientesVinculados, casos, chats;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Iniciando la carga de datos...");
                    
                    // Limpiar la base de datos de forma secuencial (más seguro que en transacción)
                    return [4 /*yield*/, eliminarDatos(prisma.mensaje, "mensajes")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, eliminarDatos(prisma.chat, "chats")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, eliminarDatos(prisma.archivo, "archivos")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, eliminarDatos(prisma.reporte, "reportes")];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, eliminarDatos(prisma.caso, "casos")];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, eliminarDatos(prisma.noticiasConfig, "noticiasConfig")];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, eliminarDatos(prisma.fuenteAutomatica, "fuenteAutomatica")];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, eliminarDatos(prisma.manualArticle, "manualArticles")];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, eliminarDatos(prisma.seccion, "secciones")];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, eliminarDatos(prisma.cliente, "clientes")];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, eliminarDatos(prisma.profesional, "profesionales")];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, eliminarDatos(prisma.servidorUnitario, "servidoresUnitarios")];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, eliminarDatos(prisma.constelacion, "constelaciones")];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, eliminarDatos(prisma.usuario, "usuarios")];
                case 14:
                    _a.sent();

                    console.log("Base de datos limpiada. Creando nuevos datos...");
                    
                    return [4 /*yield*/, prisma.usuario.create({
                            data: {
                                email: 'admin@atlas.com',
                                rol: 'admin',
                                firstName: 'Admin',
                                lastName: 'Principal',
                                telefono: '666777888',
                                isActive: true,
                            },
                        })];
                case 15:
                    admin = _a.sent();
                    // ... el resto del código sigue igual
                    return [4 /*yield*/, Promise.all(Array.from({ length: 5 }).map(function (_, i) {
                            return prisma.usuario.create({
                                data: {
                                    email: "pro".concat(i + 1, "@atlas.com"),
                                    rol: 'profesional',
                                    firstName: "Profesional".concat(i + 1),
                                    lastName: "Apellido".concat(i + 1),
                                    telefono: "66677".concat(i, "888"),
                                    isActive: true,
                                },
                            });
                        }))];
                case 16:
                    profesionales = _a.sent();
                    return [4 /*yield*/, prisma.usuario.create({
                            data: {
                                email: 'nuevo_profesional@atlas.com',
                                rol: 'profesional',
                                firstName: 'Nuevo',
                                lastName: 'Profesional',
                                telefono: '666778899',
                                isActive: true,
                            },
                        })];
                case 17:
                    nuevoProfesional = _a.sent();
                    // Agregar el nuevo profesional a la lista de profesionales
                    profesionales.push(nuevoProfesional);
                    return [4 /*yield*/, Promise.all(Array.from({ length: 10 }).map(function (_, i) {
                            return prisma.usuario.create({
                                data: {
                                    email: "cliente".concat(i + 1, "@mail.com"),
                                    rol: 'cliente',
                                    firstName: "Cliente".concat(i + 1),
                                    lastName: "Apellido".concat(i + 1),
                                    telefono: "66688".concat(i, "999"),
                                    isActive: true,
                                },
                            });
                        }))];
                case 18:
                    clientes = _a.sent();
                    return [4 /*yield*/, Promise.all(['Madrid', 'Barcelona', 'Valencia'].map(function (nombre) {
                            return prisma.constelacion.create({
                                data: {
                                    nombre: nombre,
                                    descripcion: "Constelaci\u00F3n de ".concat(nombre),
                                },
                            });
                        }))];
                case 19:
                    constelaciones = _a.sent();
                    return [4 /*yield*/, Promise.all(constelaciones.flatMap(function (constelacion) {
                            return Array.from({ length: 2 }).map(function (_, i) {
                                return prisma.servidorUnitario.create({
                                    data: {
                                        dominio: "servidor-".concat(constelacion.nombre.toLowerCase(), "-").concat(i + 1, ".atlas.com"),
                                        nombre: "Servidor ".concat(constelacion.nombre, " ").concat(i + 1),
                                        apiToken: "token-".concat(constelacion.nombre.toLowerCase(), "-").concat(i + 1),
                                        constelacionId: constelacion.id,
                                    },
                                });
                            });
                        }))];
                case 20:
                    servidores = _a.sent();
                    return [4 /*yield*/, Promise.all(profesionales.map(function (pro, i) {
                            return prisma.profesional.create({
                                data: {
                                    usuarioId: pro.id,
                                    servidorId: servidores[i % servidores.length].id,
                                },
                            });
                        }))];
                case 21:
                    profesionalesVinculados = _a.sent();
                    return [4 /*yield*/, Promise.all(clientes.map(function (cliente, i) {
                            return prisma.cliente.create({
                                data: {
                                    usuarioId: cliente.id,
                                    servidorId: servidores[i % servidores.length].id,
                                },
                            });
                        }))];
                case 22:
                    clientesVinculados = _a.sent();
                    return [4 /*yield*/, Promise.all(clientesVinculados.flatMap(function (cliente) {
                            return Array.from({ length: 2 }).map(function (_, i) {
                                return prisma.caso.create({
                                    data: {
                                        clienteId: cliente.id,
                                        profesionalId: profesionalesVinculados[i % profesionalesVinculados.length].id,
                                        servidorId: cliente.servidorId,
                                        status: ['abierto', 'enProceso', 'enEspera', 'cerrado'][Math.floor(Math.random() * 4)],
                                    },
                                });
                            });
                        }))];
                case 23:
                    casos = _a.sent();
                    return [4 /*yield*/, Promise.all(casos.map(function (caso) {
                            return prisma.chat.create({
                                data: {
                                    casoId: caso.id,
                                    mensajes: {
                                        create: Array.from({ length: 3 }).map(function (_, i) { return ({
                                            remitente: i % 2 === 0 ? 'cliente' : 'profesional',
                                            contenido: "Mensaje ".concat(i + 1, " del caso ").concat(caso.id),
                                        }); }),
                                    },
                                },
                            });
                        }))];
                case 24:
                    chats = _a.sent();
                    // Crear secciones para cada servidor
                    return [4 /*yield*/, Promise.all(servidores.flatMap(function (servidor) {
                            return ['texto', 'guiaLegal', 'manual', 'noticiasConfig'].map(function (tipo, i) {
                                return prisma.seccion.create({
                                    data: {
                                        servidorId: servidor.id,
                                        tipo: tipo,
                                        titulo: "Secci\u00F3n ".concat(tipo, " - ").concat(servidor.nombre),
                                        contenido: "Contenido de la secci\u00F3n ".concat(tipo),
                                        orden: i + 1,
                                    },
                                });
                            });
                        }))];
                case 25:
                    // Crear secciones para cada servidor
                    _a.sent();
                    // Crear noticias config para cada servidor
                    return [4 /*yield*/, Promise.all(servidores.map(function (servidor) {
                            return prisma.noticiasConfig.create({
                                data: {
                                    servidorId: servidor.id,
                                    palabraClave: 'legal',
                                    limite: 10,
                                },
                            });
                        }))];
                case 26:
                    // Crear noticias config para cada servidor
                    _a.sent();
                    // Crear fuentes automáticas
                    return [4 /*yield*/, Promise.all(servidores.flatMap(function (servidor) {
                            return Array.from({ length: 2 }).map(function (_, i) {
                                return prisma.fuenteAutomatica.create({
                                    data: {
                                        servidorId: servidor.id,
                                        nombre: "Fuente ".concat(i + 1, " - ").concat(servidor.nombre),
                                        url: "https://fuente".concat(i + 1, ".com"),
                                        tipo: 'RSS',
                                    },
                                });
                            });
                        }))];
                case 27:
                    // Crear fuentes automáticas
                    _a.sent();
                    // Crear artículos manuales
                    return [4 /*yield*/, Promise.all(servidores.flatMap(function (servidor) {
                            return Array.from({ length: 3 }).map(function (_, i) {
                                return prisma.manualArticle.create({
                                    data: {
                                        servidorId: servidor.id,
                                        titulo: "Art\u00EDculo ".concat(i + 1, " - ").concat(servidor.nombre),
                                        contenido: "Contenido del art\u00EDculo ".concat(i + 1),
                                        publishedAt: new Date(),
                                    },
                                });
                            });
                        }))];
                case 28:
                    // Crear artículos manuales
                    _a.sent();
                    // Crear archivos para algunos casos
                    return [4 /*yield*/, Promise.all(casos.flatMap(function (caso) {
                            return Array.from({ length: 2 }).map(function (_, i) {
                                return prisma.archivo.create({
                                    data: {
                                        casoId: caso.id,
                                        clienteId: caso.clienteId,
                                        nombre: "archivo".concat(i + 1, ".pdf"),
                                        url: "https://storage.atlas.com/archivo".concat(i + 1, ".pdf"),
                                        tipo: 'pdf',
                                    },
                                });
                            });
                        }))];
                case 29:
                    // Crear archivos para algunos casos
                    _a.sent();
                    // Crear reportes para algunos casos
                    return [4 /*yield*/, Promise.all(casos.slice(0, 5).map(function (caso) {
                            return prisma.reporte.create({
                                data: {
                                    casoId: caso.id,
                                    clienteId: caso.clienteId,
                                    razon: 'Reporte de prueba',
                                },
                            });
                        }))];
                case 30:
                    // Crear reportes para algunos casos
                    _a.sent();
                    console.log('Base de datos poblada con éxito');
                    return [2 /*return*/];
            }
        });
    });
}

main()
    .catch(function (e) {
    console.error('Error durante la carga de datos:', e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Desconectando de la base de datos...');
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
