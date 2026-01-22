'use client'
import Image from "next/image"

interface ComponentProps {

}

const PromotionComponent: React.FC<ComponentProps> = () => {
    return (
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 px-4 lg:mt-24 md:mt-16 md:px-8 lg:px-20 py-12">
            <a href="#" data-aos="fade-up" className="grid grayscale hover:grayscale-0 transition-all duration-300 md:grid-cols-1 lg:grid-cols-2 mx-auto items-center border border-3 border-gray-300 rounded-xl shadow-xs md:flex-row md:max-w-5xl hover:scale-105 hover:shadow-xl transition duration-200">
                <Image 
                    className="object-cover min-w-40 min-h-56 rounded-xl mb-4 md:mb-0" 
                    src="/images/68686f12f595865f823d944c_4 razones_A 2-p-2000.png" alt="" width={2000} height={3000}></Image>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-2 font-bold text-smtracking-tight text-heading">Tipo de habitación:</p>
                    <p className="font-bold text-sm">Fecha limite de viaje <span className="font-light">30 Noviembre 2026.</span></p>
                    <p className="font-bold text-sm">Estadía estimada minima: <span className="font-light">4 noches consecutivas.</span></p>
                    <p className="font-bold text-sm">Terminos y condiciones</p>
                    <ul>
                        <li className="font-extralight text-xs text-justify">Haz tu reserva en las fechas (7,8,9, 28 y 29 de julio) (20 y 21 de agosto).</li>
                        <li className="font-extralight text-xs text-justify">Reserva mínima con 15 días de anticipación.</li>
                        <li className="font-extralight text-xs text-justify">Hospedaje gratuito aplicable en la cuarta noche.</li>
                        <li className="font-extralight text-xs text-justify">Promoción exclusiva en reservas en línea (pagina web oficial) o vía Call center.</li>
                        <li className="font-extralight text-xs text-justify">Sujeto a disponibilidad.</li>
                        <li className="font-extralight text-xs text-justify">No acumulable con otras promociones, descuentos o beneficios.</li>
                        <li className="font-extralight text-xs text-justify">Promoción no reembolsable, una vez confirmada la reserva.</li>
                        <li className="font-extralight text-xs text-justify">Válido para llegadas únicamente de lunes a jueves.</li>
                        <li className="font-extralight text-xs text-justify">Máximo 2 habitaciones por cupón.</li>
                        <li className="font-extralight text-xs text-justify">Los cambios y cancelaciones estarán sujetas a las políticas de cada hotel participante.</li>
                        <li className="font-extralight text-xs text-justify">No aplica en temporada alta: Días festivos, puentes y vacaciones de invierno.</li>
                    </ul>
                    <div className="flex justify-between align-middle">
                        <p className="font-bold text-sm my-auto">Call center: 55 4440 0662</p>

                        <button
                           className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                            Página web
                            <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </button>
                    </div>
                </div>
            </a>
            <a href="#" data-aos="fade-up" className="grid grayscale hover:grayscale-0 transition-all duration-300 md:grid-cols-1 lg:grid-cols-2 mx-auto items-center border border-3 border-gray-300 rounded-xl shadow-xs md:flex-row md:max-w-5xl hover:scale-105 hover:shadow-xl transition duration-200">
                <Image 
                    className="object-cover min-w-40 min-h-56 rounded-xl mb-4 md:mb-0" 
                    src="/images/68686f12f595865f823d944c_4 razones_A 2-p-2000.png" alt="" width={2000} height={3000}></Image>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-2 font-bold text-smtracking-tight text-heading">Tipo de habitación:</p>
                    <p className="font-bold text-sm">Fecha limite de viaje <span className="font-light">30 Noviembre 2026.</span></p>
                    <p className="font-bold text-sm">Estadía estimada minima: <span className="font-light">4 noches consecutivas.</span></p>
                    <p className="font-bold text-sm">Terminos y condiciones</p>
                    <ul>
                        <li className="font-extralight text-xs text-justify">Haz tu reserva en las fechas (7,8,9, 28 y 29 de julio) (20 y 21 de agosto).</li>
                        <li className="font-extralight text-xs text-justify">Reserva mínima con 15 días de anticipación.</li>
                        <li className="font-extralight text-xs text-justify">Hospedaje gratuito aplicable en la cuarta noche.</li>
                        <li className="font-extralight text-xs text-justify">Promoción exclusiva en reservas en línea (pagina web oficial) o vía Call center.</li>
                        <li className="font-extralight text-xs text-justify">Sujeto a disponibilidad.</li>
                        <li className="font-extralight text-xs text-justify">No acumulable con otras promociones, descuentos o beneficios.</li>
                        <li className="font-extralight text-xs text-justify">Promoción no reembolsable, una vez confirmada la reserva.</li>
                        <li className="font-extralight text-xs text-justify">Válido para llegadas únicamente de lunes a jueves.</li>
                        <li className="font-extralight text-xs text-justify">Máximo 2 habitaciones por cupón.</li>
                        <li className="font-extralight text-xs text-justify">Los cambios y cancelaciones estarán sujetas a las políticas de cada hotel participante.</li>
                        <li className="font-extralight text-xs text-justify">No aplica en temporada alta: Días festivos, puentes y vacaciones de invierno.</li>
                    </ul>
                    <div className="flex justify-between align-middle">
                        <p className="font-bold text-sm my-auto">Call center: 55 4440 0662</p>

                        <button
                           className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                            Página web
                            <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </button>
                    </div>
                </div>
            </a>
            <a href="#" data-aos="fade-up" className="grid grayscale hover:grayscale-0 transition-all duration-300 md:grid-cols-1 lg:grid-cols-2 mx-auto items-center border border-3 border-gray-300 rounded-xl shadow-xs md:flex-row md:max-w-5xl hover:scale-105 hover:shadow-xl transition duration-200">
                <Image 
                    className="object-cover min-w-40 min-h-56 rounded-xl mb-4 md:mb-0" 
                    src="/images/68686f12f595865f823d944c_4 razones_A 2-p-2000.png" alt="" width={2000} height={3000}></Image>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-2 font-bold text-smtracking-tight text-heading">Tipo de habitación:</p>
                    <p className="font-bold text-sm">Fecha limite de viaje <span className="font-light">30 Noviembre 2026.</span></p>
                    <p className="font-bold text-sm">Estadía estimada minima: <span className="font-light">4 noches consecutivas.</span></p>
                    <p className="font-bold text-sm">Terminos y condiciones</p>
                    <ul>
                        <li className="font-extralight text-xs text-justify">Haz tu reserva en las fechas (7,8,9, 28 y 29 de julio) (20 y 21 de agosto).</li>
                        <li className="font-extralight text-xs text-justify">Reserva mínima con 15 días de anticipación.</li>
                        <li className="font-extralight text-xs text-justify">Hospedaje gratuito aplicable en la cuarta noche.</li>
                        <li className="font-extralight text-xs text-justify">Promoción exclusiva en reservas en línea (pagina web oficial) o vía Call center.</li>
                        <li className="font-extralight text-xs text-justify">Sujeto a disponibilidad.</li>
                        <li className="font-extralight text-xs text-justify">No acumulable con otras promociones, descuentos o beneficios.</li>
                        <li className="font-extralight text-xs text-justify">Promoción no reembolsable, una vez confirmada la reserva.</li>
                        <li className="font-extralight text-xs text-justify">Válido para llegadas únicamente de lunes a jueves.</li>
                        <li className="font-extralight text-xs text-justify">Máximo 2 habitaciones por cupón.</li>
                        <li className="font-extralight text-xs text-justify">Los cambios y cancelaciones estarán sujetas a las políticas de cada hotel participante.</li>
                        <li className="font-extralight text-xs text-justify">No aplica en temporada alta: Días festivos, puentes y vacaciones de invierno.</li>
                    </ul>
                    <div className="flex justify-between align-middle">
                        <p className="font-bold text-sm my-auto">Call center: 55 4440 0662</p>

                        <button
                           className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                            Página web
                            <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </button>
                    </div>
                </div>
            </a>
            <a href="#" data-aos="fade-up" className="grid grayscale hover:grayscale-0 transition-all duration-300 md:grid-cols-1 lg:grid-cols-2 mx-auto items-center border border-3 border-gray-300 rounded-xl shadow-xs md:flex-row md:max-w-5xl hover:scale-105 hover:shadow-xl transition duration-200">
                <Image 
                    className="object-cover min-w-40 min-h-56 rounded-xl mb-4 md:mb-0" 
                    src="/images/68686f12f595865f823d944c_4 razones_A 2-p-2000.png" alt="" width={2000} height={3000}></Image>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-2 font-bold text-smtracking-tight text-heading">Tipo de habitación:</p>
                    <p className="font-bold text-sm">Fecha limite de viaje <span className="font-light">30 Noviembre 2026.</span></p>
                    <p className="font-bold text-sm">Estadía estimada minima: <span className="font-light">4 noches consecutivas.</span></p>
                    <p className="font-bold text-sm">Terminos y condiciones</p>
                    <ul>
                        <li className="font-extralight text-xs text-justify">Haz tu reserva en las fechas (7,8,9, 28 y 29 de julio) (20 y 21 de agosto).</li>
                        <li className="font-extralight text-xs text-justify">Reserva mínima con 15 días de anticipación.</li>
                        <li className="font-extralight text-xs text-justify">Hospedaje gratuito aplicable en la cuarta noche.</li>
                        <li className="font-extralight text-xs text-justify">Promoción exclusiva en reservas en línea (pagina web oficial) o vía Call center.</li>
                        <li className="font-extralight text-xs text-justify">Sujeto a disponibilidad.</li>
                        <li className="font-extralight text-xs text-justify">No acumulable con otras promociones, descuentos o beneficios.</li>
                        <li className="font-extralight text-xs text-justify">Promoción no reembolsable, una vez confirmada la reserva.</li>
                        <li className="font-extralight text-xs text-justify">Válido para llegadas únicamente de lunes a jueves.</li>
                        <li className="font-extralight text-xs text-justify">Máximo 2 habitaciones por cupón.</li>
                        <li className="font-extralight text-xs text-justify">Los cambios y cancelaciones estarán sujetas a las políticas de cada hotel participante.</li>
                        <li className="font-extralight text-xs text-justify">No aplica en temporada alta: Días festivos, puentes y vacaciones de invierno.</li>
                    </ul>
                    <div className="flex justify-between align-middle">
                        <p className="font-bold text-sm my-auto">Call center: 55 4440 0662</p>

                        <button
                           className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                            Página web
                            <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </button>
                    </div>
                </div>
            </a>
            <a href="#" data-aos="fade-up" className="grid grayscale hover:grayscale-0 transition-all duration-300 md:grid-cols-1 lg:grid-cols-2 mx-auto items-center border border-3 border-gray-300 rounded-xl shadow-xs md:flex-row md:max-w-5xl hover:scale-105 hover:shadow-xl transition duration-200">
                <Image 
                    className="object-cover min-w-40 min-h-56 rounded-xl mb-4 md:mb-0" 
                    src="/images/68686f12f595865f823d944c_4 razones_A 2-p-2000.png" alt="" width={2000} height={3000}></Image>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-2 font-bold text-smtracking-tight text-heading">Tipo de habitación:</p>
                    <p className="font-bold text-sm">Fecha limite de viaje <span className="font-light">30 Noviembre 2026.</span></p>
                    <p className="font-bold text-sm">Estadía estimada minima: <span className="font-light">4 noches consecutivas.</span></p>
                    <p className="font-bold text-sm">Terminos y condiciones</p>
                    <ul>
                        <li className="font-extralight text-xs text-justify">Haz tu reserva en las fechas (7,8,9, 28 y 29 de julio) (20 y 21 de agosto).</li>
                        <li className="font-extralight text-xs text-justify">Reserva mínima con 15 días de anticipación.</li>
                        <li className="font-extralight text-xs text-justify">Hospedaje gratuito aplicable en la cuarta noche.</li>
                        <li className="font-extralight text-xs text-justify">Promoción exclusiva en reservas en línea (pagina web oficial) o vía Call center.</li>
                        <li className="font-extralight text-xs text-justify">Sujeto a disponibilidad.</li>
                        <li className="font-extralight text-xs text-justify">No acumulable con otras promociones, descuentos o beneficios.</li>
                        <li className="font-extralight text-xs text-justify">Promoción no reembolsable, una vez confirmada la reserva.</li>
                        <li className="font-extralight text-xs text-justify">Válido para llegadas únicamente de lunes a jueves.</li>
                        <li className="font-extralight text-xs text-justify">Máximo 2 habitaciones por cupón.</li>
                        <li className="font-extralight text-xs text-justify">Los cambios y cancelaciones estarán sujetas a las políticas de cada hotel participante.</li>
                        <li className="font-extralight text-xs text-justify">No aplica en temporada alta: Días festivos, puentes y vacaciones de invierno.</li>
                    </ul>
                    <div className="flex justify-between align-middle">
                        <p className="font-bold text-sm my-auto">Call center: 55 4440 0662</p>

                        <button
                           className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                            Página web
                            <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </button>
                    </div>
                </div>
            </a>
            <a href="#" data-aos="fade-up" className="grid grayscale hover:grayscale-0 transition-all duration-300 md:grid-cols-1 lg:grid-cols-2 mx-auto items-center border border-3 border-gray-300 rounded-xl shadow-xs md:flex-row md:max-w-5xl hover:scale-105 hover:shadow-xl transition duration-200">
                <Image 
                    className="object-cover min-w-40 min-h-56 rounded-xl mb-4 md:mb-0" 
                    src="/images/68686f12f595865f823d944c_4 razones_A 2-p-2000.png" alt="" width={2000} height={3000}></Image>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-2 font-bold text-smtracking-tight text-heading">Tipo de habitación:</p>
                    <p className="font-bold text-sm">Fecha limite de viaje <span className="font-light">30 Noviembre 2026.</span></p>
                    <p className="font-bold text-sm">Estadía estimada minima: <span className="font-light">4 noches consecutivas.</span></p>
                    <p className="font-bold text-sm">Terminos y condiciones</p>
                    <ul>
                        <li className="font-extralight text-xs text-justify">Haz tu reserva en las fechas (7,8,9, 28 y 29 de julio) (20 y 21 de agosto).</li>
                        <li className="font-extralight text-xs text-justify">Reserva mínima con 15 días de anticipación.</li>
                        <li className="font-extralight text-xs text-justify">Hospedaje gratuito aplicable en la cuarta noche.</li>
                        <li className="font-extralight text-xs text-justify">Promoción exclusiva en reservas en línea (pagina web oficial) o vía Call center.</li>
                        <li className="font-extralight text-xs text-justify">Sujeto a disponibilidad.</li>
                        <li className="font-extralight text-xs text-justify">No acumulable con otras promociones, descuentos o beneficios.</li>
                        <li className="font-extralight text-xs text-justify">Promoción no reembolsable, una vez confirmada la reserva.</li>
                        <li className="font-extralight text-xs text-justify">Válido para llegadas únicamente de lunes a jueves.</li>
                        <li className="font-extralight text-xs text-justify">Máximo 2 habitaciones por cupón.</li>
                        <li className="font-extralight text-xs text-justify">Los cambios y cancelaciones estarán sujetas a las políticas de cada hotel participante.</li>
                        <li className="font-extralight text-xs text-justify">No aplica en temporada alta: Días festivos, puentes y vacaciones de invierno.</li>
                    </ul>
                    <div className="flex justify-between align-middle">
                        <p className="font-bold text-sm my-auto">Call center: 55 4440 0662</p>

                        <button
                           className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                            Página web
                            <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </button>
                    </div>
                </div>
            </a>

        </div>



    )
}

export default PromotionComponent

