'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MdPhoneInTalk } from 'react-icons/md'
import { IMAGES_ROUTES, EXTERNAL_LINKS } from '@/app/constants/routes'
import WhatsappIcon from '@/components/ui/icons/whatsapp'

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(' ')
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0]
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.18, rootMargin: '120px 0px -80px 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, inView }
}

const EXTERNAL_LINKS_POLICY = [
  { label: 'Aviso de Privacidad', href: '#' },
  { label: 'Políticas de Reservas', href: '#' },
  { label: 'Términos y Condiciones', href: '#' },
]

export default function FooterComponent() {
  const { ref, inView } = useInView<HTMLElement>()
  const currentYear = new Date().getFullYear()

  return (
    <footer ref={ref} className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute -top-8 left-0 right-0 rotate-180">
        <svg
          viewBox="0 0 1440 140"
          className="block w-full md:h-32"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C240,140 480,20 720,80 C960,140 1200,20 1440,80 L1440,140 L0,140 Z"
            fill="rgb(15 23 42)"
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div
          className={cx(
            'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4',
            'transition-[transform,opacity,filter] duration-700 ease-out will-change-transform',
            inView
              ? 'opacity-100 translate-y-0 blur-0'
              : 'opacity-0 translate-y-4 blur-[2px]'
          )}
        >
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="relative h-20 w-full">
                <Image
                  src={IMAGES_ROUTES.HOTEL_LOGO.WHITE}
                  alt="Grupo Mundo Maya"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="h-px w-full bg-white/10 my-4" />
              <p className="text-sm sm:text-[15px] text-white/80 leading-7 text-justify">
                Hoteles Grupo Mundo Maya - Ofreciendo experiencias únicas de hospitalidad
                y confort en los destinos más hermosos.
              </p>
            </div>
          </div>

          <div className="space-y-auto">
            <div className="group w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <a
                href={`tel:${EXTERNAL_LINKS.CALL_CENTER_CELL}`}
                className=""
              >
                <div className="inline-block text-xs font-extrabold tracking-[0.22em] text-white/70 mb-3">
                  TELÉFONO
                </div>
                <div className='flex justify-between'>
                  <div className="text-sm sm:text-[15px] font-semibold text-white/90">
                    <span>{EXTERNAL_LINKS.CALL_CENTER_CELL}</span>
                  </div>
                  <span className="text-white/55 group-hover:text-white/80 transition-colors">
                    <MdPhoneInTalk style={{ fontSize: '28px' }} />
                  </span>
                </div>

              </a>
              <div className="h-px w-full bg-white/10 my-4" />
              <a
                href={`https://wa.me/${EXTERNAL_LINKS.CALL_CENTER_WHATSAPP}`}
                className=""
              >
                <div className="inline-block text-xs font-extrabold tracking-[0.22em] text-white/70 mb-3">
                  WHATSAPP
                </div>
                <div className='flex justify-between'>
                  <div className="text-sm sm:text-[15px] font-semibold text-white/90">
                    <span>{EXTERNAL_LINKS.CALL_CENTER_CELL}</span>
                  </div>
                  <span className="text-white/55 group-hover:text-white/80 transition-colors">
                    <WhatsappIcon className="text-2xl" />

                  </span>
                </div>

              </a>
            </div>

            <div className="grid grid-cols-4 gap-2 mt-4">
              <a
                href="https://www.facebook.com/HotelesGrupoMundoMaya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-blue-600/90 border border-white/10 p-3 rounded-full transform hover:scale-110 transition-all duration-300 mx-auto"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://x.com/HGrupomundomaya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-black/90 border border-white/10 p-3 rounded-full transform hover:scale-110 transition-all duration-300 mx-auto"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/hotelesgrupomundomaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-pink-600/90 border border-white/10 p-3 rounded-full transform hover:scale-110 transition-all duration-300 mx-auto"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="mailto:contacto@grupomundomaya.com"
                className="bg-white/5 hover:bg-red-600/90 border border-white/10 p-3 rounded-full transform hover:scale-110 transition-all duration-300 mx-auto"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition-colors h-full">
              <p className="text-xs font-extrabold tracking-[0.22em] text-white/70 mb-5">
                LEGAL
              </p>
              <ul className="space-y-3 ">
                {EXTERNAL_LINKS_POLICY.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-start gap-2 text-sm sm:text-[15px] text-white/75 hover:text-white transition-colors underline decoration-white/10 underline-offset-4 hover:decoration-white/40"
                    >
                      <span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-white/25 group-hover:bg-white/70 transition-colors" />
                      <span className="leading-6 group-hover:translate-x-0.5 transition-transform">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
                <li className=''>
                  <Image src={IMAGES_ROUTES.MADE_IN_MEXICO} alt='Hecho en México' className='max-h-[70] max-w-[70] mx-auto hover:scale-105 hover:transform duration-500' width={1000} height={1000}></Image>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition-colors h-full flex flex-col">
              <div className="grid grid-cols-1 gap-4 flex-1 items-center">
                {IMAGES_ROUTES.FOOTER.map((image, index) => (
                  <a
                    key={index}
                    href="#"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center rounded-xl border h-32 border-white/10 bg-white/0 hover:bg-white/5 hover:border-white/20 transition-colors"
                  >
                    <img
                      src={image.src}
                      alt={`Logo relacionado ${index + 1}`}
                      className="h-full sm:h-14 w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-white/10" />
        <div className="mt-6 flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="text-sm text-white/60 flex align-middle my-auto">
            <span> © {currentYear} Grupo Mundo Maya. Todos los derechos reservados.</span>
          </div>
          <div className="text-sm text-white/60">
            Aviso de privacidad · Términos
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float1 {
          0% { transform: translate3d(0,0,0) rotate(0deg); opacity: .9; }
          50% { transform: translate3d(-10px, 8px, 0) rotate(6deg); opacity: 1; }
          100% { transform: translate3d(0,0,0) rotate(0deg); opacity: .9; }
        }
        @keyframes float2 {
          0% { transform: translate3d(0,0,0) rotate(0deg); opacity: .85; }
          50% { transform: translate3d(12px, -10px, 0) rotate(-6deg); opacity: 1; }
          100% { transform: translate3d(0,0,0) rotate(0deg); opacity: .85; }
        }
      `}</style>
    </footer>
  )
}