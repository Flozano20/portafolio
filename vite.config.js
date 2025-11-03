import { defineConfig } from "vite";

export default defineConfig({
  appType: 'mpa',
  base: '/portafolio/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html'
      }
    },
    minify: true,
    outDir: 'dist'
  }
});