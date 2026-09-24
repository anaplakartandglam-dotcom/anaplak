import { Metadata } from "next"
import ServiceDetailPage, { buildServiceMetadata } from "@/components/service-detail-page"
import { getServiceBySlug } from "@/data/serviceData"

const slug = "party-makeup-chennai"

export const metadata: Metadata = buildServiceMetadata({
    title: "Party Makeup in Chennai, Maduravoyal | Professional Event Makeup from ₹10,000",
    description: "Book professional party makeup in Chennai from ₹10,000. Long-lasting, photo-ready makeup for birthdays, anniversaries, cocktail parties, and special events at Anaplak Art and Glam, Maduravoyal.",
    image: "/glamorous-party-makeup-evening-look-celebration.jpg",
    slug,
})

export default function Page() {
    const service = getServiceBySlug(slug)!
    return (
        <ServiceDetailPage
            data={{
                ...service,
                heroTagline: "Party Makeup in Chennai, Maduravoyal, Look Your Best for Every Celebration",
                heroCta: "Book Party Makeup",
                whoItsFor: "Anyone attending a celebration ,  birthdays, anniversaries, cocktail parties, receptions, family functions, festive gatherings, or corporate events ,  who wants professional, event-appropriate makeup that lasts.",
                expectedResult: "A stunning, photo-ready look with long-lasting professional products, personalized styling based on your outfit and event, and quick touch-up guidance so you feel confident throughout the celebration.",
                pricing: { startingAt: "₹ 10,000", duration: "3 hours", disclaimer: "Final price depends on the chosen look and session type." },
                faqs: [
                    { q: "Can you match my makeup to my outfit?", a: "Yes. Every look is customized based on your outfit colours, event style, and personal preferences ,  from soft glam to bold evening looks." },
                    { q: "How long will the makeup last?", a: "Professional products and application techniques help makeup remain fresh throughout most events, typically lasting several hours with minimal touch-ups needed." },
                    { q: "Is party makeup suitable for photography?", a: "Yes. Our techniques are designed to look beautiful both in person and in photographs, ensuring you look great in all your event photos." },
                    { q: "Can I request a natural makeup look?", a: "Absolutely. We create everything from soft natural finishes to full glam looks, tailored to your preferences and the event style." },
                    { q: "Should I arrive with makeup on?", a: "It's best to arrive with a clean face so we can properly prepare your skin and create a fresh, long-lasting base." },
                    { q: "Do you offer makeup for group bookings?", a: "Please contact the salon directly at +91 98400 88867 to discuss group or event makeup requirements for parties and celebrations." },
                ],
                testimonials: [
                    { text: "I absolutely loved all three looks she created for me! Each look was exactly what I had envisioned and suited every occasion perfectly. Thank you for bringing my ideas to life so flawlessly. Highly recommended!", name: "Anisha Kamal", service: "Party Makeup" },
                ],
            }}
        />
    )
}
