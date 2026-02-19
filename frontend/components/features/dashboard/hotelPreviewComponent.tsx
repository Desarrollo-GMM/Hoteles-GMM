'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { HOTEL_DATA, ROUTES } from '@/app/constants/routes';

interface ComponentProps {}

const HotelPrevieComponent: React.FC<ComponentProps> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const hotels = Object.values(HOTEL_DATA);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // Ajusta según el ancho de tus tarjetas + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const buildUrl = (baseRoute: string, name: string, banner: string) => {
    const separator = baseRoute.includes('?') ? '&' : '?';
    return `${baseRoute}?destino=${encodeURIComponent(name)}&banner=${encodeURIComponent(banner)}`;
  };

  return (
    <section className="relative flex justify-center px-4 py-8 w-full md:w-5/6 lg:w-4/6 mx-auto">
      <div className="w-full">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-4xl font-bold block">Visita Nuestros Hoteles</span>
          <span className="text-lg">en el Corazón del Sureste Mexicano</span>
        </motion.div>

        <div className="relative group">
          <motion.button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 text-white p-2 rounded-full shadow-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 -ml-4"
            aria-label="Anterior"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.9)' }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft size={20} />
          </motion.button>

          <motion.button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 text-white p-2 rounded-full shadow-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 -mr-4"
            aria-label="Siguiente"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.9)' }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight size={20} />
          </motion.button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 pb-4 scroll-smooth scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {hotels.map((hotel, index) => (
              <motion.a
                key={hotel.key}
                href={buildUrl(
                  ROUTES.HOTELS.find((hotel_data) => hotel_data.key == hotel.key)?.route || '',
                  ROUTES.HOTELS.find((hotel_data) => hotel_data.key == hotel.key)?.name || '',
                  ROUTES.HOTELS.find((hotel_data) => hotel_data.key == hotel.key)?.banner || ''
                )}
                className="relative flex-shrink-0 w-1/3 rounded-lg shadow-lg snap-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <Image
                  className="object-cover rounded-xl h-full"
                  src={hotel.image}
                  alt={hotel.alt}
                  width={500}
                  height={600}
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 hover:from-black/70 to-transparent transition-all duration-300 rounded-lg">
                  <div className="absolute gap-2 bottom-4 text-white w-full p-3">
                    <motion.span
                      className="block text-xl font-mono"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      {hotel.name}
                    </motion.span>
                    <div className="flex items-center justify-between hover:bg-black/40 hover:transition-colors duration-300 rounded-xl p-2">
                      <motion.span
                        className="block text-xl font-bold"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        {hotel.fullName}
                      </motion.span>
                      <motion.span
                        className="my-auto"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <FaChevronRight />
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelPrevieComponent;