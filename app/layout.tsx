import type { Metadata } from 'next'
import { Righteous, Roboto } from 'next/font/google'
import './globals.css'

const righteous = Righteous({
  weight: '400',
  style: "normal",
  subsets: ['latin']
})

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
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
