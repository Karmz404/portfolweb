import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/portfolweb/",
  plugins: [react()],
  server: {
    port: 7000, // Specify the port you want to use
  },
})


