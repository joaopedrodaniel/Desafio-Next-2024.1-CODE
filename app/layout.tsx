import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  style: "normal",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Guitar Tone',
  description: 'Uma empresa que vende instrumentos musicais de muita qualidade!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        </body>
    </html>
  )
}
