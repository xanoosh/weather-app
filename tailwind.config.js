/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'custom-xs': '420px', // Small devices
        'custom-sm': '500px', // Small devices
        'custom-md': '850px', // Medium devices
        'custom-lg': '1000px', // Large devices
        'custom-xl': '1290px', // Extra Large devices
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
};
