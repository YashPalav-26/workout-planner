/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#d9f99d", // Lime 200
                "primary-hover": "#bef264", // Lime 300
                "background-dark": "#0f0f0f", // Deep black
                "surface": "#18181b", // Zinc 900
                "surface-highlight": "#27272a", // Zinc 800
                "border-subtle": "#27272a", // Zinc 800
                "text-main": "#f4f4f5", // Zinc 100
                "text-secondary": "#a1a1aa", // Zinc 400
                "accent-blue": "#38bdf8",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"],
                "body": ["Inter", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px",
                "3xl": "1.5rem"
            },
            backgroundImage: {
                'grid-white': "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)"
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
