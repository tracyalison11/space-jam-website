/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/src/assets/star-background.jpg')",
      }
    },
  },
  plugins: [],
}
