"use client"

import { useEffect, useState } from "react"
import { MapPin, Phone, Facebook, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  // Desktop animation logic (unchanged)
  const words = ["Hair", "Style", "Makeup"]
  const [typedIndex, setTypedIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => setTypedIndex((prev) => (prev + 1) % words.length),
      2200
    )
    return () => clearInterval(interval)
  }, [])

  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat pt-16 md:pt-20 pb-10 md:pb-12"
      style={{ backgroundImage: "url('/footer_bg.jpg')" }}
    >
      {/* --------------------------------------------------------------
          MOBILE VERSION (pixel aligned like screenshot)
      -------------------------------------------------------------- */}
      <div className="md:hidden flex flex-col items-center text-center px-8">

 <img
          src="/logo.png"
          alt="Anaplak Art & Glam Salon"
          className="w-[80px] h-auto mb-6 mt-2"
        />
        {/* CONTACT INFO TITLE */}
        <h2 className="text-[#D2B6B6] text-[22px] tracking-[0.28em] uppercase mb-10 font-semibold">
          Contact Info
        </h2>

        {/* ----------------- LOCATION BLOCK ----------------- */}
        <div className="flex w-full items-start gap-4 mb-10">
          {/* Icon bubble */}
          <div className="w-12 h-12 rounded-full bg-[#D2B6B6] flex items-center justify-center text-black shrink-0">
            <MapPin size={22} />
          </div>

          {/* Text block */}
          <div className="text-left">
            <p className="text-gray-300 uppercase text-[12px] tracking-[0.22em] mb-1">
              Central Office:
            </p>
            <p className="text-gray-200 text-[16px] leading-relaxed">
              Anaplak Art & Glam Salon, Chennai
            </p>
          </div>
        </div>

        {/* ----------------- PHONE BLOCK ----------------- */}
        <div className="flex w-full items-start gap-4 mb-10">
          {/* Icon bubble */}
          <div className="w-12 h-12 rounded-full bg-[#D2B6B6] flex items-center justify-center text-black shrink-0">
            <Phone size={22} />
          </div>

          {/* Text block */}
          <div className="text-left">
            <p className="text-gray-300 uppercase text-[12px] tracking-[0.22em] mb-1">
              Phones:
            </p>
            <a
              href="tel:+919840088867"
              className="text-gray-200 text-[16px] leading-relaxed block hover:text-white transition"
            >
              +91 98400 88867
            </a>
            <a
              href="tel:+919840088861"
              className="text-gray-200 text-[16px] leading-relaxed block hover:text-white transition"
            >
              +91 98400 88861
            </a>
          </div>
        </div>

        {/* ----------------- SOCIAL ICONS ----------------- */}
        <div className="flex gap-10 text-[#D2B6B6] mt-2 mb-6">
          <a
            href="https://www.facebook.com/anaplakartandglam"
            target="_blank"
            className="hover:opacity-70 transition"
          >
            <Facebook size={28} />
          </a>

          <a
            href="https://www.instagram.com/anaplak_art_and_glam_salon"
            target="_blank"
            className="hover:opacity-70 transition"
          >
            <Instagram size={28} />
          </a>

          <a
            href="https://wa.me/919840088867"
            target="_blank"
            className="hover:opacity-70 transition"
          >
            <MessageCircle size={28} />
          </a>
        </div>
      </div>

      {/* --------------------------------------------------------------
          DESKTOP VERSION (unchanged)
      -------------------------------------------------------------- */}
      <div className="hidden md:grid max-w-[1350px] mx-auto px-6 lg:px-10 grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
        {/* (YOUR ORIGINAL DESKTOP CODE UNTOUCHED BELOW) */}

        {/* COL 1 – LOGO */}
        <div className="flex md:block items-center md:items-start">
          <img
            src="/LOGO_NEW.png"
            alt="Anaplak Art & Glam Salon"
            className="w-[140px] md:w-[155px] object-contain"
          />
        </div>

        {/* COL 2 – AESTHETIC HARMONY */}
        <div className="text-white">
          <h3 className="text-[30px] md:text-[34px] leading-[1.1] font-semibold uppercase tracking-[0.08em]">
            ALWAYS 
            <br />
            BE ANAPLAK
          </h3>
        </div>

        {/* COL 3 – EXPLORE */}
        <div>
          <h6 className="uppercase text-[#C8AFAE] tracking-[0.35em] text-[13px] mb-4 font-semibold">
            Explore
          </h6>

          <ul className="space-y-2.5 text-[15px] md:text-[16px] uppercase tracking-[0.18em] text-white/85">
            {["Home", "About", "Blog", "Store", "Contacts"].map((item) => (
              <li key={item}>
                <a className="hover:text-[#C8AFAE] transition cursor-pointer">
                  {item} +
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COL 4 – CONTACT INFO */}
        <div>
          <h6 className="uppercase text-[#C8AFAE] tracking-[0.35em] text-[13px] mb-4 font-semibold">
            Contact Info
          </h6>

          <div className="space-y-5 text-[15px] md:text-[16px]">
            {/* Location */}
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-full bg-[#C8AFAE] flex items-center justify-center text-black">
                <MapPin size={18} />
              </div>
              <div>
                <p className="uppercase text-[11px] text-gray-400 mb-1 tracking-[0.16em]">
                  Salon Location:
                </p>
                <p className="text-gray-300 leading-[1.6]">
                  Anaplak Art & Glam Salon, Chennai
                </p>
              </div>
            </div>

            {/* Phones */}
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-full bg-[#C8AFAE] flex items-center justify-center text-black">
                <Phone size={18} />
              </div>
              <div>
                <p className="uppercase text-[11px] text-gray-400 mb-1 tracking-[0.16em]">
                  Contact:
                </p>
                <p className="text-gray-300 leading-tight">
                  +91 98400 88867
                </p>
                <p className="text-gray-300 leading-tight">
                  +91 98400 88861
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-1 text-[#C8AFAE]">
              <a
                href="https://www.facebook.com/anaplakartandglam"
                target="_blank"
                className="hover:opacity-70 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/anaplak_art_and_glam_salon"
                target="_blank"
                className="hover:opacity-70 transition"
              >
                <Instagram size={21} />
              </a>
              <a
                href="https://wa.me/919840088867"
                target="_blank"
                className="hover:opacity-70 transition"
              >
                <MessageCircle size={21} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------ BOTTOM COPYRIGHT ------------------ */}
      <div className="w-full border-t border-white/10 mt-10 pt-5">
        <p className="text-center text-gray-400 text-[13px] md:text-[14px] tracking-wide">
          © Anaplak Art & Glam Salon — All Rights Reserved — 2025
        </p>
      </div>
    </footer>
  )
}
