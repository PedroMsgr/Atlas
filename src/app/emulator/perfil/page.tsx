"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  Calendar, 
  AlertCircle, 
  Edit, 
  CheckCircle2,
  Clock,
  FileText,
} from "lucide-react"

import { Button } from "@/components/ui-shadcn/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui-shadcn/card"
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui-shadcn/tabs"
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from "@/components/ui-shadcn/alert-dialog"
import { 
  RadioGroup, 
  RadioGroupItem 
} from "@/components/ui-shadcn/radio-group"
import { 
  Separator 
} from "@/components/ui-shadcn/separator"
import { 
  Textarea 
} from "@/components/ui-shadcn/textarea"
import { 
  Badge 
} from "@/components/ui-shadcn/badge"

// Datos de ejemplo del cliente
const clienteData = {
  nombre: "Pedro Meseguer Gelardo",
  email: "peter.msgr@mgmail.com",
  telefono: "600 23 93 75",
  direccion: "Calle Ginés Garcia Esquitino, nº7, Elche, Alicante",
  fechaNacimiento: "25/11/2000",
  sexo: "Masculino",
  abogado: {
    nombre: "Carlos Jiménez Rodríguez",
    especialidad: "Accidentes de movilidad urbana",
    email: "carlos.jimenez@asesolegal.com",
    telefono: "910 123 456",
  },
  caso: {
    referencia: "ACDC-2025-2000",
    fechaInicio: "23/04/2025",
    estado: "En proceso: Negociación",
    etapa: 3,
    descripcion: "Atropello con patinete eléctrico"
  }
}

