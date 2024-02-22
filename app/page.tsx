import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import Products from '@/components/products'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='min-h-screen px-6 py-5'>
      <HeroSection />
      <Products />
    </div>
  )
}
