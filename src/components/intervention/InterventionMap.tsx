
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Clock, MapPin, Building } from 'lucide-react';

// Component for the map legend
const MapLegend = () => {
  return (
    <div className="absolute bottom-4 left-4 bg-white p-3 rounded-md shadow-md z-10">
      <h4 className="text-sm font-bold mb-2">Délais d'intervention</h4>
      <div className="space-y-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-emergency opacity-70 rounded-sm mr-2"></div>
          <span className="text-xs">Zone prioritaire (45min)</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-orange-500 opacity-70 rounded-sm mr-2"></div>
          <span className="text-xs">Paris et petite couronne (1h)</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-primary opacity-70 rounded-sm mr-2"></div>
          <span className="text-xs">Grande couronne (2h)</span>
        </div>
      </div>
    </div>
  );
};

// Main map component
const InterventionMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapboxKey, setMapboxKey] = useState<string>('');

  // Function to initialize the map
  const initializeMap = () => {
    if (!mapContainer.current || !mapboxKey) return;
    
    mapboxgl.accessToken = mapboxKey;
    
    if (map.current) return;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [2.35, 48.85], // Paris coordinates
      zoom: 8.5,
    });

    map.current.on('load', () => {
      setMapLoaded(true);
      
      if (!map.current) return;
      
      // Add data for Paris and Île-de-France departments
      // These are simplified GeoJSON data for demonstration
      
      // Zone prioritaire - Yvelines (78)
      map.current.addSource('yvelines', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [[
              [1.5, 48.9], [1.6, 48.7], [1.9, 48.6], 
              [2.2, 48.65], [2.3, 48.8], [2.1, 49.0], 
              [1.8, 49.05], [1.5, 48.9]
            ]]
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

      // Paris and petite couronne
      map.current.addSource('petite-couronne', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [[
              [2.2, 48.95], [2.5, 48.9], [2.6, 48.8],
              [2.5, 48.7], [2.2, 48.6], [2.0, 48.7],
              [1.9, 48.8], [2.0, 48.9], [2.2, 48.95]
            ]]
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

      // Grande couronne
      map.current.addSource('grande-couronne', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [[
              [1.4, 49.1], [2.1, 49.2], [2.8, 49.0],
              [3.0, 48.7], [2.9, 48.3], [2.5, 48.2],
              [1.9, 48.3], [1.5, 48.5], [1.3, 48.8],
              [1.4, 49.1]
            ]]
          }
        }
      });
      
      map.current.addLayer({
        id: 'grande-couronne-fill',
        type: 'fill',
        source: 'grande-couronne',
        layout: {},
        paint: {
          'fill-color': '#0B5394',
          'fill-opacity': 0.3
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

      // Add Les Mureaux marker
      const lesMureauxMarker = document.createElement('div');
      lesMureauxMarker.className = 'flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md';
      lesMureauxMarker.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CC0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="1"/><path d="M9 18v3"/><path d="M15 18v3"/><path d="M9 6V3"/><path d="M15 6V3"/><path d="M14 10h2"/><path d="M14 14h2"/><path d="M8 10h2"/><path d="M8 14h2"/></svg>';
      
      new mapboxgl.Marker(lesMureauxMarker)
        .setLngLat([1.91, 48.98]) // Les Mureaux coordinates
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('<h3 class="font-bold">Les Mureaux</h3><p>Siège social</p>'))
        .addTo(map.current);
      
      // Add city markers
      const cities = [
        { name: 'Paris', coords: [2.35, 48.85], zone: 'petite' },
        { name: 'Versailles', coords: [2.13, 48.80], zone: 'prioritaire' },
        { name: 'Mantes-la-Jolie', coords: [1.70, 48.99], zone: 'prioritaire' },
        { name: 'Saint-Germain', coords: [2.08, 48.90], zone: 'prioritaire' },
        { name: 'Poissy', coords: [2.05, 48.93], zone: 'prioritaire' },
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
        
        el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="${color}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
        
        new mapboxgl.Marker(el)
          .setLngLat(city.coords)
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3 class="font-bold">${city.name}</h3>`))
          .addTo(map.current);
      });
      
      // Add department labels
      const departments = [
        { name: '75', coords: [2.35, 48.86] },
        { name: '78', coords: [1.85, 48.82] },
        { name: '91', coords: [2.25, 48.52] },
        { name: '92', coords: [2.23, 48.83] },
        { name: '93', coords: [2.45, 48.91] },
        { name: '94', coords: [2.47, 48.77] },
        { name: '95', coords: [2.15, 49.05] },
        { name: '77', coords: [2.95, 48.60] }
      ];
      
      departments.forEach(dept => {
        map.current?.addSource(`dept-${dept.name}`, {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: { name: dept.name },
            geometry: {
              type: 'Point',
              coordinates: dept.coords
            }
          }
        });
        
        map.current?.addLayer({
          id: `dept-${dept.name}`,
          type: 'symbol',
          source: `dept-${dept.name}`,
          layout: {
            'text-field': dept.name,
            'text-size': 16,
            'text-font': ['Open Sans Bold'],
            'text-offset': [0, 0],
            'text-anchor': 'center'
          },
          paint: {
            'text-color': '#333',
            'text-halo-color': '#fff',
            'text-halo-width': 1.5
          }
        });
      });

      // Add navigation control
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    });
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!mapboxKey) {
    return (
      <div className="w-full max-w-2xl mx-auto h-96 bg-gray-50 rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-center p-6">
        <h3 className="text-lg font-bold mb-4">Configuration Mapbox requise</h3>
        <p className="text-sm text-gray-600 mb-4">Pour afficher la carte des zones d'intervention, veuillez entrer votre clé publique Mapbox.</p>
        <input 
          type="text" 
          placeholder="Clé publique Mapbox" 
          className="px-4 py-2 border rounded-md w-full max-w-md mb-4"
          value={mapboxKey}
          onChange={(e) => setMapboxKey(e.target.value)}
        />
        <button 
          className="bg-primary text-white px-4 py-2 rounded-md"
          onClick={initializeMap}
        >
          Charger la carte
        </button>
        <p className="text-xs text-gray-500 mt-4">
          Vous pouvez obtenir une clé publique gratuite sur <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">mapbox.com</a>
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto h-96 bg-gray-50 rounded-lg overflow-hidden shadow-md">
      <div ref={mapContainer} className="absolute inset-0" />
      <MapLegend />
    </div>
  );
};

export default InterventionMap;
