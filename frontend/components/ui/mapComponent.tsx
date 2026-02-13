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
} from 'react-icons/fa';

// ------------------------------------------------------------
// TIPOS
// ------------------------------------------------------------
export type MarkerData = {
  lat: number;
  lng: number;
  marker?: string | L.Icon | L.DivIcon;
  popup?: React.ReactNode;
  id?: string | number;
};

interface ComponentProps {
  position?: [number, number];
  destino?: string;
  markers?: MarkerData[];
  zoom?: number;
  showLayersControl?: boolean;
  showMapType?: boolean;
  defaultIcon?: string | L.Icon | L.DivIcon;
}

// ------------------------------------------------------------
// CONFIGURACIÓN INICIAL DE ICONOS POR DEFECTO
// ------------------------------------------------------------
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
  iconUrl: '/leaflet/images/marker-icon.png',
  shadowUrl: '/leaflet/images/marker-shadow.png',
});

// ------------------------------------------------------------
// COMPONENTES AUXILIARES
// ------------------------------------------------------------
function AnimateMapView({ position, defaultZoom }: { position: [number, number]; defaultZoom: number }) {
  const map = useMap();
  const previousPosition = useRef<[number, number] | null>(null);

  useEffect(() => {
    if (!previousPosition.current) {
      map.setView(position, defaultZoom);
    } else if (
      previousPosition.current[0] !== position[0] ||
      previousPosition.current[1] !== position[1]
    ) {
      map.flyTo(position, map.getZoom(), { duration: 1.5, easeLinearity: 0.25 });
    }
    previousPosition.current = position;
  }, [position, map, defaultZoom]);

  return null;
}

