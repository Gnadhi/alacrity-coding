/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray-500': '#111317',
        'light-gray-500': '#22262F',
        'light-gray-300': '#333947',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
