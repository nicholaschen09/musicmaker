"use client"

import { useTheme } from "next-themes"
import { Icons } from "@/icons"

export function Theme() {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <button hidden onClick={toggleTheme}>
    </button>
  )
}
