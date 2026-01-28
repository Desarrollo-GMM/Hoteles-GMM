'use client'

import ReservationComponent from "@/components/features/dashboard/reservationComponent"
import NavbarComponent from "@/components/layouts/hoteles/navbarComponent"
import InformationComponent from "@/components/features/hotels/tulum/informationComponent"
import AutoScrollComponent from "@/components/ui/autoScrollComponent"
import HotelLocationComponent from "@/components/features/hotels/hotelLocationComponent"
import ServiceComponent from "@/components/features/hotels/serviceComponent"


import Image from "next/image"
import { useState } from "react"

import { IMAGES_ROUTES } from "@/app/constants/routes";
import { COMODIDADES } from "@/app/constants/services"

interface ComponentProps {
    destino: string,
}

const Page: React.FC<ComponentProps> = ({ destino = "Tulum" }) => {
    return (
        <div className="m-4">
            <NavbarComponent />

            <ReservationComponent
                imageUrl="/images/686d5354c468605f89c569ae_calidad 5.jpg"
                option={3}
                description={`Disfruta de la naturaleza y la tranquilidad en nuestro hotel de ${destino}`}
                title={`Hotel en ${destino}`}
                extraStyles="rounded-2xl h-[96vh]" />


            <HotelLocationComponent />

            <ServiceComponent COMODIDADES={COMODIDADES} destino={destino} />

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-white px-8 text-3xl text-gray-600">✦</span>
                </div>
            </div>

            <div className="my-12">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Galería Visual</h2>
                    <p className="text-gray-600">Descubre la magia de {destino} a través de nuestras imágenes</p>
                </div>

                <div className="relative h-[45vh] mb-12 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-transparent z-10" />
                    <AutoScrollComponent
                        speed="slow"
                        direction="horizontal"
                        reverse={false}
                        pauseOnHover={true}
                        className="py-4 h-auto"
                        gap={0}
                    >
                        {IMAGES_ROUTES.VERTICAL_IMAGES.TULUM.map((image, index) => (
                            <div
                                key={index}
                                className="mx-4 relative group cursor-pointer transform transition-transform duration-500 hover:scale-105"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                                <img
                                    src={image}
                                    alt={`Tulum ${index}`}
                                    className="h-[40vh] w-auto object-cover rounded-xl shadow-lg"
                                />
                            </div>
                        ))}
                    </AutoScrollComponent>
                </div>

                <div className="relative h-[35vh] overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-l from-teal-900/20 to-transparent z-10" />
                    <AutoScrollComponent
                        speed="medium"
                        direction="horizontal"
                        reverse={true}
                        pauseOnHover={true}
                        className="py-4 h-auto"
                        gap={0}
                    >
                        {IMAGES_ROUTES.HORIZONTAL_IMAGES.TULUM.map((image, index) => (
                            <div
                                key={index}
                                className="mx-4 relative group cursor-pointer transform transition-transform duration-500 hover:scale-105"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                                <img
                                    src={image}
                                    alt={`Tulum ${index}`}
                                    className="h-[30vh] w-auto object-cover rounded-xl shadow-lg"
                                />
                            </div>
                        ))}
                    </AutoScrollComponent>
                </div>
            </div>

            
        </div>
    )
}

export default Page