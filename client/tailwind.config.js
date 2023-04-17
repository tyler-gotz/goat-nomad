/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        theme: {
          primary: '#307351',
          secondary: '#78CAD2',
          // accent: '#1FB2A5',
          // neutral: '#191D24',
          'base-100': '#2A303C',
          white: '#F0EFF4'
          // 'info': '#3ABFF8',
          // 'success': '#36D399',
          // warning': '#FBBD23',
          // 'error': '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}

