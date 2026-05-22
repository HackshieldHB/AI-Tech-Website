import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                background: "#FFFFFF",
                foreground: "#111111",
                primary: {
                    DEFAULT: "#1D4ED8",
                    light: "#2563EB",
                    dark: "#1E3A8A",
                },
                secondary: {
                    DEFAULT: "#2563EB",
                    light: "#3B82F6",
                    dark: "#1E40AF",
                },
                accent: {
                    DEFAULT: "#2563EB",
                    light: "#60A5FA",
                },
                muted: {
                    DEFAULT: "#F8FAFC",
                    foreground: "#6B7280",
                },
                card: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#111111",
                    border: "#E5E7EB",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-space-grotesk)", "sans-serif"],
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
        },
    },
    plugins: [],
};
export default config;
