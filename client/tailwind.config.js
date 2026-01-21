/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", /* <--- This line is CRITICAL */
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: '#C5A059',
        primaryHover: '#B08D45',
        midnight: '#020617',
        surface: '#0f172a',
        light: '#f8fafc',
        muted: '#94a3b8',
      },
      fontFamily: {
        sans: ['sans-serif'],
        serif: ['serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(to right bottom, #020617, #0f172a)',
        'gold-gradient': 'linear-gradient(to right, #C5A059, #E5C579, #C5A059)',
      }
    },
  },
  plugins: [],
}