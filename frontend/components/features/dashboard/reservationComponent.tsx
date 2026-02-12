// components/ReservationComponent.tsx
'use client'
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDetection } from "@/lib/hooks/useScrollDetection";
import WeatherComponent from "@/components/ui/weatherComponent";

interface ReservationComponentProps {
    option: 1 | 2 | 3 | 4;
    title?: string;
    description?: string;
    imageUrl?: string;
    extraStyles?: string;
    defaultLocation?: string;
}

const ReservationComponent: React.FC<ReservationComponentProps> = ({
    option = 1,
    title = "Hoteles Grupo Mundo Maya",
    description = "Aventúrate en un viaje inolvidable por el sureste mexicano.",
    imageUrl = "/images/686d5354c468605f89c569ae_calidad 5.jpg",
    extraStyles = "",
    defaultLocation = "Tulum"
}) => {
    switch (option) {
        case 1:
            return <Option1
                title={title}
                description={description}
                imageUrl={imageUrl}
                defaultLocation={defaultLocation}
            />;
        case 2:
            return <Option2
                title={title}
                description={description}
                imageUrl={imageUrl}
                extraStyles={extraStyles}
                defaultLocation={defaultLocation}
            />;
        case 3:
            return <Option3
                title={title}
                description={description}
                imageUrl={imageUrl}
                extraStyles={extraStyles}
                defaultLocation={defaultLocation}
            />;
        case 4:
            return <Option4
                title={title}
                description={description}
                imageUrl={imageUrl}
                extraStyles={extraStyles}
                defaultLocation={defaultLocation}
            />;
        default:
            return <Option1
                title={title}
                description={description}
                imageUrl={imageUrl}
                defaultLocation={defaultLocation}
            />;
    }
};

// Componente interno Option1
const Option1: React.FC<{
    title: string;
    description: string;
    imageUrl: string;
    defaultLocation: string;
}> = ({
    title,
    description,
    imageUrl,
    defaultLocation
}) => {
        return (
            <motion.div 
                className="relative min-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Image
                        className="object-cover"
                        alt="Imagen de Hoteles GMM"
                        src={imageUrl}
                        fill
                        sizes="100vw"
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>
                
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />

                {/* Widget de clima compacto en esquina superior derecha */}
                <motion.div 
                    className="absolute top-6 right-6 z-20"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <WeatherComponent city={defaultLocation} variant="compact" />
                </motion.div>

                <motion.div 
                    className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.p 
                        className="uppercase font-bold text-3xl md:text-5xl lg:text-6xl mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {title}
                    </motion.p>
                    <motion.p 
                        className="font-light text-base md:text-xl lg:text-2xl max-w-2xl mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        {description}
                    </motion.p>
                    <motion.div 
                        className="flex gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <motion.button 
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Reservar ahora
                        </motion.button>
                        <motion.button 
                            className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-lg transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Ver hoteles
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        );
    };

