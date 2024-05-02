import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        jon: {
          primary: "#c084fc",
          secondary: "#fb923c",
          accent: "#fda4af",
          neutral: "#d6d3d1",
          "base-100": "#ffffff",
          info: "#99f6e4",
          success: "#86efac",
          warning: "#fde68a",
          error: "#f472b6",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
