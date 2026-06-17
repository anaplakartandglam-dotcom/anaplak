import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Hair, Beauty & Bridal Services in Chennai | Anaplak Art & Glam',
    description: 'Discover professional hair coloring, balayage, keratin treatments, hair smoothening, bridal makeup, facials, nail services, and beauty treatments at Anaplak Art & Glam in Maduravoyal, Chennai.',
    keywords: [
        // Hair Services
        'hair salon Chennai',
        'hair coloring Chennai',
        'balayage Chennai',
        'hair highlights Chennai',
        'haircuts Chennai',
        'hair styling Chennai',
        'hair spa Chennai',

        // Hair Treatments
        'keratin treatment Chennai',
        'hair smoothening Chennai',
        'hair straightening Chennai',
        'hair treatment Chennai',

        // Bridal Makeup
        'bridal makeup Chennai',
        'bridal makeup artist Chennai',
        'bridal makeup packages Chennai',
        'wedding makeup Chennai',
        'engagement makeup Chennai',
        'HD makeup Chennai',
        'airbrush makeup Chennai',

        // Beauty & Skin
        'facial treatments Chennai',
        'skin care services Chennai',
        'beauty treatments Chennai',
        'anti aging facial Chennai',

        // Nail Services
        'nail art Chennai',
        'nail extension Chennai',
        'manicure pedicure Chennai',

        // Local SEO
        'beauty salon Maduravoyal',
        'salon services Chennai',
        'premium salon Chennai',
        'luxury beauty salon Chennai',
        'Anaplak Art and Glam services'
    ],
    openGraph: {
        title: 'Hair, Beauty & Bridal Services in Chennai | Anaplak Art & Glam',
        description: '✨ Professional Hair Coloring, Keratin Treatment, Hair Smoothening | Bridal Makeup Packages | Facials & Beauty Treatments | Expert Stylists | Premium Products | Book Now!',
        url: 'https://anaplakartandglamsalon.com/services',
        siteName: 'Anaplak Art And Glam Salon',
        type: 'website',
        locale: 'en_IN',
        images: [
            {
                url: '/logo_updated.webp',
                width: 1200,
                height: 630,
                alt: 'Anaplak Premium Hair Salon Services - Hair Coloring, Keratin Treatment & Bridal Makeup in Maduravoyal, Chennai',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Premium Hair Salon & Bridal Makeup Services | Anaplak Chennai',
        description: '💇 Hair Coloring & Keratin | 💄 Bridal Makeup | 💆 Facials | 💅 Nail Care | Book Now!',
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
