/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1128',
          50: '#eef2f9',
          900: '#0B2545',
          950: '#0A1128',
        },
        royal: {
          DEFAULT: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        emerald: {
          DEFAULT: '#059669',
        },
        amber: {
          DEFAULT: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        'spine': '110rem',
      },
      boxShadow: {
        'card': '0 20px 50px rgba(0,0,0,0.05)',
        'card-hover': '0 30px 60px rgba(0,0,0,0.12)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'wipe': {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'wipe': 'wipe 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
