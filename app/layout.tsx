import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Reddit_Sans, Dancing_Script } from "next/font/google"
import "./globals.css"
import StructuredData from "@/components/structured-data"
import WhatsAppFloat from "@/components/whatsapp_float"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import SparkleCursor from "@/components/SparkleCursor"
import { GoogleTagManager } from "@next/third-parties/google";

config.autoAddCss = false

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})
const redditSans = Reddit_Sans({
  subsets: ["latin"],
  variable: "--font-reddit-sans",
  display: "swap",
})
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://anaplakartandglamsalon.com'),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'oCqa8wjtslCGmaZRYF4EbGN9BztUVLs9c-EQOVwcELk',
  },
}


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0f0cff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${redditSans.variable} ${dancingScript.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon/favicon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#53675C" />
        <meta name="msapplication-TileColor" content="#53675C" />
      </head>
      <body className="font-dm-sans antialiased bg-black text-gray-100">
        <StructuredData />
        {children}
        <GoogleTagManager gtmId="GTM-5N7G5WN4" />
        <WhatsAppFloat />
        <div className="hidden lg:block">
          <SparkleCursor />
        </div>
      </body>
    </html>
  )
}
