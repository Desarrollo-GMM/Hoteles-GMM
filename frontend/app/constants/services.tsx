'use client';

import React from 'react';
import {
    FaWheelchair, FaUniversalAccess, FaHandsHelping,
    FaUsers, FaGlassCheers,
    FaBell, FaClock, FaReceipt, FaUserLock,
    FaSeedling, FaUmbrellaBeach,
    FaBroom,
    FaDice,
    FaRecycle,
    FaGamepad,
    FaConciergeBell, FaCocktail, FaCoffee, FaCookieBite, FaHamburger,
    FaMoneyCheckAlt, FaSuitcaseRolling, FaArrowUp, FaLock, FaSnowflake, FaMedkit, FaWifi, FaSmokingBan, FaBan,
    FaParking, FaTaxi,
    FaDumbbell, FaSwimmingPool, FaSun, FaTshirt, FaHands, FaWater, FaSpa,
    FaUserShield, FaVideo, FaFireExtinguisher, FaFire,
    FaSprayCan, FaWind, FaShieldVirus,
    FaStore,
    FaVirusSlash,
    FaPrint, FaBriefcase, FaTv, FaPlane, FaHotTub, FaHandSparkles,
    FaUserNurse, FaGift, FaTimesCircle, FaCreditCard, FaUtensils,
    FaChair, FaUmbrella, FaChild,
    FaSoap, FaTree,
    FaMask, FaSync, FaHeadSideMask, FaShieldAlt, FaTableTennis,
} from 'react-icons/fa';

