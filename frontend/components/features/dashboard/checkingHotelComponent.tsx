'use client';

import { motion } from 'framer-motion';
import { Clock, LogIn, LogOut, HelpCircle } from 'lucide-react';

interface ComponentProps { }

const CheckingHotelComponent: React.FC<ComponentProps> = () => {
  const scheduleItems = [
    { label: 'Check In', value: '3:00 pm', icon: LogIn },
    { label: 'Check Out', value: '12:00 pm', icon: LogOut },
    { label: 'Early Check In', value: 'Disponible', icon: Clock, italic: true },
    { label: 'Late Check Out', value: 'Bajo disponibilidad', icon: Clock, italic: true },
  ];

  return (
    <section className="relative flex justify-center px-4 py-8">
      {/*Linea decorativa que pasa por detras del div*/}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-14 bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full "
      >
        {/* Cabecera con icono decorativo */}
        <div className="flex items-center w-full justify-center gap-3 mb-4">
          <div className="p-2 bg-teal-50 rounded-full">
            <Clock className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Horarios</h2>
        </div>

        {/* Línea decorativa con gradiente */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
          className="h-0.5 bg-gradient-to-r from-teal-300 to-cyan-400 w-full mb-6 origin-left"
        />

        {/* Lista de horarios con iconos */}
        <div className="space-y-4">
          {scheduleItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-gray-600">
                <item.icon className="w-4 h-4 text-teal-500" />
                <span className="text-sm md:text-base">{item.label}</span>
              </div>
              <span
                className={`text-sm md:text-base font-medium ${item.italic ? 'text-gray-500 italic' : 'text-gray-900'
                  }`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Mensaje adicional con ícono de ayuda */}
        <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-gray-100 text-xs text-gray-400">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Consulte en recepción para confirmar disponibilidad</span>
        </div>
      </motion.div>
    </section>
  );
};

export default CheckingHotelComponent;