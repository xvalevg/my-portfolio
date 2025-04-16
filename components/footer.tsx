import { personalInfo } from "@/lib/data"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">{personalInfo.name}</p>
            <p className="text-theme-300">{personalInfo.title}</p>
          </div>
          <div>
            <p className="text-gray-400">&copy; {currentYear} Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
