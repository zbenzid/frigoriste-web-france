import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-mapbox': ['mapbox-gl'],
          'vendor-radix': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-accordion',
            '@radix-ui/react-tabs',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
            '@radix-ui/react-dropdown-menu',
          ],
          'vendor-recharts': ['recharts'],
          'vendor-router': ['react-router-dom'],
          'vendor-query': ['@tanstack/react-query'],
          'vendor-form': ['react-hook-form', '@hookform/resolvers', 'zod'],
        },
      },
    },
  },
}));
