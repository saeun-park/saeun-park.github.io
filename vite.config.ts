import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // For GitHub User Pages (username.github.io)
  plugins: [react()],
});
