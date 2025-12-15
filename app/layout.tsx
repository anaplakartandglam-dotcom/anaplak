import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Reddit_Sans } from "next/font/google"
import "./globals.css"

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

export const metadata: Metadata = {
  metadataBase: new URL('https://anaplak.com'),
  title: {
    default: "ANAPLAK Art and Glam Salon | Premium Hair & Beauty Services in Chennai",
    template: "%s | ANAPLAK Art and Glam Salon"
  },
  description:
    "ANAPLAK Art and Glam Salon - Premium hair styling, cuts, coloring, and beauty services in Maduravoyal, Chennai. Expert stylists providing luxury grooming experiences with personalized care.",
  keywords: [
    "hair salon Chennai",
    "beauty salon Maduravoyal",
    "hair styling Chennai",
    "hair coloring Chennai",
    "premium salon Chennai",
    "ANAPLAK salon",
    "luxury hair salon",
    "professional hair care",
    "beauty treatments Chennai"
  ],
  authors: [{ name: "ANAPLAK Art and Glam Salon" }],
  creator: "ANAPLAK Art and Glam Salon",
  publisher: "ANAPLAK Art and Glam Salon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://anaplak.com',
    siteName: 'ANAPLAK Art and Glam Salon',
    title: 'ANAPLAK Art and Glam Salon | Premium Hair & Beauty Services',
    description: 'Premium hair styling, cuts, coloring, and beauty services in Maduravoyal, Chennai. Expert stylists providing luxury grooming experiences.',
    images: [
      {
        url: '/LOGO_NEW.png',
        width: 1200,
        height: 630,
        alt: 'ANAPLAK Art and Glam Salon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANAPLAK Art and Glam Salon | Premium Hair & Beauty Services',
    description: 'Premium hair styling, cuts, coloring, and beauty services in Maduravoyal, Chennai.',
    images: ['/LOGO_NEW.png'],
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
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
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
    <html lang="en" className={`${dmSans.variable} ${redditSans.variable} scroll-smooth`}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/LOGO_NEW.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/LOGO_NEW.png" />
        <link rel="apple-touch-icon" href="/LOGO_NEW.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-dm-sans antialiased bg-black text-gray-100">{children}</body>
    </html>
  )
}
