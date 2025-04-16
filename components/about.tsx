import { aboutMe, skills } from "@/lib/data"
import { Progress } from "@/components/ui/progress"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Sobre Mí</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-theme-600">Resumen Profesional</h3>
            <div className="space-y-4 text-gray-600">
              {aboutMe.description.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-theme-600">Habilidades Técnicas</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-gray-200" indicatorClassName="bg-theme-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
