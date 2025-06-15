
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const SEOHead = ({
  title = "LeFrigoriste.fr - Dépannage frigorifique et climatisation 24h/24 en Île-de-France",
  description = "Spécialiste en réfrigération commerciale et climatisation. Dépannage frigorifique d'urgence 24h/24, 7j/7 en Île-de-France. Intervention rapide garantie : 45min Yvelines, 1h Paris.",
  keywords = "frigoriste Île-de-France, dépannage frigorifique d'urgence, réparation chambre froide, installation climatisation professionnelle",
  canonicalUrl,
  ogImage = "public/lovable-uploads/opengraph-image.png",
  noIndex = false
}: SEOHeadProps) => {
  const currentUrl = canonicalUrl || window.location.href;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;
