import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Reddit_Sans, Dancing_Script } from "next/font/google"
import "./globals.css"
import StructuredData from "@/components/structured-data"
import WhatsAppFloat from "@/components/whatsapp_float"
import Script from "next/script"
import { config } from '@fortawesome/fontawesome-svg-core'
import SparkleCursor from "@/components/SparkleCursor"

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
  title: "Luxury Hair, Skin & Bridal Salon in Chennai | Anaplak",
  description: "✨ Where beauty meets confidence. 💫 Experience personalised hair, skin, nail and bridal services in Maduravoyal. 🤝 Trusted by 1000+ happy clients for stunning transformations. ☎️ Book your appointment today +91-9840088867 | Open 10AM-9PM Daily",
  keywords: [

    // High volume keywords (Google ads)
    "hair salon",
    "beauty salon",
    "hair smoothening price",
    "nearby salon",
    "best salon for men near me",
    "beauty salon home service",
    "hair salon home service",
    "wedding hairdresser",
    "beauty and salon",
    "hair on salon",
    "beauty & salon",
    "beauty and beauty salon",
    "haircut in salon",
    "beauty in salon",
    "beautic salon",
    "hair salon hair salon",
    "salon beauty salon",
    "beauty parlour beauty parlour beauty parlour",
    "beauty salon spa near me",
    "beauty salon for men near me",
    "beauty salon beauty",
    "salon hair salon",
    "beauty salon salon",
    "beauty salon beauty salon",
    "salon for beauty",
    "hair salon hair",
    "beauty parlour beauty parlour beauty parlour beauty parlour",
    "beauty beauty salon",
    "bridal hair and",
    "and beauty salon",
    "hair & spa",
    "salon and hair",
    "hair styling",
    
    // Core Business Keywords
    'luxury salon Maduravoyal, Chennai',
    'beauty salon Maduravoyal, Chennai',
    'best beauty salon Maduravoyal, Chennai',
    'premium salon Maduravoyal, Chennai',
    'hair and beauty salon Maduravoyal, Chennai',

    // Secondary Location Keywords
    'luxury salon Chennai',
    'beauty salon Chennai',
    'premium beauty salon Chennai',
    'top rated salon Chennai',

    // High-Value Service Categories
    'bridal makeup artist Maduravoyal, Chennai',
    'bridal makeup Maduravoyal, Chennai',
    'hair salon Maduravoyal, Chennai',
    'hair coloring Maduravoyal, Chennai',
    'keratin treatment Maduravoyal, Chennai',
    'facial treatments Maduravoyal, Chennai',

    // Brand Positioning
    'premium beauty services Maduravoyal, Chennai',
    'luxury hair and skin salon',
    'bridal and beauty studio Maduravoyal, Chennai',
    'hair skin and makeup experts Maduravoyal, Chennai',

    // Nearby Area Keywords
    'beauty salon MMDA Colony',
    'beauty salon Chennai 600095',

  ],
authors: [{ name: "Kalpana" }],
  creator: "Kalpana",
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
            description: 'Experience luxury beauty services at Anaplak Salon in Maduravoyal, Chennai. Expert bridal makeup, hair styling, coloring, facials & more. 6+ years of excellence. Book now!',
              images: [
                {
                  url: '/logo_updated.webp',
                  width: 1200,
                  height: 630,
                  alt: 'Anaplak Art And Glam Salon - Premium Beauty Services in Chennai',
                },
              ],
  },
twitter: {
  card: 'summary_large_image',
    title: 'Anaplak Art and Glam Salon | Premium Hair & Beauty Services',
      description: 'Experience luxury beauty services in Maduravoyal, Chennai. Expert bridal makeup, hair styling, facials & more. Book your appointment today!',
        images: ['/logo_updated.webp'],
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
    <html lang="en" className={`${dmSans.variable} ${redditSans.variable} ${dancingScript.variable} scroll-smooth`}>
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
        {/* Favicons - Comprehensive Setup */}
        {/* <link rel="icon" type="image/svg+xml" href="/favicon/favicon.png" /> */}
        {/* <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" /> */}
        <link rel="icon" href="/favicon/favicon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#53675C" />
        <meta name="msapplication-TileColor" content="#53675C" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-dm-sans antialiased bg-black text-gray-100">
        <StructuredData />
        {children}
        <WhatsAppFloat />
        <div className="hidden lg:block">
          <SparkleCursor />
        </div>
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7823087641"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
}
