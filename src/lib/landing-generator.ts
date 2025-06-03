// src/lib/landing-generator.ts

import { SectionFull, ArticleFull, ImageFull } from "@/types/config.types";
import HeaderEmulator from "@/components/emulator/HeaderEmulator";
import FormEmulator from "@/components/emulator/FormEmulator";

/**
 * Dado un objeto `config` (UnitConfigWithRelations), genera el TSX que se escribirá
 * en `src/app/emulator/page.tsx`.
 */
export function generateLandingTSX(config: any): string {
  // --- Head básico con título y descripción (sin SEO extra) ---
  const headJSX = `
    <Head>
      <title>${config.pageTitle}</title>
      <meta name="description" content="${config.pageDescription || ''}" />
      <link rel="icon" href="${config.iconUrl || '/favicon.ico'}" />
    </Head>
  `;

  // --- Banner principal (tamaño fijo) ---
  const bannerJSX = config.bannerUrl
    ? `<div className="w-full h-64 overflow-hidden">
         <img src="${config.bannerUrl}" alt="Banner principal" className="w-full h-full object-cover" />
       </div>`
    : "";

  // --- Secciones dinámicas ---
  const sectionsJSX = (config.sections || [])
    .map((sec: any) => {
      const imagesInline = (sec.images || [])
        .map((img: any) => `
          <img
            key={\"img-${img.id}\"}
            src="${img.url}"
            alt="${img.altText || ''}"
            className="w-full max-w-md h-48 object-cover rounded shadow mb-4"
          />
        `)
        .join("");
      return `
      <section key={\"section-${sec.id}\"} className="mb-8 p-4 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">${sec.title}</h2>
        <p className="mb-4">${sec.body || ''}</p>
        <div>${imagesInline}</div>
      </section>
      `;
    })
    .join("");

  // --- Artículos / Noticias ---
  const articlesJSX = (config.articles || [])
    .map((art: any) => {
      const fecha = art.publishedAt ? new Date(art.publishedAt).toLocaleDateString() : "";
      const enlace = art.url
        ? `<a href="${art.url}" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Leer noticia completa</a>`
        : "";
      return `
      <article key={\"article-${art.id}\"} className="mb-6 p-4 bg-slate-100 rounded-lg">
        <h3 className="text-xl font-medium mb-1">${art.title}</h3>
        <p className="text-sm text-gray-500 mb-2">${fecha}</p>
        <p className="mb-3">${art.content || ''}</p>
        ${enlace}
      </article>
      `;
    })
    .join("");

  // --- Imágenes Globales (tamaño fijo) ---
  const imagesGlobalJSX = (config.images || [])
    .map((img: any) => `
      <div key={\"img-global-${img.id}\"} className="mb-4">
        <img
          src="${img.url}"
          alt="${img.altText || ''}"
          className="w-full max-w-sm h-48 object-cover rounded shadow"
        />
      </div>
    `)
    .join("");

  // --- Pasos Legales ---
  const legalStepsJSX = (config.legalSteps || [])
    .map((step: any, idx: number) => {
      return `
      <div key={\"legalstep-${step.id}\"} className="mb-4 flex items-start bg-blue-50 p-4 rounded-lg">
        <div>
          <h4 className="font-semibold mb-1">Paso ${idx + 1}: ${step.title}</h4>
          <p>${step.description || ''}</p>
        </div>
      </div>
      `;
    })
    .join("");

  // --- Enlaces de Footer ---
  const footerLinksJSX = (config.footerLinks || [])
    .map((link: any) => `
      <a
        key={\"footerlink-${link.id}\"}
        href="${link.url}"
        className="text-blue-400 hover:underline mx-2"
      >
        ${link.label}
      </a>
    `)
    .join("");

  // --- Arma todo el TSX final como un componente React válido ---
  return `"use client";
import Head from "next/head";
import HeaderEmulator from "@/components/emulator-components/HeaderEmulator";
import FormEmulator from "@/components/emulator-components/FormEmulator";

export default function EmulatorPage() {
  return (
    <>${headJSX}
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <HeaderEmulator />
        ${bannerJSX}
        <main className="container mx-auto px-4 py-6">
          {/* Secciones dinámicas */}
          ${sectionsJSX}
          {/* Artículos / Noticias */}
          <section id="articulos" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Noticias</h2>
            ${articlesJSX}
          </section>
          {/* Imágenes Globales */}
          <section id="imagenes-globales" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Galería</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${imagesGlobalJSX}
            </div>
          </section>
          {/* Proceso Legal */}
          <section id="proceso-legal" className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Proceso Legal</h2>
            ${legalStepsJSX}
          </section>
          {/* Formulario de Contacto */}
          <section id="contacto" className="mt-12">
            <FormEmulator />
          </section>
        </main>
        <footer className="bg-slate-800 px-4 py-8 text-white dark:bg-slate-900">
          <div className="container mx-auto">
            <div className="mb-6 flex flex-wrap justify-center">
              ${footerLinksJSX}
            </div>
            <div className="mt-6 text-center text-sm text-slate-400">
              © ${config.pageTitle}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
`;
}
