'use client'

import { useState } from "react"

import WhatsappIcon from "../icons/whatsapp"
import CalloutIcon from "../icons/callout"
import { IoCall } from "react-icons/io5";



interface ComponentProps {

}

const DropButtonContactComponent: React.FC<ComponentProps> = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseLeave = () => {
        if (!isDropdownOpen) setIsHovered(false);
    };

    return (
        <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
            {/* Botón flotante para móvil */}
            <button
                className="sm:hidden flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-600 shadow-lg hover:shadow-xl text-white focus:outline-none focus:ring-4 focus:ring-cyan-300"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                type="button"
            >
                <IoCall className="w-10 h-10" />
            </button>

            {/* Contenedor para escritorio */}
            <div className="hidden sm:block relative">
                <button
                    className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${isHovered || isDropdownOpen 
                        ? "bg-gradient-to-tr from-cyan-500 to-teal-600" 
                        : "bg-gradient-to-tr from-cyan-400 to-teal-500"
                        } text-white focus:outline-none focus:ring-4 focus:ring-cyan-300`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    type="button"
                >
                    <IoCall className="w-6 h-6" />
                </button>

                {isDropdownOpen && (
                    <div
                        className="absolute bottom-full right-0 mb-2 z-10 bg-white border border-gray-200 rounded-lg shadow-xl w-56"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="p-4">
                            <div className="text-center mb-3">
                                <h3 className="font-bold text-gray-800 text-base">Contactanos</h3>
                                <p className="text-xs text-gray-600 mt-1">Te ayudamos en lo que necesites</p>
                            </div>
                            
                            <ul className="space-y-2">
                                <li>
                                    <a 
                                        href="https://wa.me/5523328695" 
                                        target='_blank' 
                                        className="flex items-center w-full p-3 bg-green-50 hover:bg-green-100 text-gray-800 hover:text-green-700 rounded-md transition-all duration-200 group"
                                    >
                                        <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full mr-3">
                                            <WhatsappIcon className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-semibold text-sm">WhatsApp</p>
                                            <p className="text-xs text-gray-600 group-hover:text-green-600">+52 552 332 8695</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="tel:5513935091" 
                                        target='_blank' 
                                        className="flex items-center w-full p-3 bg-blue-50 hover:bg-blue-100 text-gray-800 hover:text-blue-700 rounded-md transition-all duration-200 group"
                                    >
                                        <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full mr-3">
                                            <CalloutIcon className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-semibold text-sm">Llamar ahora</p>
                                            <p className="text-xs text-gray-600 group-hover:text-blue-600">+52 551 393 5091</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>

            {/* Dropdown para móvil */}
            {isDropdownOpen && (
                <div className="sm:hidden fixed bottom-20 right-4 z-10 bg-white border border-gray-200 rounded-lg shadow-xl w-56">
                    <div className="p-4">
                        <div className="text-center mb-3">
                            <h3 className="font-bold text-gray-800 text-base">Contactanos</h3>
                            <p className="text-xs text-gray-600 mt-1">Te ayudamos en lo que necesites</p>
                        </div>
                        
                        <ul className="space-y-2">
                            <li>
                                <a 
                                    href="https://wa.me/5523328695" 
                                    target='_blank' 
                                    className="flex items-center w-full p-3 bg-green-50 hover:bg-green-100 text-gray-800 hover:text-green-700 rounded-md transition-all duration-200 group"
                                >
                                    <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full mr-3">
                                        <WhatsappIcon className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-sm">WhatsApp</p>
                                        <p className="text-xs text-gray-600 group-hover:text-green-600">+52 552 332 8695</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="tel:5513935091" 
                                    target='_blank' 
                                    className="flex items-center w-full p-3 bg-blue-50 hover:bg-blue-100 text-gray-800 hover:text-blue-700 rounded-md transition-all duration-200 group"
                                >
                                    <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full mr-3">
                                        <CalloutIcon className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-sm">Llamar ahora</p>
                                        <p className="text-xs text-gray-600 group-hover:text-blue-600">+52 551 393 5091</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropButtonContactComponent;