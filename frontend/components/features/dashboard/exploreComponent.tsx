'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ROUTES } from '@/app/constants/routes';

interface ImageSet {
    id: number;
    src: string[];
    alt: string;
}

const ExploreComponent = () => {
    const images: ImageSet[] = [
        {
            id: 1,
            src: [
                '/images/hoteles/horizontales/HOTEL_TULUM/EXPERIENCE/AZT15589.jpg',
                '/images/hoteles/horizontales/HOTEL_TULUM/EXPERIENCE/AZT18469.jpg',
                '/images/hoteles/horizontales/HOTEL_TULUM/EXPERIENCE/AZT18658.jpg',
            ],
            alt: 'TULUM',
        },
        {
            id: 2,
            src: [
                '/images/hoteles/horizontales/HOTEL_PALENQUE/EXPERIENCE/03.jpg',
                '/images/hoteles/horizontales/HOTEL_PALENQUE/EXPERIENCE/28.jpg',
                '/images/hoteles/horizontales/HOTEL_PALENQUE/EXPERIENCE/34.jpg',
            ],
            alt: 'PALENQUE',
        },
        {
            id: 3,
            src: [
                '/images/hoteles/horizontales/HOTEL_NUEVO_UXMAL/EXPERIENCE/AZT12238.jpg',
                '/images/hoteles/horizontales/HOTEL_NUEVO_UXMAL/EXPERIENCE/AZT17220.jpg',
                '/images/hoteles/horizontales/HOTEL_NUEVO_UXMAL/EXPERIENCE/AZT17295-4.jpg',
            ],
            alt: 'NUEVO UXMAL',
        },
        {
            id: 4,
            src: [
                '/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/EXPERIENCE/AZT10094.jpg',
                '/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/EXPERIENCE/AZT10273.jpg',
                '/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/EXPERIENCE/AZT10583.jpg',
                '/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/EXPERIENCE/AZT19930.jpg',
            ],
            alt: 'CHICHEN ITZA',
        },
        {
            id: 5,
            src: [
                '/images/hoteles/horizontales/HOTEL_EDZNA/EXPERIENCE/1DX30627.jpg',
                '/images/hoteles/horizontales/HOTEL_EDZNA/EXPERIENCE/1DX30756.jpg',
                '/images/hoteles/horizontales/HOTEL_EDZNA/EXPERIENCE/IMG_1941.jpg',
            ],
            alt: 'EDZNA',
        },
        {
            id: 6,
            src: [
                '/images/hoteles/horizontales/HOTEL_CALAKMUL/EXPERIENCE/IMG_2373.jpg',
                '/images/hoteles/horizontales/HOTEL_CALAKMUL/EXPERIENCE/IMG_2662.jpg',
                '/images/hoteles/horizontales/HOTEL_CALAKMUL/EXPERIENCE/IMG_2674.jpg',
            ],
            alt: 'CALAKMUL',
        },
    ];

    // Filtrar sets que no tengan rutas válidas para evitar renderizados vacíos
    const validImageSets = images.filter(
        (item) =>
            Array.isArray(item.src) &&
            item.src.length > 0 &&
            item.src.some((s) => !!s && s.trim() !== '')
    );

    return (
        <section className="max-w-7xl mx-auto w-full px-4 py-8">
            <h3 className="text-4xl font-medium mb-6">Vive la experiencia en el Mundo Maya.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {validImageSets.map((item) => (
                    <CarouselCard key={item.id} images={item.src} alt={item.alt} />
                ))}
            </div>
        </section>
    );
};

const CarouselCard = ({ images, alt }: { images: string[]; alt: string }) => {
    const [displayIndex, setDisplayIndex] = useState(0);               // imagen base visible
    const [transitioningIndex, setTransitioningIndex] = useState<number | null>(null); // imagen entrante
    const [isHovered, setIsHovered] = useState(false);
    const [errored, setErrored] = useState<Record<string, boolean>>({});
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const buildUrl = (baseRoute: string, name: string, banner: string) => {
        const separator = baseRoute.includes('?') ? '&' : '?';
        return `${baseRoute}?destino=${encodeURIComponent(name)}&banner=${encodeURIComponent(banner)}`;
    };

    if (!images || images.length === 0) return null;
    const hasMultiple = images.length > 1;

    // Limpiar intervalo al desmontar
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    // Efecto del intervalo automático
    useEffect(() => {
        if (!hasMultiple || isHovered || transitioningIndex !== null) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            return;
        }

        intervalRef.current = setInterval(() => {
            const nextIndex = (displayIndex + 1) % images.length;
            goToIndex(nextIndex);
        }, 3000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [hasMultiple, isHovered, displayIndex, transitioningIndex, images.length]);

    const goToIndex = (index: number) => {
        if (index === displayIndex) return; // evitar transición a la misma imagen
        setTransitioningIndex(index);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Manejo de error de imagen
    const handleImageError = (src: string) => {
        setErrored((prev) => ({ ...prev, [src]: true }));
    };

    // Componente para mostrar una imagen con su overlay (texto y flecha)
    const ImageWithOverlay = ({ src, index, isTransitioning = false }: { src: string; index: number; isTransitioning?: boolean }) => {
        if (errored[src]) {
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                    <span className="text-sm">Imagen no disponible</span>
                </div>
            );
        }

        return (
            <a href={buildUrl(ROUTES.HOTELS.find(item => item.key === alt.replace(" ", "_"))?.route || alt, ROUTES.HOTELS.find(item => item.key === alt.replace(" ", "_"))?.name || "", ROUTES.HOTELS.find(item => item.key === alt.replace(" ", "_"))?.banner || "")} className="block w-full h-full relative">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={index === 0 && !isTransitioning} // prioridad solo a la primera imagen base
                    onError={() => handleImageError(src)}
                />
                {/* Overlay con texto y flecha (se muestra en la imagen base y también en la entrante durante transición) */}
                {(!isTransitioning || transitioningIndex !== null) && (
                    <motion.div
                        initial={{ opacity: 1, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-4 p-1 w-full"
                    >
                        <div className="flex justify-between bg-white/60 backdrop-blur-sm p-2 rounded-lg shadow-lg">
                            <div>
                                <span className="text-xs font-medium">{alt}</span>
                                <span className="block font-light text-xs">clic para ver más</span>
                            </div>
                            <svg className="w-6 h-6 my-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </motion.div>
                )}
            </a>
        );
    };

    return (
        <div
            className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-500 aspect-[4/3]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Imagen base (siempre visible) */}
            <div className="absolute inset-0">
                <ImageWithOverlay src={images[displayIndex]} index={displayIndex} />
            </div>

            {/* Imagen entrante con máscara animada (solo si hay transición activa) */}
            {transitioningIndex !== null && (
                <motion.div
                    key={transitioningIndex}
                    className="absolute inset-0 z-10"
                    initial={{ maskPosition: '0% 0%' }}
                    animate={{ maskPosition: '100% 0%' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    onAnimationComplete={() => {
                        // Actualizar índice base y limpiar transición solo si sigue siendo el mismo destino
                        setDisplayIndex(transitioningIndex);
                        setTransitioningIndex(null);
                    }}
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%)',
                        maskSize: '200% 100%',
                        maskRepeat: 'no-repeat',
                    }}
                >
                    <ImageWithOverlay src={images[transitioningIndex]} index={transitioningIndex} isTransitioning={true} />
                </motion.div>
            )}

            {/* Degradado en hover (sutil) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-20"
            />

            {/* Indicadores (puntos) */}
            {hasMultiple && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-30">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToIndex(idx)}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                idx === displayIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                            aria-label={`Ir a imagen ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExploreComponent;