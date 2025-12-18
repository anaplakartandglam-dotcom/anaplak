import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us - 16+ Years of Beauty Excellence | Anaplak Salon Maduravoyal',
    description: 'Discover Anaplak Art and Glam Salon - Maduravoyal\'s trusted beauty destination since 2008. Meet our expert stylists, learn about our premium services, and see why we\'re rated 4.9★ on Google. Professional hair care, bridal makeup & beauty treatments in Chennai.',
    keywords: [
        'about Anaplak salon',
        'best salon in Maduravoyal',
        'experienced hair stylists Chennai',
        'professional makeup artists Chennai',
        'salon history Maduravoyal',
        'beauty salon team Chennai',
        'trusted salon Chennai',
    ],
    openGraph: {
        title: 'About Anaplak Salon | 16+ Years of Beauty Excellence in Chennai',
        description: 'Meet the expert team behind Maduravoyal\'s top-rated salon. 16+ years of experience, 4.9★ rating, premium services. Your beauty journey starts here.',
        url: 'https://anaplakartandglamsalon.com/about',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Anaplak Salon Team - Expert Beauty Professionals in Chennai',
            },
        ],
    },
    alternates: {
        canonical: 'https://anaplakartandglamsalon.com/about',
    },
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
