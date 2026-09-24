"use client"

import Image from "next/image"
import { whatsappDeepLink } from "@/data/businessInfo"
import TrackLink from "@/components/track-link"

export default function WhatsAppFloat() {
    return (
        <TrackLink
            kind="whatsapp_click"
            href={whatsappDeepLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="fixed bottom-[20px] right-[20px] sm:bottom-[30px] sm:right-[30px] z-[9999] cursor-pointer transition-transform duration-300 hover:scale-110 hover:[animation:none] animate-[wa-pulse_2s_infinite]"
        >
            <Image
                src="/whatsapp_float.webp"
                alt="WhatsApp"
                width={60}
                height={60}
                className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] drop-shadow-[0_4px_12px_rgba(37,211,102,0.5)]"
            />
        </TrackLink>
    )
}