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
    { src: '/gal1.JPEG', alt: 'Bridal Makeup - Glamorous Look', category: 'Bridal Makeup' },
    { src: '/gal2.JPEG', alt: 'Bridal Transformation - Complete Look', category: 'Bridal Makeup' },
    { src: '/gal3.JPG', alt: 'Bridal Makeup - Elegant Style', category: 'Bridal Makeup' },
    { src: '/gal4.JPG', alt: 'Bridal Hairstyling - Traditional Style', category: 'Bridal Hair' },
    { src: '/gal5.JPG', alt: 'Bridal Makeup - Radiant Look', category: 'Bridal Makeup' },
    { src: '/gal6.JPG', alt: 'Bridal Makeup - Classic Beauty', category: 'Bridal Makeup' },
    { src: '/gal7.JPG', alt: 'Bridal Makeup - Stunning Transformation', category: 'Bridal Makeup' },
    { src: '/gal8.JPG', alt: 'Bridal Makeup - Premium Style', category: 'Bridal Makeup' },
    { src: '/gal9.JPG', alt: 'Bridal Makeup - Sophisticated Look', category: 'Bridal Makeup' },
    { src: '/gal10.JPG', alt: 'Bridal Makeup - Gorgeous Style', category: 'Bridal Makeup' },
    { src: '/gal11.JPG', alt: 'Bridal Makeup - Beautiful Transformation', category: 'Bridal Makeup' },
    { src: '/gal12.JPG', alt: 'Bridal Hairstyling - Elegant Design', category: 'Bridal Hair' },
    { src: '/gal13.JPG', alt: 'Bridal Makeup - Flawless Look', category: 'Bridal Makeup' },
    { src: '/gal14.JPG', alt: 'Bridal Hairstyling - Modern Style', category: 'Bridal Hair' },
    { src: '/gal15.JPG', alt: 'Bridal Makeup - Exquisite Beauty', category: 'Bridal Makeup' },
    { src: '/gal16.JPG', alt: 'Bridal Makeup - Graceful Look', category: 'Bridal Makeup' },
    { src: '/gal17.JPG', alt: 'Bridal Hairstyling - Stunning Design', category: 'Bridal Hair' },
    { src: '/gal18.JPG', alt: 'Bridal Hairstyling - Perfect Finish', category: 'Bridal Hair' },
    { src: '/gal19.jpg', alt: 'Bridal Makeup - Timeless Elegance', category: 'Bridal Makeup' },
    { src: '/gal20.jpg', alt: 'Bridal Hairstyling - Luxurious Style', category: 'Bridal Hair' },
    { src: '/gal21.jpg', alt: 'Bridal Makeup - Radiant Glow', category: 'Bridal Makeup' },
    { src: '/gal22.jpg', alt: 'Bridal Makeup - Captivating Look', category: 'Bridal Makeup' },
    { src: '/gal23.jpg', alt: 'Bridal Hairstyling - Classic Updo', category: 'Bridal Hair' },
    { src: '/gal24.jpg', alt: 'Bridal Makeup - Enchanting Beauty', category: 'Bridal Makeup' },
    { src: '/gal25.jpg', alt: 'Bridal Makeup - Divine Look', category: 'Bridal Makeup' },
    { src: '/gal26.jpg', alt: 'Bridal Hairstyling - Regal Style', category: 'Bridal Hair' },
    { src: '/gal27.jpg', alt: 'Bridal Makeup - Mesmerizing Transformation', category: 'Bridal Makeup' },
    { src: '/gal28.jpg', alt: 'Bridal Hairstyling - Graceful Design', category: 'Bridal Hair' },
    { src: '/team1.jpg', alt: 'Professional Makeup Artist - Our Expert Team', category: 'Our Team' },
    { src: '/team2.jpg', alt: 'Hair Styling Specialist - Our Expert Team', category: 'Our Team' },
    { src: '/team3.jpg', alt: 'Beauty Expert - Our Professional Team', category: 'Our Team' },
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
            <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] pt-32 md:pt-24 overflow-hidden">
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #53675C 0%, #3d4f46 50%, #2a3830 100%)' }}>
                    <div className="absolute inset-0 bg-black/40" />
                    <motion.div
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.3 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                        style={{
                            backgroundImage: 'url(/gal9.JPG)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'top',
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
            </section>

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
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm"
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
