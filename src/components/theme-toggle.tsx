"use client"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="text-white hover:text-white/80 transition-colors p-2">
        🌙
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-white hover:text-white/80 transition-colors p-2"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  )
}

export default ThemeToggle