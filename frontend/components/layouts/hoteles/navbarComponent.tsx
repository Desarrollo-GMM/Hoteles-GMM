"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { ROUTES, EXTERNAL_LINKS } from "../../../app/constants/routes";
import { usePathname } from "next/navigation";
import DropdownButtonComponent from "../../ui/buttons/dropdownButtonComponent";

//import de Hooks personalizados
import { useScrollDetection } from "@/lib/hooks/useScrollDetection";

import { IoHome } from "react-icons/io5";

const NavbarComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isScrolled, scrollY } = useScrollDetection(20);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const getScrollProgress = useCallback(() => {
    return Math.min(scrollY / 150, 1);
  }, [scrollY]);

  const scrollProgress = getScrollProgress();

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-out ${isScrolled ? "lg:h-16 h-14" : "lg:h-24 h-16"}`}>
      <div className="px-4 sm:px-6 lg:px-40 h-full flex justify-center transition-all duration-500">
        <div className={`
          rounded-b-3xl h-full  transition-all duration-500 ease-out shadow-lg
          ${isScrolled
            ? 'bg-white backdrop-blur-md shadow-xl w-1/3 lg:w-full'
            : 'bg-white shadow-md lg:w-full w-1/2'
          }
        `}>
          <div className="flex justify-center w-full h-full relative">
            <button
              type="button"
              className="lg:hidden p-2 focus:outline-none z-60 absolute top-1/2 left-0 lg:left-4 transform -translate-y-1/2"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="flex-shrink-0 transition-transform duration-500 hover:scale-105">
                <a href="#" className="block">
                  <Image
                    className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-12' : 'h-20'
                      }`}
                    alt="Logo GMM"
                    src="/images/Copia-de-Hoteles-general-01.png"
                    width={180}
                    height={80}
                    priority
                  />
                </a>
              </div>
            </button>

            <div className="hidden lg:grid grid-cols-3 h-full">
              <div className="flex items-center justify-start gap-8 mx-5 h-full">
                <Link
                  href={ROUTES.HOME}
                  className={`relative transition-all duration-300 text-3xl font-medium group
                    ${isActive(ROUTES.INIT)
                      ? "text-teal-500"
                      : "text-gray-600 hover:text-teal-500"
                    }`}
                >
                  <IoHome></IoHome>
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full ${isActive(ROUTES.PROMOTIONS) ? 'w-full' : ''
                    }`}></span>
                </Link>
                <span className="mx-0 text-gray-300">|</span>
                <Link
                  href={ROUTES.INIT}
                  className={`relative transition-all duration-300 text-sm font-medium group
                    ${isActive(ROUTES.INIT)
                      ? "text-teal-500"
                      : "text-gray-600 hover:text-teal-500"
                    }`}
                >
                  Inicio
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full ${isActive(ROUTES.PROMOTIONS) ? 'w-full' : ''
                    }`}></span>
                </Link>
                <Link
                  href={ROUTES.MAP}
                  className={`relative text-sm font-medium transition-all duration-300 group
                    ${isActive(ROUTES.MAP)
                      ? "text-teal-500"
                      : "text-gray-600 hover:text-teal-500"
                    }`}
                >
                  Ubicación
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full ${isActive(ROUTES.HOME) ? 'w-full' : ''
                    }`}></span>
                </Link>

                <Link
                  href={ROUTES.SERVICES}
                  className={`relative transition-all duration-300 text-sm font-medium group
                    ${isActive(ROUTES.SERVICES)
                      ? "text-teal-500"
                      : "text-gray-600 hover:text-teal-500"
                    }`}
                >
                  Servicios
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full ${isActive(ROUTES.PROMOTIONS) ? 'w-full' : ''
                    }`}></span>
                </Link>

                <Link
                  href={ROUTES.GALLERY}
                  className={`relative transition-all duration-300 text-sm font-medium group
                    ${isActive(ROUTES.GALLERY)
                      ? "text-teal-500"
                      : "text-gray-600 hover:text-teal-500"
                    }`}
                >
                  Galeria
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full ${isActive(ROUTES.PROMOTIONS) ? 'w-full' : ''
                    }`}></span>
                </Link>
                

                <div className="transform transition-all duration-300 hover:scale-105">
                  <DropdownButtonComponent textColor="text-gray-600 hover:text-teal-500 transition-colors duration-300" />
                </div>
              </div>

              <div className="h-full flex items-center justify-center">
                <div className="flex-shrink-0 transition-transform duration-500 hover:scale-105">
                  <a href={ROUTES.HOME} className="block">
                    <Image
                      className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-12' : 'h-20'
                        }`}
                      alt="Logo GMM"
                      src="/images/Copia-de-Hoteles-general-01.png"
                      width={180}
                      height={80}
                      priority
                    />
                  </a>
                </div>
              </div>


              <div className="flex items-center justify-end gap-6 h-full mx-5">
                <div className="flex items-center gap-4">
                  {/* Redes sociales con animaciones */}
                  {[
                    {
                      href: "https://www.facebook.com/HotelesGrupoMundoMaya",
                      icon: FacebookIcon,
                      color: "hover:text-blue-600",
                      label: "Facebook"
                    },
                    {
                      href: "https://x.com/HGrupomundomaya",
                      icon: TwitterIcon,
                      color: "hover:text-teal-600",
                      label: "Twitter"
                    },
                    {
                      href: "https://www.instagram.com/hotelesgrupomundomaya/",
                      icon: InstagramIcon,
                      color: "hover:text-pink-500",
                      label: "Instagram"
                    }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transform transition-all duration-300 hover:scale-110 hover:-translate-y-0.5`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                <button className="group relative bg-teal-700 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 ease-out transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10">Contáctanos</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                  <span className="absolute inset-0 border-2 border-teal-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`
        lg:hidden fixed top-0 left-0 right-0 h-screen bg-gradient-to-b from-white via-white/95 to-white/90 backdrop-blur-lg
        transform transition-all duration-500 ease-in-out z-40
        ${isMenuOpen
          ? 'translate-y-0 opacity-100 visible'
          : '-translate-y-full opacity-0 invisible'
        }
      `}>
        <div className="px-4 py-6 space-y-6 max-h-screen overflow-y-auto pt-20">
          <div className="flex flex-col items-center space-y-8">
            <button
              className="absolute top-4 right-4 p-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <svg
                className="w-8 h-8 text-teal-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <Link
              href={ROUTES.INIT}
              className={`text-xl font-medium transition-all duration-300 transform hover:scale-105
                ${isActive(ROUTES.INIT)
                  ? "text-teal-500"
                  : "text-gray-700 hover:text-teal-500"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>

            <Link
              href={ROUTES.MAP}
              className={`text-xl font-medium transition-all duration-300 transform hover:scale-105
                ${isActive(ROUTES.MAP)
                  ? "text-teal-500"
                  : "text-gray-700 hover:text-teal-500"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Ubicación
            </Link>

            <Link
              href={ROUTES.SERVICES}
              className={`text-xl font-medium transition-all duration-300 transform hover:scale-105
                ${isActive(ROUTES.SERVICES)
                  ? "text-teal-500"
                  : "text-gray-700 hover:text-teal-500"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>

            <Link
              href={ROUTES.GALLERY}
              className={`text-xl font-medium transition-all duration-300 transform hover:scale-105
                ${isActive(ROUTES.GALLERY)
                  ? "text-teal-500"
                  : "text-gray-700 hover:text-teal-500"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Galería
            </Link>

            <div className="py-4">
              <DropdownButtonComponent />
            </div>

            <div className="flex items-center justify-center space-x-8 pt-6 border-t border-gray-300">
              {[
                {
                  href: "https://www.facebook.com/HotelesGrupoMundoMaya",
                  icon: FacebookIcon,
                  color: "hover:text-blue-600",
                  label: "Facebook"
                },
                {
                  href: "https://x.com/HGrupomundomaya",
                  icon: TwitterIcon,
                  color: "hover:text-teal-600",
                  label: "Twitter"
                },
                {
                  href: "https://www.instagram.com/hotelesgrupomundomaya/",
                  icon: InstagramIcon,
                  color: "hover:text-pink-500",
                  label: "Instagram"
                }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transform transition-all duration-300 hover:scale-125 p-2`}
                  aria-label={social.label}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </div>

            <button
              className="group relative bg-teal-700 hover:bg-teal-600 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 mt-8 w-full max-w-xs"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Contáctanos</span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Barra decorativa superior dinámica */}
      <div
        className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-500 
            ${isActive(ROUTES.PROMOTIONS)
            ? "lg:h-4 h-3"
            : "lg:h-3 h-2"
          }`}

      />
    </nav>
  );
};

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
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
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
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
);

export default NavbarComponent;