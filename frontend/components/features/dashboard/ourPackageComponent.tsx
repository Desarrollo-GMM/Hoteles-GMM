'use client'
import React from "react";
import Image from "next/image";

interface ComponentProps {

}

const OurPackageComponent: React.FC<ComponentProps> = () => {

    const images = Array(9).fill("/images/PAQUETES-TURISTICOS/CALAKMUL/5 DÍAS 6 NOCHES/propuesta calakmul 2 .png");

    return (
        <div className="px-4 md:px-8 lg:px-20 py-12">

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="flex items-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl px-28 font-bold uppercase leading-tight">
                        Nuestros Paquetes de verano
                    </h1>
                </div>
                <div className="flex items-center">
                    <p className="text-lg md:text-xl text-gray-700 px-20 text-center font-light">
                        Experimenta el lujo entre la majestuosa selva maya, donde el legado ancestral y la comodidad de un hotel de cuatro estrellas se fusionan en una experiencia única. Vive
                        <span className="font-bold text-teal-700"> #UnVeranoEnElMundoMaya.</span>
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:px-20 auto-rows-fr">
                {images.map((src, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-black transition-all duration-300 transform hover:-translate-y-1">
                        <div className="relative h-64 md:h-72">
                            <Image
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                src={src}
                                alt={`Paquete turístico ${index + 1}`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <div className="p-4 text-white">
                                    <h3 className="text-lg font-semibold">Paquete {index + 1}</h3>
                                    <p className="text-sm">Descubre más detalles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default OurPackageComponent;