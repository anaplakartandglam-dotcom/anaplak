import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Beauty, Hair & Bridal Blog | Anaplak Art & Glam Chennai",

  description:
    "Expert beauty tips, hair care guides, skincare advice and bridal makeup trends from Anaplak Art & Glam, Maduravoyal, Chennai. Read and book today.",

  openGraph: {
    title:
      "Beauty, Hair & Bridal Blog | Anaplak Art & Glam Chennai",

    description:
      "Beauty tips, skincare advice, hair care guides and bridal makeup trends from Anaplak Art & Glam, Chennai.",

    url: "https://anaplakartandglamsalon.com/blogs",
    siteName: "Anaplak Art & Glam",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "/images/brand/anaplak-art-and-glam-logo.webp",
        width: 1200,
        height: 630,
        alt: "Beauty Tips, Hair Care & Bridal Makeup Blog - Anaplak Art & Glam",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Beauty, Hair & Bridal Blog | Anaplak Art & Glam Chennai",

    description:
      "Beauty tips, skincare advice, hair care guides and bridal makeup trends from Anaplak Art & Glam, Chennai.",

    images: ["/images/brand/anaplak-art-and-glam-logo.webp"],
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
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}