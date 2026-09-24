import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Hair, Beauty & Bridal Services in Chennai, Maduravoyal | Anaplak Art & Glam',
    description: 'Discover professional hair coloring, balayage, keratin treatments, hair smoothening, bridal makeup, facials, nail services, and beauty treatments at Anaplak Art & Glam in Chennai, Maduravoyal.',
    openGraph: {
        title: 'Hair, Beauty & Bridal Services in Chennai, Maduravoyal | Anaplak Art & Glam',
        description: 'Professional hair coloring, keratin treatment, hair smoothening, bridal makeup packages, facials and beauty treatments by expert stylists using premium products. Book now.',
        url: 'https://anaplakartandglamsalon.com/services',
        siteName: 'Anaplak Art And Glam Salon',
        type: 'website',
        locale: 'en_IN',
        images: [
            {
                url: '/logo_updated.webp',
                width: 1200,
                height: 630,
                alt: 'Anaplak Premium Hair Salon Services - Hair Coloring, Keratin Treatment & Bridal Makeup in Chennai, Maduravoyal',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Premium Hair & Bridal Salon Services in Chennai, Maduravoyal | Anaplak Art & Glam',
        description: 'Hair coloring and keratin, bridal makeup, facials and nail care. Book your appointment today.',
        images: ['/logo_new.jpeg'],
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
