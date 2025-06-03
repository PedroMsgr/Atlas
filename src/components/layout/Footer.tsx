'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Términos y condiciones
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Política de privacidad
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2024 Atlas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}