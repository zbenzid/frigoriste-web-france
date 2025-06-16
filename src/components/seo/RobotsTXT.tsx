
import { useEffect } from 'react';

const RobotsTXT = () => {
  useEffect(() => {
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

    // Remplacer le contenu du body par le texte
    document.body.innerHTML = `<pre style="margin: 0; padding: 0; font-family: monospace; white-space: pre-wrap;">${robotsContent}</pre>`;
    
    // Masquer le header et footer
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
  }, []);

  return null;
};

export default RobotsTXT;
