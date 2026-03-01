import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Update this line

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})