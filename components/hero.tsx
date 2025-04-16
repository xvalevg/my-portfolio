"use client"

import type React from "react"

import { personalInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
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
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-16 pb-8 px-4 bg-gradient-to-b from-theme-50 to-white"
    >
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Hola, soy <span className="text-theme-600">{personalInfo.name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-8">{personalInfo.title}</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Especialista en aseguramiento de calidad, enfocada en crear experiencias digitales excepcionales a través de
          pruebas rigurosas y una perspectiva centrada en el usuario.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-theme-600 hover:bg-theme-700 text-white px-8 py-6 rounded-md">
            <a href="#projects" onClick={(e) => handleScrollToSection(e, "projects")}>
              Ver proyectos
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-theme-600 text-theme-600 hover:bg-theme-50 px-8 py-6 rounded-md"
          >
            <a href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>
              Contactar
            </a>
          </Button>
        </div>
      </div>
      <div className="mt-16 animate-bounce">
        <a href="#about" onClick={(e) => handleScrollToSection(e, "about")} aria-label="Desplazarse hacia abajo">
          <ArrowDown className="text-theme-600" size={32} />
        </a>
      </div>
    </section>
  )
}
