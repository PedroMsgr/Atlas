"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
          <div className="flex flex-col sm:flex-row sm:space-x-6 order-2 md:order-2 items-center md:items-center gap-2 sm:gap-0">
            <a href="#" className="text-gray-400 hover:text-gray-500 text-sm">
              Términos y condiciones
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500 text-sm">
              Política de privacidad
            </a>
          </div>
          <p className="text-base text-gray-400 order-1 md:order-1 text-center md:text-left mt-4 md:mt-0">
            &copy; 2024 Atlas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
