/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'typing-dot': 'typing-dot 0.1s forwards',
        'fade-in': 'fade-in 1s ease-out',
      },
      keyframes: {
        'typing-dot': {
          '0%': { opacity: '0' },
          '1%': { opacity: '1' },
          '100%': { opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'black-han-sans': ['"Black Han Sans"', 'sans-serif'],
      },
      colors: {
        github: '#24292e',
        'custom-navy': '#12104E',
        'custom-gold': '#edb352',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
