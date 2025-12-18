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
  title: 'Best Hair & Beauty Salon in Maduravoyal, Chennai | Anaplak Art and Glam',
  description: 'Top-rated salon in Maduravoyal with 4.9★ rating! Expert bridal makeup, hair styling, coloring, keratin treatment, facials & spa. 16+ years experience. Walk-ins welcome. Book online or call +91 98400 88867. Open 10 AM - 9 PM daily.',
  keywords: [
    'best salon in Maduravoyal',
    'hair salon near me Chennai',
    'bridal makeup artist Maduravoyal',
    'top rated beauty salon Chennai',
    'hair coloring salon Maduravoyal',
    'keratin treatment Chennai',
    'facial spa Maduravoyal',
    'salon near MMDA Colony',
    'Anaplak salon',
  ],
  openGraph: {
    title: 'Best Hair & Beauty Salon in Maduravoyal | 4.9★ Rated | Anaplak',
    description: '🌟 Top-rated salon with 16+ years experience. Bridal makeup, hair styling, coloring, facials & more. Book now! Open daily 10 AM - 9 PM.',
    url: 'https://anaplakartandglamsalon.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anaplak Art and Glam Salon - Best Beauty Salon in Maduravoyal, Chennai',
      },
    ],
  },
  alternates: {
    canonical: 'https://anaplakartandglamsalon.com',
  },
}

// Enable ISR with revalidation
export const revalidate = 60 // Revalidate every minute for fresh reviews

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
