import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Best Salon in Chennai, Maduravoyal | Anaplak Art & Glam",
    description: "Anaplak Art and Glam is a top-rated salon in Maduravoyal, Chennai. Professional haircuts, hair colour, keratin, bridal makeup, facials and nail art. 1000+ happy clients, 6+ years of excellence. Book at Anaplak.",
    openGraph: {
        title: "Best Salon in Chennai, Maduravoyal | Anaplak Art & Glam",
        description: "Chennai's highest rated beauty salon. Expert haircuts, bridal makeup, keratin treatments, facials and nail art. Serving Maduravoyal, Koyambedu, Mogappair, Anna Nagar, Ambattur and surrounding areas.",
        url: "https://anaplakartandglamsalon.com/best-salon-in-chennai",
        type: "website",
        images: [{ url: "/logo_updated.webp", width: 1200, height: 630, alt: "Best Salon in Chennai - Anaplak Art & Glam" }],
    },
    alternates: { canonical: "https://anaplakartandglamsalon.com/best-salon-in-chennai" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