// Componente interno Option2
const Option2: React.FC<{
    title: string;
    description: string;
    imageUrl: string;
    extraStyles: string;
    defaultLocation: string;
}> = ({
    title,
    description,
    imageUrl,
    extraStyles,
    defaultLocation
}) => {
        const [adults, setAdults] = useState(2);
        const [children, setChildren] = useState(0);
        const [selectedHotel, setSelectedHotel] = useState(defaultLocation);

        const incrementAdults = () => setAdults(prev => prev + 1);
        const decrementAdults = () => setAdults(prev => Math.max(1, prev - 1));
        const incrementChildren = () => setChildren(prev => prev + 1);
        const decrementChildren = () => setChildren(prev => Math.max(0, prev - 1));

        const today = new Date().toISOString().split('T')[0];
        const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];

        const { isScrolled, scrollY } = useScrollDetection(20);

        return (
            <motion.div 
                className="relative lg:min-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div 
                    className="absolute inset-0 h-full sm:h-[60vh] md:h-[72vh] lg:h-[100vh]"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Image
                        src={imageUrl}
                        alt="Fondo Hoteles GMM"
                        fill
                        priority
                        className={`object-cover ${extraStyles}`}
                        sizes="100vw"
                        quality={75}
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>

                <motion.div 
                    className="relative z-10 lg:mt-0 pt-20 flex flex-col justify-center lg:min-h-screen px-4 py-12 text-white"
                    data-aos="fade-up"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto w-full">
                        <motion.div 
                            className="text-center mb-8 md:mb-12 lg:mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <motion.h1 
                                className="uppercase font-bold text-3xl md:text-5xl lg:text-6xl mb-4 tracking-tight"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                {title}
                            </motion.h1>
                            <motion.p 
                                className="font-light text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                {description}
                            </motion.p>
                        </motion.div>

                        <motion.div 
                            className="backdrop-blur-md bg-black/40 border border-white/20 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl max-w-6xl mx-auto"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                type: "spring",
                                damping: 15,
                                stiffness: 100,
                                delay: 0.5
                            }}
                            whileHover={{ 
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div 
                                className="w-full text-center mb-6 gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                            >
                                <h2 className="uppercase font-bold text-xl md:text-2xl lg:text-3xl text-center">
                                    ¿Qué destino descubrirás hoy?
                                </h2>
                            </motion.div>

                            <motion.div 
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-6 gap-4 md:gap-6 md:mx-5"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                            >
                                <motion.div 
                                    className="block text-sm font-medium mb-2"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <form className="max-w-sm mx-auto">
                                        <label htmlFor="hotels" className="block mb-2.5 text-sm font-medium text-white">Hoteles</label>
                                        <select
                                            id="hotels"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-800 bg-white"
                                            value={selectedHotel}
                                            onChange={(e) => setSelectedHotel(e.target.value)}
                                        >
                                            <option value="Selecciona un Hotel">Selecciona un Hotel</option>
                                            <option value="Tulum">Tulum</option>
                                            <option value="Tulum Aeropuerto">Tulum Aeropuerto</option>
                                            <option value="Chichen Itzá">Chichen Itzá</option>
                                            <option value="Calakmul">Calakmul</option>
                                            <option value="Edzná">Edzná</option>
                                            <option value="Nuevo Uxmal">Nuevo Uxmal</option>
                                            <option value="Palenque">Palenque</option>
                                        </select>
                                    </form>
                                </motion.div>
                                
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Check-in
                                    </label>
                                    <input
                                        type="date"
                                        defaultValue={today}
                                        min={today}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-800 bg-white"
                                    />
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Check-out
                                    </label>
                                    <input
                                        type="date"
                                        defaultValue={tomorrow}
                                        min={tomorrow}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-800 bg-white"
                                    />
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Adultos
                                    </label>
                                    <div className="flex items-center bg-white rounded-lg overflow-hidden border border-gray-300">
                                        <motion.button
                                            type="button"
                                            onClick={decrementAdults}
                                            className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                            aria-label="Disminuir adultos"
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
                                            </svg>
                                        </motion.button>
                                        <input
                                            type="number"
                                            value={adults}
                                            onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value) || 1))}
                                            min="1"
                                            className="w-full text-center py-3 text-gray-800 bg-transparent focus:outline-none"
                                        />
                                        <motion.button
                                            type="button"
                                            onClick={incrementAdults}
                                            className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                            aria-label="Aumentar adultos"
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                            </svg>
                                        </motion.button>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Niños
                                    </label>
                                    <div className="flex items-center bg-white rounded-lg overflow-hidden border border-gray-300">
                                        <motion.button
                                            type="button"
                                            onClick={decrementChildren}
                                            className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                            aria-label="Disminuir niños"
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
                                            </svg>
                                        </motion.button>
                                        <input
                                            type="number"
                                            value={children}
                                            onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value) || 0))}
                                            min="0"
                                            className="w-full text-center py-3 text-gray-800 bg-transparent focus:outline-none"
                                        />
                                        <motion.button
                                            type="button"
                                            onClick={incrementChildren}
                                            className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                            aria-label="Aumentar niños"
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                            </svg>
                                        </motion.button>
                                    </div>
                                </motion.div>
                                
                                <motion.div 
                                    className=""
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Reservar Ahora
                                    </label>
                                    <motion.button 
                                        className="p-3 bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-600 hover:to-teal-500 text-white font-semibold rounded-lg transition-all duration-300 h-[52px] w-full shadow-lg hover:shadow-xl"
                                        whileHover={{ 
                                            scale: 1.05,
                                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Reservar
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        );
    };

