import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES_ROUTES } from '@/app/constants/routes';

interface GaleriaInteractivaProps {
  destino: string;
  img_horizontales?: readonly string[];
  img_verticales?: readonly string[];
}

const GaleriaInteractiva: React.FC<GaleriaInteractivaProps> = ({
  destino,
  img_horizontales = [],
  img_verticales = [],
}) => {
  // Mezclar imágenes intercalando horizontales y verticales
  const mezclarArrays = (h: readonly string[], v: readonly string[]): string[] => {
    const mezcladas: string[] = [];
    const maxLen = Math.max(h.length, v.length);
    for (let i = 0; i < maxLen; i++) {
      if (i < h.length) mezcladas.push(h[i]);
      if (i < v.length) mezcladas.push(v[i]);
    }
    return mezcladas;
  };

  const imagenesMezcladas = mezclarArrays(img_horizontales, img_verticales);
  const totalImages = imagenesMezcladas.length;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openLightbox = (globalIndex: number) => {
    setCurrentIndex(globalIndex);
    setSelectedImage(imagenesMezcladas[globalIndex]);
    setIsModalOpen(true);
  };

  const closeLightbox = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    if (isModalOpen) {
      setSelectedImage(imagenesMezcladas[currentIndex]);
    }
  }, [currentIndex, isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentIndex]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
  }, [isModalOpen]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Imagen+no+disponible';
  };

  if (totalImages === 0) return null;

  // Distribuir las imágenes en 4 columnas (para desktop) de forma equitativa (cíclica)
  const columnCount = 4;
  const columns: { src: string; globalIndex: number }[][] = Array.from({ length: columnCount }, () => []);
  imagenesMezcladas.forEach((src, globalIndex) => {
    const colIndex = globalIndex % columnCount;
    columns[colIndex].push({ src, globalIndex });
  });

  // Variantes de animación para las imágenes de la galería
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section className="bg-white px-4 md:px-8 font-sans h-screen overflow-hidden flex flex-col border-t border-gray-200">
      <div className="max-w-7xl mx-auto w-full flex flex-col h-full">
        {/* Área de scroll interno */}
        <div className="flex-1 overflow-y-auto pr-2 bg-blur-sm scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          
          {/* Contenedor flex horizontal con columnas de ancho fijo */}
          <div className="flex flex-wrap -mx-2 pb-6">
            {columns.map((col, colIdx) => (
              <div key={colIdx} className="w-1/2 md:w-1/4 px-2">
                {/* Columna interna con flex vertical y animación de aparición */}
                <motion.div
                  className="flex flex-col gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {col.map((item) => (
                    <motion.div
                      key={item.globalIndex}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative cursor-pointer"
                      onClick={() => openLightbox(item.globalIndex)}
                    >
                      <div className="relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-shadow duration-500">
                        <img
                          src={item.src}
                          alt={`${destino} - imagen ${item.globalIndex + 1}`}
                          className="w-full h-auto block"
                          onError={handleImageError}
                        />
                        {/* Overlay oscuro y lupa al hacer hover */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                        />
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-4 right-4"
                        >
                          <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LIGHTBOX CON ANIMACIONES */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <div
              className="relative w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-50 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/20 text-white/70 hover:text-white"
                aria-label="Cerrar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Navegación izquierda */}
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={prevImage}
                className="absolute left-6 z-50 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/20 text-white/70 hover:text-white"
                aria-label="Anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              {/* Imagen con animación de cambio */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={selectedImage}
                  alt={`Ampliación ${currentIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-[90vh] object-contain shadow-2xl"
                  onError={handleImageError}
                />
              </AnimatePresence>

              {/* Navegación derecha */}
              <motion.button
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={nextImage}
                className="absolute right-6 z-50 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/20 text-white/70 hover:text-white"
                aria-label="Siguiente"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Contador */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-xs tracking-wider border border-white/20"
              >
                {currentIndex + 1} / {totalImages}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </section>
  );
};

export default GaleriaInteractiva;