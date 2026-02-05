'use client'

import React, { useState, useEffect, useRef } from 'react';
import { 
  MapContainer, 
  TileLayer, 
  Marker, 
  Popup, 
  LayersControl,
  useMap 
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import { 
  FaMapMarkedAlt, 
  FaSun, 
  FaMoon, 
  FaMountain, 
  FaPalette, 
  FaMapMarkerAlt 
} from 'react-icons/fa'

interface ComponentProps {
    position: [number, number]
}

// Evitar error de tipos: _getIconUrl es una propiedad privada no tipada en las definiciones
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
    iconUrl: '/leaflet/images/marker-icon.png',
    shadowUrl: '/leaflet/images/marker-shadow.png',
});

// Componente para animar el movimiento del mapa
function AnimateMapView({ position }: { position: [number, number] }) {
  const map = useMap();
  const previousPosition = useRef<[number, number] | null>(null);

  useEffect(() => {
    if (!previousPosition.current) {
      // Primera carga, centrar sin animación
      map.setView(position, map.getZoom());
    } else if (
      previousPosition.current[0] !== position[0] || 
      previousPosition.current[1] !== position[1]
    ) {
      // Nueva posición, animar con transición suave
      map.flyTo(position, map.getZoom(), {
        duration: 1.5, // Duración de la animación en segundos
        easeLinearity: 0.25
      });
    }
    
    previousPosition.current = position;
  }, [position, map]);

  return null;
}

// Componente para animar el marcador
function AnimatedMarker({ 
  position, 
  icon,
  children
}: { 
  position: [number, number], 
  icon: L.DivIcon,
  children?: React.ReactNode
}) {
  const markerRef = useRef<L.Marker | null>(null);
  const previousPosition = useRef<[number, number] | null>(null);

  useEffect(() => {
    if (markerRef.current) {
      if (!previousPosition.current) {
        // Primera carga, establecer posición
        markerRef.current.setLatLng(position);
      } else if (
        previousPosition.current[0] !== position[0] || 
        previousPosition.current[1] !== position[1]
      ) {
        // Animar movimiento del marcador
        const marker = markerRef.current;
        const markerElement = marker.getElement();
        
        if (markerElement) {
          // Añadir clase de animación
          markerElement.classList.add('marker-transition');
          
          // Establecer nueva posición
          marker.setLatLng(position);
          
          // Remover clase después de la animación
          setTimeout(() => {
            if (markerElement) {
              markerElement.classList.remove('marker-transition');
            }
          }, 1500); // Duración de la animación en ms
        }
      }
    }
    
    previousPosition.current = position;
  }, [position]);

  return <Marker ref={markerRef} position={position} icon={icon}>{children}</Marker>;
}

