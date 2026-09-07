import { Metadata } from "next"
import ServiceDetailPage, { buildServiceMetadata } from "@/components/service-detail-page"
import { getServiceBySlug } from "@/data/serviceData"

const slug = "hair-styling-chennai"

export const metadata: Metadata = buildServiceMetadata({
    title: "Hair Styling in Chennai, Maduravoyal | Professional Haircuts & Updos",
    description: "Professional hair styling in Chennai for men and women. Haircuts, blow dry, bridal updos, and special occasion styling at Anaplak Art and Glam, Maduravoyal from ₹900.",
    keywords: ["hair stylist chennai", "best hair salon in chennai", "best hair stylist in chennai for males", "best haircut salon in chennai", "best hair dresser in chennai", "hair salon chennai", "hair styling Maduravoyal", "hair updos", "bridal hair style", "blow dry chennai", "party hairstyles"],
    image: "/transformation-1.webp",
    slug,
})

export default function Page() {
    const service = getServiceBySlug(slug)!
    return (
        <ServiceDetailPage
            data={{
                ...service,
                heroTagline: "Hair Styling in Chennai, Maduravoyal, Professional Styles for Every Occasion",
                heroCta: "Book Your Styling",
                whoItsFor: "Men and women seeking professional haircuts, blowouts, party styling, or bridal updos ,  whether it's an everyday refresh or a special celebration at Anaplak Art and Glam.",
                expectedResult: "A perfectly styled look with expert consultation, premium products, and maintenance tips to recreate the style at home ,  customized to your face shape and hair texture.",
                pricing: { startingAt: "₹ 900", duration: "30 to 60 min", note: "Women's styling starts at ₹1,200", disclaimer: "Final price depends on hair length and density." },
                faqs: [
                    { q: "Do I need to wash my hair before the appointment?", a: "Not necessarily. Your stylist will advise whether a wash is recommended based on the selected service and your hair condition." },
                    { q: "How long does a bridal updo take?", a: "Most bridal updos take between 45 minutes and 90 minutes depending on complexity and hair length." },
                    { q: "Can you work with short hair?", a: "Yes. Our hairstylists create customized looks for both short and long hair, working with all hair textures and lengths." },
                    { q: "Which hairstyle suits my face shape?", a: "During your consultation, our stylists recommend styles that complement your facial structure and features ,  no two clients receive identical recommendations." },
                    { q: "How often should I get a haircut?", a: "Most people benefit from a haircut every 6 to 8 weeks, although this varies based on hair type and style preferences." },
                    { q: "Do you provide styling for special events?", a: "Yes. We offer party styling, bridal styling, reception hairstyles, and occasion-specific hair services including updos and blow dries." },
                ],
                testimonials: [
                    { text: "Vignesh did an excellent job, understood exactly what I wanted, and the final result was perfect. The staff members were very friendly, polite, and professional.", name: "Bala Murugan", service: "Haircut" },
                    { text: "Absolutely loved my haircut by Danny. He really listened to what I wanted and delivered a clean, stylish cut. Friendly, professional, and highly recommended.", name: "Mohan Raj", service: "Haircut" },
                    { text: "Stylist Kalpana did an excellent job with my haircut. She understood exactly what I wanted and delivered it perfectly. Very professional and friendly service.", name: "Aravindhan V", service: "Haircut" },
                ],
            }}
        />
    )
}
