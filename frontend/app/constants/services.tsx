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
  FaVirusSlash
} from 'react-icons/fa';

export const COMODIDADES = {
    TULUM: {
        accesibilidad: [
            { 
                text: "Estacionamiento accesible", 
                icon: <FaWheelchair/>,
                color: "blue"
            },
            { 
                text: "Acceso a la propiedad en silla de ruedas", 
                icon: <FaUniversalAccess />,
                color: "blue"
            },
            { 
                text: "Inodoros con pasamanos", 
                icon: <FaHandsHelping/>,
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
    }
}