import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Beauty Services - Bridal Makeup, Hair Coloring, Facials & Spa | Anaplak Chennai',
    description: '💄 Complete Beauty Services Menu | Bridal Makeup Packages from ₹15,000 | Hair Coloring & Keratin Treatment | Anti-Aging Facials | Manicure/Pedicure | Threading & Waxing. Premium Products | Expert Stylists | Book Online or Call +91-9840088867',
    keywords: [
        // Bridal Services Keywords
        'bridal makeup packages Chennai',
        'complete bridal package Maduravoyal',
        'engagement makeup Chennai',
        'wedding makeup artist Chennai',
        'bridal hairstyling Chennai',

        // Hair Services Keywords
        'hair coloring services Chennai',
        'balayage hair color Maduravoyal',
        'keratin treatment Chennai',
        'hair smoothening Maduravoyal',
        'hair spa treatment Chennai',
        'professional hair styling',

        // Makeup Services Keywords
        'party makeup Chennai',
        'fashion makeup artist Chennai',
        'editorial makeup Maduravoyal',
        'HD makeup Chennai',
        'airbrush makeup artist',

        // Skin Services Keywords
        'facial treatment Chennai',
        'anti-aging facial Maduravoyal',
        'skin rejuvenation Chennai',
        'deep cleansing facial',
        'brightening facial Chennai',

        // Salon Services Keywords
        'manicure pedicure Chennai',
        'gel nail polish Maduravoyal',
        'threading waxing Chennai',
        'eyebrow threading Maduravoyal',
        'nail art Chennai',

        // General Service Keywords
        'beauty services Chennai',
        'salon services Maduravoyal',
        'premium beauty treatments',
        'luxury salon services Chennai',
    ],
    openGraph: {
        title: '💎 Premium Beauty Services | Bridal, Hair, Makeup & Spa | Anaplak Chennai',
        description: '✨ Complete Beauty Menu: Bridal Packages | Hair Coloring & Keratin | Facials & Anti-Aging | Manicure/Pedicure | Expert Services | Premium Products | Book Now!',
        url: 'https://anaplakartandglamsalon.com/services',
        siteName: 'Anaplak Art & Glam Salon',
        type: 'website',
        locale: 'en_IN',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Anaplak Salon Services - Bridal Makeup, Hair Styling, Facials & Beauty Treatments in Chennai',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Premium Beauty Services | Bridal, Hair & Spa | Anaplak Chennai',
        description: '💄 Bridal Makeup | ✂️ Hair Coloring | 💆 Facials | 💅 Nail Care | Book Now!',
        images: ['/og-image.jpg'],
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
