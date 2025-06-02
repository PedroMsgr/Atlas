// src/lib/landing-generator.ts

import { LandingData, SectionFull, ArticleFull, ImageFull } from "@/types/config.types";

export function generateLandingTSX(config: LandingData): string {
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

  // --- Head SEO ---
  const headJSX = `
    <Head>
      <title>${config.seoTitle || config.pageTitle}</title>
      <meta name="description" content="${config.seoDescription || config.description || ""}" />
      <meta name="keywords" content="${config.seoKeywords || ""}" />
      <meta property="og:title" content="${config.seoTitle || config.pageTitle}" />
      <meta property="og:description" content="${config.seoDescription || config.description || ""}" />
      <meta property="og:image" content="${config.ogImage || config.bannerUrl || ""}" />
      <link rel="icon" href="${config.iconUrl || "/favicon.ico"}" />
    </Head>
  `;

  // --- Monta el TSX completo ---
  return `"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EmulatorLanding() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      ${headJSX}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white p-4 shadow-sm dark:bg-slate-800 dark:text-white">
        <div className="text-xl font-bold text-blue-800 dark:text-blue-400">${config.pageTitle}</div>
      </header>
      <main className="container mx-auto px-4 py-6 space-y-8">
        <section
          id="inicio"
          className="mb-12 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 p-6 text-white shadow-md dark:from-blue-900 dark:to-blue-950"
        >
          <div className="mb-6 text-center">
            <h1 className="mb-2 text-3xl font-bold">${config.pageTitle}</h1>
            <p className="text-lg">${config.subtitle || ""}</p>
          </div>
          ${
            config.bannerUrl
              ? `<div className="flex justify-center">
                  <Image
                    src="${config.bannerUrl}"
                    alt="Banner"
                    width={900}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>`
              : ""
          }
        </section>
        ${sectionsJSX}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-white">Artículos</h2>
          ${articlesJSX}
        </section>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-white">Galería</h2>
          ${imagesJSX}
        </section>
        <section id="contacto" className="mb-12 rounded-xl bg-white p-6 shadow-md dark:bg-slate-800 dark:text-white">
          <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-white">Contacto</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Nombre
              </label>
              <input id="nombre" type="text" placeholder="Su nombre" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input id="email" type="email" placeholder="su@email.com" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="mensaje" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Describa su caso
              </label>
              <textarea id="mensaje" placeholder="Cuéntenos brevemente qué ocurrió..." className="w-full border border-gray-300 rounded px-3 py-2 min-h-[120px]" />
            </div>
            <Button className="w-full bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900">
              Solicitar asesoramiento gratuito
            </Button>
          </form>
        </section>
      </main>
      <footer className="bg-slate-800 px-4 py-8 text-white dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="mt-6 text-center text-sm text-slate-400">
            ${config.footerInfo || ""}
          </div>
        </div>
      </footer>
    </div>
  );
}
`;
}
