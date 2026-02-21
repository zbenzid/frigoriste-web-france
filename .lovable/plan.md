
# Correction GTM sur toutes les pages + Mise a jour Sitemap

## Problemes identifies

1. **GTM ne detecte le tag que sur la page d'accueil** : Le script GTM est bien dans `index.html` (charge sur toutes les pages), mais comme c'est une SPA (Single Page Application), GTM ne detecte pas les changements de page car aucun evenement `pageview` n'est envoye lors des navigations internes via React Router.

2. **Ancien code Google Analytics encore present** : Le fichier `index.html` contient encore l'ancien code GA direct (`G-343731918`, lignes 59-118) en plus de GTM. Cela cree des doublons et de la confusion.

3. **Sitemap incomplete** : Le sitemap statique (`public/sitemap.xml`) et le composant React `SitemapXML.tsx` ne contiennent pas toutes les pages actuelles (manque `/merci`, et les dates sont obsoletes).

---

## Plan d'implementation

### Etape 1 : Ajouter le tracking GTM sur les changements de route (SPA)

Creer un composant `GTMPageTracker` qui ecoute les changements de route React Router et pousse un evenement `pageview` dans le `dataLayer` GTM a chaque navigation.

Ce composant sera place dans `App.tsx` a l'interieur du `BrowserRouter` pour avoir acces au hook `useLocation()`.

```text
Fonctionnement :
  Utilisateur navigue vers /services
    -> useLocation() detecte le changement
    -> window.dataLayer.push({ event: 'pageview', page: '/services' })
    -> GTM recoit l'evenement et declenche les tags configures
```

### Etape 2 : Supprimer l'ancien code Google Analytics

Retirer le bloc `<script id="gtag-init">` (lignes 59-119 de `index.html`) qui charge l'ancien GA (`G-343731918`). GTM gere desormais tout le tracking.

Nettoyer aussi le hook `use-analytics.ts` qui reference l'ancien ID GA.

### Etape 3 : Mettre a jour le sitemap

Mettre a jour `public/sitemap.xml` et `SitemapXML.tsx` pour inclure toutes les pages actuelles du site :
- Ajouter `/merci` (avec priorite basse 0.3, car `noIndex`)
- Mettre a jour les dates `lastmod` a 2025-02-21
- Verifier que toutes les routes du site sont presentes

**Pages a inclure dans le sitemap :**
- `/` (priorite 1.0)
- `/services` (0.9)
- `/depannage-froid` (0.9)
- `/depannage-climatisation-paris` (0.9)
- `/installation-climatisation-paris` (0.9)
- `/installation-chambre-froide-paris` (0.9)
- `/installation-cuisine-professionnelle-paris` (0.9)
- `/frigoriste-en-yvelines-78` (0.9)
- `/qui-sommes-nous` (0.8)
- `/zone-intervention` (0.8)
- `/contact` (0.7)
- `/merci` (0.3)
- `/mentions-legales` (0.3)
- `/politique-confidentialite` (0.3)

---

## Details techniques

### Fichiers modifies
| Fichier | Modification |
|---|---|
| `src/App.tsx` | Ajout du composant `GTMPageTracker` dans le Router |
| `index.html` | Suppression de l'ancien bloc GA (lignes 58-119) |
| `src/hooks/use-analytics.ts` | Mise a jour pour utiliser le dataLayer GTM au lieu de gtag direct |
| `public/sitemap.xml` | Ajout des pages manquantes, mise a jour des dates |
| `src/components/seo/SitemapXML.tsx` | Synchronisation avec le sitemap statique |

### Composant GTMPageTracker (nouveau)
```text
Location: src/components/seo/GTMPageTracker.tsx
Role: Ecoute useLocation() et pousse un evenement dans dataLayer a chaque changement de route
Integration: Place dans App.tsx a l'interieur de BrowserRouter
```

### Impact
- Aucun changement visuel ou UX
- GTM detectera correctement le tag sur toutes les pages
- Le tracking des conversions sur `/merci` fonctionnera
- Sitemap complete pour un meilleur crawling par Google
