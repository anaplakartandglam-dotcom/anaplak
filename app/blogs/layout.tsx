import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Beauty Tips, Hair Care & Bridal Makeup Blogs | Anaplak Art & Glam",

  description:
    "Discover expert beauty tips, hair care guides, skincare advice, bridal makeup trends, and salon insights from Anaplak Art & Glam in Chennai. Stay updated with the latest beauty trends and professional recommendations.",

  keywords: [
    "beauty blog Chennai",
    "beauty tips Chennai",
    "hair care blog",
    "hair care tips Chennai",
    "skincare tips Chennai",
    "bridal makeup blog",
    "bridal makeup trends",
    "hair styling tips",
    "hair coloring guide",
    "keratin treatment guide",
    "skin care advice",
    "beauty trends 2026",
    "salon blog Chennai",
    "beauty articles Chennai",
    "beauty experts Chennai",
    "bridal beauty tips",
    "professional beauty advice",
    "hair treatment tips",
    "beauty and wellness blog",
    "Anaplak beauty blog"
  ],

  openGraph: {
    title:
      "Beauty Tips, Hair Care & Bridal Makeup Blogs | Anaplak Art & Glam",

    description:
      "Explore expert beauty advice, skincare tips, hair care guides, bridal makeup trends, and professional salon insights from Chennai beauty experts.",

    url: "https://anaplakartandglamsalon.com/blogs",
    siteName: "Anaplak Art & Glam",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "/logo_updated.webp",
        width: 1200,
        height: 630,
        alt: "Beauty Tips, Hair Care & Bridal Makeup Blog - Anaplak Art & Glam",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Beauty Tips, Hair Care & Bridal Makeup Blogs | Anaplak Art & Glam",

    description:
      "Expert beauty tips, skincare advice, hair care guides, bridal makeup trends, and salon insights from Chennai beauty professionals.",

    images: ["/logo_updated.webp"],
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