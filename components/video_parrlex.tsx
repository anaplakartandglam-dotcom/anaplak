"use client"

import { useState } from "react"
import VideoPlayerModal from "./video-player-modal"

export default function VideoParallax() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="relative py-24 bg-[#080808]">

        {/* INFO BAR */}
        <div className="px-5 py-5 text-center mb-5">
          <h2 className="text-white font-semibold text-4xl md:text-5xl lg:text-6xl">
            ANAPLAK Art and Glam Salon – Studio Tour
          </h2>
          <p className="text-gray-400 mt-1 text-lg md:text-2xl lg:text-3xl">
            Explore our premium salon facilities and services in Maduravoyal, Chennai.
          </p>
        </div>

        <div
          className="
            w-full max-w-[1000px] mx-auto
            px-4 md:px-8
            h-[320px] md:h-[460px]   /* Slight height increase */
            rounded-[140px] lg:rounded-[260px]
            border-[22px] border-[#1A1A1A]
            overflow-hidden
            bg-fixed bg-cover bg-center
          "
          style={{ backgroundImage: "url('/anaplak.jpg')" }}
        >

          <div className="relative z-20 h-full flex flex-col items-center justify-center">
            <button 
              onClick={() => setOpen(true)} 
              className="group relative"
              aria-controls="video-player-modal"
              aria-expanded={open}
              aria-haspopup="dialog"
            >

              <div className="absolute inset-0 rounded-full border border-white/40 opacity-0 scale-125 
                group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />

              <div className="w-24 h-24 md:w-28 md:h-28 bg-[#E8DDD3] rounded-full shadow-xl 
                flex items-center justify-center group-hover:scale-110 transition">

                <svg width="36" height="36" fill="black" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>

            <p className="text-white text-lg mt-6 tracking-widest">
              VIDEO TOUR
            </p>
          </div>
        </div>
      </section>

      <VideoPlayerModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
