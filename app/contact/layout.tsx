import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact & Book Appointment | Anaplak Salon Maduravoyal | ☎️ +91-9840088867',
    description: '📍 Visit Anaplak Salon: No.4B/9, 2nd Floor, MMDA Colony, Maduravoyal, Chennai 600095 | ☎️ Call: +91-9840088867 | 📱 WhatsApp Booking Available | ⏰ Open 10AM-9PM Daily | 🚗 Ground Floor Parking | Book Bridal Makeup, Hair Styling & Beauty Services Online or Walk-in Welcome!',
    keywords: [
        // Booking Intent Keywords
        'book salon appointment Maduravoyal',
        'book bridal makeup Chennai online',
        'salon appointment booking Chennai',
        'WhatsApp salon booking',
        'instant salon booking Maduravoyal',

        // Contact Keywords
        'Anaplak salon contact number',
        'salon phone number Maduravoyal',
        'beauty salon contact Chennai',
        '+91-9840088867',
        'call salon Maduravoyal',

        // Location Keywords
        'Anaplak salon address',
        'salon location MMDA Colony',
        'beauty parlour Maduravoyal address',
        'salon near me Chennai 600095',
        'salon with parking Maduravoyal',

        // Direction Keywords
        'how to reach Anaplak salon',
        'salon directions Maduravoyal',
        'Google Maps salon Chennai',
        'salon near MMDA Colony',

        // Working Hours Keywords
        'salon open now Chennai',
        'salon working hours Maduravoyal',
        'salon open on Sunday',
        'late evening salon Chennai',

        // Urgent Booking Keywords
        'walk-in salon Maduravoyal',
        'same day appointment salon',
        'emergency bridal makeup Chennai',
        'last minute salon booking',
    ],
    openGraph: {
        title: '📍 Contact Anaplak Salon Maduravoyal | Book Now ☎️ +91-9840088867',
        description: '🏆 #1 Rated Salon | 📍 MMDA Colony, Chennai | ⏰ Open 10AM-9PM Daily | 🚗 Parking Available | 📱 WhatsApp Booking | Walk-ins Welcome! Book Your Appointment Today!',
        url: 'https://anaplakartandglamsalon.com/contact',
        siteName: 'Anaplak Art & Glam Salon',
        type: 'website',
        locale: 'en_IN',
        images: [
            {
                url: '/logo.png',
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
        images: ['/logo.png'],
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
