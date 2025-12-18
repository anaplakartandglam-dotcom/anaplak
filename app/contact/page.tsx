"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MapPin, Clock, Mail, Instagram, Facebook, Youtube } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    })

    // Theme colors
    const primaryColor = "#53675C" // Green
    const backgroundColor = "rgb(14, 14, 14)" // Dark background
    const textColor = "#ffffff" // White text for dark background

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Add logic to send data here
        alert("Thank you for contacting us! We will get back to you shortly.")
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <>
            <Header />
            <div className="min-h-screen font-sans" style={{ backgroundColor }}>
                {/* Introduction Section */}
                <section className="relative pt-56 pb-16 md:pt-64 md:pb-24 px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-white">Connect With Us</h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 font-light leading-relaxed">
                        Whether it's for your big day, a special occasion, or a moment of self-care, we invited you to experience
                        luxury beauty services tailored just for you.
                    </p>
                </section>

                {/* Main Content Grid */}
                <section className="container mx-auto px-4 pb-20 md:pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
                        {/* Left Column: Contact Form */}
                        <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/10 shadow-sm">
                            <h2 className="text-2xl md:text-3xl font-serif mb-8 text-white">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-sm font-medium mb-2 text-white/60 uppercase tracking-widest">Name</label>
                                        <input
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#53675C] focus:outline-none transition-colors placeholder:text-white/30"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-white/60 uppercase tracking-widest">
                                            Phone
                                        </label>
                                        <input
                                            name="phone"
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#53675C] focus:outline-none transition-colors placeholder:text-white/30"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-white/60 uppercase tracking-widest">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#53675C] focus:outline-none transition-colors placeholder:text-white/30"
                                        placeholder="jane@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-white/60 uppercase tracking-widest">
                                        Service Interested In
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg py-3 px-4 text-white focus:border-[#53675C] focus:outline-none cursor-pointer"
                                        style={{
                                            colorScheme: "dark",
                                        }}
                                    >
                                        <option value="" disabled className="bg-[rgb(14,14,14)] text-white">
                                            Select a Service
                                        </option>
                                        <option value="Bridal Makeup" className="bg-[rgb(14,14,14)] text-white">
                                            Bridal Makeup
                                        </option>
                                        <option value="Party Makeup" className="bg-[rgb(14,14,14)] text-white">
                                            Party Makeup
                                        </option>
                                        <option value="Hair Styling" className="bg-[rgb(14,14,14)] text-white">
                                            Hair Styling
                                        </option>
                                        <option value="Skin Treatment" className="bg-[rgb(14,14,14)] text-white">
                                            Skin Treatment
                                        </option>
                                        <option value="Consultation" className="bg-[rgb(14,14,14)] text-white">
                                            Consultation
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-white/60 uppercase tracking-widest">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#53675C] focus:outline-none resize-none placeholder:text-white/30"
                                        placeholder="Tell us about your event date, requirements, or any questions..."
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto px-10 py-4 bg-[#53675C] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#3d4d46] transition-all duration-300 shadow-md hover:shadow-lg border-radius: 0.75rem;"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
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
