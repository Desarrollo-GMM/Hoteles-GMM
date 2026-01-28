'use client'

import React from "react"
import Image from "next/image"
import MapComponent from "@/components/ui/mapComponent"
import { IMAGES_ROUTES } from "@/app/constants/routes";

interface ComponentProps {}

const HotelLocationComponent: React.FC<ComponentProps> = () => {
    
    return (
        <div className="bg-gradient-to-br from-white to-teal-50 rounded-2xl h-[90vh] p-6 my-8 shadow-lg">
                <div className="w-full text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">
                        Descubre Nuestro Entorno
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ubicados en el corazón de Tulum, disfruta de la belleza natural que nos rodea
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
                    <div className="relative h-full overflow-hidden rounded-xl shadow-2xl">
                        <Image
                            src={IMAGES_ROUTES.HORIZONTAL_IMAGES.TULUM[Math.random() * IMAGES_ROUTES.HORIZONTAL_IMAGES.TULUM.length | 0]}
                            alt="Vista del Hotel Tulum"
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
                        <MapComponent />

                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-teal-100/50 rounded-xl p-4">
                                <h4 className="font-semibold text-teal-800 mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    Ubicación Privilegiada
                                </h4>
                                <p className="text-sm text-gray-700">
                                    A 5 minutos de las playas más hermosas y 10 minutos del sitio arqueológico
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HotelLocationComponent;