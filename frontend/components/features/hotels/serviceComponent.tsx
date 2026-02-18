'use client'

import React, { useState, useEffect } from "react"

interface ComponentProps {
    COMODIDADES: Record<string, Record<string, Array<{ icon: React.ReactNode, text: string, color: string }>>>,
    destino: string,
}

const limpiarConCaracteresEspecificos = (texto: string) => {
    return texto
        .toUpperCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^A-Z0-9\s-_]/g, '')
        .replace(/\s+/g, '_')
        .trim();
};

const ServiceComponent: React.FC<ComponentProps> = ({ COMODIDADES, destino }) => {
    const [activeAccordions, setActiveAccordions] = useState<Record<number, boolean>>({});
    const [allExpanded, setAllExpanded] = useState(false);
    const destinoKey = limpiarConCaracteresEspecificos(destino);
    const destinoData = COMODIDADES[destinoKey];

    console.log("El servicio seleccionado es: " + destino);

    useEffect(() => {
        // Resetear estado cuando cambia el destino
        setActiveAccordions({});
        setAllExpanded(false);
    }, [destino]);

    if (!destinoData) {
        return (
            <div className="mt-20 mb-7 text-center" id="servicesSection">
                <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-full px-6 py-3 text-amber-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="font-medium">No hay servicios disponibles para <span className="font-bold">{destino}</span></span>
                </div>
            </div>
        );
    }

    const categories = Object.keys(destinoData);
    const totalCategories = categories.length;

    const formatearFrase = (texto: string) => {
        const palabras = texto.match(/[A-Z]?[a-z]+|[A-Z]+(?=[A-Z]|$)/g) || [];
        return palabras
            .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
            .join(' ');
    };

    const toggleAccordion = (index: number) => {
        setActiveAccordions(prev => {
            const newState = { ...prev, [index]: !prev[index] };
            // Actualizar el estado de "todos expandidos" basado en el nuevo estado
            const allExpandedNow = categories.every((_, i) => newState[i] === true);
            setAllExpanded(allExpandedNow);
            return newState;
        });
    };

    const toggleAllAccordions = () => {
        if (allExpanded) {
            // Colapsar todos
            setActiveAccordions({});
            setAllExpanded(false);
        } else {
            // Expandir todos
            const allTrue = categories.reduce((acc, _, idx) => ({ ...acc, [idx]: true }), {});
            setActiveAccordions(allTrue);
            setAllExpanded(true);
        }
    };

    return (
        <div className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden" id="servicesSection">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-200/10 via-cyan-200/10 to-teal-200/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-100/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Cabecera con título y botón expandir/colapsar */}
                <div className="justify-between gap-4 max-w-3xl mx-auto mb-12">
                    <div className="text-center">
                        <span className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
                            ✦ Hotel {destino}
                        </span>
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">
                            Amenidades y servicios
                        </h2>
                        <p className="text-lg text-slate-600">
                            Descubre la magia de {destino} a través de nuestras experiencias exclusivas
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mt-4 rounded-full mx-auto" />
                    </div>
                </div>
                <div className="w-full mb-5">
                    {/* Botón para expandir/colapsar todos */}
                    {totalCategories > 0 && (
                        <button
                            onClick={toggleAllAccordions}
                            className={`
                                flex items-center justify-center gap-2 px-5 py-2.5 
                                bg-white border-2 rounded-xl shadow-md hover:shadow-lg 
                                transition-all duration-300 font-medium text-sm mx-auto
                                ${allExpanded
                                    ? 'border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50'
                                    : 'border-blue-300 text-blue-700 hover:border-blue-400 hover:bg-blue-50'
                                }
                            `}
                        >
                            <svg
                                className={`w-5 h-5 transition-transform duration-300 ${allExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={allExpanded
                                        ? "M5 15l7-7 7 7"  // flecha arriba (colapsar)
                                        : "M19 9l-7 7-7-7"  // flecha abajo (expandir)
                                    }
                                />
                            </svg>
                            <span>
                                {allExpanded ? 'Colapsar todo' : 'Expandir todo'}
                            </span>
                        </button>
                    )}
                </div>


                {/* Grid de categorías */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {categories.map((category, index) => {
                        const formattedCategory = formatearFrase(category);
                        const isActive = activeAccordions[index];
                        const serviceCount = destinoData[category]?.length || 0;

                        return (
                            <div
                                key={`${category}-${index}`}
                                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                {/* Línea superior decorativa con gradiente */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                {/* Cabecera del acordeón */}
                                <h2>
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={isActive}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
                                    >
                                        <div className="flex-1">
                                            <span className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                                {formattedCategory}
                                            </span>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-sm text-slate-500">
                                                    {serviceCount} {serviceCount === 1 ? 'servicio' : 'servicios'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Indicador circular con flecha animada */}
                                        <div className={`
                                            flex items-center justify-center w-10 h-10 rounded-full
                                            transition-all duration-300
                                            ${isActive
                                                ? 'bg-blue-100 text-blue-600 rotate-180'
                                                : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                                            }
                                        `}>
                                            <svg
                                                className="w-5 h-5 transition-transform duration-300"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2.5"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                </h2>

                                {/* Cuerpo del acordeón con animación de altura */}
                                <div
                                    className={`
                                        transition-all duration-500 ease-in-out
                                        ${isActive ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
                                        overflow-hidden
                                    `}
                                >
                                    <div className="p-6 pt-2 border-t border-slate-100">
                                        <div className="grid grid-cols-3 gap-4">
                                            {destinoData[category]?.map((service, serviceIndex) => (
                                                <div
                                                    key={`${category}-service-${serviceIndex}`}
                                                    className="group/service flex flex-col items-center text-center p-2 rounded-xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-200"
                                                >
                                                    <div className={`
                                                        w-12 h-12 rounded-full flex items-center justify-center mb-3
                                                        bg-${service.color}-50 text-${service.color}-600
                                                        group-hover/service:scale-110 transition-transform duration-300
                                                        group-hover/service:bg-${service.color}-100
                                                    `}>
                                                        <span className="text-2xl">
                                                            {service.icon}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs font-medium text-slate-700 leading-tight line-clamp-2">
                                                        {service.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mensaje de pie si no hay categorías */}
                {categories.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-slate-500">Este hotel aún no ha registrado servicios</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ServiceComponent;