import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5", // Indigo
          hover: "#4338CA",
        },
        secondary: {
          DEFAULT: "#06B6D4", // Cyan
        },
        accent: {
          DEFAULT: "#10B981", // Emerald
        },
        slate: {
          950: "#0B0F19", // Ultra dark navy for dark glass
        },
      },
      borderRadius: {
        glass: "18px",
      },
      backdropBlur: {
        glass: "16px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};
export default config;