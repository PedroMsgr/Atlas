"use client";
// src/components/emulator-components/HeaderEmulator.tsx

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, LogIn, MessageSquare, FileText, Sun, Moon } from "lucide-react";

export default function HeaderEmulator() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white p-4 shadow-sm dark:bg-slate-800 dark:text-white">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menú</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px] sm:w-[300px] dark:bg-slate-800 dark:text-white">
          <SheetHeader>
            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 pt-10">
            <Link href="#inicio" className="text-lg font-medium hover:text-blue-700 dark:hover:text-blue-400">
              Inicio
            </Link>
            <Link href="#servicios" className="text-lg font-medium hover:text-blue-700 dark:hover:text-blue-400">
              Servicios
            </Link>
            <Link href="#proceso" className="text-lg font-medium hover:text-blue-700 dark:hover:text-blue-400">
              Proceso Legal
            </Link>
            <Link href="#contacto" className="text-lg font-medium hover:text-blue-700 dark:hover:text-blue-400">
              Contacto
            </Link>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <Link 
                href="/login" 
                className="flex items-center text-lg font-medium text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <LogIn className="mr-2 h-5 w-5" />
                Acceso Clientes
              </Link>
              <Link 
                href="/chat" 
                className="flex items-center text-lg font-medium text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mt-4"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat con abogado
              </Link>
              <Link 
                href="/archivos" 
                className="flex items-center text-lg font-medium text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mt-4"
              >
                <FileText className="mr-2 h-5 w-5" />
                Archivos compartidos
              </Link>
              <Link 
                href="/perfil" 
                className="flex items-center text-lg font-medium text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mt-4"
              >
                <LogIn className="mr-2 h-5 w-5" />
                Mi perfil
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="text-xl font-bold text-blue-800 dark:text-blue-400">AsesoLegal Patinetes</div>
      <div className="flex items-center gap-2">
        <Link href="/archivos">
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/30">
            <FileText className="h-4 w-4" />
            <span>Archivos</span>
          </Button>
        </Link>
        <Link href="/chat">
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/30">
            <MessageSquare className="h-4 w-4" />
            <span>Chat</span>
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/30">
            <LogIn className="h-4 w-4" />
            <span>Acceso</span>
          </Button>
        </Link>
        <Link href="/perfil">
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/30">
            <LogIn className="h-4 w-4" />
            <span>Perfil</span>
          </Button>
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="h-10 w-10" aria-label="Cambiar tema">
          {mounted && (
            <>
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </>
          )}
        </Button>
      </div>
    </header>
  );
}