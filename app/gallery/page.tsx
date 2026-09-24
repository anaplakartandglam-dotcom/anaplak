import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import GalleryShowcase from '@/components/gallery-showcase';

export const metadata: Metadata = {
    title: 'Bridal Makeup & Hair Styling Portfolio Gallery in Chennai, Maduravoyal | Anaplak Art & Glam',
    description: 'Explore stunning bridal makeup, hair styling, hair coloring, and beauty transformation photos from Anaplak Salon - Chennai\'s premium beauty destination in Maduravoyal, MMDA Colony.',
    openGraph: {
        title: 'Bridal Makeup & Hair Styling Portfolio in Chennai, Maduravoyal | Anaplak Art & Glam',
        description: 'Browse our stunning portfolio of bridal makeup, hair styling, and beauty transformations. See real client results from Chennai\'s top-rated premium salon.',
        url: 'https://anaplakartandglamsalon.com/gallery',
        type: 'website',
        images: [
            {
                url: '/logo_updated.webp',
                width: 1200,
                height: 630,
                alt: 'Anaplak Salon Gallery - Bridal Makeup and Hair Styling Portfolio'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bridal Makeup & Hair Styling Portfolio in Chennai, Maduravoyal | Anaplak Art & Glam',
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
            <main className="min-h-screen bg-black mt-10 md:mt-25">
                <GalleryShowcase />
            </main>
            <Footer />
        </>
    );
}
