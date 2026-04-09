"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  ArrowRight,
  Phone,
} from "lucide-react"

export default function Header() {
  const [isSticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    // { label: "Blog", href: "/blog" },
    { label: "Services", href: "/services" },
    { label: "Contacts", href: "/contact" },
  ]

  const PRIMARY = "#53675C"
  const TOPBAR_HEIGHT = 46

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* --------------------------------------------------
           TOP BAR
      -------------------------------------------------- */}
      <div
        className="
          flex w-full items-center justify-center
          border-b border-white/10 backdrop-blur-xl
        "
        style={{
          background: `${PRIMARY}ee`,
          height: TOPBAR_HEIGHT,
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 50,
        }}
      >
        <div className="w-full px-4 flex justify-between items-center">

          {/* Mobile Number */}
          <a href="tel:+919840088867" className="flex md:hidden items-center gap-2 text-white text-xs tracking-wide hover:text-[#F8C8DC] transition">
            <Phone size={15} />
            <span>+91-98400&nbsp;88867</span>
          </a>

          {/* Desktop Numbers */}
          <div className="hidden md:flex items-center gap-6 text-white text-sm tracking-wide">
            <a href="tel:+919840088867" className="flex items-center gap-1 hover:text-[#F8C8DC] transition">
              <Phone size={15} /> +91-98400&nbsp;88867
            </a>
            <a href="tel:+919840088861" className="flex items-center gap-1 hover:text-[#F8C8DC] transition">
              <Phone size={15} /> +91-98400&nbsp;88861
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 md:gap-6 text-white">
            <a href="https://www.instagram.com/anaplak_art_and_glam_salon?igsh=MW9vcjV3cDl3dGFvZg%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
              <Image src="/instagram.webp" alt="Instagram" width={18} height={18} className="w-[18px] h-[18px]" priority />
            </a>
            <a href="https://www.facebook.com/anaplakartandglam" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
              <Image src="/facebook.webp" alt="Facebook" width={18} height={18} className="w-[18px] h-[18px]" priority />
            </a>
            <a href="https://wa.me/919840088867" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
              <Image src="/whatsapp.webp" alt="WhatsApp" width={18} height={18} className="w-[18px] h-[18px]" priority />
            </a>
            <a href="https://www.youtube.com/@Anaplakartandglamsalon/" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel">
              <Image src="/youtube.webp" alt="YouTube" width={18} height={18} className="w-[18px] h-[18px]" priority />
            </a>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------
           MAIN NAVBAR
      -------------------------------------------------- */}
      <header
        className={`
          fixed left-0 w-full z-[60]
          transition-all duration-500
          ${isSticky ? "shadow-lg" : ""}
        `}
        style={{
          top: isSticky ? 0 : TOPBAR_HEIGHT,
          background: isSticky ? "rgba(0,0,0,0.25)" : "transparent",
          backdropFilter: isSticky ? "blur(18px)" : "none",
          borderBottom: isSticky ? "1px solid rgba(255,255,255,0.15)" : "none",
        }}
      >
        <div className="w-full p-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-4" style={{ marginTop: '13px' }}>
            <div className="w-[160px] md:w-[200px] h-auto flex items-center justify-center mb-2 relative" style={{ height: '60px' }}>
              <Image
                src="/logo_updated.webp"
                alt="Anaplak Art and Glam Salon"
                fill
                sizes="(max-width: 768px) 160px, 200px"
                priority
                style={{
                  objectFit: 'contain',
                  objectPosition: '52% center'
                }}
              />
            </div>
          </Link>

          {/* Desktop Menu (FIXED) */}
          <nav className="hidden lg:flex gap-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/90 text-[15px] font-bold tracking-[3px] uppercase hover:text-[#F8C8DC] transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6 cursor-pointer">
            <Link
              href="https://www.welns.io/product/booking/WFRCHN984305/Anaplak?bk_src=GMAPS110"
              target="_blank"
            >
              <button
                className="px-6 py-4 rounded-md text-white text-sm tracking-wider uppercase flex items-center gap-2 transition-all duration-400 cursor-pointer"
                style={{ backgroundColor: PRIMARY }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#F8C8DC"
                  e.currentTarget.style.color = PRIMARY
                  e.currentTarget.style.transform = "translateY(-3px)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = PRIMARY
                  e.currentTarget.style.color = "#FFF"
                  e.currentTarget.style.transform = "translateY(0px)"
                }}
                aria-label="Book appointment"
              >
                Book An Appointment <ArrowRight size={16} />
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(true)} className="lg:hidden text-white"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
          >
            <Menu size={26} />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </header>

      {/* --------------------------------------------------
           MOBILE MENU
      -------------------------------------------------- */}
      <div
        id="mobile-menu"
        className={`
          fixed top-0 right-0 w-full h-full bg-[#0F0F0F]
          p-8 flex flex-col gap-8 z-[70]
          transition-transform duration-[650ms] ease-[cubic-bezier(0.77,0,0.175,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-10 right-6 text-white"
          aria-label="Close menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
        >
          <X size={26} />
          <span className="sr-only">Close menu</span>
        </button>

        {/* Mobile Logo */}
        <div className="w-[150px] h-auto mt-6 relative" style={{ height: '50px' }}>
          <Image
            src="/logo_updated.webp"
            alt="Anaplak Art and Glam Salon"
            fill
            sizes="150px"
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* MOBILE NAV LINKS */}
        <div className="flex flex-col gap-6 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white/90 uppercase tracking-[4px] text-sm font-bold hover:text-[#F8C8DC] transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-4">
          <Link
            href="https://www.welns.io/product/booking/WFRCHN984305/Anaplak?bk_src=GMAPS110"
            target="_blank"
          >
            <button
              className="w-full py-3 rounded-md text-white text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
              style={{ backgroundColor: PRIMARY }}
              aria-label="Book appointment"
            >
              Book An Appointment <ArrowRight size={14} />
            </button>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-white items-center justify-center">
          <a href="https://www.instagram.com/anaplak_art_and_glam_salon?igsh=MW9vcjV3cDl3dGFvZg%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
            <Image src="/instagram.webp" alt="Instagram" width={24} height={24} className="w-[24px] h-[24px]" />
          </a>
          <a href="https://www.facebook.com/anaplakartandglam" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
            <Image src="/facebook.webp" alt="Facebook" width={24} height={24} className="w-[24px] h-[24px]" />
          </a>
          <a href="https://wa.me/919840088867" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
            <Image src="/whatsapp.webp" alt="WhatsApp" width={24} height={24} className="w-[24px] h-[24px]" />
          </a>
          <a href="https://www.youtube.com/@Anaplakartandglamsalon/" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel">
            <Image src="/youtube.webp" alt="YouTube" width={24} height={24} className="w-[24px] h-[24px]" />
          </a>
        </div>
      </div>
    </>
  )
}
