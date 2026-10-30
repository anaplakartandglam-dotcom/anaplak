import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Book a Salon Appointment in Chennai | Anaplak',
    description: 'Visit Anaplak Art & Glam in Maduravoyal, Chennai. Call +91 98400 88867, book on WhatsApp or online. Open daily 10AM–9PM.',
    openGraph: {
        title: 'Book a Salon Appointment in Chennai | Anaplak',
        description: 'Find, call or book Anaplak Salon in Maduravoyal, Chennai. Ground floor parking, open daily 10AM-9PM, online booking available.',
        url: 'https://anaplakartandglamsalon.com/contact',
        siteName: 'Anaplak Art And Glam Salon',
        type: 'website',
        locale: 'en_IN',
        images: [
            {
                url: '/images/brand/anaplak-art-and-glam-logo.webp',
                width: 1200,
                height: 630,
                alt: 'Contact Anaplak Salon - Book Your Beauty Appointment in Chennai, Maduravoyal',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Book a Salon Appointment in Chennai | Anaplak',
        description: 'Chennai, Maduravoyal salon. Open daily 10AM-9PM. Book your appointment today.',
        images: ['/images/brand/anaplak-art-and-glam-logo.jpeg'],
    },
    alternates: {
        canonical: 'https://anaplakartandglamsalon.com/contact',
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

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
