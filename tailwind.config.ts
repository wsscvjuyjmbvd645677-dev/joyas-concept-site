import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070707",
        paper: "#F4EFE6",
        mute: "#A39A8C",
        line: "#1C1C1C",
        gold: "#B08A4F"
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