export const COMODIDADES = {
    TULUM: {
        accesibilidad: [
            {
                text: "Estacionamiento accesible",
                icon: <FaWheelchair />,
                color: "blue"
            },
            {
                text: "Acceso a la propiedad en silla de ruedas",
                icon: <FaUniversalAccess />,
                color: "blue"
            },
            {
                text: "Inodoros con pasamanos",
                icon: <FaHandsHelping />,
                color: "blue"
            }
        ],
        salasEventos: [
            {
                text: "Salas de reuniones",
                icon: <FaUsers />,
                color: "purple"
            },
            {
                text: "Salones de banquetes",
                icon: <FaGlassCheers />,
                color: "purple"
            }
        ],
        serviciosRecepcion: [
            {
                text: "Servicios de recepción y check-in",
                icon: <FaBell />,
                color: "yellow"
            },
            {
                text: "Recepción abierta las 24h",
                icon: <FaClock />,
                color: "yellow"
            },
            {
                text: "Facturas",
                icon: <FaReceipt />,
                color: "yellow"
            },
            {
                text: "Check-in y check-out privado",
                icon: <FaUserLock />,
                color: "yellow"
            }
        ],
        areasComunes: [
            {
                text: "Jardín",
                icon: <FaSeedling />,
                color: "green"
            },
            {
                text: "Terraza",
                icon: <FaUmbrellaBeach />,
                color: "green"
            }
        ],
        serviciosLimpieza: [
            {
                text: "Servicio diario de limpieza",
                icon: <FaBroom />,
                color: "gray"
            }
        ],
        entretenimiento: [
            {
                text: "Mesas de pool y billar",
                icon: <FaDice />,
                color: "pink"
            }
        ],
        sostenibilidad: [
            {
                text: "Los huéspedes pueden cancelar la limpieza diaria de habitaciones",
                icon: <FaRecycle />,
                color: "emerald"
            }
        ],
        familia: [
            {
                text: "Área de juegos en interior",
                icon: <FaGamepad />,
                color: "indigo"
            }
        ],
        alimentosBebidas: [
            {
                text: "Servicio a la habitación",
                icon: <FaConciergeBell />,
                color: "red"
            },
            {
                text: "Bar",
                icon: <FaCocktail />,
                color: "red"
            },
            {
                text: "Cafetería",
                icon: <FaCoffee />,
                color: "red"
            },
            {
                text: "Comida para niños",
                icon: <FaCookieBite />,
                color: "red"
            },
            {
                text: "Restaurante",
                icon: <FaHamburger />,
                color: "red"
            }
        ],
        serviciosGenerales: [
            {
                text: "ATM en el hotel",
                icon: <FaMoneyCheckAlt />,
                color: "cyan"
            },
            {
                text: "Almacenamiento de equipaje",
                icon: <FaSuitcaseRolling />,
                color: "cyan"
            },
            {
                text: "Conserje",
                icon: <FaConciergeBell />,
                color: "cyan"
            },
            {
                text: "Ascensor",
                icon: <FaArrowUp />,
                color: "cyan"
            },
            {
                text: "Caja fuerte disponible en la recepción",
                icon: <FaLock />,
                color: "cyan"
            },
            {
                text: "Aire acondicionado",
                icon: <FaSnowflake />,
                color: "blue"
            },
            {
                text: "Habitaciones hipoalergénicas",
                icon: <FaMedkit />,
                color: "blue"
            },
            {
                text: "Internet",
                icon: <FaWifi />,
                color: "blue"
            },
            {
                text: "Habitaciones libres de humo",
                icon: <FaSmokingBan />,
                color: "gray"
            },
            {
                text: "Propiedad libre de humo",
                icon: <FaBan />,
                color: "gray"
            }
        ],
        transporteEstacionamiento: [
            {
                text: "Estacionamiento para huéspedes",
                icon: <FaParking />,
                color: "orange"
            },
            {
                text: "Servicio de taxi",
                icon: <FaTaxi />,
                color: "orange"
            }
        ],
        piscinaSpaBienestar: [
            {
                text: "Gimnasio",
                icon: <FaDumbbell />,
                color: "teal"
            },
            {
                text: "Piscina",
                icon: <FaSwimmingPool />,
                color: "teal"
            },
            {
                text: "Sillas y tumbonas de playa",
                icon: <FaSun />,
                color: "teal"
            },
            {
                text: "Vestidores",
                icon: <FaTshirt />,
                color: "teal"
            },
            {
                text: "Masajes",
                icon: <FaHands />,
                color: "teal"
            },
            {
                text: "Toallas para piscina o playa",
                icon: <FaWater />,
                color: "teal"
            },
            {
                text: "Spa",
                icon: <FaSpa />,
                color: "pink"
            }
        ],
        prevencionSeguridad: [
            {
                text: "Seguridad las 24h",
                icon: <FaUserShield />,
                color: "rose"
            },
            {
                text: "CCTV en áreas comunes",
                icon: <FaVideo />,
                color: "rose"
            },
            {
                text: "Extintores de incendio",
                icon: <FaFireExtinguisher />,
                color: "rose"
            },
            {
                text: "Detectores de humo",
                icon: <FaFire />,
                color: "rose"
            }
        ],
        sanidadHigiene: [
            {
                text: "Las habitaciones se desinfectan a diario",
                icon: <FaSprayCan />,
                color: "lime"
            },
            {
                text: "Las zonas comunes se desinfectan a diario",
                icon: <FaHandsHelping />,
                color: "lime"
            },
            {
                text: "Lavado de sábanas, toallas y ropa según la normativa local",
                icon: <FaWind />,
                color: "lime"
            },
            {
                text: "Se siguen protocolos locales de seguridad",
                icon: <FaShieldVirus />,
                color: "lime"
            }
        ],
        compras: [
            {
                text: "Tiendas (en la propiedad)",
                icon: <FaStore />,
                color: "amber"
            }
        ],
        servicioAdicional: [
            {
                text: "Los químicos de limpieza usados son efectivos contra el COVID",
                icon: <FaVirusSlash />,
                color: "violet"
            }
        ]
    },
    TULUM_AEROPUERTO: {
        accesibilidad: [
            {
                text: "Estacionamiento accesible",
                icon: <FaWheelchair />,
                color: "blue"
            },
            {
                text: "Instalaciones para huéspedes con discapacidad",
                icon: <FaUniversalAccess />,
                color: "blue"
            },
            {
                text: "Acceso a la propiedad en silla de ruedas",
                icon: <FaWheelchair />,
                color: "blue"
            },
            {
                text: "Inodoros con pasamanos",
                icon: <FaHandsHelping />,
                color: "blue"
            }
        ],
        salasEventos: [
            {
                text: "Salas de reuniones",
                icon: <FaUsers />,
                color: "purple"
            }
        ],
        serviciosRecepcion: [
            {
                text: "Servicios de recepción y check-in",
                icon: <FaBell />,
                color: "yellow"
            },
            {
                text: "Recepción abierta las 24h",
                icon: <FaClock />,
                color: "yellow"
            },
            {
                text: "Facturas",
                icon: <FaReceipt />,
                color: "yellow"
            },
            {
                text: "Check-in y check-out privado",
                icon: <FaUserLock />,
                color: "yellow"
            }
        ],
        areasComunes: [
            {
                text: "Jardín",
                icon: <FaSeedling />,
                color: "green"
            },
            {
                text: "Terraza",
                icon: <FaUmbrellaBeach />,
                color: "green"
            }
        ],
        serviciosLimpieza: [
            {
                text: "Las habitaciones se desinfectan a diario",
                icon: <FaSprayCan />,
                color: "gray"
            },
            {
                text: "Las zonas comunes se desinfectan a diario",
                icon: <FaHandsHelping />,
                color: "gray"
            },
            {
                text: "Se puede cancelar la limpieza de habitaciones",
                icon: <FaTimesCircle />,
                color: "gray"
            }
        ],
        negocios: [
            {
                text: "Impresora",
                icon: <FaPrint />,
                color: "indigo"
            },
            {
                text: "Centro de negocios",
                icon: <FaBriefcase />,
                color: "indigo"
            }
        ],
        familia: [
            {
                text: "Canales de televisión infantiles",
                icon: <FaTv />,
                color: "pink"
            }
        ],
        alimentosBebidas: [
            {
                text: "Servicio a la habitación",
                icon: <FaConciergeBell />,
                color: "red"
            },
            {
                text: "Bar",
                icon: <FaCocktail />,
                color: "red"
            },
            {
                text: "Cafetería",
                icon: <FaCoffee />,
                color: "red"
            },
            {
                text: "Restaurante",
                icon: <FaHamburger />,
                color: "red"
            }
        ],
        serviciosGenerales: [
            {
                text: "Almacenamiento de equipaje",
                icon: <FaSuitcaseRolling />,
                color: "cyan"
            },
            {
                text: "Conserje",
                icon: <FaConciergeBell />,
                color: "cyan"
            },
            {
                text: "Ascensor",
                icon: <FaArrowUp />,
                color: "cyan"
            },
            {
                text: "Aire acondicionado",
                icon: <FaSnowflake />,
                color: "cyan"
            },
            {
                text: "Internet",
                icon: <FaWifi />,
                color: "cyan"
            },
            {
                text: "Habitaciones libres de humo",
                icon: <FaSmokingBan />,
                color: "cyan"
            },
            {
                text: "Servicio a la habitación (24 horas)",
                icon: <FaClock />,
                color: "cyan"
            },
            {
                text: "Caja fuerte",
                icon: <FaLock />,
                color: "cyan"
            },
            {
                text: "Se aceptan pagos sin efectivo",
                icon: <FaCreditCard />,
                color: "cyan"
            },
            {
                text: "La comida se puede recibir en la habitación",
                icon: <FaUtensils />,
                color: "cyan"
            }
        ],
        transporteEstacionamiento: [
            {
                text: "Transporte al aeropuerto",
                icon: <FaPlane />,
                color: "orange"
            },
            {
                text: "Estacionamiento para huéspedes",
                icon: <FaParking />,
                color: "orange"
            },
            {
                text: "Servicio de taxi",
                icon: <FaTaxi />,
                color: "orange"
            }
        ],
        piscinaSpaBienestar: [
            {
                text: "Gimnasio",
                icon: <FaDumbbell />,
                color: "teal"
            },
            {
                text: "Piscina",
                icon: <FaSwimmingPool />,
                color: "teal"
            },
            {
                text: "Jacuzzi",
                icon: <FaHotTub />,
                color: "teal"
            },
            {
                text: "Masajes",
                icon: <FaHands />,
                color: "teal"
            },
            {
                text: "Toallas para piscina o playa",
                icon: <FaWater />,
                color: "teal"
            },
            {
                text: "Spa",
                icon: <FaSpa />,
                color: "teal"
            }
        ],
        prevencionSeguridad: [
            {
                text: "Seguridad las 24h",
                icon: <FaUserShield />,
                color: "rose"
            },
            {
                text: "CCTV en áreas comunes",
                icon: <FaVideo />,
                color: "rose"
            },
            {
                text: "CCTV en exteriores de la propiedad",
                icon: <FaVideo />,
                color: "rose"
            },
            {
                text: "Extintores de incendio",
                icon: <FaFireExtinguisher />,
                color: "rose"
            },
            {
                text: "Detectores de humo",
                icon: <FaFire />,
                color: "rose"
            }
        ],
        sanidadHigiene: [
            {
                text: "Se provee desinfectante de manos",
                icon: <FaHandSparkles />,
                color: "lime"
            },
            {
                text: "Enfermería",
                icon: <FaUserNurse />,
                color: "lime"
            },
            {
                text: "Lavado de sábanas, toallas y ropa según la normativa local",
                icon: <FaWind />,
                color: "lime"
            },
            {
                text: "Se siguen protocolos locales de seguridad",
                icon: <FaShieldVirus />,
                color: "lime"
            }
        ],
        compras: [
            {
                text: "Tienda de regalos",
                icon: <FaGift />,
                color: "amber"
            },
            {
                text: "Tiendas (en la propiedad)",
                icon: <FaStore />,
                color: "amber"
            }
        ],
        servicioAdicional: [
            {
                text: "Los químicos de limpieza usados son efectivos contra el COVID",
                icon: <FaVirusSlash />,
                color: "violet"
            }
        ]
    },
    NUEVO_UXMAL: {
        accesibilidad: [
            {
                text: "Estacionamiento accesible",
                icon: <FaWheelchair />,
                color: "blue"
            },
            {
                text: "Instalaciones para huéspedes con discapacidad",
                icon: <FaUniversalAccess />,
                color: "blue"
            },
            {
                text: "Acceso a la propiedad en silla de ruedas",
                icon: <FaWheelchair />,
                color: "blue"
            }
        ],
        serviciosRecepcion: [
            {
                text: "Servicios de recepción y check-in",
                icon: <FaBell />,
                color: "yellow"
            },
            {
                text: "Recepción abierta las 24h",
                icon: <FaClock />,
                color: "yellow"
            },
            {
                text: "Facturas",
                icon: <FaReceipt />,
                color: "yellow"
            },
            {
                text: "Check-in y check-out privado",
                icon: <FaUserLock />,
                color: "yellow"
            }
        ],
        areasComunes: [
            {
                text: "Jardín",
                icon: <FaSeedling />,
                color: "green"
            },
            {
                text: "Muebles de jardín",
                icon: <FaChair />,
                color: "green"
            },
            {
                text: "Terraza",
                icon: <FaUmbrellaBeach />,
                color: "green"
            }
        ],
        entretenimiento: [
            {
                text: "Mesas de pool y billar",
                icon: <FaDice />,
                color: "pink"
            }
        ],
        sostenibilidad: [
            {
                text: "Los huéspedes pueden cancelar la limpieza diaria de habitaciones",
                icon: <FaRecycle />,
                color: "emerald"
            }
        ],
        familia: [
            {
                text: "Canales de televisión infantiles",
                icon: <FaTv />,
                color: "indigo"
            },
            {
                text: "Área de juegos",
                icon: <FaChild />,
                color: "indigo"
            }
        ],
        alimentosBebidas: [
            {
                text: "Servicio a la habitación",
                icon: <FaConciergeBell />,
                color: "red"
            },
            {
                text: "Bar",
                icon: <FaCocktail />,
                color: "red"
            },
            {
                text: "Comida para niños",
                icon: <FaCookieBite />,
                color: "red"
            },
            {
                text: "Restaurante",
                icon: <FaHamburger />,
                color: "red"
            }
        ],
        serviciosGenerales: [
            {
                text: "ATM en el hotel",
                icon: <FaMoneyCheckAlt />,
                color: "cyan"
            },
            {
                text: "Almacenamiento de equipaje",
                icon: <FaSuitcaseRolling />,
                color: "cyan"
            },
            {
                text: "Conserje",
                icon: <FaConciergeBell />,
                color: "cyan"
            },
            {
                text: "Ascensor",
                icon: <FaArrowUp />,
                color: "cyan"
            },
            {
                text: "Aire acondicionado",
                icon: <FaSnowflake />,
                color: "cyan"
            },
            {
                text: "Internet",
                icon: <FaWifi />,
                color: "cyan"
            },
            {
                text: "Habitaciones libres de humo",
                icon: <FaSmokingBan />,
                color: "gray"
            },
            {
                text: "Propiedad libre de humo",
                icon: <FaBan />,
                color: "gray"
            }
        ],
        transporteEstacionamiento: [
            {
                text: "Estacionamiento para huéspedes",
                icon: <FaParking />,
                color: "orange"
            },
            {
                text: "Servicio de taxi",
                icon: <FaTaxi />,
                color: "orange"
            }
        ],
        piscinaSpaBienestar: [
            {
                text: "Gimnasio",
                icon: <FaDumbbell />,
                color: "teal"
            },
            {
                text: "Piscina",
                icon: <FaSwimmingPool />,
                color: "teal"
            },
            {
                text: "Sillas y tumbonas de playa",
                icon: <FaSun />,
                color: "teal"
            },
            {
                text: "Parasoles de playa",
                icon: <FaUmbrella />,
                color: "teal"
            },
            {
                text: "Masajes",
                icon: <FaHands />,
                color: "teal"
            },
            {
                text: "Toallas para piscina o playa",
                icon: <FaWater />,
                color: "teal"
            },
            {
                text: "Spa",
                icon: <FaSpa />,
                color: "pink"
            }
        ],
        prevencionSeguridad: [
            {
                text: "Seguridad las 24h",
                icon: <FaUserShield />,
                color: "rose"
            },
            {
                text: "CCTV en áreas comunes",
                icon: <FaVideo />,
                color: "rose"
            },
            {
                text: "Extintores de incendio",
                icon: <FaFireExtinguisher />,
                color: "rose"
            },
            {
                text: "Detectores de humo",
                icon: <FaFire />,
                color: "rose"
            }
        ],
        sanidadHigiene: [
            {
                text: "Se provee desinfectante de manos",
                icon: <FaHandSparkles />,
                color: "lime"
            }
        ],
        compras: [
            {
                text: "Tiendas (en la propiedad)",
                icon: <FaStore />,
                color: "amber"
            }
        ]
    },
    PALENQUE: {
        accesibilidad: [
            {
                text: "Acceso a la propiedad en silla de ruedas",
                icon: <FaWheelchair />,
                color: "blue"
            },
            {
                text: "Inodoros con pasamanos",
                icon: <FaHandsHelping />,
                color: "blue"
            }
        ],
        salasEventos: [
            {
                text: "Salas de reuniones",
                icon: <FaUsers />,
                color: "purple"
            },
            {
                text: "Salones de banquetes",
                icon: <FaGlassCheers />,
                color: "purple"
            }
        ],
        serviciosRecepcion: [
            {
                text: "Servicios de recepción y check-in",
                icon: <FaBell />,
                color: "yellow"
            },
            {
                text: "Recepción abierta las 24h",
                icon: <FaClock />,
                color: "yellow"
            },
            {
                text: "Facturas",
                icon: <FaReceipt />,
                color: "yellow"
            },
            {
                text: "Check-in y check-out privado",
                icon: <FaUserLock />,
                color: "yellow"
            }
        ],
        areasComunes: [
            {
                text: "Jardín",
                icon: <FaTree />,
                color: "green"
            },
            {
                text: "Terraza",
                icon: <FaUmbrellaBeach />,
                color: "green"
            }
        ],
        serviciosLimpieza: [
            {
                text: "Servicio diario de limpieza",
                icon: <FaSoap />,
                color: "gray"
            }
        ],
        entretenimiento: [
            {
                text: "Mesas de pool y billar",
                icon: <FaDice />,
                color: "pink"
            }
        ],
        sostenibilidad: [
            {
                text: "Los huéspedes pueden cancelar la limpieza diaria de habitaciones",
                icon: <FaRecycle />,
                color: "emerald"
            }
        ],
        alimentosBebidas: [
            {
                text: "Servicio a la habitación",
                icon: <FaConciergeBell />,
                color: "red"
            },
            {
                text: "Bar",
                icon: <FaCocktail />,
                color: "red"
            },
            {
                text: "Restaurante",
                icon: <FaHamburger />,
                color: "red"
            }
        ],
        serviciosGenerales: [
            {
                text: "ATM en el hotel",
                icon: <FaMoneyCheckAlt />,
                color: "cyan"
            },
            {
                text: "Almacenamiento de equipaje",
                icon: <FaSuitcaseRolling />,
                color: "cyan"
            },
            {
                text: "Conserje",
                icon: <FaConciergeBell />,
                color: "cyan"
            },
            {
                text: "Ascensor",
                icon: <FaArrowUp />,
                color: "cyan"
            },
            {
                text: "Aire acondicionado",
                icon: <FaSnowflake />,
                color: "cyan"
            },
            {
                text: "Habitaciones hipoalergénicas",
                icon: <FaMedkit />,
                color: "cyan"
            },
            {
                text: "Internet",
                icon: <FaWifi />,
                color: "cyan"
            },
            {
                text: "Habitaciones libres de humo",
                icon: <FaSmokingBan />,
                color: "cyan"
            },
            {
                text: "Propiedad libre de humo",
                icon: <FaBan />,
                color: "cyan"
            }
        ],
        transporteEstacionamiento: [
            {
                text: "Estacionamiento para huéspedes",
                icon: <FaParking />,
                color: "orange"
            }
        ],
        piscinaSpaBienestar: [
            {
                text: "Gimnasio",
                icon: <FaDumbbell />,
                color: "teal"
            },
            {
                text: "Piscina",
                icon: <FaSwimmingPool />,
                color: "teal"
            },
            {
                text: "Sillas y tumbonas de playa",
                icon: <FaSun />,
                color: "teal"
            },
            {
                text: "Vestidores",
                icon: <FaTshirt />,
                color: "teal"
            },
            {
                text: "Masajes",
                icon: <FaHands />,
                color: "teal"
            },
            {
                text: "Toallas para piscina o playa",
                icon: <FaWater />,
                color: "teal"
            },
            {
                text: "Spa",
                icon: <FaSpa />,
                color: "pink"
            }
        ],
        prevencionSeguridad: [
            {
                text: "Seguridad las 24h",
                icon: <FaUserShield />,
                color: "rose"
            },
            {
                text: "CCTV en áreas comunes",
                icon: <FaVideo />,
                color: "rose"
            },
            {
                text: "Detectores de humo",
                icon: <FaFire />,
                color: "rose"
            }
        ],
        sanidadHigiene: [
            {
                text: "Las habitaciones se desinfectan a diario",
                icon: <FaSprayCan />,
                color: "lime"
            },
            {
                text: "Las zonas comunes se desinfectan a diario",
                icon: <FaHandsHelping />,
                color: "lime"
            },
            {
                text: "Lavado de sábanas, toallas y ropa según la normativa local",
                icon: <FaWind />,
                color: "lime"
            },
            {
                text: "Se siguen protocolos locales de seguridad",
                icon: <FaShieldVirus />,
                color: "lime"
            }
        ],
        compras: [
            {
                text: "Tiendas (en la propiedad)",
                icon: <FaStore />,
                color: "amber"
            }
        ],
        servicioAdicional: [
            {
                text: "Los químicos de limpieza usados son efectivos contra el COVID",
                icon: <FaVirusSlash />,
                color: "violet"
            }
        ]
    },
    CHICHEN_ITZA: {
        accesibilidad: [
            {
                text: "Estacionamiento accesible",
                icon: <FaWheelchair />,
                color: "blue"
            },
            {
                text: "Acceso a la propiedad en silla de ruedas",
                icon: <FaUniversalAccess />,
                color: "blue"
            },
            {
                text: "Inodoros con pasamanos",
                icon: <FaHandsHelping />,
                color: "blue"
            }
        ],
        serviciosRecepcion: [
            {
                text: "Servicios de recepción y check-in",
                icon: <FaBell />,
                color: "yellow"
            },
            {
                text: "Recepción abierta las 24h",
                icon: <FaClock />,
                color: "yellow"
            },
            {
                text: "Facturas",
                icon: <FaReceipt />,
                color: "yellow"
            },
            {
                text: "Check-in y check-out privado",
                icon: <FaUserLock />,
                color: "yellow"
            }
        ],
        areasComunes: [
            {
                text: "Sala de juegos",
                icon: <FaGamepad />,
                color: "green"
            },
            {
                text: "Jardín",
                icon: <FaSeedling />,
                color: "green"
            },
            {
                text: "Muebles de jardín",
                icon: <FaChair />,
                color: "green"
            },
            {
                text: "Terraza",
                icon: <FaUmbrellaBeach />,
                color: "green"
            }
        ],
        serviciosLimpieza: [
            {
                text: "Servicio diario de limpieza",
                icon: <FaBroom />,
                color: "gray"
            }
        ],
        sostenibilidad: [
            {
                text: "Los huéspedes pueden cancelar la limpieza diaria de habitaciones",
                icon: <FaRecycle />,
                color: "emerald"
            },
            {
                text: "Cambio de toallas bajo solicitud",
                icon: <FaSync />,
                color: "emerald"
            }
        ],
        familia: [
            {
                text: "Canales de televisión infantiles",
                icon: <FaTv />,
                color: "indigo"
            }
        ],
        alimentosBebidas: [
            {
                text: "Servicio a la habitación",
                icon: <FaConciergeBell />,
                color: "red"
            },
            {
                text: "Bar",
                icon: <FaCocktail />,
                color: "red"
            },
            {
                text: "Cafetería",
                icon: <FaCoffee />,
                color: "red"
            },
            {
                text: "Comida para niños",
                icon: <FaCookieBite />,
                color: "red"
            },
            {
                text: "Restaurante",
                icon: <FaHamburger />,
                color: "red"
            }
        ],
        serviciosGenerales: [
            {
                text: "ATM en el hotel",
                icon: <FaMoneyCheckAlt />,
                color: "cyan"
            },
            {
                text: "Almacenamiento de equipaje",
                icon: <FaSuitcaseRolling />,
                color: "cyan"
            },
            {
                text: "Conserje",
                icon: <FaConciergeBell />,
                color: "cyan"
            },
            {
                text: "Ascensor",
                icon: <FaArrowUp />,
                color: "cyan"
            },
            {
                text: "Aire acondicionado",
                icon: <FaSnowflake />,
                color: "cyan"
            },
            {
                text: "Internet",
                icon: <FaWifi />,
                color: "cyan"
            },
            {
                text: "Habitaciones libres de humo",
                icon: <FaSmokingBan />,
                color: "cyan"
            },
            {
                text: "Propiedad libre de humo",
                icon: <FaBan />,
                color: "cyan"
            }
        ],
        transporteEstacionamiento: [
            {
                text: "Estacionamiento para huéspedes",
                icon: <FaParking />,
                color: "orange"
            },
            {
                text: "Servicio de taxi",
                icon: <FaTaxi />,
                color: "orange"
            }
        ],
        piscinaSpaBienestar: [
            {
                text: "Gimnasio",
                icon: <FaDumbbell />,
                color: "teal"
            },
            {
                text: "Piscina",
                icon: <FaSwimmingPool />,
                color: "teal"
            },
            {
                text: "Sillas y tumbonas de playa",
                icon: <FaSun />,
                color: "teal"
            },
            {
                text: "Parasoles de playa",
                icon: <FaUmbrella />,
                color: "teal"
            },
            {
                text: "Masajes",
                icon: <FaHands />,
                color: "teal"
            },
            {
                text: "Toallas para piscina o playa",
                icon: <FaWater />,
                color: "teal"
            },
            {
                text: "Sauna",
                icon: <FaHotTub />,
                color: "teal"
            },
            {
                text: "Spa",
                icon: <FaSpa />,
                color: "teal"
            }
        ],
        prevencionSeguridad: [
            {
                text: "Seguridad las 24h",
                icon: <FaUserShield />,
                color: "rose"
            },
            {
                text: "CCTV en áreas comunes",
                icon: <FaVideo />,
                color: "rose"
            },
            {
                text: "Extintores de incendio",
                icon: <FaFireExtinguisher />,
                color: "rose"
            },
            {
                text: "Detectores de humo",
                icon: <FaFire />,
                color: "rose"
            }
        ],
        sanidadHigiene: [
            {
                text: "Se aceptan pagos sin efectivo",
                icon: <FaCreditCard />,
                color: "lime"
            },
            {
                text: "Cubrebocas y mascarillas para huéspedes",
                icon: <FaMask />,
                color: "lime"
            },
            {
                text: "Desinfección de habitaciones entre las estancias",
                icon: <FaSprayCan />,
                color: "lime"
            },
            {
                text: "Se provee desinfectante de manos",
                icon: <FaHandSparkles />,
                color: "lime"
            },
            {
                text: "Lavado de sábanas, toallas y ropa según la normativa local",
                icon: <FaWind />,
                color: "lime"
            }
        ],
        compras: [
            {
                text: "Tiendas (en la propiedad)",
                icon: <FaStore />,
                color: "amber"
            }
        ],
        servicioAdicional: [
            {
                text: "Los químicos de limpieza usados son efectivos contra el COVID",
                icon: <FaVirusSlash />,
                color: "violet"
            }
        ]
    },
    CALAKMUL: {
        accesibilidad: [
            {
                text: "Instalaciones para huéspedes con discapacidad",
                icon: <FaUniversalAccess />,
                color: "blue"
            },
            {
                text: "Acceso a la propiedad en silla de ruedas",
                icon: <FaWheelchair />,
                color: "blue"
            }
        ],
        serviciosRecepcion: [
            {
                text: "Servicios de recepción y check-in",
                icon: <FaBell />,
                color: "yellow"
            },
            {
                text: "Recepción abierta las 24h",
                icon: <FaClock />,
                color: "yellow"
            },
            {
                text: "Facturas",
                icon: <FaReceipt />,
                color: "yellow"
            },
            {
                text: "Check-in y check-out privado",
                icon: <FaUserLock />,
                color: "yellow"
            }
        ],
        areasComunes: [
            {
                text: "Jardín",
                icon: <FaSeedling />,
                color: "green"
            },
            {
                text: "Terraza",
                icon: <FaUmbrellaBeach />,
                color: "green"
            }
        ],
        entretenimiento: [
            {
                text: "Mesas de pool y billar",
                icon: <FaDice />,
                color: "pink"
            },
            {
                text: "Ping-pong o tenis de mesa",
                icon: <FaTableTennis />,
                color: "pink"
            }
        ],
        sostenibilidad: [
            {
                text: "Los huéspedes pueden cancelar la limpieza diaria de habitaciones",
                icon: <FaRecycle />,
                color: "emerald"
            },
            {
                text: "Cambio de toallas bajo solicitud",
                icon: <FaSync />,
                color: "emerald"
            }
        ],
        familia: [
            {
                text: "Área de juegos",
                icon: <FaChild />,
                color: "indigo"
            }
        ],
        alimentosBebidas: [
            {
                text: "Servicio a la habitación",
                icon: <FaConciergeBell />,
                color: "red"
            },
            {
                text: "Bar",
                icon: <FaCocktail />,
                color: "red"
            },
            {
                text: "Comida para niños",
                icon: <FaCookieBite />,
                color: "red"
            },
            {
                text: "Restaurante",
                icon: <FaHamburger />,
                color: "red"
            }
        ],
        serviciosGenerales: [
            {
                text: "ATM en el hotel",
                icon: <FaMoneyCheckAlt />,
                color: "cyan"
            },
            {
                text: "Almacenamiento de equipaje",
                icon: <FaSuitcaseRolling />,
                color: "cyan"
            },
            {
                text: "Ascensor",
                icon: <FaArrowUp />,
                color: "cyan"
            },
            {
                text: "Caja fuerte disponible en la recepción",
                icon: <FaLock />,
                color: "cyan"
            },
            {
                text: "Aire acondicionado",
                icon: <FaSnowflake />,
                color: "cyan"
            },
            {
                text: "Internet",
                icon: <FaWifi />,
                color: "cyan"
            },
            {
                text: "Habitaciones libres de humo",
                icon: <FaSmokingBan />,
                color: "cyan"
            },
            {
                text: "Propiedad libre de humo",
                icon: <FaBan />,
                color: "cyan"
            }
        ],
        transporteEstacionamiento: [
            {
                text: "Estacionamiento para huéspedes",
                icon: <FaParking />,
                color: "orange"
            },
            {
                text: "Servicio de taxi",
                icon: <FaTaxi />,
                color: "orange"
            }
        ],
        piscinaSpaBienestar: [
            {
                text: "Gimnasio",
                icon: <FaDumbbell />,
                color: "teal"
            },
            {
                text: "Piscina",
                icon: <FaSwimmingPool />,
                color: "teal"
            },
            {
                text: "Sillas y tumbonas de playa",
                icon: <FaSun />,
                color: "teal"
            },
            {
                text: "Parasoles de playa",
                icon: <FaUmbrella />,
                color: "teal"
            },
            {
                text: "Masajes",
                icon: <FaHands />,
                color: "teal"
            },
            {
                text: "Toallas para piscina o playa",
                icon: <FaWater />,
                color: "teal"
            },
            {
                text: "Spa",
                icon: <FaSpa />,
                color: "teal"
            }
        ],
        prevencionSeguridad: [
            {
                text: "Seguridad las 24h",
                icon: <FaUserShield />,
                color: "rose"
            },
            {
                text: "CCTV en áreas comunes",
                icon: <FaVideo />,
                color: "rose"
            },
            {
                text: "Extintores de incendio",
                icon: <FaFireExtinguisher />,
                color: "rose"
            },
            {
                text: "Detectores de humo",
                icon: <FaFire />,
                color: "rose"
            }
        ],
        sanidadHigiene: [
            {
                text: "Se aceptan pagos sin efectivo",
                icon: <FaCreditCard />,
                color: "lime"
            },
            {
                text: "Enfermería",
                icon: <FaUserNurse />,
                color: "lime"
            }
        ],
        compras: [
            {
                text: "Tiendas (en la propiedad)",
                icon: <FaStore />,
                color: "amber"
            }
        ]
    }, 
    EDZNA: {
        accesibilidad: [
            {
                text: "Instalaciones para huéspedes con discapacidad",
                icon: <FaUniversalAccess />,
                color: "blue"
            },
            {
                text: "Acceso a la propiedad en silla de ruedas",
                icon: <FaWheelchair />,
                color: "blue"
            }
        ],
        serviciosRecepcion: [
            {
                text: "Servicios de recepción y check-in",
                icon: <FaBell />,
                color: "yellow"
            },
            {
                text: "Recepción abierta las 24h",
                icon: <FaClock />,
                color: "yellow"
            },
            {
                text: "Facturas",
                icon: <FaReceipt />,
                color: "yellow"
            },
            {
                text: "Check-in y check-out privado",
                icon: <FaUserLock />,
                color: "yellow"
            }
        ],
        areasComunes: [
            {
                text: "Jardín",
                icon: <FaSeedling />,
                color: "green"
            },
            {
                text: "Muebles de jardín",
                icon: <FaChair />,
                color: "green"
            },
            {
                text: "Terraza",
                icon: <FaUmbrellaBeach />,
                color: "green"
            }
        ],
        serviciosLimpieza: [
            {
                text: "Servicio diario de limpieza",
                icon: <FaBroom />,
                color: "gray"
            }
        ],
        entretenimiento: [
            {
                text: "Mesas de pool y billar",
                icon: <FaDice />,
                color: "pink"
            },
            {
                text: "Ping-pong o tenis de mesa",
                icon: <FaGamepad />,
                color: "pink"
            }
        ],
        sostenibilidad: [
            {
                text: "Los huéspedes pueden cancelar la limpieza diaria de habitaciones",
                icon: <FaRecycle />,
                color: "emerald"
            },
            {
                text: "Cambio de toallas bajo solicitud",
                icon: <FaSync />,
                color: "emerald"
            }
        ],
        alimentosBebidas: [
            {
                text: "Servicio a la habitación",
                icon: <FaConciergeBell />,
                color: "red"
            },
            {
                text: "Bar",
                icon: <FaCocktail />,
                color: "red"
            },
            {
                text: "Comida para niños",
                icon: <FaCookieBite />,
                color: "red"
            },
            {
                text: "Restaurante",
                icon: <FaHamburger />,
                color: "red"
            }
        ],
        serviciosGenerales: [
            {
                text: "ATM en el hotel",
                icon: <FaMoneyCheckAlt />,
                color: "cyan"
            },
            {
                text: "Almacenamiento de equipaje",
                icon: <FaSuitcaseRolling />,
                color: "cyan"
            },
            {
                text: "Ascensor",
                icon: <FaArrowUp />,
                color: "cyan"
            },
            {
                text: "Aire acondicionado",
                icon: <FaSnowflake />,
                color: "cyan"
            },
            {
                text: "Internet",
                icon: <FaWifi />,
                color: "cyan"
            },
            {
                text: "Habitaciones libres de humo",
                icon: <FaSmokingBan />,
                color: "cyan"
            },
            {
                text: "Propiedad libre de humo",
                icon: <FaBan />,
                color: "cyan"
            }
        ],
        transporteEstacionamiento: [
            {
                text: "Estacionamiento para huéspedes",
                icon: <FaParking />,
                color: "orange"
            },
            {
                text: "Servicio de taxi",
                icon: <FaTaxi />,
                color: "orange"
            }
        ],
        piscinaSpaBienestar: [
            {
                text: "Gimnasio",
                icon: <FaDumbbell />,
                color: "teal"
            },
            {
                text: "Piscina",
                icon: <FaSwimmingPool />,
                color: "teal"
            },
            {
                text: "Sillas y tumbonas de playa",
                icon: <FaSun />,
                color: "teal"
            },
            {
                text: "Parasoles de playa",
                icon: <FaUmbrella />,
                color: "teal"
            },
            {
                text: "Masajes",
                icon: <FaHands />,
                color: "teal"
            },
            {
                text: "Toallas para piscina o playa",
                icon: <FaWater />,
                color: "teal"
            },
            {
                text: "Spa",
                icon: <FaSpa />,
                color: "teal"
            }
        ],
        prevencionSeguridad: [
            {
                text: "Seguridad las 24h",
                icon: <FaUserShield />,
                color: "rose"
            },
            {
                text: "CCTV en áreas comunes",
                icon: <FaVideo />,
                color: "rose"
            },
            {
                text: "Extintores de incendio",
                icon: <FaFireExtinguisher />,
                color: "rose"
            },
            {
                text: "Detectores de humo",
                icon: <FaFire />,
                color: "rose"
            }
        ],
        sanidadHigiene: [
            {
                text: "Se aceptan pagos sin efectivo",
                icon: <FaCreditCard />,
                color: "lime"
            },
            {
                text: "Lavado de sábanas, toallas y ropa según la normativa local",
                icon: <FaWind />,
                color: "lime"
            }
        ],
        compras: [
            {
                text: "Tienda de regalos",
                icon: <FaGift />,
                color: "amber"
            }
        ],
        servicioAdicional: [
            {
                text: "Los químicos de limpieza usados son efectivos contra el COVID",
                icon: <FaVirusSlash />,
                color: "violet"
            }
        ]
    }


}