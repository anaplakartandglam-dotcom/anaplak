import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import GalleryShowcase from '@/components/gallery-showcase';

export const metadata: Metadata = {
    title: 'Gallery - Anaplak Art And Glam',
    description: 'Explore our stunning portfolio of bridal makeup, hair styling, hair coloring, and beauty transformations. View real client photos from Chennai\'s premium hair salon and makeup studio.',
    keywords: [
        'bridal makeup gallery Chennai',
        'hair styling portfolio',
        'salon gallery Maduravoyal',
        'makeup transformation photos',
        'hair coloring gallery',
        'bridal hairstyle photos',
        'premium salon portfolio Chennai',
        'beauty transformation gallery',
        'wedding makeup photos',
        'hair salon before after'
    ],
    openGraph: {
        title: 'Gallery - Bridal Makeup & Hair Styling Portfolio | Anaplak Salon',
        description: 'Browse our portfolio of stunning bridal makeup, hair styling, and beauty transformations from Chennai\'s top-rated premium salon.',
        type: 'website',
        images: [
            {
                url: '/gal1.JPEG',
                width: 1200,
                height: 630,
                alt: 'Anaplak Salon Gallery - Bridal Makeup and Hair Styling Portfolio'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gallery - Bridal Makeup & Hair Portfolio | Anaplak Salon',
        description: 'Stunning bridal makeup and hair styling transformations from Chennai\'s premium salon',
        images: ['/gal1.JPEG']
    }
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
