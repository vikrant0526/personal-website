/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,html,templ,go}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
      },
    },
  },
  plugins: [],
};
