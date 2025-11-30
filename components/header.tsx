"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  ArrowRight,
  Facebook,
  Instagram,
  Phone,
  MessageCircle,
} from "lucide-react"

export default function Header() {
  const [isSticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)

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
           TOP BAR — Contact Numbers + Social Icons
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
        <div className="w-full max-w-6xl px-4 md:px-10 flex justify-between items-center">
          {/* LEFT — CONTACT NUMBERS */}

          {/* Mobile: single main number */}
          <div className="flex md:hidden items-center gap-2 text-white text-xs tracking-wide">
            <Phone size={15} />
            <span>+91-98400&nbsp;88867</span>
          </div>

          {/* Desktop / Tablet: both numbers */}
          <div className="hidden md:flex items-center gap-6 text-white text-sm tracking-wide">
            <span className="flex items-center gap-1">
              <Phone size={15} />
              +91-98400&nbsp;88867
            </span>

            <span className="flex items-center gap-1">
              <Phone size={15} />
              +91-98400&nbsp;88861
            </span>
          </div>

          {/* RIGHT — SOCIAL ICONS */}
          <div className="flex items-center gap-4 md:gap-6 text-white">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/anaplak_art_and_glam_salon?igsh=MW9vcjV3cDl3dGFvZg%3D%3D"
              target="_blank"
              className="hover:opacity-80 transition"
            >
              <Instagram size={18} className="md:hidden" />
              <Instagram size={20} className="hidden md:block" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/anaplakartandglam"
              target="_blank"
              className="hover:opacity-80 transition"
            >
              <Facebook size={18} className="md:hidden" />
              <Facebook size={20} className="hidden md:block" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919840088867"
              target="_blank"
              className="hover:opacity-80 transition"
            >
              <MessageCircle size={18} className="md:hidden" />
              <MessageCircle size={20} className="hidden md:block" />
            </a>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------
           MAIN NAVBAR (FULL WIDTH)
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
        <div className="w-full max-w-6xl mx-auto px-4 md:px-10 py-4 md:py-5 flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 md:gap-4">
            <img
              src="/logo.png"
              alt="Anaplak Logo"
              className="w-[70px] md:w-[85px] h-auto object-contain"
            />

            <span className="text-white text-lg md:text-xl tracking-[4px] md:tracking-[6px] uppercase">
              ANAPLAK
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-10 items-center">
            {["Home", "About", "Blog", "Store", "Contacts"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/80 text-[12px] tracking-[3px] uppercase hover:text-[#F8C8DC] transition"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              className="px-8 py-3 rounded-md text-white text-xs tracking-wider uppercase flex items-center gap-2"
              style={{ backgroundColor: PRIMARY }}
            >
              An Appointment <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* --------------------------------------------------
           MOBILE MENU
      -------------------------------------------------- */}

      {/* BACKDROP */}
      <div
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]
          transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* SLIDE PANEL */}
      <div
        className={`
          fixed top-0 right-0 w-full h-full bg-[#0F0F0F]
          p-8 flex flex-col gap-8 z-[70]
          transition-transform duration-[650ms] ease-[cubic-bezier(0.77,0,0.175,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-white"
        >
          <X size={26} />
        </button>

        {/* Mobile Logo */}
        <div className="flex items-center gap-4 mt-6">
          <img
            src="/logo.png"
            alt="Anaplak Logo"
            className="w-[80px] h-auto object-contain"
          />
          <span className="text-white text-2xl tracking-[6px] uppercase">
            ANAPLAK
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 mt-8">
          {["Home", "About", "Blog", "Store", "Contacts"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-white/90 uppercase tracking-[4px] text-lg hover:text-[#F8C8DC] transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Social (mobile) */}
        <div className="flex gap-6 text-white mt-8">
          <a
            href="https://www.instagram.com/anaplak_art_and_glam_salon?igsh=MW9vcjV3cDl3dGFvZg%3D%3D"
            target="_blank"
          >
            <Instagram size={24} />
          </a>
          <a href="https://www.facebook.com/anaplakartandglam" target="_blank">
            <Facebook size={24} />
          </a>
          <a href="https://wa.me/919840088867" target="_blank">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </>
  )
}
