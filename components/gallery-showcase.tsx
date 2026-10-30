'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import PageHeader from '@/components/page-header';

interface GalleryImage {
    src: string;
    alt: string;
}

const galleryImages: GalleryImage[] = [
    { src: '/images/gallery/bridal-makeup-chennai-01.webp', alt: 'Anaplak Art & Glam salon portfolio image 01' },
    { src: '/images/gallery/bridal-makeup-chennai-02.webp', alt: 'Anaplak Art & Glam salon portfolio image 02' },
    { src: '/images/gallery/bridal-makeup-chennai-03.webp', alt: 'Anaplak Art & Glam salon portfolio image 03' },
    { src: '/images/gallery/bridal-hairstyling-chennai-04.webp', alt: 'Anaplak Art & Glam salon portfolio image 04' },
    { src: '/images/gallery/bridal-makeup-chennai-05.webp', alt: 'Anaplak Art & Glam salon portfolio image 05' },
    { src: '/images/gallery/bridal-makeup-chennai-06.webp', alt: 'Anaplak Art & Glam salon portfolio image 06' },
    { src: '/images/gallery/bridal-makeup-chennai-07.webp', alt: 'Anaplak Art & Glam salon portfolio image 07' },
    { src: '/images/gallery/bridal-makeup-chennai-08.webp', alt: 'Anaplak Art & Glam salon portfolio image 08' },
    { src: '/images/gallery/bridal-makeup-chennai-09.webp', alt: 'Anaplak Art & Glam salon portfolio image 09' },
    { src: '/images/gallery/bridal-makeup-chennai-10.webp', alt: 'Anaplak Art & Glam salon portfolio image 10' },
    { src: '/images/gallery/bridal-makeup-chennai-11.webp', alt: 'Anaplak Art & Glam salon portfolio image 11' },
    { src: '/images/gallery/bridal-hairstyling-chennai-12.webp', alt: 'Anaplak Art & Glam salon portfolio image 12' },
    { src: '/images/gallery/bridal-makeup-chennai-13.webp', alt: 'Anaplak Art & Glam salon portfolio image 13' },
    { src: '/images/gallery/bridal-hairstyling-chennai-14.webp', alt: 'Anaplak Art & Glam salon portfolio image 14' },
    { src: '/images/gallery/bridal-makeup-chennai-15.webp', alt: 'Anaplak Art & Glam salon portfolio image 15' },
    { src: '/images/gallery/bridal-makeup-chennai-16.webp', alt: 'Anaplak Art & Glam salon portfolio image 16' },
    { src: '/images/gallery/bridal-hairstyling-chennai-17.webp', alt: 'Anaplak Art & Glam salon portfolio image 17' },
    { src: '/images/gallery/bridal-hairstyling-chennai-18.webp', alt: 'Anaplak Art & Glam salon portfolio image 18' },
    { src: '/images/gallery/bridal-makeup-chennai-19.webp', alt: 'Anaplak Art & Glam salon portfolio image 19' },
    { src: '/images/gallery/bridal-hairstyling-chennai-20.webp', alt: 'Anaplak Art & Glam salon portfolio image 20' },
    { src: '/images/gallery/bridal-makeup-chennai-21.webp', alt: 'Anaplak Art & Glam salon portfolio image 21' },
    { src: '/images/gallery/bridal-makeup-chennai-22.webp', alt: 'Anaplak Art & Glam salon portfolio image 22' },
    { src: '/images/gallery/bridal-hairstyling-chennai-23.webp', alt: 'Anaplak Art & Glam salon portfolio image 23' },
    { src: '/images/gallery/bridal-makeup-chennai-24.webp', alt: 'Anaplak Art & Glam salon portfolio image 24' },
    { src: '/images/gallery/bridal-makeup-chennai-25.webp', alt: 'Anaplak Art & Glam salon portfolio image 25' },
    { src: '/images/gallery/bridal-hairstyling-chennai-26.webp', alt: 'Anaplak Art & Glam salon portfolio image 26' },
    { src: '/images/gallery/bridal-makeup-chennai-27.webp', alt: 'Anaplak Art & Glam salon portfolio image 27' },
    { src: '/images/gallery/bridal-hairstyling-chennai-28.webp', alt: 'Anaplak Art & Glam salon portfolio image 28' },
];

export default function GalleryShowcase() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (selectedImage === null) return;

        if (direction === 'prev') {
            setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
        } else {
            setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage === null) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateImage('prev');
            if (e.key === 'ArrowRight') navigateImage('next');
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <div className="relative">
            <PageHeader
                label="Our Gallery"
                title="Our"
                titleAccent="Gallery"
                description="Explore our portfolio of makeup, hair styling, and beauty transformations"
            />

            {/* Gallery Grid - No Filter Section */}
            <section className="container mx-auto px-4 py-12">
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={image.src}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2Y4ZjlmYSIvPjwvc3ZnPg=="
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                            <ZoomIn size={32} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        id="gallery-lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm"
                        onClick={closeLightbox}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Image lightbox"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                            aria-label="Close image"
                            aria-controls="gallery-lightbox"
                        >
                            <X size={28} />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('prev');
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                            aria-label="Previous image"
                            aria-controls="gallery-lightbox"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('next');
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                            aria-label="Next Image"
                            aria-controls="gallery-lightbox"
                        >
                            <ChevronRight size={32} />
                        </button>

                        {/* Image Container */}
                        <div className="flex items-center justify-center h-full p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
                            <motion.div
                                key={selectedImage}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative max-w-7xl max-h-full w-full h-full"
                            >
                                <Image
                                    src={galleryImages[selectedImage].src}
                                    alt={galleryImages[selectedImage].alt}
                                    fill
                                    sizes="100vw"
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                        </div>

                        {/* Image Info */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                            <div className="container mx-auto">
                                <p className="text-gray-300">
                                    {selectedImage + 1} of {galleryImages.length}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Call to Action */}
            <section className="py-16" style={{ background: 'linear-gradient(135deg, #53675C 0%, #3d4f46 50%, #2a3830 100%)' }}>
                <div className="container mx-auto px-4 text-center text-white">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Ready to Look Your Best?
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                    >
                        Book your appointment today and experience the premium salon service that creates these stunning transformations
                    </motion.p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="/contact"
                            className="px-8 py-4 bg-white rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                            style={{ color: '#53675C' }}
                        >
                            Book Appointment
                        </a>
                        <a
                            href="/services"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
                        >
                            View Services
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
