import React, { useEffect, useRef } from 'react';
import { Clock, Award, Wrench, Shield, MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useIsMobile } from '@/hooks/use-mobile';

const WhyChooseUs = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    
    mapboxgl.accessToken = 'pk.eyJ1IjoiemFra3ZpZSIsImEiOiJjbTlnMjI1d2wwb2xlMnFzY2dnYTU0cDNzIn0.QORR16K0VOfDEhaO4xaMAw';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [2.1, 48.85], // Centered on Paris region
      zoom: 8.5,
      attributionControl: false,
      interactive: true // Enable interactions for better UX
    });

    map.current.on('load', () => {
      if (!map.current) return;

      // Define polygon coordinates for better shaped coverage areas
      const yvelinesCoords = [
        [1.5, 48.9], [1.6, 48.7], [1.9, 48.6], 
        [2.2, 48.65], [2.3, 48.8], [2.1, 49.0], 
        [1.8, 49.05], [1.5, 48.9]
      ];
      
      const petiteCouronneCoords = [
        [2.2, 48.95], [2.5, 48.9], [2.6, 48.8],
        [2.5, 48.7], [2.2, 48.6], [2.0, 48.7],
        [1.9, 48.8], [2.0, 48.9], [2.2, 48.95]
      ];
      
      const grandeCouronneCoords = [
        [1.4, 49.1], [2.1, 49.2], [2.8, 49.0],
        [3.0, 48.7], [2.9, 48.3], [2.5, 48.2],
        [1.9, 48.3], [1.5, 48.5], [1.3, 48.8],
        [1.4, 49.1]
      ];

      // Add coverage zones with better colors and shapes (from furthest to closest for better layering)
      // Grande Couronne (2h) - furthest
      map.current.addSource('grande-couronne', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [grandeCouronneCoords]
          }
        }
      });
      
      map.current.addLayer({
        id: 'grande-couronne-fill',
        type: 'fill',
        source: 'grande-couronne',
        layout: {},
        paint: {
          'fill-color': '#A4C2F4',
          'fill-opacity': 0.4
        }
      });
      
      map.current.addLayer({
        id: 'grande-couronne-border',
        type: 'line',
        source: 'grande-couronne',
        layout: {},
        paint: {
          'line-color': '#0B5394',
          'line-width': 1
        }
      });

      // Paris and petite couronne (1h) - middle
      map.current.addSource('petite-couronne', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [petiteCouronneCoords]
          }
        }
      });
      
      map.current.addLayer({
        id: 'petite-couronne-fill',
        type: 'fill',
        source: 'petite-couronne',
        layout: {},
        paint: {
          'fill-color': '#FF9900',
          'fill-opacity': 0.5
        }
      });
      
      map.current.addLayer({
        id: 'petite-couronne-border',
        type: 'line',
        source: 'petite-couronne',
        layout: {},
        paint: {
          'line-color': '#FF9900',
          'line-width': 1
        }
      });

      // Yvelines (45min) - closest, on top
      map.current.addSource('yvelines', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [yvelinesCoords]
          }
        }
      });
      
      map.current.addLayer({
        id: 'yvelines-fill',
        type: 'fill',
        source: 'yvelines',
        layout: {},
        paint: {
          'fill-color': '#CC0000',
          'fill-opacity': 0.5
        }
      });
      
      map.current.addLayer({
        id: 'yvelines-border',
        type: 'line',
        source: 'yvelines',
        layout: {},
        paint: {
          'line-color': '#CC0000',
          'line-width': 1
        }
      });

      // Add headquarters marker with prominent styling
      const lesMureauxMarker = document.createElement('div');
      lesMureauxMarker.className = 'flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md';
      lesMureauxMarker.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CC0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="1"/><path d="M9 18v3"/><path d="M15 18v3"/><path d="M9 6V3"/><path d="M15 6V3"/><path d="M14 10h2"/><path d="M14 14h2"/><path d="M8 10h2"/><path d="M8 14h2"/></svg>';
      
      new mapboxgl.Marker(lesMureauxMarker)
        .setLngLat([1.91, 48.98]) // Les Mureaux coordinates
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('<h3 class="font-bold">Les Mureaux</h3><p>Siège social</p>'))
        .addTo(map.current);

      // Add city markers with different colors based on zones
      const cities = [
        { name: 'Paris', coords: [2.35, 48.85], zone: 'petite' },
        { name: 'Versailles', coords: [2.13, 48.80], zone: 'prioritaire' },
        { name: 'Mantes-la-Jolie', coords: [1.70, 48.99], zone: 'prioritaire' },
        { name: 'Saint-Germain', coords: [2.08, 48.90], zone: 'prioritaire' },
        { name: 'Cergy', coords: [2.07, 49.03], zone: 'grande' },
        { name: 'Évry', coords: [2.45, 48.63], zone: 'grande' },
        { name: 'Créteil', coords: [2.47, 48.78], zone: 'petite' },
        { name: 'Nanterre', coords: [2.20, 48.89], zone: 'petite' }
      ];
      
      cities.forEach(city => {
        const el = document.createElement('div');
        el.className = 'flex items-center justify-center';
        
        let color;
        switch(city.zone) {
          case 'prioritaire':
            color = '#CC0000';
            break;
          case 'petite':
            color = '#FF9900';
            break;
          case 'grande':
            color = '#0B5394';
            break;
          default:
            color = '#333333';
        }
        
        el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3" fill="white"/></svg>`;
        
        // Fix: Explicitly type the coordinates as a tuple of [number, number] to match LngLatLike
        const coordinates: [number, number] = [city.coords[0], city.coords[1]];
        
        new mapboxgl.Marker(el)
          .setLngLat(coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3 class="font-bold">${city.name}</h3>`))
          .addTo(map.current);
      });

      // Add department labels for better geographical context
      const departments = [
        { id: '78', name: '78', coords: [1.85, 48.82], fontSize: 20, color: '#CC0000' },
        { id: '75', name: '75', coords: [2.35, 48.86], fontSize: 16, color: '#FF9900' },
        { id: '92', name: '92', coords: [2.23, 48.83], fontSize: 14, color: '#FF9900' },
        { id: '93', name: '93', coords: [2.45, 48.91], fontSize: 14, color: '#FF9900' },
        { id: '94', name: '94', coords: [2.47, 48.77], fontSize: 14, color: '#FF9900' },
        { id: '91', name: '91', coords: [2.25, 48.52], fontSize: 14, color: '#0B5394' },
        { id: '95', name: '95', coords: [2.15, 49.05], fontSize: 14, color: '#0B5394' },
        { id: '77', name: '77', coords: [2.95, 48.60], fontSize: 14, color: '#0B5394' }
      ];

      departments.forEach(dept => {
        // Fix: Explicitly type the coordinates as a tuple of [number, number] to match LngLatLike
        const coordinates: [number, number] = [dept.coords[0], dept.coords[1]];
        
        map.current?.addSource(`dept-${dept.id}`, {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: { name: dept.name },
            geometry: {
              type: 'Point',
              coordinates: coordinates
            }
          }
        });

        map.current?.addLayer({
          id: `dept-${dept.id}`,
          type: 'symbol',
          source: `dept-${dept.id}`,
          layout: {
            'text-field': dept.name,
            'text-size': dept.fontSize,
            'text-font': ['Open Sans Bold'],
            'text-anchor': 'center'
          },
          paint: {
            'text-color': dept.color,
            'text-halo-color': '#fff',
            'text-halo-width': 1.5
          }
        });
      });

      // Add navigation control
      map.current.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  const reasons = [
    {
      icon: <Wrench size={36} className="text-primary" />,
      title: "Solutions Sur-Mesure",
      description: "Nos spécialistes conçoivent des solutions adaptées à vos besoins spécifiques, que ce soit pour le dépannage, l'installation ou la maintenance."
    },
    {
      icon: <Clock size={36} className="text-primary" />,
      title: "Intervention Express 24/7",
      description: "Notre équipe est disponible jour et nuit pour intervenir en urgence sur vos équipements frigorifiques avec des délais garantis par zone."
    },
    {
      icon: <Award size={36} className="text-primary" />,
      title: "Techniciens Certifiés",
      description: "Nos experts sont certifiés RGE et QualiPAC avec plus de 15 ans d'expérience dans le domaine du froid commercial et de la climatisation."
    },
    {
      icon: <Shield size={36} className="text-primary" />,
      title: "Garantie Satisfaction",
      description: "Service client exceptionnel avec une note Google de 4.9/5, nous nous engageons à résoudre vos problèmes dès la première intervention."
    }
  ];

  // Legend component for mobile rendering
  const MobileLegend = () => (
    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
      <h4 className="font-semibold text-sm mb-3 text-gray-700">Délais d'intervention garantis :</h4>
      <div className="flex flex-col space-y-2.5">
        <div className="p-3 rounded-xl bg-red-50/80 border border-red-100 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-md bg-[#CC0000] mr-2"></div>
            <p className="text-xs font-semibold text-gray-800">Yvelines (78)</p>
          </div>
          <p className="text-xs font-bold text-[#CC0000]">45 min max.</p>
        </div>
        <div className="p-3 rounded-xl bg-orange-50/80 border border-orange-100 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-md bg-[#FF9900] mr-2"></div>
            <p className="text-xs font-semibold text-gray-800">Paris & PC</p>
          </div>
          <p className="text-xs font-bold text-[#FF9900]">1h max.</p>
        </div>
        <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-md bg-[#0B5394] mr-2"></div>
            <p className="text-xs font-semibold text-gray-800">Grande couronne</p>
          </div>
          <p className="text-xs font-bold text-[#0B5394]">2h max.</p>
        </div>
      </div>
    </div>
  );

  // Desktop legend
  const DesktopLegend = () => (
    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
      <h4 className="font-semibold text-sm mb-3 text-gray-700">Délais d'intervention garantis :</h4>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-2 rounded-lg bg-red-50 border border-red-100">
          <div className="flex items-center mb-1">
            <div className="w-4 h-4 rounded-md bg-[#CC0000] mr-2"></div>
            <p className="text-sm font-semibold text-gray-800">Yvelines (78)</p>
          </div>
          <p className="text-xs text-[#CC0000] font-medium ml-6">45 minutes max.</p>
        </div>
        <div className="p-2 rounded-lg bg-orange-50 border border-orange-100">
          <div className="flex items-center mb-1">
            <div className="w-4 h-4 rounded-md bg-[#FF9900] mr-2"></div>
            <p className="text-sm font-semibold text-gray-800">Paris & PC</p>
          </div>
          <p className="text-xs text-[#FF9900] font-medium ml-6">1 heure max.</p>
        </div>
        <div className="p-2 rounded-lg bg-blue-50 border border-blue-100">
          <div className="flex items-center mb-1">
            <div className="w-4 h-4 rounded-md bg-[#0B5394] mr-2"></div>
            <p className="text-sm font-semibold text-gray-800">Grande couronne</p>
          </div>
          <p className="text-xs text-[#0B5394] font-medium ml-6">2 heures max.</p>
        </div>
      </div>
    </div>
  );

  return <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-50/40 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* En-tête de section */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-primary font-medium text-sm mb-4">
            POURQUOI NOUS CHOISIR
          </div>
          <h2 className="font-montserrat font-bold mb-4 text-[#212121] text-2xl md:text-4xl px-[8px]">
            Pourquoi <span className="text-primary">LeFrigoriste.fr</span> est le choix idéal pour vous
          </h2>
        </div>
        
        {/* Disposition des cartes en grille - Changed grid layout for better card arrangement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-[16px]">
          {/* Premières cartes */}
          {reasons.slice(0, 2).map((reason, index) => <Card key={index} className="border border-gray-100 bg-white hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-3 text-center text-gray-800">{reason.title}</h3>
                <p className="text-gray-600 font-opensans text-center">{reason.description}</p>
              </CardContent>
            </Card>)}

          {/* Carte centrale avec la carte de couverture */}
          <Card className="border-0 bg-gradient-to-br from-blue-50 to-white row-span-2 col-span-1 md:col-span-2 rounded-xl overflow-hidden shadow-xl">
            <CardContent className="p-6 relative h-full flex flex-col">
              <div className="mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center bg-white shadow-md">
                  <MapPin size={40} className="text-primary" />
                </div>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2 text-center">Couverture Île-de-France</h3>
              <p className="text-gray-600 text-center mb-4">
                Nos équipes de techniciens certifiés sont positionnées stratégiquement en Île-de-France pour vous garantir des délais d'intervention rapides, adaptés à l'urgence de votre situation.
              </p>
              
              {/* Mini map container - Made larger since the card spans 2 rows */}
              <div className="relative h-[320px] w-full mb-4 rounded-xl overflow-hidden border border-gray-100 shadow-inner flex-grow bg-white">
                <div ref={mapContainer} className="absolute inset-0"></div>
              </div>
              
              {/* Conditional rendering based on screen size */}
              {isMobile ? <MobileLegend /> : <DesktopLegend />}
              
              <div className="flex justify-center mt-6">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full">
                  <Link to="/zone-intervention">En savoir plus</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Dernières cartes */}
          {reasons.slice(2, 4).map((reason, index) => <Card key={index + 2} className="border border-gray-100 bg-white hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
              <CardContent className="p-6 px-[16px]">
                <div className="mb-4 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-3 text-center">{reason.title}</h3>
                <p className="text-gray-600 font-opensans text-center">{reason.description}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default WhyChooseUs;
