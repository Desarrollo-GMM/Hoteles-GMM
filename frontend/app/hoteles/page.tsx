'use client'

import ReservationComponent from "@/components/features/dashboard/reservationComponent"
import NavbarComponent from "@/components/layouts/hoteles/navbarComponent"
import InformationComponent from "@/components/features/hotels/tulum/informationComponent"
import AutoScrollComponent from "@/components/ui/autoScrollComponent"
import HotelLocationComponent from "@/components/features/hotels/hotelLocationComponent"
import ServiceComponent from "@/components/features/hotels/serviceComponent"
import Image from "next/image"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { IMAGES_ROUTES, ROUTES } from "@/app/constants/routes";
import { COMODIDADES } from "@/app/constants/services"

const limpiarConCaracteresEspecificos = (texto: string) => {
    return texto
        .toUpperCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Eliminar todos los acentos
        .replace(/[^A-Z0-9\s-_]/g, '') // Mantener también guiones
        .replace(/\s+/g, '_')
        .trim();
};

function HotelContent() {
    const [destino, setDestino] = useState<string>("Tulum")
    const [banner, setBanner] = useState<string>("")
    const [isLoading, setIsLoading] = useState(true)

    const searchParams = useSearchParams();
    useEffect(() => {
        const destinoParam = searchParams?.get('destino');
        const bannerImage = searchParams?.get('banner')

        if(destinoParam){
            setDestino(decodeURIComponent(destinoParam));
        }

        if(bannerImage){
            setBanner(decodeURIComponent(bannerImage));
        }

        setIsLoading(false);
    }, [searchParams])

    if (isLoading) {
        return (
            <div className="lg:m-4 m-2">
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-xl">Cargando información del hotel...</div>
                </div>
            </div>
        );
    }

    const destinoNormalizado = limpiarConCaracteresEspecificos(destino);
    const img_horizontales = IMAGES_ROUTES.HORIZONTAL_IMAGES[destinoNormalizado as keyof typeof IMAGES_ROUTES.HORIZONTAL_IMAGES] || IMAGES_ROUTES.HORIZONTAL_IMAGES.TULUM;
    const img_verticales = IMAGES_ROUTES.VERTICAL_IMAGES[destinoNormalizado as keyof typeof IMAGES_ROUTES.VERTICAL_IMAGES] || IMAGES_ROUTES.VERTICAL_IMAGES.TULUM;

    return (
        <div className="lg:m-4 m-2">
            <NavbarComponent />

            <ReservationComponent
                imageUrl={banner}
                option={3}
                description={`Disfruta de la naturaleza y la tranquilidad en nuestro Hotel ${destino}`}
                title={`Hotel en ${destino}`}
                extraStyles="rounded-2xl h-[96vh]" />

            <HotelLocationComponent destino={destino}/>

            <ServiceComponent COMODIDADES={COMODIDADES} destino={destino} />

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-white px-8 text-3xl text-gray-600">✦</span>
                </div>
            </div>

            <div className="my-12" id='galerySection'>
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
                        {img_horizontales.map((image, index) => (
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
                        {img_verticales.map((image, index) => (
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

// Componente principal envuelto en Suspense
const Page = () => {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl">Cargando información del hotel...</div>
            </div>
        }>
            <HotelContent />
        </Suspense>
    )
}

export default Page