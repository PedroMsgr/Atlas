import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import { geistSans, geistMono } from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `} // Establece las fuentes variables y el antialiased
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
