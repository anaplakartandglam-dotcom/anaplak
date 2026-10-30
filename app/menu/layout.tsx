import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Salon Menu & Prices in Chennai | Anaplak Art & Glam",
    description: "Full salon menu and prices for haircuts, colour, keratin, bridal makeup, facials, nails and waxing at Anaplak Art & Glam, Maduravoyal, Chennai.",
    openGraph: {
        title: "Salon Menu & Prices in Chennai | Anaplak Art & Glam",
        description: "Browse transparent pricing for hair, beauty, skincare, nail, and bridal makeup services at Anaplak Art & Glam in Chennai, Maduravoyal.",
        url: 'https://anaplakartandglamsalon.com/menu',
        siteName: 'Anaplak Art And Glam Salon',
        type: 'website',
        locale: 'en_IN',
        images: [
            {
                url: '/images/brand/anaplak-art-and-glam-logo.jpeg',
                width: 1200,
                height: 630,
                alt: 'Anaplak Salon - Complete Pricing Guide for Premium Beauty Services',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Salon Menu & Prices in Chennai | Anaplak Art & Glam",
        description: "Check pricing for haircuts, hair coloring, bridal makeup, facials, nail services, waxing, and beauty packages in Chennai, Maduravoyal.",
        images: ['/images/brand/anaplak-art-and-glam-logo.jpeg'],
    },
    alternates: {
        canonical: 'https://anaplakartandglamsalon.com/menu',
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

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
