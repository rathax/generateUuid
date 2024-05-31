/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin"


export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
   
      boxShadow: {
        "primary": "0_0_0_0.2rem_#BFDBFE" 
      },
      ringWidth: {
        3: "3px"
      },
      ringColor: {
        "primary": "var(--focus-ring)"
      },
    
      colors: {
        // "primary-200": "#BFDBFE",
        // "primary-300": "#93c5fd",
        // "primary-500": "#3B82F6",
        // "primary-600": "#2563eb",
        // "primary-700": "#1D4ED8",
        'primary-50': 'var(--primary-50)',
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
        'primary-700': 'var(--primary-700)',
        'primary-800': 'var(--primary-800)',
        'primary-900': 'var(--primary-900)',

        'success-50': 'var(--success-50)',
        'success-100': 'var(--success-100)',
        'success-200': 'var(--success-200)',
        'success-300': 'var(--success-300)',
        'success-400': 'var(--success-400)',
        'success-500': 'var(--success-500)',
        'success-600': 'var(--success-600)',
        'success-700': 'var(--success-700)',
        'success-800': 'var(--success-800)',
        'success-900': 'var(--success-900)',

        'error-50': 'var(--error-50)',
        'error-100': 'var(--error-100)',
        'error-200': 'var(--error-200)',
        'error-300': 'var(--error-300)',
        'error-400': 'var(--error-400)',
        'error-500': 'var(--error-500)',
        'error-600': 'var(--error-600)',
        'error-700': 'var(--error-700)',
        'error-800': 'var(--error-800)',
        'error-900': 'var(--error-900)',

        'warn-50': 'var(--warn-50)',
        'warn-100': 'var(--warn-100)',
        'warn-200': 'var(--warn-200)',
        'warn-300': 'var(--warn-300)',
        'warn-400': 'var(--warn-400)',
        'warn-500': 'var(--warn-500)',
        'warn-600': 'var(--warn-600)',
        'warn-700': 'var(--warn-700)',
        'warn-800': 'var(--warn-800)',
        'warn-900': 'var(--warn-900)',

        'surface-0': 'var(--surface-0)',
        'surface-50': 'var(--surface-50)',
        'surface-100': 'var(--surface-100)',
        'surface-200': 'var(--surface-200)',
        'surface-300': 'var(--surface-300)',
        'surface-400': 'var(--surface-400)',
        'surface-500': 'var(--surface-500)',
        'surface-600': 'var(--surface-600)',
        'surface-700': 'var(--surface-700)',
        'surface-800': 'var(--surface-800)',
        'surface-900': 'var(--surface-900)',

        'gray-50': 'var(--gray-50)',
        'gray-100': 'var(--gray-100)',
        'gray-200': 'var(--gray-200)',
        'gray-300': 'var(--gray-300)',
        'gray-400': 'var(--gray-400)',
        'gray-500': 'var(--gray-500)',
        'gray-600': 'var(--gray-600)',
        'gray-700': 'var(--gray-700)',
        'gray-800': 'var(--gray-800)',
        'gray-900': 'var(--gray-900)',

        'outline-100': '#f9fafb',
        'outline-300': '#d1d5db',
        'muted-500': '#6b7280',

        "surface-ground": 'var(--surface-ground)',
        "surface-section": 'var(--surface-section)',
        "surface-card": 'var(--surface-card)',
        "surface-overlay": 'var(--surface-overlay)',
        "surface-border": 'var(--surface-border)',
        "surface-hover": 'var(--surface-hover)',
        "focus-ring": 'var(--focus-ring)',
        "maskbg": 'var(--maskbg)',
        "highlight-bg": 'var(--highlight-bg)',
        "highlight-text-color": 'var(--highlight-text-color)',
        "surface-button": 'var(--surface-button)',

        
        secondary: '#BFDBFE',
        muted: 'd1d5db',
        
      }
    }
    
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        ".h3": {
          "@apply text-xl font-semibold mb-3 mt-6": {},
        },
        ".paragraph": {
          "@apply text-base leading-7 mb-3": {},
        },
      })
    }),
  ],
}

