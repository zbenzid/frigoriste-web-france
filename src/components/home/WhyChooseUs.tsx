
import React, { useEffect, useRef } from 'react';
import { Clock, Award, Wrench, Shield, MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const WhyChooseUs = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  
  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    
    mapboxgl.accessToken = 'pk.eyJ1IjoiemFra3ZpZSIsImEiOiJjbTlnMjI1d2wwb2xlMnFzY2dnYTU0cDNzIn0.QORR16K0VOfDEhaO4xaMAw';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [1.91, 48.9], // Centre sur Les Mureaux
      zoom: 9,
      attributionControl: false,
      interactive: false // Disable interactions for simplified display
    });

    map.current.on('load', () => {
      if (!map.current) return;

      // Add simplified coverage areas with better defined zones
      map.current.addSource('coverage', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            // Grande Couronne (2h) - furthest
            {
              type: 'Feature',
              properties: { color: '#A4C2F4' },
              geometry: {
                type: 'Polygon',
                coordinates: [[[1.4, 48.3], [1.4, 49.3], [3.0, 49.3], [3.0, 48.3], [1.4, 48.3]]]
              }
            },
            // Paris (1h) - middle
            {
              type: 'Feature',
              properties: { color: '#4A86E8' },
              geometry: {
                type: 'Polygon',
                coordinates: [[[2.1, 48.7], [2.1, 49.1], [2.7, 49.1], [2.7, 48.7], [2.1, 48.7]]]
              }
            },
            // Yvelines (45min) - closest
            {
              type: 'Feature',
              properties: { color: '#0B5394' },
              geometry: {
                type: 'Polygon',
                coordinates: [[[1.5, 48.7], [1.5, 49.1], [2.1, 49.1], [2.1, 48.7], [1.5, 48.7]]]
              }
            }
          ]
        }
      });

      // Add all zones with different colors (from furthest to closest for better rendering)
      map.current.addLayer({
        id: 'grande-couronne',
        type: 'fill',
        source: 'coverage',
        filter: ['==', ['get', 'color'], '#A4C2F4'],
        paint: {
          'fill-color': '#A4C2F4',
          'fill-opacity': 0.3
        }
      });

      map.current.addLayer({
        id: 'paris',
        type: 'fill',
        source: 'coverage',
        filter: ['==', ['get', 'color'], '#4A86E8'],
        paint: {
          'fill-color': '#4A86E8',
          'fill-opacity': 0.5
        }
      });

      map.current.addLayer({
        id: 'yvelines',
        type: 'fill',
        source: 'coverage',
        filter: ['==', ['get', 'color'], '#0B5394'],
        paint: {
          'fill-color': '#0B5394',
          'fill-opacity': 0.6
        }
      });

      // Add outline for all zones
      map.current.addLayer({
        id: 'coverage-outline',
        type: 'line',
        source: 'coverage',
        paint: {
          'line-color': ['get', 'color'],
          'line-width': 2
        }
      });

      // Add headquarters marker with prominent styling
      const headquarters = new mapboxgl.Marker({
        color: '#CC0000', // Rouge d'urgence pour attirer l'attention
        scale: 1.2
      }).setLngLat([1.91, 48.99]) // Les Mureaux coordinates
      .addTo(map.current);
      
      // Add department labels for better geographical context
      const departmentLabels = [
        { id: '78', name: '78', coordinates: [1.85, 48.9], fontSize: 16 },
        { id: '75', name: '75', coordinates: [2.35, 48.85], fontSize: 14 },
        { id: '91', name: '91', coordinates: [2.25, 48.5], fontSize: 12 },
        { id: '95', name: '95', coordinates: [2.15, 49.05], fontSize: 12 }
      ];

      departmentLabels.forEach(dept => {
        map.current?.addSource(`dept-${dept.id}`, {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: dept.coordinates
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
            'text-color': '#555',
            'text-halo-color': '#fff',
            'text-halo-width': 1.5
          }
        });
      });
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
                Intervention rapide garantie dans toute l'Île-de-France avec délais optimisés selon votre département. Notre siège aux Mureaux (78) nous permet d'intervenir en priorité dans les Yvelines.
              </p>
              
              {/* Mini map container - Made larger since the card spans 2 rows */}
              <div className="relative h-[300px] w-full mb-4 rounded-xl overflow-hidden border border-gray-100 shadow-inner flex-grow bg-white">
                <div ref={mapContainer} className="absolute inset-0"></div>
              </div>
              
              {/* Délais d'intervention - Enhanced styling */}
              <div className="grid grid-cols-3 gap-4 mt-4 bg-white bg-opacity-70 p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="text-center">
                  <div className="inline-block w-5 h-5 bg-[#0B5394] rounded-full mb-2"></div>
                  <p className="text-sm font-semibold">Yvelines</p>
                  <p className="text-sm font-medium text-primary">45 min</p>
                </div>
                <div className="text-center">
                  <div className="inline-block w-5 h-5 bg-[#4A86E8] rounded-full mb-2"></div>
                  <p className="text-sm font-semibold">Paris</p>
                  <p className="text-sm font-medium text-primary">1 heure</p>
                </div>
                <div className="text-center">
                  <div className="inline-block w-5 h-5 bg-[#A4C2F4] rounded-full mb-2"></div>
                  <p className="text-sm font-semibold">Grande couronne</p>
                  <p className="text-sm font-medium text-primary">2 heures</p>
                </div>
              </div>
              
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
