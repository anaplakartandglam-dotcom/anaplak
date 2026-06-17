"use client"

import Script from "next/script"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function KalpanaPage() {
    return (
        <>
            <Script
                id="kalpana-profile-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfilePage",
                        "name": "Kalpana - Founder | Anaplak Art And Glam",
                        "description": "Kalpana is the Founder of Anaplak Art And Glam Salon, Chennai's premier beauty destination. As a visionary makeup artist and hair stylist, she leads a team of 12 experts delivering luxury bridal makeup, hair artistry, and transformative beauty services.",
                        "url": "https://anaplakartandglamsalon.com/kalpana",
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Kalpana",
                            "jobTitle": "Founder",
                            "worksFor": {
                                "@type": "BeautySalon",
                                "name": "Anaplak Art And Glam Salon",
                                "url": "https://anaplakartandglamsalon.com"
                            },
                            "sameAs": [
                                "https://www.instagram.com/_kalpana_makeover_?igsh=Zm05dXBrbmt1NDEy",
                                "https://www.instagram.com/anaplak_art_and_glam_salon?igsh=MWYyOXpyeGV0bzBwcw=="
                            ],
                            "description": "Visionary beauty entrepreneur and expert makeup artist specializing in bridal makeup, hair artistry, and luxury beauty transformations."
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anaplakartandglamsalon.com" },
                                { "@type": "ListItem", "position": 2, "name": "Kalpana", "item": "https://anaplakartandglamsalon.com/kalpana" }
                            ]
                        }
                    })
                }}
            />

            <Header />
            <div className="min-h-screen bg-black mt-10 md:mt-25">
                <PageHeader
                    label="Founder"
                    title="Kalpana"
                    titleAccent=""
                    description="Anaplak Art And Glam's artistic founder – turning beautiful into a work of art through makeup!"
                />

                {/* Founder Profile Section */}
                <section className="w-full bg-white py-14">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                            {/* Left Image */}
                            <div className="relative">
                                <div
                                    className="relative overflow-hidden transition-all duration-500 ease-out"
                                    style={{ borderRadius: "0px" }}
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect()
                                        const x = e.clientX - rect.left
                                        const y = e.clientY - rect.top
                                        const isLeft = x < rect.width / 2
                                        const isTop = y < rect.height / 2
                                        if (isTop && isLeft) e.currentTarget.style.borderRadius = "200px 0 0 0"
                                        else if (isTop && !isLeft) e.currentTarget.style.borderRadius = "0 200px 0 0"
                                        else if (!isTop && isLeft) e.currentTarget.style.borderRadius = "0 0 0 200px"
                                        else e.currentTarget.style.borderRadius = "0 0 200px 0"
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderRadius = "0px"
                                    }}
                                >
                                    <img
                                        src="/aboutus2.webp"
                                        alt="Kalpana - Founder of Anaplak Art And Glam"
                                        className="w-full h-[350px] md:h-[780px] object-cover object-top rounded-xl"
                                    />
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="space-y-8 pt-0">
                                <div>
                                    <p className="text-[#53675C] text-xs uppercase tracking-[0.3em] mb-6 font-medium">
                                        Meet Our Founder
                                    </p>
                                    <h2 className="text-2xl md:text-5xl font-serif leading-tight text-black mb-6">
                                        Bringing Unmatched Beauty through{" "}
                                        <span className="italic font-serif text-[#53675C]">Passionate Creation</span>
                                    </h2>
                                    <div className="space-y-5 text-gray-600 leading-relaxed">
                                        <p className="text-base">
                                            A professional makeup artist and hair stylist from Chennai, Kalpana is the founder of the prestigious brand that is known throughout Maduravoyal as a premier salon.
                                        </p>
                                        <p className="text-base">
                                            With great attention to detail and a deep love for the beauty industry, she creates unforgettable wedding looks and sets new trends in hairstyling. Her signature style combines a passion for art with innovative solutions that allow you to feel confident about your appearance every day.
                                        </p>
                                        <p className="text-base">
                                            Today, Kalpana is leading a team of experienced beauty artists at Anaplak Art And Glam. She trains young talents and encourages new discoveries of herself as an artist. Thanks to her, Anaplak Art And Glam Salon got its premium status in Maduravoyal.
                                        </p>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-6 pt-6">
                                    <div className="text-center">
                                        <h3 className="text-3xl md:text-4xl font-bold text-[#53675C] mb-1">1000+</h3>
                                        <p className="text-xs uppercase tracking-wider text-gray-500">Satisfied Clients</p>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-3xl md:text-4xl font-bold text-[#53675C] mb-1">6+</h3>
                                        <p className="text-xs uppercase tracking-wider text-gray-500">Years of Art</p>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-3xl md:text-4xl font-bold text-[#53675C] mb-1">12</h3>
                                        <p className="text-xs uppercase tracking-wider text-gray-500">Team Artists</p>
                                    </div>
                                </div>
                                <div className="hidden lg:flex items-center justify-center">
                                    <div className="relative w-24 h-24">
                                        <div
                                            className="absolute w-20 h-20 bg-neutral-800 animate-sparkle"
                                            style={{
                                                clipPath:
                                                    "polygon(50% 0%,58% 42%,100% 50%,58% 58%,50% 100%,42% 58%,0% 50%,42% 42%)",
                                            }}
                                        />
                                        <div
                                            className="absolute w-8 h-8 right-0 bottom-1 bg-neutral-800 animate-sparkle"
                                            style={{
                                                animationDelay: "1s",
                                                clipPath:
                                                    "polygon(50% 0%,58% 42%,100% 50%,58% 58%,50% 100%,42% 58%,0% 50%,42% 42%)",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="py-12 px-4 bg-white border-t border-gray-200">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div className="space-y-4">
                                <div className="w-16 h-16 mx-auto rounded-full bg-[#53675C]/10 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#53675C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-wide text-black">Artistry</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Every client&apos;s face can be turned into a masterpiece. The makeup artist sees an art piece in each face and skillfully uses her talents to make your look special.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-16 h-16 mx-auto rounded-full bg-[#F8C8DC]/20 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#F8C8DC]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-wide text-black">Passion</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Motivated by her relentless passion for beauty, Kalpana gives her soul to each one of her transformations and clients.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-16 h-16 mx-auto rounded-full bg-[#F2D2BD]/20 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#F2D2BD]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-wide text-black">Trust</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Fostering long-lasting bonds through trustworthiness, excellence, and the assurance that comes from genuinely caring about all of her clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social / Stay Tuned Section */}
                <section className="py-20 px-4 bg-[#0E0E0E]">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="text-[#F8C8DC] uppercase tracking-[0.3em] text-sm mb-4 font-medium">
                                Stay Tuned
                            </p>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                                Kalpana&apos;s Transformations and Inspiration
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
                            <a
                                href="https://www.instagram.com/_kalpana_makeover_?igsh=Zm05dXBrbmt1NDEy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-gradient-to-br from-[#F8C8DC]/10 to-[#F8C8DC]/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-[#F8C8DC]/30 hover:border-[#F8C8DC] transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#F8C8DC]/20 to-[#F8C8DC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#F8C8DC] transition-colors">Kalpana&apos;s Works</h3>
                                    <p className="text-gray-400 text-sm mb-4">@_kalpana_makeover_</p>
                                    <div className="text-[#F8C8DC] font-semibold group-hover:underline flex items-center justify-center gap-2">
                                        Follow Her
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/anaplak_art_and_glam_salon?igsh=MWYyOXpyeGV0bzBwcw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-gradient-to-br from-[#F2D2BD]/10 to-[#F8C8DC]/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-[#F2D2BD]/30 hover:border-[#F2D2BD] transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#F2D2BD]/20 to-[#F8C8DC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#F77737] via-[#E1306C] to-[#833AB4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#F2D2BD] transition-colors">Anaplak Salon</h3>
                                    <p className="text-gray-400 text-sm mb-4">@anaplak_art_and_glam_salon</p>
                                    <div className="text-[#F2D2BD] font-semibold group-hover:underline flex items-center justify-center gap-2">
                                        Follow Salon
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="text-center bg-gradient-to-r from-[#F8C8DC]/10 to-[#F8C8DC]/10 border border-[#F8C8DC]/30 rounded-2xl p-8 max-w-3xl mx-auto">
                            <p className="text-white text-xl mb-3 font-medium">
                                Transform your look with an artist who truly cares.
                            </p>
                            <p className="text-gray-400 text-base mb-6">
                                📸 Share your moment with <span className="text-[#F8C8DC] font-semibold">#alwaysbeanaplak</span> and{" "}
                                <span className="text-[#F8C8DC] font-semibold">#kalpanamakeover</span>
                            </p>
                            <a
                                href="https://wa.me/919840088867"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Book a Consultation
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}