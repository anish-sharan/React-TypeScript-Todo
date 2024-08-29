/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'todo-background': '#F2F6FF',
        'border-color': '#D7DFF1'
      }
    },
  },
  plugins: [],
}

