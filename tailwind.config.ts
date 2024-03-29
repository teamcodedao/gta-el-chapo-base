import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#0064FF',
      },
      fontFamily: {
        pricedown: ['var(--font-pricedown)'],
      },
      backgroundImage: {
        'hero': "linear-gradient(270deg, #1A1A1A 0%, rgba(26, 26, 26, 0) 100%)",
      }
    },
  },
  plugins: [],
};
export default config;
