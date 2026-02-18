'use client'

import ReservationComponent from "@/components/features/dashboard/reservationComponent"
import NavbarComponent from "@/components/layouts/hoteles/navbarComponent"
import InformationComponent from "@/components/features/hotels/tulum/informationComponent"
import AutoScrollComponent from "@/components/ui/autoScrollComponent"
import HotelLocationComponent from "@/components/features/hotels/hotelLocationComponent"
import ServiceComponent from "@/components/features/hotels/serviceComponent"
import TermsAndConditionComponent from "@/components/features/hotels/termsAndConditionsComponent"
import GaleriaInteractiva from "@/components/features/dashboard/galleryImagesComponent"
import FooterComponent from "@/components/layouts/dashboard/footerComponent"

import { TERMS_AND_CONDITIONS } from "../constants/termsAndConditions"

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

        if (destinoParam) {
            setDestino(decodeURIComponent(destinoParam));
        }

        if (bannerImage) {
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
    console.log("Prueba de destino 00034: "+destino)
    const img_horizontales = IMAGES_ROUTES.HORIZONTAL_IMAGES[destinoNormalizado as keyof typeof IMAGES_ROUTES.HORIZONTAL_IMAGES] || IMAGES_ROUTES.HORIZONTAL_IMAGES.TULUM;
    const img_verticales = IMAGES_ROUTES.VERTICAL_IMAGES[destinoNormalizado as keyof typeof IMAGES_ROUTES.VERTICAL_IMAGES] || IMAGES_ROUTES.VERTICAL_IMAGES.TULUM;

    return (
        <div className="lg:m-4 m-2 ">
            <NavbarComponent destino={destinoNormalizado}/>

            <ReservationComponent
                imageUrl={banner}
                option={3}
                description={`Disfruta de la naturaleza y la tranquilidad en nuestro Hotel ${destino}`}
                title={`Hotel en ${destino}`}
                extraStyles="rounded-2xl h-[96vh]"
                defaultLocation={destino} />

            <HotelLocationComponent destino={destino} />

            <div className="mt-24" id='galerySection'>
                <div className="text-center mb-8">
                    <h2 className="lg:text-3xl text-xl font-bold text-gray-800 mb-2">Galería Visual</h2>
                    <p className="text-gray-600">Descubre la magia de {destino} a través de nuestras imágenes</p>
                </div>

                <GaleriaInteractiva
                    destino={destino}
                    img_horizontales={img_horizontales}
                    img_verticales={img_verticales}
                />
            </div>

            <ServiceComponent COMODIDADES={COMODIDADES} destino={destino} />

            <TermsAndConditionComponent destino={destino} />

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-white px-8 text-3xl text-gray-600">✦</span>
                </div>
            </div>

            <FooterComponent></FooterComponent>
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