import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#D91E26",
        },
        secondary: {
          100: '#ffffff',
          900: "#000000",
        },
      },
    },
    plugins: [],
  },
}
export default config;
