import { Routes, Route, Link } from "react-router-dom"
import Home from "@/pages/Home"
import About from "@/pages/About"
import { ThemeToggle } from "./components/ThemeToggle"

export default function App() {
  return (
    <>
      <nav className="p-4 bg-gray-200 dark:bg-gray-800 flex gap-4 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </nav>
    </>
  )
}
