import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteMimeTypePlugin from './vite-plugin-mime-types'

// vite.config.ts
export default defineConfig({
  plugins: [react(), viteMimeTypePlugin()],
  base: '/', // Using root path because this is a username.github.io repository
  build: {
    // Ensure the output uses standard extensions that GitHub Pages can handle
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
})
