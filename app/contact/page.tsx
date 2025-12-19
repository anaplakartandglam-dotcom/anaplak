"use client"

import { Phone, MapPin, Clock, Mail, Instagram, Facebook, Youtube } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"


export default function ContactUs() {
    // Theme colors
    const primaryColor = "#53675C" // Green
    const backgroundColor = "rgb(14, 14, 14)" // Dark background
    const textColor = "#ffffff" // White text for dark background


    return (
        <>
            <Header />
            <div className="min-h-screen font-sans" style={{ backgroundColor }}>
                {/* Introduction Section */}
                <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-white" style={{ marginTop: '90px' }}>Connect With Us</h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 font-light leading-relaxed">
                        Whether it's for your big day, a special occasion, or a moment of self-care, we invited you to experience
                        luxury beauty services tailored just for you.
                    </p>
                </section>

                {/* Main Content Grid */}
                <section className="container mx-auto px-4 pb-20 md:pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
                        {/* Left Column: Google Map */}
                        <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/10 shadow-sm">
                            <h2 className="text-2xl md:text-3xl font-serif mb-8 text-white">Find Us Here</h2>
                            {/* Map Embed */}
                            <div className="relative w-full h-[450px] md:h-[550px] rounded-lg overflow-hidden shadow-2xl mb-6">
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


                            {/* View on Google Maps Button */}
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=place_id:ChIJ5R3P1HxIuJoRk3OviXZ9FVA"
                                target="_blank"
                                rel="noreferrer"
                                className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#53675C] to-[#3d4d46] text-white font-semibold text-sm uppercase tracking-widest rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                                style={{
                                    boxShadow: 'var(--button-shadow, 0 0 0 rgba(83, 103, 92, 0))',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.setProperty('--button-shadow', '0 25px 50px -12px rgba(83, 103, 92, 0.3)');
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.setProperty('--button-shadow', '0 0 0 rgba(83, 103, 92, 0)');
                                }}
                            >
                                {/* Animated background overlay */}
                                <span className="absolute inset-0 bg-gradient-to-r from-[#3d4d46] to-[#53675C] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

                                {/* Shimmer effect */}
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>

                                {/* Button content */}
                                <span className="relative flex items-center gap-3">
                                    <svg
                                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="relative">
                                        View on Google Maps
                                        {/* Underline animation */}
                                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></span>
                                    </span>
                                    <svg
                                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </a>
                        </div>

                        {/* Right Column: Contact Info & Details */}
                        <div className="space-y-12">
                            {/* Why Contact Us */}
                            <div className="pl-0 lg:pl-6">
                                <h2 className="text-2xl md:text-3xl font-serif mb-6 text-white">Visit Our Premium Salon</h2>
                                <p className="text-white/70 mb-8 leading-relaxed">
                                    "Anaplak Salon is one of the most trusted premium salon in Maduravoyal, with a wide range of services from hair care, hair coloring, manicures, and nail care to keratin nourishment,And skincare, under the consultation of professional staff offering the best customer satisfaction in every versatile range of services. A landmark building in the most prestigious CDN Nagar, MMDA Colony Anaplak is designed to provide a premium sensory experience with dedicated Ground Floor parking garages. If you’re wondering how a salon can change your mood, Pay us a visit at Anaplak Salon in Maduravoyal,. We’ll show you how it’s done right!"
                                </p>

                                <div className="space-y-8">
                                    {/* Address */}
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-[#53675C]/10 rounded-full text-[#53675C]">
                                            <MapPin size={22} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-white mb-1">Anaplak Art & Glam Salon</h3>
                                            <p className="text-white/70 leading-relaxed">
                                                No.4B/9, New No. 3, 2nd floor,
                                                <br />
                                                First Main road, 4th block, MMDA Colony,
                                                <br />
                                                Maduravoyal, Chennai - 600095
                                            </p>
                                            <a
                                                href="https://www.google.com/maps/search/?api=1&query=Anaplak+Art+and+Glam+Salon+Chennai"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-block mt-2 text-[#53675C] font-semibold hover:underline text-sm uppercase tracking-wide"
                                            >
                                                View on Google Maps
                                            </a>
                                        </div>
                                    </div>

                                    {/* Working Hours */}
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-[#53675C]/10 rounded-full text-[#53675C]">
                                            <Clock size={22} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-white mb-1">Working Hours</h3>
                                            <ul className="text-white/70 space-y-1">
                                                <li className="flex justify-between gap-4">
                                                    <span>Mon - Sat:</span> <span className="whitespace-nowrap">10:00 AM - 9:00 PM</span>
                                                </li>
                                                <li className="flex justify-between gap-4">
                                                    <span>Sunday:</span> <span className="whitespace-nowrap">10:00 AM - 9:00 PM</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Contact Actions */}
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-[#53675C]/10 rounded-full text-[#53675C]">
                                            <Phone size={22} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-white mb-3">Quick Contact</h3>
                                            <div className="flex flex-col gap-3">
                                                <a
                                                    href="tel:+919840088867"
                                                    className="flex items-center gap-2 text-white hover:text-[#53675C] transition-colors cursor-pointer"
                                                >
                                                    <span className="font-medium">+91-9840088867</span>
                                                </a>
                                                <a
                                                    href="tel:+919840088861"
                                                    className="flex items-center gap-2 text-white hover:text-[#53675C] transition-colors cursor-pointer"
                                                >
                                                    <span className="font-medium">+91-9840088861</span>
                                                </a>
                                                <div className="flex items-center gap-2 text-white mt-1 cursor-default">
                                                    <Mail size={16} />
                                                    <span>anaplakartandglamsalon@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="pl-0 lg:pl-6 pt-6 border-t border-white/10">
                                <h3 className="font-serif text-xl text-white mb-4">Follow Our Journey</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.instagram.com/anaplak_art_and_glam_salon/#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-3 bg-white/5 hover:bg-[#53675C] hover:text-white transition-all duration-300 rounded-full shadow-sm text-white"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/anaplakartandglam"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-3 bg-white/5 hover:bg-[#53675C] hover:text-white transition-all duration-300 rounded-full shadow-sm text-white"
                                    >
                                        <Facebook size={20} />
                                    </a>
                                    <a
                                        href="https://youtube.com/shorts/k5HfkZ-OuS4?feature=share"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-3 bg-white/5 hover:bg-[#53675C] hover:text-white transition-all duration-300 rounded-full shadow-sm text-white"
                                    >
                                        <Youtube size={20} />
                                    </a>
                                </div>
                                <p className="mt-4 text-sm text-white/50 italic">
                                    Get the latest bridal trends & offers on our social handles.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
