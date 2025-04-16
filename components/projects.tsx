import { projects } from "@/lib/data"
import ProjectCard from "./project-card"

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Mis Proyectos</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Cada proyecto es una historia que refleja mi enfoque en la calidad, mi capacidad para resolver problemas y mi
          compromiso con la excelencia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
