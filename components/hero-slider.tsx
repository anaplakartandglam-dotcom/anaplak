"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSmile, faStar } from "@fortawesome/free-solid-svg-icons"
import { businessInfo, whatsappDeepLink } from "@/data/businessInfo"
import TrackLink from "@/components/track-link"
import { pushEvent } from "@/lib/gtm"

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  // BRAND COLORS
  const PRIMARY = "#53675C"
  const SECONDARY = "#F8C8DC"

  const slides = [
    {
      line1: "PREMIUM SALON",
      line2: "BEAUTY EXPERTS",
      image: "/SLIDE_01.webp",
    },
    {
      line1: "BRIDAL MAKEUP",
      line2: "GLAM STUDIO",
      image: "/SLIDE_02.webp",
    },
    {
      line1: "STYLE DESIGN",
      line2: "HAIR ARTISTS",
      image: "/SLIDE_03.webp",
    },
    {
      line1: "SKIN CARE",
      line2: "BEAUTY BAR",
      image: "/SLIDE_04.webp",
    },
  ]

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    )
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent">

      {/* SLIDES STACK — FADES + ZOOMS */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 w-full h-full transition-opacity duration-[2000ms]
            ${current === index ? "opacity-100" : "opacity-0"}
          `}
        >
          <Image
            src={slide.image}
            alt={`${slide.line1} ${slide.line2}`}
            fill
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "auto"}
            quality={75}
            sizes="100vw"
            className={`
              object-cover
              transition-transform duration-[9000ms] ease-out
              ${current === index ? "scale-[1.18]" : "scale-[1.05]"}
            `}
          />
          <div className="absolute inset-0"></div>
        </div>
      ))}

      <div className="absolute inset-0 w-full h-full bg-black/40" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center" style={{ top: '140px' }}>
        <div className="pl-6 sm:pl-10 md:pl-16 lg:pl-24 max-w-[1000px]">

          <div className="flex flex-col-reverse">

            {/* H1 — MAIN OFFER */}
            <h1
              className="mt-4 text-[16px] sm:text-[18px] md:text-[20px] text-[#e8ded3]/90 max-w-[650px] animate-fadeUp"
              style={{ animationDelay: "0.2s" }}
            >
              Best bridal makeup, hair styling & personalized beauty services in Chennai, Maduravoyal
            </h1>

            {/* H2 — CHANGING HIGHLIGHT TEXT */}
            <h2
              className="uppercase text-[#e8ded3] animate-fadeUp"
              style={{
                fontFamily: "Gilroy",
                fontWeight: 800,
                lineHeight: "1.05",
                animationDelay: "0.35s",
              }}
            >
              <span className="block text-[35px] sm:text-[45px] md:text-[55px] lg:text-[70px]">
                {slides[current].line1}
              </span>
              <span className="block text-[35px] sm:text-[45px] md:text-[55px] lg:text-[70px]">
                {slides[current].line2}
              </span>
            </h2>
            
          </div>

          {/* CTA BUTTONS */}
          <div
            className="flex flex-wrap items-center gap-4 mt-8 animate-fadeUp"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              href={businessInfo.bookingUrl}
              target="_blank"
              onClick={() => pushEvent("booking_click")}
            >
              {/* PRIMARY CTA */}
              <button
                className="px-10 py-4 rounded-full transition-all duration-400 cursor-pointer"
                style={{
                  backgroundColor: PRIMARY,
                  color: "#ffffff",
                  fontFamily: "Gilroy",
                  fontWeight: 600,
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  boxShadow: "0 0 25px rgba(83,103,92,0.45)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = SECONDARY
                  e.currentTarget.style.color = "#0E0E0E"
                  e.currentTarget.style.transform = "translateY(-3px)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = PRIMARY
                  e.currentTarget.style.color = "#ffffff"
                  e.currentTarget.style.transform = "translateY(0px)"
                }}
                aria-label="Book appointment"
              >
                Book Appointment
              </button>
            </Link>

            {/* SECONDARY CTA */}
            <TrackLink
              kind="whatsapp_click"
              href={whatsappDeepLink()}
              target="_blank"
              className="px-8 py-4 rounded-full border border-white/40 text-white text-[13px] tracking-[2px] uppercase transition-all duration-300 hover:bg-white hover:text-black"
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0px)"
              }}
            >
              WhatsApp Now
            </TrackLink>
          </div>

          {/* TRUST SIGNAL */}
          <div
            className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2 text-white/80 text-sm animate-fadeUp"
            style={{ animationDelay: "0.8s" }}
          >
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> Rated 4.8
            </span>
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faFaceSmile} className="text-yellow-400" /> 1000+ Happy Customers
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT BULLETS (hidden on mobile) */}
      {/* RIGHT BULLETS (hidden on mobile) */}
      {/* <div
  className="
    hidden sm:flex flex-col gap-6
    absolute right-10 top-1/2 -translate-y-1/2 z-20
  "
>
  {slides.map((_, index) => {
    const isActive = index === current

    return (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`
          w-12 h-12 flex items-center justify-center transition-all duration-300
          ${isActive ? "rounded-full border border-white/40" : "border-none"}
        `}
        style={{
          color: isActive ? "#ffffff" : "rgba(255,255,255,0.45)",
          fontWeight: isActive ? "600" : "400",
          fontSize: "14px",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </button>
    )
  })}
</div> */}


      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 1.2s ease forwards;
        }
      `}</style>

    </section>
  )
}
