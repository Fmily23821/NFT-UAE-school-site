import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: (id) => {
        // Exclude problematic native binaries
        if (id.includes('@rollup/rollup-linux') || 
            id.includes('@rollup/rollup-darwin') || 
            id.includes('@rollup/rollup-win32')) {
          return true
        }
        return false
      }
    },
    // Optimize for Vercel
    target: 'esnext',
    minify: 'terser',
    sourcemap: false
  },
  // Ensure compatibility with Vercel
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    exclude: ['@rollup/rollup-linux-x64-gnu']
  }
})
