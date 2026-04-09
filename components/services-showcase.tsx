"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCrown,
  faScissors,
  faWandMagicSparkles,
  faPalette,
  faSpa,
  faHandSparkles
} from "@fortawesome/free-solid-svg-icons"

export default function ServicesShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const services = [
  {
    icon: faCrown,
    title: "Bridal Makeup",
    description: "Flawless, long-lasting bridal makeup designed for your big day.",
    features: ["Trial Session", "Premium Products", "Complete Bridal Styling"],
    cta: "Book Bridal Consultation",
    color: "#FF8FAB",
    image: "/elegant-bride-makeup-and-hairstyling-beauty-portra.jpg"
  },
  {
    icon: faScissors,
    title: "Hair Styling",
    description: "From everyday elegance to event-ready glam.",
    features: ["Customized Styling", "Bridal Hairstyles", "Party Looks"],
    cta: "Get Hair Styling",
    color: "#FF8FAB", // vibrant pink
    image: "/professional-hair-styling-salon-treatment-luxury.jpg"
  },
  {
    icon: faWandMagicSparkles,
    title: "Hair Treatment",
    description: "Smooth, repair, and transform your hair.",
    features: ["Keratin", "Smoothening", "Damage Repair"],
    cta: "Explore Treatments",
    color: "#FF8FAB", // soft rose
    image: "/professional-hair-styling-salon-treatment-luxury.jpg"
  },
  {
    icon: faPalette,
    title: "Hair Coloring",
    description: "Modern color techniques for a fresh new look.",
    features: ["Balayage", "Highlights", "Ammonia-Free"],
    cta: "View Colors",
    color: "#FF8FAB", // peach tone
    image: "/hair-coloring-highlights-balayage-salon-transforma.jpg"
  },
  {
    icon: faSpa,
    title: "Facial Treatments",
    description: "Glow with customized skincare treatments.",
    features: ["Deep Clean", "Anti-Aging", "Brightening"],
    cta: "Book Facial",
    color: "#FF8FAB", // light pink
    image: "/luxury-facial-treatment-spa-skincare-relaxation.jpg"
  },
  {
    icon: faHandSparkles,
    title: "Nail & Beauty",
    description: "Luxury nail care and creative designs.",
    features: ["Gel Polish", "Nail Art", "Spa Care"],
    cta: "Book Nail Service",
    color: "#FF8FAB", // stronger pink (eye-catching)
    image: "/luxury-manicure-pedicure-nail-salon-spa-treatment.jpg"
  },
]

  return (
    <section ref={sectionRef} className="relative bg-[#0E0E0E] py-20 md:py-32 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#F8C8DC]/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#F8C8DC]/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#F8C8DC] uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Bring Out{" "}
            <span className="text-[#F8C8DC] italic">Your Best Look</span>
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From bridal transformations to everyday elegance — designed just for you.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 hover:scale-105 border-[#F8C8DC] shadow-[0_0_20px_rgba(200,175,174,0.25)]
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >

              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />

              {/* CONTENT */}
              <div className="relative z-10 p-8">

                {/* ICON */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-full mb-6"
                  style={{
                    backgroundColor: `${service.color}30`,
                    border: `1px solid ${service.color}`
                  }}
                >
                  <FontAwesomeIcon icon={service.icon} style={{ color: service.color }} />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-300 text-sm mb-5">
                  {service.description}
                </p>

                {/* FEATURES */}
                <ul className="space-y-2 mb-5 text-sm text-gray-200">
                  {service.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://www.welns.io/product/booking/WFRCHN984305/Anaplak?bk_src=GMAPS110"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide transition hover:gap-3"
                  style={{ color: service.color }}
                >
                  {service.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Not Sure What to Choose?
          </h3>

          <p className="text-gray-300 mb-6">
            Get expert guidance and find the perfect service for your needs.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/services"
              className="px-6 py-3 bg-[#F8C8DC] text-black rounded-full font-semibold hover:scale-105 transition"
            >
              Explore Services
            </Link>

            <a
              href="https://www.welns.io/product/booking/WFRCHN984305/Anaplak?bk_src=GMAPS110"
              target="_blank"
              className="px-6 py-3 border border-[#F8C8DC] text-[#F8C8DC] rounded-full hover:bg-[#F8C8DC] hover:text-black transition"
            >
              Book Appointment
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}