import { Metadata } from "next"
import ServiceDetailPage, { buildServiceMetadata } from "@/components/service-detail-page"
import { getServiceBySlug } from "@/data/serviceData"

const slug = "fashion-editorial-makeup-chennai"

export const metadata: Metadata = buildServiceMetadata({
    title: "Fashion Makeup Artist in Chennai, Maduravoyal | Editorial & Photoshoot Makeup",
    description: "Professional fashion and editorial makeup in Chennai for photoshoots, campaigns, runway shows, and creative projects. Consultation-based pricing at Anaplak Art and Glam, Maduravoyal.",
    keywords: ["fashion makeup artist chennai", "editorial makeup chennai", "model makeup chennai", "high fashion makeup", "runway makeup chennai", "photoshoot makeup", "commercial makeup artist", "creative makeup chennai"],
    image: "/professional-makeup-artist-beauty-glamour-studio.webp",
    slug,
})

export default function Page() {
    const service = getServiceBySlug(slug)!
    return (
        <ServiceDetailPage
            data={{
                ...service,
                heroTagline: "Fashion & Editorial Makeup in Chennai, Maduravoyal, Creative Looks for the Camera",
                heroCta: "Book Creative Consultation",
                whoItsFor: "Fashion designers, professional photographers, models, creative agencies, clothing and jewellery brands, magazine shoots, runway events, influencers, and content creators seeking professional beauty for creative projects.",
                expectedResult: "High-fashion, camera-optimized makeup that performs under studio lighting, professional photography, and artistic direction ,  customized to your project's creative vision.",
                pricing: { startingAt: "Custom Quote", duration: "Varies by project", note: "Free initial consultation", disclaimer: "Pricing is based on project requirements and scope." },
                faqs: [
                    { q: "Do you work on location?", a: "Yes. Location-based services can be arranged depending on project requirements and production needs." },
                    { q: "Can I share a mood board?", a: "Absolutely. Mood boards, references, and creative direction are encouraged during consultation to ensure the final look aligns with your vision." },
                    { q: "Do you provide makeup for fashion shoots?", a: "Yes. We work with photographers, designers, brands, and creative teams on fashion projects and editorial productions." },
                    { q: "Can you create artistic or avant-garde looks?", a: "Yes. Editorial makeup can range from clean beauty looks to highly creative artistic concepts depending on the project requirements." },
                    { q: "Do you provide runway makeup?", a: "Yes. Runway makeup services can be customized according to the designer's vision and event requirements." },
                    { q: "How early should I book?", a: "For commercial shoots and fashion projects, advance booking is recommended to ensure availability and allow time for creative planning." },
                ],
                testimonials: [],
            }}
        />
    )
}
