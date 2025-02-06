import type { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "#ffffe0", // Super Pale Yellow Background
				foreground: "#008040", // Green Text updated to #008040
				primary: {
					DEFAULT: "#ff66b2", // Pink
					foreground: "#ffffff"
				},
				secondary: {
					DEFAULT: "#ccffcc", // Light Green
					foreground: "#000000"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "#008040" // Updated muted text green to #008040
				},
				accent: {
					DEFAULT: "#ff66b2", // Pink Accent
					foreground: "#ffffff"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "#008040" // Updated popover text green to #008040
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "#008040" // Updated card text green to #008040
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out"
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
} satisfies Config

export default config
