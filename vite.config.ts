import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Use esbuild for faster builds and avoid rollup native issues
    minify: 'esbuild',
    target: 'esnext',
    sourcemap: false,
    rollupOptions: {
      // Disable rollup native binaries completely
      external: [],
      output: {
        manualChunks: undefined
      }
    }
  },
  // Ensure compatibility with Vercel
  define: {
    global: 'globalThis',
  },
  // Use esbuild for dependency optimization
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      target: 'esnext'
    }
  },
  esbuild: {
    target: 'esnext'
  }
})
