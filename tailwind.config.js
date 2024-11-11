/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",  // أي ملفات HTML أو JavaScript داخل مجلد src
    "./*.{html,js}"          // ملفات HTML أو JavaScript في المجلد الجذري
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

