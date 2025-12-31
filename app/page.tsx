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

const ServicesShowcase = dynamic(() => import("@/components/services-showcase"), {
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
  title: 'Best Premium Hair Salon & Bridal Makeup Maduravoyal Chennai | Anaplak Art & Glam ⭐4.9',
  description: '🏆 #1 Rated Salon in Maduravoyal! ✨ Expert Bridal Makeup, Hair Coloring, Keratin Treatment, Facials & Beauty Treatments. 16+ Years Experience | 5600+ Happy Customers | Premium Products | Ground Floor Parking. Book Now ☎️ +91-9840088867 | Open 10AM-9PM Daily',
  keywords: [
    // Primary Commercial Keywords
    'best bridal makeup artist Chennai',
    'bridal makeup Maduravoyal',
    'premium hair salon near me Chennai',
    'top rated salon Maduravoyal',
    'luxury salon Chennai',

    // Service Keywords
    'keratin treatment Chennai',
    'hair coloring specialist Maduravoyal',
    'bridal makeup packages Chennai',
    'facial treatment Chennai',
    'hair treatment Maduravoyal',
    'wedding makeup artist Chennai',

    // Location Keywords
    'salon MMDA Colony',
    'beauty parlour Maduravoyal',
    'salon near me Chennai 600095',
    'CDN Nagar salon',

    // Long-tail Keywords
    'best salon for bridal makeup in Chennai',
    'affordable luxury salon Maduravoyal',
    'salon with parking Chennai',
    'premium beauty services Maduravoyal',
  ],
  openGraph: {
    title: '🌟 Best Premium Hair Salon & Bridal Makeup in Maduravoyal | 4.9★ | Anaplak',
    description: '💎 Premium Beauty Services | Bridal Makeup Packages | Hair Coloring & Keratin | Facials & Beauty Treatments | 16+ Years Experience | Book Your Appointment Today!',
    url: 'https://anaplakartandglamsalon.com',
    siteName: 'Anaplak Art & Glam Salon',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anaplak Art and Glam Salon - Best Bridal Makeup & Beauty Salon in Maduravoyal, Chennai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Premium Hair Salon & Bridal Makeup Maduravoyal | Anaplak ⭐4.9',
    description: '💎 Premium Beauty Services | Expert Bridal Makeup | Hair Coloring | Facials | Book Now!',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://anaplakartandglamsalon.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      <ServicesShowcase />
      <Testimonials />
      <Footer />
    </main>
  )
}
