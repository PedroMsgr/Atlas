"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    // Simular procesamiento de inicio de sesión
    setTimeout(() => {
      setLoading(false)
      // En un caso real, aquí validarías credenciales y redirigirías al usuario
      router.push("/")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <div className="container max-w-screen-xl py-4">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Volver a Inicio
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <Card className="mx-auto w-full max-w-md shadow-lg border-0">
          <CardHeader className="space-y-2 pb-6 text-center bg-gradient-to-r from-slate-50 to-slate-100 rounded-t-lg dark:from-slate-800 dark:to-slate-750">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <Image 
                src="/placeholder-logo.svg" 
                alt="Logo AsesoLegal" 
                width={32} 
                height={32} 
                className="rounded-full"
              />
            </div>
            <CardTitle className="text-2xl font-bold text-slate-800 dark:text-white">
              Acceder a su cuenta
            </CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">
              Ingrese sus credenciales para acceder a su portal de cliente
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Correo electrónico
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="nombre@ejemplo.com" 
                  required 
                  className="w-full border-slate-300 focus-visible:ring-blue-600 dark:border-slate-700"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Contraseña
                  </label>
                  <Link 
                    href="#" 
                    className="text-xs font-medium text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    ¿Olvidó su contraseña?
                  </Link>
                </div>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    required 
                    className="w-full pr-10 border-slate-300 focus-visible:ring-blue-600 dark:border-slate-700"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="border-slate-300 data-[state=checked]:bg-blue-700 data-[state=checked]:border-blue-700 dark:border-slate-600" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700 dark:text-slate-300"
                >
                  Recordar mis datos
                </label>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900"
                disabled={loading}
              >
                {loading ? "Procesando..." : "Iniciar sesión"}
              </Button>
            </form>

          </CardContent>
          <CardFooter className="flex flex-col text-center bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-750 rounded-b-lg">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              ¿Nuevo cliente?{" "}
              <Link 
                href="#" 
                className="font-medium text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Solicite una consulta gratuita
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>

      <footer className="border-t border-slate-200 py-4 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} AsesoLegal Patinetes. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  )
}