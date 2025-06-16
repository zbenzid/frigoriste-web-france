
import { useEffect } from 'react';

const RobotsTXT = () => {
  useEffect(() => {
    // Définir le type de contenu comme text/plain
    document.contentType = 'text/plain';
    
    // Créer le contenu robots.txt
    const robotsContent = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$
Disallow: /lovable-uploads/

# Priorité pour les moteurs de recherche français
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Sitemap
Sitemap: https://lefrigoriste.fr/sitemap.xml

# Pages importantes pour le référencement
# Services principaux
# /services
# /depannage-froid
# /depannage-climatisation-paris
# /installation-climatisation-paris
# /installation-chambre-froide-paris

# Zone géographique
# /frigoriste-en-yvelines-78
# /zone-intervention`;

    // Remplacer le contenu de la page par le texte
    document.documentElement.innerHTML = `<pre>${robotsContent}</pre>`;
  }, []);

  return null;
};

export default RobotsTXT;
