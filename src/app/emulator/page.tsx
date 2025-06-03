"use client";
import Head from "next/head";
import HeaderEmulator from "@/components/emulator/HeaderEmulator";
import FormEmulator from "@/components/emulator/FormEmulator";

export default function EmulatorPage() {
  return (
    <>
      <Head>
        <title>Tiburoner</title>
        <meta name="description" content="ere" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <HeaderEmulator />
        <div className="w-full">
          <img src="https://firebasestorage.googleapis.com/v0/b/universo-legal-4dace.firebasestorage.app/o/images%2F1748913926418-6750160.jpg?alt=media&token=fa247a66-9228-47a2-b195-20991cd1ceb9" alt="Banner principal" className="w-full object-cover" />
        </div>
        <main className="container mx-auto px-4 py-6">
          {/* Secciones dinámicas */}
          <section key={"section-abae8489-5272-4e40-8db7-c48e43187048"} className="mb-8 p-4 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">qw</h2>
            <p className="mb-4">wwwwe</p>
            <div></div>
          </section>
          <section key={"section-fdf09b45-f20a-4779-b24f-8ef84813bf52"} className="mb-8 p-4 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">22222222</h2>
            <p className="mb-4">12</p>
            <div></div>
          </section>
          {/* Artículos / Noticias */}
          <section id="articulos" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Noticias</h2>
            <article key={"article-995baa57-5e05-41c3-9995-7972b935e789"} className="mb-6 p-4 bg-slate-100 rounded-lg">
              <h3 className="text-xl font-medium mb-1">211ss</h3>
              <p className="text-sm text-gray-500 mb-2">3/6/2025</p>
              <p className="mb-3">222</p>
              <a href="https://www.youtube.com/watch?v=JvzjcJG1NCc&t=2639s" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Leer noticia completa
              </a>
            </article>
          </section>
          {/* Imágenes Globales */}
          <section id="imagenes-globales" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Galería</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Aquí irán las imágenes globales */}
            </div>
          </section>
          {/* Proceso Legal */}
          <section id="proceso-legal" className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Proceso Legal</h2>
            {/* Aquí irán los pasos legales */}
          </section>
          {/* Formulario de Contacto */}
          <section id="contacto" className="mt-12">
            <FormEmulator />
          </section>
        </main>
        <footer className="bg-slate-800 px-4 py-8 text-white dark:bg-slate-900">
          <div className="container mx-auto">
            <div className="mb-6 flex flex-wrap justify-center">
              {/* Aquí irán los enlaces de footer */}
            </div>
            <div className="mt-6 text-center text-sm text-slate-400">
              © Tiburoner
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
