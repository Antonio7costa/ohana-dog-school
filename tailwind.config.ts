import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Azul Ohana principal extraído da flor
        primary: {
          DEFAULT: "#37A8F5",
          foreground: "#ffffff",
        },
        // Cores secundárias derivadas das outras flores
        secondary: {
          green: "#83E66E",
          yellow: "#FBE365",
          purple: "#C874E3",
        },
        slate: {
          900: "#1e293b",
          700: "#475569",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // O plugin "tailwindcss-animate" foi removido para evitar o erro de módulo não encontrado.
  plugins: [],
};

export default config;