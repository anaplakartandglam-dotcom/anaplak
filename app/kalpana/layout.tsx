import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Kalpana - Beauty & Bridal Makeup Artist in Chennai, Maduravoyal | Anaplak Art & Glam",
    description: "Meet Kalpana, Founder of Anaplak Art & Glam in Chennai, Maduravoyal. Known for bridal makeup artistry, hair transformations, and personalized beauty experiences, she leads one of Maduravoyal's trusted beauty destinations.",
    openGraph: {
        title: 'Kalpana - Beauty & Bridal Makeup Artist in Chennai, Maduravoyal | Anaplak Art & Glam',
        description: 'Discover the artistry of Kalpana – the creative force behind Anaplak Salon. Expert bridal makeup artist and hair stylist based in Chennai, Maduravoyal.',
        url: 'https://anaplakartandglamsalon.com/kalpana',
        siteName: 'Anaplak Art And Glam Salon',
        type: 'profile',
        locale: 'en_IN',
        firstName: 'Kalpana',
        images: [
            {
                url: '/logo_updated.webp',
                width: 1200,
                height: 630,
                alt: 'Kalpana - Founder of Anaplak Art And Glam Salon',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kalpana - Beauty & Bridal Makeup Artist in Chennai, Maduravoyal | Anaplak Art & Glam',
        description: 'Meet Kalpana – the visionary makeup artist and founder behind Anaplak Art And Glam. Expert bridal makeup & hair styling in Chennai, Maduravoyal.',
        images: ['/logo_new.jpeg'],
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
