"use client"

import { useEffect, useRef, useState } from "react"
import { Crown, Scissors, Sparkles, Palette, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesShowcase() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const services = [
        {
            icon: Crown,
            title: "Bridal Makeup",
            description: "Transform into the most radiant version of yourself. Complete bridal packages with trial sessions and day-of services.",
            features: ["Pre-wedding consultation", "Trial makeup session", "Premium luxury products", "Touch-up kit included"],
            color: "#C8AFAE",
            image: "/elegant-bride-makeup-and-hairstyling-beauty-portra.jpg"
        },
        {
            icon: Scissors,
            title: "Hair Styling",
            description: "Expert hair care from everyday styles to special occasions. Professional styling for all hair types and events.",
            features: ["Customized styling", "Bridal hairstyles", "Party updos", "Professional products"],
            color: "#F8C8DC",
            image: "/professional-hair-styling-salon-treatment-luxury.jpg"
        },
        {
            icon: Sparkles,
            title: "Hair Treatment",
            description: "Advanced texture treatments for healthy, manageable hair. Transform your hair with our premium treatment services.",
            features: ["Perming & Smoothing", "Keratin treatment", "Botox & Botoplex", "Nano Plastia"],
            color: "#C8AFAE",
            image: "/professional-hair-styling-salon-treatment-luxury.jpg"
        },
        {
            icon: Palette,
            title: "Hair Coloring",
            description: "From subtle highlights to complete transformations. Latest techniques with premium, long-lasting color products.",
            features: ["Balayage & highlights", "Ammonia-free options", "Color protection", "Free touch-ups"],
            color: "#F2D2BD",
            image: "/hair-coloring-highlights-balayage-salon-transforma.jpg"
        },
        {
            icon: Scissors,
            title: "Hair Extension",
            description: "Add length, volume, and style with premium hair extensions. Seamless, natural-looking results.",
            features: ["Tape extensions", "Nano extensions", "Clip & Go", "Maintenance services"],
            color: "#C8AFAE",
            image: "/professional-hair-styling-salon-treatment-luxury.jpg"
        },
        {
            icon: Sparkles,
            title: "Facial Treatments",
            description: "Rejuvenate your skin with customized facials. Deep cleansing, anti-aging, and skin brightening treatments.",
            features: ["Skin analysis", "Deep cleansing", "Anti-aging serums", "Relaxing massage"],
            color: "#C8AFAE",
            image: "/luxury-facial-treatment-spa-skincare-relaxation.jpg"
        },
        {
            icon: Heart,
            title: "Manicure & Pedicure",
            description: "Pamper yourself with luxurious nail care. Premium products for beautiful, healthy nails.",
            features: ["Nail health care", "Gel polish options", "Hand/foot massage", "Hygiene-focused"],
            color: "#F8C8DC",
            image: "/luxury-manicure-pedicure-nail-salon-spa-treatment.jpg"
        },
        {
            icon: Heart,
            title: "Nail Art & Extension",
            description: "Creative nail designs and professional extensions. From French tips to 3D art and bridal designs.",
            features: ["Gel & Acrylic extensions", "French & Chrome art", "3D & Marble designs", "Bridal nail art"],
            color: "#F2D2BD",
            image: "/luxury-manicure-pedicure-nail-salon-spa-treatment.jpg"
        },
        {
            icon: Palette,
            title: "Party Makeup",
            description: "Glamorous looks for celebrations and events. Long-lasting, photo-ready makeup with complimentary styling.",
            features: ["Event-appropriate", "Long-lasting formula", "Photo-ready finish", "Hair styling included"],
            color: "#F2D2BD",
            image: "/glamorous-party-makeup-evening-look-celebration.jpg"
        },
    ]

    return (
        <section ref={sectionRef} className="relative bg-[#0E0E0E] py-20 md:py-32 overflow-hidden">
            {/* Background Gradient Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#C8AFAE]/5 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#F8C8DC]/5 via-transparent to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <a
                    href="https://www.welns.io/product/booking/WFRCHN984305/Anaplak?bk_src=GMAPS110"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center mb-16 transition-all duration-1000 cursor-pointer group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <p className="text-[#C8AFAE] uppercase tracking-[0.3em] text-sm mb-4 font-medium group-hover:text-[#F8C8DC] transition-colors">
                        Our Services
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 group-hover:text-[#C8AFAE] transition-colors">
                        Discover Our{" "}
                        <span className="text-[#C8AFAE] italic group-hover:text-[#F8C8DC]">Premium Services</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed group-hover:text-white transition-colors">
                        From bridal transformations to everyday beauty, we offer a complete range of premium services
                        tailored to your unique style and needs.
                    </p>
                </a>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={index}
                                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C8AFAE]/50 transition-all duration-500 hover:transform hover:scale-105 ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                    }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                }}
                            >
                                {/* Service Image Background */}
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                                    <div
                                        className="w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url('${service.image}')` }}
                                    />
                                </div>

                                {/* Stronger Gradient Overlay for Better Text Visibility */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/70 via-[#0E0E0E]/85 to-[#0E0E0E]" />

                                {/* Content */}
                                <div className="relative z-10 p-8">
                                    {/* Icon */}
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg"
                                        style={{
                                            backgroundColor: `${service.color}40`,
                                            border: `2px solid ${service.color}`,
                                        }}
                                    >
                                        <Icon
                                            className="w-8 h-8 transition-all duration-500"
                                            style={{ color: service.color }}
                                        />
                                    </div>

                                    {/* Title with Text Shadow */}
                                    <h3
                                        className="text-2xl font-bold text-white mb-4 group-hover:text-[#C8AFAE] transition-colors duration-300"
                                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                                    >
                                        {service.title}
                                    </h3>

                                    {/* Description with Better Contrast */}
                                    <p
                                        className="text-gray-200 leading-relaxed text-base mb-6 font-medium"
                                        style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Features List with Better Visibility */}
                                    <ul className="space-y-3 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-white font-medium">
                                                <span
                                                    className="mt-1 h-2 w-2 flex-shrink-0 rounded-full shadow-lg"
                                                    style={{
                                                        backgroundColor: service.color,
                                                        boxShadow: `0 0 8px ${service.color}`
                                                    }}
                                                />
                                                <span style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Decorative Corner Element */}
                                <div
                                    className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at top right, ${service.color}, transparent)`,
                                    }}
                                />
                            </div>
                        )
                    })}
                </div>

                {/* Explore All Services CTA */}
                <div
                    className={`text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="bg-gradient-to-r from-[#C8AFAE]/10 to-[#F8C8DC]/10 border border-[#C8AFAE]/30 rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                            Want to See Our Complete Service Menu?
                        </h3>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            Explore our full range of premium beauty services, detailed pricing, and package options
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <Link
                                href="/services"
                                className="group relative px-8 py-4 bg-gradient-to-r from-[#C8AFAE] to-[#F8C8DC] text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2"
                            >
                                <span className="relative z-10">Explore All Services</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Link>

                            <a
                                href="https://www.welns.io/product/booking/WFRCHN984305/Anaplak?bk_src=GMAPS110"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 border-2 border-[#C8AFAE] text-[#C8AFAE] font-semibold rounded-full hover:bg-[#C8AFAE] hover:text-black transition-all duration-300"
                            >
                                Book Appointment
                            </a>
                        </div>

                        <p className="text-gray-400 text-sm mt-6">
                            ⭐ Rated 4.9/5 by 5600+ Happy Customers | 📞 Call +91 98400 88867
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