// Componente interno Option3
const Option3: React.FC<{
    title: string;
    description: string;
    imageUrl: string;
    extraStyles: string;
    defaultLocation: string;
}> = ({
    title,
    description,
    imageUrl,
    extraStyles,
    defaultLocation
}) => {
        const [selectedHotel, setSelectedHotel] = useState(defaultLocation);
        const { isScrolled, scrollY } = useScrollDetection(20);
        
        return (
            <motion.div 
                className="relative min-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div 
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Image
                        className={`object-cover ${extraStyles}`}
                        alt="Imagen de Hoteles GMM"
                        src={imageUrl}
                        width={5000}
                        height={1000}
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>
                
                <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent ${extraStyles}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                ></motion.div>

                <motion.div 
                    className={`${isScrolled ? "fixed top-0 right-4 z-50 translate-y-4 transition-all duration-700" : "hidden"}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-32">
                        <WeatherComponent city={selectedHotel} variant="compact" />
                    </div>
                </motion.div>

                <motion.div 
                    className={`relative z-10 flex flex-col md:flex-row min-h-screen items-center my-auto ${extraStyles}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <motion.div 
                        className="flex-1 flex flex-col justify-center text-white pt-16 pb-0 max-h-40 lg:h-full px-6 md:p-12 lg:p-16"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <motion.p 
                            className="uppercase font-bold text-3xl md:text-4xl lg:text-6xl mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            {title}
                        </motion.p>
                        <motion.p 
                            className="font-light text-base md:text-xl lg:text-2xl max-w-xl lg:mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        >
                            {description}
                        </motion.p>

                        <motion.div 
                            className="max-w-md hidden md:block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                        >
                            <WeatherComponent
                                city={defaultLocation}
                                variant="detailed"
                                showCitySelector={true}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="flex-1 flex items-center justify-center p-2 md:p-12"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <motion.div 
                            className="bg-black/40 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-md"
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                                type: "spring",
                                damping: 15,
                                stiffness: 100,
                                delay: 0.8
                            }}
                            whileHover={{ 
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.h3 
                                className="text-2xl font-bold text-white mb-6 text-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 1 }}
                            >
                                Reserva tu estadía
                            </motion.h3>
                            
                            <motion.div 
                                className="space-y-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.1 }}
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <label className="block text-sm font-medium text-white mb-1">Check-in</label>
                                        <input
                                            type="date"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                        />
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <label className="block text-sm font-medium text-white mb-1">Check-out</label>
                                        <input
                                            type="date"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                        />
                                    </motion.div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <label className="block text-sm font-medium text-white mb-1">Adultos</label>
                                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4+</option>
                                        </select>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <label className="block text-sm font-medium text-white mb-1">Niños</label>
                                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500">
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3+</option>
                                        </select>
                                    </motion.div>
                                </div>
                                
                                <motion.div 
                                    className="block text-sm font-medium mb-2"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <form className="max-w-sm mx-auto">
                                        <label htmlFor="hotels" className="block mb-2.5 text-sm font-medium text-white">Hoteles</label>
                                        <select
                                            id="hotels"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-800 bg-white"
                                            value={selectedHotel}
                                            onChange={(e) => setSelectedHotel(e.target.value)}
                                        >
                                            <option value="Selecciona un Hotel">Selecciona un Hotel</option>
                                            <option value="Tulum">Hotel Tulum</option>
                                            <option value="Tulum Aeropuerto">Hotel Tulum Aeropuerto</option>
                                            <option value="Chichen Itzá">Hotel Chichen Itzá</option>
                                            <option value="Calakmul">Hotel Calakmul</option>
                                            <option value="Edzná">Hotel Edzná</option>
                                            <option value="Nuevo Uxmal">Hotel Nuevo Uxmal</option>
                                            <option value="Palenque">Hotel Palenque</option>
                                        </select>
                                    </form>
                                </motion.div>
                                
                                <motion.button
                                    type="button"
                                    className="w-full p-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Buscar disponibilidad
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        );
    };

const Option4: React.FC<{
    title: string;
    description: string;
    imageUrl: string;
    extraStyles: string;
    defaultLocation: string;
}> = ({
    title,
    description,
    extraStyles,
    defaultLocation
}) => {
        const [adults, setAdults] = useState(2);
        const [children, setChildren] = useState(0);
        const [selectedHotel, setSelectedHotel] = useState(defaultLocation);
        const [videoEnded, setVideoEnded] = useState(false);
        const [showContent, setShowContent] = useState(false);
        const videoRef = useRef<HTMLVideoElement>(null);
        const { isScrolled, scrollY } = useScrollDetection(20);

        const incrementAdults = () => setAdults(prev => prev + 1);
        const decrementAdults = () => setAdults(prev => Math.max(1, prev - 1));
        const incrementChildren = () => setChildren(prev => prev + 1);
        const decrementChildren = () => setChildren(prev => Math.max(0, prev - 1));

        const today = new Date().toISOString().split('T')[0];
        const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];

        const handleVideoEnd = () => {
            setVideoEnded(true);
            setTimeout(() => {
                setShowContent(true);
            }, 300);
        };

        useEffect(() => {
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            }
        }, []);

        return (
            <motion.div 
                className="relative lg:min-h-screen overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Video de fondo */}
                <motion.div 
                    className="absolute inset-0 h-full sm:h-[60vh] md:h-[72vh] lg:h-[100vh]"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                        className={`w-full h-full object-cover ${extraStyles} transition-opacity duration-1000 ${videoEnded ? 'opacity-50' : 'opacity-100'}`}
                        style={{ objectFit: 'cover' }}
                    >
                        <source src="/videos/Hoteles.mp4" type="video/mp4" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-teal-800"></div>
                    </video>

                    <motion.div 
                        className={`absolute inset-0 transition-all duration-1000 ${videoEnded ? 'bg-black/20' : 'bg-black/10'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    ></motion.div>
                </motion.div>

                {/* Contenido principal */}
                <div className="relative z-10 lg:mt-0 pt-20 flex flex-col justify-center lg:min-h-screen px-4 py-12 text-white" data-aos="fade-up">
                    <div className="max-w-7xl mx-auto w-full">
                        {/* Título y descripción */}
                        <AnimatePresence>
                            {showContent && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        type: "spring",
                                        damping: 15,
                                        stiffness: 100,
                                        duration: 0.8, 
                                        delay: 0.2 
                                    }}
                                    className="text-center mb-8 md:mb-12 lg:mb-16"
                                >
                                    <motion.h1 
                                        className="uppercase font-bold text-3xl md:text-5xl lg:text-6xl mb-4 tracking-tight"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        {title}
                                    </motion.h1>
                                    <motion.p 
                                        className="font-light text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        {description}
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Contenedor del formulario */}
                        <AnimatePresence>
                            {showContent && (
                                <motion.div
                                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 50, scale: 0.95 }}
                                    transition={{
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 100,
                                        duration: 0.8
                                    }}
                                    className="backdrop-blur-sm bg-black/20 border border-white/20 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl max-w-6xl mx-auto"
                                    whileHover={{ 
                                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ 
                                            type: "spring",
                                            damping: 15,
                                            stiffness: 100,
                                            delay: 0.3, 
                                            duration: 0.5 
                                        }}
                                        className="w-full text-center mb-6 gap-4"
                                    >
                                        <h2 className="uppercase font-bold text-xl md:text-2xl lg:text-3xl text-center">
                                            ¿Qué destino descubrirás hoy?
                                        </h2>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ 
                                            type: "spring",
                                            damping: 15,
                                            stiffness: 100,
                                            delay: 0.5, 
                                            duration: 0.5 
                                        }}
                                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-6 gap-4 md:gap-6 md:mx-5"
                                    >
                                        <motion.div 
                                            className="block text-sm font-medium mb-2"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <form className="max-w-sm mx-auto">
                                                <label htmlFor="hotels" className="block mb-2.5 text-sm font-medium text-white">Hoteles</label>
                                                <select
                                                    id="hotels"
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-800 bg-white"
                                                    value={selectedHotel}
                                                    onChange={(e) => setSelectedHotel(e.target.value)}
                                                >
                                                    <option value="Selecciona un Hotel">Selecciona un Hotel</option>
                                                    <option value="Tulum">Tulum</option>
                                                    <option value="Tulum Aeropuerto">Tulum Aeropuerto</option>
                                                    <option value="Chichen Itzá">Chichen Itzá</option>
                                                    <option value="Calakmul">Calakmul</option>
                                                    <option value="Edzná">Edzná</option>
                                                    <option value="Nuevo Uxmal">Nuevo Uxmal</option>
                                                    <option value="Palenque">Palenque</option>
                                                </select>
                                            </form>
                                        </motion.div>
                                        
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <label className="block text-sm font-medium text-white mb-2">
                                                Check-in
                                            </label>
                                            <input
                                                type="date"
                                                defaultValue={today}
                                                min={today}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-800 bg-white"
                                            />
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <label className="block text-sm font-medium text-white mb-2">
                                                Check-out
                                            </label>
                                            <input
                                                type="date"
                                                defaultValue={tomorrow}
                                                min={tomorrow}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-800 bg-white"
                                            />
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <label className="block text-sm font-medium text-white mb-2">
                                                Adultos
                                            </label>
                                            <div className="flex items-center bg-white rounded-lg overflow-hidden border border-gray-300">
                                                <motion.button
                                                    type="button"
                                                    onClick={decrementAdults}
                                                    className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                                    aria-label="Disminuir adultos"
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
                                                    </svg>
                                                </motion.button>
                                                <input
                                                    type="number"
                                                    value={adults}
                                                    onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value) || 1))}
                                                    min="1"
                                                    className="w-full text-center py-3 text-gray-800 bg-transparent focus:outline-none"
                                                />
                                                <motion.button
                                                    type="button"
                                                    onClick={incrementAdults}
                                                    className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                                    aria-label="Aumentar adultos"
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                                    </svg>
                                                </motion.button>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <label className="block text-sm font-medium text-white mb-2">
                                                Niños
                                            </label>
                                            <div className="flex items-center bg-white rounded-lg overflow-hidden border border-gray-300">
                                                <motion.button
                                                    type="button"
                                                    onClick={decrementChildren}
                                                    className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                                    aria-label="Disminuir niños"
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
                                                    </svg>
                                                </motion.button>
                                                <input
                                                    type="number"
                                                    value={children}
                                                    onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value) || 0))}
                                                    min="0"
                                                    className="w-full text-center py-3 text-gray-800 bg-transparent focus:outline-none"
                                                />
                                                <motion.button
                                                    type="button"
                                                    onClick={incrementChildren}
                                                    className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                                    aria-label="Aumentar niños"
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                                    </svg>
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                        
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ 
                                                type: "spring",
                                                damping: 15,
                                                stiffness: 100,
                                                delay: 0.7, 
                                                duration: 0.5 
                                            }}
                                            className=""
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <label className="block text-sm font-medium text-white mb-2">
                                                Reservar Ahora
                                            </label>
                                            <motion.button
                                                whileHover={{ 
                                                    scale: 1.05,
                                                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-full p-3 bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-600 hover:to-teal-500 text-white font-semibold rounded-lg transition-all duration-300 h-[52px] shadow-lg hover:shadow-xl"
                                            >
                                                Reservar
                                            </motion.button>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Indicador de carga */}
                        <AnimatePresence>
                            {!videoEnded && (
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center mt-8"
                                >
                                    <div className="inline-flex items-center justify-center space-x-2">
                                        <motion.div 
                                            className="w-2 h-2 bg-white rounded-full"
                                            animate={{ scale: [1, 1.5, 1] }}
                                            transition={{ repeat: Infinity, duration: 0.6 }}
                                        ></motion.div>
                                        <motion.div 
                                            className="w-2 h-2 bg-white rounded-full"
                                            animate={{ scale: [1, 1.5, 1] }}
                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                                        ></motion.div>
                                        <motion.div 
                                            className="w-2 h-2 bg-white rounded-full"
                                            animate={{ scale: [1, 1.5, 1] }}
                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                                        ></motion.div>
                                    </div>
                                    <p className="text-white/70 text-sm mt-2">Reproduciendo video...</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        );
    };

export default ReservationComponent;