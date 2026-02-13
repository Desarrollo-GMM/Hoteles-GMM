'use client'

import { motion } from 'framer-motion'
import { TERMS_AND_CONDITIONS } from '@/app/constants/termsAndConditions'

// ==================== TIPOS ====================
type HotelData = typeof TERMS_AND_CONDITIONS[keyof typeof TERMS_AND_CONDITIONS]
type ChildPolicy = typeof TERMS_AND_CONDITIONS.TULUM.childPolicy

interface Props {
  destino: string
}

const limpiarConCaracteresEspecificos = (texto: string) => {
    return texto
        .toUpperCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') 
        .replace(/[^A-Z0-9\s-_]/g, '')
        .replace(/\s+/g, '_')
        .trim();
};


// ==================== TYPE GUARDS ====================
function hasEnvironmentalSanitationFee(data: HotelData): data is typeof TERMS_AND_CONDITIONS.TULUM | typeof TERMS_AND_CONDITIONS.TULUM_AEROPUERTO {
  return 'environmentalSanitationFee' in data
}
function hasConanpFee(data: HotelData): data is typeof TERMS_AND_CONDITIONS.TULUM {
  return 'conanpFee' in data
}
function hasAccessPolicies(data: HotelData): data is typeof TERMS_AND_CONDITIONS.CALAKMUL {
  return 'accessPolicies' in data
}
function hasChildPolicy(data: HotelData): data is { childPolicy: ChildPolicy } {
  return 'childPolicy' in data && !!(data as any).childPolicy
}

