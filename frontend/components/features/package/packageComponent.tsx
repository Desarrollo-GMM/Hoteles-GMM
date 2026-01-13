'use client'

import { colors } from 'flowbite-react/plugin/tailwindcss/colors';
import { useState } from 'react';
import Image from 'next/image';

interface ComponentProps { }

const PackageComponent: React.FC<ComponentProps> = () => {
    const [activeTab, setActiveTab] = useState<string>('tulum');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const tabs = [
        {
            id: 'tulum', label: 'Tulum', active_color: 'bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600',
            images: [
                "/images/PAQUETES-TURISTICOS/TULUM/2 NOCHES 3 DÍAS/Paquete Turístico Tulum_.png",
                "/images/PAQUETES-TURISTICOS/TULUM/3 NOCHES 4 DÍAS/Copia de Paquete Turístico Tulum_.png"
            ]
        },
        {
            id: 'chichen', label: 'Chichén Itzá', active_color: 'bg-gradient-to-r from-red-400 via-red-500 to-red-600',
            images: [
                "/images/PAQUETES-TURISTICOS/CHICHÉN ITZÁ/2 NOCHES 3 DIAS/CHICHEN HORIZONTAL 02.png",
                "/images/PAQUETES-TURISTICOS/CHICHÉN ITZÁ/4 NOCHES 5 DÍAS/PORTAL DE KUKULKAN.png"
            ]
        },
        {
            id: 'uxmal', label: 'Nuevo Uxmal', active_color: 'bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700',
            images: [
                "/images/PAQUETES-TURISTICOS/NUEVO UXMAL/3 DÍAS 2 NOCHES/paquete nuevo uxmal 3 dias 2 noches.png",
                "/images/PAQUETES-TURISTICOS/NUEVO UXMAL/4 DÍAS 3 NOCHES/paquete nuevo uxmal 5 dias 4 noches.png"
            ]
        },
        {
            id: 'edza', label: 'Edzná', active_color: 'bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700',
            images: [
                "/images/PAQUETES-TURISTICOS/EDZNÁ/2 NOCHES 3 DIAS/EDZNA 2 N 3 D HOR.png",
                "/images/PAQUETES-TURISTICOS/EDZNÁ/4 NOCHES 5 DIAS/EDZNA 4 N 5 D HOR.png"
            ]
        },
        {
            id: 'palenque', label: 'Palenque', active_color: 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700',
            images: [
                "/images/PAQUETES-TURISTICOS/PALENQUE/2 NOCHES 3 DÍAS/Paquete turistico palenque 2 noches 3 dias.png",
                "/images/PAQUETES-TURISTICOS/PALENQUE/3 NOCHES 4 DÍAS/Paquete turistico palenque 3 noches 4 dias.png"
            ]
        },
        {
            id: 'calakmul', label: 'Calakmul', active_color: 'bg-gradient-to-r from-green-400 via-green-500 to-green-600 ',
            images: [
                "/images/PAQUETES-TURISTICOS/CALAKMUL/5 DÍAS 6 NOCHES/propuesta calakmul 2 .png",
            ]
        },
    ];

    return (
        <div className="relative min-h-screen mt-14">
            <div className="mt-28">
                <p className="w-full text-4xl lg:text-6xl text-center font-bold uppercase">
                    ¡Explora el Mundo Maya!
                </p>
                <p className="w-full text-bold text-center my-8">
                    Desde la comodidad de nuestros 6 hoteles turísticos, cada espacio ha sido diseñado para ofrecerte una experiencia auténtica, rodeada de historia, naturaleza y cultura, con la calidad y calidez que nos distingue.
                </p>
                <p className="w-full font-extrabold text-center italic my-4">
                    ¡Hospédate con nosotros y vive el legado maya como nunca antes!
                </p>
            </div>
            <div className="flex justify-center w-full align-middle mx-auto ">
                <button
                    className="items-center bg-red-600 m-3 lg:m-10 px-5 py-3 rounded-lg shadow-xs text-white uppercase 
                        transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-red-400 hover:bg-red-700 hover:scale-105 font-bold"
                    type="button"
                >
                    Reservar
                </button>
            </div>

            <div className="mb-4 border-b border-gray-500">
                <ul className="flex flex-wrap justify-center text-sm gap-1 lg:gap-0 font-medium text-center"
                    role="tablist">
                    {tabs.map((tab) => (
                        <li key={tab.id} className="me-2" role="presentation">
                            <button
                                className={`inline-block py-2 px-4 border-b-2  rounded-t-base rounded-xl text-white ${tab.active_color}  ${activeTab === tab.id
                                    ? 'text-fg-brand border-brand scale-110 duration-75'
                                    : 'border-transparent hover:text-fg-brand hover:border-brand'
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                                type="button"
                                role="tab"
                                aria-selected={activeTab === tab.id}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className=''>
                {tabs.map((tab) => (
                    <div key={tab.id} className={`px-10 rounded-base bg-neutral-secondary-soft grid grid-cols-1 lg:grid-cols-2 gap-5 ${activeTab === tab.id ? 'block' : 'hidden'}`} role="tabpanel">
                        {tab.images.map((image, index) => (
                            <Image key={index} src={image} alt='' width={1000} height={1000} className="shadow-xl rounded-md lg:hover:scale-105 lg:duration-150 lg:hover:shadow-gray-500"></Image>
                        ))}

                    </div>
                ))}

            </div>

        </div>
    );
};

export default PackageComponent;