import * as React from "react"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        return (
            <input
                className={`px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary dark:bg-gray-800 dark:text-gray-100 ${className}`}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"
