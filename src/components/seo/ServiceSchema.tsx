
import React from 'react';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceType?: string;
  areaServed?: string[];
  priceRange?: string;
}

const ServiceSchema = ({
  serviceName,
  description,
  serviceType = "RepairService",
  areaServed = ["Île-de-France", "Paris", "Yvelines"],
  priceRange = "€€"
}: ServiceSchemaProps) => {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "serviceType": serviceType,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://lefrigoriste.fr",
      "name": "LeFrigoriste.fr",
      "url": "https://lefrigoriste.fr",
      "telephone": "+33185500284",
      "email": "contact@lefrigoriste.fr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8-10 rue Levassor",
        "addressLocality": "Les Mureaux",
        "postalCode": "78130",
        "addressRegion": "Yvelines",
        "addressCountry": "FR"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "50",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    "areaServed": areaServed.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "priceRange": priceRange,
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://lefrigoriste.fr/contact",
      "servicePhone": "+33185500284"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
    />
  );
};

export default ServiceSchema;
