import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/solar-weather-explorer/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: '/src/main.jsx'
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    fs: {
      strict: false,
    },
  },
});
