import "./globals.css";
import ClientProviders from "@/components/layout/ClientProviders";
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
