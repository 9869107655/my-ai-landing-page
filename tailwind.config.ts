import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff9e6",
          100: "#fff0b8",
          200: "#ffe186",
          300: "#ffd14d",
          400: "#f5bc1d",
          500: "#d99c0d",
          600: "#ac7908",
          700: "#865e08",
          800: "#624505",
          900: "#3d2a04"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 209, 77, 0.14), 0 18px 60px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(circle at top, rgba(255, 209, 77, 0.14), transparent 28%), radial-gradient(circle at 80% 30%, rgba(255, 209, 77, 0.1), transparent 20%), linear-gradient(180deg, #0a0a0a 0%, #050505 55%, #070707 100%)"
      }
    }
  },
  plugins: []
};

export default config;
