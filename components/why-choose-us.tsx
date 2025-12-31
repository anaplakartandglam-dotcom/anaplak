"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Shield, Sparkles, Users, Clock, Heart } from "lucide-react"

export default function WhyChooseUs() {
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

    const features = [
        {
            icon: Award,
            title: "16+ Years Excellence",
            description: "Trusted by 5600+ satisfied customers since 2008. Award-winning salon with proven expertise.",
            color: "#C8AFAE",
        },
        {
            icon: Sparkles,
            title: "Premium Products",
            description: "We exclusively use internationally recognized luxury brands for superior results and lasting beauty.",
            color: "#F8C8DC",
        },
        {
            icon: Users,
            title: "Expert Stylists",
            description: "23 certified beauty specialists trained in latest techniques and trends from around the world.",
            color: "#F2D2BD",
        },
        {
            icon: Shield,
            title: "Hygiene First",
            description: "Sterilized tools, premium sanitization, and strict safety protocols for your peace of mind.",
            color: "#C8AFAE",
        },
        {
            icon: Clock,
            title: "Flexible Timing",
            description: "Open 10 AM - 9 PM daily. Walk-ins welcome. Online booking available for your convenience.",
            color: "#F8C8DC",
        },
        {
            icon: Heart,
            title: "Personalized Care",
            description: "Every service is customized to your unique needs, skin type, and style preferences.",
            color: "#F2D2BD",
        },
    ]

    return (
        <section ref={sectionRef} className="relative bg-[#0E0E0E] py-20 md:py-32 overflow-hidden">
            {/* Background Gradient Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#C8AFAE]/5 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#F8C8DC]/5 via-transparent to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <p className="text-[#C8AFAE] uppercase tracking-[0.3em] text-sm mb-4 font-medium">
                        Why Choose Anaplak
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                        Your Beauty, Our{" "}
                        <span className="text-[#C8AFAE] italic">Promise</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                        Experience the difference of a salon that truly cares about your beauty journey.
                        We combine expertise, luxury, and personalized attention to deliver exceptional results.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={index}
                                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C8AFAE]/50 transition-all duration-500 hover:transform hover:scale-105 ${isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                    }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                }}
                            >
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#C8AFAE]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                                        style={{
                                            backgroundColor: `${feature.color}20`,
                                        }}
                                    >
                                        <Icon
                                            className="w-8 h-8 transition-all duration-500"
                                            style={{ color: feature.color }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C8AFAE] transition-colors duration-300">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 leading-relaxed text-[15px]">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Decorative Corner Element */}
                                <div
                                    className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at top right, ${feature.color}, transparent)`,
                                    }}
                                />
                            </div>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <div
                    className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <a
                            href="https://www.welns.io/product/booking/WFRCHN984305/Anaplak?bk_src=GMAPS110"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-gradient-to-r from-[#C8AFAE] to-[#F8C8DC] text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <span className="relative z-10">Book Your Appointment</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <a
                            href="tel:+919840088867"
                            className="px-8 py-4 border-2 border-[#C8AFAE] text-[#C8AFAE] font-semibold rounded-full hover:bg-[#C8AFAE] hover:text-black transition-all duration-300"
                        >
                            Call +91 98400 88867
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm mt-6">
                        ⭐ Rated 4.9/5 by 5600+ Happy Customers
                    </p>
                </div>
            </div>
        </section>
    )
}
