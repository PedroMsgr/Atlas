// src/lib/landing-generator.ts

import { UnitConfigWithRelations, SectionBase, ArticleBase, ImageBase } from '@/types/config.types';

export function generateLandingTSX(config: UnitConfigWithRelations): string {
  // --- Construye las secciones ---
  const sectionsJSX = (config.sections || [])
    .map((sec: SectionBase) => `
      <div key="${sec.id}" className="mb-6 p-4 border rounded-xl">
        <h2 className="text-2xl font-semibold">${sec.title}</h2>
        <p>${sec.content}</p>
      </div>
    `)
    .join('\n');

  // --- Construye los artículos ---
  const articlesJSX = (config.articles || [])
    .map((art: ArticleBase) => `
      <div key="${art.id}" className="mb-4 p-4 bg-slate-100 rounded-lg">
        <h3 className="text-xl font-medium">${art.title}</h3>
        <p>${art.content}</p>
      </div>
    `)
    .join('\n');

  // --- Construye imágenes globales ---
  const imagesJSX = (config.images || [])
    .map((img: ImageBase) => `
      <img
        key="${img.id}"
        src="${img.url}"
        alt="${img.altText}"
        width={300}
        height={200}
        className="rounded shadow mb-4"
      />
    `)
    .join('\n');

  // --- Construye el bloque de “Proceso Legal” ---
  const steps = Array.from({ length: config.legalStepsCount }, (_, i) => ({
    id: `step${i + 1}`,
    title: `Paso ${i + 1}`,
    content:
      (config as any).legalStepsContent?.[i] ?? `Descripción del paso ${i + 1}.`,
  }));
  const stepsButtonsJSX = steps
    .map(
      (_, idx) => `
      <button
        key="step-button-${idx}"
        className="px-4 py-2 text-blue-700 border rounded"
      >
        ${idx + 1}
      </button>
    `
    )
    .join('\n');
  const firstStep = steps[0] || { title: '', content: '' };

  // --- Monta el TSX completo ---
  return `\
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="container mx-auto p-6 space-y-8">
      {/* Encabezado */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">${config.pageTitle}</h1>
        ${
          config.description
            ? `<p className="text-lg text-gray-700">${config.description}</p>`
            : ''
        }
        ${
          config.bannerUrl
            ? `<div className="mt-4">
                <Image src="${config.bannerUrl}" alt="Banner" width={900} height={300} className="rounded-lg shadow" />
              </div>`
            : ''
        }
      </section>

      {/* Proceso Legal */}
      <section id="proceso" className="rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Proceso Legal</h2>
        <div className="grid grid-cols-1 md:grid-cols-${config.legalStepsCount} gap-4 mb-6">
          ${stepsButtonsJSX}
        </div>
        <Card>
          <CardHeader>
            <CardTitle>${firstStep.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>${firstStep.content}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Anterior</Button>
            <Button>Siguiente</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Secciones dinámicas */}
      <section className="space-y-6">
        ${sectionsJSX}
      </section>

      {/* Artículos */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Artículos</h2>
        <div className="grid md:grid-cols-2 gap-4">
          ${articlesJSX}
        </div>
      </section>

      {/* Imágenes globales */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        ${imagesJSX}
      </section>

      {/* Footer */}
      <footer className="mt-12 text-sm text-center text-gray-500">
        ${config.footerInfo || '© 2025 Tu Empresa Legal. Todos los derechos reservados.'}
      </footer>
    </main>
  )
}`
}
