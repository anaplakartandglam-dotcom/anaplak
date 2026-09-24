"use client"

import type React from "react"
import { useState } from "react"
import { Phone } from "lucide-react"
import { businessInfo, whatsappDeepLink } from "@/data/businessInfo"
import TrackLink from "@/components/track-link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    procedure: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", procedure: "" })
  }

  return (
    <section className="py-20 md:py-32 bg-[#e7d9cd]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Schedule procedure</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border-b-2 border-black text-black placeholder-gray-600 focus:outline-none focus:border-[#53675C]"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border-b-2 border-black text-black placeholder-gray-600 focus:outline-none focus:border-[#53675C]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border-b-2 border-black text-black placeholder-gray-600 focus:outline-none focus:border-[#53675C]"
              />
              <select
                value={formData.procedure}
                onChange={(e) => setFormData({ ...formData, procedure: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border-b-2 border-black text-black focus:outline-none focus:border-[#53675C]"
              >
                <option value="">Select Procedure</option>
                <option value="haircut">Haircut</option>
                <option value="coloring">Hair Coloring</option>
                <option value="styling">Styling</option>
                <option value="extensions">Extensions</option>
              </select>
              <button
                type="submit"
                className="w-full bg-[#53675C] text-white py-3 font-bold uppercase tracking-wider hover:bg-[#3d4d46] transition mt-8"
                aria-label="Make an appointment"
              >
                Make an appointment
              </button>
            </form>

            <div className="mt-12 pt-12 border-t-2 border-black">
              <h3 className="text-black font-bold mb-4">Make an appointment by phone:</h3>
              <div className="flex items-center gap-3 text-[#53675C] font-bold text-lg">
                <Phone size={20} />
                <TrackLink kind="phone_click" href={businessInfo.phone.primaryHref}>{businessInfo.phone.primaryDisplay}</TrackLink>
              </div>
              <div className="flex items-center gap-3 text-[#53675C] font-bold text-lg mt-2">
                <Phone size={20} />
                <TrackLink kind="phone_click" href={businessInfo.phone.secondaryHref}>{businessInfo.phone.secondaryDisplay}</TrackLink>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="p-12 rounded-lg border-2 border-[#53675C]/30 bg-[#53675C]/5">
              <h3 className="text-2xl font-bold text-black mb-6">Visit Us</h3>
              <p className="text-black/70 leading-relaxed mb-6">
                {businessInfo.address.oneLine}
              </p>
              <p className="text-[#53675C] font-bold mb-2">Email:</p>
              <a href={`mailto:${businessInfo.email}`} className="text-black hover:text-[#53675C] transition">
                {businessInfo.email}
              </a>
              <div className="mt-4 flex flex-col gap-2">
                <TrackLink kind="map_click" href={businessInfo.maps.searchUrl} target="_blank" rel="noopener noreferrer" className="text-[#53675C] font-semibold hover:text-black transition">
                  View on Google Maps
                </TrackLink>
                <TrackLink kind="whatsapp_click" href={whatsappDeepLink()} target="_blank" rel="noopener noreferrer" className="text-[#53675C] font-semibold hover:text-black transition">
                  Book on WhatsApp
                </TrackLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
