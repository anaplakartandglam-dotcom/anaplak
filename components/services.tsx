"use client"

import { useEffect, useRef, useState } from "react"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      name: "Hairstyle",
      desc: "Stylish and creative haircuts and decorative styling",
    },
    {
      name: "Hair Coloring",
      desc: "Special treatments to improve comfort, including medicated bath",
    },
    {
      name: "Hair Cut",
      desc: "Comprehensive care for coat, skin, nails, teeth and ears",
    },
    {
      name: "Extensions",
      desc: "Comprehensive care for coat, skin, nails, teeth and ears",
    },
    {
      name: "Highlight",
      desc: "Stylish and creative haircuts and decorative styling",
    },
    {
      name: "Glossing",
      desc: "Special treatments to improve comfort, including medicated bath",
    },
  ]

  return (
    <section ref={ref} className="py-20 md:py-32 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#53675C] text-sm uppercase tracking-widest mb-4">unique beauty needs</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Transform your style with professional hair services that highlight your natural beauty
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-500 p-8 rounded-lg border border-[#53675C]/30 hover:border-[#53675C] bg-black/50 hover:bg-[#53675C]/10 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#53675C] to-[#F8C8DC] mb-6 opacity-30"></div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
