# Atlas: Plataforma de Gestión de Landings y Configuraciones

Atlas es una plataforma desarrollada con Next.js, TypeScript y GraphQL para la gestión centralizada de landings dinámicas, configuraciones, usuarios y documentación. Permite la administración eficiente de servicios, perfiles profesionales y generación de landings personalizadas, integrando un backend robusto y una interfaz moderna y accesible.

## Características principales

- Gestión de landings dinámicas y generadas.
- Administración de configuraciones, usuarios y servidores.
- Documentación exhaustiva en backend y frontend.
- UI moderna y consistente con componentes personalizados (AtlasButton, AtlasLogo, etc.).
- Autenticación y control de acceso.
- Integración con Prisma y base de datos relacional.
- Despliegue optimizado en Vercel.

## Requisitos previos

- Node.js >= 18.x
- npm, yarn, pnpm o bun
- Acceso a una base de datos PostgreSQL (local o en la nube)
- (Opcional) Cuenta en Vercel para despliegue

## Configuración inicial

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd atlas
   ```
2. **Instala las dependencias:**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   # o
   bun install
   ```
3. **Configura las variables de entorno:**
   - Copia el archivo `.env.example` a `.env.local` y completa los valores necesarios (conexión a la base de datos, claves secretas, etc.).
   - Variables requeridas:
     ```env
     DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/db"
     NEXTAUTH_URL="http://localhost:3000"
     NEXTAUTH_SECRET="tu_clave_secreta"
     NEXT_PUBLIC_FIREBASE_API_KEY="tu_api_key"
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="tu_auth_domain"
     NEXT_PUBLIC_FIREBASE_PROJECT_ID="tu_project_id"
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="tu_storage_bucket"
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="tu_sender_id"
     NEXT_PUBLIC_FIREBASE_APP_ID="tu_app_id"
     NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="tu_measurement_id"
     ```
4. **Aplica las migraciones de la base de datos:**
   ```bash
   npx prisma migrate deploy
   # o
   npx prisma db push
   ```
5. **(Opcional) Pobla la base de datos con datos de ejemplo:**
   ```bash
   npx prisma db seed
   ```

## Despliegue en Vercel

1. Sube el repositorio a GitHub, GitLab o Bitbucket.
2. Ve a [Vercel](https://vercel.com/import) y conecta tu repositorio.
3. Configura las variables de entorno en el panel de Vercel (`DATABASE_URL`, `NEXTAUTH_SECRET`, etc.).
4. Despliega el proyecto. Vercel detectará automáticamente Next.js y realizará el build.

## Ejecución en local

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   # o
   bun dev
   ```
2. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del proyecto

- `src/app/` — Páginas y layouts principales (Next.js App Router)
- `src/components/` — Componentes reutilizables y UI personalizada
- `src/graphql/` — Esquema, resolvers, queries y mutations GraphQL
- `src/services/` — Lógica de negocio y servicios de backend
- `src/db/` — Cliente y repositorios Prisma
- `src/types/` — Tipos TypeScript compartidos
- `prisma/` — Esquema y migraciones de base de datos

## Scripts útiles

- `dev` — Inicia el servidor de desarrollo
- `build` — Compila la aplicación para producción
- `start` — Inicia el servidor en modo producción
- `prisma migrate dev` — Aplica migraciones en desarrollo
- `prisma studio` — Abre Prisma Studio para explorar la base de datos

## Notas

- El directorio `src/generated/` está ignorado en el control de versiones.
- Consulta la documentación interna y los comentarios en el código para entender la arquitectura y los puntos de extensión.

---

Desarrollado por Pedro para el Proyecto Final DAW. Para dudas o mejoras, abre un issue o contacta al autor.
