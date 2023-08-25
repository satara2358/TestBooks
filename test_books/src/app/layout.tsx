import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Libros',
  description: 'Libros de lectura',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className='m-auto max-w-screen-lg grid min-h-screen grid-rows-[60px, 1fr, 60px] gap-4 px-4'>
          <nav className='flex items-center text-2xl'>
            Libros
          </nav>
          <section>{children}</section>
          <footer className='flex items-center justify-center'>
            Libros de lectura</footer>
        </main>
      </body>
    </html>
  )
}
