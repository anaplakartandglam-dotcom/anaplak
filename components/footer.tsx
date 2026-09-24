"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import { businessInfo, whatsappDeepLink } from "@/data/businessInfo"
import { servicePages } from "@/data/serviceData"
import TrackLink from "@/components/track-link"

export default function Footer() {
  const words = ["Hair", "Style", "Makeup"]
  const [typedIndex, setTypedIndex] = useState(0)
  const [currentYear, setCurrentYear] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => setTypedIndex((prev) => (prev + 1) % words.length),
      2200
    )
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const year = new Date()
    setCurrentYear(year.getFullYear())
  }, [])

  return (
    <footer
      className="relative isolate bg-cover bg-center bg-no-repeat pt-16 md:pt-20 pb-10 md:pb-12"
    >
      <Image
        src="/footer_bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover pointer-events-none -z-10"
        aria-hidden
      />

      {/* --------------------------------------------------------------
          MOBILE VERSION
      -------------------------------------------------------------- */}
      <div className="md:hidden flex flex-col items-center text-center px-8">

        {/* MOBILE LOGO */}
        <div className="w-[200px] h-auto overflow-hidden flex items-center justify-center mb-6 mt-2 relative" style={{ height: '70px' }}>
          <Image
            src="/logo_updated.webp"
            alt="Anaplak Art And Glam Salon"
            fill
            sizes="200px"
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>

        <h2 className="text-[#D2B6B6] text-[22px] tracking-[0.28em] uppercase mb-10 font-semibold">
          Contact Info
        </h2>

        {/* LOCATION (MOBILE) */}
        <TrackLink
          kind="map_click"
          href={businessInfo.maps.searchUrl}
          target="_blank"
          className="flex w-full items-start gap-4 mb-10 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-[#D2B6B6] flex items-center justify-center text-black">
            <MapPin size={22} />
          </div>

          <div className="text-left">
            <p className="text-gray-300 uppercase text-[12px] tracking-[0.22em] mb-1">
              Salon Location:
            </p>

            {businessInfo.address.displayLines.map((line, i) => (
              <p key={i} className="text-gray-200 text-[16px] leading-tight">
                {line}
              </p>
            ))}
          </div>
        </TrackLink>


        {/* PHONE */}
        <div className="flex w-full items-start gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-[#D2B6B6] flex items-center justify-center text-black">
            <Phone size={22} />
          </div>

          <div className="text-left">
            <p className="text-gray-300 uppercase text-[12px] tracking-[0.22em] mb-1">
              Contact:
            </p>
            <TrackLink kind="phone_click" href={businessInfo.phone.primaryHref} className="text-gray-200 text-[16px] leading-tight block py-1.5 hover:text-[#D2B6B6] transition">
              {businessInfo.phone.primaryDisplay}
            </TrackLink>
            <TrackLink kind="phone_click" href={businessInfo.phone.secondaryHref} className="text-gray-200 text-[16px] leading-tight block py-1.5 hover:text-[#D2B6B6] transition">
              {businessInfo.phone.secondaryDisplay}
            </TrackLink>
          </div>
        </div>

        {/* SOCIAL (MOBILE) */}
        <div className="flex gap-10 text-[#D2B6B6] mt-2 mb-6">
          <a href="https://www.facebook.com/anaplakartandglam" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
            <Image src="/facebook.webp" alt="Facebook" width={28} height={28} className="w-[28px] h-[28px]" />
          </a>
          <a href="https://www.instagram.com/anaplak_art_and_glam_salon" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
            <Image src="/instagram.webp" alt="Instagram" width={28} height={28} className="w-[28px] h-[28px]" />
          </a>
          <TrackLink kind="whatsapp_click" href={whatsappDeepLink()} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
            <Image src="/whatsapp.webp" alt="WhatsApp" width={28} height={28} className="w-[28px] h-[28px]" />
          </TrackLink>
          <a href={businessInfo.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel">
            <Image src="/youtube.webp" alt="YouTube" width={28} height={28} className="w-[28px] h-[28px]" />
          </a>
        </div>
      </div>

      {/* --------------------------------------------------------------
          DESKTOP VERSION
      -------------------------------------------------------------- */}
      <div className="hidden md:grid max-w-[1350px] mx-auto px-6 lg:px-10 grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">

        {/* LOGO */}
        <div className="flex md:block items-center md:items-start">
          <div className="w-[280px] h-auto overflow-hidden flex items-center relative" style={{ height: '90px' }}>
            <Image
              src="/logo_updated.webp"
              alt="Anaplak Art And Glam Salon"
              fill
              sizes="(max-width: 768px) 200px, 280px"
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="text-white" style={{ marginTop: '90px' }}>
          <h3 className="text-[30px] md:text-[34px] font-semibold uppercase tracking-[0.08em] leading-[1.1]">
            ALWAYS <br /> BE ANAPLAK
          </h3>
        </div>

        {/* EXPLORE */}
        <div>
          <p className="uppercase text-[#F8C8DC] tracking-[0.35em] text-[13px] mb-4 font-semibold">
            Explore
          </p>

          <ul className="space-y-2.5 text-[15px] md:text-[16px] uppercase tracking-[0.18em] text-white/85">
            <li>
              <a href="/" className="hover:text-[#F8C8DC] cursor-pointer transition">Home +</a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#F8C8DC] cursor-pointer transition">About +</a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#F8C8DC] cursor-pointer transition">Services +</a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-[#F8C8DC] cursor-pointer transition">Blogs +</a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-[#F8C8DC] cursor-pointer transition">Gallery +</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#F8C8DC] cursor-pointer transition">Contacts +</a>
            </li>
            <li>
              <a href="/kalpana" className="hover:text-[#F8C8DC] cursor-pointer transition">Kalpana +</a>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <p className="uppercase text-[#F8C8DC] text-[13px] tracking-[0.35em] mb-4 font-semibold">
            Contact Info
          </p>

          <div className="space-y-6 text-[15px] md:text-[16px]">

            <TrackLink
              kind="map_click"
              href={businessInfo.maps.searchUrl}
              target="_blank"
              className="flex gap-3 items-start cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-[#F8C8DC] flex items-center justify-center text-black transition group-hover:bg-white">
                <MapPin size={18} />
              </div>

              <div>
                <p className="uppercase text-[11px] text-gray-400 mb-1 tracking-[0.16em]">
                  Salon Location:
                </p>

                {businessInfo.address.displayLines.map((line, i) => (
                  <p key={i} className="text-gray-300 leading-tight group-hover:text-white">
                    {line}
                  </p>
                ))}
              </div>
            </TrackLink>



            {/* CONTACT */}
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-full bg-[#F8C8DC] flex items-center justify-center text-black">
                <Phone size={18} />
              </div>

              <div>
                <p className="uppercase text-[11px] text-gray-400 mb-1 tracking-[0.16em]">
                  Contact:
                </p>

                <TrackLink kind="phone_click" href={businessInfo.phone.primaryHref} className="text-gray-300 leading-tight block hover:text-white transition">{businessInfo.phone.primaryDisplay}</TrackLink>
                <TrackLink kind="phone_click" href={businessInfo.phone.secondaryHref} className="text-gray-300 leading-tight block hover:text-white transition">{businessInfo.phone.secondaryDisplay}</TrackLink>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 pt-1 text-[#F8C8DC]">
              <a href="https://www.facebook.com/anaplakartandglam" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                <Image src="/facebook.webp" alt="Facebook" width={20} height={20} className="w-[20px] h-[20px]" />
              </a>
              <a href="https://www.instagram.com/anaplak_art_and_glam_salon" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                <Image src="/instagram.webp" alt="Instagram" width={20} height={20} className="w-[20px] h-[20px]" />
              </a>
              <TrackLink kind="whatsapp_click" href={whatsappDeepLink()} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
                <Image src="/whatsapp.webp" alt="WhatsApp" width={20} height={20} className="w-[20px] h-[20px]" />
              </TrackLink>
              <a href={businessInfo.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel">
                <Image src="/youtube.webp" alt="YouTube" width={22} height={22} className="w-[22px] h-[22px]" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* SERVICE LINKS */}
      <div className="max-w-[1350px] mx-auto px-6 lg:px-10 mt-12">
        <p className="uppercase text-[#F8C8DC] tracking-[0.35em] text-[13px] mb-5 font-semibold text-center md:text-left">
          Our Services
        </p>
        <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-[13px] md:text-[14px] uppercase tracking-[0.14em] text-white/80">
          {servicePages.map((service) => (
            <li key={service.slug}>
              <a href={`/services/${service.slug}`} className="hover:text-[#F8C8DC] transition">
                {service.title} +
              </a>
            </li>
          ))}
          <li>
            <a href="/menu" className="hover:text-[#F8C8DC] transition">
              Full Pricing Menu +
            </a>
          </li>
        </ul>
      </div>

      {/* COPYRIGHT */}
      <div className="w-full border-t border-white/10 mt-10 pt-5">
        <p className="text-center text-gray-400 text-[13px] md:text-[14px] tracking-wide">
          © Anaplak Art And Glam Salon — All Rights Reserved — {currentYear}
        </p>
      </div>
    </footer>
  )
}
