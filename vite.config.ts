import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  publicDir: 'content',  // Static assets
  server: {
    port: 9000,
    open: true,
    hmr: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    target: 'esnext',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
