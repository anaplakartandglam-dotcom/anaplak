import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import About from "@/components/about"
import WhyChooseUs from '@/components/why-choose-us'
import CTASection from '@/components/ui/CTASection'

// Dynamic imports for below-the-fold components with loading states
// const Pricing = dynamic(() => import("@/components/pricing"), {
//   loading: () => <div className="min-h-[400px] bg-black" />,
//   ssr: true,
// })

// const Services = dynamic(() => import("@/components/services"), {
//   loading: () => <div className="min-h-[400px] bg-black" />,
//   ssr: true,
// })

// const CircularSlider = dynamic(() => import("@/components/circular-slider"), {
//   loading: () => <div className="min-h-[500px] bg-black" />,
//   ssr: true,
// })

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

// const Contact = dynamic(() => import("@/components/contact"), {
//   loading: () => <div className="min-h-[500px] bg-black" />,
//   ssr: true,
// })

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="min-h-[300px] bg-black" />,
  ssr: true,
})

const VideoParallax = dynamic(() => import("@/components/video_parrlex"), {
  loading: () => <div className="min-h-[600px] bg-black" />,
  ssr: true,
})

const BlogPreview = dynamic(() => import("@/components/sections/BlogPreview"), {
  loading: () => <div className="min-h-[500px] bg-black" />,
  ssr: true,
})

export const metadata: Metadata = {
  title: 'Luxury Hair, Skin & Bridal Salon in Maduravoyal, Chennai | Anaplak',
  description: '✨ Where beauty meets confidence. 💫 Experience personalised hair, skin, nail and bridal services in Maduravoyal. 🤝 Trusted by 1000+ happy clients for stunning transformations. ☎️ Book your appointment today +91-9840088867 | Open 10AM-9PM Daily',
  keywords: [
    // Core Business Keywords
    'luxury salon Maduravoyal',
    'beauty salon Maduravoyal',
    'best beauty salon Maduravoyal',
    'premium salon Maduravoyal',
    'hair and beauty salon Maduravoyal',

    // Secondary Location Keywords
    'luxury salon Chennai',
    'beauty salon Chennai',
    'premium beauty salon Chennai',
    'top rated salon Chennai',

    // High-Value Service Categories
    'bridal makeup artist Maduravoyal',
    'bridal makeup Chennai',
    'hair salon Maduravoyal',
    'hair coloring Maduravoyal',
    'keratin treatment Maduravoyal',
    'facial treatments Maduravoyal',

    // Brand Positioning
    'premium beauty services Maduravoyal',
    'luxury hair and skin salon',
    'bridal and beauty studio Maduravoyal',
    'hair skin and makeup experts Chennai',

    // Nearby Area Keywords
    'beauty salon MMDA Colony',
    'beauty salon Chennai 600095'
  ],
  openGraph: {
    title: '🌟 Best Premium Hair Salon & Bridal Makeup in Maduravoyal | ⭐4.9 | Anaplak',
    description: '💎 Premium Beauty Services | Bridal Makeup Packages | Hair Coloring & Keratin | Facials & Beauty Treatments | 6+ Years Experience | Book Your Appointment Today!',
    url: 'https://anaplakartandglamsalon.com',
    siteName: 'Anaplak Art And Glam Salon',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/logo_updated.webp',
        width: 1200,
        height: 630,
        alt: 'Anaplak Art And Glam Salon - Best Bridal Makeup & Beauty Salon in Maduravoyal, Chennai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🌟 Best Premium Hair Salon & Bridal Makeup Maduravoyal | ⭐4.9 | Anaplak',
    description: '💎 Premium Beauty Services | Bridal Makeup Packages | Hair Coloring & Keratin | Facials & Beauty Treatments | 6+ Years Experience | Book Your Appointment Today!',
    images: ['/logo_updated.webp'],
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
      <WhyChooseUs />
      <ServicesShowcase />
      <About />
      <Testimonials />
      <VideoParallax />
      <Features />
      <BlogPreview />
      <CTASection />
      {/* <CircularSlider /> */}
      <Footer />
    </main>
  )
}
