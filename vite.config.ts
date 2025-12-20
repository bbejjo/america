import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ssgPlugin } from 'vite-plugin-ssg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ssgPlugin({
      pages: ['src/pages/Home.tsx'],
      config: {
        outDir: 'dist',
        baseUrl: '',
        images: { enabled: false },
        html: {
          bodyTags: '<script type="module" src="/assets/index.js"></script>',
        },
      },
      devMiddleware: false,
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
