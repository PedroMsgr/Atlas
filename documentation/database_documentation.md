# Documentación de la Base de Datos AtlasNode

## Descripción General
Esta documentación describe la estructura de la base de datos de AtlasNode, un sistema de gestión de casos legales y comunicación entre clientes y profesionales.

## Tablas Principales

### User
Tabla central que almacena la información de todos los usuarios del sistema.
- **Campos clave:**
  - `id`: Identificador único del usuario (UUID)
  - `email`: Correo electrónico del usuario
  - `role`: Rol del usuario en el sistema
  - `isActive`: Estado de la cuenta
  - `lastLoginAt`: Último inicio de sesión

### Session
Gestiona las sesiones activas de los usuarios.
- **Relaciones:**
  - Conecta con `User` y `UnitServer`
- **Campos importantes:**
  - `token`: Token único de sesión
  - `expiresAt`: Fecha de expiración de la sesión

### Client y Professional
Tablas que extienden la información de usuarios específicos.
- **Nota:** Ambas tablas heredan de `User` y están asociadas a un `UnitServer`

### Case
Representa los casos legales en el sistema.
- **Relaciones clave:**
  - Conecta `Client` con `Professional`
  - Asociado a un `UnitServer` específico
- **Campos de seguimiento:**
  - `status`: Estado actual del caso
  - `createdAt` y `updatedAt`: Control temporal

## Sistema de Comunicación

### Chat y Message
Sistema de mensajería integrado para la comunicación de casos.
- **Chat:**
  - Un chat por caso (relación 1:1 con `Case`)
- **Message:**
  - Almacena todos los mensajes del chat
  - Incluye información del remitente y timestamp

### File
Gestiona los archivos asociados a casos.
- **Características:**
  - Vinculado a casos, clientes y profesionales
  - Almacena metadatos como nombre, tipo y URL

## Sistema de Configuración

### UnitServer
Nodo central de configuración del sistema.
- **Características principales:**
  - Dominio único
  - Tokens de autenticación
  - Gestión de actualizaciones
  - Relación con `Constellation`

### UnitConfig
Configuración específica de cada unidad.
- **Elementos configurables:**
  - Título de página
  - Información de pie de página
  - Enlaces externos
  - Secciones de información
  - Parámetros de noticias

### Section y ManualArticle
Contenido configurable para cada unidad.
- **Section:**
  - Secciones personalizables
  - Orden configurable
- **ManualArticle:**
  - Artículos del manual
  - Control de publicación

## Sistema de Notificaciones

### UserNotification
Sistema de notificaciones para usuarios.
- **Características:**
  - Tipos de notificación personalizables
  - Control de lectura
  - Vinculado a usuarios y servidores

### UpdateLog
Registro de actualizaciones del sistema.
- **Seguimiento de:**
  - Actualizaciones exitosas/fallidas
  - Mensajes de error
  - Timestamps de actualización

## Relaciones y Dependencias

### Jerarquía Principal
1. `User` → Base de usuarios
2. `Client/Professional` → Roles específicos
3. `Case` → Casos legales
4. `Chat/Message` → Comunicación
5. `File` → Gestión documental

### Sistema de Configuración
1. `UnitServer` → Nodo principal
2. `UnitConfig` → Configuración
3. `Section/ManualArticle` → Contenido
4. `Image` → Recursos multimedia

## Notas de Implementación
- Todos los IDs son UUIDs para garantizar unicidad
- Se implementa control temporal (createdAt/updatedAt) en tablas críticas
- Sistema de tokens para autenticación y autorización
- Soporte para múltiples servidores y configuraciones 