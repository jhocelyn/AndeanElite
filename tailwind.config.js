/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
    },
  },
  safelist: [
    // Estructura general
    'overflow-x-auto',
    'w-full',
    'text-sm',
    'text-gray-700',
    'border-collapse',
    'mb-6',
    'text-center',

    // Colores de fondo y borde
    'bg-gray-100',
    'bg-white',
    'border-b',
    'border-gray-300',
    'border-gray-200',
    'border-l-2',
    'border-r',

    // Padding y espaciado
    'py-2',
    'px-2',
    'px-4',

    // Texto
    'font-semibold'
  ],
  plugins: [],
}

