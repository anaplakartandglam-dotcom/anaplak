"use client"

import { useState, useEffect, useRef } from "react"

export default function Testimonials() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(0)

  const testimonials = [
    {
      name: "Bala Murugan",
      role: "Verified Customer",
      iconColor: "#53675C",
      text: "I visited Anaplak Art and Glam Salon for a haircut, and I was styled by Vignesh, their senior stylist. He did an excellent job, understood exactly what I wanted, and the final result was perfect. The staff members were very friendly, polite, and professional. The salon's atmosphere is clean, classy, and gives a very royal vibe.",
      rating: 5,
    },
    {
      name: "Lokesh R",
      role: "Verified Customer",
      iconColor: "#C8AFAE",
      text: "Just got an amazing haircut at Anaplak Art And Glam Salon and I'm loving it! The stylist was super skilled and listened to exactly what I wanted. The vibe was chill, and I felt totally at ease. Left feeling fresh and confident - thanks to the awesome team!",
      rating: 5,
    },
    {
      name: "Ajay Thenneti",
      role: "Verified Customer",
      iconColor: "#8B9A8E",
      text: "The salon ambience was outstanding—clean, well-organized, and beautifully designed. The lighting was soft and relaxing, the seating was comfortable, and the entire space felt fresh and welcoming. The moment I walked in, I felt calm and taken care of.",
      rating: 5,
    },
    {
      name: "Anand V",
      role: "Verified Customer",
      iconColor: "#A68A89",
      text: "Excellent service by staff Vignesh, eye brows raise ambience, warm welcome staffs. Keep rocking CEO in the house Kalpana!",
      rating: 5,
    },
    {
      name: "Santhi Babu",
      role: "Verified Customer",
      iconColor: "#6B7F73",
      text: "I received an excellent service from Rajani. Her attention to detail, professionalism, and friendly approach made the experience exceptional. Highly recommended!",
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

          {testimonials.slice(active * 2, active * 2 + 2).map((t, index) => (
            <div
              key={index}
              className={`bg-[#1B1B1B] border border-[#2A2A2A] p-10 transition-all duration-700 relative ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
                {/* User Icon SVG */}
                <div
                  className="w-[75px] h-[75px] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: t.iconColor }}
                >
                  <svg
                    className="w-[45px] h-[45px] text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
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
                <p className="text-gray-500 text-[14px] mb-2">Customer's rate</p>
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
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition ${active === i ? "bg-[#F8C8DC]" : "bg-[#666]"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
