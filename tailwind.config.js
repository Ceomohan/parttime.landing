/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pt-pink': '#ff8cc6',
        'pt-mint': '#63e6be',
        'pt-dark-pink': '#ff6fa3',
        'pt-dark-mint': '#29c998',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.05)', opacity: 0.9 },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-in forwards',
        pulseScale: 'pulseScale 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
