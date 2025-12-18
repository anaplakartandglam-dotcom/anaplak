import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us - Book Appointment | Anaplak Salon Maduravoyal | +91 98400 88867',
    description: 'Book your appointment at Anaplak Art and Glam Salon, Maduravoyal. 📍 2nd Floor, MMDA Colony, Chennai 600095 | 📞 +91 98400 88867 | ⏰ Open 10 AM - 9 PM Daily. Walk-ins welcome! Get directions, call us, or book online for bridal makeup, hair styling & beauty services.',
    keywords: [
        'book salon appointment Maduravoyal',
        'salon contact number Chennai',
        'Anaplak salon location',
        'beauty salon MMDA Colony',
        'salon near me Maduravoyal',
        'book bridal makeup Chennai',
        'salon appointment online',
        'Anaplak salon address',
        'beauty parlour contact Maduravoyal',
    ],
    openGraph: {
        title: 'Contact Anaplak Salon | Book Appointment in Maduravoyal | Call Now',
        description: '📍 MMDA Colony, Maduravoyal | 📞 +91 98400 88867 | ⏰ 10 AM - 9 PM Daily. Book your beauty appointment now! Walk-ins welcome.',
        url: 'https://anaplakartandglamsalon.com/contact',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Contact Anaplak Salon - Book Your Appointment in Maduravoyal, Chennai',
            },
        ],
    },
    alternates: {
        canonical: 'https://anaplakartandglamsalon.com/contact',
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
