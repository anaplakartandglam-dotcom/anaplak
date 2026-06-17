import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Anaplak Art & Glam | Book Your Salon Appointment in Chennai',
    description: '📍 Visit Anaplak Salon: No.4B/9, 2nd Floor, MMDA Colony, Maduravoyal, Chennai 600095 | ☎️ Call: +91-9840088867 | 📱 WhatsApp Booking Available | ⏰ Open 10AM-9PM Daily | 🚗 Ground Floor Parking | Book Bridal Makeup, Hair Styling & Beauty Services Online or Walk-in Welcome!',
    keywords: [
        "contact Anaplak Art and Glam",
        "salon appointment Chennai",
        "book salon appointment Chennai",
        "beauty salon Maduravoyal",
        "hair salon Chennai",
        "bridal makeup booking Chennai",
        "bridal makeup salon Chennai",
        "beauty salon contact Chennai",
        "salon near MMDA Colony",
        "salon Maduravoyal",
        "hair styling Chennai",
        "hair coloring Chennai",
        "keratin treatment Chennai",
        "beauty services Chennai",
        "nail salon Chennai",
        "skin care salon Chennai",
        "beauty studio Chennai",
        "luxury salon Chennai"
    ],
    openGraph: {
        title: '📍 Contact Anaplak Salon Maduravoyal | Book Now ☎️ +91-9840088867',
        description: '🏆 # No 1 Rated Salon | 📍 MMDA Colony, Chennai | ⏰ Open 10AM-9PM Daily | 🚗 Parking Available | 📱 WhatsApp Booking | Walk-ins Welcome! Book Your Appointment Today!',
        url: 'https://anaplakartandglamsalon.com/contact',
        siteName: 'Anaplak Art And Glam Salon',
        type: 'website',
        locale: 'en_IN',
        images: [
            {
                url: '/logo_updated.webp',
                width: 1200,
                height: 630,
                alt: 'Contact Anaplak Salon - Book Your Beauty Appointment in Maduravoyal, Chennai',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Anaplak Salon | Book Appointment ☎️ +91-9840088867',
        description: '📍 Maduravoyal, Chennai | ⏰ Open Daily 10AM-9PM | Book Now!',
        images: ['/logo_new.jpeg'],
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
