/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceDown: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(10px)', opacity: '0.8' },
        },
      },
      animation: {
        bounceDown: 'bounceDown 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}