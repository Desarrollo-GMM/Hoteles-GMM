'use client'

import { colors } from 'flowbite-react/plugin/tailwindcss/colors';
import { useState } from 'react';
import Image from 'next/image';

import CalendarIcon from '@/components/ui/icons/calendar';
import WhatsappIcon from '@/components/ui/icons/whatsapp';
import CalloutIcon from '@/components/ui/icons/callout';
import CashIcon from '@/components/ui/icons/cash';

interface ComponentProps { }

const PackageComponent: React.FC<ComponentProps> = () => {
    const [activeTab, setActiveTab] = useState<string>('tulum');

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseLeave = () => {
        if (!isDropdownOpen) setIsHovered(false);
    };

    const tabs = [
        {
            id: 'tulum', label: 'Tulum', active_color: 'bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600',
            images: [
                "/images/PAQUETES-TURISTICOS/TULUM/2 NOCHES 3 DÍAS/Paquete Turístico Tulum_.png",
                "/images/PAQUETES-TURISTICOS/TULUM/3 NOCHES 4 DÍAS/Copia de Paquete Turístico Tulum_.png"
            ],
            link: "https://forms.cloud.microsoft/r/siFvxDkdRs?origin=lprLink"
        },
        {
            id: 'chichen', label: 'Chichén Itzá', active_color: 'bg-gradient-to-r from-red-400 via-red-500 to-red-600',
            images: [
                "/images/PAQUETES-TURISTICOS/CHICHÉN ITZÁ/2 NOCHES 3 DIAS/CHICHEN HORIZONTAL 02.png",
                "/images/PAQUETES-TURISTICOS/CHICHÉN ITZÁ/4 NOCHES 5 DÍAS/PORTAL DE KUKULKAN.png"
            ],
            link: "https://forms.cloud.microsoft/r/mUkfDkLCNH?origin=lprLink"
        },
        {
            id: 'uxmal', label: 'Nuevo Uxmal', active_color: 'bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700',
            images: [
                "/images/PAQUETES-TURISTICOS/NUEVO UXMAL/3 DÍAS 2 NOCHES/paquete nuevo uxmal 3 dias 2 noches.png",
                "/images/PAQUETES-TURISTICOS/NUEVO UXMAL/4 DÍAS 3 NOCHES/paquete nuevo uxmal 5 dias 4 noches.png"
            ],
            link: "https://forms.cloud.microsoft/r/hcrmxe0W14?origin=lprLink"
        },
        {
            id: 'edza', label: 'Edzná', active_color: 'bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700',
            images: [
                "/images/PAQUETES-TURISTICOS/EDZNÁ/2 NOCHES 3 DIAS/EDZNA 2 N 3 D HOR.png",
                "/images/PAQUETES-TURISTICOS/EDZNÁ/4 NOCHES 5 DIAS/EDZNA 4 N 5 D HOR.png"
            ],
            link: "https://forms.cloud.microsoft/r/5geEFYW4Lp?origin=lprLink"
        },
        {
            id: 'palenque', label: 'Palenque', active_color: 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700',
            images: [
                "/images/PAQUETES-TURISTICOS/PALENQUE/2 NOCHES 3 DÍAS/Paquete turistico palenque 2 noches 3 dias.png",
                "/images/PAQUETES-TURISTICOS/PALENQUE/3 NOCHES 4 DÍAS/Paquete turisico palenque 3 noches 4 dias.png"
            ],
            link: "https://forms.cloud.microsoft/r/6SPw6Vtm5d?origin=lprLink"
        },
        {
            id: 'calakmul', label: 'Calakmul', active_color: 'bg-gradient-to-r from-green-400 via-green-500 to-green-600 ',
            images: [
                "/images/PAQUETES-TURISTICOS/CALAKMUL/5 DÍAS 6 NOCHES/propuesta calakmul 2 .png",
            ],
            link: "https://forms.cloud.microsoft/r/9LJF5VuWT3?origin=lprLink"
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

            <div className="mb-4 border-b border-gray-300">
                <ul className="flex flex-wrap justify-center text-sm gap-1 lg:gap-0 font-medium text-center"
                    role="tablist">
                    {tabs.map((tab) => (
                        <li key={tab.id} className="" role="presentation">
                            <button
                                className={`inline-block py-2 px-4 border-b-2  rounded-t-base text-white ${tab.active_color}  ${activeTab === tab.id
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

                                        {tabs.map((tab) => (
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