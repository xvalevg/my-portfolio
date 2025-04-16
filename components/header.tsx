"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { cn } from "@/lib/utils"
import ThemeSwitcher from "./theme-switcher"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { name: "Inicio", href: "#home", id: "home" },
    { name: "Sobre mí", href: "#about", id: "about" },
    { name: "Proyectos", href: "#projects", id: "projects" },
    { name: "Contacto", href: "#contact", id: "contact" },
  ]

  // Función para manejar el scroll suave
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)

    if (section) {
      // Calcular la posición de desplazamiento teniendo en cuenta el header
      const headerHeight = 80 // Altura aproximada del header en píxeles
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      })

      // Cerrar el menú móvil si está abierto
      setIsMenuOpen(false)

      // Actualizar la sección activa
      setActiveSection(sectionId)
    }
  }

  // Detectar la sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset para detectar la sección un poco antes

      // Encontrar la sección actual basada en la posición de scroll
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Llamar una vez al inicio para establecer la sección activa inicial

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-theme-600" onClick={(e) => handleScrollToSection(e, "home")}>
          {personalInfo.name}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex space-x-8 mr-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.id)}
                className={cn(
                  "transition-colors",
                  activeSection === item.id ? "text-theme-600 font-medium" : "text-gray-600 hover:text-theme-600",
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <button
            className="text-gray-600 hover:text-theme-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-20 px-4 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleScrollToSection(e, item.id)}
            className={cn(
              "py-4 text-lg text-center border-b border-gray-100 transition-colors",
              activeSection === item.id ? "text-theme-600 font-medium" : "text-gray-600 hover:text-theme-600",
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  )
}
