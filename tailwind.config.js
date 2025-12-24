/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vscode: {
          bg: '#1e1e1e',
          'bg-lighter': '#252526',
          'bg-lightest': '#2d2d30',
          text: '#d4d4d4',
          'text-muted': '#858585',
          accent: '#007acc',
          'accent-hover': '#1a8ad1',
          border: '#3e3e42',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
    },
  },
};
