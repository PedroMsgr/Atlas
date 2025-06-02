// src/lib/landing-generator.ts

import { LandingData, SectionFull, ArticleFull, ImageFull } from "@/types/config.types";
import HeaderEmulator from '@/components/emulator-components/HeaderEmulator';
import FormEmulator from '@/components/emulator-components/FormEmulator';

export function generateLandingTSX(config: any): string {
  // --- Head SEO ---
  const headJSX = `
    <Head>
      <title>${config.seoTitle || config.pageTitle}</title>
      <meta name="description" content="${config.seoDescription || config.description || config.footerInfo || ''}" />
      <meta name="keywords" content="${config.seoKeywords || [config.pageTitle, 'legal', 'servicios'].join(', ')}" />
      <meta property="og:title" content="${config.seoTitle || config.pageTitle}" />
      <meta property="og:description" content="${config.seoDescription || config.description || config.footerInfo || ''}" />
      <meta property="og:image" content="${config.ogImage || config.bannerUrl || ''}" />
      <link rel="icon" href="${config.iconUrl || '/favicon.ico'}" />
    </Head>
  `;

  // --- Construye las secciones ---
  const sectionsJSX = (config.sections || [])
    .map((sec: SectionFull) => `
    <section key={"section-${sec.id}"} className="mb-6 p-4 border rounded-xl">
      <h2 className="text-2xl font-semibold">${sec.title}</h2>
      <p>${sec.content}</p>
      ${(sec.images || [])
        .map(
          (img: ImageFull) => `
        <img
          key={"img-${img.id}"}
          src="${img.url}"
          alt="${img.altText}"
          width={300}
          height={200}
          className="rounded shadow mb-4"
        />
      `
        )
        .join("")}
    </section>
  `)
    .join("\n");

  // --- Construye los artículos ---
  const articlesJSX = (config.articles || [])
    .map((art: ArticleFull) => `
    <div key={"article-${art.id}"} className="mb-4 p-4 bg-slate-100 rounded-lg">
      <h3 className="text-xl font-medium">${art.title}</h3>
      <p>${art.content}</p>
      ${art.url ? `<a href="${art.url}" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Leer noticia completa</a>` : ""}
    </div>
  `)
    .join("\n");

  // --- Construye imágenes globales ---
  const imagesJSX = (config.images || [])
    .map((img: ImageFull) => `
    <img
      key={"img-global-${img.id}"}
      src="${img.url}"
      alt="${img.altText}"
      width={300}
      height={200}
      className="rounded shadow mb-4"
    />
  `)
    .join("\n");

  // --- Legal Steps ---
  let legalStepsArr = config.legalSteps;
  if (!Array.isArray(legalStepsArr) && typeof config.legalSteps === 'string') {
    try { legalStepsArr = JSON.parse(config.legalSteps); } catch { legalStepsArr = []; }
  }
  const legalStepsJSX = (legalStepsArr || []).map((step: any, idx: number) => `
    <div key={"legalstep-${step.id}"} className="mb-4 p-4 bg-blue-50 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        ${step.iconUrl ? `<img src="${step.iconUrl}" alt="icon" className="w-8 h-8" />` : ''}
        <span className="font-semibold">Paso ${idx + 1}: ${step.title}</span>
      </div>
      <p>${step.description}</p>
    </div>
  `).join('');

  // --- Footer Links ---
  let footerLinksArr = config.footerLinks;
  if (!Array.isArray(footerLinksArr) && typeof config.footerLinks === 'string') {
    try { footerLinksArr = JSON.parse(config.footerLinks); } catch { footerLinksArr = []; }
  }
  const footerLinksJSX = (footerLinksArr || []).map((link: any) => `
    <a key={"footerlink-${link.id}"} href="${link.url}" className="text-blue-400 hover:underline mx-2">${link.label}</a>
  `).join('');

  // --- Monta el TSX completo usando los componentes inmutables de emulator ---
  return `"use client";
import HeaderEmulator from '@/components/emulator-components/HeaderEmulator';
import FormEmulator from '@/components/emulator-components/FormEmulator';
${headJSX}
<div className="min-h-screen bg-slate-50 dark:bg-slate-900">
  <HeaderEmulator />
  <main className="container mx-auto px-4 py-6">
    {/* Secciones */}
    ${sectionsJSX}
    {/* Artículos */}
    ${articlesJSX}
    {/* Imágenes globales */}
    ${imagesJSX}
    {/* Legal Steps */}
    <section id="proceso" className="mb-12 rounded-xl bg-white p-6 shadow-md dark:bg-slate-800 dark:text-white">
      <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-white">Proceso Legal</h2>
      <div>${legalStepsJSX}</div>
    </section>
    {/* Formulario de contacto */}
    <FormEmulator />
  </main>
  <footer className="bg-slate-800 px-4 py-8 text-white dark:bg-slate-900">
    <div className="container mx-auto">
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        ${footerLinksJSX}
      </div>
      <div className="mt-6 text-center text-sm text-slate-400">
        © ${config.pageTitle || 'Atlas Legal Platform'}
      </div>
    </div>
  </footer>
</div>
`;
}
