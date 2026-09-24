import { Metadata } from "next"
import ServiceDetailPage, { buildServiceMetadata } from "@/components/service-detail-page"
import { getServiceBySlug } from "@/data/serviceData"

const slug = "engagement-makeup-chennai"

export const metadata: Metadata = buildServiceMetadata({
    title: "Engagement Makeup in Chennai, Maduravoyal | HD Makeup Starting at ₹15,000",
    description: "Book professional engagement makeup in Chennai, Maduravoyal from ₹15,000. HD makeup, hairstyling, and long-lasting beauty for engagement ceremonies and photoshoots at Anaplak Art and Glam, Maduravoyal.",
    image: "/engagement-makeup-look-natural-glowing-beauty.webp",
    slug,
})

export default function Page() {
    const service = getServiceBySlug(slug)!
    return (
        <ServiceDetailPage
            data={{
                ...service,
                heroTagline: "Engagement Makeup in Chennai, Maduravoyal, Look Stunning for Your Special Celebration",
                heroCta: "Book Engagement Makeup",
                whoItsFor: "Brides-to-be and grooms celebrating their engagement who want a camera-ready, long-lasting makeup look that complements traditional or modern outfits for the ceremony and photoshoot.",
                expectedResult: "A radiant, HD-photography-ready look with complimentary hairstyling and a pre-event skin preparation guide ,  so you look your best throughout the celebration.",
                pricing: { startingAt: "₹ 15,000", duration: "3 to 4 hours", disclaimer: "Final price depends on the chosen look, session type, and add-ons." },
                faqs: [
                    { q: "What's the difference between bridal and engagement makeup?", a: "Engagement makeup is generally lighter, softer, and designed for engagement functions and photoshoots. Bridal makeup involves more detailed preparation, heavier coverage, and extended wear for the wedding day." },
                    { q: "Do you include hairstyling?", a: "Yes. Complimentary hairstyling is included as part of the engagement makeup service." },
                    { q: "How long does engagement makeup last?", a: "Professional products and application techniques help maintain the look throughout the event, typically lasting several hours with minimal touch-ups needed." },
                    { q: "Is engagement makeup suitable for photoshoots?", a: "Yes. HD makeup techniques are specifically designed to photograph beautifully under professional lighting, making them ideal for engagement photoshoots." },
                    { q: "How early should I book?", a: "Booking at least a few weeks in advance is recommended, especially during wedding seasons when dates fill quickly." },
                    { q: "Can the makeup be customized?", a: "Absolutely. Every look is customized according to your outfit, preferences, and event style ,  from soft natural finishes to glamorous evening looks." },
                ],
                testimonials: [
                    { text: "I absolutely loved all three looks she created for me! Each look was exactly what I had envisioned and suited every occasion perfectly. Highly recommended!", name: "Anisha Kamal", service: "Engagement Makeup" },
                    { text: "I came here to do my Saree Pre Pleating and Saree Draping, it was a wonderful experience. Calm salon, well behaved staff and ambience was great.", name: "Sam Sam", service: "Engagement & Draping" },
                ],
            }}
        />
    )
}
