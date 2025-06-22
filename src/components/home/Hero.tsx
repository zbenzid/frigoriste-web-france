import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAnalytics } from '@/hooks/use-analytics';
const Hero = () => {
  const {
    trackPhoneCall
  } = useAnalytics();
  const handleEmergencyCall = () => {
    trackPhoneCall();
  };
  return <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-blue-100/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-blue-50/30 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-blue-100 text-primary font-medium text-sm">
                  ⚡ INTERVENTION 24H/24 - 7J/7
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Dépannage <span className="text-primary">frigorifique</span> d'urgence en Île-de-France
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Spécialiste en réfrigération commerciale et climatisation. 
                <span className="font-semibold text-primary"> Intervention garantie : 45min Yvelines • 1h Paris • 2h Grande Couronne</span>
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">Délais garantis</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">Certifiés RGE</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">Devis gratuit</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="text-gray-700 font-medium">★ 4.9/5 sur Google</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-emergency hover:bg-emergency/90">
                <Link to="tel:0185500284" className="flex items-center justify-center" onClick={handleEmergencyCall}>
                  <Phone className="mr-2 h-5 w-5" />
                  Appel d'urgence
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/contact" className="flex items-center justify-center">
                  Devis gratuit
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img alt="Technicien frigoriste LeFrigoriste.fr en intervention sur chambre froide" className="w-full h-auto rounded-2xl shadow-2xl" src="/lovable-uploads/e05c77e3-b7fd-40d5-90b7-f2a430765ed0.jpg" />
            </div>
            
            {/* Floating card */}
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-20 px-[10px] py-[10px]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Disponible maintenant</p>
                  <p className="text-sm text-gray-600">Équipe d'intervention prête</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;