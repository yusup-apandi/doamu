/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        'primary': {
          'main': '#11A365',
          'bg': '#E9FDEF',
        },
        'yellow':'#FFC900',
        },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}