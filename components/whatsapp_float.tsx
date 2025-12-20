"use client"

import React from 'react'
import Image from 'next/image'

export default function WhatsAppFloat() {
    const whatsappMessage = encodeURIComponent("Hi! I would like to book an appointment at Anaplak Art and Glam Salon.")
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=919840088867&text=${whatsappMessage}&type=phone_number&app_absent=0`

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Contact us on WhatsApp"
        >
            <Image
                src="/whatsapp_float.png"
                alt="WhatsApp"
                width={60}
                height={60}
                className="whatsapp-icon"
            />
            <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          animation: none;
        }

        .whatsapp-icon {
          filter: drop-shadow(0 4px 12px rgba(37, 211, 102, 0.5));
          transition: filter 0.3s ease;
        }

        .whatsapp-float:hover .whatsapp-icon {
          filter: drop-shadow(0 6px 20px rgba(37, 211, 102, 0.8));
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .whatsapp-float {
            bottom: 20px;
            right: 20px;
          }
          
          .whatsapp-icon {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
        </a>
    )
}
