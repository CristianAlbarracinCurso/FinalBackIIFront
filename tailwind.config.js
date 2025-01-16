/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",   // Archivos de tu frontend en React, Vue, etc.
    "./views/**/*.handlebars",           // Si estás usando Handlebars en tus vistas de servidor.
    "./public/**/*.html",                // Si tienes archivos HTML en tu carpeta pública.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

