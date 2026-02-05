'use client'

import React from "react"
import Image from "next/image"
import dynamic from 'next/dynamic'
const MapComponent = dynamic(() => import('@/components/ui/mapComponent'), { ssr: false })
import { IMAGES_ROUTES, hotelLocations } from "@/app/constants/routes";
import { Long_Cang } from "next/font/google";

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
        .replace(/[\u0300-\u036f]/g, '') // Eliminar todos los acentos
        .replace(/[^A-Z0-9\s-_]/g, '') // Mantener también guiones
        .replace(/\s+/g, '_')
        .trim();
};


const getLocationByDestino = (destino: string) => {
    return hotelLocations.find((hotel) => 
        hotel.city.includes(destino) ||
        destino.includes(hotel.city)
    ) || hotelLocations[0]; // Fallback a Tulum si no encuentra
};

const HotelLocationComponent: React.FC<ComponentProps> = ({ destino }) => {
    const destinoNormalizado = limpiarConCaracteresEspecificos(destino);
    console.log(destinoNormalizado)
    const imagenes = IMAGES_ROUTES.HORIZONTAL_IMAGES[destinoNormalizado as keyof typeof IMAGES_ROUTES.HORIZONTAL_IMAGES] || IMAGES_ROUTES.HORIZONTAL_IMAGES.TULUM;
    console.log(imagenes)
    const imagenAleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
    
    const locations = getLocationByDestino(destino);
    const Coordinates: Coordinates = {
        lat: locations.lat,
        lng: locations.lon
    }
    
    return (
        <div className="bg-gradient-to-br from-white to-teal-50 rounded-2xl h-[90vh] p-6 my-8 shadow-lg">
            <div className="w-full text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                    Descubre Nuestro Entorno
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Ubicados en el corazón de {destino}, disfruta de la belleza natural que nos rodea
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
                <div className="relative h-full overflow-hidden rounded-xl shadow-2xl">
                    <Image
                        src={imagenAleatoria}
                        alt={`Vista del Hotel de ${destino}`}
                        fill
                        className="object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="text-white text-2xl font-bold">Vistas del Hotel</h3>
                        <p className="text-teal-100">Nuestras instalaciones en medio de la naturaleza</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <MapComponent position={[Coordinates?.lat, Coordinates?.lng]}/>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-teal-100/50 rounded-xl p-4">
                            <h4 className="font-semibold text-teal-800 mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                Ubicación Privilegiada
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelLocationComponent;