import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base:'portafolio', // cambiar para produccion o local 
  plugins: [react()],
})
