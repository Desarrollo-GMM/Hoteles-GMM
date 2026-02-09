export const ROUTES = {
  HOME: '/',
  PROMOTIONS: '/promociones',
  SUMMER_PACKAGES: '/paquetes',
  HOTELS: [
    { name: 'Tulum', route: "/hoteles", banner: "/images/hoteles/banner/TULUM/Tulum_BANNER.webp"},
    { name: 'Tulum Aeropuerto', route: "/hoteles", banner: "/images/hoteles/banner/TULUM_AEROPUERTO/Tulum_Aeropuerto_BANNER.webp"},
    { name: 'Chichen Itzá', route: "/hoteles", banner: "/images/hoteles/banner/CHICHEN_ITZA/CHICHEN_ITZA_BANNER.webp"},
    { name: 'Nuevo Uxmal', route: "/hoteles", banner: "/images/hoteles/banner/NUEVO_UXMAL/Nuevo_Uxmal_BANNER.webp" },
    { name: 'Edzná', route: "/hoteles", banner: "/images/hoteles/banner/EDZNA/Edzna_BANNER.webp"},
    { name: 'Calakmul', route: "/hoteles", banner: "/images/hoteles/banner/CALAKMUL/Calakmul_BANNER.webp"},
    { name: 'Palenque', route: "/hoteles", banner: "/images/hoteles/banner/PALENQUE/Palenque-BANNER.webp"}
  ],
  CONTACT: '/contacto',
  MAP: '#mapSection',
  SERVICES: '#servicesSection',
  GALLERY: '#galerySection',
  INIT: '#initSection'
} as const;

export const EXTERNAL_LINKS = {
  ABOUT: 'https://grupomundomaya.mx/',
  FACEBOOK: 'https://www.facebook.com/HotelesGrupoMundoMaya',
  TWITTER: 'https://x.com/HGrupomundomaya',
  INSTAGRAM: 'https://www.instagram.com/hotelesgrupomundomaya/',
} as const;

