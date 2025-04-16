import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"

export const metadata: Metadata = {
  title: "Ximena Valeria Velasco - Profesional de QA",
  description: "Portafolio profesional de Ximena Valeria Velasco, especialista en QA",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'