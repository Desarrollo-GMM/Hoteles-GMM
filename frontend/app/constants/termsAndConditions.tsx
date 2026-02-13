'use client'

export const TERMS_AND_CONDITIONS = {
  TULUM: {
    childPolicy: {
      ageRange: '0 a 11 años (11 meses 31 días)',
      status: 'gratis',
      adultAge: '12 años en adelante',
      maxMinorsPerRoom: 2,
      adultExtraPersonCharge: 'debe pagar tarifa de persona extra'
    },
    environmentalSanitationFee: {
      description: 'Cobro de Derecho de Saneamiento Ambiental por habitación, por noche',
      subjectToChange: true,
      ratesPerNightPerRoom: [
        { persons: 1, amount: 35.19, currency: 'MXN' },
        { persons: 2, amount: 58.66, currency: 'MXN' },
        { persons: 3, amount: 76.25, currency: 'MXN' },
        { persons: 4, amount: 87.98, currency: 'MXN' }
      ]
    },
    conanpFee: {
      description: 'Cobro de CONANP por persona, por día',
      ratesPerPersonPerDay: [
        { category: 'Extranjero', amount: 125.00, currency: 'MXN' },
        { category: 'Extranjero residente', amount: 65.00, currency: 'MXN' },
        { category: 'Nacional', amount: 65.00, currency: 'MXN' },
        {
          category: 'Estudiante y profesores Local',
          amount: 30.00,
          currency: 'MXN',
          condition: 'residente de los municipios que se ubican en la zona'
        }
      ]
    }
  },
  TULUM_AEROPUERTO: {
    childPolicy: {
      ageRange: '0 a 11 años (11 meses 31 días)',
      status: 'gratis',
      adultAge: '12 años en adelante',
      maxMinorsPerRoom: 2,
      adultExtraPersonCharge: 'debe pagar tarifa de persona extra'
    },
    environmentalSanitationFee: {
      description: 'Cobro de Derecho de Saneamiento Ambiental por habitación, por noche',
      subjectToChange: true,
      ratesPerNightPerRoom: [
        { persons: 1, amount: 35.19, currency: 'MXN' },
        { persons: 2, amount: 58.66, currency: 'MXN' },
        { persons: 3, amount: 76.25, currency: 'MXN' },
        { persons: 4, amount: 87.98, currency: 'MXN' }
      ]
    }
    // Nota: No se especifica tarifa CONANP para este hotel
  },
  NUEVO_UXMAL: {
    childPolicy: {
      ageRange: '0 a 11 años (11 meses 31 días)',
      status: 'gratis',
      adultAge: '12 años en adelante',
      maxMinorsPerRoom: 2,
      adultExtraPersonCharge: 'debe pagar tarifa de persona extra'
    }
    // Pendiente de tarifas adicionales
  },
  PALENQUE: {
    // Pendiente de términos específicos
  },
  CHICHEN_ITZA: {
    childPolicy: {
      ageRange: '0 a 11 años (11 meses 31 días)',
      status: 'gratis',
      adultAge: '12 años en adelante',
      maxMinorsPerRoom: 2,
      adultExtraPersonCharge: 'debe pagar tarifa de persona extra'
    }
    // Pendiente de tarifas adicionales
  },
  CALAKMUL: {
    childPolicy: {
      ageRange: '0 a 11 años (11 meses 31 días)',
      status: 'gratis',
      adultAge: '12 años en adelante',
      maxMinorsPerRoom: 2,
      adultExtraPersonCharge: 'debe pagar tarifa de persona extra'
    },
    accessPolicies: {
      description: 'Políticas de acceso a la Reserva de la Biósfera de Calakmul. Las tarifas y horarios están determinadas por el Ejido Conhuas y la CONANP. Cada cuota se paga directamente en los puntos oficiales de acceso, exclusivamente en efectivo.',
      fees: {
        year: 2025,
        currency: 'MXN',
        paymentMethod: 'Efectivo',
        rates: [
          { entity: 'Ejido Conhuas', concept: 'General', amount: 90.00 },
          { entity: 'CONANP', concept: 'General', amount: 215.00 }
        ]
      },
      schedule: [
        { location: 'Ejido Conhuas', openingTime: '6:00 a.m.', closingTime: '2:30 p.m.' },
        { location: 'CONANP km 20', openingTime: '6:30 a.m.', closingTime: '3:00 p.m.' }
      ],
      lateArrivalProcedure: {
        description: 'En caso de que su llegada se realice fuera del horario establecido, será necesario contactar al hotel para notificar a la caseta y autorizar su acceso.',
        contactPhone: '+52 98 36 89 04 08',
        applicableVehicles: 'Vehículos particulares',
        restrictions: 'Transportadoras y autobuses requieren permisos específicos para ingresar a la reserva.'
      }
    }
  },
  EDZNA: {
    childPolicy: {
      ageRange: '0 a 11 años (11 meses 31 días)',
      status: 'gratis',
      adultAge: '12 años en adelante',
      maxMinorsPerRoom: 2,
      adultExtraPersonCharge: 'debe pagar tarifa de persona extra'
    }
    // Pendiente de tarifas adicionales
  }
}