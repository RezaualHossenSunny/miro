/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': [  "Inter",' sans-serif'],
        
      },
      maxWidth: {
        'container': '1140px',
      },
      colors: {
        'comon': '#050038',
        'rgba': 'rgba(5, 0, 56, 0.40);',
        'second': 'rgba(5, 0, 56, 0.60);'
      },
      backgroundImage: {
        'baner': "url('./src/assets/baner.png')",
        // 'work':  "url('./src/assets/contacet.png')"
        
      }
    },
  },
  plugins: [],
}
