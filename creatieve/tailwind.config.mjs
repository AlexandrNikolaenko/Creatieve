/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bright: '#FF7105',
        'active-bright': '#FF7105',
        dark: '#191919',
        'base-color': '#AF63FF',
        'active-base': '#9146E1',
        'dark-base': '#7D34CC',
      },
      borderRadius: {
        base: '10px'
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
        base: ['"Unbounded"', 'sans-serif'],
        attention: ['"Dela Gothic One"', 'sans-serif'],
        ital: ['"Shantell Sans', 'sans-serif']
      },
      boxShadow: {
        'small': '0 0 4 rgba(0, 0, 0, 0.25)',
        'base': '0 0 8 rgba(0, 0, 0, 0.25)',
        'section': '0 -8 10 rgba(0, 0, 0, 0.1)',
        'inner': '0 0 10 rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
};
