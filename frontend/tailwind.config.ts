import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ['class'],
	content: [
		// ESCANEA TODAS ESTAS RUTAS
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./hooks/**/*.{js,ts,jsx,tsx,mdx}',
		'./lib/**/*.{js,ts,jsx,tsx,mdx}',
		// Agrega explícitamente app/pages si existe
		'./app/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/dashboard/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/schemas/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/services/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/styles/**/*.{js,ts,jsx,tsx,mdx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
				roboto: ['var(--font-roboto)', 'sans-serif'],
			},
			backgroundImage: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			animation: {
				'scroll-slow': 'scroll 30s linear infinite',
				'scroll-medium': 'scroll 20s linear infinite',
				'scroll-fast': 'scroll 10s linear infinite',
				'scroll-slower': 'scroll 40s linear infinite',
				'scroll-reverse': 'scroll-reverse 20s linear infinite',
				'scroll-pause': 'scroll 20s linear infinite paused',
				'scroll-vertical': 'scroll-vertical 20s linear infinite',
			},
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				'scroll-reverse': {
					'0%': { transform: 'translateX(-50%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'scroll-vertical': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-50%)' },
				}
			}
		}
	},
	plugins: [
		require('flowbite/plugin'),
		require("tailwindcss-animate")
	],
};
export default config;
