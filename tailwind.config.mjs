/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    borderRadius: {
      "primary-button": "5px",
      "tag-button": "17.5px",
    },
    fontFamily: {
      body: ["Noto Sans KR"],
    },
    fontSize: {
      xs: ["12px", { letterSpacing: "0", lineHeight: "18px", fontWeight: "400" }],
      sm: ["14px", { letterSpacing: "0", lineHeight: "21px", fontWeight: "400" }],
      xl: ["20px", "30px"],
      "2xl": ["24px", { lineHeight: "36px", letterSpacing: "0", fontWeight: "700" }],
    },
    colors: {
      primary: "#1d2745",
      secondary: "#1de5d4",
      tetiary: "#f52c50",
      white: "#ffffff",
      mono100: "#f1f1f1",
      mono200: "#bebebe",
      mono300: "#d6d7d9",
      error: "#d01e1e",
      social: "#395997",
      "dark-opacity": "rgba(255, 255, 255, 0.1)",
    },
  },
  plugins: [],
};
