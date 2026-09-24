"use client"

import Masonry from "react-masonry-css"
import Image from "next/image"
import TrackLink from "@/components/track-link"
import { businessInfo } from "@/data/businessInfo"

export default function Features() {
  const items = [
    { title: "", image: "/transformation-1.webp", alt: "Professional hair styling transformation at Anaplak salon" },
    { title: "", image: "/transformation-2.webp", alt: "Bridal makeup and hair styling service" },
    { title: "", image: "/transformation-3.webp", alt: "Expert haircut and styling result" },
    { title: "", image: "/transformation-4.webp", alt: "Hair coloring and highlights transformation" },
    { title: "", image: "/transformation-5.webp", alt: "Premium hair treatment results" },
    { title: "", image: "/transformation-6.webp", alt: "Creative hairstyling and beauty transformation" },
  ]

  const breakpoints = {
    default: 3,
    1024: 2,
    640: 1,
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-4">

        <div className="text-center mb-16">
          <p className="text-[#F8C8DC] text-xs uppercase tracking-[0.3em] mb-3">
            Unique Beauty Needs
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white max-w-3xl mx-auto">
            Transform your style with professional hair services
          </h2>

          {/* Desktop-only heading */}
          <h3 className="hidden md:block text-2xl md:text-3xl font-medium text-white/90 max-w-3xl mx-auto mt-6">
            Find the perfect balance between elegance and comfort with{" "}
            <span className="text-[#F8C8DC]">hairstyles</span>
          </h3>

          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            that highlight your natural beauty while keeping your hair strong healthy
          </p>
        </div>

        {/* MASONRY GRID */}
        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-6"
          columnClassName="masonry-column"
        >
          {items.map((item, i) => (
            <div key={i} className="mb-6 overflow-hidden rounded">
              <div className={`relative w-full ${i === 0 || i === 2 || i === 4 ? "h-[380px]" : "h-[480px]"}`}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-[1.03] transition"
                />
              </div>


              {/* 
              <p className="text-white text-[11px] uppercase tracking-widest mt-2 pl-1">
                {item.title}
              </p> */}
            </div>
          ))}
        </Masonry>

        <div className="flex justify-center mt-8">
          <TrackLink
            kind="booking_click"
            href={businessInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F8C8DC] text-black font-semibold rounded-full hover:bg-white transition-all duration-300 hover:scale-105"
          >
            Transform Me
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </TrackLink>
        </div>

      </div>
    </section>
  )
}
