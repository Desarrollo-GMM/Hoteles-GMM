"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { ROUTES, EXTERNAL_LINKS } from "../../../app/constants/routes";
import { usePathname } from "next/navigation";
import DropdownButtonComponent from "../../ui/buttons/dropdownButtonComponent";

// Hook separado para mejor organización
const useScrollDetection = (threshold: number = 10) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);
    };

    // Añadir debounce para mejor rendimiento
    const debouncedHandleScroll = debounce(handleScroll, 10);

    window.addEventListener('scroll', debouncedHandleScroll);
    handleScroll(); // Estado inicial

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [threshold]);

  return { isScrolled, scrollY };
};

// Helper para debounce
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

const NavbarComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isScrolled, scrollY } = useScrollDetection(20);

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

  // Cálculo de opacidad dinámica basado en scroll
  const getOpacity = useCallback(() => {
    // Suavizamos la transición con una curva más natural
    const progress = Math.min(scrollY / 100, 1);
    // Usamos una curva ease-out para un efecto más natural
    return Math.pow(progress, 0.7);
  }, [scrollY]);

  const opacity = getOpacity();

  return (
    <nav 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'shadow-xl' 
          : ''
      }`}
      style={{
        // Transición suave del fondo
        background: isScrolled 
          ? `linear-gradient(
              to bottom,
              rgba(0, 0, 0, ${0.9 * opacity}) 0%,
              rgba(0, 0, 0, ${0.7 * opacity}) 50%,
              rgba(0, 0, 0, ${0.3 * opacity}) 100%
            )`
          : 'rgba(0, 0, 0, 1)',
        // Efecto de blur dinámico
        backdropFilter: isScrolled ? `blur(${Math.min(opacity * 10, 8)}px)` : 'none',
        // Altura con transición suave
        height: isScrolled ? '4rem' : '6rem',
      }}
    >
      <div className="px-4 sm:px-6 lg:px-40 h-full transition-all duration-500">
        <div className="flex items-center justify-between h-full">
          {/* Logo con animación de escala */}
          <div className="flex-shrink-0 transition-transform duration-500 hover:scale-105">
            <a href={ROUTES.HOME} className="block">
              <Image
                className={`w-auto object-contain transition-all duration-500 ${
                  isScrolled ? 'h-12' : 'h-16'
                }`}
                alt="Logo GMM"
                src="/images/GMM blanco.png"
                width={180}
                height={80}
                priority
              />
            </a>
          </div>

          {/* Menú móvil - Botón Hamburguesa */}
          <button
            type="button"
            className="lg:hidden text-white p-2 focus:outline-none z-60 transition-transform duration-300 hover:scale-110"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 -translate-y-1/2' : '-translate-y-2'
              }`}></span>
              <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1/2' : 'translate-y-2'
              }`}></span>
            </div>
          </button>

          {/* Menú desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href={ROUTES.HOME}
              className={`relative text-sm font-medium transition-all duration-300 hover:text-teal-400 group
                ${isActive(ROUTES.HOME) ? "text-teal-500" : "text-white"}
              `}
            >
              Inicio
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full ${
                isActive(ROUTES.HOME) ? 'w-full' : ''
              }`}></span>
            </Link>
            
            <a
              href={EXTERNAL_LINKS.ABOUT}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white hover:text-teal-400 transition-all duration-300 text-sm font-medium group"
            >
              ¿Quiénes Somos?
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <Link
              href={ROUTES.PROMOTIONS}
              className={`relative transition-all duration-300 text-sm font-medium group
                ${isActive(ROUTES.PROMOTIONS) ? "text-teal-500" : "text-white hover:text-teal-400"}
              `}
            >
              Promociones
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full ${
                isActive(ROUTES.PROMOTIONS) ? 'w-full' : ''
              }`}></span>
            </Link>
            
            <Link
              href={ROUTES.SUMMER_PACKAGES}
              className={`relative text-white hover:text-teal-400 transition-all duration-300 text-sm font-medium group
                ${isActive(ROUTES.SUMMER_PACKAGES) ? "text-teal-500" : ""}
              `}
            >
              Paquetes de verano
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full ${
                isActive(ROUTES.SUMMER_PACKAGES) ? 'w-full' : ''
              }`}></span>
            </Link>

            <DropdownButtonComponent textButton="text-white hover:text-teal-400 transition-colors duration-300" />
            
            {/* Redes sociales con animaciones */}
            <div className="flex items-center space-x-4 ml-4">
              {[
                { 
                  href: "https://www.facebook.com/HotelesGrupoMundoMaya", 
                  icon: FacebookIcon, 
                  color: "hover:text-blue-600",
                  label: "Facebook page"
                },
                { 
                  href: "https://x.com/HGrupomundomaya", 
                  icon: TwitterIcon, 
                  color: "hover:text-white",
                  label: "Twitter page"
                },
                { 
                  href: "https://www.instagram.com/hotelesgrupomundomaya/", 
                  icon: InstagramIcon, 
                  color: "hover:text-pink-500",
                  label: "Instagram page"
                }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-300 ${social.color} transform transition-all duration-300 hover:scale-110 hover:-translate-y-0.5`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            
            <button className="group relative bg-teal-700 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 ease-out transform hover:scale-105 overflow-hidden">
              <span className="relative z-10">Contactános</span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>

        {/* Menú móvil - Dropdown */}
        <div className={`
          lg:hidden fixed top-0 left-0 right-0 h-screen bg-gradient-to-b from-black via-black/95 to-black/90 backdrop-blur-lg
          transform transition-all duration-500 ease-in-out z-40
          ${isMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-full opacity-0 invisible'
          }
        `}>
          <div className="px-4 py-6 space-y-6 max-h-screen overflow-y-auto pt-20">
            <div className="flex flex-col items-center space-y-8">
              <Link
                href={ROUTES.HOME}
                className={`text-xl font-medium transition-all duration-300 transform hover:scale-105
                  ${isActive(ROUTES.HOME) 
                    ? "text-teal-500" 
                    : "text-white hover:text-teal-400"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              
              <a
                href={EXTERNAL_LINKS.ABOUT}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white hover:text-teal-400 transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                ¿Quiénes Somos?
              </a>
              
              <Link
                href={ROUTES.PROMOTIONS}
                className={`text-xl transition-all duration-300 transform hover:scale-105
                  ${isActive(ROUTES.PROMOTIONS) 
                    ? "text-teal-500" 
                    : "text-white hover:text-teal-400"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Promociones
              </Link>
              
              <Link
                href={ROUTES.SUMMER_PACKAGES}
                className={`text-xl text-white hover:text-teal-400 transition-all duration-300 transform hover:scale-105
                  ${isActive(ROUTES.SUMMER_PACKAGES)}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                Paquetes de verano
              </Link>

              <div className="py-4">
                <DropdownButtonComponent />
              </div>

              {/* Redes sociales móviles */}
              <div className="flex items-center justify-center space-x-8 pt-6 border-t border-gray-800">
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
                    color: "hover:text-white",
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
                    className={`text-slate-300 ${social.color} transform transition-all duration-300 hover:scale-125 p-2`}
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
                <span className="relative z-10">Contactános</span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Componentes de iconos reutilizables
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