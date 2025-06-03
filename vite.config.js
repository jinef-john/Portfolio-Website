import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'three-js': ['@react-three/fiber', '@react-three/drei'],
          'ui-components': ['@nextui-org/react'],
          'lucide-icons': ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})

