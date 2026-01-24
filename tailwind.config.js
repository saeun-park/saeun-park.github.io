/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        // 기존 배경 애니메이션
        blob: 'blob 7s infinite',
        // 타자치는 효과 (딱딱 끊기게)
        'typing-dot': 'typing-dot 0.1s forwards',
        // 커서 깜빡임
        blink: 'blink 0.8s step-end infinite',
        // 서서히 나타나는 효과 (설명 문구용)
        'fade-in': 'fade-in 1s ease-out',
      },
      keyframes: {
        // 배경 방울 움직임 (회색 배경을 다채롭게 만드는 핵심)
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        // 타자 효과: 0에서 즉시 1로!
        'typing-dot': {
          '0%': { opacity: '0' },
          '1%': { opacity: '1' },
          '100%': { opacity: '1' },
        },
        // 커서 깜빡임
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#1f2937' }, // gray-800
        },
        // 텍스트 깜빡임 (투명도 기반)
        'text-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        github: '#24292e',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
