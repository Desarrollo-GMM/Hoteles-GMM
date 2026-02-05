'use client'

import { colors } from 'flowbite-react/plugin/tailwindcss/colors';
import { useState } from 'react';
import Image from 'next/image';

import CalendarIcon from '@/components/ui/icons/calendar';
import WhatsappIcon from '@/components/ui/icons/whatsapp';
import CalloutIcon from '@/components/ui/icons/callout';
import CashIcon from '@/components/ui/icons/cash';

import { IMAGES_ROUTES } from '@/app/constants/routes';

interface ComponentProps { }

const PackageComponent: React.FC<ComponentProps> = () => {
    const [activeTab, setActiveTab] = useState<string>('tulum');

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseLeave = () => {
        if (!isDropdownOpen) setIsHovered(false);
    };

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


            <div className="sticky top-14 z-40 bg-white shadow-sm mb-6 md:mb-8">
                <div className="max-w-6xl mx-auto px-4">
                    <ul className="flex flex-wrap justify-center gap-1 md:gap-2 font-medium text-center overflow-x-auto py-2"
                        role="tablist">
                        {IMAGES_ROUTES.PAQUETES_DATA.map((tab) => (
                            <li key={tab.id} className="flex-shrink-0" role="presentation">
                                <button
                                    className={`inline-flex items-center justify-center py-3 px-4 md:px-6 border-b-2 rounded-t-lg transition-all duration-300 ${activeTab === tab.id
                                        ? `text-white ${tab.active_color} border-transparent shadow-lg transform scale-105`
                                        : 'text-gray-700 bg-gray-50 hover:bg-gray-100 border-transparent hover:border-gray-300'
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeTab === tab.id}
                                >
                                    <span className="font-semibold whitespace-nowrap">{tab.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className=''>
                {IMAGES_ROUTES.PAQUETES_DATA.map((tab) => (
                    <div key={tab.id} className={`px-10 rounded-base bg-neutral-secondary-soft grid grid-cols-1 lg:grid-cols-2 gap-5 ${activeTab === tab.id ? 'block' : 'hidden'}`} role="tabpanel">
                        {tab.images.map((image, index) => (
                            <Image key={index} src={image} alt='' width={1000} height={1000} className="shadow-xl rounded-md lg:hover:scale-105 lg:duration-150 lg:hover:shadow-gray-500"></Image>
                        ))}

                    </div>
                ))}

            </div>

            <div className="fixed bottom-0 sm:bottom-8 left-0 sm:left-8 z-50 mt-6 px-2 sm:px-0">
                <div className="relative">
                    <button
                        className={`hidden sm:inline-flex items-center w-full box-border ${isHovered || isDropdownOpen ? "border-transparent bg-gradient-to-tr from-cyan-400 to-teal-600 shadow-xs" : "border-gray-300"
                            } hover:shadow-lg transition-all duration-300 group focus:ring-4 focus:ring-brand-medium font-medium leading-5 rounded-lg text-sm `}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        type="button"
                    >
                        <div className="flex items-center justify-between w-full p-5">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-700 to-emerald-500 rounded-full flex items-center justify-center text-white font-medium">
                                    <CalendarIcon />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors text-sm">RESERVAR</h3>
                                </div>
                            </div>
                            <div
                                className={`text-gray-400 group-hover:text-black transition-colors transform ${isDropdownOpen ? "rotate-180 transition-transform duration-150" : ""
                                    } duration-300 ml-2`}
                            >
                                ▼
                            </div>
                        </div>
                    </button>
                    {isDropdownOpen && (
                        <div
                            className="absolute hidden sm:block bottom-full left-0 mb-2 z-10 bg-gray-100 border border-gray-200 rounded-lg shadow-lg w-72"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="p-3">
                                <div className="flex items-center space-x-3 text-sm">

                                    <ul className="p-2 text-sm text-body font-medium w-full" aria-labelledby="avatarButton">
                                        <li className='text-gray-800 hover:text-green-500'>
                                            <a href="https://wa.me/5523328695" target='_blank' className="flex align-middle w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md hover:bg-white hover:scale-105 transition-all duration-200">
                                                <WhatsappIcon /> WhatsApp
                                            </a>
                                        </li>
                                        <li className='text-gray-800 hover:text-blue-500'>
                                            <a href="tel:5513935091" target='_blank' className="flex align-middle w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md hover:bg-white hover:scale-105 transition-all duration-200">
                                                <CalloutIcon /> Llamar
                                            </a>
                                        </li>

                                        {IMAGES_ROUTES.PAQUETES_DATA.map((tab) => (
                                            <li key={tab.id} className={`text-gray-800 hover:text-yellow-500 ${activeTab === tab.id ? 'block' : 'hidden'}`}>
                                                <a href={tab.link} target='_blank' className="flex align-middle w-full p-2 hover:bg-neutral-tertiary-medium text-fg-danger rounded-md hover:bg-white hover:scale-105 transition-all duration-200">
                                                    <CashIcon /> Cotizar
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PackageComponent;