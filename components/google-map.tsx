"use client"

export default function GoogleMap() {
    return (
        <section className="py-16 md:py-24 bg-[#0F0F0F]">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <p className="text-[#C8AFAE] text-sm tracking-[0.35em] uppercase mb-2">
                        VISIT US
                    </p>
                    <h2 className="text-white text-[44px] md:text-[54px] font-bold leading-tight tracking-wide mb-4">
                        FIND US ON THE MAP
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                        Located in the heart of Maduravoyal, Chennai. Visit us for a premium salon experience.
                    </p>
                </div>

                {/* Google Map Embed */}
                <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                    <iframe
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=place_id:ChIJ5R3P1HxIuJoRk3OviXZ9FVA"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Anaplak Art And Glam Salon Location"
                    />
                </div>

                {/* Contact Info Below Map */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Address */}
                    <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#C8AFAE] transition-all duration-300">
                        <div className="w-12 h-12 bg-[#C8AFAE]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-[#C8AFAE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">Address</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            2nd Floor, TNHB, : 3, 2nd Main Rd, 4th Block,<br />
                            CDN Nagar, MMDA Colony, Maduravoyal,<br />
                            Chennai, Tamil Nadu 600095
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#C8AFAE] transition-all duration-300">
                        <div className="w-12 h-12 bg-[#C8AFAE]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-[#C8AFAE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
                        <p className="text-gray-400 text-sm">
                            <a href="tel:+919840088867" className="hover:text-[#C8AFAE] transition-colors">+91 98400 88867</a><br />
                            <a href="tel:+919840088861" className="hover:text-[#C8AFAE] transition-colors">+91 98400 88861</a>
                        </p>
                    </div>

                    {/* Hours */}
                    <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#C8AFAE] transition-all duration-300">
                        <div className="w-12 h-12 bg-[#C8AFAE]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-[#C8AFAE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">Working Hours</h3>
                        <p className="text-gray-400 text-sm">
                            Mon - Sat: 10:00 AM - 9:00 PM<br />
                            Sunday: 10:00 AM - 9:00 PM
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
