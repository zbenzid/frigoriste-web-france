
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "vite-plugin-prerender";

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
    prerender({
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
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
