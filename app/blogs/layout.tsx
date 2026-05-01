import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Beauty Blogs & Expert Tips | Anaplak Art and Glam Salon Chennai",
  description: "Expert beauty tips, hair care guides, skincare advice, bridal makeup trends, and latest salon services from Anaplak Art and Glam Salon in Chennai. Read our professional beauty insights.",
  keywords: [
    "beauty blog Chennai",
    "hair care tips Chennai",
    "skincare advice Maduravoyal",
    "bridal makeup trends 2026",
    "hair styling tips",
    "salon beauty tips",
    "professional beauty guidance",
    "hair treatment guide Chennai",
    "facial benefits Chennai",
    "beauty tips for women Chennai",
  ],
  openGraph: {
    title: "Beauty Blogs & Expert Tips | Anaplak Art and Glam Salon",
    description: "Expert beauty tips, hair care guides, skincare advice, and the latest trends in bridal makeup and hair styling from Chennai's top salon.",
    url: "https://anaplakartandglamsalon.com/blogs",
    siteName: "Anaplak Art and Glam Salon",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: '/og-logo.png',
        width: 1200,
        height: 630,
        alt: 'Anaplak Beauty Blog - Expert Hair Care and Skincare Tips',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty Blogs & Expert Tips | Anaplak Salon Chennai",
    description: "Expert beauty tips, hair care guides, skincare advice from Anaplak Art and Glam Salon.",
  },
  alternates: {
    canonical: "https://anaplakartandglamsalon.com/blogs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}