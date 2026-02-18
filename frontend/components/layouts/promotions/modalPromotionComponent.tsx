'use client'

import { useEffect, useState } from "react"
import { PROMOTIONS } from "@/app/constants/routes";
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

interface ComponentProps {
    onClose?: () => void;
    autoShow?: boolean;
}

interface Paquete {
    id: string;
    label: string;
    active_color: string;
    images: string[];
    link: string;
    description: string;
}

const ModalPromotionComponent: React.FC<ComponentProps> = ({
    onClose,
    autoShow = true
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenClosed, setHasBeenClosed] = useState(false);

    const promoImage = PROMOTIONS;

    useEffect(() => {
        if (autoShow && !hasBeenClosed) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [autoShow, hasBeenClosed]);

    const handleClose = () => {
        setIsVisible(false);
        setHasBeenClosed(true);
        if (onClose) {
            onClose();
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/70 transition-opacity duration-300"
                onClick={handleClose}
            />

            <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-auto transform transition-all duration-300 opacity-100 scale-100 translate-y-0">
                <button
                    onClick={handleClose}
                    className="absolute -top-10 right-0 md:top-4 md:right-4 text-white md:text-gray-400 hover:text-gray-600 transition-colors z-10 bg-black/30 md:bg-white rounded-full p-2 shadow-md"
                    aria-label="Cerrar modal"
                >
                    <XMarkIcon className="w-6 h-6" />
                </button>

                <div className="p-4 md:p-6">
                    <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-xl">
                        <Image
                            src={promoImage}
                            alt="Promoción Cena 14 de Febrero"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 700px"
                            priority
                        />
                    </div>

                    <div className="mt-4 text-center">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                            Cena Romántica 14 de Febrero
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Disfruta de una cena especial con tu pareja en un ambiente único
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <a
                            href="tel:5513935091"
                            onClick={handleClose}
                            className="w-full px-6 py-3 border-2 text-center border-rose-500 text-rose-500 hover:bg-rose-50 rounded-lg font-medium transition-all duration-200 mt-4"
                        >
                            Reservar ahora
                        </a>

                        <button
                            onClick={() => {
                                window.location.href = '/promociones';
                                handleClose();
                            }}
                            className="w-full px-6 py-3 border-2 border-rose-500 text-rose-500 hover:bg-rose-50 rounded-lg font-medium transition-all duration-200 mt-4"
                        >
                            Ver todas las promociones
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ModalPromotionComponent;