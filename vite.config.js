 import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/*
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true
  },
  plugins: [react()],
})
 */

export default defineConfig({
  css: {
    devSourcemap: true, // Para depuración en desarrollo
  },
  build: {
    outDir: 'dist', // Asegura que la salida de la build esté en la carpeta 'dist'
    sourcemap: true, // Habilita los sourcemaps en producción para depuración
  },
  plugins: [react()],
})