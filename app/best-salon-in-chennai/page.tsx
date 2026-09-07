"use client"

import { useState } from "react"
import { Phone, MapPin, Clock, Star, Sparkles, Scissors, Palette, Heart, ArrowRight, CheckCircle, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import Footer from "@/components/footer"

const Testimonials = dynamic(() => import("@/components/testimonials"), { ssr: true, loading: () => <div className="min-h-100 bg-black" /> })

const BlogPreview = dynamic(() => import("@/components/sections/BlogPreview"), { ssr: true, loading: () => <div className="min-h-125 bg-black" /> })

const categories = [
    { name: "Hair Styling", desc: "Precision cuts, blow dry, updos for men and women", icon: Scissors, href: "/services/hair-styling-chennai" },
    { name: "Bridal Makeup", desc: "HD, air brush and classic bridal packages", icon: Sparkles, href: "/services/bridal-makeup-chennai" },
    { name: "Hair Colour", desc: "Global, highlights, balayage and fashion shades", icon: Palette, href: "/services/hair-coloring-chennai" },
    { name: "Facials", desc: "Skin brightening, anti aging and signature treatments", icon: Heart, href: "/services/facial-treatments-chennai" },
    { name: "Keratin & Smoothing", desc: "Frizz control, botox, nano plastia and perming", icon: CheckCircle, href: "/services/hair-treatment-chennai" },
    { name: "Nail Art", desc: "Gel, acrylic extensions and creative nail designs", icon: Star, href: "/services/nail-art-extension-chennai" },
]

const nearLocations = [
    { name: "Koyambedu", distance: "2 km" },
    { name: "Mogappair", distance: "3.5 km" },
    { name: "Anna Nagar", distance: "4 km" },
    { name: "Ambattur", distance: "5 km" },
    { name: "Arumbakkam", distance: "3 km" },
    { name: "Virugambakkam", distance: "3.5 km" },
]

const faqs = [
    { q: "Which is the best hair salon in Chennai near Maduravoyal?", a: "Anaplak Art and Glam Salon in Maduravoyal is rated 4.9 by over 1000 clients. We offer premium haircuts, hair colour, keratin treatments, bridal makeup and full beauty services with 6+ years of experience and a team of 23 beauty professionals." },
    { q: "What makes Anaplak the best salon in Chennai for bridal makeup?", a: "Every bridal service is overseen by Kalpana, our Founder and Creative Director with 6+ years of industry experience. We provide personalized consultations, trial sessions, HD and air brush makeup, hairstyling and saree draping all under one roof." },
    { q: "Is Anaplak the best beauty parlour in Chennai for skin and hair?", a: "Yes. We are a full service beauty salon offering professional hair styling, colour, keratin smoothing, facials, manicure, pedicure, threading, waxing, nail extensions and bridal packages. Our team of 23 specialists ensures consistent quality across every service." },
    { q: "Which is the best men's salon in Chennai for grooming?", a: "Our men's styling includes precision haircuts from Rs 900, beard trim, beard design, executive shave and hair colour services. We are rated as one of the best men's hair salons in Chennai by clients across Maduravoyal, Anna Nagar, Koyambedu and Ambattur." },
    { q: "Do you offer keratin treatment at your Chennai salon?", a: "Yes, we are one of the best salons for keratin treatment in Chennai. We offer keratin, smoothing, botox, nano plastia and perming treatments starting from Rs 7,000 with customized plans based on your hair type and goals." },
    { q: "What are your salon business hours?", a: "We are open Monday to Saturday from 10:00 AM to 8:00 PM and Sunday from 10:00 AM to 6:00 PM. Walk-ins are welcome but appointments are recommended especially during weekends and wedding seasons." },
    { q: "Which areas do you serve as the best salon in Chennai?", a: "Our salon is located in Maduravoyal, MMDA Colony. We serve clients from Koyambedu (2 km), Mogappair (3.5 km), Anna Nagar (4 km), Arumbakkam (3 km), Ambattur (5 km), Virugambakkam (3.5 km) and across Chennai." },
    { q: "How do I book an appointment at the best hair salon in Chennai?", a: "You can book by calling +91 98400 88867, sending a WhatsApp message, or using the quick booking form on this page. We also accept walk-in appointments based on availability." },
]

const topServices = [
    { name: "Hair Styling", price: "Rs 900 onwards", link: "/services/hair-styling-chennai" },
    { name: "Hair Colour", price: "Rs 1,800 onwards", link: "/services/hair-coloring-chennai" },
    { name: "Hair Treatments", price: "Rs 3,000 onwards", link: "/services/hair-treatment-chennai" },
    { name: "Bridal Makeup", price: "Rs 15,000 onwards", link: "/services/bridal-makeup-chennai" },
    { name: "Party Makeup", price: "Rs 10,000 onwards", link: "/services/party-makeup-chennai" },
    { name: "Facial Treatments", price: "Rs 2,000 onwards", link: "/services/facial-treatments-chennai" },
    { name: "Manicure & Pedicure", price: "Rs 800 onwards", link: "/services/manicure-pedicure-chennai" },
    { name: "Nail Extensions", price: "Rs 2,500 onwards", link: "/services/nail-art-extension-chennai" },
]

// const instagramReels = [
//     { title: "Bridal Makeup Transformation", src: "/bridal/reels-1.mp4", thumb: "/blogs/elegant-bride-makeup-and-hairstyling-beauty-portra.jpg" },
//     { title: "Hair Colouring Results", src: "/hair/reels-1.mp4", thumb: "/hair-coloring.webp" },
//     { title: "Keratin Treatment", src: "/hair/reels-2.mp4", thumb: "/professional-hair-styling-salon-treatment-luxury.webp" },
//     { title: "Engement Makeup Look", src: "/makeup/reels-1.mp4", thumb: "/glamorous-party-makeup-evening-look-celebration.jpg" },
// ]

export default function BestSalonPage() {
    const [form, setForm] = useState({ name: "", service: "" })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const msg = encodeURIComponent(`Hi, I'm ${form.name}. I'd like to book ${form.service || "a salon service"}.`)
        window.open(`https://wa.me/919840088867?text=${msg}`, "_blank")
    }

    return (
        <>
            <Script id="best-salon-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Best Salon in Chennai | Anaplak Art and Glam",
                    "description": "Voted the best salon in Chennai. Premium hair, beauty and bridal services in Maduravoyal. Serving Koyambedu, Anna Nagar, Mogappair, Ambattur and across Chennai.",
                    "url": "https://anaplakartandglamsalon.com/best-salon-in-chennai",
                })
            }} />

            <Header />

            <main className="min-h-screen bg-black">
                {/* Hero Section with Form */}
                <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
                    <div className="absolute inset-0 z-0">
                        <Image src="/elegant-modern-barbershop-interior-with-warm-light.jpg" alt="Best Salon in Chennai" fill sizes="100vw" className="object-cover opacity-30" priority />
                        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-black/60" />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                                    Best Salon in <span className="italic text-[#F8C8DC]">Chennai</span>
                                </h1>
                                <p className="text-gray-300 text-lg leading-relaxed mb-2">
                                    Welcome to Anaplak Art and Glam, the best hair salon and beauty parlour in Maduravoyal, Chennai.
                                    From precision haircuts and keratin treatments to bridal makeup and facials, we deliver the best salon
                                    experience trusted by 1000+ clients across Chennai.
                                </p>
                                <p className="text-gray-400 text-base leading-relaxed mb-6">
                                    We are the best beauty salon in Chennai, a top rated parlour for hair styling, colour, smoothening,
                                    bridal makeup, skincare and nail art. Located in MMDA Colony, we serve Koyambedu, Mogappair,
                                    Anna Nagar, Ambattur, Arumbakkam and Virugambakkam.
                                </p>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex gap-0.5 text-[#d4af37]">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                    </div>
                                    <span className="text-gray-300 text-sm ml-2">4.9 Rating | 1000+ Happy Clients</span>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <a href="tel:+919840088867" className="inline-flex items-center gap-2 px-6 py-3 bg-[#53675C] text-white font-bold text-sm uppercase tracking-wider hover:brightness-110 transition">
                                        <Phone size={16} /> Call Now
                                    </a>
                                </div>
                            </div>

                            {/* Quick Booking Form */}
                            <div className="bg-[#0E0E0E] border border-[#2A2A2A] rounded-xl p-6 md:p-8">
                                <h3 className="text-xl font-bold text-white mb-1">Book Your Appointment</h3>
                                <p className="text-gray-400 text-sm mb-6">Fill the form and we will get back to you on WhatsApp</p>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider">Your Name</label>
                                        <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Enter your full name" className="w-full bg-[#1B1B1B] border border-[#333] text-white px-4 py-3 rounded-lg text-sm focus:border-[#F8C8DC] focus:outline-none transition" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-xs mb-1.5 uppercase tracking-wider">Service Interested In</label>
                                        <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full bg-[#1B1B1B] border border-[#333] text-white px-4 py-3 rounded-lg text-sm focus:border-[#F8C8DC] focus:outline-none transition">
                                            <option value="">Select a service</option>
                                            <option value="Hair Styling">Hair Styling</option>
                                            <option value="Hair Colour">Hair Colour</option>
                                            <option value="Keratin Treatment">Keratin Treatment</option>
                                            <option value="Bridal Makeup">Bridal Makeup</option>
                                            <option value="Party Makeup">Party Makeup</option>
                                            <option value="Facials">Facials</option>
                                            <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                                            <option value="Nail Art">Nail Art</option>
                                            <option value="Threading & Waxing">Threading & Waxing</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="w-full py-3.5 bg-[#F8C8DC] text-black font-bold text-sm uppercase tracking-wider rounded-lg hover:brightness-110 transition flex items-center justify-center gap-2">
                                        Book on WhatsApp <ArrowRight size={16} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center mb-14">
                        <p className="text-[#F8C8DC] uppercase tracking-[0.3em] text-xs font-bold mb-3">Our Services</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">The Best Beauty Services in <span className="italic text-[#F8C8DC]">Chennai</span></h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We are the best parlour and beauty salon in Chennai offering complete hair, skin and bridal services under one roof in Maduravoyal.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat, i) => (
                            <Link key={i} href={cat.href} className="group bg-[#0E0E0E] border border-[#1E1E1E] rounded-xl p-6 hover:border-[#F8C8DC]/40 transition-all duration-300">
                                <div className="w-12 h-12 rounded-lg bg-[#F8C8DC]/10 flex items-center justify-center mb-4 group-hover:bg-[#F8C8DC]/20 transition">
                                    <cat.icon size={22} className="text-[#F8C8DC]" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#F8C8DC] transition">{cat.name}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{cat.desc}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="bg-[#0E0E0E] border-t border-[#1E1E1E]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                        <div className="text-center mb-12">
                            <p className="text-[#F8C8DC] uppercase tracking-[0.3em] text-xs font-bold mb-3">Transparent Pricing</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Affordable Salon <span className="italic text-[#F8C8DC]">Pricing</span></h2>
                            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">At the best salon in Chennai, we believe in clear pricing with no hidden charges. Here are our popular services.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {topServices.map((svc, i) => (
                                <Link key={i} href={svc.link} className="bg-black border border-[#1E1E1E] rounded-xl p-5 hover:border-[#F8C8DC]/40 transition group">
                                    <h4 className="text-white font-bold mb-2 group-hover:text-[#F8C8DC] transition text-sm">{svc.name}</h4>
                                    <p className="text-[#F8C8DC] font-bold text-lg">{svc.price}</p>
                                </Link>
                            ))}
                        </div>
                        <div className="text-center mt-10">
                            <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-3 border border-[#53675C] text-[#53675C] font-bold text-sm uppercase tracking-wider hover:bg-[#53675C] hover:text-white transition">
                                View Full Price List <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Instagram Reels */}
                {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center mb-12">
                        <p className="text-[#F8C8DC] uppercase tracking-[0.3em] text-xs font-bold mb-3">Our Work</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">See the Best Salon <span className="italic text-[#F8C8DC]">Results</span></h2>
                        <p className="text-gray-400 mt-4">Watch transformations from the best hair salon and beauty parlour in Chennai</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {instagramReels.map((reel, i) => (
                            <div key={i} className="relative aspect-[9/16] bg-[#0E0E0E] border border-[#1E1E1E] rounded-xl overflow-hidden group cursor-pointer" onClick={() => window.open("https://www.instagram.com/anaplakartandglam/", "_blank")}>
                                <Image src={reel.thumb} alt={reel.title} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                                    <div className="flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                        <span className="text-white text-sm font-medium">{reel.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <a href="https://www.instagram.com/anaplakartandglam/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:brightness-110 transition">
                            Follow us on Instagram
                        </a>
                    </div>
                </section> */}

                {/* Recent Blogs */}
                <BlogPreview />

                {/* Testimonials */}
                <section className="bg-[#0E0E0E] border-t border-[#1E1E1E]">
                    <Testimonials />
                </section>

                {/* Near Locations */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center mb-12">
                        <p className="text-[#F8C8DC] uppercase tracking-[0.3em] text-xs font-bold mb-3">Areas We Serve</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">The Best Salon Near <span className="italic text-[#F8C8DC]">You</span></h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Located in Maduravoyal, MMDA Colony. The best hair salon and beauty parlour easily accessible from all these Chennai neighbourhoods.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {nearLocations.map((loc, i) => (
                            <div key={i} className="bg-[#0E0E0E] border border-[#1E1E1E] rounded-xl p-5 text-center hover:border-[#F8C8DC]/40 transition">
                                <MapPin size={20} className="text-[#F8C8DC] mx-auto mb-2" />
                                <h4 className="text-white font-bold">{loc.name}</h4>
                                <p className="text-gray-500 text-xs mt-1">{loc.distance}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="bg-[#0E0E0E] border-t border-[#1E1E1E]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                        <div className="text-center mb-12">
                            <p className="text-[#F8C8DC] uppercase tracking-[0.3em] text-xs font-bold mb-3">FAQ</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Questions About the Best Salon in <span className="italic text-[#F8C8DC]">Chennai</span></h2>
                        </div>
                        <div className="space-y-3">
                            {faqs.map((faq, i) => (
                                <details key={i} className="group bg-black border border-[#1E1E1E] rounded-xl overflow-hidden">
                                    <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between hover:text-[#F8C8DC] transition">
                                        {faq.q}
                                        <ChevronRight size={16} className="group-open:rotate-90 transition-transform" />
                                    </summary>
                                    <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">{faq.a}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact & Map */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center mb-12">
                        <p className="text-[#F8C8DC] uppercase tracking-[0.3em] text-xs font-bold mb-3">Visit Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">The Best Salon in <span className="italic text-[#F8C8DC]">Maduravoyal, Chennai</span></h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="space-y-6">
                            <div className="bg-[#0E0E0E] border border-[#1E1E1E] rounded-xl p-6">
                                <h3 className="text-white font-bold text-lg mb-4">Contact Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin size={18} className="text-[#F8C8DC] mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-white font-medium">Anaplak Art and Glam</p>
                                            <p className="text-gray-400 text-sm">No 48/9, New No. 3, 2nd Floor, First Main Road, 4th Block, MMDA Colony, Maduravoyal, Chennai 600095</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone size={18} className="text-[#F8C8DC] shrink-0" />
                                        <p className="text-gray-300 text-sm">+91 98400 88867 | +91 98400 88861</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock size={18} className="text-[#F8C8DC] shrink-0" />
                                        <div>
                                            <p className="text-gray-300 text-sm">Monday to Saturday: 10:00 AM to 8:00 PM</p>
                                            <p className="text-gray-300 text-sm">Sunday: 10:00 AM to 6:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-6">
                                    <a href="tel:+919840088867" className="flex-1 py-3 bg-[#53675C] text-white font-bold text-xs uppercase tracking-wider text-center hover:brightness-110 transition">Call</a>
                                    <a href="https://wa.me/919840088867?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="flex-1 py-3 border border-[#F8C8DC] text-[#F8C8DC] font-bold text-xs uppercase tracking-wider text-center hover:bg-[#F8C8DC]/10 transition">WhatsApp</a>
                                </div>
                            </div>

                            <div className="bg-[#0E0E0E] border border-[#1E1E1E] rounded-xl p-6">
                                <h3 className="text-white font-bold text-lg mb-3">Why We Are the Best Salon in Chennai</h3>
                                <ul className="space-y-2">
                                    {[
                                        "Rated 4.9 with over 1000 happy clients across Chennai",
                                        "Team of 23 beauty professionals led by Founder Kalpana",
                                        "6+ years of excellence in hair, skin and bridal services",
                                        "Premium products and professional techniques",
                                        "Serving Maduravoyal, Koyambedu, Anna Nagar, Mogappair and all of Chennai",
                                        "Transparent pricing and free consultations",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                                            <CheckCircle size={14} className="text-[#F8C8DC] mt-0.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Google Maps */}
                        <div className="bg-[#0E0E0E] border border-[#1E1E1E] rounded-xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14958.892262805002!2d80.17470696560473!3d13.064798342401804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52617cd4cf1de5%3A0x50157d7689af7393!2sAnaplak%20Art%20And%20Glam%20Salon!5e0!3m2!1sen!2sin!4v1788775101748!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Anaplak Art and Glam Salon Location"
                            />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
