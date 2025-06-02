"use client";
// src/components/emulator-components/FormEmulator.tsx

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FormEmulator() {
  return (
    <section id="contacto" className="mb-12 rounded-xl bg-white p-6 shadow-md dark:bg-slate-800">
      <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-white">Contacto</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Nombre
          </label>
          <Input id="nombre" placeholder="Su nombre" className="w-full" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
          </label>
          <Input id="email" type="email" placeholder="su@email.com" className="w-full" />
        </div>
        <div>
          <label htmlFor="mensaje" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Describa su caso
          </label>
          <Textarea id="mensaje" placeholder="Cuéntenos brevemente qué ocurrió..." className="min-h-[120px] w-full" />
        </div>
        <Button className="w-full bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900">
          Solicitar asesoramiento gratuito
        </Button>
      </form>
    </section>
  );
}