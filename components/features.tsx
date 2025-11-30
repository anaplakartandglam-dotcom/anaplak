"use client"

import Masonry from "react-masonry-css"

export default function Features() {
  const items = [
    { title: "Hairstyle", image: "/gal_03-1024x848.jpg" },         // 1
    { title: "Hair Coloring", image: "/gal_02.jpg" },               // 2
    { title: "Hair Cut", image: "/gal_01-1024x848.jpg" },           // 3
    { title: "Extensions", image: "/gal_04.jpg" },                  // 4
    { title: "Glossing", image: "/gal_05-1024x848.jpg" },           // 5
    { title: "Highlight", image: "/gal_06.jpg" },                   // 6 (LAST)
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
          <p className="text-[#C8AFAE] text-xs uppercase tracking-[0.3em] mb-3">
            Unique Beauty Needs
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white max-w-3xl mx-auto">
            Transform your style with professional hair services
          </h2>

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
              <img
  src={item.image}
  className="
    w-full h-auto object-cover
    hover:scale-[1.03] transition
    max-sm:scale-[0.92]   /* ← slightly smaller on mobile */
  "
/>

              <p className="text-white text-[11px] uppercase tracking-widest mt-2 pl-1">
                {item.title}
              </p>
            </div>
          ))}
        </Masonry>

      </div>
    </section>
  )
}
