import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import About from "@/components/about"
import WhyChooseUs from '@/components/why-choose-us'
import CTASection from '@/components/ui/CTASection'
import PeopleAlsoAsk from '@/components/people-also-ask'

export const metadata: Metadata = {
  title: "Best Hair, Skin & Bridal Salon in Chennai, Maduravoyal | Anaplak Art & Glam",
  description: "Premium hair, skin, nail and bridal salon in Maduravoyal, Chennai. Personalised services trusted by 1000+ happy clients. Open daily 10AM-9PM. Book your appointment today.",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://anaplakartandglamsalon.com',
    siteName: 'Anaplak Art & Glam',
    title: "Best Hair, Skin & Bridal Salon in Chennai, Maduravoyal | Anaplak Art & Glam",
    description: 'Experience luxury beauty services at Anaplak Salon in Chennai, Maduravoyal. Expert bridal makeup, hair styling, coloring, facials & more. 6+ years of excellence. Book now!',
    images: [
      {
        url: '/logo_updated.webp',
        width: 1200,
        height: 630,
        alt: 'Anaplak Art & Glam - Premium Beauty Services in Chennai, Maduravoyal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Hair, Skin & Bridal Salon in Chennai, Maduravoyal | Anaplak Art & Glam",
    description: 'Experience luxury beauty services in Chennai, Maduravoyal. Expert bridal makeup, hair styling, facials & more. Book your appointment today!',
    images: ['/logo_updated.webp'],
  },
  alternates: {
    canonical: 'https://anaplakartandglamsalon.com',
  },
}

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
      <PeopleAlsoAsk />
      <BlogPreview />
      <CTASection />
      {/* <CircularSlider /> */}
      <Footer />
    </main>
  )
}
