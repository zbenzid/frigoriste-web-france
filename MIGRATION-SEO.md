
# Guide de Migration SEO - LeFrigoriste.fr

## Pages créées pour préserver le référencement

### Pages services principales
- `/depannage-froid` - Dépannage frigorifique
- `/depannage-climatisation-paris` - Dépannage climatisation Paris
- `/installation-climatisation-paris` - Installation climatisation
- `/installation-chambre-froide-paris` - Installation chambres froides
- `/installation-cuisine-professionnelle-paris` - Équipements cuisine

### Pages géographiques
- `/frigoriste-en-yvelines-78` - Services Yvelines

## Redirections 301 configurées

### Redirections services
- `entretien-materiel-frigorifique-et-climatisation-paris` → `/services`
- `depannage-chambre-froide-paris` → `/depannage-froid`
- `reparateur-frigoriste-paris` → `/depannage-froid`
- `reparateur-frigo-professionnel-paris` → `/depannage-froid`
- `contact.php` → `/contact`

### Redirections géographiques
- `frigoriste-mantes-la-Jolie` → `/frigoriste-en-yvelines-78`
- `frigoriste-paris-XX` → `/depannage-climatisation-paris`
- Départements → `/services`

### Redirections articles blog
- Articles climatisation → `/installation-climatisation-paris`
- Articles chambre froide → `/installation-chambre-froide-paris`
- Articles problèmes → `/depannage-climatisation-paris`

## Configuration technique

### Fichiers modifiés
- `public/sitemap.xml` - Sitemap mis à jour
- `public/robots.txt` - Optimisé pour SEO
- `public/.htaccess` - Redirections 301 + optimisations
- `index.html` - Meta tags géographiques + structured data

### Optimisations SEO
- ✅ Données structurées LocalBusiness
- ✅ Meta tags géographiques
- ✅ Breadcrumbs sur toutes les pages
- ✅ FAQ avec données structurées
- ✅ Canonical URLs
- ✅ Schema.org pour services

## Actions post-migration

### 1. Configuration serveur OVH
```apache
# Activer les redirections 301
# Configurer HTTPS automatique
# Activer la compression GZIP
```

### 2. Vérifications Google
- [ ] Google Search Console - Soumettre nouveau sitemap
- [ ] Google My Business - Vérifier cohérence NAP
- [ ] Google Analytics - Configurer suivi événements

### 3. Tests de migration
- [ ] Tester toutes les redirections 301
- [ ] Vérifier vitesse de chargement
- [ ] Valider données structurées (Google Rich Results Test)
- [ ] Contrôler responsive design

### 4. Suivi SEO
- [ ] Surveiller positions mots-clés principaux
- [ ] Monitorer trafic organique
- [ ] Analyser Core Web Vitals
- [ ] Vérifier indexation nouvelles pages

## Mots-clés prioritaires à surveiller

### Principaux
- frigoriste Île-de-France
- dépannage frigorifique d'urgence
- installation climatisation Paris
- frigoriste Yvelines

### Géographiques
- frigoriste Les Mureaux
- frigoriste Mantes-la-Jolie
- dépannage froid Paris

### Services
- chambre froide Paris
- climatisation professionnelle
- maintenance frigorifique

## Contact migration
Pour toute question sur la migration SEO :
- Vérifier les logs serveur pour erreurs 404
- Utiliser Google Search Console pour détecter problèmes
- Surveiller les Core Web Vitals
```
