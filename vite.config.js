import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        // Function form is SSR-safe: only processes modules actually in the bundle.
        // External modules (SSR build) are never passed to this function, avoiding conflicts.
        manualChunks(id) {
          if (id.includes('node_modules/primevue') || id.includes('@primeuix/themes')) {
            return 'primevue'
          }
          if (
            id.includes('node_modules/vue/') ||
            id.includes('node_modules/vue-router') ||
            id.includes('node_modules/pinia') ||
            id.includes('node_modules/@vue/')
          ) {
            return 'vendor'
          }
        }
      }
    }
  }
})
