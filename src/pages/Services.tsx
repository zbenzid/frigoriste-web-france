
import React from 'react';
import { Clock, Thermometer, Wrench, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSection from '@/components/seo/FAQSection';
import SEOHead from '@/components/seo/SEOHead';

const Services = () => {
  const breadcrumbItems = [
    { label: "Services" }
  ];

  const services = [
    {
      icon: Clock,
      title: "Dépannage d'urgence 24h/24",
      description: "Intervention rapide garantie pour tous vos équipements frigorifiques en panne.",
      features: ["45 min dans les Yvelines", "1h à Paris", "2h en grande couronne", "Diagnostic gratuit"],
      color: "border-t-emergency"
    },
    {
      icon: Thermometer,
      title: "Installation d'équipements",
      description: "Installation professionnelle de chambres froides, vitrines et systèmes de climatisation.",
      features: ["Devis gratuit sous 24h", "Installation certifiée", "Mise en service complète", "Formation utilisateur"],
      color: "border-t-primary"
    },
    {
      icon: Wrench,
      title: "Maintenance préventive",
      description: "Contrats de maintenance pour assurer la longévité de vos équipements.",
      features: ["Contrats sur mesure", "Interventions planifiées", "Pièces détachées incluses", "Rapport détaillé"],
      color: "border-t-maintenance"
    },
    {
      icon: Calendar,
      title: "Réparation équipements",
      description: "Réparation de tous types d'équipements frigorifiques et de climatisation.",
      features: ["Diagnostic précis", "Réparation durable", "Pièces d'origine", "Garantie intervention"],
      color: "border-t-secondary"
    }
  ];

  const faqs = [
    {
      question: "Quels types d'équipements réparez-vous ?",
      answer: "Nous intervenons sur tous les équipements frigorifiques : chambres froides, vitrines réfrigérées, congélateurs, climatiseurs, pompes à chaleur, et systèmes de réfrigération industrielle."
    },
    {
      question: "Proposez-vous des contrats de maintenance ?",
      answer: "Oui, nous proposons 3 formules de contrats : Essential (maintenance de base), Confort (maintenance + dépannage prioritaire), et Premium (maintenance complète + remplacement pièces). Tous nos contrats incluent des interventions planifiées."
    },
    {
      question: "Combien coûte un dépannage d'urgence ?",
      answer: "Le diagnostic est gratuit. Le tarif dépend de la nature de l'intervention, de l'heure et du jour. Nous vous communiquons un devis détaillé avant toute intervention. Pas de surprise sur la facture."
    },
    {
      question: "Intervenez-vous les weekends et jours fériés ?",
      answer: "Oui, notre service d'urgence fonctionne 24h/24, 7j/7, y compris les weekends et jours fériés. Les délais d'intervention restent les mêmes : 45min Yvelines, 1h Paris, 2h grande couronne."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Services frigorifiques professionnels - LeFrigoriste.fr | Dépannage 24h/24"
        description="Services complets de réfrigération en Île-de-France : dépannage urgent 24h/24, installation, maintenance préventive. Intervention rapide garantie par des experts certifiés."
        keywords="dépannage frigorifique urgence, installation chambre froide, maintenance réfrigération, réparation climatisation"
        canonicalUrl="https://lefrigoriste.fr/services"
      />
      
      <ServiceSchema
        serviceName="Services frigorifiques complets"
        description="Dépannage d'urgence, installation, maintenance et réparation d'équipements frigorifiques professionnels"
        serviceType="RepairService"
      />
      
      <BreadcrumbSchema items={breadcrumbItems} className="bg-gray-50" />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nos services frigorifiques professionnels
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Une gamme complète de services pour tous vos besoins en réfrigération et climatisation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`border-t-4 ${service.color} hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`rounded-full ${service.color.replace('border-t-', 'bg-')}/10 p-3`}>
                      <service.icon size={24} className={service.color.replace('border-t-', 'text-')} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={faqs}
        title="Questions fréquentes sur nos services"
        className="bg-gray-50"
      />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Besoin d'une intervention rapide ?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Notre équipe est disponible 24h/24 pour tous vos dépannages d'urgence
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-emergency hover:bg-emergency/90">
              <Link to="tel:0185500284">Appel d'urgence : 01 85 50 02 84</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90">
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
