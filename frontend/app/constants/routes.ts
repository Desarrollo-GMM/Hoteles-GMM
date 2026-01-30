export const ROUTES = {
  HOME: '/',
  PROMOTIONS: '/promociones',
  SUMMER_PACKAGES: '/paquetes',
  HOTELS: {
    TULUM: '/hoteles',
    CHICHEN_ITZA: '/hoteles',
    NUEVO_UXMA: '/hoteles',
    EDZNA: '/hoteles',
    CALAKMUL: '/hoteles',
    PALENQUE: '/hoteles',
  },
  CONTACT: '/contacto',
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
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/HOTEL_CHICHEN_211.jpg",
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/HOTEL_CHICHEN_260.jpg",
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/HOTEL_CHICHEN_330.jpg",
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/HOTEL_CHICHEN_349.jpg",
      "/images/hoteles/horizontales/HOTEL_CHICHEN_ITZA/HOTEL_CHICHEN_869.jpg",
    ],
    NUEVO_UXMA: [
      "/images/hoteles/horizontales/HOTEL_NUEVO_UXMA/HOTEL_UXMA_462.jpg",
      "/images/hoteles/horizontales/HOTEL_NUEVO_UXMA/HOTEL_UXMA_636.jpg",
      "/images/hoteles/horizontales/HOTEL_NUEVO_UXMA/HOTEL_UXMA_644.jpg",
      "/images/hoteles/horizontales/HOTEL_NUEVO_UXMA/HOTEL_UXMA_649.jpg",
      "/images/hoteles/horizontales/HOTEL_NUEVO_UXMA/HOTEL_UXMA_653.jpg",
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
    ]
  }
} as const;

export const hotelLocations = [
  { city: "Tulum", lat: 20.211, lon: -87.465 },
  { city: "Chichen Itzá", lat: 20.696206, lon: -88.557398},
  { city: "Palenque", lat: 17.4956991, lon: -92.0244067 },
  { city: "Calakmul", lat: 18.184355, lon: -89.747168},
  { city: "Edzná", lat: 19.6014604, lon: -90.2227569 },
  { city: "Nuevo Uxmal", lat: 20.3366876, lon: -89.8243936 },
  { city: "Tulum Aeropuerto", lat: 20.232, lon: -87.430 }
] as const;