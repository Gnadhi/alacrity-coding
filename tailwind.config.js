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
        buccaneer: {
          50: '#fff0f0',
          100: '#fee1e1',
          200: '#fdc9c9',
          300: '#f9aaaa',
          400: '#ec7e7e',
          500: '#d85a5a',
          600: '#d72d2d',
          700: '#bc1a1a',
          800: '#a40e0e',
          900: '#8b0404',
        },
        'mineral-green': {
          50: '#f1fefa',
          100: '#cbfbec',
          200: '#9cf2de',
          300: '#6adcc3',
          400: '#40bfa8',
          500: '#3b9183',
          600: '#277c71',
          700: '#1a6b61',
          800: '#135e56',
          900: '#0e534a',
        },
        martinique: {
          50: '#f6f1fe',
          100: '#ede3fc',
          200: '#d2c1f6',
          300: '#b094e6',
          400: '#8666cc',
          500: '#6c49ab',
          600: '#5d4881',
          700: '#4c3b69',
          800: '#423458',
          900: '#3a2f4b',
        },
        mirage: {
          50: '#f0f6ff',
          100: '#e1ebfe',
          200: '#bed5f9',
          300: '#8db5ec',
          400: '#5e93d4',
          500: '#3e70b1',
          600: '#2c5a9b',
          700: '#1f4784',
          800: '#143b76',
          900: '#082149',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
