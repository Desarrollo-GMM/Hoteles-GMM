// app/layout.tsx
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import './styles/global.css';

import AOSInit from '@/components/AOSInit'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hoteles Mundo Maya',
  description: 'Proyecto que incluye la arquitectura basica para reutilización en los aplicativos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <AOSInit />
        {children}
      </body>
    </html>
  )
}