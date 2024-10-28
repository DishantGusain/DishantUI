import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
            BgPrimary: "#111112",
            BgSecondary: "#231E1E",
         },
         screens: {
            screenPrimary: "1420px",
         },
         fontFamily: {
          Nunito: ['Nunito', 'sans-serif'], 
          ZenDots: ['Zen Dots', 'sans-serif'], 
         },
      },
   },
   plugins: [],
};
export default config;
