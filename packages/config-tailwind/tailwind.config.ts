import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#D91E26",
        },
        secondary: {
          100: '#ffffff',
          600: '#292929',
          900: "#000000",
        },
      },
    },
    plugins: [],
  },
}
export default config;