export const IMAGES_ROUTES = {
  HORIZONTAL_IMAGES: {
    TULUM: [
      "/images/hoteles/horizontales/HOTEL_TULUM/HOTEL_TULUM_2.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM/HOTEL_TULUM_3.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM/HOTEL_TULUM_28.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM/HOTEL_TULUM_55.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM/HOTEL_TULUM_741.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM/HOTEL_TULUM_753.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM/HOTEL_TULUM_192.webp",
    ],
    CHICHEN_ITZA: [
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/CHICHEN_ITZA_1.jpg",
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/CHICHEN_ITZA_2.jpg",
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/CHICHEN_ITZA_3.jpg",
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/CHICHEN_ITZA_4.jpg",
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/CHICHEN_ITZA_5.jpeg",
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/CHICHEN_ITZA_6.jpg",
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/CHICHEN_ITZA_7.jpg",
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/HOTEL_CHICHEN_211.jpg",
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/HOTEL_CHICHEN_260.jpg",
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/HOTEL_CHICHEN_330.jpg",
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/HOTEL_CHICHEN_349.jpg",
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/HOTEL_CHICHEN_869.jpg",
    ],
    NUEVO_UXMAL: [
      "/images/hoteles/horizontales/HOTEL_NUEVO_UXMAL/HOTEL_UXMAL_462.jpg",
      "/images/hoteles/horizontales/HOTEL_NUEVO_UXMAL/HOTEL_UXMAL_636.jpg",
      "/images/hoteles/horizontales/HOTEL_NUEVO_UXMAL/HOTEL_UXMAL_644.jpg",
      "/images/hoteles/horizontales/HOTEL_NUEVO_UXMAL/HOTEL_UXMAL_649.jpg",
      "/images/hoteles/horizontales/HOTEL_NUEVO_UXMAL/HOTEL_UXMAL_653.jpg",
    ],
    CALAKMUL: [
      "/images/hoteles/horizontales/HOTEL_CALAKMUL/CALAKMUL_1.jpg",
      "/images/hoteles/horizontales/HOTEL_CALAKMUL/CALAKMUL_2.jpg",
      "/images/hoteles/horizontales/HOTEL_CALAKMUL/CALAKMUL_3.jpg",
      "/images/hoteles/horizontales/HOTEL_CALAKMUL/CALAKMUL_4.jpeg",
      "/images/hoteles/horizontales/HOTEL_CALAKMUL/CALAKMUL_5.jpeg",
      "/images/hoteles/horizontales/HOTEL_CALAKMUL/CALAKMUL_6.jpeg",
      "/images/hoteles/horizontales/HOTEL_CALAKMUL/CALAKMUL_7.jpeg",
      "/images/hoteles/horizontales/HOTEL_CALAKMUL/CALAKMUL_8.jpeg",
    ],
    EDZNA: [
      "/images/hoteles/horizontales/HOTEL_EDZNA/EDZNA_1.jpg",
      "/images/hoteles/horizontales/HOTEL_EDZNA/EDZNA_2.jpg",
      "/images/hoteles/horizontales/HOTEL_EDZNA/EDZNA_3.jpg",
      "/images/hoteles/horizontales/HOTEL_EDZNA/EDZNA_4.jpg",
      "/images/hoteles/horizontales/HOTEL_EDZNA/EDZNA_5.jpeg",
    ],
    TULUM_AEROPUERTO: [
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/HOTEL AT_391.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/HOTEL AT_395.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/HOTEL AT_398.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/HOTEL AT_408.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/HOTEL AT_410.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/HOTEL AT_415.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/HOTEL TA_107.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/HOTEL TA_160.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/HOTEL TA_233.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/HOTEL TA_275.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/HOTEL TA_431.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/HOTEL TA_481.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/HOTEL TA_501.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/HOTEL TA_507.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/TULUM_AEROPUERTOS_1.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/TULUM_AEROPUERTOS_2.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/TULUM_AEROPUERTOS_3.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/TULUM_AEROPUERTOS_4.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/TULUM_AEROPUERTOS_5.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/TULUM_AEROPUERTOS_6.jpg",
      "/images/hoteles/horizontales/HOTEL_TULUM_AEROPUERTO/TULUM_AEROPUERTOS_7.jpg",
    ],
  },
  VERTICAL_IMAGES: {
    TULUM: [
      "/images/hoteles/verticales/HOTEL_TULUM/HOTEL_TULUM_1.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM/HOTEL_TULUM_2.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM/HOTEL_TULUM_3.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM/HOTEL_TULUM_23.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM/HOTEL_TULUM_58.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM/HOTEL_TULUM_729.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM/HOTEL_TULUM_829.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM/HOTEL_TULUM_854.jpg",
    ],
    CALAKMUL: [
      "/images/hoteles/verticales/HOTEL_CALAKMUL/HOTEL KALAKMUL_703.jpg",
      "/images/hoteles/verticales/HOTEL_CALAKMUL/HOTEL KALAKMUL_902.jpg",
    ],
    CHICHEN_ITZA: [
      "/images/hoteles/verticales/HOTEL_CHICHEN_ITZA/HOTEL CHICHEN_357.jpg",
      "/images/hoteles/verticales/HOTEL_CHICHEN_ITZA/HOTEL CHICHEN_363.jpg",
      "/images/hoteles/verticales/HOTEL_CHICHEN_ITZA/HOTEL CHICHEN_826.jpg",
    ],
    EDZNA: [
      "/images/hoteles/verticales/HOTEL_EDZNA/HOTEL EDZNA_01.jpg",
    ],
    NUEVO_UXMAL: [
      "/images/hoteles/verticales/HOTEL_UXMAL/HOTEL UXMAL_03.jpg",
      "/images/hoteles/verticales/HOTEL_UXMAL/HOTEL UXMAL_640.jpg",
    ],
    TULUM_AEROPUERTO: [
      "/images/hoteles/verticales/HOTEL_TULUM_AEROPUERTO/HOTEL AEROPUERTO TULUM_011.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM_AEROPUERTO/HOTEL AEROPUERTO TULUM_103.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM_AEROPUERTO/HOTEL AEROPUERTO TULUM_139.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM_AEROPUERTO/HOTEL AEROPUERTO TULUM_147.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM_AEROPUERTO/HOTEL AEROPUERTO TULUM_266.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM_AEROPUERTO/HOTEL AEROPUERTO TULUM_327.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM_AEROPUERTO/HOTEL AEROPUERTO TULUM_392.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM_AEROPUERTO/HOTEL AEROPUERTO TULUM_404.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM_AEROPUERTO/HOTEL AEROPUERTO TULUM_427.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM_AEROPUERTO/HOTEL AEROPUERTO TULUM_435.jpg",
      "/images/hoteles/verticales/HOTEL_TULUM_AEROPUERTO/HOTEL AEROPUERTO TULUM_446.jpg",
    ],
  },
  PAQUETES: [
      "/images/hoteles/paquetes/PAQUETE_TULUM_1.png",
      "/images/hoteles/paquetes/PAQUETE_TULUM_2.png",
      "/images/hoteles/paquetes/PAQUETE_CHICHEN_1.png",
      "/images/hoteles/paquetes/PAQUETE_CHICHEN_2.png",
      "/images/hoteles/paquetes/PAQUETE_NUEVO UXMAL_1.png",
      "/images/hoteles/paquetes/PAQUETE_NUEVO UXMAL_2.png",
      "/images/hoteles/paquetes/PAQUETE_EDZNA_1.png",
      "/images/hoteles/paquetes/PAQUETE_EDZNA_2.png",
      "/images/hoteles/paquetes/PAQUETE_PALENQUE_1.png",
      "/images/hoteles/paquetes/PAQUETE_PALENQUE_2.png",
      "/images/hoteles/paquetes/PAQUETE_CALAKMUL.png"
  ],
  PAQUETES_DATA: [
    {
      id: 'tulum',
      label: 'Tulum',
      active_color: 'bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600',
      images: [
        "/images/hoteles/paquetes/PAQUETE_TULUM_1.png",
        "/images/hoteles/paquetes/PAQUETE_TULUM_2.png",
      ],
      link: "https://forms.cloud.microsoft/r/siFvxDkdRs?origin=lprLink",
      description: "Descubre las playas de arena blanca y ruinas mayas frente al mar Caribe."
    },
    {
      id: 'chichen',
      label: 'Chichén Itzá',
      active_color: 'bg-gradient-to-r from-red-400 via-red-500 to-red-600',
      images: [
        "/images/hoteles/paquetes/PAQUETE_CHICHEN_1.png",
        "/images/hoteles/paquetes/PAQUETE_CHICHEN_2.png",
      ],
      link: "https://forms.cloud.microsoft/r/mUkfDkLCNH?origin=lprLink",
      description: "Maravilla del mundo moderno, hogar de la pirámide de Kukulkán."
    },
    {
      id: 'uxmal',
      label: 'Nuevo Uxmal',
      active_color: 'bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700',
      images: [
        "/images/hoteles/paquetes/PAQUETE_NUEVO UXMAL_1.png",
        "/images/hoteles/paquetes/PAQUETE_NUEVO UXMAL_2.png",
      ],
      link: "https://forms.cloud.microsoft/r/hcrmxe0W14?origin=lprLink",
      description: "Arquitectura maya Puuc en todo su esplendor."
    },
    {
      id: 'edza',
      label: 'Edzná',
      active_color: 'bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700',
      images: [
        "/images/hoteles/paquetes/PAQUETE_EDZNA_1.png",
        "/images/hoteles/paquetes/PAQUETE_EDZNA_2.png",
      ],
      link: "https://forms.cloud.microsoft/r/5geEFYW4Lp?origin=lprLink",
      description: "La 'Casa de los Itzáes', famosa por su sistema hidráulico."
    },
    {
      id: 'palenque',
      label: 'Palenque',
      active_color: 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700',
      images: [
        "/images/hoteles/paquetes/PAQUETE_PALENQUE_1.png",
        "/images/hoteles/paquetes/PAQUETE_PALENQUE_2.png",
      ],
      link: "https://forms.cloud.microsoft/r/6SPw6Vtm5d?origin=lprLink",
      description: "Joyas arquitectónicas en medio de la selva tropical."
    },
    {
      id: 'calakmul',
      label: 'Calakmul',
      active_color: 'bg-gradient-to-r from-green-400 via-green-500 to-green-600',
      images: [
        "/images/hoteles/paquetes/PAQUETE_CALAKMUL.png",
      ],
      link: "https://forms.cloud.microsoft/r/9LJF5VuWT3?origin=lprLink",
      description: "Antigua ciudad maya escondida en la Reserva de la Biosfera."
    },
  ]
} as const;

export const hotelLocations = [
  { city: "Tulum", lat: 20.2307657, lon: -87.4478299 },
  { city: "Chichen Itzá", lat: 20.696206, lon: -88.557398 },
  { city: "Palenque", lat: 17.4937868, lon: -92.024815 },
  { city: "Calakmul", lat: 18.1841581, lon: -89.7484779 },
  { city: "Edzná", lat: 19.6014604, lon: -90.2227569 },
  { city: "Nuevo Uxmal", lat: 20.3766903, lon: -89.7720407 },
  { city: "Tulum Aeropuerto", lat: 20.163853, lon: -87.656876 }
] as const;

export const GMM = {
  jaguar: "/images/Jaguar-GMM.png"
}
