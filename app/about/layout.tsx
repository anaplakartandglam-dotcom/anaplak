import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Anaplak Art & Glam Salon, Maduravoyal, Chennai',

    description:
        'Learn about Anaplak Art & Glam, a trusted beauty destination in Chennai, Maduravoyal. Discover our passion for hair styling, bridal makeup, skincare, nail services, and personalized beauty experiences.',

    openGraph: {
        title:
            'About Anaplak Art & Glam Salon, Maduravoyal, Chennai',

        description:
            'Discover the story behind Anaplak Art & Glam, a premium salon in Chennai, Maduravoyal, offering professional hair, beauty, skincare, nail, and bridal services.',

        url: 'https://anaplakartandglamsalon.com/about',
        siteName: 'Anaplak Art & Glam',
        type: 'website',
        locale: 'en_IN',

        images: [
            {
                url: '/images/brand/anaplak-art-and-glam-logo.webp',
                width: 1200,
                height: 630,
                alt: 'Anaplak Art & Glam - Luxury Hair, Beauty & Bridal Salon in Chennai, Maduravoyal',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title:
            'About Anaplak Art & Glam Salon, Maduravoyal, Chennai',

        description:
            'Explore our journey, expert beauty services, bridal makeup, hair styling, skincare, and nail treatments in Chennai, Maduravoyal.',

        images: ['/images/brand/anaplak-art-and-glam-logo.webp'],
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
