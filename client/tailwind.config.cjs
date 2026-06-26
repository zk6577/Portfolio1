/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#030712",
          surface: "#050816",
          muted: "#a1a1aa",
          purple: "#8b5cf6",
          pink: "#ec4899",
          cyan: "#22d3ee",
          blue: "#3b82f6",
          green: "#22c55e",
          red: "#ef4444"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        neon: "0 30px 120px rgba(139, 92, 246, 0.18)",
        button: "0 16px 45px rgba(139, 92, 246, 0.32)"
      },
      keyframes: {
        rotate: {
          to: { transform: "rotate(360deg)" }
        },
        float: {
          "50%": { transform: "translateY(-24px)" }
        }
      },
      animation: {
        "rotate-slow": "rotate 18s linear infinite",
        "rotate-slower": "rotate 26s linear infinite reverse",
        float: "float 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
