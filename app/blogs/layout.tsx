import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blogs | Anaplak Art and Glam Salon",
  description: "Expert beauty tips, hair care guides, skincare advice, and the latest trends in bridal makeup, hair styling, and more from Anaplak Art and Glam Salon in Chennai.",
  openGraph: {
    title: "Beauty Blogs | Anaplak Art and Glam Salon",
    description: "Expert beauty tips, hair care guides, skincare advice, and the latest trends from our professional stylists.",
    url: "https://anaplakartandglamsalon.com/blogs",
    siteName: "Anaplak Art and Glam Salon",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty Blogs | Anaplak Art and Glam Salon",
    description: "Expert beauty tips, hair care guides, and the latest trends.",
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