import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Services - Bridal Makeup, Hair Styling & Beauty Treatments | Anaplak Maduravoyal',
    description: 'Explore premium beauty services at Anaplak Salon: Bridal Makeup Packages, Hair Styling & Coloring, Keratin Treatment, Facials, Anti-Aging, Manicure/Pedicure, Threading & Waxing. Expert services with premium products. Book your appointment in Maduravoyal, Chennai.',
    keywords: [
        'bridal makeup packages Chennai',
        'hair coloring services Maduravoyal',
        'keratin treatment Chennai',
        'facial treatment Maduravoyal',
        'anti-aging facial Chennai',
        'manicure pedicure Maduravoyal',
        'hair spa Chennai',
        'wedding makeup artist Chennai',
        'engagement makeup Maduravoyal',
        'party makeup Chennai',
        'hair treatment services',
        'beauty services Maduravoyal',
    ],
    openGraph: {
        title: 'Premium Beauty Services | Bridal Makeup, Hair Styling & More | Anaplak',
        description: '💄 Bridal Makeup | ✂️ Hair Styling & Coloring | 💆 Facials & Spa | 💅 Manicure/Pedicure. Expert services with premium products. Book now in Maduravoyal!',
        url: 'https://anaplakartandglamsalon.com/services',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Anaplak Salon Services - Bridal Makeup, Hair Styling, Beauty Treatments',
            },
        ],
    },
    alternates: {
        canonical: 'https://anaplakartandglamsalon.com/services',
    },
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
