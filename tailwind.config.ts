import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: "var(--font-poppins)",
      },
      screens: {
        xs: "320px", // Custom breakpoint for small mobile screens
        sm: "640px", // Tablets and medium-sized screens
        md: "1024px", // Laptops and larger screens
        lg: "1280px", // Desktops
      },
    },
  },
  plugins: [],
} satisfies Config;
