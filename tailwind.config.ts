import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        copper: {
          50: "#fdf6f3",
          100: "#f9e8e1",
          200: "#f4d0c5",
          300: "#eab19e",
          400: "#e08a6e",
          500: "#d56e4d",
          600: "#c4523e",
          700: "#a33e33",
          800: "#85352f",
          900: "#6e2f2a",
          950: "#3b1612",
        },
        bronze: {
          50: "#fbf7f0",
          100: "#f5ebdc",
          200: "#ead5b9",
          300: "#deba8e",
          400: "#d09c65",
          500: "#c58349",
          600: "#b76a3c",
          700: "#975334",
          800: "#7c4430",
          900: "#663a2a",
          950: "#371c14",
        },
        rosegold: {
          50: "#fdf5f3",
          100: "#fbe8e5",
          200: "#f8d5d0",
          300: "#f3b7ae",
          400: "#ea8c7f",
          500: "#e06c5c",
          600: "#cf4f3d",
          700: "#ad3c2e",
          800: "#8f3529",
          900: "#773228",
          950: "#40150f",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
