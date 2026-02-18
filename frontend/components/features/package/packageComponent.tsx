'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

import CalendarIcon from '@/components/ui/icons/calendar'
import WhatsappIcon from '@/components/ui/icons/whatsapp'
import CalloutIcon from '@/components/ui/icons/callout'
import CashIcon from '@/components/ui/icons/cash'
import { IMAGES_ROUTES } from '@/app/constants/routes'
import { cn } from '@/lib/utils'

interface PackageTab {
  id: string
  label: string
  images: string[]
  link?: string
  active_color?: string
}

interface ReservationOption {
  id: string
  label: string
  icon: React.ReactNode
  href: string
  color: string
  target?: string
  rel?: string
}

const PackageComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tulum')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Manejar cambio de tab
  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId)
  }, [])

  const activeTabData = IMAGES_ROUTES.PAQUETES_DATA.SEMANA_SANTA.find(tab => tab.id === activeTab)

  console.log("EL activedata es: " + activeTabData)

  // Opciones de reserva
  const reservationOptions: ReservationOption[] = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: <WhatsappIcon className="w-4 h-4 mr-2" />,
      href: 'https://wa.me/5523328695',
      color: 'hover:text-green-600 hover:bg-green-50',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      id: 'call',
      label: 'Llamar',
      icon: <CalloutIcon className="w-4 h-4 mr-2" />,
      href: 'tel:5513935091',
      color: 'hover:text-blue-600 hover:bg-blue-50'
    },
    {
      id: 'quote',
      label: 'Cotizar',
      icon: <CashIcon className="w-4 h-4 mr-2" />,
      href: activeTabData?.link || '#',
      color: 'hover:text-amber-600 hover:bg-amber-50',
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  ]

  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Header */}
      <div className="container px-4 mx-auto mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-4xl font-bold uppercase md:text-5xl lg:text-6xl "
        >
          ¡Explora el Mundo Maya!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto mb-6 text-lg text-gray-600"
        >
          Desde la comodidad de nuestros 6 hoteles turísticos, cada espacio ha sido diseñado para ofrecerte una experiencia auténtica, rodeada de historia, naturaleza y cultura.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold italic text-cyan-700"
        >
          ¡Hospédate con nosotros y vive el legado maya como nunca antes!
        </motion.p>
      </div>

      {/* Tabs Navigation */}
      <div className="sticky top-0 z-30 bg-white shadow-md">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center overflow-x-auto scrollbar-hide">
            {IMAGES_ROUTES.PAQUETES_DATA.SEMANA_SANTA.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={cn(
                  "flex-shrink-0 px-6 py-4 font-semibold transition-all duration-300 border-b-2",
                  activeTab === tab.id
                    ? `${tab.active_color} rounded-t-lg`
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                )}
                aria-selected={activeTab === tab.id}
                role="tab"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 py-8 mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {activeTabData?.images.map((image, index) => (
              <div className='grid grid-cols-1'>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="overflow-hidden rounded-t-xl shadow-lg group"
                >
                  <div className="relative aspect-auto">
                    <Image
                      src={image}
                      alt={`${activeTabData.label} - Imagen ${index + 1}`}
                      width={1000}
                      height={1000}
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
                <div className="w-full text-center bg-black text-white font-light">
                  Cotiza tu paquete en los siguientes números:
                </div>
                <div className="w-full flex flex-row ">
                  <a href='https://wa.me/5660568009' 
                      target='_blank' 
                      rel='noopener noreferrer' 
                      className='bg-teal-500 border-2 border-teal-500 text-teal-100 w-1/2 rounded-r-none text-center rounded-b-xl'>
                    Whatsapp: <span className='font-bold'>+52 56 60568009</span>
                  </a>
                  <a href='tel:5966890116' 
                      className='bg-blue-500 border-2 border-blue-500 text-blue-100 w-1/2 rounded-l-none text-center rounded-b-xl'>
                    Teléfono: <span className='font-bold'>+52 59 6689 0116</span>
                  </a>
                </div>
              </div>

            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50" ref={dropdownRef}>
        {/* Dropdown Menu */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-full right-0 mb-2 overflow-hidden bg-white rounded-xl shadow-xl w-72"
            >
              <div className="p-2">
                <div className="mb-2 px-3 py-2 text-sm font-semibold text-gray-700 border-b">
                  Opciones de reserva
                </div>
                {reservationOptions.map((option) => (
                  <a
                    key={option.id}
                    href={option.href}
                    target={option.target}
                    rel={option.rel}
                    className={cn(
                      "flex items-center px-3 py-3 text-sm font-medium transition-colors duration-200 rounded-lg",
                      option.color
                    )}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {option.icon}
                    {option.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={cn(
            "flex items-center justify-center w-14 h-14 md:w-auto md:h-auto md:px-6 md:py-4",
            "bg-gradient-to-r from-cyan-600 to-emerald-600 text-white rounded-full shadow-lg",
            "hover:shadow-xl transition-all duration-300"
          )}
          aria-label="Opciones de reserva"
        >
          <div className="hidden md:flex items-center space-x-3">
            <CalendarIcon className="w-5 h-5" />
            <span className="font-semibold">RESERVAR</span>
          </div>
          <div className="flex md:hidden">
            <CalendarIcon className="w-6 h-6" />
          </div>
        </motion.button> */}
      </div>
    </div>
  )
}

export default PackageComponent