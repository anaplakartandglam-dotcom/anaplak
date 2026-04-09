"use client"

export default function CTASection() {
  return (
    <section className="bg-[#0E0E0E] py-20 md:py-28 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
          Ready for Your{" "}
          <span className="text-[#F8C8DC] italic">Transformation?</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Premium beauty services tailored just for you.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">

          {/* PRIMARY CTA */}
          <a
            href="https://www.welns.io/product/booking/WFRCHN984305/Anaplak?bk_src=GMAPS110"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#F8C8DC] text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Book Appointment
          </a>

          {/* SECONDARY CTA */}
          <a
            href="https://wa.me/919840088867"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-[#F8C8DC] text-[#F8C8DC] rounded-full transition-all duration-300 hover:bg-[#F8C8DC] hover:text-black"
          >
            WhatsApp Now
          </a>

        </div>

        {/* TRUST LINE */}
        <p className="text-gray-400 text-sm">
          ✨ 1000+ transformations. Countless smiles.
        </p>

      </div>
    </section>
  )
}