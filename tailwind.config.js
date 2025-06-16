/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern theme colors
        'modern-primary': '#6366f1',
        'modern-secondary': '#8b5cf6',
        'modern-accent': '#ec4899',
        
        // Desi theme colors
        'desi-primary': '#e11d48',
        'desi-secondary': '#fbbf24',
        'desi-accent': '#15803d',
        
        // Minimal theme colors
        'minimal-primary': '#262626',
        'minimal-secondary': '#525252',
        'minimal-accent': '#737373',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'mukta': ['Mukta', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  plugins: [],
}