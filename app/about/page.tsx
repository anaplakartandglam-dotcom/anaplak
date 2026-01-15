"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import Header from "@/components/header"
import Footer from "@/components/footer"
import VideoParallax from "@/components/video_parrlex"
import VideoPlayerModal from "@/components/video-player-modal"
import Testimonials from "@/components/testimonials"

// FAQ Accordion Component
function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(2)

    const faqs = [
        {
            question: "HOW OFTEN SHOULD I GET A HAIRCUT OR STYLING?",
            answer: "For maintaining a fresh look, we recommend visiting every 4-6 weeks for haircuts. For color treatments and styling, the frequency depends on your hair type and desired look. Our stylists will create a personalized maintenance schedule during your consultation."
        },
        {
            question: "WHAT IS INCLUDED IN A BRIDAL MAKEUP PACKAGE?",
            answer: "Our bridal packages include pre-wedding consultation, trial makeup session, wedding day makeup and hairstyling, touch-up kit, and on-location services. We also offer packages for bridesmaids and family members to ensure everyone looks stunning on your special day."
        },
        {
            question: "DO YOU USE PREMIUM PRODUCTS FOR TREATMENTS?",
            answer: "Absolutely! We exclusively use internationally recognized premium brands for all our services. From hair treatments to makeup products, we ensure only the finest quality products touch your hair and skin, delivering superior results and lasting beauty."
        },
        {
            question: "HOW LONG DOES A TYPICAL SALON SESSION TAKE?",
            answer: "The duration varies by service: a haircut takes 45-60 minutes, color treatments 2-3 hours, bridal makeup 2-3 hours, and full beauty treatments 3-4 hours. We recommend booking in advance and allowing extra time to fully enjoy your pampering experience."
        }
    ]

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-start justify-between text-left group"
                    >
                        <span className="text-sm font-medium text-black uppercase tracking-wide">
                            {faq.question}
                        </span>
                        <span className="text-[#53675C] text-xl font-light ml-4 flex-shrink-0">
                            {openIndex === index ? '−' : '+'}
                        </span>
                    </button>
                    {openIndex === index && (
                        <div className="mt-4 text-sm text-gray-600 leading-relaxed">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default function AboutPage() {
    const heroRef = useRef<HTMLDivElement>(null)
    const [typewriterText, setTypewriterText] = useState("")
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isVideoOpen, setIsVideoOpen] = useState(false)

    const words = ["MODERN EDGE", "PERFECT LOOK", "BEAUTY NEEDS", "STYLE GOALS"]

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const scrolled = window.scrollY
                const parallaxSpeed = 0.5
                heroRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Typewriter effect - cycling through words
    useEffect(() => {
        const currentWord = words[wordIndex]

        const typingSpeed = isDeleting ? 50 : 100
        const pauseTime = isDeleting ? 500 : 2000

        const timer = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (typewriterText.length < currentWord.length) {
                    setTypewriterText(currentWord.slice(0, typewriterText.length + 1))
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), pauseTime)
                }
            } else {
                // Deleting
                if (typewriterText.length > 0) {
                    setTypewriterText(currentWord.slice(0, typewriterText.length - 1))
                } else {
                    // Move to next word
                    setIsDeleting(false)
                    setWordIndex((prev) => (prev + 1) % words.length)
                }
            }
        }, typingSpeed)

        return () => clearTimeout(timer)
    }, [typewriterText, isDeleting, wordIndex, words])

    return (
        <>
            {/* SEO Meta Tags */}
            <Script
                id="about-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "About Anaplak Art And Glam Salon",
                        "description": "Learn about Anaplak Salon - Chennai's premier beauty destination with 16+ years of experience, 5600+ satisfied customers, and expert beauty specialists.",
                        "url": "https://anaplakartandglamsalon.com/about",
                        "mainEntity": {
                            "@type": "BeautySalon",
                            "name": "Anaplak Art And Glam Salon",
                            "foundingDate": "2008",
                            "numberOfEmployees": "23",
                            "slogan": "Transform Your Look with Expert Care",
                            "award": "Best Salon in Maduravoyal 2024"
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://anaplakartandglamsalon.com"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "About Us",
                                    "item": "https://anaplakartandglamsalon.com/about"
                                }
                            ]
                        }
                    })
                }}
            />

            {/* FAQ Schema */}
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How often should I get a haircut or styling?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "For maintaining a fresh look, we recommend visiting every 4-6 weeks for haircuts. For color treatments and styling, the frequency depends on your hair type and desired look. Our stylists will create a personalized maintenance schedule during your consultation."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is included in a bridal makeup package?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Our bridal packages include pre-wedding consultation, trial makeup session, wedding day makeup and hairstyling, touch-up kit, and on-location services. We also offer packages for bridesmaids and family members to ensure everyone looks stunning on your special day."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you use premium products for treatments?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely! We exclusively use internationally recognized premium brands for all our services. From hair treatments to makeup products, we ensure only the finest quality products touch your hair and skin, delivering superior results and lasting beauty."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long does a typical salon session take?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The duration varies by service: a haircut takes 45-60 minutes, color treatments 2-3 hours, bridal makeup 2-3 hours, and full beauty treatments 3-4 hours. We recommend booking in advance and allowing extra time to fully enjoy your pampering experience."
                                }
                            }
                        ]
                    })
                }}
            />

            <Header />
            <div className="relative min-h-screen bg-[#0e0e0e]">
                {/* Hero Section with Parallax Background - 600px height */}
                <div className="relative overflow-hidden" style={{ height: "600px", maxWidth: "1920px", margin: "0 auto" }}>
                    {/* Parallax Background */}
                    <div
                        ref={heroRef}
                        className="absolute inset-0 w-full h-full"
                        style={{
                            willChange: "transform",
                        }}
                    >
                        <div
                            className="absolute inset-0 w-full h-full"
                            style={{
                                backgroundImage: "url('/about_hero.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                backgroundRepeat: "no-repeat",
                            }}
                        />
                        {/* Dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/50" />
                    </div>

                    {/* Hero Content */}
                    <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-wider" style={{ marginTop: '90px' }}>
                            ABOUT US
                        </h1>

                        {/* Breadcrumb */}
                        <div className="flex items-center gap-3 text-white/80 text-sm md:text-base tracking-widest uppercase">
                            <a href="/" className="hover:text-[#53675C] transition-colors">
                                HOME
                            </a>
                            <span className="text-white/40">||</span>
                            <span className="text-white">ABOUT US</span>
                        </div>
                    </div>
                </div>

                {/* Unique Beauty Section - Full Width */}
                <section className="w-full bg-white py-20 md:py-32">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Left Image with Dynamic Corner Radius on Hover */}
                            <div className="relative">
                                <div
                                    className="relative overflow-hidden transition-all duration-500 ease-out"
                                    style={{
                                        borderRadius: "0px",
                                    }}
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        const x = e.clientX - rect.left;
                                        const y = e.clientY - rect.top;
                                        const width = rect.width;
                                        const height = rect.height;

                                        // Determine which corner is closest to mouse
                                        const isLeft = x < width / 2;
                                        const isTop = y < height / 2;

                                        if (isTop && isLeft) {
                                            e.currentTarget.style.borderRadius = "200px 0 0 0";
                                        } else if (isTop && !isLeft) {
                                            e.currentTarget.style.borderRadius = "0 200px 0 0";
                                        } else if (!isTop && isLeft) {
                                            e.currentTarget.style.borderRadius = "0 0 0 200px";
                                        } else {
                                            e.currentTarget.style.borderRadius = "0 0 200px 0";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderRadius = "0px";
                                    }}
                                >
                                    <img
                                        src="/aboutus.jpg"
                                        alt="Professional Hair Styling"
                                        className="w-full h-[650px] md:h-[780px] object-cover object-top rounded-xl"
                                    />
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="space-y-8 pt-0">
                                {/* Heading */}
                                <div>
                                    <p className="text-[#53675C] text-xs uppercase tracking-[0.3em] mb-6 font-medium">
                                        UNIQUE BEAUTY NEEDS
                                    </p>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight text-black mb-0">
                                        EACH SPECIALIST IS DEDICATED TO UNDERSTANDING YOUR GOALS, ENSURING TREATMENTS{" "}
                                        <span className="italic font-serif text-[#53675C]">
                                            ARE TAILORED TO YOUR UNIQUE {typewriterText}
                                            <span className="animate-pulse">|</span>
                                        </span>
                                    </h2>
                                </div>

                                {/* Image with Badge and Scroll Button */}
                                <div className="relative">
                                    <div
                                        className="relative overflow-hidden transition-all duration-500 ease-out"
                                        style={{
                                            borderRadius: "0px",
                                        }}
                                        onMouseMove={(e) => {
                                            const rect = e.currentTarget.getBoundingClientRect();
                                            const x = e.clientX - rect.left;
                                            const y = e.clientY - rect.top;
                                            const width = rect.width;
                                            const height = rect.height;

                                            // Determine which corner is closest to mouse
                                            const isLeft = x < width / 2;
                                            const isTop = y < height / 2;

                                            if (isTop && isLeft) {
                                                e.currentTarget.style.borderRadius = "200px 0 0 0";
                                            } else if (isTop && !isLeft) {
                                                e.currentTarget.style.borderRadius = "0 200px 0 0";
                                            } else if (!isTop && isLeft) {
                                                e.currentTarget.style.borderRadius = "0 0 0 200px";
                                            } else {
                                                e.currentTarget.style.borderRadius = "0 0 200px 0";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderRadius = "0px";
                                        }}
                                    >
                                        <img
                                            src="/aboutus2.jpg"
                                            alt="Beauty Specialist"
                                            className="w-full h-[480px] md:h-[580px] object-cover object-[50%_15%] rounded-xl"
                                        />
                                        {/* Experience Badge */}
                                        <div
                                            className="absolute bottom-4 left-4 md:top-4 md:left-auto md:right-8 md:bottom-auto w-28 h-28 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center text-white shadow-xl bg-[#53675C] z-10"
                                        >
                                            <span className="text-4xl md:text-6xl font-bold leading-none mb-1 md:mb-2">16</span>
                                            <div className="text-[9px] md:text-xs font-semibold uppercase tracking-wide text-center leading-tight">
                                                <div>YEARS</div>
                                                <div>OF EXPERIENCE</div>
                                                <div>IN HAIRCUTS</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services Icons Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-24 pt-12 border-t border-gray-200">
                            {/* Classic Haircut */}
                            <div className="text-center space-y-3">
                                <div className="flex justify-center mb-3">
                                    <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#53675C" strokeWidth="1.2">
                                        {/* Comb and Scissors */}
                                        <rect x="12" y="20" width="8" height="24" rx="1" strokeLinecap="round" />
                                        <line x1="16" y1="24" x2="16" y2="40" strokeLinecap="round" />
                                        <line x1="14" y1="26" x2="10" y2="26" strokeLinecap="round" />
                                        <line x1="14" y1="30" x2="10" y2="30" strokeLinecap="round" />
                                        <line x1="14" y1="34" x2="10" y2="34" strokeLinecap="round" />
                                        <line x1="14" y1="38" x2="10" y2="38" strokeLinecap="round" />
                                        <circle cx="44" cy="28" r="4" strokeLinecap="round" />
                                        <circle cx="44" cy="36" r="4" strokeLinecap="round" />
                                        <line x1="40" y1="28" x2="32" y2="20" strokeLinecap="round" />
                                        <line x1="40" y1="36" x2="32" y2="44" strokeLinecap="round" />
                                        <line x1="32" y1="20" x2="32" y2="44" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold uppercase tracking-wide text-black">CLASSIC HAIRCUT</h3>
                                <p className="text-sm text-gray-600 leading-relaxed px-2">
                                    We always stay updated with fashion to bring clients the latest hairstyle inspirations
                                </p>
                            </div>

                            {/* Razor Shaving */}
                            <div className="text-center space-y-3">
                                <div className="flex justify-center mb-3">
                                    <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#53675C" strokeWidth="1.2">
                                        {/* Razor */}
                                        <path d="M20 44 L32 32 L44 44" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M32 32 L32 16" strokeLinecap="round" />
                                        <rect x="28" y="12" width="8" height="8" rx="2" strokeLinecap="round" />
                                        <path d="M24 44 C24 48 26 52 32 52 C38 52 40 48 40 44" strokeLinecap="round" />
                                        <line x1="28" y1="24" x2="36" y2="24" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold uppercase tracking-wide text-black">RAZOR SHAVING</h3>
                                <p className="text-sm text-gray-600 leading-relaxed px-2">
                                    Clients enjoy a comfortable space where beauty care feels calming and refreshing
                                </p>
                            </div>

                            {/* Beard Trim */}
                            <div className="text-center space-y-3">
                                <div className="flex justify-center mb-3">
                                    <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#53675C" strokeWidth="1.2">
                                        {/* Trimmer */}
                                        <rect x="24" y="16" width="16" height="32" rx="2" strokeLinecap="round" />
                                        <line x1="28" y1="20" x2="28" y2="44" strokeLinecap="round" />
                                        <line x1="32" y1="20" x2="32" y2="44" strokeLinecap="round" />
                                        <line x1="36" y1="20" x2="36" y2="44" strokeLinecap="round" />
                                        <rect x="26" y="12" width="12" height="4" rx="1" strokeLinecap="round" />
                                        <circle cx="32" cy="10" r="2" fill="#53675C" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold uppercase tracking-wide text-black">BEARD TRIM</h3>
                                <p className="text-sm text-gray-600 leading-relaxed px-2">
                                    Only trusted high quality brands are used to ensure safe and reliable lasting results
                                </p>
                            </div>

                            {/* Hair Treatments */}
                            <div className="text-center space-y-3">
                                <div className="flex justify-center mb-3">
                                    <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="#53675C" strokeWidth="1.2">
                                        {/* Hair Products */}
                                        <rect x="18" y="24" width="12" height="20" rx="2" strokeLinecap="round" />
                                        <rect x="34" y="28" width="12" height="16" rx="2" strokeLinecap="round" />
                                        <rect x="20" y="20" width="8" height="4" rx="1" strokeLinecap="round" />
                                        <rect x="36" y="24" width="8" height="4" rx="1" strokeLinecap="round" />
                                        <line x1="24" y1="30" x2="24" y2="38" strokeLinecap="round" />
                                        <line x1="40" y1="34" x2="40" y2="40" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-bold uppercase tracking-wide text-black">HAIR TREATMENTS</h3>
                                <p className="text-sm text-gray-600 leading-relaxed px-2">
                                    Experienced professionals provide services with skill creativity and personal attention
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Tour Section - Full Width with Torn Edge */}
                <section className="relative w-full bg-[#0e0e0e]">
                    <div
                        className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-fixed bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/video_parralax.jpg')",
                            clipPath: "polygon(0 0, 100% 0, 100% 95%, 98% 96%, 95% 95%, 92% 97%, 88% 96%, 85% 98%, 80% 97%, 75% 99%, 70% 97%, 65% 98%, 60% 96%, 55% 98%, 50% 97%, 45% 99%, 40% 97%, 35% 98%, 30% 96%, 25% 98%, 20% 97%, 15% 99%, 10% 97%, 5% 98%, 2% 96%, 0 95%)"
                        }}
                    >
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Play button */}
                        <div className="relative z-20 h-full flex flex-col items-center justify-center">
                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="group relative"
                            >
                                {/* Expanding ring on hover */}
                                <div className="absolute inset-0 rounded-full border border-white/40 opacity-0 scale-125 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />

                                {/* Play button circle */}
                                <div className="w-24 h-24 md:w-28 md:h-28 bg-[#53675C] rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 transition">
                                    <svg width="36" height="36" fill="white" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </button>

                            <p className="text-white text-lg mt-6 tracking-widest uppercase">
                                VIDEO TOUR
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content Sections - These will scroll over the fixed background */}
                <div className="relative bg-white z-20">
                    {/* Specialist & Working Hours Section */}
                    <section className="py-20 md:py-32 px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                {/* Left Text Content */}
                                <div className="lg:col-span-4 space-y-6">
                                    <h5 className="text-xl md:text-2xl font-serif italic uppercase text-black">
                                        EACH SPECIALIST IS DEDICATED TO UNDERSTANDING YOUR GOALS, ENSURING TREATMENTS <span className="text-[#53675C]">ARE TAILORED TO YOUR UNIQUE BEAUTY NEEDS</span>
                                    </h5>


                                </div>

                                {/* Center Circular Image */}
                                <div className="lg:col-span-4 flex justify-center">
                                    <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden">
                                        <img
                                            src="/aboutus2.jpg"
                                            alt="Professional Barber"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Right Working Hours */}
                                <div className="lg:col-span-4">
                                    <div className="bg-gray-50 p-8 rounded-lg">
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-6">
                                            WORKING HOURS
                                        </h3>

                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                                <span className="text-sm font-medium text-black">Monday</span>
                                                <span className="text-sm text-[#53675C]">10:00 AM - 9:00 PM</span>
                                            </div>

                                            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                                <span className="text-sm font-medium text-black">Tuesday</span>
                                                <span className="text-sm text-[#53675C]">10:00 AM - 9:00 PM</span>
                                            </div>

                                            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                                <span className="text-sm font-medium text-black">Wednesday</span>
                                                <span className="text-sm text-[#53675C]">10:00 AM - 9:00 PM</span>
                                            </div>

                                            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                                <span className="text-sm font-medium text-black">Thursday</span>
                                                <span className="text-sm text-[#53675C]">10:00 AM - 9:00 PM</span>
                                            </div>

                                            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                                <span className="text-sm font-medium text-black">Friday</span>
                                                <span className="text-sm text-[#53675C]">10:00 AM - 9:00 PM</span>
                                            </div>

                                            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                                <span className="text-sm font-medium text-black">Saturday</span>
                                                <span className="text-sm text-[#53675C]">10:00 AM - 9:00 PM</span>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-medium text-black">Sunday</span>
                                                <span className="text-sm text-[#53675C]">10:00 AM - 9:00 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Statistics Section */}
                    <section className="py-16 px-4 bg-white border-t border-gray-200">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Stat 1 */}
                                <div className="text-center">
                                    <h2 className="text-5xl md:text-6xl font-bold text-[#53675C] mb-2">1000+</h2>
                                    <p className="text-xs uppercase tracking-wider text-black font-medium">SATISFIED CUSTOMERS</p>
                                </div>

                                {/* Stat 2 */}
                                <div className="text-center">
                                    <h2 className="text-5xl md:text-6xl font-bold text-[#53675C] mb-2">15</h2>
                                    <p className="text-xs uppercase tracking-wider text-black font-medium">EXPERIENCED BARBERS</p>
                                </div>

                                {/* Stat 3 */}
                                <div className="text-center">
                                    <h2 className="text-5xl md:text-6xl font-bold text-[#53675C] mb-2">100+</h2>
                                    <p className="text-xs uppercase tracking-wider text-black font-medium">HAIRCUTS PER MONTH</p>
                                </div>

                                {/* Stat 4 */}
                                <div className="text-center">
                                    <h2 className="text-5xl md:text-6xl font-bold text-[#53675C] mb-2">20</h2>
                                    <p className="text-xs uppercase tracking-wider text-black font-medium">BARBER AWARDS</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <Testimonials />

                    {/* Useful Information / FAQ Section */}
                    <section className="py-20 md:py-32 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                {/* Left - FAQ Content */}
                                <div className="space-y-8">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.3em] text-[#53675C] mb-4">USEFUL INFORMATION</p>
                                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-8">
                                            POPULAR QUESTIONS ABOUT SALON SERVICES
                                        </h2>
                                    </div>

                                    {/* FAQ Items */}
                                    <FAQAccordion />

                                    {/* Read More Button */}
                                    <div className="pt-4">
                                        <a
                                            href="/contact"
                                            className="inline-block px-8 py-3 border-2 border-[#53675C] text-[#53675C] text-xs uppercase tracking-wider font-bold hover:bg-[#53675C] hover:text-white transition-all duration-300"
                                        >
                                            CONTACT US
                                        </a>
                                    </div>
                                </div>

                                {/* Right - Image */}
                                <div className="relative">
                                    <img
                                        src="/faq_img-1.jpg"
                                        alt="Professional Salon Tools"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Social Media Section */}
                    <section className="py-20 px-4 bg-[#0E0E0E]">
                        <div className="max-w-6xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <p className="text-[#C8AFAE] uppercase tracking-[0.3em] text-sm mb-4 font-medium">
                                    Stay Connected
                                </p>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                                    Follow Our{" "}
                                    <span className="text-[#C8AFAE] italic">Beauty Journey</span>
                                </h2>
                                <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                                    Join our community for daily inspiration, beauty tips, and exclusive behind-the-scenes content
                                </p>
                            </div>

                            {/* Social Media Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/anaplak_art_and_glam_salon?igsh=MW9vcjV3cDl3dGFvZg%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative bg-gradient-to-br from-[#C8AFAE]/10 to-[#F8C8DC]/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-[#C8AFAE]/30 hover:border-[#C8AFAE] transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#C8AFAE]/20 to-[#F8C8DC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10">
                                        {/* Instagram Icon */}
                                        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#C8AFAE] transition-colors">Instagram</h3>
                                        <p className="text-gray-400 text-sm mb-4">@anaplakartandglam</p>
                                        <div className="text-[#C8AFAE] font-semibold group-hover:underline flex items-center justify-center gap-2">
                                            Follow Us
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>

                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/anaplakartandglam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative bg-gradient-to-br from-[#F8C8DC]/10 to-[#F2D2BD]/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-[#F8C8DC]/30 hover:border-[#F8C8DC] transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#F8C8DC]/20 to-[#F2D2BD]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10">
                                        {/* Facebook Icon */}
                                        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#1877F2] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#F8C8DC] transition-colors">Facebook</h3>
                                        <p className="text-gray-400 text-sm mb-4">Anaplak Art And Glam</p>
                                        <div className="text-[#F8C8DC] font-semibold group-hover:underline flex items-center justify-center gap-2">
                                            Like Our Page
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>

                                {/* YouTube */}
                                <a
                                    href="https://www.youtube.com/@Anaplakartandglamsalon/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative bg-gradient-to-br from-[#F2D2BD]/10 to-[#C8AFAE]/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-[#F2D2BD]/30 hover:border-[#F2D2BD] transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#F2D2BD]/20 to-[#C8AFAE]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10">
                                        {/* YouTube Icon */}
                                        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#FF0000] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#F2D2BD] transition-colors">YouTube</h3>
                                        <p className="text-gray-400 text-sm mb-4">Beauty Tutorials</p>
                                        <div className="text-[#F2D2BD] font-semibold group-hover:underline flex items-center justify-center gap-2">
                                            Subscribe
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/919840088867"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative bg-gradient-to-br from-[#C8AFAE]/10 to-[#F8C8DC]/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-[#C8AFAE]/30 hover:border-[#C8AFAE] transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#C8AFAE]/20 to-[#F8C8DC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10">
                                        {/* WhatsApp Icon */}
                                        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#C8AFAE] transition-colors">WhatsApp</h3>
                                        <p className="text-gray-400 text-sm mb-4">+91 98400 88867</p>
                                        <div className="text-[#C8AFAE] font-semibold group-hover:underline flex items-center justify-center gap-2">
                                            Chat Now
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            {/* Bottom CTA */}
                            <div className="text-center bg-gradient-to-r from-[#C8AFAE]/10 to-[#F8C8DC]/10 border border-[#C8AFAE]/30 rounded-2xl p-8">
                                <p className="text-white text-xl mb-3 font-medium">
                                    Join our community and get inspired daily!
                                </p>
                                <p className="text-gray-400 text-base">
                                    📸 Share your transformation with <span className="text-[#C8AFAE] font-semibold">#alwaysbeanaplak</span>
                                </p>
                            </div>
                        </div>
                    </section>


                </div>
            </div>

            <VideoPlayerModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

            <Footer />
        </>
    )
}
