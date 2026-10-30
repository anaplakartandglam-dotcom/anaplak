import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Salon Services in Chennai | Anaplak Art & Glam',
    description: 'Hair colouring, keratin, bridal makeup, facials, nails and more at Anaplak Art & Glam, Maduravoyal, Chennai. Open daily 10AM–9PM. Book today.',
    openGraph: {
        title: 'Salon Services in Chennai | Anaplak Art & Glam',
        description: 'Hair colouring, keratin, bridal makeup, facials and nails at Anaplak Art & Glam, Maduravoyal, Chennai. Book your appointment today.',
        url: 'https://anaplakartandglamsalon.com/services',
        siteName: 'Anaplak Art & Glam',
        type: 'website',
        locale: 'en_IN',
        images: [
            {
                url: '/images/brand/anaplak-art-and-glam-logo.webp',
                width: 1200,
                height: 630,
                alt: 'Anaplak Premium Hair Salon Services - Hair Coloring, Keratin Treatment & Bridal Makeup in Chennai, Maduravoyal',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Salon Services in Chennai | Anaplak Art & Glam',
        description: 'Hair colouring, keratin, bridal makeup, facials and nail care at Anaplak Art & Glam, Maduravoyal. Book your appointment today.',
        images: ['/images/brand/anaplak-art-and-glam-logo.webp'],
    },
    alternates: {
        canonical: 'https://anaplakartandglamsalon.com/services',
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

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
