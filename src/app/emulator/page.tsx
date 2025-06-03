

import Head from "next/head";
import Script from "next/script";
import "../globals.css";


export default function EmulatorPage() {
  return (
    <>
      
      <Head>
        <title>Abogados especialistas en Familia</title>
        <meta name="description" content="Portal especializado en derecho familia." />
        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/universo-legal-4dace.firebasestorage.app/o/images%2F1748980953414-AtlasLogo1.ico?alt=media&amp;token=2b9ba13d-52c6-403e-b807-ae71edf30b16" />
      </Head>
  

      {/* Inyectamos el script de interactividad solo en cliente */}
      <Script
        src="/scripts/landing.js"
        strategy="afterInteractive"
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        {/* HEADER */}
        <header className="sticky top-0 z-50 flex items-center justify-between bg-white p-4 shadow-sm dark:bg-slate-800">
          <div className="text-xl font-bold text-blue-800 dark:text-blue-400">
            Config Portal Familia 1
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
        
        <section id="inicio" className="w-full h-64 overflow-hidden">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/universo-legal-4dace.firebasestorage.app/o/images%2F1748980958312-6750160.jpg?alt=media&amp;token=55db6fcb-8800-4eb1-849c-213cecd2b531"
            alt="Banner principal"
            className="w-full h-full object-cover"
          />
        </section>
      

        {/* CONTENIDO PRINCIPAL */}
        <main className="container mx-auto px-4 py-6">
          {/* Secciones */}
          
          <section className="mb-8 p-4 bg-white rounded-lg shadow dark:bg-slate-800">
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">Bienvenida</h2>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Bienvenido a nuestro portal.
            </p>
            
          </section>
      
          <section className="mb-8 p-4 bg-white rounded-lg shadow dark:bg-slate-800">
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">Guía Legal</h2>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Te guiamos paso a paso en tu proceso legal.
            </p>
            
          </section>
      
          <section className="mb-8 p-4 bg-white rounded-lg shadow dark:bg-slate-800">
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">Artículo Destacado</h2>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Contenido curado manualmente.
            </p>
            
          </section>
      
          <section className="mb-8 p-4 bg-white rounded-lg shadow dark:bg-slate-800">
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">Noticias</h2>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              Noticias legales relevantes.
            </p>
            
          </section>
      

          {/* Noticias */}
          
        <section id="articulos" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Noticias</h2>
          
          <article className="mb-6 p-4 bg-slate-100 rounded-lg dark:bg-slate-700">
            <h3 className="text-xl font-medium mb-1 dark:text-white">Artículo destacado de Portal Familia 1</h3>
            <p className="text-sm text-gray-500 mb-2">2/6/2025</p>
            <p className="mb-3 text-slate-600 dark:text-slate-300">Este es un artículo de ejemplo para la landing.</p>
            <a href="https://portal.edu.gva.es/03013224/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Leer noticia completa</a>
          </article>
      
          <article className="mb-6 p-4 bg-slate-100 rounded-lg dark:bg-slate-700">
            <h3 className="text-xl font-medium mb-1 dark:text-white">Guía rápida de Portal Familia 1</h3>
            <p className="text-sm text-gray-500 mb-2">2/6/2025</p>
            <p className="mb-3 text-slate-600 dark:text-slate-300">Guía rápida para usuarios del portal.</p>
            <a href="youtube.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Leer noticia completa</a>
          </article>
      
        </section>
      

          {/* Galería (si la hay) */}
          

          {/* Proceso Legal */}
          
        <section id="proceso" className="mb-8 bg-white p-6 rounded-lg shadow-md dark:bg-slate-800">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Proceso Legal</h2>
          <div className="relative mb-6">
            <div className="grid w-full grid-cols-5">
              
        <button
          data-tab="tab-d0e2fffb-61b7-4f0a-b161-47138534a0f0"
          className="relative z-10 px-4 py-2 text-sm font-medium cursor-pointer text-blue-700 dark:text-blue-400"
        >
          1
          <span className="sr-only">Evaluación inicial</span>
        </button>
      
        <button
          data-tab="tab-17ac5e3b-6db9-4d7e-a67f-ee1750ee9b2b"
          className="relative z-10 px-4 py-2 text-sm font-medium cursor-pointer text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
        >
          2
          <span className="sr-only">Revisión documental</span>
        </button>
      
        <button
          data-tab="tab-ee0a74fe-3007-4b4b-bd92-fe838ada05b4"
          className="relative z-10 px-4 py-2 text-sm font-medium cursor-pointer text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
        >
          3
          <span className="sr-only">Negociación</span>
        </button>
      
        <button
          data-tab="tab-6470e2a4-8feb-4fad-9078-6e82bdb61794"
          className="relative z-10 px-4 py-2 text-sm font-medium cursor-pointer text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
        >
          4
          <span className="sr-only">Acción legal</span>
        </button>
      
        <button
          data-tab="tab-de79f7b6-5fca-4950-82e0-f149283bf61b"
          className="relative z-10 px-4 py-2 text-sm font-medium cursor-pointer text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
        >
          5
          <span className="sr-only">Resolución</span>
        </button>
      
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200 dark:bg-slate-700"></div>
          </div>
          
        <div
          id="tab-d0e2fffb-61b7-4f0a-b161-47138534a0f0"
          className="tab-content block"
        >
          <div className="overflow-hidden border-0 shadow-md rounded-lg">
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 dark:from-slate-800 dark:to-slate-750">
              <h3 className="text-xl text-slate-800 dark:text-white">Evaluación inicial</h3>
            </div>
            <div className="p-6">
              <p className="text-slate-600 dark:text-slate-300">Analizamos tu caso y te orientamos.</p>
            </div>
          </div>
        </div>
      
        <div
          id="tab-17ac5e3b-6db9-4d7e-a67f-ee1750ee9b2b"
          className="tab-content hidden"
        >
          <div className="overflow-hidden border-0 shadow-md rounded-lg">
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 dark:from-slate-800 dark:to-slate-750">
              <h3 className="text-xl text-slate-800 dark:text-white">Revisión documental</h3>
            </div>
            <div className="p-6">
              <p className="text-slate-600 dark:text-slate-300">Revisamos toda la documentación relevante.</p>
            </div>
          </div>
        </div>
      
        <div
          id="tab-ee0a74fe-3007-4b4b-bd92-fe838ada05b4"
          className="tab-content hidden"
        >
          <div className="overflow-hidden border-0 shadow-md rounded-lg">
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 dark:from-slate-800 dark:to-slate-750">
              <h3 className="text-xl text-slate-800 dark:text-white">Negociación</h3>
            </div>
            <div className="p-6">
              <p className="text-slate-600 dark:text-slate-300">Negociamos con la parte contraria.</p>
            </div>
          </div>
        </div>
      
        <div
          id="tab-6470e2a4-8feb-4fad-9078-6e82bdb61794"
          className="tab-content hidden"
        >
          <div className="overflow-hidden border-0 shadow-md rounded-lg">
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 dark:from-slate-800 dark:to-slate-750">
              <h3 className="text-xl text-slate-800 dark:text-white">Acción legal</h3>
            </div>
            <div className="p-6">
              <p className="text-slate-600 dark:text-slate-300">Si es necesario, iniciamos acciones legales.</p>
            </div>
          </div>
        </div>
      
        <div
          id="tab-de79f7b6-5fca-4950-82e0-f149283bf61b"
          className="tab-content hidden"
        >
          <div className="overflow-hidden border-0 shadow-md rounded-lg">
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 dark:from-slate-800 dark:to-slate-750">
              <h3 className="text-xl text-slate-800 dark:text-white">Resolución</h3>
            </div>
            <div className="p-6">
              <p className="text-slate-600 dark:text-slate-300">Te acompañamos hasta la resolución del caso.</p>
            </div>
          </div>
        </div>
      
        </section>
      

          {/* Contacto */}
          
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
  
        </main>

        {/* FOOTER */}
        
        <footer className="bg-slate-800 px-4 py-8 text-white dark:bg-slate-900">
          <div className="container mx-auto">
            <div className="mb-6 flex flex-wrap justify-center">
              <a
                    href="/aviso-legal"
                    className="mx-2 text-blue-400 hover:underline"
                  >
                    Aviso Legal
                  </a><a
                    href="/privacidad"
                    className="mx-2 text-blue-400 hover:underline"
                  >
                    Política de Privacidad
                  </a><a
                    href="/contacto"
                    className="mx-2 text-blue-400 hover:underline"
                  >
                    Contacto
                  </a>
            </div>
            <div className="mt-6 text-center text-sm text-slate-400">
              © 2025 Abogados especialistas en Familia
            </div>
          </div>
        </footer>
  
      </div>
    </>
  );
}
