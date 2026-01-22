"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ROUTES, EXTERNAL_LINKS } from "../../../app/constants/routes";
import { usePathname } from "next/navigation";
import DropdownButtonComponent from "../../ui/buttons/dropdownButtonComponent";

const NavbarComponent: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    // Cerrar el menú móvil cuando cambia la ruta
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevenir scroll cuando el menú móvil está abierto
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Cerrar menú al presionar Escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <nav className="fixed top-0 right-0 left-0 z-50 bg-transparent h-16 lg:h-24">
            <div className="px-4 sm:px-6 lg:px-40 h-16 lg:h-full">
                <div className=" bg-white rounded-b-3xl  shadow-md h-full w-full">
                    <div className=" w-full h-full">
                        {/* Menú móvil - Botón Hamburguesa - AHORA SE MUESTRA HASTA md */}
                        <button
                            type="button"
                            className="lg:hidden text-white p-2 focus:outline-none z-60" // Cambiado de xl:hidden a md:hidden
                            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>


                        {/* Menú desktop*/}
                        <div className="hidden lg:grid grid-cols-3 h-full space-x-5">
                            <div className="flex align-middle justify-center gap-5 mx-5 h-full">
                                <Link
                                    href={ROUTES.HOME}
                                    className={`text-sm my-auto font-medium transition-colors duration-300
                                            ${isActive(ROUTES.HOME)
                                            ? "text-teal-500"
                                            : "text-gray-600 hover:text-teal-500"
                                        }`}
                                >
                                    Galeria
                                </Link>
                                <a
                                    href={EXTERNAL_LINKS.ABOUT}
                                    target="_blank"
                                    className="text-gray-600 my-auto hover:text-teal-500 transition-colors duration-300 text-sm font-medium "
                                >
                                    Servicios
                                </a>
                                <Link
                                    href={ROUTES.PROMOTIONS}
                                    className={`transition-colors my-auto duration-300 text-sm font-medium 
                                            ${isActive(ROUTES.PROMOTIONS)
                                            ? "text-teal-500"
                                            : "text-gray-600 hover:text-teal-500 "
                                        }`}
                                >
                                    Contactos
                                </Link>
                                <DropdownButtonComponent textColor="text-white"  />
                            </div>
                            <div className="h-full">
                                {/* Logo */}
                                <div className="flex-shrink-0 flex justify-center h-full my-auto">
                                    <a href={ROUTES.HOME} className="block my-auto">
                                        <Image
                                            className="lg:w-auto w-32 h-20 object-contain"
                                            alt="Logo GMM"
                                            src="/images/Copia-de-Hoteles-general-01.png"
                                            width={180}
                                            height={80}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="flex align-middle justify-center gap-7 h-full">
                                <div className="flex align-middle justify-center gap-2 space-x-4">
                                    <a
                                        href="https://www.facebook.com/HotelesGrupoMundoMaya"
                                        target="_blank"
                                        className="text-body my-auto hover:text-heading transform hover:scale-110 transition duration-300"
                                    >
                                        <svg
                                            className="w-6 h-6 text-slate-300 hover:text-blue-600"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="sr-only">Facebook page</span>
                                    </a>
                                    <a
                                        href="https://x.com/HGrupomundomaya"
                                        target="_blank"
                                        className="text-body my-auto hover:text-heading transform hover:scale-110 transition duration-300"
                                    >
                                        <svg
                                            className="w-6 h-6 text-slate-300 hover:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                                        </svg>
                                        <span className="sr-only">Twitter page</span>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/hotelesgrupomundomaya/"
                                        target="_blank"
                                        className="text-body my-auto hover:text-heading transform hover:scale-110 transition duration-300"
                                    >
                                        <svg
                                            className="w-7 h-7 text-slate-300 hover:text-pink-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="sr-only">Instagram page</span>
                                    </a>
                                </div>
                                <button className="bg-teal-700 my-auto hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                                    Contactános
                                </button>
                            </div>

                        </div>
                        <div className="fixed top-0 left-0 w-full h-4 bg-white z-50"></div>

                    </div>
                </div>


                {/* Menú móvil - Dropdown*/}
                <div className={`
                    lg:hidden fixed top-16 left-0 right-0 backdrop-blur-md bg-black/60 transform transition-all duration-300 ease-in-out z-40
                    ${isMenuOpen
                        ? 'translate-y-0 opacity-100 visible'
                        : '-translate-y-4 opacity-0 invisible'
                    }
                `}>
                    <div className="px-4 py-6 space-y-6 border-t border-gray-800 max-h-[calc(100vh-64px)] overflow-y-auto">
                        <Link
                            href={ROUTES.HOME}
                            className={`block text-base font-medium transition-colors duration-300 
                            ${isActive(ROUTES.HOME)
                                    ? "text-teal-500"
                                    : "text-white hover:text-teal-500"
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Inicio
                        </Link>
                        <a
                            href={EXTERNAL_LINKS.ABOUT}
                            target="_blank"
                            className="block text-white hover:text-teal-500 transition-colors duration-300 text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            ¿Quiénes Somos?
                        </a>
                        <Link
                            href={ROUTES.PROMOTIONS}
                            className={`block transition-colors duration-300 text-base font-medium 
                            ${isActive(ROUTES.PROMOTIONS)
                                    ? "text-teal-500"
                                    : "text-white hover:text-teal-500"
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Promociones
                        </Link>
                        <Link
                            href={ROUTES.SUMMER_PACKAGES}
                            className={`block text-white hover:text-teal-500 transition-colors duration-300 text-base font-medium 
                            ${isActive(ROUTES.SUMMER_PACKAGES)}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Paquetes de verano
                        </Link>

                        <div className="py-2">
                            <DropdownButtonComponent />
                        </div>

                        <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-800">
                            <a
                                href="https://www.facebook.com/HotelesGrupoMundoMaya"
                                target="_blank"
                                className="text-body hover:text-heading transform hover:scale-110 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg
                                    className="w-7 h-7 text-slate-300 hover:text-blue-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a
                                href="https://x.com/HGrupomundomaya"
                                target="_blank"
                                className="text-body hover:text-heading transform hover:scale-110 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg
                                    className="w-7 h-7 text-slate-300 hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a
                                href="https://www.instagram.com/hotelesgrupomundomaya/"
                                target="_blank"
                                className="text-body hover:text-heading transform hover:scale-110 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg
                                    className="w-8 h-8 text-slate-300 hover:text-pink-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Instagram page</span>
                            </a>
                        </div>

                        <button
                            className="w-full bg-teal-700 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 mt-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contactános
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;