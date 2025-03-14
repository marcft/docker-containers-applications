import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['localhost', 'app'],
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
