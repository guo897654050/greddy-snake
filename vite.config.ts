import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: './lib',
    lib: {
      entry: './src/index.ts',
      name: 'GreddySnake',
      fileName: (format) => `greddy-snake.${format}.js`
    }
  },
  server: {
    port: 3067
  }
})