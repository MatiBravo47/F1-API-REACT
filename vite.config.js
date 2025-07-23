import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/F1-Explorer-React-Vite-App/', // ← importante
  plugins: [
    react(),
    tailwindcss(),
  ],
})
