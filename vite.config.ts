import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/saeun-park.github.io/',
  plugins: [react()],
});
