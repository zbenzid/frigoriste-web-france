import { CheckCircle, Home, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/seo/SEOHead';

const Merci = () => {
  return (
    <>
      <SEOHead
        title="Merci pour votre message | LeFrigoriste.fr"
        description="Votre message a bien été envoyé. Notre équipe vous recontactera dans les plus brefs délais."
        noIndex
      />
      <div className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="container-custom max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-service/20 mb-8">
            <CheckCircle className="h-10 w-10 text-service" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground mb-4">
            Merci pour votre message !
          </h1>

          <p className="text-lg text-muted-foreground font-opensans mb-8 max-w-lg mx-auto">
            Nous vous recontacterons dans les plus brefs délais. Notre équipe traite chaque demande avec la plus grande attention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/">
                <Home className="h-5 w-5 mr-2" />
                Retour à l'accueil
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="tel:0185500284">
                <Phone className="h-5 w-5 mr-2" />
                Appeler maintenant
              </a>
            </Button>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Besoin d'une intervention urgente ? Appelez-nous directement au{' '}
            <a href="tel:0185500284" className="text-primary font-semibold hover:underline">
              01 85 50 02 84
            </a>{' '}
            — disponible 24h/24, 7j/7.
          </p>
        </div>
      </div>
    </>
  );
};

export default Merci;
