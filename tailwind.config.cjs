/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Roboto', 'system-ui', 'sans-serif']
      },
      colors: {
        canvas: {
          50: '#f4f7fb',
          900: '#0a101d'
        },
        brand: {
          400: '#5aa6ff',
          500: '#2773ff',
          600: '#1d58cd'
        },
        accent: {
          400: '#8b5cf6',
          500: '#7c3aed'
        }
      },
      boxShadow: {
        soft: '0 20px 50px -24px rgba(15, 23, 42, 0.35)',
        glass: '0 10px 30px -18px rgba(2, 6, 23, 0.5)'
      },
      backdropBlur: {
        xs: '2px'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(80rem 50rem at 15% -10%, rgba(39,115,255,0.24), transparent), radial-gradient(75rem 50rem at 90% 10%, rgba(124,58,237,0.2), transparent)'
      }
    }
  },
  plugins: []
};
