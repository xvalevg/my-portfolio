"use client"

import { useTheme } from "@/contexts/theme-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Palette } from "lucide-react"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const themes = [
    { id: "bronze", name: "Bronce", color: "#B76E79" },
    { id: "teal", name: "Verde", color: "#14b8a6" },
    // { id: "blue", name: "Azul", color: "#006E79" },
    // { id: "purple", name: "Púrpura", color: "#8b5cf6" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full" aria-label="Cambiar tema">
          <Palette className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.id}
            onClick={() => setTheme(t.id as any)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: t.color }} aria-hidden="true"></div>
            <span>{t.name}</span>
            {theme === t.id && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
