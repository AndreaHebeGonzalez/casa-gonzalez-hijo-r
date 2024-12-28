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
    assetsDir: 'assets', // Si quieres que los archivos estáticos vayan a una carpeta 'assets'
    sourcemap: true, // Habilita los sourcemaps en producción para depuración
    cssCodeSplit: false, // No dividir el CSS en archivos más pequeños
  },
  plugins: [react()],
})