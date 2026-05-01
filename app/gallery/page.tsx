import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import GalleryShowcase from '@/components/gallery-showcase';

export const metadata: Metadata = {
    title: 'Gallery | Anaplak Art and Glam Salon - Bridal Makeup & Hair Styling Portfolio',
    description: 'Explore stunning bridal makeup, hair styling, hair coloring, and beauty transformation photos from Anaplak Salon - Chennai\'s premium beauty destination in Maduravoyal, MMDA Colony.',
    keywords: [
        'salon gallery Chennai',
        'bridal makeup photos',
        'hair styling portfolio',
        'before after transformations Chennai',
        'beauty transformation gallery',
        'wedding makeup photos Maduravoyal',
        'hair coloring gallery',
        'nail art gallery Chennai',
        'salon work photos',
        'beauty portfolio Chennai',
    ],
    openGraph: {
        title: 'Gallery | Bridal Makeup & Hair Styling Portfolio | Anaplak Salon',
        description: 'Browse our stunning portfolio of bridal makeup, hair styling, and beauty transformations. See real client results from Chennai\'s top-rated premium salon.',
        type: 'website',
        images: [
            {
                url: '/og-logo.png',
                width: 1200,
                height: 630,
                alt: 'Anaplak Salon Gallery - Bridal Makeup and Hair Styling Portfolio'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gallery | Bridal Makeup & Hair Portfolio | Anaplak Salon',
        description: 'Stunning bridal makeup and hair styling transformations from Chennai\'s premium salon',
    },
    alternates: {
        canonical: 'https://anaplakartandglamsalon.com/gallery',
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
};

export default function GalleryPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <GalleryShowcase />
            </main>
            <Footer />
        </>
    );
}
