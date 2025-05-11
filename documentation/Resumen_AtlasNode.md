
# Resumen del Proyecto AtlasNode

## Objetivo General
Crear un orquestador centralizado que gestione múltiples microsites legales (“unitarios”), unificando datos y lógica de negocio, y ofreciendo a cada nicho:
- Landing estática optimizada para SEO.
- Sección de noticias automáticas.
- Zona privada de cliente (perfil, chat, compartición de archivos, reportes).
- Portal de profesionales para abogados.
- Panel de administración central con supervisión, configuración y control de calidad.

## Arquitectura de Datos (Prisma Schema)

Se utiliza PostgreSQL con Prisma como ORM. El modelo de datos principal incluye las siguientes entidades:
- **User**: Información del usuario (cliente, profesional, administrador).
- **Client, Professional**: Relación con los servidores unitarios, casos, archivos y reportes.
- **Case**: Relaciona cliente, profesional y servidor; estado, chat, archivos, reportes.
- **Chat y Message**: Historial de conversaciones por caso.
- **File y Report**: Gestión de documentación y reportes de incidencias.
- **UnitServer, Constellation, UnitConfig**: Definiciones para servidores unitarios y configuraciones.
  
## Orquestador Central

El orquestador central expone el API GraphQL, gestiona autenticación y coordina despliegues:
- **Tecnologías**: Next.js + GraphQL + Prisma (+ NextAuth/JWT).
- **Endpoints**: Queries y Mutations para páginas, usuarios, chat, archivos, reportes, noticias.
- **Paneles**:
  - **/admin**: Administración global (configuración, validación IA, KPIs).
  - **/pro**: Portal para profesionales (gestión de casos, chat, archivos).
- **Procesos**:
  - Webhooks: Actualización de configuración de servidores unitarios.
  - Despliegue de unitarios a través de la API central.

## Panel de Administración Central

El panel permite gestionar servidores, usuarios y contenidos de forma unificada:
1. **Servidores Unitarios**: Listado, creación, tokens, prueba de conexión, analíticas.
2. **Configuraciones**: CRUD de configuraciones, asignación a servidores.
3. **Profesionales**: Alta/baja, asignación a servidores, estadísticas.
4. **Clientes**: Listado global, filtros, asignación, incidencias.
5. **Supervisión de Casos**: Estado, historial, búsquedas.
6. **Contenido Legal**: Artículos manuales, fuentes automáticas.
7. **Dashboard**: KPIs, métricas por servidor, tiempos de respuesta.
8. **Seguridad y Ajustes**: Gestión de administradores, logs, backups.

## Portal de Profesionales

Este espacio permite a los profesionales gestionar casos y comunicaciones:
1. **Dashboard**: Resumen de casos asignados, mensajes pendientes, alertas.
2. **Mis Casos**: Listado, filtros, detalles de cada caso.
3. **Detalle de Caso**: Chat, documentos adjuntos, informes.
4. **Documentos**: Repositorio por caso, plantillas, carga masiva.
5. **Calendario**: Vista mensual/semanal, exportación a calendarios.
6. **Recursos Legales**: Biblioteca de artículos y AutoSources.
7. **Notificaciones**: Ajustes de frecuencia y canal.
8. **Soporte**: FAQ, chat, logs de actividad.

## Flujo de Comunicación y Despliegue de Unitarios

1. **Creación en el Orquestador**: Definición de servidor unitario, generación de tokens.
2. **Despliegue del Unitario**: Despliegue en Vercel/Netlify con autenticación bidireccional.
3. **Prueba de Conexión**: Verificación de autenticación entre orquestador y unitario.
4. **Creación de Configuración**: Definición de parámetros para landing y scraping de noticias.
5. **Envío de Configuración**: Envío de flag de actualización a servidores.
6. **Gestión Posterior**: Clonación, sobrescritura de configuraciones, reenvío de flags.

## Microsites Unitarios

Cada microsite consume datos y configuraciones del orquestador para generar contenido estático y dinámico:
- **Landing estática**: Generación con `getStaticProps`.
- **Interactividad**: ISR on-demand, API GraphQL para chat, perfil, archivos y reportes.
- **Back-office**: Edición ligera de configuraciones.

## Despliegue y Operaciones

- **Orquestador**: Vercel (Serverless Functions), AWS Lambda/ECS-Fargate.
- **Unitarios**: Vercel, Netlify.
- **Base de Datos**: RDS/Railway con backups y réplicas.
- **Escalabilidad**: Contenedores, balanceo y tolerancia a fallos.
- **Monitorización**: Logs centralizados, alertas de incidencias y métricas de rendimiento.
