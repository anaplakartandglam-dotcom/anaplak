import { Metadata } from "next"
import ServiceDetailPage, { buildServiceMetadata } from "@/components/service-detail-page"
import { getServiceBySlug } from "@/data/serviceData"

const slug = "anti-aging-treatments-chennai"

export const metadata: Metadata = buildServiceMetadata({
    title: "Anti-Aging Treatments in Chennai, Maduravoyal | Youthful, Radiant Skin",
    description: "Advanced anti-aging treatments in Chennai for youthful, radiant skin. Rejuvenate and revitalize with professional skincare at Anaplak Art and Glam, Maduravoyal.",
    image: "/anti-aging-skincare-treatment-youthful-glowing-ski.webp",
    slug,
})

export default function Page() {
    const service = getServiceBySlug(slug)!
    return (
        <ServiceDetailPage
            data={{
                ...service,
                heroTagline: "Anti-Aging Treatments in Chennai, Maduravoyal, Rediscover Youthful, Radiant Skin",
                heroCta: "Book Anti-Aging Consultation",
                whoItsFor: "Anyone concerned about fine lines, wrinkles, loss of elasticity, or dullness who wants clinically-proven ingredients and techniques for visible, long-term skin rejuvenation.",
                expectedResult: "Visibly younger-looking, firmer, and more radiant skin with improved texture and continued improvement recommendations for long-term skin health.",
                pricing: { startingAt: "₹ 3,000", duration: "45 to 60 min", note: "Customized treatment plans", disclaimer: "Final price depends on the treatment selected." },
                faqs: [
                    { q: "At what age should I start anti-aging treatments?", a: "Prevention can begin in your late 20s. Professional anti-aging treatments can be customized for any age depending on your skin concerns and goals." },
                    { q: "How often should I get anti-aging treatments?", a: "Most clients benefit from treatments every 4 to 6 weeks, combined with a consistent home skincare routine for optimal results." },
                    { q: "Are anti-aging treatments safe for all skin types?", a: "Yes. Our treatments are customized based on your skin type and concerns. A thorough skin assessment is performed before any treatment." },
                    { q: "How soon will I see results?", a: "Some results are visible immediately. Optimal results build over a series of treatments. We provide continued improvement recommendations for long-term benefits." },
                ],
                testimonials: [
                    { text: "The face service was relaxing and left my skin feeling fresh and glowing. Clean place, great customer care and excellent results.", name: "Raghul", service: "Anti-Aging Facial" },
                ],
            }}
        />
    )
}
