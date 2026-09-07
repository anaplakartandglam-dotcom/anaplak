import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Best Salon in Maduravoyal, Chennai | Anaplak Art and Glam | 4.9 Rated",
    description: "Voted the best salon in Maduravoyal, Chennai. Professional haircuts, hair colour, keratin, bridal makeup, facials, nail art and beauty services. 1000+ happy clients, 6+ years of excellence. Book at Anaplak Art and Glam.",
    keywords: [
        "best salon in chennai", "best hair salon in chennai", "best beauty parlour chennai",
        "best beauty salon in chennai", "best hair stylist chennai", "best parlour chennai",
        "best parlour in chennai", "chennai beauty salon", "good hair salons in chennai",
        "good salon in chennai", "hair salon chennai", "hair stylist chennai",
        "best hair stylist in chennai for males", "best hair stylist in chennai for females",
        "best hair cut salon in chennai", "best hair dresser in chennai",
        "best hair salon in chennai for men", "best men salon in chennai",
        "best men's hair salon in chennai", "best mens parlour in chennai",
        "best hairstyle salon in chennai", "best haircut chennai", "best stylist in chennai",
        "hair spa chennai", "best hair spa in chennai", "top hair salon in chennai",
        "top salon in chennai", "best salon in maduravoyal", "best salon near koyambedu",
        "best salon near mogappair", "best salon near anna nagar", "salon near ambattur",
        "salon near arumbakkam", "salon near virugambakkam", "best unisex salon in chennai",
        "best salon in chennai for women", "best women salon in chennai",
        "best hair salon in chennai for women", "best parlour for haircut in chennai",
        "hair cut chennai", "best hair stylists in chennai",
        "best haircut salon for ladies in chennai near me",
        "best salon for keratin treatment in chennai",
        "best salon in chennai for hair smoothening",
        "best makeover salon in chennai", "good hair stylist in chennai",
    ],
    openGraph: {
        title: "Best Salon in Maduravoyal, Chennai | Anaplak Art and Glam",
        description: "Chennai's highest rated beauty salon. Expert haircuts, bridal makeup, keratin treatments, facials and nail art. Serving Maduravoyal, Koyambedu, Mogappair, Anna Nagar, Ambattur and surrounding areas.",
        url: "https://anaplakartandglamsalon.com/best-salon-in-chennai",
        type: "website",
        images: [{ url: "/logo_updated.webp", width: 1200, height: 630, alt: "Best Salon in Chennai - Anaplak Art and Glam" }],
    },
    alternates: { canonical: "https://anaplakartandglamsalon.com/best-salon-in-chennai" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}
