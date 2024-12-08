/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#f0fdf4',    // Very light green-orange
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',   // Balanced green-orange
          500: '#22c55e',   // Strong green-orange
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',  
          900: '#14532d',   // Deep green with orange undertones
        },
      },
    },
  },
  plugins: [],
};