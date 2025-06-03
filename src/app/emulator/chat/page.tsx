"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Send, Paperclip } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

// Mensajes iniciales simplificados
const initialMessages = [
  {
    id: 1,
    sender: "lawyer",
    content: "Buenos días, soy Carlos Jiménez, su abogado asignado para el caso de accidente. ¿En qué puedo ayudarle?",
    timestamp: "10:03"
  },
  {
    id: 2,
    sender: "client",
    content: "Hola, gracias por contactarme. Quería saber qué documentación necesitaré para mi caso.",
    timestamp: "10:15"
  },
  {
    id: 3,
    sender: "lawyer",
    content: "Necesitaremos el informe policial, informes médicos y fotografías del accidente si las tiene. También cualquier factura relacionada con gastos médicos.",
    timestamp: "10:18"
  },
  {
    id: 4,
    sender: "client",
    content: "Entendido, tengo esos documentos. ¿Cuál sería el siguiente paso?",
    timestamp: "10:25"
  },
  {
    id: 5,
    sender: "lawyer",
    content: "Cuando tenga la documentación lista, podemos programar una reunión para revisarla y determinar la estrategia a seguir para su reclamación.",
    timestamp: "10:28"
  }
];

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Función para enviar mensaje
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: "client",
        content: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      };
      
      setMessages([...messages, newMsg]);
      setNewMessage("");
      
      // Simular respuesta del abogado
      setTimeout(() => {
        const autoResponse = {
          id: messages.length + 2,
          sender: "lawyer",
          content: "Entendido. Me pondré en contacto con usted pronto para los siguientes pasos.",
          timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        };
        setMessages(prev => [...prev, autoResponse]);
      }, 2000);
    }
  };

  // Scroll al final cuando hay nuevos mensajes
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900">
      {/* Cabecera simplificada */}
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
        <div className="flex items-center">
          <Link 
            href="/" 
            className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white mr-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Volver</span>
          </Link>
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 border border-blue-200 dark:border-blue-800">
              <AvatarFallback className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                CJ
              </AvatarFallback>
            </Avatar>
            <h2 className="font-medium text-slate-900 dark:text-white">Chat con abogado</h2>
          </div>
        </div>
      </header>

      {/* Área de chat */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="flex flex-col gap-3 pb-4">
          {/* Fecha */}
          <div className="flex justify-center">
            <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              Hoy
            </span>
          </div>

          {/* Mensajes */}
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.sender === "client" ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                  message.sender === "client" 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-slate-900 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <div className={`flex items-center justify-end gap-1 mt-1 text-xs ${
                  message.sender === "client" 
                    ? "text-blue-200" 
                    : "text-slate-500 dark:text-slate-400"
                }`}>
                  <span>{message.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Entrada de mensaje */}
      <div className="border-t border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escriba su mensaje aquí..."
            className="flex-1 border-slate-300 focus-visible:ring-blue-600 dark:border-slate-600"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button 
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Enviar mensaje</span>
          </Button>
        </div>
      </div>
    </div>
  )
}