"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type ThemeType = "bronze" | "teal" | "blue" | "purple"

type ThemeContextType = {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("bronze")

  // Cargar el tema guardado en localStorage al iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as ThemeType
    if (savedTheme && ["bronze", "teal", "blue", "purple"].includes(savedTheme)) {
      setTheme(savedTheme)
      document.documentElement.setAttribute("data-theme", savedTheme)
    }
  }, [])

  // Guardar el tema en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
