import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Import the plugin

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AdeedHouse-Restaurant/', // 👈 Add this line
  plugins: [
    react(),
    tailwindcss(),
  ],
});