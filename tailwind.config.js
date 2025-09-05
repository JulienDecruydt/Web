/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        'neon-blue': '#00d4ff',
        'mint-green': '#00ffa3',
        'soft-purple': '#b794f6',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'rotate': 'rotate 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { 
            'box-shadow': '0 0 20px rgba(0, 212, 255, 0.3)',
          },
          '100%': { 
            'box-shadow': '0 0 40px rgba(0, 212, 255, 0.6), 0 0 60px rgba(0, 212, 255, 0.4)',
          },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
} 