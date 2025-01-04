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
        'landingfrom': '#2AC900',
        'landingto': '#02D6EE',
        'sitefrom': '#0011FF',
        'siteto': '#07E6FF',
        'appfrom': '#FF0101',
        'appto': '#F6BC19',
        'visitfrom': '#680DE7',
        'visitto': '#F91ABA',
      },
      borderRadius: {
        base: '10px'
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
        base: ['"Unbounded"', 'sans-serif'],
        attention: ['"Dela Gothic One"', 'sans-serif'],
        ital: ['"Shantell Sans"', 'sans-serif']
      },
      boxShadow: {
        'small': '0 0 4px rgba(0, 0, 0, 0.25)',
        'base': '0 0 8px rgba(0, 0, 0, 0.25)',
        'section': '0 -8px 10px rgba(0, 0, 0, 0.1)',
        'inner': 'inset 0 0 10px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
};
