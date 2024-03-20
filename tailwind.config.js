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
      },
    },
  },
  plugins: [],
}
