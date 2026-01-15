import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Services - Anaplak Art And Glam',
    description: '💇 Premium Hair Salon Services in Maduravoyal | Professional Hair Coloring & Balayage | Keratin Treatment | Hair Smoothening | Bridal Makeup Packages from ₹15,000 | Facials & Beauty Treatments | Expert Stylists | Book +91-9840088867',
    keywords: [
        // Premium Hair Services Keywords (Priority)
        'premium hair salon Chennai',
        'hair coloring services Chennai',
        'professional hair coloring Maduravoyal',
        'balayage hair color Chennai',
        'hair highlights Chennai',
        'keratin treatment Chennai',
        'keratin treatment Maduravoyal',
        'hair smoothening Chennai',
        'hair straightening Maduravoyal',
        'hair treatment services Chennai',

        // Hair Styling Keywords
        'professional hair styling Chennai',
        'hair stylist Maduravoyal',
        'bridal hairstyling Chennai',
        'hair cutting services Chennai',
        'luxury hair salon Chennai',

        // Bridal Makeup Services
        'bridal makeup packages Chennai',
        'bridal makeup artist Maduravoyal',
        'wedding makeup Chennai',
        'engagement makeup Chennai',
        'bridal makeup and hair Chennai',
        'complete bridal package',

        // Makeup Services
        'party makeup Chennai',
        'HD makeup Chennai',
        'airbrush makeup Chennai',
        'professional makeup artist Chennai',
        'makeup services Maduravoyal',

        // Facial & Skin Services
        'facial treatment Chennai',
        'anti-aging facial Chennai',
        'skin brightening facial',
        'deep cleansing facial Chennai',
        'facial services Maduravoyal',

        // Nail & Beauty Services
        'manicure pedicure Chennai',
        'nail art Chennai',
        'threading waxing Chennai',
        'beauty services Maduravoyal',

        // General Keywords
        'salon services Chennai',
        'beauty salon Maduravoyal',
        'luxury beauty services',
        'premium salon Chennai',
    ],
    openGraph: {
        title: '💎 Premium Hair Salon & Bridal Makeup Services | Anaplak Maduravoyal Chennai',
        description: '✨ Professional Hair Coloring, Keratin Treatment, Hair Smoothening | Bridal Makeup Packages | Facials & Beauty Treatments | Expert Stylists | Premium Products | Book Now!',
        url: 'https://anaplakartandglamsalon.com/services',
        siteName: 'Anaplak Art And Glam Salon',
        type: 'website',
        locale: 'en_IN',
        images: [
            {
                url: '/og-logo.png',
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