function FitBoundsToMarkers({ positions, defaultZoom }: { positions: [number, number][]; defaultZoom: number }) {
  const map = useMap();

  useEffect(() => {
    if (positions.length === 0) return;
    if (positions.length === 1) {
      map.setView(positions[0], defaultZoom);
    } else {
      const bounds = L.latLngBounds(positions);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [positions, map, defaultZoom]);

  return null;
}

function AnimatedMarker({ position, icon, children }: { position: [number, number]; icon: L.Icon; children?: React.ReactNode }) {
  const markerRef = useRef<L.Marker | null>(null);
  const previousPosition = useRef<[number, number] | null>(null);

  useEffect(() => {
    if (markerRef.current) {
      if (!previousPosition.current) {
        markerRef.current.setLatLng(position);
      } else if (
        previousPosition.current[0] !== position[0] ||
        previousPosition.current[1] !== position[1]
      ) {
        const marker = markerRef.current;
        const markerElement = marker.getElement();
        if (markerElement) {
          markerElement.classList.add('marker-transition');
          marker.setLatLng(position);
          setTimeout(() => {
            markerElement.classList.remove('marker-transition');
          }, 1500);
        }
      }
    }
    previousPosition.current = position;
  }, [position]);

  return <Marker ref={markerRef} position={position} icon={icon}>{children}</Marker>;
}

// ------------------------------------------------------------
// FÁBRICA DE ICONOS
// ------------------------------------------------------------
const createCustomIcon = (color = '#10b981'): L.DivIcon => {
  return L.divIcon({
    html: `
      <div class="marker-container" style="background-color: ${color}; width: 32px; height: 32px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); position: relative; box-shadow: 0 2px 8px rgba(0,0,0,0.2); transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg); color: white; font-size: 12px; font-weight: bold;">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div class="pulse-ring" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50% 50% 50% 0; border: 2px solid ${color}; animation: pulse 1.5s ease-out; transform: rotate(-45deg); opacity: 0;"></div>
      </div>
    `,
    className: 'custom-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
};

const createImageIcon = (url: string): L.Icon => {
  return L.icon({
    iconUrl: url,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    shadowUrl: '/leaflet/images/marker-shadow.png'
  });
};

const createSvgIcon = (svgString: string): L.DivIcon => {
  return L.divIcon({
    html: svgString,
    className: 'custom-svg-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
};

const createIconFromMarkerData = (
  markerData: MarkerData,
  defaultIcon?: string | L.Icon | L.DivIcon
): L.Icon | L.DivIcon => {
  // 1. Si el marcador trae su propio icono, lo usamos
  if (markerData.marker) {
    if (markerData.marker instanceof L.Icon) return markerData.marker;
    if (typeof markerData.marker === 'string') {
      // Detectar SVG
      if (
        markerData.marker.trim().startsWith('<svg') ||
        markerData.marker.trim().startsWith('<?xml') ||
        markerData.marker.includes('xmlns')
      ) {
        return createSvgIcon(markerData.marker);
      }
      // Asumimos URL de imagen
      return createImageIcon(markerData.marker);
    }
  }

  // 2. Si no tiene icono propio pero hay defaultIcon, usamos ese
  if (defaultIcon) {
    if (defaultIcon instanceof L.Icon) return defaultIcon;
    if (typeof defaultIcon === 'string') {
      if (
        defaultIcon.trim().startsWith('<svg') ||
        defaultIcon.trim().startsWith('<?xml') ||
        defaultIcon.includes('xmlns')
      ) {
        return createSvgIcon(defaultIcon);
      }
      return createImageIcon(defaultIcon);
    }
    // Si es L.DivIcon, también lo devolvemos directamente
    return defaultIcon as L.DivIcon;
  }

  // 3. Fallback al icono personalizado por defecto
  return createCustomIcon();
};

// ------------------------------------------------------------
// ESTILOS GLOBALES PARA ANIMACIONES
// ------------------------------------------------------------
const markerStyles = `
  @keyframes pulse {
    0% { transform: rotate(-45deg) scale(1); opacity: 1; }
    100% { transform: rotate(-45deg) scale(1.5); opacity: 0; }
  }
  .marker-transition .marker-container {
    transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .leaflet-marker-icon.custom-marker {
    transition: transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = markerStyles;
  document.head.appendChild(styleSheet);
}

// ------------------------------------------------------------
// ESTILOS DE MAPA
// ------------------------------------------------------------
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
];

// ------------------------------------------------------------
// COMPONENTE PRINCIPAL
// ------------------------------------------------------------
const MapComponent: React.FC<ComponentProps> = ({
  position,
  destino,
  markers,
  zoom = 16,
  showLayersControl = true,
  showMapType = true,
  defaultIcon
}) => {
  const [selectedStyle, setSelectedStyle] = useState(mapStyles[0]);

  const hasMultipleMarkers = !!(markers && markers.length > 0);
  const allPositions: [number, number][] = hasMultipleMarkers
    ? markers!.map(m => [m.lat, m.lng])
    : position
      ? [position]
      : [];

  // Extraemos BaseLayer dentro del componente para evitar referencias externas problemáticas
  const { BaseLayer } = LayersControl;

  return (
    <div className="map-component w-full">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
        {/* HEADER - Flexbox puro, sin grid problemático */}
        <div className="flex flex-wrap items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <FaMapMarkerAlt className="text-teal-600" />
              {hasMultipleMarkers ? 'ubicaciones de los Hoteles' : 'Ubicación del Hotel'}
            </h3>
            {showMapType && (
              <p className="text-gray-600 text-sm text-center lg:text-left">
                Selecciona un estilo de mapa
              </p>
            )}
          </div>
          {showMapType && (
            <div className="flex justify-center gap-2 mt-2 lg:mt-0">
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
          )}
        </div>

        {/* MAPA - Contenedor con ancho completo y altura fija/relativa */}
        <div className="relative rounded-xl overflow-hidden border-2 border-white w-full">
          <MapContainer
            center={hasMultipleMarkers ? allPositions[0] || [0, 0] : position || [0, 0]}
            zoom={zoom}
            style={{ height: '400px', width: '100%' }}
            zoomControl={true}
            scrollWheelZoom={true}
            className="rounded-xl transition-all duration-500"
          >
            <TileLayer
              attribution={selectedStyle.attribution}
              url={selectedStyle.url}
              maxZoom={25}
              minZoom={3}
            />

            {showLayersControl && (
              <LayersControl position="topright">
                {mapStyles.map((style) => (
                  <BaseLayer
                    key={style.id}
                    name={style.name}
                    checked={selectedStyle.id === style.id}
                  >
                    <TileLayer attribution={style.attribution} url={style.url} />
                  </BaseLayer>
                ))}
              </LayersControl>
            )}

            {!hasMultipleMarkers && position && (
              <>
                <AnimateMapView position={position} defaultZoom={zoom} />
                <AnimatedMarker position={position} icon={createCustomIcon()}>
                  <Popup className="rounded-xl shadow-lg">
                    {/* ... contenido del popup ... */}
                  </Popup>
                </AnimatedMarker>
              </>
            )}

            {hasMultipleMarkers && markers && (
              <>
                <FitBoundsToMarkers positions={allPositions} defaultZoom={zoom} />
                {markers.map((markerData, index) => {
                  const icon = createIconFromMarkerData(markerData, defaultIcon);
                  const key = markerData.id ?? index;
                  return (
                    <AnimatedMarker key={key} position={[markerData.lat, markerData.lng]} icon={icon}>
                      {markerData.popup ? (
                        <Popup className="rounded-xl shadow-lg">{markerData.popup}</Popup>
                      ) : (
                        <Popup className="rounded-xl shadow-lg">
                          <div className="p-2">
                            <p><strong>Lat:</strong> {markerData.lat.toFixed(6)}</p>
                            <p><strong>Lng:</strong> {markerData.lng.toFixed(6)}</p>
                          </div>
                        </Popup>
                      )}
                    </AnimatedMarker>
                  );
                })}
              </>
            )}
          </MapContainer>

          {/* Badge inferior con estilo seleccionado */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-teal-600">{selectedStyle.icon}</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{selectedStyle.name}</p>
                <p className="text-xs text-gray-600">{selectedStyle.description}</p>
              </div>
            </div>
          </div>

          {/* Badge superior con contador de ubicaciones */}
          <div className="absolute top-4 right-4 bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">
            {hasMultipleMarkers ? `${markers!.length} ubicaciones` : 'Posición actualizada'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;