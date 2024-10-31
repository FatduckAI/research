import Navbar from '@/components/NavBar'
import { Lora, Playfair_Display } from 'next/font/google'
import './globals.css'
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
})

export const metadata = {
  title: 'Fatduck Research',
  description: 'Fatduck research aims to publish latest findings about our AI and social experiments. We aim to bring the solarpunk ethos to AI development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} font-serif bg-slate-50`}>
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}