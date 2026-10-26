import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/centro-automotivo-jeep/',
  plugins: [react()],
  server: {
    port: 5180,
    strictPort: true,
    host: true,
  },
});
