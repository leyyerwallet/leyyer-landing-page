import withMT from "@material-tailwind/react/utils/withMT";
const config = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color:{
      'midnight': '#121063',
      'emerald':  '#00D395',
      
    },
    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif', // Adds a new `font-display` class
      },
      color: {
        emerald:  '#00D395',
      },
    },
  },
  plugins: [],
})
export default config;

