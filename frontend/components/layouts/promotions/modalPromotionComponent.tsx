'use client'

import { useEffect, useState } from "react"
import { IMAGES_ROUTES } from "@/app/constants/routes";
import Image from "next/image";

const XMarkIcon = ({ className = "w-6 h-6" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M6 18L18 6M6 6l12 12" 
    />
  </svg>
);

interface ComponentProps { }

interface Paquete {
  id: string;
  label: string;
  active_color: string;
  images: string[];
  link: string;
  description: string;
}

const ModalPromotionComponent: React.FC<ComponentProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [currentPaqueteIndex, setCurrentPaqueteIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const paquetes: Paquete[] = IMAGES_ROUTES.PAQUETES_DATA || [];
    const paqueteActual = paquetes[currentPaqueteIndex];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
            setTimeout(() => setIsVisible(true), 50);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };

    const nextPaquete = () => {
        setCurrentPaqueteIndex((prevIndex) => 
            prevIndex === paquetes.length - 1 ? 0 : prevIndex + 1
        );
        setCurrentImageIndex(0); 
    };

    const prevPaquete = () => {
        setCurrentPaqueteIndex((prevIndex) => 
            prevIndex === 0 ? paquetes.length - 1 : prevIndex - 1
        );
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (!paqueteActual) return;
        setCurrentImageIndex((prevIndex) => 
            prevIndex === paqueteActual.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        if (!paqueteActual) return;
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? paqueteActual.images.length - 1 : prevIndex - 1
        );
    };

    if (!isOpen || paquetes.length === 0 || !paqueteActual) return null;
    
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${isVisible ? 'opacity-50' : 'opacity-0'
                    }`}
                onClick={handleClose}
            />
            <div
                className={`relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 transform transition-all duration-300 ${isVisible
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 translate-y-4'
                    }`}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-white rounded-full p-1 shadow-md"
                    aria-label="Cerrar modal"
                >
                    <XMarkIcon className="w-6 h-6" />
                </button>
                <div className="p-6">
                    <div className="flex justify-between items-center my-6">
                        <button
                            onClick={prevPaquete}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Paquete anterior"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        <div className="text-center">
                            <div className={`inline-block px-4 py-2 rounded-full text-white font-bold ${paqueteActual.active_color}`}>
                                {paqueteActual.label}
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                                {currentPaqueteIndex + 1} de {paquetes.length} paquetes
                            </p>
                        </div>
                        
                        <button
                            onClick={nextPaquete}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Siguiente paquete"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="relative mb-6">
                        {paqueteActual.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg z-10"
                                    aria-label="Imagen anterior"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                
                                <button
                                    onClick={nextImage}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg z-10"
                                    aria-label="Siguiente imagen"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl bg-gray-100">
                            {paqueteActual.images[currentImageIndex] && (
                                <Image
                                    src={paqueteActual.images[currentImageIndex]}
                                    alt={`${paqueteActual.label} - Imagen ${currentImageIndex + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 700px"
                                />
                            )}
                            
                            {paqueteActual.images.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                    {paqueteActual.images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex 
                                                ? 'bg-white w-4' 
                                                : 'bg-white/50 hover:bg-white/80'}`}
                                            aria-label={`Ir a imagen ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {paqueteActual.images.length > 1 && (
                            <div className="text-center mt-2 text-sm text-gray-600">
                                Imagen {currentImageIndex + 1} de {paqueteActual.images.length}
                            </div>
                        )}
                    </div>

                    <div className="text-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            {paqueteActual.description}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {paquetes.map((paquete, index) => (
                                <button
                                    key={paquete.id}
                                    onClick={() => {
                                        setCurrentPaqueteIndex(index);
                                        setCurrentImageIndex(0);
                                    }}
                                    className={`px-3 py-1 text-sm rounded-full transition-all ${
                                        index === currentPaqueteIndex
                                            ? `${paquete.active_color} text-white font-bold`
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {paquete.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                        <button
                            onClick={handleClose}
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-lg font-medium hover:from-gray-200 hover:to-gray-300 transition-all duration-200"
                        >
                            Ver más tarde
                        </button>
                        <a
                            href={paqueteActual.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleClose}
                            className={`flex-1 px-6 py-3 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-200 shadow-md text-center ${paqueteActual.active_color}`}
                        >
                            Reservar paquete {paqueteActual.label}
                        </a>
                    </div>

                    <button
                        onClick={() => {
                            window.location.href = '/paquetes';
                            handleClose();
                        }}
                        className="w-full px-6 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                    >
                        📋 Ver todos los paquetes disponibles
                    </button>

                    <div className="flex justify-center mt-6 space-x-2">
                        {paquetes.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentPaqueteIndex(index);
                                    setCurrentImageIndex(0);
                                }}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    index === currentPaqueteIndex
                                        ? 'bg-blue-500 w-6'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Ir al paquete ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPromotionComponent;