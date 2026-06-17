import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Salon Pricing & Beauty Packages in Chennai | Anaplak Art & Glam",
    description: "View pricing for haircuts, hair coloring, keratin treatments, bridal makeup, facials, nail services, waxing, and beauty packages at Anaplak Art & Glam in Maduravoyal, Chennai.",
    keywords: [
        "salon pricing Chennai",
        "salon price list Chennai",
        "beauty salon prices Chennai",
        "haircut price Chennai",
        "hair styling price Chennai",
        "hair coloring cost Chennai",
        "keratin treatment price Chennai",
        "hair smoothening cost Chennai",
        "bridal makeup price Chennai",
        "bridal package Chennai",
        "facial price Chennai",
        "skin care treatment cost Chennai",
        "nail extension price Chennai",
        "nail art price Chennai",
        "manicure pedicure price Chennai",
        "waxing price Chennai",
        "salon packages Chennai",
        "beauty packages Chennai",
        "Maduravoyal salon pricing",
        "Anaplak Art and Glam pricing"
    ],
    openGraph: {
        title: "Salon Pricing & Beauty Packages in Chennai | Anaplak Art & Glam",
        description: "Browse transparent pricing for hair, beauty, skincare, nail, and bridal makeup services at Anaplak Art & Glam in Chennai.",
        url: 'https://anaplakartandglamsalon.com/pricing',
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
        title: "Salon Pricing & Beauty Packages | Anaplak Art & Glam",
        description: "Check pricing for haircuts, hair coloring, bridal makeup, facials, nail services, waxing, and beauty packages in Chennai.",
        images: ['/logo_new.jpeg'],
    },
    alternates: {
        canonical: 'https://anaplakartandglamsalon.com/pricing',
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
