/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    width: {
      '326': '20.375rem',
      '358': '22.375rem',
      '480': '30rem',
    },
    height: {
      '42': '2.625rem',
      '112': '7rem',
      '200': '12.5rem',
      '404': '25.25rem',
      '550': '34.375rem',
      '560': '35rem',
      '850': '53.125rem',
    },
    blur: {
      '1': '1px'
    },
    colors: {
      lightBlue: '#23AFB3',
      gray: '#D9D9D9',
      grayScale: '#202020',
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
    },
    keyframes: {
      'animar-cursor': {
        '0%': {
          color: '#23AFB3',
        },
        '100%': {
          color: 'rgba(0,0,0,0)'
        },
      },
    },
    animation: {
      'animar-cursor': 'animar-cursor .8s infinite',
    },
  },
},
  plugins: [],
}
