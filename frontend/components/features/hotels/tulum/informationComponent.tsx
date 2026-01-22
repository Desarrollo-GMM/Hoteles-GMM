'use client'

interface ComponentProps {

}

const InformationComponent: React.FC<ComponentProps> = () => {
    return (
        <div className="mt-10">
            <div className="font-sans font-semibold text-5xl w-full text-center mt-32 mb-28">Amenidades</div>
            <div className="w-full flex items-center justify-center gap-5">

                <div data-aos="fade-up" className="w-full max-w-sm pl-0 p-6 bg-neutral-primary-soft rounded-2xl shadow-xs bg-gradient-to-tr from-teal-100 to-teal-300">
                    <h5 className="mb-4 text-2xl font-bold font-roboto text-body text-center text-black">Accesibilidad</h5>
                    <ul role="list" className="space-y-2 my-6 pl-6 bg-white rounded-r-2xl py-4 px-2 border-l-0 border-8 border-teal-200">
                        <li className="flex items-center">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Estacionamiento accesible</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Acceso a la propiedad en silla de ruedas</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Inodoros con pasamanos</span>
                        </li>
                        <li className="flex items-center decoration-body">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Salas de reuniones</span>
                        </li>
                        <li className="flex items-center decoration-body">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Salones de banquetes</span>
                        </li>
                        <li className="flex items-center decoration-body">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Complete documentation</span>
                        </li>
                        <li className="flex items-center decoration-body">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">24×7 phone & email support</span>
                        </li>
                    </ul>
                </div>


                <div data-aos="fade-down" className="w-full max-w-sm pl-0 p-6 bg-neutral-primary-soft rounded-2xl shadow-xs bg-gradient-to-tr from-teal-200 to-teal-400">
                    <h5 className="mb-4 text-2xl font-roboto font-bold text-body text-center text-black">Accesibilidad</h5>
                    <ul role="list" className="space-y-2 my-6 pl-6 bg-white rounded-r-2xl py-4 px-2 border-l-0 border-8 border-teal-300">
                        <li className="flex items-center">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Estacionamiento accesible</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Acceso a la propiedad en silla de ruedas</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Inodoros con pasamanos</span>
                        </li>
                        <li className="flex items-center decoration-body">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Salas de reuniones</span>
                        </li>
                        <li className="flex items-center decoration-body">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Salones de banquetes</span>
                        </li>
                        <li className="flex items-center decoration-body">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Complete documentation</span>
                        </li>
                        <li className="flex items-center decoration-body">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">24×7 phone & email support</span>
                        </li>
                    </ul>
                </div>


                <div data-aos="fade-up" className="w-full max-w-sm pl-0 p-6 bg-neutral-primary-soft rounded-2xl shadow-xs bg-gradient-to-tr from-teal-300 to-teal-500">
                    <h5 className="mb-4 text-2xl font-bold font-roboto text-body text-center text-black">Accesibilidad</h5>
                    <ul role="list" className="space-y-2 my-6 pl-6 bg-white rounded-r-2xl py-4 px-2 border-l-0 border-8 border-teal-400">
                        <li className="flex items-center">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Estacionamiento accesible</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Acceso a la propiedad en silla de ruedas</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Inodoros con pasamanos</span>
                        </li>
                        <li className="flex items-center decoration-body">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Salas de reuniones</span>
                        </li>
                        <li className="flex items-center decoration-body">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Salones de banquetes</span>
                        </li>
                        <li className="flex items-center decoration-body">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">Complete documentation</span>
                        </li>
                        <li className="flex items-center decoration-body">
                            <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            <span className="text-body">24×7 phone & email support</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default InformationComponent