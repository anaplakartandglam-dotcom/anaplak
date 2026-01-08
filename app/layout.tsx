import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Reddit_Sans } from "next/font/google"
import "./globals.css"
import StructuredData from "@/components/structured-data"
import WhatsAppFloat from "@/components/whatsapp_float"

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
  metadataBase: new URL('https://anaplakartandglamsalon.com'),
  title: {
    default: "Anaplak Art and Glam Salon | Premium Hair & Beauty Salon in Maduravoyal, Chennai",
    template: "%s | Anaplak Art and Glam Salon"
  },
  description:
    "Anaplak Art and Glam Salon in Maduravoyal, Chennai offers premium hair styling, bridal makeup, hair coloring, facials, manicure, pedicure & beauty treatments. Expert stylists with 16+ years experience. Book your appointment today!",
  keywords: [
    // Primary Keywords
    "premium hair salon Chennai",
    "beauty salon Maduravoyal",
    "Anaplak salon Chennai",
    "premium salon Chennai",

    // Service Keywords
    "bridal makeup Chennai",
    "hair styling Chennai",
    "hair coloring Chennai",
    "hair treatment Chennai",
    "facial treatment Chennai",
    "manicure pedicure Chennai",
    "party makeup Chennai",
    "engagement makeup Chennai",

    // Location Keywords
    "salon in Maduravoyal",
    "beauty parlour Maduravoyal",
    "salon near MMDA Colony",
    "salon in CDN Nagar",
    "best salon in Chennai",

    // Brand Keywords
    "Anaplak Art and Glam",
    "Anaplak salon",
    "luxury premium hair salon Chennai",
    "professional hair care Chennai",

    // Long-tail Keywords
    "best bridal makeup artist Chennai",
    "hair treatment Chennai",
    "keratin treatment Chennai",
    "anti-aging facial Chennai",
    "wedding makeup Chennai",
  ],
  authors: [{ name: "Anaplak Art and Glam Salon" }],
  creator: "Anaplak Art and Glam Salon",
  publisher: "Anaplak Art and Glam Salon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://anaplakartandglamsalon.com',
    siteName: 'Anaplak Art and Glam Salon',
    title: 'Anaplak Art and Glam Salon | Premium Hair & Beauty Services in Chennai',
    description: 'Experience luxury beauty services at Anaplak Salon in Maduravoyal, Chennai. Expert bridal makeup, hair styling, coloring, facials & more. 16+ years of excellence. Book now!',
    images: [
      {
        url: '/logo_new.jpeg',
        width: 1200,
        height: 630,
        alt: 'Anaplak Art and Glam Salon - Premium Beauty Services in Chennai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anaplak Art and Glam Salon | Premium Hair & Beauty Services',
    description: 'Experience luxury beauty services in Maduravoyal, Chennai. Expert bridal makeup, hair styling, facials & more. Book your appointment today!',
    images: ['/logo_new.jpeg'],
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
  alternates: {
    canonical: 'https://anaplakartandglamsalon.com',
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
    <html lang="en" className={`${dmSans.variable} ${redditSans.variable} scroll-smooth`}>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RMZRTGH4NB"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RMZRTGH4NB');
            `,
          }}
        />
        <link rel="icon" type="image/jpeg" sizes="32x32" href="/logo_new.jpeg" />
        <link rel="icon" type="image/jpeg" sizes="16x16" href="/logo_new.jpeg" />
        <link rel="apple-touch-icon" href="/logo_new.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-dm-sans antialiased bg-black text-gray-100">
        <StructuredData />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
