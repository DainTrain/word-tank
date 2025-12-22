import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"

export function Navbar() {
    const location = useLocation()

    // Helper to highlight active route
    const isActive = (path: string) => location.pathname === path

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-gray-200 dark:bg-gray-800 p-4 flex items-center gap-2 shadow-md">
            <Button
                asChild
                variant={isActive("/") ? "default" : "ghost"}
                size="sm"
            >
                <Link to="/">Home</Link>
            </Button>

            <Button
                asChild
                variant={isActive("/about") ? "default" : "ghost"}
                size="sm"
            >
                <Link to="/about">About</Link>
            </Button>

            <div className="ml-auto">
                <ThemeToggle />
            </div>
        </nav>
    )
}
