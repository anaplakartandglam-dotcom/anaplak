"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Team() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const team = [
    { name: "Enzo Romano", role: "Stylist", level: "MASTER", rating: "4.6", img: "/team_02-360x500.jpg" },
    { name: "Martina Greco", role: "Colorist", level: "SENIOR", rating: "4.7", img: "/team_03-360x500.jpg" },
    { name: "Fabio Santoro", role: "Beauty Artist", level: "JUNIOR", rating: "4.4", img: "/team_04-360x500.jpg" },
    { name: "Matteo Ricci", role: "Stylist", level: "MASTER", rating: "4.8", img: "/team_05-360x500.jpg" },
    { name: "Alessandro Moretti", role: "Beauty Artist", level: "SENIOR", rating: "4.9", img: "/team_06-360x500.jpg" },
    { name: "Bianca Corsini", role: "Stylist", level: "SENIOR", rating: "4.7", img: "/team_07-360x500.jpg" },
    { name: "Enzo Romano", role: "Beauty Artist", level: "MASTER", rating: "4.8", img: "/team_08-360x500.jpg" },
  ]

  const scroll = (dir: "left" | "right") => {
    const slider = scrollRef.current
    if (!slider) return

    const cards = slider.children
    const cardWidth = (cards[0] as HTMLElement).offsetWidth + 24 // gap-6 = 24px

    slider.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-20 bg-[#0F0F0F] border-t border-[#53675C]/20">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="w-full mb-12">
  <h2
  className="
    text-white 
    font-semibold 
    leading-[1.25] 
    text-[26px] 
    sm:text-[30px] 
    md:text-[34px]
    lg:text-[38px]
    max-w-4xl
    mx-auto
    md:mx-0
    text-center
    md:text-left
    text-justify md:text-left     /* ← Added for mobile justify */
  "
>
  EACH SPECIALIST IS DEDICATED TO UNDERSTANDING YOUR GOALS,
  <br className="hidden md:block" />
  ENSURING TREATMENTS ARE{" "}
  <span className="italic font-light">
    TAILORED TO YOUR UNIQUE BEAUTY NEEDS
  </span>
</h2>

</div>


        <div className="flex gap-4 justify-end mb-4">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center
            text-white hover:bg-white hover:text-black transition cursor-pointer"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center
            text-white hover:bg-white hover:text-black transition cursor-pointer"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* SLIDER */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth"
          style={{
            scrollSnapType: "x mandatory",
          }}
        >
          {team.map((m, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full lg:w-1/4"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="w-full h-[420px] overflow-hidden rounded-lg mb-3">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-white text-lg font-semibold">{m.name}</h3>

              <div className="flex items-center gap-2 mt-1 text-sm text-gray-300">
                <span className="px-2 py-[2px] text-[10px] rounded bg-[#1A1A1A] border border-white/10 uppercase">
                  {m.level}
                </span>
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-gray-300 text-xs">{m.rating}</span>
              </div>

              <p className="text-gray-400 text-sm mt-1">{m.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
