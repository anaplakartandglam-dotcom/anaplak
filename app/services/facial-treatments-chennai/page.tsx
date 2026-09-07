import { Metadata } from "next"
import ServiceDetailPage, { buildServiceMetadata } from "@/components/service-detail-page"
import { getServiceBySlug } from "@/data/serviceData"

const slug = "facial-treatments-chennai"

export const metadata: Metadata = buildServiceMetadata({
    title: "Facial Treatments in Chennai, Maduravoyal | Glowing Skin from ₹2,000",
    description: "Professional facial treatments in Chennai from ₹2,000. Deep cleansing, hydration, brightening and advanced facials for healthy, glowing skin at Anaplak Art and Glam, Maduravoyal.",
    keywords: ["facial treatment chennai", "facial salon chennai", "skin brightening facial chennai", "professional facial chennai", "facial services chennai", "facial Maduravoyal", "deep cleansing facial", "skin rejuvenation", "facial for glowing skin"],
    image: "/luxury-facial-treatment-spa-skincare-relaxation.webp",
    slug,
})

export default function Page() {
    const service = getServiceBySlug(slug)!
    return (
        <ServiceDetailPage
            data={{
                ...service,
                heroTagline: "Facial Treatments in Chennai, Maduravoyal, Healthy, Glowing Skin Starts Here",
                heroCta: "Book Your Facial",
                whoItsFor: "Anyone wanting healthier, glowing skin ,  from first-time facial clients to skincare enthusiasts seeking targeted treatment for specific concerns like dullness, dryness, or uneven texture.",
                expectedResult: "Glowing, deeply cleansed, and hydrated skin with a personalized home-care routine to maintain results between professional treatments.",
                pricing: { startingAt: "₹ 2,000", duration: "30 to 90 min", disclaimer: "Final price depends on the treatment selected." },
                faqs: [
                    { q: "How often should I get a facial?", a: "Most people benefit from a professional facial every 4 to 6 weeks. Regular treatments help maintain healthy skin, improve hydration, and address concerns before they become more noticeable." },
                    { q: "What skin types do you treat?", a: "Our facial services are customized for a variety of skin types and concerns ,  oily, dry, combination, sensitive, and aging skin. Every facial is tailored to your individual needs." },
                    { q: "Will I have redness after the facial?", a: "Skin response varies depending on the treatment and individual skin condition. Mild redness from extractions may occur but typically fades within hours. Most clients leave with a healthy glow." },
                    { q: "Which facial is best for glowing skin?", a: "The Skin Brightening Facial is a popular choice for enhanced radiance. A consultation helps determine the most suitable facial based on your skin type and goals." },
                    { q: "Can facials help with dull skin?", a: "Many facial treatments are designed to refresh and improve the appearance of dull-looking skin by removing dead skin cells and replenishing moisture." },
                ],
                testimonials: [
                    { text: "The face service was relaxing and left my skin feeling fresh and glowing. Clean place, great customer care and excellent results.", name: "Raghul", service: "Facial" },
                ],
            }}
        />
    )
}
