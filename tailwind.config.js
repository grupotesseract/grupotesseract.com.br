/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    width: {
      '358': '22.375rem'
    },
    height: {
      '404': '25.25rem',
      '42': '2.625rem',
      '112': '7rem'
    },
    blur: {
      '1': '1px'
    },
    colors: {
      lightBlue: '#23AFB3',
      gray: '#D9D9D9',
      extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
    },
  },
},
  plugins: [],
}
