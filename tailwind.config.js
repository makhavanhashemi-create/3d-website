/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B2545',
          50: '#E8EDF5',
          100: '#D1DAEB',
          200: '#A3B5D6',
          300: '#7590C2',
          400: '#476BAD',
          500: '#1D4ED8',
          600: '#0F1E3D',
          700: '#081830',
          800: '#050F1F',
          900: '#030A17',
        },
        royal: '#1D4ED8',
        emerald2: '#059669',
        amber2: '#F59E0B',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08)',
        'card-hover': '0 20px 40px -12px rgb(11 37 69 / 0.25)',
      },
    },
  },
  plugins: [],
}
