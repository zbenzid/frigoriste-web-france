
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
    // Conditionally load prerender plugin only in production
    mode === 'production' && (async () => {
      const { default: prerender } = await import('vite-plugin-prerender');
      return prerender({
        // Requis pour que le serveur de dév fonctionne correctement
        staticDir: path.join(__dirname, "dist"),
        
        // Liste de toutes les routes à pré-générer en HTML
        routes: [
          '/',
          '/services',
          '/qui-sommes-nous',
          '/zone-intervention',
          '/contact',
          '/mentions-legales',
          '/politique-confidentialite',
          '/depannage-froid',
          '/depannage-climatisation-paris',
          '/installation-climatisation-paris',
          '/installation-chambre-froide-paris',
          '/installation-cuisine-professionnelle-paris',
          '/frigoriste-en-yvelines-78',
        ],
      });
    })(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
