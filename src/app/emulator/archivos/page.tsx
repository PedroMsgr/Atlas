"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Download, Upload, Calendar, FileIcon, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// Datos de ejemplo para los archivos compartidos
const abogadoFiles = [

  {
    id: 1,
    name: "Reclamación inicial.docx",
    type: "DOCX",
    size: "245 KB",
    date: "15/04/2025",
    category: "Documentos legales",
  },
  {
    id: 2,
    name: "Normativa patinetes.pdf",
    type: "PDF",
    size: "3.8 MB",
    date: "10/04/2025",
    category: "Legislación",
  },
  {
    id: 3,
    name: "Pasos a seguir.pdf",
    type: "PDF",
    size: "780 KB",
    date: "08/04/2025",
    category: "Instrucciones",
  },
  {
    id: 4,
    name: "Informe médico.pdf",
    type: "PDF",
    size: "2.4 MB",
    date: "05/04/2025",
    category: "Informes",
  },
  {
    id: 5,
    name: "Informe médico.pdf",
    type: "PDF",
    size: "2.4 MB",
    date: "05/04/2025",
    category: "Informes",
  }
];

const clienteFiles = [
  {
    id: 1,
    name: "Informe médico.pdf",
    type: "PDF",
    size: "2.4 MB",
    date: "20/04/2025",
    category: "Médico",
  },
  {
    id: 2,
    name: "Fotos del accidente.zip",
    type: "ZIP",
    size: "8.7 MB",
    date: "12/04/2025",
    category: "Evidencias",
  },
  {
    id: 3,
    name: "Factura reparación.pdf",
    type: "PDF",
    size: "190 KB",
    date: "05/04/2025",
    category: "Facturas",
  }
];

export default function ArchivosPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("recibidos");
  
  // Filtrar archivos basados en la búsqueda
  const filteredAbogadoFiles = abogadoFiles.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    file.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredClienteFiles = clienteFiles.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    file.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Función para manejar la subida de archivos (simulada)
  const handleFileUpload = () => {
    // Esto sería implementado con una función real de subida de archivos
    alert("Esta funcionalidad estaría conectada a un sistema de almacenamiento en la versión final");
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Cabecera */}
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <Link 
              href="/emulator" 
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Volver</span>
            </Link>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Archivos compartidos</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4 md:p-6">
        <div className="flex flex-col space-y-6">
          {/* Barra de búsqueda y botón de subida */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 dark:text-slate-400" />
              <Input
                placeholder="Buscar archivos..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              onClick={handleFileUpload}
              className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900 gap-2"
            >
              <Upload className="h-4 w-4" />
              Subir archivo
            </Button>
          </div>

          {/* Pestañas */}
          <Tabs 
            defaultValue="recibidos" 
            value={selectedTab} 
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="recibidos">Archivos del abogado</TabsTrigger>
              <TabsTrigger value="enviados">Mis archivos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="recibidos" className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-medium text-slate-900 dark:text-white">Documentos del abogado</h2>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span>{filteredAbogadoFiles.length} archivos</span>
                </div>
              </div>
              
              {/* Lista de archivos */}
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow">
                {filteredAbogadoFiles.length > 0 ? (
                  <div className="divide-y divide-slate-200 dark:divide-slate-700">
                    {filteredAbogadoFiles.map((file) => (
                      <div key={file.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-slate-100 dark:bg-slate-700">
                            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col">
                              <p className="font-medium text-slate-900 dark:text-white truncate">{file.name}</p>
                              <Badge variant="outline" className="w-fit mt-1 text-xs bg-slate-50 dark:bg-slate-700">
                                {file.category}
                              </Badge>
                              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                                <span>{file.size}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3.5 w-3.5" />
                                  {file.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Descargar</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-12 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-slate-100 p-3 dark:bg-slate-700">
                        <FileIcon className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                      </div>
                    </div>
                    <h3 className="mb-1 text-lg font-medium text-slate-900 dark:text-white">No se han encontrado archivos</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Intenta con otra búsqueda</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="enviados" className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-medium text-slate-900 dark:text-white">Mis documentos compartidos</h2>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <span>{filteredClienteFiles.length} archivos</span>
                </div>
              </div>
              
              {/* Lista de archivos */}
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow">
                {filteredClienteFiles.length > 0 ? (
                  <div className="divide-y divide-slate-200 dark:divide-slate-700">
                    {filteredClienteFiles.map((file) => (
                      <div key={file.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-slate-100 dark:bg-slate-700">
                            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col">
                              <p className="font-medium text-slate-900 dark:text-white truncate">{file.name}</p>
                              <Badge variant="outline" className="w-fit mt-1 text-xs bg-slate-50 dark:bg-slate-700">
                                {file.category}
                              </Badge>
                              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                                <span>{file.size}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3.5 w-3.5" />
                                  {file.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Descargar</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-12 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-slate-100 p-3 dark:bg-slate-700">
                        <FileIcon className="h-6 w-6 text-slate-500 dark:text-slate-400" />
                      </div>
                    </div>
                    <h3 className="mb-1 text-lg font-medium text-slate-900 dark:text-white">No se han encontrado archivos</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Intenta con otra búsqueda</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Sección de instrucciones */}
          <Card className="mt-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Compartir documentos</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                En esta sección puede ver los documentos compartidos por su abogado y también subir documentos 
                relacionados con su caso para que sean revisados por el equipo legal.
              </p>
              <Separator className="my-4" />
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    <span className="text-xs font-medium">1</span>
                  </div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    Use el botón "Subir archivo" para añadir documentos
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    <span className="text-xs font-medium">2</span>
                  </div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    Los documentos compartidos por su abogado están en la pestaña "Archivos del abogado"
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    <span className="text-xs font-medium">3</span>
                  </div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    Los documentos que ha subido están en la pestaña "Mis archivos"
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      {/* Footer minimalista */}
      <footer className="border-t border-slate-200 py-4 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} AsesoLegal Patinetes
        </p>
      </footer>
    </div>
  )
}