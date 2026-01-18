import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist', // 빌드 결과물은 무조건 dist 폴더 안으로만 들어가라고 명시
  },
});
