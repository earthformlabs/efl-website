import type { Config } from "tailwindcss";
// import defaultTheme from 'tailwindcss/defaultTheme'
export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ["'Space Grotesk'", "system-ui", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        "ef-green": "#2C3E4B",
        "ef-mauve": "#060227",
      },
    },
  },
};
