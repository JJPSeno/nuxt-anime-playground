/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#0C0C0C',
        secondary: '#FFC20C',
        dark: '#9CA3AF'
      },
      backgroundImage:{
        'noise': "url('images/backgrounds/noise.svg')",
        'pattern': "url('images/backgrounds/ttten.svg')"
      },
      fontFamily:{
        mono: ['DepartureMono', 'monospace'],
      },
    },
  },
  plugins: [],
}

