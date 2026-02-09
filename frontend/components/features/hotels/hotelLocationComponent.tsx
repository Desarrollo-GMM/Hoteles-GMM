'use client'

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import dynamic from 'next/dynamic'
const MapComponent = dynamic(() => import('@/components/ui/mapComponent'), { ssr: false })
import { IMAGES_ROUTES, ROUTES, hotelLocations } from "@/app/constants/routes";

interface ComponentProps {
    destino: string
}

interface Coordinates {
    lat: number,
    lng: number
}

const limpiarConCaracteresEspecificos = (texto: string) => {
    return texto
        .toUpperCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') 
        .replace(/[^A-Z0-9\s-_]/g, '')
        .replace(/\s+/g, '_')
        .trim();
};

const getLocationByDestino = (destino: string) => {
    const destinoNormalizado = destino.trim().toLowerCase();
    const exactMatch = hotelLocations.find(hotel => 
        hotel.city.toLowerCase() === destinoNormalizado
    );

    if (exactMatch) return exactMatch;
    const contieneCiudad = hotelLocations.find(hotel => 
        destinoNormalizado.includes(hotel.city.toLowerCase())
    );
    if (contieneCiudad) return contieneCiudad;
    
    if (destinoNormalizado.length >= 3) {
        const ciudadContieneDestino = hotelLocations.find(hotel => 
            hotel.city.toLowerCase().includes(destinoNormalizado)
        );
        if (ciudadContieneDestino) return ciudadContieneDestino;
    }
    const palabrasDestino = destinoNormalizado.split(' ');
    const matchParcial = hotelLocations.find(hotel => {
        const palabrasCiudad = hotel.city.toLowerCase().split(' ');
        return palabrasDestino.some(palabra => 
            palabra.length >= 3 && palabrasCiudad.includes(palabra)
        );
    });
    if (matchParcial) return matchParcial;
    
    return hotelLocations[0];
};

const HotelLocationComponent: React.FC<ComponentProps> = ({ destino }) => {
    const destinoNormalizado = limpiarConCaracteresEspecificos(destino);
    const imagenes = IMAGES_ROUTES.HORIZONTAL_IMAGES[destinoNormalizado as keyof typeof IMAGES_ROUTES.HORIZONTAL_IMAGES] || IMAGES_ROUTES.HORIZONTAL_IMAGES.TULUM;
    
    // Estado para la imagen actual
    const [imagenActual, setImagenActual] = useState<string>(imagenes[0]);
    // Referencia para el intervalo
    const intervaloRef = useRef<NodeJS.Timeout | null>(null);

    // Función para obtener índice aleatorio
    const obtenerIndiceAleatorio = (max: number): number => {
        return Math.floor(Math.random() * max);
    };

    useEffect(() => {
        if (intervaloRef.current) {
            clearInterval(intervaloRef.current);
        }

        intervaloRef.current = setInterval(() => {
            if (imagenes.length > 0) {
                const indiceAleatorio = obtenerIndiceAleatorio(imagenes.length);
                setImagenActual(imagenes[indiceAleatorio]);
            }
        }, 3000); 
        return () => {
            if (intervaloRef.current) {
                clearInterval(intervaloRef.current);
            }
        };
    }, [imagenes]); 

    useEffect(() => {
        if (imagenes.length > 0) {
            setImagenActual(imagenes[0]);
        }
    }, [imagenes]);

    const locations = getLocationByDestino(destino);

    const coordinates: Coordinates = {
        lat: locations.lat,
        lng: locations.lon
    };
    
    return (
        <div className="bg-gradient-to-br from-white to-teal-50 rounded-2xl h-[80vh] lg:p-6 my-1 lg:my-8 shadow-lg" id="mapSection">
            <div className="w-full text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                    Descubre Nuestro Entorno
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Ubicados en el corazón de {destino}, disfruta de la belleza natural que nos rodea
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:p-4 p-2">
                <div className="relative h-full overflow-hidden rounded-xl shadow-2xl">
                    <Image
                        src={imagenActual}
                        alt={`Vista del Hotel de ${destino}`}
                        fill
                        className="object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="text-white text-2xl font-bold">Vistas del Hotel</h3>
                        <p className="text-teal-100">Nuestras instalaciones en medio de la naturaleza</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <MapComponent 
                        position={[coordinates.lat, coordinates.lng]} 
                        destino={destino}
                    />

                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-teal-100/50 rounded-xl p-4">
                            <h4 className="font-semibold text-teal-800 mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                Ubicación en {locations.city}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelLocationComponent;