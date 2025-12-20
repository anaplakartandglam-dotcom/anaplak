import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us - 16+ Years Beauty Excellence | 5600+ Happy Customers | Anaplak Salon',
    description: '🏆 Discover Anaplak Art & Glam Salon - Maduravoyal\'s #1 Rated Beauty Destination Since 2008. 23 Expert Stylists | 4.9★ Google Rating | Premium International Products | Award-Winning Bridal Makeup | Professional Hair Care. Experience luxury beauty services in Chennai.',
    keywords: [
        // Brand & Trust Keywords
        'about Anaplak salon Chennai',
        'Anaplak salon history',
        'best salon Maduravoyal since 2008',
        'award winning salon Chennai',
        'top rated beauty salon Chennai',

        // Team & Expertise Keywords
        'experienced hair stylists Chennai',
        'professional makeup artists Chennai',
        'expert beauty specialists Maduravoyal',
        '16 years experience salon',
        'certified makeup artists Chennai',

        // Social Proof Keywords
        '5600+ satisfied customers',
        '4.9 star rated salon',
        'trusted salon Chennai',
        'best reviewed salon Maduravoyal',
        'customer testimonials salon',

        // Service Excellence Keywords
        'premium beauty services Chennai',
        'luxury salon experience Maduravoyal',
        'international beauty products',
        'professional salon team Chennai',
    ],
    openGraph: {
        title: '🌟 About Anaplak Salon | 16+ Years Excellence | 4.9★ Rated | Chennai',
        description: '💎 Meet our expert team of 23 beauty specialists. 5600+ happy customers trust us for bridal makeup, hair styling & premium beauty services. Your transformation starts here!',
        url: 'https://anaplakartandglamsalon.com/about',
        siteName: 'Anaplak Art & Glam Salon',
        type: 'website',
        locale: 'en_IN',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Anaplak Salon Team - Expert Beauty Professionals in Maduravoyal, Chennai',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Anaplak Salon | 16+ Years Beauty Excellence Chennai',
        description: '🏆 23 Expert Stylists | 5600+ Happy Customers | Premium Services | Book Now!',
        images: ['/og-image.jpg'],
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