// Configuración del marcador personalizado
const createCustomIcon = (color = '#10b981') => {
    return L.divIcon({
        html: `
      <div class="marker-container" style="
        background-color: ${color};
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        position: relative;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      ">
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          color: white;
          font-size: 12px;
          font-weight: bold;
        ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div class="pulse-ring" style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50% 50% 50% 0;
          border: 2px solid ${color};
          animation: pulse 1.5s ease-out;
          transform: rotate(-45deg);
          opacity: 0;
        "></div>
      </div>
    `,
        className: 'custom-marker',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
}

// Estilos CSS para las animaciones
const markerStyles = `
  @keyframes pulse {
    0% {
      transform: rotate(-45deg) scale(1);
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) scale(1.5);
      opacity: 0;
    }
  }
  
  .marker-transition .marker-container {
    transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .leaflet-marker-icon.custom-marker {
    transition: transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

// Añadir estilos al documento
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = markerStyles;
  document.head.appendChild(styleSheet);
}

// Estilos de mapa predefinidos
const mapStyles = [
    {
        id: 'voyager',
        name: 'Voyager',
        url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        attribution: '© OpenStreetMap, CARTO',
        icon: <FaMapMarkedAlt />,
        description: 'Colores vibrantes y modernos'
    },
    {
        id: 'dark',
        name: 'Modo Oscuro',
        url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        attribution: '© OpenStreetMap, CARTO',
        icon: <FaMoon />,
        description: 'Perfecto para uso nocturno'
    },
    {
        id: 'light',
        name: 'Modo Claro',
        url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        attribution: '© OpenStreetMap, CARTO',
        icon: <FaSun />,
        description: 'Estilo limpio y minimalista'
    },
    {
        id: 'topo',
        name: 'Topográfico',
        url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        attribution: '© OpenStreetMap, OpenTopoMap',
        icon: <FaMountain />,
        description: 'Con relieve y curvas de nivel'
    },
    {
        id: 'watercolor',
        name: 'Acuarela',
        url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
        attribution: '© Stamen Design, OpenStreetMap',
        icon: <FaPalette />,
        description: 'Estilo artístico y único'
    }
];
const { BaseLayer } = LayersControl;

const MapComponent: React.FC<ComponentProps> = ({position}) => {
    const [selectedStyle, setSelectedStyle] = useState(mapStyles[0]);
    const [currentPosition, setCurrentPosition] = useState<[number, number]>(position);
    const [mapKey, setMapKey] = useState(Date.now()); // Key para forzar re-render del mapa
    const customIcon = createCustomIcon('#10b981');

    // Efecto para actualizar posición y animar cuando cambie la prop
    useEffect(() => {
        if (
            currentPosition[0] !== position[0] || 
            currentPosition[1] !== position[1]
        ) {
            console.log("Nueva posición recibida:", position);
            
            // Actualizar posición con efecto de transición
            setCurrentPosition(position);
            
            // Forzar re-render del contenedor del mapa
            setMapKey(Date.now());
            
            // Añadir efecto visual de actualización
            const timer = setTimeout(() => {
                // Resetear el anillo de pulso para nueva animación
                const markerElements = document.querySelectorAll('.custom-marker');
                markerElements.forEach(marker => {
                    const ring = marker.querySelector('.pulse-ring');
                    if (ring instanceof HTMLElement) {
                        ring.style.animation = 'none';
                        setTimeout(() => {
                            ring.style.animation = 'pulse 1.5s ease-out';
                        }, 10);
                    }
                });
            }, 500);
            
            return () => clearTimeout(timer);
        }
    }, [position, currentPosition]);

    return (
        <div className="map-component">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                            <FaMapMarkerAlt className="text-teal-600" />
                            Ubicación del Hotel
                        </h3>
                        <p className="text-gray-600 text-sm">Selecciona un estilo de mapa</p>
                        <div className="mt-2 text-xs text-gray-500">
                            <span className="font-medium">Coordenadas:</span> 
                            {currentPosition[0].toFixed(6)}, {currentPosition[1].toFixed(6)}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {mapStyles.map((style) => (
                            <button
                                key={style.id}
                                onClick={() => setSelectedStyle(style)}
                                className={`p-2 rounded-lg transition-all duration-300 ${selectedStyle.id === style.id
                                    ? 'bg-teal-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                title={style.description}
                            >
                                <span className="flex items-center gap-2">
                                    {style.icon}
                                    <span className="hidden md:inline">{style.name}</span>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="relative rounded-xl overflow-hidden border-2 border-white">
                    <MapContainer
                        key={mapKey}
                        center={currentPosition}
                        zoom={16}
                        style={{ height: '400px', width: '100%' }}
                        zoomControl={true}
                        scrollWheelZoom={true}
                        className="rounded-xl transition-all duration-500"
                    >
                        {/* Componente para animar la vista del mapa */}
                        <AnimateMapView position={currentPosition} />

                        <TileLayer
                            attribution={selectedStyle.attribution}
                            url={selectedStyle.url}
                            maxZoom={20}
                            minZoom={3}
                        />

                        <LayersControl position="topright">
                            {mapStyles.map((style) => (
                                <BaseLayer
                                    key={style.id}
                                    name={style.name}
                                    checked={selectedStyle.id === style.id}
                                >
                                    <TileLayer
                                        attribution={style.attribution}
                                        url={style.url}
                                    />
                                </BaseLayer>
                            ))}
                        </LayersControl>

                        {/* Marcador animado */}
                        <AnimatedMarker position={currentPosition} icon={customIcon}>
                            <Popup className="rounded-xl shadow-lg">
                                <div className="p-4 max-w-xs">
                                    <h3 className="font-bold text-lg text-teal-700 mb-2">🏝️ Hotel Tulum</h3>
                                    <p className="text-gray-700 mb-3">
                                        Ubicación privilegiada en Tulum, rodeado de naturaleza y a minutos
                                        de las mejores playas y ruinas mayas.
                                    </p>
                                    <div className="text-sm text-gray-600 mb-3">
                                        <p><span className="font-medium">Lat:</span> {currentPosition[0].toFixed(6)}</p>
                                        <p><span className="font-medium">Lng:</span> {currentPosition[1].toFixed(6)}</p>
                                    </div>
                                    <a
                                        href={`https://maps.google.com/?q=${currentPosition[0]},${currentPosition[1]}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-block w-full text-center bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors duration-300 font-bold"
                                    >
                                        Ver en Google Maps
                                    </a>
                                </div>
                            </Popup>
                        </AnimatedMarker>
                    </MapContainer>

                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                        <div className="flex items-center gap-2">
                            <span className="text-teal-600">
                                {selectedStyle.icon}
                            </span>
                            <div>
                                <p className="font-semibold text-gray-800 text-sm">{selectedStyle.name}</p>
                                <p className="text-xs text-gray-600">{selectedStyle.description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Indicador de actualización */}
                    <div className="absolute top-4 right-4 bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full animate-pulse">
                        Posición actualizada
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapComponent;