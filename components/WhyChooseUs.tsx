"use client"

import { Sparkles, ShieldCheck, UserCheck, Clock, Award, Heart } from "lucide-react"

export default function Features() {
    const features = [
        {
            icon: Sparkles,
            title: "Premium Products",
            desc: "We use only high-quality, skin-safe and professional-grade products."
        },
        {
            icon: UserCheck,
            title: "Expert Stylists",
            desc: "Experienced professionals delivering precision and personalized styling."
        },
        {
            icon: ShieldCheck,
            title: "Hygiene & Safety",
            desc: "Strict hygiene standards to ensure a safe and comfortable experience."
        },
        {
            icon: Clock,
            title: "On-Time Service",
            desc: "We respect your time with efficient and well-managed appointments."
        },
        {
            icon: Award,
            title: "Trusted by 1000+ Clients",
            desc: "Highly rated salon with consistent customer satisfaction."
        },
        {
            icon: Heart,
            title: "Personalized Care",
            desc: "Every service is tailored to suit your unique style and needs."
        }
    ]

    return (
        <section className="bg-[#0E0E0E] py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div
                    className={`text-center mb-16 transition-all duration-1000`}
                >
                    <p className="text-[#F8C8DC] uppercase tracking-[0.3em] text-sm mb-4 font-medium">
                        Why Choose Anaplak
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                        Your Beauty, Our{" "}
                        <span className="text-[#F8C8DC] italic">Promise</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                        Experience the difference of a salon that truly cares about your beauty journey.
                        We combine expertise, luxury, and personalized attention to deliver exceptional results.
                    </p>
                </div>

                {/* FEATURES GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                    {features.map((item, index) => {
                        const Icon = item.icon

                        return (
                            <div
                                key={index}
                                className="group bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-[#F8C8DC]/40 hover:scale-[1.03]"
                            >
                                {/* ICON */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-full mb-5 bg-[#F8C8DC]/10 border border-[#F8C8DC]/30 group-hover:scale-110 transition">
                                    <Icon className="text-[#F8C8DC]" size={22} />
                                </div>

                                {/* TITLE */}
                                <h3 className="text-white text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        )
                    })}

                </div>

            </div>
        </section>
    )
}