'use client'

import React, { useState } from "react"

interface ComponentProps {
    COMODIDADES: Record<string, Record<string, Array<{ icon: React.ReactNode, text: string, color: string }>>>,
    destino: string,
}

const ServiceComponent: React.FC<ComponentProps> = ({ COMODIDADES, destino }) => {
    const [activeAccordions, setActiveAccordions] = useState<Record<number, boolean>>({});

    const destinoData = COMODIDADES[destino.toUpperCase()];

    if (!destinoData) {
        return <div>No hay datos disponibles para {destino}</div>;
    }

    const categories = Object.keys(destinoData);

    const formatearFrase = (texto: string) => {
        const palabras = texto.match(/[A-Z]?[a-z]+|[A-Z]+(?=[A-Z]|$)/g) || [];
        return palabras
            .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
            .join(' ');
    };

    const toggleAccordion = (index: number) => {
        setActiveAccordions(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="mt-20 mb-7">
            <div className="text-center m-10">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Amenidades y servicios del Hotel {destino}</h2>
                <p className="text-gray-600">Descubre la magia de {destino} a través de nuestras imágenes</p>
            </div>
            <div className="w-full flex justify-center align-middle">
                <div className="w-2/3 columns-1 md:columns-2 gap-4">
                    {categories.map((category, index) => {
                        const formattedCategory = formatearFrase(category);
                        const isActive = activeAccordions[index];

                        return (
                            <div 
                                key={`${category}-${index}`} 
                                className="break-inside-avoid mb-4 border border-default rounded-xl shadow-xs overflow-hidden hover:scale-105 duration-300"
                            >
                                <h2 id={`accordion-card-heading-${index}`}>
                                    <button
                                        type="button"
                                        className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body hover:text-heading hover:bg-neutral-secondary-medium gap-3 transition-all duration-200 ${isActive ? 'bg-neutral-secondary-medium' : ''}`}
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={isActive}
                                        aria-controls={`accordion-card-body-${index}`}
                                    >
                                        <span className="text-left">{formattedCategory}</span>
                                        <svg
                                            className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m5 15 7-7 7 7"
                                            />
                                        </svg>
                                    </button>
                                </h2>

                                <div
                                    id={`accordion-card-body-${index}`}
                                    className={`border-t border-default transition-all duration-200 overflow-hidden ${isActive ? 'max-h-[500px]' : 'max-h-0'}`}
                                    aria-labelledby={`accordion-card-heading-${index}`}
                                >
                                    <div className="p-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {destinoData[category]?.map((service, serviceIndex) => (
                                                <div
                                                    key={`${category}-service-${serviceIndex}`}
                                                    className="flex flex-col items-center text-center p-3 rounded-lg bg-white shadow-sm"
                                                >
                                                    <div className={`mb-2 text-2xl text-${service.color}-500`}>
                                                        {service.icon}
                                                    </div>
                                                    <p className="text-sm font-light text-body">{service.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ServiceComponent;