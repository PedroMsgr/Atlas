"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import { LogIn, MessageSquare, FileText } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import Image from 'next/image';
import "../globals.css";

export default function EmulatorPage() {
  const config = {
  "__typename": "UnitConfig",
  "name": "Config Portal Accidentes 1",
  "pageTitle": "Abogados especialistas en Accidentes",
  "pageDescription": "Portal especializado en derecho accidentes.",
  "servicesDescription": "Servicios legales para casos de accidentes.",
  "iconUrl": "",
  "footerInfo": "© 2025 Atlas Legal",
  "bannerUrl": "https://firebasestorage.googleapis.com/v0/b/universo-legal-4dace.firebasestorage.app/o/images%2F1749379136788-erd.png?alt=media&token=98ca2710-2792-4796-9637-2ebdaab5ac20",
  "sections": [
    {
      "__typename": "Section",
      "id": "4c7c6419-78dd-4eb3-9789-1d42c955cf44",
      "title": "Bienvenida",
      "body": "Bienvenido a nuestro portal.",
      "order": 1,
      "images": []
    },
    {
      "__typename": "Section",
      "id": "186d07d3-4ac0-4518-b41c-07798dcb31fd",
      "title": "Guía Legal",
      "body": "Te guiamos paso a paso en tu proceso legal.",
      "order": 2,
      "images": []
    },
    {
      "__typename": "Section",
      "id": "abecf1ed-1051-4f10-bbcd-50dd8d7b56a1",
      "title": "Artículo Destacado",
      "body": "Contenido curado manualmente.",
      "order": 3,
      "images": []
    },
    {
      "__typename": "Section",
      "id": "76b8a05e-ccf2-4119-acac-95b8df820be8",
      "title": "Noticias",
      "body": "Noticias legales relevantes.",
      "order": 4,
      "images": []
    }
  ],
  "articles": [
    {
      "__typename": "Article",
      "id": "314e1e78-2c1f-4a82-b93c-ed87171ca54d",
      "title": "Guía rápida de Portal Accidentes 1",
      "content": "Guía rápida para usuarios del portal.",
      "url": null,
      "order": 2,
      "publishedAt": "2025-06-08T01:22:22.540Z"
    }
  ],
  "images": [],
  "legalSteps": [
    {
      "__typename": "LegalStep",
      "id": "28527519-07b7-48d8-886b-dd9350ef8b03",
      "title": "Evaluación inicial",
      "description": "Analizamos tu caso y te orientamos.",
      "order": 1
    },
    {
      "__typename": "LegalStep",
      "id": "0c08cf57-1eda-462b-a075-b366f7bd07c8",
      "title": "Revisión documental",
      "description": "Revisamos toda la documentación relevante.",
      "order": 2
    },
    {
      "__typename": "LegalStep",
      "id": "d79f321d-dae3-4d05-b641-abc8937eab75",
      "title": "Negociación",
      "description": "Negociamos con la parte contraria.",
      "order": 3
    },
    {
      "__typename": "LegalStep",
      "id": "eced6fc5-5b04-4b16-99af-23629927089e",
      "title": "Acción legal",
      "description": "Si es necesario, iniciamos acciones legales.",
      "order": 4
    },
    {
      "__typename": "LegalStep",
      "id": "24cefce3-4111-4f0d-9a20-f732e1016fde",
      "title": "Resolución",
      "description": "Te acompañamos hasta la resolución del caso.",
      "order": 5
    }
  ],
  "footerLinks": [
    {
      "__typename": "FooterLink",
      "id": "4884ef33-b9f6-4ac6-9ac1-2f050fa53497",
      "label": "Aviso Legal",
      "url": "/aviso-legal",
      "order": 1
    },
    {
      "__typename": "FooterLink",
      "id": "c98b6295-d3f8-4e9f-bb98-9a8a72bdbfff",
      "label": "Política de Privacidad",
      "url": "/privacidad",
      "order": 2
    },
    {
      "__typename": "FooterLink",
      "id": "1c7101c9-493c-4f30-86af-e536104c7ead",
      "label": "Contacto",
      "url": "/contacto",
      "order": 3
    }
  ]
};
  // Modo oscuro
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    setDark(saved === 'dark');
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', dark);
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    }
  }, [dark]);
  // Menú hamburguesa
  const [menuOpen, setMenuOpen] = useState(false);
  // Tabs proceso legal
  const [activeTab, setActiveTab] = useState(0);
  // Swipe handlers para pasos legales
  const legalStepsCount = config.legalSteps?.length || 0;
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setActiveTab((prev) => Math.min(prev + 1, legalStepsCount - 1)),
    onSwipedRight: () => setActiveTab((prev) => Math.max(prev - 1, 0)),
    trackMouse: true,
  });
  // Estado de login simulado para menú cliente
  const [isClient, setIsClient] = useState(false);

  // Función para cambiar de paso en tabs
  // const goToStep = (idx: number) => {
  //   if (idx >= 0 && idx < (config.legalSteps?.length || 0)) setActiveTab(idx);
  // }

  return (
    <>
      <Head>
        <title>{config.pageTitle}</title>
        <meta name="description" content={config.pageDescription || ""} />
        <link rel="icon" href={config.iconUrl || "/favicon.ico"} />
      </Head>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        {/* HEADER */}
        <header className="sticky top-0 z-50 flex items-center justify-between bg-white p-2 shadow-sm dark:bg-slate-800">
          <div className="flex-1 flex items-center">
            <div className="text-xl font-bold text-blue-800 dark:text-blue-400 ml-2">
              {config.pageTitle}
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            {/* Botón menú hamburguesa (solo en móvil) */}
            <button
              onClick={() => setMenuOpen((m) => !m)}
              className="h-9 w-9 md:hidden flex items-center justify-center"
              aria-label="Abrir menú"
            >
              <svg
                className="h-6 w-6 text-slate-700 dark:text-slate-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Contenido del menú */}
            <nav
              className={`absolute top-16 left-4 right-4 ${menuOpen ? '' : 'hidden'} flex-col gap-2 rounded-lg bg-white p-4 shadow-md dark:bg-slate-800 dark:text-white md:static md:flex md:flex-row md:items-center md:gap-1 md:p-0 md:shadow-none`}
              onClick={() => setMenuOpen(false)}
            >
              {/* Botón alternar tema (móvil, dentro del menú) */}
              <button
                onClick={() => setDark((d) => !d)}
                className="md:hidden flex items-center gap-2 text-lg font-medium text-slate-700 dark:text-yellow-400 px-2 py-2 mb-1"
                aria-label="Alternar modo oscuro"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414"
                  />
                </svg>
                Modo oscuro
              </button>
              {/* Menú público (no logueado) */}
              {!isClient && <>
                <a
                  href="#inicio"
                  className="hidden md:inline-block px-2 py-1 rounded shadow-sm bg-white dark:bg-slate-900 dark:shadow md:mx-0.5 font-medium text-blue-800 dark:text-blue-300 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
                >
                  Inicio
                </a>
                <a
                  href="#servicios"
                  className="hidden md:inline-block px-2 py-1 rounded shadow-sm bg-white dark:bg-slate-900 dark:shadow md:mx-0.5 font-medium text-blue-800 dark:text-blue-300 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
                >
                  Servicios
                </a>
                <a
                  href="#proceso"
                  className="hidden md:inline-block px-2 py-1 rounded shadow-sm bg-white dark:bg-slate-900 dark:shadow md:mx-0.5 font-medium text-blue-800 dark:text-blue-300 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
                >
                  Proceso Legal
                </a>
                <a
                  href="#contacto"
                  className="hidden md:inline-block px-2 py-1 rounded shadow-sm bg-white dark:bg-slate-900 dark:shadow md:mx-0.5 font-medium text-blue-800 dark:text-blue-300 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
                >
                  Contacto
                </a>
                <button
                  type="button"
                  className="hidden md:inline-block px-2 py-1 rounded shadow-sm bg-green-50 dark:bg-slate-900 dark:shadow md:mx-0.5 font-medium text-green-700 dark:text-green-300 hover:shadow-lg hover:bg-green-100 dark:hover:bg-slate-800 transition-all"
                  onClick={() => setIsClient(true)}
                >
                  Acceso
                </button>
                {/* Móvil */}
                <a href="#inicio" className="md:hidden flex items-center gap-2 text-lg font-medium text-blue-700 dark:text-blue-400 px-2 py-2"><LogIn className="h-5 w-5" /> Inicio</a>
                <a href="#servicios" className="md:hidden flex items-center gap-2 text-lg font-medium text-blue-700 dark:text-blue-400 px-2 py-2"><FileText className="h-5 w-5" /> Servicios</a>
                <a href="#proceso" className="md:hidden flex items-center gap-2 text-lg font-medium text-blue-700 dark:text-blue-400 px-2 py-2"><MessageSquare className="h-5 w-5" /> Proceso Legal</a>
                <a href="#contacto" className="md:hidden flex items-center gap-2 text-lg font-medium text-blue-700 dark:text-blue-400 px-2 py-2"><LogIn className="h-5 w-5" /> Contacto</a>
                <button type="button" className="md:hidden flex items-center gap-2 text-lg font-medium text-green-700 dark:text-green-300 px-2 py-2" onClick={() => setIsClient(true)}><LogIn className="h-5 w-5" /> Acceso</button>
              </>}
              {/* Menú privado (cliente logueado) */}
              {isClient && <>
                <a
                  href="/emulator/chat"
                  className="hidden md:inline-block px-2 py-1 rounded shadow-sm bg-white dark:bg-slate-900 dark:shadow md:mx-0.5 font-medium text-blue-800 dark:text-blue-300 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
                >
                  Mi Chat
                </a>
                <a
                  href="/emulator/archivos"
                  className="hidden md:inline-block px-2 py-1 rounded shadow-sm bg-white dark:bg-slate-900 dark:shadow md:mx-0.5 font-medium text-blue-800 dark:text-blue-300 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
                >
                  Archivos
                </a>
                <a
                  href="/emulator/perfil"
                  className="hidden md:inline-block px-2 py-1 rounded shadow-sm bg-white dark:bg-slate-900 dark:shadow md:mx-0.5 font-medium text-blue-800 dark:text-blue-300 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
                >
                  Mi Perfil
                </a>
                <button
                  type="button"
                  className="hidden md:inline-block px-2 py-1 rounded shadow-sm bg-red-50 dark:bg-slate-900 dark:shadow md:mx-0.5 font-medium text-red-700 dark:text-red-300 hover:shadow-lg hover:bg-red-100 dark:hover:bg-slate-800 transition-all"
                  onClick={() => setIsClient(false)}
                >
                  Cerrar sesión
                </button>
                <a
                  href="/admin/emulator/login"
                  className="hidden md:inline-block px-2 py-1 rounded shadow-sm bg-yellow-50 dark:bg-slate-900 dark:shadow md:mx-0.5 font-medium text-yellow-700 dark:text-yellow-300 hover:shadow-lg hover:bg-yellow-100 dark:hover:bg-slate-800 transition-all"
                >
                  Login
                </a>
                {/* Móvil */}
                <a href="#chat" className="md:hidden flex items-center gap-2 text-lg font-medium text-blue-700 dark:text-blue-400 px-2 py-2"><MessageSquare className="h-5 w-5" /> Mi Chat</a>
                <a href="/emulator/archivos" className="md:hidden flex items-center gap-2 text-lg font-medium text-blue-700 dark:text-blue-400 px-2 py-2"><FileText className="h-5 w-5" /> Archivos</a>
                <a href="/emulator/perfil" className="md:hidden flex items-center gap-2 text-lg font-medium text-blue-700 dark:text-blue-400 px-2 py-2"><LogIn className="h-5 w-5" /> Mi Perfil</a>
                <button type="button" className="md:hidden flex items-center gap-2 text-lg font-medium text-red-700 dark:text-red-300 px-2 py-2" onClick={() => setIsClient(false)}><LogIn className="h-5 w-5" /> Cerrar sesión</button>
                <a href="/admin/emulator/login" className="md:hidden flex items-center gap-2 text-lg font-medium text-yellow-700 dark:text-yellow-300 px-2 py-2"><LogIn className="h-5 w-5" /> Login</a>
              </>}
            </nav>
            {/* Botón alternar tema (desktop, extremo derecho) */}
            <div className="hidden md:flex items-center ml-2">
              <button
                onClick={() => setDark((d) => !d)}
                className="h-9 w-9 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                aria-label="Alternar modo oscuro"
              >
                <svg
                  className="h-6 w-6 text-slate-700 dark:text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* BANNER */}
        {config.bannerUrl && (
          <section id="inicio" className="flex justify-center py-8 px-2">
            <div className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center mb-4 dark:text-white">{config.pageTitle}</h1>
              <Image
                src={config.bannerUrl}
                alt="Banner principal"
                className="w-full max-h-64 object-cover rounded mb-4 shadow"
                style={{ objectPosition: 'center' }}
                width={768}
                height={384}
              />
              {config.servicesDescription && (
                <p className="text-lg text-slate-700 dark:text-slate-200 text-center">{config.servicesDescription}</p>
              )}
            </div>
          </section>
        )}

        {/* CONTENIDO PRINCIPAL */}
        <main className="container mx-auto px-4 py-6">
          {/* Secciones */}
          {Array.isArray(config.sections) && config.sections.sort((a: any, b: any) => a.order - b.order).map((sec: any) => (
            <section key={sec.id} className="mb-8 p-4 bg-white rounded-lg shadow dark:bg-slate-800">
              <h2 className="text-2xl font-semibold mb-2 dark:text-white">{sec.title}</h2>
              {sec.body && <p className="mb-4 text-slate-600 dark:text-slate-300">{sec.body}</p>}
              {Array.isArray(sec.images) && sec.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sec.images.sort((a: any, b: any) => (a.order || 0) - (b.order || 0)).map((img: any) => (
                    <Image key={img.id} src={img.url} alt={img.altText || ''} width={768} height={384} className="w-full h-48 object-cover rounded shadow" />
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Artículos  */}
          {Array.isArray(config.articles) && config.articles.length > 0 && (
            <section id="articulos" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Noticias</h2>
              {config.articles.sort((a: any, b: any) => a.order - b.order).map((art: any) => (
                <article key={art.id} className="mb-6 p-4 bg-slate-100 rounded-lg dark:bg-slate-700">
                  <h3 className="text-xl font-medium mb-1 dark:text-white">{art.title}</h3>
                  {art.publishedAt && <p className="text-sm text-gray-500 mb-2">{new Date(art.publishedAt).toLocaleDateString()}</p>}
                  <p className="mb-3 text-slate-600 dark:text-slate-300">{art.content}</p>
                  {art.url && <a href={art.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Leer noticia completa</a>}
                </article>
              ))}
            </section>
          )}

          {/* Galería global */}
          {Array.isArray(config.images) && config.images.length > 0 && (
            <section id="galeria" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Galería</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {config.images.sort((a: any, b: any) => (a.order || 0) - (b.order || 0)).map((img: any) => (
                  <div key={img.id} className="mb-4">
                    <Image src={img.url} alt={img.altText || ''} width={768} height={384} className="w-full h-48 object-cover rounded shadow" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Proceso Legal (swipeable) */}
          {Array.isArray(config.legalSteps) && config.legalSteps.length > 0 && (
            <section id="proceso" className="mb-8 bg-white p-6 rounded-lg shadow-md dark:bg-slate-800">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Proceso Legal</h2>
              <div className="relative mb-6">
                {/* Distribuir los botones de pasos en filas de 3 (o menos si es la última) */}
                {(() => {
                  const steps = config.legalSteps.slice().sort((a, b) => a.order - b.order);
                  const perRow = 3;
                  const rows = [];
                  for (let i = 0; i < steps.length; i += perRow) {
                    rows.push(steps.slice(i, i + perRow));
                  }
                  return (
                    <div className="flex flex-col gap-2">
                      {rows.map((row, rowIdx) => {
                        let colClass = '';
                        if (row.length === 1) colClass = 'grid-cols-1';
                        else if (row.length === 2) colClass = 'grid-cols-2';
                        else colClass = 'grid-cols-3';
                        return (
                          <div key={rowIdx} className={["grid", "w-full", colClass, "gap-2"].join(" ")}>
                            {row.map((step, idx) => {
                              const globalIdx = rowIdx * perRow + idx;
                              const isActive = activeTab === globalIdx;
                              return (
                                <button
                                  key={step.id}
                                  onClick={() => setActiveTab(globalIdx)}
                                  className={
                                    "relative z-10 px-3 py-1 text-sm font-medium cursor-pointer transition-all duration-300 rounded-lg " +
                                    (isActive
                                      ? 'text-blue-700 dark:text-blue-400 bg-white dark:bg-slate-900 scale-105 -translate-y-1 shadow'
                                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent scale-100 translate-y-0')
                                  }
                                  style={{ boxShadow: isActive ? '0 2px 8px 0 rgba(37, 99, 235, 0.10)' : undefined }}
                                  aria-selected={isActive}
                                  aria-controls={"tab-" + step.id}
                                  tabIndex={0}
                                >
                                  {globalIdx + 1}
                                  <span className="sr-only">{step.title}</span>
                                </button>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200 dark:bg-slate-700"></div>
              </div>
              <div {...swipeHandlers}>
                {config.legalSteps.slice().sort((a, b) => a.order - b.order).map((step, idx) => (
                  <div
                    key={step.id}
                    id={"tab-" + step.id}
                    className={"tab-content transition-all duration-300 " + (activeTab === idx ? 'block' : 'hidden')}
                    aria-hidden={activeTab !== idx}
                  >
                    <div className="overflow-hidden border-0 shadow-md rounded-lg">
                      <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 dark:from-slate-800 dark:to-slate-750">
                        <h3 className="text-xl text-slate-800 dark:text-white">{step.title}</h3>
                      </div>
                      <div className="p-6">
                        <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Contacto */}
          <section id="contacto" className="mb-12 rounded-lg bg-white p-6 shadow dark:bg-slate-800">
            <h2 className="mb-6 text-2xl font-bold dark:text-white">Contacto</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  id="nombre"
                  className="mt-1 w-full rounded border border-slate-300 px-3 py-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
                  placeholder="Su nombre"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full rounded border border-slate-300 px-3 py-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
                  placeholder="su@email.com"
                />
              </div>
              <div>
                <textarea
                  id="mensaje"
                  rows={4}
                  className="mt-1 w-full rounded border border-slate-300 px-3 py-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
                  placeholder="Cuéntenos brevemente qué ocurrió..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900 shadow transition-all"
              >
                Solicitar asesoramiento gratuito
              </button>
            </form>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-800 px-4 py-8 text-white dark:bg-slate-900">
          <div className="container mx-auto">
            <div className="mb-6 flex flex-wrap justify-center">
              {Array.isArray(config.footerLinks) && config.footerLinks.sort((a: any, b: any) => a.order - b.order).map((link: any) => (
                <a
                  key={link.id}
                  href={link.url}
                  className="mx-2 text-blue-400 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-6 text-center text-sm text-slate-400">
              © 2025 {config.pageTitle}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

// Función auxiliar para escapar texto en HTML/JSX y evitar inyección inesperada
// function escapeHtml(str: string) {
//   if (!str) return '';
//   return String(str)
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#39;");
// }
