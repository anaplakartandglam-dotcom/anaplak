import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Kalpana — Bridal Makeup Artist in Chennai | Anaplak",
    description: "Meet Kalpana, founder of Anaplak Art & Glam, Maduravoyal. Bridal makeup artistry, hair transformations and personalised beauty care in Chennai.'s trusted beauty destinations.",
    openGraph: {
        title: 'Kalpana — Bridal Makeup Artist in Chennai | Anaplak',
        description: 'Discover the artistry of Kalpana – the creative force behind Anaplak Salon. Expert bridal makeup artist and hair stylist based in Chennai, Maduravoyal.',
        url: 'https://anaplakartandglamsalon.com/kalpana',
        siteName: 'Anaplak Art And Glam Salon',
        type: 'profile',
        locale: 'en_IN',
        firstName: 'Kalpana',
        images: [
            {
                url: '/images/brand/anaplak-art-and-glam-logo.webp',
                width: 1200,
                height: 630,
                alt: 'Kalpana - Founder of Anaplak Art And Glam Salon',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kalpana — Bridal Makeup Artist in Chennai | Anaplak',
        description: 'Meet Kalpana – the visionary makeup artist and founder behind Anaplak Art And Glam. Expert bridal makeup & hair styling in Chennai, Maduravoyal.',
        images: ['/images/brand/anaplak-art-and-glam-logo.jpeg'],
    },
    alternates: {
        canonical: 'https://anaplakartandglamsalon.com/kalpana',
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

export default function KalpanaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
