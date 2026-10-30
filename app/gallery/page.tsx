import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import GalleryShowcase from '@/components/gallery-showcase';

export const metadata: Metadata = {
    title: 'Salon Makeup & Hair Gallery in Chennai | Anaplak',
    description: 'Explore makeup, hair styling, hair colouring and beauty transformation photos from Anaplak Art & Glam Salon in Maduravoyal, Chennai.',
    openGraph: {
        title: 'Salon Makeup & Hair Portfolio in Chennai | Anaplak',
        description: 'Browse our portfolio of makeup, hair styling and beauty transformations from Chennai\'s premium salon.',
        url: 'https://anaplakartandglamsalon.com/gallery',
        type: 'website',
        images: [
            {
                url: '/images/brand/anaplak-art-and-glam-logo.webp',
                width: 1200,
                height: 630,
                alt: 'Anaplak Art & Glam salon portfolio'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Salon Makeup & Hair Portfolio in Chennai | Anaplak',
        description: 'Makeup, hair styling and beauty transformations from Anaplak Art & Glam in Maduravoyal, Chennai',
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
            <main className="min-h-screen bg-black mt-10 md:mt-25">
                <GalleryShowcase />
            </main>
            <Footer />
        </>
    );
}
