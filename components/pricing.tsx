"use client"

import { useState } from "react"

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(2)

  const tabs = [
    {
      name: "Hairdresser",
      services: [
        { name: "Highlights", price: 35, desc: "Light reflections adding depth and dimension" },
        { name: "Balayage", price: 12, desc: "Hand painted technique for soft blended tones" },
        { name: "Extensions", price: 20, desc: "Volume and length using premium natural strands" },
        { name: "Scalp Care", price: 44, desc: "Treatments improving circulation and stimulating healthy growth" },
        { name: "Glossing", price: 18, desc: "Adds shine while refreshing existing hair color" },
      ],
    },
    {
      name: "Master",
      services: [
        { name: "Haircut", price: 12, desc: "Classic or modern cuts tailored to client's style" },
        { name: "Styling", price: 36, desc: "Daily or event styling with professional finishing" },
        { name: "Coloring", price: 45, desc: "Rich shades with long lasting natural results" },
        { name: "Bridal Hair", price: 67, desc: "Personalized styling designed for wedding day" },
        { name: "Toning", price: 24, desc: "Neutralizes unwanted shades leaving natural shine" },
      ],
    },
    {
      name: "Senior",
      services: [
        { name: "Highlights", price: 35, desc: "Light reflections adding depth and dimension" },
        { name: "Balayage", price: 12, desc: "Hand painted technique for soft blended tones" },
        { name: "Extensions", price: 20, desc: "Volume and length using premium natural strands" },
        { name: "Scalp Care", price: 44, desc: "Treatments improving circulation and stimulating healthy growth" },
        { name: "Glossing", price: 18, desc: "Adds shine while refreshing existing hair color" },
      ],
    },
  ]

  const bg = "/price_bg.png"

  return (
    <section className="relative py-20 md:py-32 text-white overflow-hidden bg-[#0f0f0f]">

      {/* STRONGER OVERLAY FOR MORE BG VISIBILITY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* MORE VISIBLE SCISSORS BG */}
      <img
        src={bg}
        alt="scissors"
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[900px] sm:w-[1100px] md:w-[1300px]
          opacity-90
          object-contain
          pointer-events-none
          select-none
        "
        style={{
          mixBlendMode: "screen",
          filter: "brightness(2) contrast(1.7)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto px-4 max-w-[1350px]">

        {/* HEADER */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-[#53675C] uppercase tracking-widest text-xs sm:text-sm mb-3">
            our prices
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-tight">
            DISCOVER <span className="font-semibold">HAIRSTYLE</span> PROCEDURES
          </h2>
        </div>

        {/* TABS – ALWAYS IN 1 ROW (MOBILE FRIENDLY) */}
     {/* TABS — MOBILE SPECIAL DESIGN */}
{/* TABS — MOBILE SPECIAL DESIGN */}
<div className="mb-12 sm:mb-16 max-w-md mx-auto">

  {/* Outer pill background */}
  <div className="
    bg-[#111] 
    rounded-full 
    p-1 
    flex 
    w-full
    shadow-md
    border border-[#1C1C1C]
  ">
    {tabs.map((tab, idx) => {
      const active = activeTab === idx

      return (
        <button
          key={idx}
          onClick={() => setActiveTab(idx)}
          className={`
            flex-1 
            py-3 
            text-[11px] 
            uppercase 
            tracking-widest 
            font-semibold 
            rounded-full 
            transition-all 
            duration-300
            ${
              active
                ? "bg-[#53675C] text-black shadow-lg"  /* BRAND GREEN */
                : "text-gray-200"
            }
          `}
        >
          {tab.name}
        </button>
      )
    })}
  </div>
</div>



        {/* PRICE LIST */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 max-w-5xl mx-auto">
          {tabs[activeTab].services.map((item, idx) => (
            <div key={idx} className="pb-4 sm:pb-6">
              <div className="flex items-center justify-between mb-2 sm:mb-3">

                {/* Name */}
                <h3 className="text-sm sm:text-lg font-semibold uppercase">
                  {item.name}
                </h3>

                {/* dotted line */}
                <div className="flex-grow border-b border-dotted border-gray-500 mx-3"></div>

                {/* Price */}
                <p className="text-base sm:text-xl font-bold">${item.price}</p>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
