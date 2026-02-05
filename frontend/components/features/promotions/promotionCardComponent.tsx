'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import AutoScrollComponent from "@/components/ui/autoScrollComponent"
import { PROMOTIONS } from "@/app/constants/promotions"
import { CalendarDays, Hotel, Clock, CheckCircle, Globe, Phone, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react'

import { GMM } from "@/app/constants/routes"

interface Promotion {
  packageName: string
  image: string
  roomType: string
  limitDate: string
  estimatedStay: string
  termsAndConditions: string[]
  reservationContact: {
    webSite: string
    callCenter: string
  }
}

const PromotionComponent = () => {
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAccordionOpen, setIsAccordionOpen] = useState(true)

  // Inicializar con la primera promoción al cargar
  useEffect(() => {
    if (PROMOTIONS.length > 0 && !selectedPromotion) {
      setSelectedPromotion(PROMOTIONS[0])
    }
  }, [selectedPromotion])

  const handlePromotionClick = (promotion: Promotion, index: number) => {
    setSelectedPromotion(promotion)
    setActiveIndex(index)

    // Feedback visual (opcional: scroll suave hacia la sección izquierda en móviles)
    if (window.innerWidth < 768) {
      document.querySelector('.info-section')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleNextPromotion = () => {
    const nextIndex = (activeIndex + 1) % PROMOTIONS.length
    handlePromotionClick(PROMOTIONS[nextIndex], nextIndex)
  }

  const handlePrevPromotion = () => {
    const prevIndex = (activeIndex - 1 + PROMOTIONS.length) % PROMOTIONS.length
    handlePromotionClick(PROMOTIONS[prevIndex], prevIndex)
  }

  if (!selectedPromotion) {
    return <div className="w-full h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
    </div>
  }

  return (
    <div className="w-full min-h-screen flex flex-col-reverse lg:flex-row pt-24"
      style={{
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('${GMM.jaguar}')`,
        backgroundRepeat: 'repeat',
        backgroundSize: '900px',
        backgroundPosition: 'calc(-23px - -30px) center',
        backgroundColor: '#ffffff',
      }}>
      <div className="info-section lg:w-1/3 w-full p-4 md:p-8">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 h-full">
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-500">Promoción</span>
              <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full font-bold">
                {activeIndex + 1}/{PROMOTIONS.length}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrevPromotion}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                aria-label="Promoción anterior"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={handleNextPromotion}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                aria-label="Siguiente promoción"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="pb-4 border-b border-gray-200">
              <h2 className="font-bold text-2xl md:text-3xl text-gray-800 mb-3">
                {selectedPromotion.packageName}
              </h2>
              <div className="flex items-center gap-2 text-teal-600">
                <Hotel className="w-5 h-5" />
                <span className="font-medium">{selectedPromotion.roomType}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200">
                <div className="flex items-center gap-3 mb-2">
                  <CalendarDays className="w-5 h-5 text-teal-600" />
                  <span className="font-medium text-gray-700">Fecha límite</span>
                </div>
                <p className="text-gray-800 font-semibold pl-8">{selectedPromotion.limitDate}</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-700">Estancia</span>
                </div>
                <p className="text-gray-800 font-semibold pl-8">{selectedPromotion.estimatedStay}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-white shadow-lg">
              <h3 className="font-bold text-xl mb-4">¡Reserva ahora!</h3>
              <div className="space-y-4">
                <a
                  href={selectedPromotion.reservationContact.webSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">Visitar sitio web oficial</span>
                </a>
                <div className="flex items-center justify-center gap-3 p-3 bg-white/10 rounded-lg">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Call center: {selectedPromotion.reservationContact.callCenter}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 overflow-hidden">
            <button
              className="w-full p-5 flex items-center justify-between hover:bg-gray-100 transition-colors"
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              aria-expanded={isAccordionOpen}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-xl text-gray-800">
                  Términos y condiciones
                </h3>
              </div>
              <div className="text-gray-500">
                {isAccordionOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isAccordionOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="p-5 pt-0">
                <div className="max-h-72 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                  {selectedPromotion.termsAndConditions.map((term, index) => (
                    <div key={index} className="flex gap-3 group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-semibold text-teal-600">{index + 1}</span>
                      </div>
                      <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                        {term}
                      </p>
                    </div>
                  ))}
                </div>

                {isAccordionOpen && (
                  <div className="mt-4 pt-3 border-t border-gray-300 border-dashed">
                    <p className="text-xs text-gray-500 text-center">
                      {selectedPromotion.termsAndConditions.length} términos en total
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 hidden lg:block">
            <p className="text-gray-600 text-sm">
              Promoción seleccionada: <span className="font-bold text-teal-600">{selectedPromotion.packageName}</span>
            </p>
            <div className="flex gap-2 mt-2">
              {PROMOTIONS.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded-full transition-all ${index === activeIndex ? 'bg-teal-500' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-2/3 w-full p-4 md:p-8">
        <div className="relative mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Nuestras Promociones
          </h2>
          <p className="text-gray-600">
            Haz clic en cualquier promoción para ver los detalles
          </p>
        </div>

        <div className="relative mb-12 overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm p-4">
          <AutoScrollComponent
            speed="slow"
            direction="horizontal"
            reverse={false}
            pauseOnHover={false}
            className="py-4 h-auto"
            gap={0}
          >
            {PROMOTIONS.map((promotion, index) => (
              <div
                key={index}
                className="mx-4 relative group cursor-pointer transform transition-all duration-300"
                onClick={() => handlePromotionClick(promotion, index)}
              >
                <div className={`
                  relative overflow-hidden rounded-xl shadow-lg
                  ${selectedPromotion === promotion
                    ? 'ring-4 ring-teal-500 ring-offset-4 shadow-2xl scale-100 z-10'
                    : 'ring-2 ring-transparent hover:ring-teal-300 hover:shadow-xl'
                  }
                  transition-all duration-300
                `}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  {selectedPromotion === promotion && (
                    <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Seleccionada
                    </div>
                  )}

                  <div className="absolute top-4 right-4 z-20 bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <div className="relative h-[50vh] w-[350px] overflow-hidden rounded-xl">
                    <Image
                      src={promotion.image}
                      alt={`Promoción ${index + 1}: ${promotion.packageName}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority={index === 0}
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-b-xl">
                    <h3 className="font-bold text-xl mb-2">{promotion.packageName}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Hotel className="w-4 h-4" />
                      <span className="text-sm">{promotion.roomType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <Clock className="w-4 h-4" />
                      <span>{promotion.estimatedStay}</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/20">
                      <p className="text-xs opacity-75">Haz clic para ver todos los detalles</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </AutoScrollComponent>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-3">
            {PROMOTIONS.map((promotion, index) => (
              <button
                key={index}
                className={`
                  relative p-1 rounded-full transition-all duration-300
                  ${selectedPromotion === promotion
                    ? 'bg-teal-100 ring-2 ring-teal-500'
                    : 'bg-gray-200 hover:bg-gray-300'
                  }
                `}
                onClick={() => handlePromotionClick(promotion, index)}
                aria-label={`Seleccionar promoción ${index + 1}`}
              >
                <div className={`w-2 h-2 rounded-full ${selectedPromotion === promotion ? 'bg-teal-600' : 'bg-gray-400'
                  }`} />
              </button>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-700 font-medium">
              <span className="text-teal-600">{selectedPromotion.packageName}</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Válido hasta: {selectedPromotion.limitDate}
            </p>
          </div>
        </div>
      </div>

      {/* Estilos para scrollbar personalizado */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  )
}

export default PromotionComponent