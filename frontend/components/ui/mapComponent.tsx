'use client'

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaMapMarkedAlt, FaSun, FaMoon, FaMountain, FaPalette, FaMapMarkerAlt } from 'react-icons/fa'

interface ComponentProps {

}

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
    iconUrl: '/leaflet/images/marker-icon.png',
    shadowUrl: '/leaflet/images/marker-shadow.png',
});


// Configuración del marcador personalizado
const createCustomIcon = (color = '#10b981') => {
    return L.divIcon({
        html: `
      <div style="
        background-color: ${color};
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        position: relative;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
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
      </div>
    `,
        className: 'custom-marker',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
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

const MapComponent: React.FC<ComponentProps> = () => {
        const position: [number, number] = [20.230364, -87.4477399];
    const [selectedStyle, setSelectedStyle] = useState(mapStyles[0]);
    const customIcon = createCustomIcon('#10b981');
    return (
        <div className="">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                            <FaMapMarkerAlt className="text-teal-600" />
                            Ubicación del Hotel
                        </h3>
                        <p className="text-gray-600 text-sm">Selecciona un estilo de mapa</p>
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
                        center={position}
                        zoom={16}
                        style={{ height: '400px', width: '100%' }}
                        zoomControl={true}
                        scrollWheelZoom={true}
                        className="rounded-xl"
                    >
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

                        <Marker position={position} icon={customIcon}>
                            <Popup className="rounded-xl shadow-lg">
                                <div className="p-4 max-w-xs">
                                    <h3 className="font-bold text-lg text-teal-700 mb-2">🏝️ Hotel Tulum</h3>
                                    <p className="text-gray-700 mb-3">
                                        Ubicación privilegiada en Tulum, rodeado de naturaleza y a minutos
                                        de las mejores playas y ruinas mayas.
                                    </p>
                                    <a
                                        href={`https://maps.google.com/?q=${position}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-block w-full text-center bg-blue-300 text-white py-2 px-4 rounded-lg hover:bg-teal-400 transition-colors duration-300 font-bold"
                                    >
                                        Ver en Google Maps
                                    </a>
                                </div>
                            </Popup>
                        </Marker>
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
                </div>
            </div>
        </div>
    )

}

export default MapComponent;