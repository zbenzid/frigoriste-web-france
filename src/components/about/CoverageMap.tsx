
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Phone, Map } from 'lucide-react';

const CoverageMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const popupRef = useRef<mapboxgl.Popup | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Public Mapbox token - replace with your own in a production environment
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [2.1, 48.8], // Paris coordinates
      zoom: 8,
      attributionControl: false
    });

    // Add controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
    map.current.on('load', () => {
      if (!map.current) return;
      
      // Les Mureaux location marker
      const headquarters = new mapboxgl.Marker({ color: '#0B5394' })
        .setLngLat([1.9182, 48.9915]) // Les Mureaux coordinates
        .addTo(map.current);
      
      // Add the coverage zones
      map.current.addSource('coverage', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            // Yvelines (45min) - closest
            {
              type: 'Feature',
              properties: { zone: 'Yvelines', time: '45 minutes', color: '#0B5394' },
              geometry: {
                type: 'Polygon',
                coordinates: [[
                  [1.5, 48.7],
                  [1.5, 49.1],
                  [2.1, 49.1],
                  [2.1, 48.7],
                  [1.5, 48.7]
                ]]
              }
            },
            // Paris (1h) - middle
            {
              type: 'Feature',
              properties: { zone: 'Paris', time: '1 heure', color: '#4A86E8' },
              geometry: {
                type: 'Polygon',
                coordinates: [[
                  [2.1, 48.7],
                  [2.1, 49.1],
                  [2.5, 49.1],
                  [2.5, 48.7],
                  [2.1, 48.7]
                ]]
              }
            },
            // Grande Couronne (2h) - furthest
            {
              type: 'Feature',
              properties: { zone: 'Grande Couronne', time: '2 heures', color: '#A4C2F4' },
              geometry: {
                type: 'Polygon',
                coordinates: [[
                  [1.5, 48.3],
                  [1.5, 49.3],
                  [3.0, 49.3],
                  [3.0, 48.3],
                  [1.5, 48.3]
                ]]
              }
            }
          ]
        }
      });

      // Render the coverage zones in order from largest to smallest
      // Grande Couronne (largest, underneath)
      map.current.addLayer({
        id: 'grande-couronne',
        type: 'fill',
        source: 'coverage',
        filter: ['==', ['get', 'zone'], 'Grande Couronne'],
        paint: {
          'fill-color': '#A4C2F4',
          'fill-opacity': 0.3
        }
      });
      
      // Paris (middle)
      map.current.addLayer({
        id: 'paris',
        type: 'fill',
        source: 'coverage',
        filter: ['==', ['get', 'zone'], 'Paris'],
        paint: {
          'fill-color': '#4A86E8',
          'fill-opacity': 0.4
        }
      });
      
      // Yvelines (smallest, on top)
      map.current.addLayer({
        id: 'yvelines',
        type: 'fill',
        source: 'coverage',
        filter: ['==', ['get', 'zone'], 'Yvelines'],
        paint: {
          'fill-color': '#0B5394',
          'fill-opacity': 0.5
        }
      });

      // Add outline for all zones
      map.current.addLayer({
        id: 'coverage-outline',
        type: 'line',
        source: 'coverage',
        paint: {
          'line-color': ['get', 'color'],
          'line-width': 1
        }
      });

      // Create popup but don't add it to the map yet
      popupRef.current = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      // Change cursor on hover and show popup
      map.current.on('mouseenter', 'yvelines', (e) => {
        if (!map.current || !popupRef.current || !e.features) return;
        map.current.getCanvas().style.cursor = 'pointer';
        
        const feature = e.features[0];
        const coordinates = e.lngLat;
        const zone = feature.properties?.zone;
        const time = feature.properties?.time;
        
        popupRef.current
          .setLngLat(coordinates)
          .setHTML(`
            <div class="text-sm">
              <strong>${zone}</strong><br>
              Intervention en ${time}<br>
              <a href="tel:0185500284" class="text-emergency flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span class="ml-1">01 85 50 02 84</span>
              </a>
            </div>
          `)
          .addTo(map.current);
      });

      // Same for the other zones
      ['paris', 'grande-couronne'].forEach(zoneId => {
        map.current?.on('mouseenter', zoneId, (e) => {
          if (!map.current || !popupRef.current || !e.features) return;
          map.current.getCanvas().style.cursor = 'pointer';
          
          const feature = e.features[0];
          const coordinates = e.lngLat;
          const zone = feature.properties?.zone;
          const time = feature.properties?.time;
          
          popupRef.current
            .setLngLat(coordinates)
            .setHTML(`
              <div class="text-sm">
                <strong>${zone}</strong><br>
                Intervention en ${time}<br>
                <a href="tel:0185500284" class="text-emergency flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span class="ml-1">01 85 50 02 84</span>
                </a>
              </div>
            `)
            .addTo(map.current);
        });
      });

      // Remove popup and reset cursor on mouseleave
      ['yvelines', 'paris', 'grande-couronne'].forEach(zoneId => {
        map.current?.on('mouseleave', zoneId, () => {
          if (!map.current || !popupRef.current) return;
          map.current.getCanvas().style.cursor = '';
          popupRef.current.remove();
        });
      });
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Map size={24} className="text-primary" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Notre zone d'intervention
            </h2>
            <p className="text-gray-600">
              Interventions dans toute l'Île-de-France avec délais garantis
            </p>
          </div>
        </div>
        
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md">
          <div ref={mapContainer} className="absolute inset-0" />
        </div>
        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#0B5394]"></div>
            <span className="text-sm">Yvelines: 45 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#4A86E8]"></div>
            <span className="text-sm">Paris: 1 heure</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#A4C2F4]"></div>
            <span className="text-sm">Grande couronne: 2 heures</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
