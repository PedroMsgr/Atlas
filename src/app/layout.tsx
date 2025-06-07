import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/layout/ClientProviders";
import { metadata } from "./metadata";
import { geistSans, geistMono } from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
