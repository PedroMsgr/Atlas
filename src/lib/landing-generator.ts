// src/lib/landing-generator.ts

/**
 * Dado un objeto `config` con estas propiedades:
 *  - config.pageTitle, config.pageDescription, config.iconUrl, config.bannerUrl, config.name, etc.
 *  - config.sections: [{ id, title, body, order, images: [{ id, url, altText, order }] }, …]
 *  - config.articles: [{ id, title, content, url, order, publishedAt }, …]
 *  - config.images: [{ id, url, altText, type, order }, …]  ⟶ Galería si la quieres usar
 *  - config.legalSteps: [{ id, title, description, order }, …]
 *  - config.footerLinks: [{ id, label, url, order }, …]
 *
 * Genera un string con el contenido de src/app/emulator/page.tsx
 * que:
 *  - importa Head y Script de Next.js
 *  - importa tu CSS de Tailwind (landing.css)
 *  - inyecta <Script src="/scripts/landing.js" strategy="afterInteractive" />
 *  - monta todos los bloques en JSX recorriendo config.sections, config.articles, etc.
 */
export function generateLandingTSX(config: any): string {
  // 1) Cabecera de imports
  const headerImports = `
import Head from "next/head";
import Script from "next/script";
import "../globals.css";

`;

  // 2) <Head> con título, descripción y favicon dinámico
  const headJSX = `
      <Head>
        <title>${escapeHtml(config.pageTitle)}</title>
        <meta name="description" content="${escapeHtml(config.pageDescription || "")}" />
        <link rel="icon" href="${escapeHtml(config.iconUrl || "/favicon.ico")}" />
      </Head>
  `;

  // 3) Banner principal (si existe config.bannerUrl)
  const bannerJSX = config.bannerUrl
    ? `
        <section id="inicio" className="w-full h-64 overflow-hidden">
          <img
            src="${escapeHtml(config.bannerUrl)}"
            alt="Banner principal"
            className="w-full h-full object-cover"
          />
        </section>
      `
    : "";

  // 4) Secciones: clonamos y ordenamos config.sections para no mutar nada readonly
  const sectionsArray = Array.isArray(config.sections) ? [...config.sections] : [];
  const sectionsJSX = sectionsArray
    .sort((a: any, b: any) => a.order - b.order)
    .map((sec: any) => {
      // Cada sección puede tener múltiples imágenes: clonamos y ordenamos
      const imagesArray = Array.isArray(sec.images) ? [...sec.images] : [];
      const imgs = imagesArray
        .sort((i: any, j: any) => (i.order || 0) - (j.order || 0))
        .map((img: any) => `
            <img
              src="${escapeHtml(img.url)}"
              alt="${escapeHtml(img.altText || "")}"
              className="w-full h-48 object-cover rounded shadow mb-4"
            />
          `)
        .join("");

      return `
          <section className="mb-8 p-4 bg-white rounded-lg shadow dark:bg-slate-800">
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">${escapeHtml(sec.title)}</h2>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              ${escapeHtml(sec.body || "")}
            </p>
            ${imgs ? `<div className="grid grid-cols-1 md:grid-cols-2 gap-4">${imgs}</div>` : ""}
          </section>
      `;
    })
    .join("");

  // 5) Artículos / Noticias
  const articlesArray = Array.isArray(config.articles) ? [...config.articles] : [];
  const articlesJSX = articlesArray
    .sort((a: any, b: any) => a.order - b.order)
    .map((art: any) => {
      const fecha = art.publishedAt
        ? new Date(art.publishedAt).toLocaleDateString("es-ES")
        : "";
      const enlace = art.url
        ? `<a href="${escapeHtml(art.url)}" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Leer noticia completa</a>`
        : "";
      return `
          <article className="mb-6 p-4 bg-slate-100 rounded-lg dark:bg-slate-700">
            <h3 className="text-xl font-medium mb-1 dark:text-white">${escapeHtml(art.title)}</h3>
            <p className="text-sm text-gray-500 mb-2">${fecha}</p>
            <p className="mb-3 text-slate-600 dark:text-slate-300">${escapeHtml(art.content || "")}</p>
            ${enlace}
          </article>
      `;
    })
    .join("");

  const sectionNoticiasJSX = articlesJSX
    ? `
        <section id="articulos" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Noticias</h2>
          ${articlesJSX}
        </section>
      `
    : "";

  // 6) Galería (imágenes globales). Si config.images está vacío, no se muestra.
  const imagesArray = Array.isArray(config.images) ? [...config.images] : [];
  const imagesGlobalJSX = imagesArray
    .sort((a: any, b: any) => (a.order || 0) - (b.order || 0))
    .map((img: any) => `
        <div className="mb-4">
          <img
            src="${escapeHtml(img.url)}"
            alt="${escapeHtml(img.altText || "")}"
            className="w-full h-48 object-cover rounded shadow"
          />
        </div>
      `)
    .join("");

  const sectionGaleriaJSX = imagesGlobalJSX
    ? `
        <section id="galeria" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Galería</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${imagesGlobalJSX}
          </div>
        </section>
      `
    : "";

  // 7) Proceso Legal (pestañas). Ordenamos config.legalSteps y generamos botones + paneles.
  const legalStepsArray = Array.isArray(config.legalSteps) ? [...config.legalSteps] : [];
  const legalSteps = legalStepsArray.sort((a: any, b: any) => a.order - b.order);

  const tabsButtonsJSX = legalSteps
    .map((step: any, idx: number) => {
      return `
        <button
          data-tab="tab-${step.id}"
          className="relative z-10 px-4 py-2 text-sm font-medium cursor-pointer ${
            idx === 0
              ? "text-blue-700 dark:text-blue-400"
              : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
          }"
        >
          ${idx + 1}
          <span className="sr-only">${escapeHtml(step.title)}</span>
        </button>
      `;
    })
    .join("");

  const tabsPanelsJSX = legalSteps
    .map((step: any, idx: number) => {
      return `
        <div
          id="tab-${step.id}"
          className="tab-content ${idx === 0 ? "block" : "hidden"}"
        >
          <div className="overflow-hidden border-0 shadow-md rounded-lg">
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 dark:from-slate-800 dark:to-slate-750">
              <h3 className="text-xl text-slate-800 dark:text-white">${escapeHtml(step.title)}</h3>
            </div>
            <div className="p-6">
              <p className="text-slate-600 dark:text-slate-300">${escapeHtml(step.description || "")}</p>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  const sectionProcesoJSX = legalSteps.length
    ? `
        <section id="proceso" className="mb-8 bg-white p-6 rounded-lg shadow-md dark:bg-slate-800">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Proceso Legal</h2>
          <div className="relative mb-6">
            <div className="grid w-full grid-cols-${legalSteps.length}">
              ${tabsButtonsJSX}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200 dark:bg-slate-700"></div>
          </div>
          ${tabsPanelsJSX}
        </section>
      `
    : "";

  // 8) Sección de contacto
  const sectionContactoJSX = `
      <section id="contacto" className="mb-12 rounded-lg bg-white p-6 shadow dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold dark:text-white">Contacto</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="mt-1 w-full rounded border border-slate-300 px-3 py-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
              placeholder="Su nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full rounded border border-slate-300 px-3 py-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
              placeholder="su@email.com"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Describa su caso
            </label>
            <textarea
              id="mensaje"
              rows={4}
              className="mt-1 w-full rounded border border-slate-300 px-3 py-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
              placeholder="Cuéntenos brevemente qué ocurrió..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900"
          >
            Solicitar asesoramiento gratuito
          </button>
        </form>
      </section>
  `;

  // 9) Footer con enlaces (ordenamos config.footerLinks)
  const footerLinksArray = Array.isArray(config.footerLinks) ? [...config.footerLinks] : [];
  const footerJSX = `
        <footer className="bg-slate-800 px-4 py-8 text-white dark:bg-slate-900">
          <div className="container mx-auto">
            <div className="mb-6 flex flex-wrap justify-center">
              ${footerLinksArray
                .sort((a: any, b: any) => a.order - b.order)
                .map(
                  (link: any) => `<a
                    href="${escapeHtml(link.url)}"
                    className="mx-2 text-blue-400 hover:underline"
                  >
                    ${escapeHtml(link.label)}
                  </a>`
                )
                .join("")}
            </div>
            <div className="mt-6 text-center text-sm text-slate-400">
              © ${new Date().getFullYear()} ${escapeHtml(config.pageTitle)}
            </div>
          </div>
        </footer>
  `;

  // 10) Composición final del componente (Server Component)
  const fullComponent = `
${headerImports}

export default function EmulatorPage() {
  return (
    <>
      ${headJSX}

      {/* Inyectamos el script de interactividad solo en cliente */}
      <Script
        src="/scripts/landing.js"
        strategy="afterInteractive"
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        {/* HEADER */}
        <header className="sticky top-0 z-50 flex items-center justify-between bg-white p-4 shadow-sm dark:bg-slate-800">
          <div className="text-xl font-bold text-blue-800 dark:text-blue-400">
            ${escapeHtml(config.name)}
          </div>
          <div className="flex items-center gap-2">
            {/* Botón alternar tema */}
            <button data-toggle-theme className="h-10 w-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414" />
              </svg>
            </button>
            {/* Botón menú */}
            <button data-toggle-menu className="h-10 w-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Contenido del menú (oculto por defecto) */}
            <nav data-menu-content className="absolute top-16 left-4 right-4 hidden flex-col gap-4 rounded-lg bg-white p-6 shadow-md dark:bg-slate-800 dark:text-white md:static md:flex md:flex-row md:items-center md:gap-4 md:p-0 md:shadow-none">
              <a href="#inicio" className="text-lg font-medium hover:text-blue-700 dark:hover:text-blue-400">Inicio</a>
              <a href="#servicios" className="text-lg font-medium hover:text-blue-700 dark:hover:text-blue-400">Servicios</a>
              <a href="#proceso" className="text-lg font-medium hover:text-blue-700 dark:hover:text-blue-400">Proceso Legal</a>
              <a href="#contacto" className="text-lg font-medium hover:text-blue-700 dark:hover:text-blue-400">Contacto</a>
            </nav>
          </div>
        </header>

        {/* BANNER */}
        ${bannerJSX}

        {/* CONTENIDO PRINCIPAL */}
        <main className="container mx-auto px-4 py-6">
          {/* Secciones */}
          ${sectionsJSX}

          {/* Noticias */}
          ${sectionNoticiasJSX}

          {/* Galería (si la hay) */}
          ${sectionGaleriaJSX}

          {/* Proceso Legal */}
          ${sectionProcesoJSX}

          {/* Contacto */}
          ${sectionContactoJSX}
        </main>

        {/* FOOTER */}
        ${footerJSX}
      </div>
    </>
  );
}
`;

  return fullComponent;
}


// Función auxiliar para escapar texto en HTML/JSX y evitar inyección inesperada
function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
