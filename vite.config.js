import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({include: [/\.vue$/, /\.md$/]}),
  ],
  resolve: {alias: {'@': fileURLToPath(new URL('./src', import.meta.url))}},
  server: 5173,
  base: '/portfolio',
})