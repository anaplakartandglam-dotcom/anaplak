import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Salon Menu & Prices in Chennai, Maduravoyal | Anaplak Art & Glam",
    description: "View the full salon menu and pricing for haircuts, hair coloring, keratin treatments, bridal makeup, facials, nail services, waxing, and beauty packages at Anaplak Art & Glam in Chennai, Maduravoyal.",
    openGraph: {
        title: "Salon Menu & Prices in Chennai, Maduravoyal | Anaplak Art & Glam",
        description: "Browse transparent pricing for hair, beauty, skincare, nail, and bridal makeup services at Anaplak Art & Glam in Chennai, Maduravoyal.",
        url: 'https://anaplakartandglamsalon.com/menu',
        siteName: 'Anaplak Art And Glam Salon',
        type: 'website',
        locale: 'en_IN',
        images: [
            {
                url: '/logo_new.jpeg',
                width: 1200,
                height: 630,
                alt: 'Anaplak Salon - Complete Pricing Guide for Premium Beauty Services',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Salon Menu & Prices in Chennai, Maduravoyal | Anaplak Art & Glam",
        description: "Check pricing for haircuts, hair coloring, bridal makeup, facials, nail services, waxing, and beauty packages in Chennai, Maduravoyal.",
        images: ['/logo_new.jpeg'],
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
