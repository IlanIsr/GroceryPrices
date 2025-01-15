import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        database: {
          primary: '#0B141A',
          secondary: '#111B21',
          tertiary: '#202C33',
          hover: '#2A3942',
          border: {
            DEFAULT: '#6B7280',
          },
          accent: {
            DEFAULT: '#00A884',
            hover: '#00956E',
          },
          status: {
            blue: {
              bg: 'rgba(59, 130, 246, 0.2)',
              text: '#93C5FD',
            },
            green: {
              bg: 'rgba(34, 197, 94, 0.2)',
              text: '#86EFAC',
            },
            yellow: {
              bg: 'rgba(234, 179, 8, 0.2)',
              text: '#FDE047',
            },
            red: {
              bg: 'rgba(239, 68, 68, 0.2)',
              text: '#FCA5A5',
            },
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config);
