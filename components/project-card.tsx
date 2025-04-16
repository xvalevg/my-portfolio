import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    summary: string
    motivation: string
    role: string
    tools: string[]
    testTypes: string[]
    keyDecision: string
    softSkills: string[]
    impact: string
    imageUrl: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-theme-50 p-6">
        <CardTitle className="text-2xl text-theme-700">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative h-64 w-full">
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={`Imagen del proyecto ${project.title}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <Tabs defaultValue="summary" className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="summary">Resumen</TabsTrigger>
              <TabsTrigger value="details">Detalles</TabsTrigger>
              <TabsTrigger value="tools">Herramientas</TabsTrigger>
              <TabsTrigger value="impact">Impacto</TabsTrigger>
            </TabsList>

            <TabsContent value="summary" className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">¿Qué era el proyecto?</h3>
                <p className="text-gray-600">{project.summary}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">¿Por qué decidí trabajar en este proyecto?</h3>
                <p className="text-gray-600">{project.motivation}</p>
              </div>
            </TabsContent>

            <TabsContent value="details" className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Mi rol</h3>
                <p className="text-gray-600">{project.role}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Decisión clave</h3>
                <p className="text-gray-600">{project.keyDecision}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Habilidades blandas utilizadas</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.softSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-theme-50 text-theme-700 border-theme-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tools" className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Herramientas utilizadas</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} className="bg-theme-600 hover:bg-theme-700">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Tipos de pruebas</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.testTypes.map((type) => (
                    <Badge key={type} variant="secondary" className="bg-gray-100 text-gray-700">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="impact" className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Resultado e impacto</h3>
                <p className="text-gray-600">{project.impact}</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}
