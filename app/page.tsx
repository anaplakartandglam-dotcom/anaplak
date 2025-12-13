import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import About from "@/components/about"

// Dynamic imports for below-the-fold components with loading states
const Pricing = dynamic(() => import("@/components/pricing"), {
  loading: () => <div className="min-h-[400px] bg-black" />,
  ssr: true,
})

const Services = dynamic(() => import("@/components/services"), {
  loading: () => <div className="min-h-[400px] bg-black" />,
  ssr: true,
})

const CircularSlider = dynamic(() => import("@/components/circular-slider"), {
  loading: () => <div className="min-h-[500px] bg-black" />,
  ssr: true,
})

const Team = dynamic(() => import("@/components/team"), {
  loading: () => <div className="min-h-[600px] bg-black" />,
  ssr: true,
})

const Testimonials = dynamic(() => import("@/components/testimonials"), {
  loading: () => <div className="min-h-[400px] bg-black" />,
  ssr: true,
})

const Features = dynamic(() => import("@/components/features"), {
  loading: () => <div className="min-h-[500px] bg-black" />,
  ssr: true,
})

const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <div className="min-h-[500px] bg-black" />,
  ssr: true,
})

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="min-h-[300px] bg-black" />,
  ssr: true,
})

const VideoParallax = dynamic(() => import("@/components/video_parrlex"), {
  loading: () => <div className="min-h-[600px] bg-black" />,
  ssr: true,
})

export const metadata: Metadata = {
  title: 'Home',
  description: 'ANAPLAK Art and Glam Salon - Premium hair styling, cuts, coloring, and beauty services in Maduravoyal, Chennai.',
}

// Enable ISR with revalidation
export const revalidate = 3600 // Revalidate every hour

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSlider />
      <About />
      <VideoParallax />
      <Features />
      <CircularSlider />
      <Team />
      <Testimonials />
      <Footer />
    </main>
  )
}
