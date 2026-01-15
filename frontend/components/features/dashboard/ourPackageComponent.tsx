'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ComponentProps {}

const OurPackageComponent: React.FC<ComponentProps> = () => {
    const images = [
        "/images/PAQUETES-TURISTICOS/CALAKMUL/5 DÍAS 6 NOCHES/propuesta calakmul 2 .png",
        "/images/PAQUETES-TURISTICOS/CHICHÉN ITZÁ/2 NOCHES 3 DIAS/CHICHEN HORIZONTAL 02.png",
        "/images/PAQUETES-TURISTICOS/CHICHÉN ITZÁ/4 NOCHES 5 DÍAS/PORTAL DE KUKULKAN.png",
        "/images/PAQUETES-TURISTICOS/EDZNÁ/2 NOCHES 3 DIAS/EDZNA 2 N 3 D HOR.png",
        "/images/PAQUETES-TURISTICOS/EDZNÁ/4 NOCHES 5 DIAS/EDZNA 4 N 5 D HOR.png",
        "/images/PAQUETES-TURISTICOS/NUEVO UXMAL/3 DÍAS 2 NOCHES/paquete nuevo uxmal 3 dias 2 noches.png",
        "/images/PAQUETES-TURISTICOS/NUEVO UXMAL/4 DÍAS 3 NOCHES/paquete nuevo uxmal 5 dias 4 noches.png",
        "/images/PAQUETES-TURISTICOS/PALENQUE/2 NOCHES 3 DÍAS/Paquete turistico palenque 2 noches 3 dias.png",
        "/images/PAQUETES-TURISTICOS/PALENQUE/3 NOCHES 4 DÍAS/Paquete turistico palenque 3 noches 4 dias.png",
        "/images/PAQUETES-TURISTICOS/TULUM/2 NOCHES 3 DÍAS/Paquete Turístico Tulum_.png",
        "/images/PAQUETES-TURISTICOS/TULUM/3 NOCHES 4 DÍAS/Copia de Paquete Turístico Tulum_.png"
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Configurar número de slides según el tamaño de pantalla
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        if (currentIndex < images.length - slidesToShow) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(0); // Vuelve al inicio
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            setCurrentIndex(images.length - slidesToShow); // Va al final
        }
    };

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, currentIndex]);

    return (
        <div className="px-4 md:px-8 lg:px-20 lg:py-12 py-5">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="flex items-center text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl lg:px-28 font-bold uppercase leading-tight text-black">
                        Nuestros Paquetes de verano
                    </h1>
                </div>
                <div className="flex items-start lg:items-center">
                    <p className="text-lg md:text-xl text-gray-700 px-5 lg:px-20 text-center font-light">
                        Experimenta el lujo entre la majestuosa selva maya, donde el legado ancestral y la comodidad de un hotel de cuatro estrellas se fusionan en una experiencia única. Vive
                        <span className="font-bold text-teal-700"> #UnVeranoEnElMundoMaya.</span>
                    </p>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden px-4">
                {/* Contenedor principal */}
                <div className="relative h-[250px] md:h-[300px] lg:h-[400px] w-full">
                    <div 
                        className="flex w-72 lg:w-full h-full transition-transform duration-500 ease-in-out gap-3 md:gap-4 lg:gap-5"
                        style={{ 
                            transform: `translateX(-${currentIndex * (120 / slidesToShow)}%)`,
                            
                        }}
                    >
                        {images.map((src, index) => (
                            <div 
                                key={index} 
                                className="relative w-80 md:w-96 lg:w-1/3 h-full flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
                                style={{
                                    marginRight: index < images.length - 1 ? '0.75rem' : '0'
                                }}
                            >
                                <Image
                                    className="object-fill h-64 lg:h-full hover:scale-105 transition-transform duration-300"
                                    src={src}
                                    alt={`Paquete turístico ${index + 1}`}
                                    width={1000}
                                    height={1000}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <span className="text-sm font-semibold">Paquete {index + 1}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botones de navegación */}
                <button 
                    type="button" 
                    onClick={prevSlide}
                    className="absolute top-1/2 left-0 z-30 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 hover:bg-white shadow-lg transform -translate-y-1/2 focus:outline-none"
                >
                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </button>
                
                <button 
                    type="button" 
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 z-30 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 hover:bg-white shadow-lg transform -translate-y-1/2 focus:outline-none"
                >
                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                    </svg>
                    <span className="sr-only">Next</span>
                </button>

                {/* Indicadores de posición */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
                    {Array.from({ length: images.length - slidesToShow + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                currentIndex === index 
                                ? 'bg-teal-600 scale-110' 
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Ir al grupo ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Contador */}
                <div className="absolute top-4 right-4 z-30 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {currentIndex + 1}/{images.length - slidesToShow + 1}
                </div>
            </div>

            {/* Información adicional */}
            <div className="mt-12 text-center">
                
                <div className="flex justify-center items-center space-x-6">
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors flex items-center space-x-2"
                    >
                        {isAutoPlaying ? (
                            <>
                                <span>⏸️</span>
                                <span>Pausar</span>
                            </>
                        ) : (
                            <>
                                <span>▶️</span>
                                <span>Reproducir</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurPackageComponent;