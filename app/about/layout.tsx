import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Anaplak Art & Glam | Luxury Hair, Beauty & Bridal Salon in Maduravoyal, Chennai',

    description:
        'Learn about Anaplak Art & Glam, a trusted beauty destination in Maduravoyal, Chennai. Discover our passion for hair styling, bridal makeup, skincare, nail services, and personalized beauty experiences.',

    keywords: [
        'about Anaplak Art and Glam',
        'hair salon Maduravoyal Chennai',
        'beauty salon Maduravoyal Chennai',
        'salon Maduravoyal',
        'bridal makeup artist Maduravoyal Chennai',
        'bridal makeup salon Maduravoyal Chennai',
        'hair styling Maduravoyal Chennai',
        'hair coloring Maduravoyal Chennai',
        'keratin treatment Maduravoyal Chennai',
        'skin care salon Maduravoyal Chennai',
        'nail salon Maduravoyal Chennai',
        'beauty studio Maduravoyal Chennai',
        'luxury salon Maduravoyal Chennai',
        'professional makeup artists Maduravoyal Chennai',
        'beauty experts Maduravoyal Chennai',
        'Maduravoyal salon',
        'MMDA Colony salon',
        'best salon Maduravoyal Chennai',
    ],

    openGraph: {
        title:
            'About Anaplak Art & Glam | Hair, Beauty & Bridal Experts in Chennai',

        description:
            'Discover the story behind Anaplak Art & Glam, a premium salon in Maduravoyal, Chennai, offering professional hair, beauty, skincare, nail, and bridal services.',

        url: 'https://anaplakartandglamsalon.com/about',
        siteName: 'Anaplak Art & Glam',
        type: 'website',
        locale: 'en_IN',

        images: [
            {
                url: '/logo_updated.webp',
                width: 1200,
                height: 630,
                alt: 'Anaplak Art & Glam - Luxury Hair, Beauty & Bridal Salon in Chennai',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title:
            'About Anaplak Art & Glam | Premium Salon in Chennai',

        description:
            'Explore our journey, expert beauty services, bridal makeup, hair styling, skincare, and nail treatments in Maduravoyal, Chennai.',

        images: ['/logo_updated.webp'],
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
