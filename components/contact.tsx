"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { personalInfo } from "@/lib/data"
import { Mail, Linkedin, Github, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contacto</h2>
        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-theme-600">¡Hablemos!</h3>
            <p className="text-gray-600 mb-8">
              Si estás interesado en mi trabajo o tienes alguna pregunta, no dudes en contactarme. Estoy abierta a
              nuevas oportunidades y colaboraciones.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-theme-600" size={20} />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-700 hover:text-theme-600 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="text-theme-600" size={20} />
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-theme-600 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Github className="text-theme-600" size={20} />
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-theme-600 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
