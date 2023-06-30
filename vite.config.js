import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/solar-weather-explorer/",
  plugins: [react()],
  server: {
    port: 3000
  }
})
