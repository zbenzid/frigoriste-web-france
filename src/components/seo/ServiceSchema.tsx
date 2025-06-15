
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ServiceData {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed: string[];
  provider: {
    name: string;
    telephone: string;
    address: string;
  };
  offers?: {
    name: string;
    description: string;
    availability: string;
  }[];
}

interface ServiceSchemaProps {
  services: ServiceData[];
}

const ServiceSchema = ({ services }: ServiceSchemaProps) => {
  const serviceStructuredData = services.map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "url": service.url,
    "serviceType": service.serviceType,
    "areaServed": service.areaServed.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "provider": {
      "@type": "LocalBusiness",
      "name": service.provider.name,
      "telephone": service.provider.telephone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8-10 rue Levassor",
        "addressLocality": "Les Mureaux",
        "postalCode": "78130",
        "addressCountry": "FR"
      }
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    ...(service.offers && {
      "offers": service.offers.map(offer => ({
        "@type": "Offer",
        "name": offer.name,
        "description": offer.description,
        "availability": offer.availability
      }))
    })
  }));

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceStructuredData)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