// ==================== COMPONENTE PRINCIPAL ====================
export default function TermsAndConditionComponent({ destino }: Props) {

  const destinoNormalizado = limpiarConCaracteresEspecificos(destino);
  // Validación del destino
  if (!(destinoNormalizado in TERMS_AND_CONDITIONS)) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-6 py-3 text-red-700">
          <span className="text-xl">⚠️</span>
          <span>No se encontraron términos para &quot;{destino}&quot;</span>
        </div>
      </motion.div>
    )
  }

  const hotelData = TERMS_AND_CONDITIONS[destinoNormalizado as keyof typeof TERMS_AND_CONDITIONS]

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    }).format(amount)

  // Configuración de animación para secciones
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5, ease: 'easeOut' }
    })
  }

  // Animación para items de lista
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 }
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto max-w-5xl space-y-8 px-4 py-8 font-sans"
      id='termsAndConditions'
    >
      {/* Encabezado con gradiente */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r p-8 text-black text-center"
      >
        <h1 className="text-3xl font-bold tracking-tight">
          Términos y condiciones del Hotel {destino.replace('_', ' ')}
        </h1>
      </motion.div>

      {/* Política de menores (siempre presente) */}
      {hasChildPolicy(hotelData) && (
        <motion.section
          custom={1}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          whileHover={{ y: -4, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05), 0 10px 10px -5px rgba(0,0,0,0.01)' }}
          className="group rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
        >
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-xl text-blue-600">
              👶
            </span>
            <h2 className="text-xl font-semibold text-gray-800">Política de menores</h2>
          </div>
          <div className="mt-4 space-y-2 text-gray-700">
            <p><span className="font-medium">Edad:</span> {hotelData.childPolicy.ageRange}</p>
            <p><span className="font-medium">Estatus:</span> {hotelData.childPolicy.status}</p>
            <p><span className="font-medium">A partir de:</span> {hotelData.childPolicy.adultAge} se considera adulto</p>
            <p><span className="font-medium">Máximo de menores por habitación:</span> {hotelData.childPolicy.maxMinorsPerRoom}</p>
            <p><span className="font-medium">Cargo por adulto extra:</span> {hotelData.childPolicy.adultExtraPersonCharge}</p>
          </div>
        </motion.section>
      )}

      {/* Derecho de Saneamiento Ambiental */}
      {hasEnvironmentalSanitationFee(hotelData) && (
        <motion.section
          custom={2}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          whileHover={{ y: -4, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05), 0 10px 10px -5px rgba(0,0,0,0.01)' }}
          className="group rounded-xl bg-white p-6 shadow-md"
        >
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-xl text-green-600">
              🌿
            </span>
            <h2 className="text-xl font-semibold text-gray-800">Derecho de Saneamiento Ambiental</h2>
          </div>
          <p className="mt-4 text-gray-600">{hotelData.environmentalSanitationFee.description}</p>
          {hotelData.environmentalSanitationFee.subjectToChange && (
            <p className="mt-1 text-sm italic text-gray-500">* Sujeto a cambios</p>
          )}
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {hotelData.environmentalSanitationFee.ratesPerNightPerRoom.map((rate, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
              >
                <span className="font-medium text-gray-700">
                  {rate.persons} {rate.persons === 1 ? 'persona' : 'personas'}
                </span>
                <span className="font-semibold text-green-700">{formatCurrency(rate.amount)}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Tarifas CONANP */}
      {hasConanpFee(hotelData) && (
        <motion.section
          custom={3}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          whileHover={{ y: -4, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05), 0 10px 10px -5px rgba(0,0,0,0.01)' }}
          className="group rounded-xl bg-white p-6 shadow-md"
        >
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 text-xl text-yellow-600">
              🏞️
            </span>
            <h2 className="text-xl font-semibold text-gray-800">Cobro CONANP</h2>
          </div>
          <p className="mt-4 text-gray-600">{hotelData.conanpFee.description}</p>
          <ul className="mt-4 space-y-2">
            {hotelData.conanpFee.ratesPerPersonPerDay.map((rate, idx) => (
              <motion.li
                key={idx}
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="flex flex-wrap items-center justify-between rounded-lg bg-gray-50 p-3"
              >
                <span className="font-medium text-gray-700">{rate.category}</span>
                <span className="font-semibold text-yellow-700">
                  {formatCurrency(rate.amount)} <span className="text-sm font-normal text-gray-500">/persona/día</span>
                </span>
                {rate.condition && (
                  <span className="mt-1 w-full text-sm italic text-gray-500">({rate.condition})</span>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* Políticas de acceso - Calakmul */}
      {hasAccessPolicies(hotelData) && (
        <motion.section
          custom={4}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          whileHover={{ y: -4, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05), 0 10px 10px -5px rgba(0,0,0,0.01)' }}
          className="group rounded-xl bg-white p-6 shadow-md"
        >
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-xl text-purple-600">
              🌵
            </span>
            <h2 className="text-xl font-semibold text-gray-800">Políticas de acceso</h2>
          </div>
          <p className="mt-4 text-gray-600">{hotelData.accessPolicies.description}</p>

          {/* Tarifas de acceso */}
          <div className="mt-6">
            <h3 className="flex items-center gap-2 font-semibold text-gray-800">
              <span className="text-purple-600">💰</span> Tarifas {hotelData.accessPolicies.fees.year}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Moneda: {hotelData.accessPolicies.fees.currency} | Pago: {hotelData.accessPolicies.fees.paymentMethod}
            </p>
            <div className="mt-3 space-y-2">
              {hotelData.accessPolicies.fees.rates.map((rate, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
                >
                  <span className="font-medium text-gray-700">{rate.entity}</span>
                  <span className="font-semibold text-purple-700">{formatCurrency(rate.amount)}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Horarios */}
          <div className="mt-6">
            <h3 className="flex items-center gap-2 font-semibold text-gray-800">
              <span className="text-purple-600">🕒</span> Horarios de acceso
            </h3>
            <ul className="mt-3 space-y-2">
              {hotelData.accessPolicies.schedule.map((item, idx) => (
                <motion.li
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className="rounded-lg bg-gray-50 p-3"
                >
                  <span className="font-medium text-gray-700">{item.location}:</span>{' '}
                  <span className="text-gray-600">{item.openingTime} - {item.closingTime}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Procedimiento especial */}
          <div className="mt-6 rounded-lg bg-amber-50 p-4">
            <h3 className="flex items-center gap-2 font-semibold text-amber-800">
              <span className="text-amber-600">📞</span> Llegadas fuera de horario
            </h3>
            <p className="mt-2 text-amber-700">{hotelData.accessPolicies.lateArrivalProcedure.description}</p>
            <div className="mt-3 space-y-1 text-sm text-amber-800">
              <p><span className="font-medium">Teléfono:</span> {hotelData.accessPolicies.lateArrivalProcedure.contactPhone}</p>
              <p><span className="font-medium">Aplica para:</span> {hotelData.accessPolicies.lateArrivalProcedure.applicableVehicles}</p>
              <p><span className="font-medium">Restricciones:</span> {hotelData.accessPolicies.lateArrivalProcedure.restrictions}</p>
            </div>
          </div>
        </motion.section>
      )}

      {/* Mensaje cuando solo hay política de menores */}
      {!hasEnvironmentalSanitationFee(hotelData) &&
        !hasConanpFee(hotelData) &&
        !hasAccessPolicies(hotelData) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl bg-gray-50 p-8 text-center"
          >
            <span className="text-4xl text-gray-400">📄</span>
            <p className="mt-4 text-lg text-gray-600">
              No se especificaron tarifas adicionales para este hotel.
            </p>
          </motion.div>
        )}
    </motion.div>
  )
}