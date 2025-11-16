/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00C853",
        primaryLight: "#00E676",
        dark: "#121212",
        dark2: "#1A1A1A",
        lightText: "#EAEAEA"
      },
      fontFamily: {
        grotesque: ['Bricolage Grotesque', 'sans-serif'],
      },
      boxShadow: {
        'neon-sm': '0 4px 18px rgba(0,200,83,0.14)',
        'neon-md': '0 10px 40px rgba(0,200,83,0.12)',
        'neon-strong': '0 20px 80px rgba(0,200,83,0.18)'
      },
      keyframes: {
        glowPulse: {
          '0%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.04)' },
          '100%': { opacity: '0.45', transform: 'scale(1)' },
        }
      },
      animation: {
        'glow-pulse': 'glowPulse 3.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
