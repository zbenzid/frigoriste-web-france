
# Plan de Redirections 301 - LeFrigoriste.fr

## Mapping des URLs (Ancien site → Nouveau site)

### Pages principales (PRIORITÉ HAUTE)
```
https://www.lefrigoriste.fr/ → https://lefrigoriste.fr/
https://www.lefrigoriste.fr/qui-sommes-nous → https://lefrigoriste.fr/qui-sommes-nous
https://www.lefrigoriste.fr/contact → https://lefrigoriste.fr/contact
https://www.lefrigoriste.fr/contact.php → https://lefrigoriste.fr/contact
https://www.lefrigoriste.fr/mentions-legales → https://lefrigoriste.fr/mentions-legales
https://www.lefrigoriste.fr/politique-de-confidentialite → https://lefrigoriste.fr/politique-confidentialite
```

### Services vers sections (PRIORITÉ HAUTE)
```
https://www.lefrigoriste.fr/depannage-froid → https://lefrigoriste.fr/services#depannage
https://www.lefrigoriste.fr/depannage-climatisation-paris → https://lefrigoriste.fr/services#climatisation
https://www.lefrigoriste.fr/installation-climatisation-paris → https://lefrigoriste.fr/services#climatisation
https://www.lefrigoriste.fr/installation-chambre-froide-paris → https://lefrigoriste.fr/services#depannage
https://www.lefrigoriste.fr/entretien-materiel-frigorifique-et-climatisation-paris → https://lefrigoriste.fr/services#maintenance
https://www.lefrigoriste.fr/installation-cuisine-professionnelle-paris → https://lefrigoriste.fr/services#installation
https://www.lefrigoriste.fr/depannage-chambre-froide-paris → https://lefrigoriste.fr/services#depannage
https://www.lefrigoriste.fr/reparateur-frigoriste-paris → https://lefrigoriste.fr/services#depannage
https://www.lefrigoriste.fr/reparateur-frigo-professionnel-paris → https://lefrigoriste.fr/services#depannage
```

### Pages géographiques vers zone d'intervention (PRIORITÉ MOYENNE)
```
https://www.lefrigoriste.fr/frigoriste-paris-12 → https://lefrigoriste.fr/zone-intervention
https://www.lefrigoriste.fr/frigoriste-paris-13 → https://lefrigoriste.fr/zone-intervention
https://www.lefrigoriste.fr/frigoriste-paris-15 → https://lefrigoriste.fr/zone-intervention
https://www.lefrigoriste.fr/frigoriste-paris-18 → https://lefrigoriste.fr/zone-intervention
https://www.lefrigoriste.fr/frigoriste-paris-20 → https://lefrigoriste.fr/zone-intervention
https://www.lefrigoriste.fr/frigoriste-mantes-la-Jolie → https://lefrigoriste.fr/zone-intervention
https://www.lefrigoriste.fr/frigoriste-en-yvelines-78 → https://lefrigoriste.fr/zone-intervention
https://www.lefrigoriste.fr/frigoriste-essonne-91 → https://lefrigoriste.fr/zone-intervention
https://www.lefrigoriste.fr/frigoriste-val-oise → https://lefrigoriste.fr/zone-intervention
https://www.lefrigoriste.fr/frigoriste-val-de-marne-94 → https://lefrigoriste.fr/zone-intervention
https://www.lefrigoriste.fr/frigoriste-eure-et-loir → https://lefrigoriste.fr/zone-intervention
https://www.lefrigoriste.fr/frigoriste-chartres-28000 → https://lefrigoriste.fr/zone-intervention
https://www.lefrigoriste.fr/frigoriste-eure-27 → https://lefrigoriste.fr/zone-intervention
https://www.lefrigoriste.fr/frigoriste-seine-maritime-76 → https://lefrigoriste.fr/zone-intervention
```

### Blog vers page d'accueil (PRIORITÉ BASSE)
```
https://www.lefrigoriste.fr/blog → https://lefrigoriste.fr/
https://www.lefrigoriste.fr/combien-consomme-un-climatiseur → https://lefrigoriste.fr/
https://www.lefrigoriste.fr/comment-faire-installer-une-chambre-froide → https://lefrigoriste.fr/services#installation
https://www.lefrigoriste.fr/Quelles-sont-les-nouveaut%C3%A9s-MaPRIMERENOV-2024 → https://lefrigoriste.fr/
https://www.lefrigoriste.fr/quel-type-de-climatisation-choisir → https://lefrigoriste.fr/services#climatisation
https://www.lefrigoriste.fr/comment-installer-une-climatisation → https://lefrigoriste.fr/services#climatisation
https://www.lefrigoriste.fr/probleme-de-climatisation → https://lefrigoriste.fr/services#climatisation
```

## Configuration pour OVH (Apache/Nginx)

### Apache (.htaccess)
```apache
RewriteEngine On

# Redirection www vers non-www
RewriteCond %{HTTP_HOST} ^www\.lefrigoriste\.fr$ [NC]
RewriteRule ^(.*)$ https://lefrigoriste.fr/$1 [R=301,L]

# Redirections pages principales
RewriteRule ^contact\.php$ https://lefrigoriste.fr/contact [R=301,L]
RewriteRule ^politique-de-confidentialite$ https://lefrigoriste.fr/politique-confidentialite [R=301,L]

# Redirections services vers sections
RewriteRule ^depannage-froid$ https://lefrigoriste.fr/services#depannage [R=301,L]
RewriteRule ^depannage-climatisation-paris$ https://lefrigoriste.fr/services#climatisation [R=301,L]
RewriteRule ^installation-climatisation-paris$ https://lefrigoriste.fr/services#climatisation [R=301,L]

# Redirections géographiques
RewriteRule ^frigoriste-paris-[0-9]+$ https://lefrigoriste.fr/zone-intervention [R=301,L]
RewriteRule ^frigoriste-.*$ https://lefrigoriste.fr/zone-intervention [R=301,L]

# Redirection blog
RewriteRule ^blog.*$ https://lefrigoriste.fr/ [R=301,L]
```

### Nginx
```nginx
# Redirection www vers non-www
if ($host = 'www.lefrigoriste.fr') {
    return 301 https://lefrigoriste.fr$request_uri;
}

# Redirections spécifiques
location = /contact.php { return 301 https://lefrigoriste.fr/contact; }
location = /depannage-froid { return 301 https://lefrigoriste.fr/services#depannage; }
location = /depannage-climatisation-paris { return 301 https://lefrigoriste.fr/services#climatisation; }

# Redirections pattern-based
location ~ ^/frigoriste-.* { return 301 https://lefrigoriste.fr/zone-intervention; }
location ~ ^/blog.* { return 301 https://lefrigoriste.fr/; }
```
