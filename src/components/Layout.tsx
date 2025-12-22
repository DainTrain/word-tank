import { type ReactNode } from "react"
import { Navbar } from './Navbar'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-16">
            <Navbar />
            <main className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {children}
            </main>

        </div>
    )
}
