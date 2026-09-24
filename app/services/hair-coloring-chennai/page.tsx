import { Metadata } from "next"
import ServiceDetailPage, { buildServiceMetadata } from "@/components/service-detail-page"
import { getServiceBySlug } from "@/data/serviceData"

const slug = "hair-coloring-chennai"

export const metadata: Metadata = buildServiceMetadata({
    title: "Hair Colouring in Chennai, Maduravoyal | Highlights, Global Colour & More",
    description: "Professional hair colouring in Chennai with highlights, global colour, fashion shades and ammonia-free options. Book your colour consultation at Anaplak Art and Glam, Maduravoyal from ₹1,800.",
    image: "/hair-coloring.webp",
    slug,
})

export default function Page() {
    const service = getServiceBySlug(slug)!
    return (
        <ServiceDetailPage
            data={{
                ...service,
                heroTagline: "Hair Colouring in Chennai, Maduravoyal, Professional Colour Services for Every Style",
                heroCta: "Book Your Colour Session",
                whoItsFor: "Anyone looking to refresh or transform their hair colour ,  from subtle root touch-ups and highlights to complete colour transformations and creative fashion shades. Ammonia-free options available for sensitive scalps.",
                expectedResult: "Vibrant, long-lasting colour with personalized consultation and maintenance guidance to keep your colour looking fresh and beautiful.",
                pricing: { startingAt: "₹ 1,800", duration: "20 min to 3 hours", note: "Fashion and creative colours available. Ammonia-free options available.", disclaimer: "Final price depends on hair length, density, and the colour service selected." },
                faqs: [
                    { q: "Is ammonia-free colour better for my hair?", a: "Ammonia-free options are often preferred by clients seeking a gentler colouring experience with reduced strong odour and enhanced comfort during application, while still delivering beautiful colour results." },
                    { q: "How often should I touch up my roots?", a: "Most clients schedule root touch-ups every 4 to 8 weeks depending on hair growth rate and colour contrast between the natural and coloured hair." },
                    { q: "Do you perform a strand test?", a: "When necessary, our colour specialists may recommend testing to help evaluate colour results and suitability before the full application." },
                    { q: "How long does hair colouring take?", a: "Most colour services take approximately 1.5 to 3 hours depending on the selected service and hair length. Highlights and creative colours may require additional time." },
                    { q: "Which colour suits my skin tone?", a: "A professional consultation helps determine the most flattering colour options based on your skin tone, hair condition, and personal style." },
                    { q: "How long will my colour last?", a: "Longevity varies depending on colour type, maintenance routine, and hair care habits. Using colour-safe products and scheduling regular touch-ups helps extend results." },
                ],
                testimonials: [],
            }}
        />
    )
}
