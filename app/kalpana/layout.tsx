import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Kalpana | Founder at Anaplak Art & Glam Chennai",
    description: "Meet Kalpana, Founder of Anaplak Art & Glam in Chennai. Known for bridal makeup artistry, hair transformations, and personalized beauty experiences, she leads one of Maduravoyal's trusted beauty destinations.",
    keywords: [
        "Kalpana",
        "Kalpana Chennai",
        "Kalpana makeup artist",
        "Kalpana bridal makeup artist Chennai",
        "Founder Anaplak Art and Glam",
        "bridal makeup artist Chennai",
        "professional makeup artist Chennai",
        "hair stylist Chennai",
        "beauty expert Chennai",
        "bridal beauty specialist Chennai",
        "makeup artist Maduravoyal",
        "beauty entrepreneur Chennai",
        "Anaplak Art and Glam founder",
        "salon founder Chennai",
        "bridal makeover Chennai",
        "hair and makeup expert Chennai"
    ],
    openGraph: {
        title: 'Kalpana | Founder | Anaplak Art And Glam',
        description: 'Discover the artistry of Kalpana – the creative force behind Anaplak Salon. Expert bridal makeup artist and hair stylist based in Chennai.',
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
        title: 'Kalpana | Founder | Anaplak Salon',
        description: 'Meet Kalpana – the visionary makeup artist and founder behind Anaplak Art And Glam. Expert bridal makeup & hair styling in Chennai.',
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
