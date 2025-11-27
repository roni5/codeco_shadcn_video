import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Use <alpha-value> so bg-primary/50 etc. work
        primary: "oklch(var(--color-primary) / <alpha-value>)",
        "primary-foreground": "oklch(var(--color-primary-foreground) / <alpha-value>)",
        secondary: "oklch(var(--color-secondary) / <alpha-value>)",
        "secondary-foreground": "oklch(var(--color-secondary-foreground) / <alpha-value>)",
        accent: "oklch(var(--color-accent) / <alpha-value>)",
        "accent-foreground": "oklch(var(--color-accent-foreground) / <alpha-value>)",
        background: "oklch(var(--color-background) / <alpha-value>)",
        foreground: "oklch(var(--color-foreground) / <alpha-value>)",
        muted: "oklch(var(--color-muted) / <alpha-value>)",
        "muted-foreground": "oklch(var(--color-muted-foreground) / <alpha-value>)",
        border: "oklch(var(--color-border) / <alpha-value>)",
        input: "oklch(var(--color-input) / <alpha-value>)",
        ring: "oklch(var(--color-ring) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
// import type { Config } from "tailwindcss";

// const config: Config = {
// 	content: [
// 		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
// 		"./components/**/*.{js,ts,jsx,tsx,mdx}",
// 		"./app/**/*.{js,ts,jsx,tsx,mdx}",
// 	],
// 	darkMode: "class",
// 	theme: {
// 		extend: {
// 			colors: {
// 				primary: "oklch(var(--color-primary))",
// 				"primary-foreground": "oklch(var(--color-primary-foreground))",
// 				secondary: "oklch(var(--color-secondary))",
// 				"secondary-foreground": "oklch(var(--color-secondary-foreground))",
// 				accent: "oklch(var(--color-accent))",
// 				"accent-foreground": "oklch(var(--color-accent-foreground))",
// 				background: "oklch(var(--color-background))",
// 				foreground: "oklch(var(--color-foreground))",
// 				muted: "oklch(var(--color-muted))",
// 				"muted-foreground": "oklch(var(--color-muted-foreground))",
// 				border: "oklch(var(--color-border))",
// 				input: "oklch(var(--color-input))",
// 				ring: "oklch(var(--color-ring))",
// 			},
// 			borderRadius: {
// 				lg: "var(--radius)",
// 				md: "calc(var(--radius) - 2px)",
// 				sm: "calc(var(--radius) - 4px)",
// 			},
// 		},
// 	},
// 	plugins: [require("tailwindcss-animate")],
// };

// export default config;

// import type { Config } from "tailwindcss";

// const config: Config = {
// 	content: [
// 		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
// 		"./components/**/*.{js,ts,jsx,tsx,mdx}",
// 		"./app/**/*.{js,ts,jsx,tsx,mdx}",
// 	],
// 	darkMode: "class",
// 	theme: {
// 		extend: {
// 			colors: {
// 				primary: "hsl(var(--color-primary))",
// 				"primary-foreground": "hsl(var(--color-primary-foreground))",
// 				secondary: "hsl(var(--color-secondary))",
// 				"secondary-foreground": "hsl(var(--color-secondary-foreground))",
// 				accent: "hsl(var(--color-accent))",
// 				"accent-foreground": "hsl(var(--color-accent-foreground))",
// 				background: "hsl(var(--color-background))",
// 				foreground: "hsl(var(--color-foreground))",
// 				muted: "hsl(var(--color-muted))",
// 				"muted-foreground": "hsl(var(--color-muted-foreground))",
// 				border: "hsl(var(--color-border))",
// 				input: "hsl(var(--color-input))",
// 				ring: "hsl(var(--color-ring))",
// 			},
// 			borderRadius: {
// 				lg: "var(--radius)",
// 				md: "calc(var(--radius) - 2px)",
// 				sm: "calc(var(--radius) - 4px)",
// 			},
// 		},
// 	},
// 	plugins: [require("tailwindcss-animate")],
// };

// export default config;

// import type { Config } from 'tailwindcss'

// const config: Config = {
// 	content: [
// 		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
// 		'./components/**/*.{js,ts,jsx,tsx,mdx}',
// 		'./app/**/*.{js,ts,jsx,tsx,mdx}',
// 	],
// 	darkMode: 'class',
// 	theme: {
// 		extend: {
// 			colors: {
// 				primary: 'hsl(var(--color-primary))',
// 				'primary-foreground': 'hsl(var(--color-primary-foreground))',
// 				secondary: 'hsl(var(--color-secondary))',
// 				'secondary-foreground': 'hsl(var(--color-secondary-foreground))',
// 				accent: 'hsl(var(--color-accent))',
// 				'accent-foreground': 'hsl(var(--color-accent-foreground))',
// 				background: 'hsl(var(--color-background))',
// 				foreground: 'hsl(var(--color-foreground))',
// 				muted: 'hsl(var(--color-muted))',
// 				'muted-foreground': 'hsl(var(--color-muted-foreground))',
// 				border: 'hsl(var(--color-border))',
// 				input: 'hsl(var(--color-input))',
// 				ring: 'hsl(var(--color-ring))',
// 			},
// 			borderRadius: {
// 				lg: 'var(--radius)',
// 				md: 'calc(var(--radius) - 2px)',
// 				sm: 'calc(var(--radius) - 4px)',
// 			},
// 		},
// 	},
// 	plugins: [require('tailwindcss-animate')],
// }

// export default config
