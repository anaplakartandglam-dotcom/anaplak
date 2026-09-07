import { Metadata } from "next"
import ServiceDetailPage, { buildServiceMetadata } from "@/components/service-detail-page"
import { getServiceBySlug } from "@/data/serviceData"

const slug = "threading-waxing-chennai"

export const metadata: Metadata = buildServiceMetadata({
    title: "Threading & Waxing in Chennai, Maduravoyal | Professional Hair Removal",
    description: "Professional threading and waxing services in Chennai. Eyebrow threading from ₹130, facial threading, body waxing, and full body hair removal at Anaplak Art and Glam, Maduravoyal.",
    keywords: ["threading chennai", "waxing chennai", "eyebrow threading chennai", "full body waxing chennai", "hair removal salon chennai", "threading Maduravoyal", "facial threading", "body waxing", "professional hair removal"],
    image: "/eyebrow-and-waxing.webp",
    slug,
})

export default function Page() {
    const service = getServiceBySlug(slug)!
    return (
        <ServiceDetailPage
            data={{
                ...service,
                heroTagline: "Threading & Waxing in Chennai, Maduravoyal, Smooth, Hair-Free Skin with Professional Care",
                heroCta: "Book Your Appointment",
                whoItsFor: "Anyone seeking professional hair removal ,  from quick eyebrow shaping and facial threading to full body waxing ,  for cleaner, more precise results than at-home methods.",
                expectedResult: "Smooth, well-groomed skin with professional precision. Threading for facial areas, waxing for larger body areas ,  with aftercare guidance for long-lasting smoothness.",
                pricing: { startingAt: "₹ 100", duration: "15 to 60 min", note: "Varies by service area", disclaimer: "Final price depends on the treatment area selected." },
                faqs: [
                    { q: "How long should hair be before waxing?", a: "Hair should generally be long enough for the wax to grip effectively ,  typically about a quarter inch. Our team can advise you during consultation. Avoid shaving for 2 to 3 weeks before your appointment." },
                    { q: "Is threading better than waxing?", a: "Both methods have different advantages. Threading is commonly preferred for precise facial hair removal like eyebrow shaping, while waxing is typically used for larger body areas such as arms, legs, and back. The best choice depends on the treatment area and personal preference." },
                    { q: "How long do waxing results last?", a: "Results vary based on individual hair growth cycles and treatment area. Most clients experience smooth skin for 2 to 4 weeks before regrowth becomes noticeable." },
                    { q: "Does threading help shape eyebrows?", a: "Yes. Threading is one of the most popular and precise methods for eyebrow shaping and definition, allowing for clean, well-defined arches." },
                    { q: "Can I book multiple services together?", a: "Yes. Many clients combine threading and waxing services in a single appointment for complete grooming. Contact us to discuss your requirements." },
                ],
                testimonials: [
                    { text: "Went to Anaplak for an urgent threading appointment and it turned out to be the best decision of the day. Quick service and great results! Pavithra did an amazing job.", name: "Renuka Jayaraman", service: "Threading & Nails" },
                    { text: "I had visited this place for the first time. Daniel did my haircut, I did layer cut and it was just wow! I also did my eyebrows from Ranjini, thank you so much.", name: "Shashikala M", service: "Threading & Haircut" },
                    { text: "Excellent service by Vignesh. Eyebrows, ambience, warm welcome staffs. Keep rocking!", name: "Anand V", service: "Threading" },
                ],
            }}
        />
    )
}
