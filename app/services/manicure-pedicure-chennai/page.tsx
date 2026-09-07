import { Metadata } from "next"
import ServiceDetailPage, { buildServiceMetadata } from "@/components/service-detail-page"
import { getServiceBySlug } from "@/data/serviceData"

const slug = "manicure-pedicure-chennai"

export const metadata: Metadata = buildServiceMetadata({
    title: "Manicure & Pedicure in Chennai, Maduravoyal | Professional Nail Care",
    description: "Professional manicure and pedicure services in Chennai. Relaxing nail care from ₹800 with gel polish, spa treatments, and signature experiences at Anaplak Art and Glam, Maduravoyal.",
    keywords: ["manicure chennai", "pedicure chennai", "nail salon chennai", "gel polish chennai", "spa pedicure chennai", "manicure Maduravoyal", "best nail salon chennai", "nail care salon"],
    image: "/luxury-manicure-pedicure-nail-salon-spa-treatment.webp",
    slug,
})

export default function Page() {
    const service = getServiceBySlug(slug)!
    return (
        <ServiceDetailPage
            data={{
                ...service,
                heroTagline: "Manicure & Pedicure in Chennai, Maduravoyal, Pamper Yourself with Professional Nail Care",
                heroCta: "Book Manicure & Pedicure",
                whoItsFor: "Anyone looking for professional nail care ,  from routine maintenance and grooming to luxurious spa experiences that leave hands and feet feeling refreshed, smooth, and polished.",
                expectedResult: "Perfectly groomed, healthy nails with smooth skin, proper cuticle care, and your choice of classic or gel polish finish ,  all in a relaxing salon environment with hygiene-focused sterilized tools.",
                pricing: { startingAt: "₹ 800", duration: "30 to 60 min", note: "Gel polish from ₹1,000", disclaimer: "Final price depends on the treatment and polish selected." },
                faqs: [
                    { q: "How often should I get a manicure or pedicure?", a: "Most clients benefit from professional nail care every 3 to 4 weeks to maintain healthy nails, smooth skin, and a polished appearance." },
                    { q: "How long does gel polish last?", a: "Gel polish typically lasts 2 to 3 weeks without chipping when properly applied and maintained. It's ideal for clients who want longer-lasting results." },
                    { q: "Do you use sterilized tools?", a: "Yes, all tools are thoroughly sanitized between clients. Hygiene is our priority and we follow strict cleaning protocols." },
                    { q: "What's the difference between classic and spa manicure?", a: "The spa manicure includes extended massage, deeper exfoliation, and additional nourishing treatments compared to the classic version, providing a more luxurious and relaxing experience." },
                ],
                testimonials: [
                    { text: "Had a wonderful experience. I had my pedicure done here! Very friendly people. Had great care and the massage chair was amazing during the pedicure session.", name: "Santhosh Anto", service: "Pedicure" },
                    { text: "I came here to do my Saree Pre Pleating and Saree Draping, it was a wonderful experience. I also had a Signature pedicure and got classic manicure free! Thanks Anaplak and thank you Kalpana.", name: "Sam Sam", service: "Pedicure & Manicure" },
                    { text: "Very nice experience especially pedicure with experienced staff Ragashree. I felt very cool and nice services worth for cost paid.", name: "Abdul Samadhu", service: "Pedicure" },
                ],
            }}
        />
    )
}
