"use client"

import { useState, useEffect, useRef } from "react"

export default function Testimonials() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(0)

  const testimonials = [
    {
      name: "Stefanie Rashford",
      role: "IT Developer",
      img: "/testimonials_01-140x140.jpg",
      text: "This place is wonderful. The staff are friendly and professional, and the atmosphere is relaxing. I loved my haircut and color, and people keep complimenting me. I will definitely come",
      rating: 5,
    },
    {
      name: "Patric Stone",
      role: "Barista",
      img: "/testimonials_02-140x140.jpg",
      text: "Service was exceptional, and it's clear that you have a genuine passion for what you do. The attention to detail and willingness to personalize the experience made it truly memorable.",
      rating: 5,
    },
  ]

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-[#0F0F0F]">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#C8AFAE] text-sm tracking-[0.35em] uppercase mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-white text-[44px] md:text-[54px] font-bold leading-tight tracking-wide">
            WHAT OUR CUSTOMERS SAY
          </h2>
        </div>

        {/* Testimonial Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`bg-[#1B1B1B] border border-[#2A2A2A] p-10 transition-all duration-700 relative ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >

              {/* Quote icon (outline like screenshot) */}
              <svg
                className="absolute right-10 top-10 w-10 h-10 text-[#666] opacity-70"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 48 48"
              >
                <path d="M18 18h-6l6-12h-6L6 18v12h12V18zm24 0h-6l6-12h-6l-6 12v12h12V18z" />
              </svg>

              {/* Top section: avatar + name */}
              <div className="flex items-center gap-5 mb-8">
                <img
                  src={t.img}
                  className="w-[75px] h-[75px] rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white text-[20px] font-semibold tracking-wider">
                    {t.name.toUpperCase()}
                  </h4>
                  <p className="text-gray-400 text-[14px]">{t.role}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full border-t border-[#2A2A2A] mb-8"></div>

              {/* Testimonial text */}
              <p className="text-[#cccccc] italic text-[22px] leading-[1.6] mb-8 font-serif">
                {t.text}
              </p>

              {/* Rating */}
              <div className="mt-2">
                <p className="text-gray-500 text-[14px] mb-2">Customer’s rate</p>
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-[#F8C8DC] text-[18px]">★</span>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition ${
                active === i ? "bg-[#F8C8DC]" : "bg-[#666]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
