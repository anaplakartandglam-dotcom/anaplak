'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface GalleryImage {
    src: string;
    alt: string;
    category: string;
}

const galleryImages: GalleryImage[] = [
    { src: '/IMG_0672.JPEG', alt: 'Bridal Makeup - Glamorous Look', category: 'Bridal Makeup' },
    { src: '/IMG_0673.JPEG', alt: 'Bridal Transformation - Complete Look', category: 'Bridal Makeup' },
    { src: '/IMG_0718.JPG', alt: 'Bridal Makeup - Red Saree Look', category: 'Bridal Makeup' },
    { src: '/IMG_0722.JPG', alt: 'Bridal Hairstyling - Traditional Style', category: 'Bridal Hair' },
    { src: '/IMG_0725.JPG', alt: 'Bridal Makeup - Orange Saree', category: 'Bridal Makeup' },
    { src: '/IMG_0726.JPG', alt: 'Bridal Makeup - Pink Saree Look', category: 'Bridal Makeup' },
    { src: '/IMG_0824.JPG', alt: 'Bridal Makeup - Blue Saree', category: 'Bridal Makeup' },
    { src: '/IMG_0827.JPG', alt: 'Bridal Makeup - Purple Saree', category: 'Bridal Makeup' },
    { src: '/IMG_0847.JPG', alt: 'Bridal Makeup - Pink Traditional', category: 'Bridal Makeup' },
    { src: '/IMG_0851.JPG', alt: 'Bridal Makeup - Yellow Saree', category: 'Bridal Makeup' },
    { src: '/IMG_0855.JPG', alt: 'Bridal Makeup - Cream Saree', category: 'Bridal Makeup' },
    { src: '/IMG_0858.JPG', alt: 'Bridal Hairstyling - Purple Outfit', category: 'Bridal Hair' },
    { src: '/IMG_0867.JPG', alt: 'Bridal Makeup - Red Traditional', category: 'Bridal Makeup' },
    { src: '/IMG_0891.JPG', alt: 'Bridal Hairstyling - Dark Outfit', category: 'Bridal Hair' },
    { src: '/IMG_0894.JPG', alt: 'Bridal Makeup - Orange Traditional', category: 'Bridal Makeup' },
    { src: '/IMG_0900.JPG', alt: 'Bridal Makeup - Pink Outfit', category: 'Bridal Makeup' },
    { src: '/IMG_0902.JPG', alt: 'Bridal Hairstyling - Purple Look', category: 'Bridal Hair' },
    { src: '/IMG_0908.JPG', alt: 'Bridal Hairstyling - Blue Outfit', category: 'Bridal Hair' },
    { src: '/IMG_0910.JPG', alt: 'Bridal Hairstyling - Purple Traditional', category: 'Bridal Hair' },
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
            {/* Hero Section - Now positioned below header */}
            <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] pt-20 md:pt-24 overflow-hidden">
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #53675C 0%, #3d4f46 50%, #2a3830 100%)' }}>
                    <div className="absolute inset-0 bg-black/40" />
                    <motion.div
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.3 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                        style={{
                            backgroundImage: 'url(/gallery1.JPG)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </div>

                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4"
                        style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.3)' }}
                    >
                        Our Gallery
                    </motion.h1>
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl lg:text-2xl text-center max-w-3xl"
                        style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.3)' }}
                    >
                        Explore our stunning portfolio of bridal makeup, hair styling, and beauty transformations
                    </motion.p>
                </div>

                {/* Decorative Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" fillOpacity="0.1" />
                        <path d="M0 40L60 46.7C120 53 240 67 360 70C480 73 600 67 720 63.3C840 60 960 60 1080 63.3C1200 67 1320 73 1380 76.7L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V40Z" fill="white" fillOpacity="0.2" />
                        <path d="M0 80L60 83.3C120 87 240 93 360 93.3C480 93 600 87 720 83.3C840 80 960 80 1080 83.3C1200 87 1320 93 1380 96.7L1440 100V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V80Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Gallery Grid - No Filter Section */}
            <section className="container mx-auto px-4 py-12" style={{ backgroundColor: '#f8f9fa' }}>
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
                                style={{ backgroundColor: '#f8f9fa' }}
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <p className="font-semibold text-lg mb-1">{image.alt}</p>
                                        <p className="text-sm text-gray-200">{image.category}</p>
                                    </div>

                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                            <ZoomIn size={32} className="text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-3 right-3 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg" style={{ background: '#53675C' }}>
                                    {image.category}
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
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
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('next');
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
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
                                <h3 className="text-xl md:text-2xl font-bold mb-2">
                                    {galleryImages[selectedImage].alt}
                                </h3>
                                <p className="text-gray-300">
                                    {galleryImages[selectedImage].category} • {selectedImage + 1} of {galleryImages.length}
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
