import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us - Premium Hair Salon & Bridal Makeup Experts | Anaplak Maduravoyal Chennai',
    description: '🏆 Discover Anaplak Art & Glam - Maduravoyal\'s #1 Premium Hair Salon & Bridal Makeup Studio. 23 Expert Stylists | 4.9★ Google Rating | 5600+ Happy Customers | Professional Hair Coloring, Keratin Treatment & Luxury Bridal Services. Visit us in MMDA Colony, Chennai.',
    keywords: [
        // Premium Hair Salon Keywords (Priority)
        'premium hair salon Chennai',
        'luxury hair salon Chennai',
        'best hair salon Maduravoyal',
        'professional hair salon Chennai',
        'top hair salon Chennai',
        'hair salon MMDA Colony',

        // Bridal Makeup Keywords
        'bridal makeup artist Maduravoyal',
        'best bridal makeup Chennai',
        'professional bridal makeup Chennai',
        'bridal makeup artist Chennai',

        // Brand & Location
        'about Anaplak salon',
        'Anaplak salon Maduravoyal',
        'beauty salon Maduravoyal',
        'salon MMDA Colony Chennai',

        // Team & Expertise
        'experienced hair stylists Chennai',
        'professional makeup artists Chennai',
        'expert beauty specialists',
        'certified makeup artists Chennai',
        'skilled salon team',

        // Social Proof
        '5600+ satisfied customers',
        '4.9 star rated salon',
        'trusted salon Chennai',
        'best reviewed salon Maduravoyal',
        'top rated beauty salon',

        // Services
        'hair coloring specialist Chennai',
        'keratin treatment expert',
        'bridal hair and makeup',
        'luxury beauty services',
    ],
    openGraph: {
        title: '🌟 About Anaplak | Premium Hair Salon & Bridal Makeup | 4.9★ Maduravoyal',
        description: '💎 Meet our expert team of 23 beauty specialists. 5600+ happy customers trust us for premium hair services, bridal makeup & luxury beauty treatments. MMDA Colony, Chennai.',
        url: 'https://anaplakartandglamsalon.com/about',
        siteName: 'Anaplak Art & Glam Salon',
        type: 'website',
        locale: 'en_IN',
        images: [
            {
                url: '/logo_new.jpeg',
                width: 1200,
                height: 630,
                alt: 'Anaplak Salon Team - Premium Hair Salon & Bridal Makeup Experts in Maduravoyal, Chennai',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Anaplak | Premium Hair Salon & Bridal Makeup Experts Chennai',
        description: '🏆 23 Expert Stylists | 5600+ Happy Customers | Premium Hair Services | Luxury Bridal Makeup | Book Now!',
        images: ['/logo_new.jpeg'],
    },
    alternates: {
        canonical: 'https://anaplakartandglamsalon.com/about',
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

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
