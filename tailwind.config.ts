import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear":
          "linear-gradient(to right, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        gradient: "background-size, background-position",
      },
      textColor: {
        gradient: "transparent",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
      textColor: ["responsive", "hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};

export default config;
