import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  
    container: {
      center: true,
      screens:{
        "2xl": "1440px",
      }
    },
    extend: {
      colors:{
        'primary':'#0064FF',
      },
    },
  },
  plugins: [],
};
export default config;