// Etapas del proceso legal
const etapas = [
  {
    id: 1,
    nombre: "Evaluación inicial",
    completado: true,
    fecha: "07/04/2025"
  },
  {
    id: 2,
    nombre: "Investigación",
    completado: true,
    fecha: "15/04/2025"
  },
  {
    id: 3,
    nombre: "Negociación",
    completado: false,
    enCurso: true,
    fecha: "En curso"
  },
  {
    id: 4,
    nombre: "Proceso judicial",
    completado: false,
    fecha: "Pendiente"
  },
  {
    id: 5,
    nombre: "Resolución",
    completado: false,
    fecha: "Pendiente"
  }
]

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState("datos")
  const [motivoReporte, setMotivoReporte] = useState("consulta")
  const [textoReporte, setTextoReporte] = useState("")

  const handleSubmitReporte = () => {
    alert("El reporte se ha enviado correctamente. Un responsable se pondrá en contacto con usted en breve.")
    setTextoReporte("")
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Cabecera */}
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/emulator" 
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Volver</span>
              </Link>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">Mi perfil</h1>
            </div>
            
            {/* Acciones rápidas */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm" className="gap-1">
                  <AlertCircle className="h-4 w-4" />
                  <span>Reportar</span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Crear reporte o consulta</AlertDialogTitle>
                  <AlertDialogDescription className="text-slate-600 dark:text-slate-400">
                    Utilice este formulario para reportar un problema, realizar una consulta o solicitar atención especial para su caso.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                
                <div className="space-y-4 my-4">
                  <RadioGroup 
                    value={motivoReporte} 
                    onValueChange={setMotivoReporte}
                    className="flex flex-col space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="consulta" id="consulta" />
                      <label htmlFor="consulta" className="text-sm font-medium">
                        Consulta general
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="urgencia" id="urgencia" />
                      <label htmlFor="urgencia" className="text-sm font-medium">
                        Solicitud urgente
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="queja" id="queja" />
                      <label htmlFor="queja" className="text-sm font-medium">
                        Queja o reclamación
                      </label>
                    </div>
                  </RadioGroup>
                  
                  <Textarea 
                    placeholder="Describa su consulta, urgencia o queja en detalle..." 
                    className="min-h-[120px]"
                    value={textoReporte}
                    onChange={e => setTextoReporte(e.target.value)}
                  />
                </div>
                
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction onClick={handleSubmitReporte}>Enviar reporte</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Sidebar - Información básica */}
          <div className="md:col-span-1">
            <Card className="overflow-hidden border-0 shadow-md mb-6">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-750 p-4 flex flex-col items-center text-center">
                <div className="relative h-24 w-24 rounded-full border-4 border-white dark:border-slate-700 mb-2 overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <User className="h-full w-full p-2 text-slate-400 dark:text-slate-500" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 dark:text-white mt-2">
                  {clienteData.nombre}
                </CardTitle>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Cliente desde {clienteData.caso.fechaInicio}
                </div>
                <Badge className="mt-2" variant="outline">{clienteData.caso.referencia}</Badge>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Mail className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Correo electrónico
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {clienteData.email}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Teléfono
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {clienteData.telefono}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Dirección
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {clienteData.direccion}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Fecha de nacimiento
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {clienteData.fechaNacimiento}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <User className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Sexo
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {clienteData.sexo}
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <Button variant="outline" className="w-full mt-2" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Editar datos
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-0 shadow-md">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-750 p-4">
                <CardTitle className="text-lg font-bold text-slate-800 dark:text-white">
                  Abogado asignado
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <span className="font-semibold text-blue-700 dark:text-blue-300">
                      {clienteData.abogado.nombre.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-800 dark:text-white">
                      {clienteData.abogado.nombre}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contenido principal */}
          <div className="md:col-span-2">
            <Card className="overflow-hidden border-0 shadow-md">
              <Tabs 
                defaultValue="proceso" 
                value={activeTab} 
                onValueChange={setActiveTab} 
                className="w-full"
              >
                <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-750 px-4 py-3">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="proceso">Proceso legal</TabsTrigger>
                    <TabsTrigger value="caso">Mi caso</TabsTrigger>
                    <TabsTrigger value="datos">Documentos</TabsTrigger>
                  </TabsList>
                </CardHeader>
                
                <CardContent className="p-0">
                  <TabsContent value="proceso" className="m-0">
                    <div className="p-4">
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">
                          Estado actual del proceso
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Su caso se encuentra actualmente en la fase de <span className="font-medium text-blue-600 dark:text-blue-400">Negociación</span> con la aseguradora.
                        </p>
                      </div>
                      
                      <div className="relative mt-8 pb-4">
                        {/* Línea de progreso */}
                        <div className="absolute top-3 left-4 h-full w-0.5 bg-slate-200 dark:bg-slate-700"></div>
                        
                        <div className="space-y-8">
                          {etapas.map((etapa) => (
                            <div key={etapa.id} className="relative pl-10">
                              <div className={`absolute left-3.5 top-0.5 -translate-x-1/2 h-5 w-5 rounded-full flex items-center justify-center
                                ${etapa.completado 
                                  ? 'bg-green-100 dark:bg-green-900' 
                                  : etapa.enCurso 
                                    ? 'bg-blue-100 dark:bg-blue-900' 
                                    : 'bg-slate-100 dark:bg-slate-800'}`}
                              >
                                {etapa.completado ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                                ) : etapa.enCurso ? (
                                  <Clock className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                ) : (
                                  <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                                )}
                              </div>
                              
                              <div className="mb-1 flex items-center gap-2">
                                <h4 className={`font-medium 
                                  ${etapa.completado 
                                    ? 'text-green-600 dark:text-green-400' 
                                    : etapa.enCurso 
                                      ? 'text-blue-600 dark:text-blue-400' 
                                      : 'text-slate-600 dark:text-slate-400'}`}
                                >
                                  {etapa.nombre}
                                </h4>
                                
                                {etapa.completado && (
                                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800">
                                    Completado
                                  </Badge>
                                )}
                                
                                {etapa.enCurso && (
                                  <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                                    En curso
                                  </Badge>
                                )}
                              </div>
                              
                              <p className="text-sm text-slate-500 dark:text-slate-400">
                                {etapa.fecha}
                              </p>
                              
                              {etapa.enCurso && (
                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="caso" className="m-0">
                    <div className="p-4">
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                          Detalles del caso
                        </h3>
                        <div className="mt-2 space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              Descripción del caso
                            </h4>
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                              {clienteData.caso.descripcion}.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="datos" className="m-0">
                    <div className="p-4">
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                          Documentos del caso
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          Estos son los documentos relevantes para su caso.
                        </p>
                        
                        <Link href="/archivos" className="mt-2 inline-flex">
                          <Button className="gap-2">
                            <FileText className="h-4 w-4" />
                            Ir a gestión de documentos
                          </Button>
                        </Link>
                      </div>
                      
                      <div className="mt-6 space-y-4">
                        <div className="flex items-start gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-md">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-blue-100 dark:bg-blue-900">
                            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col">
                              <p className="font-medium text-slate-900 dark:text-white">Informe médico inicial.pdf</p>
                              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                                <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-700">
                                  Médico
                                </Badge>
                                <span>•</span>
                                <span>3.2 MB</span>
                                <span>•</span>
                                <span>07/04/2025</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-md">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-blue-100 dark:bg-blue-900">
                            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col">
                              <p className="font-medium text-slate-900 dark:text-white">Informe policial.pdf</p>
                              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                                <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-700">
                                  Evidencias
                                </Badge>
                                <span>•</span>
                                <span>1.8 MB</span>
                                <span>•</span>
                                <span>05/04/2025</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-md">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-blue-100 dark:bg-blue-900">
                            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col">
                              <p className="font-medium text-slate-900 dark:text-white">Reclamación inicial.docx</p>
                              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                                <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-700">
                                  Legal
                                </Badge>
                                <span>•</span>
                                <span>245 KB</span>
                                <span>•</span>
                                <span>15/04/2025</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-md">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-blue-100 dark:bg-blue-900">
                            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col">
                              <p className="font-medium text-slate-900 dark:text-white">Fotos accidente.zip</p>
                              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                                <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-700">
                                  Evidencias
                                </Badge>
                                <span>•</span>
                                <span>8.7 MB</span>
                                <span>•</span>
                                <span>04/04/2025</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </CardContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-slate-200 py-4 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} AsesoLegal Patinetes
        </p>
      </footer>
    </div>
  )
}