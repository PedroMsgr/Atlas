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
 *  - importa Head, Link, y los iconos necesarios de Next.js y lucide-react
 *  - importa tu CSS de Tailwind (globals.css)
 *  - monta todos los bloques en JSX recorriendo config.sections, config.articles, etc.
 */
export function generateLandingTSX(config: any): string {
  return `\
"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import { LogIn, MessageSquare, FileText } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import "../globals.css";

export default function EmulatorPage() {
  const config = ${JSON.stringify(config, null, 2)};
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
              className={\`absolute top-16 left-4 right-4 \${menuOpen ? '' : 'hidden'} flex-col gap-2 rounded-lg bg-white p-4 shadow-md dark:bg-slate-800 dark:text-white md:static md:flex md:flex-row md:items-center md:gap-1 md:p-0 md:shadow-none\`}
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
              <img
                src={config.bannerUrl}
                alt="Banner principal"
                className="w-full max-h-64 object-cover rounded mb-4 shadow"
                style={{ objectPosition: 'center' }}
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
                    <img key={img.id} src={img.url} alt={img.altText || ''} className="w-full h-48 object-cover rounded shadow" />
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
                    <img src={img.url} alt={img.altText || ''} className="w-full h-48 object-cover rounded shadow" />
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
              © ${new Date().getFullYear()} {config.pageTitle}
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
`;
}
