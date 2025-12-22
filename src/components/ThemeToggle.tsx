"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const root = window.document.documentElement
        if (isDark) root.classList.add("dark")
        else root.classList.remove("dark")
    }, [isDark])

    return (
        <Button onClick={() => setIsDark(!isDark)}>
            {isDark ? "Light Mode" : "Dark Mode"}
        </Button>
    )
}
