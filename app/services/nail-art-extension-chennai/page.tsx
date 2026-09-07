import { Metadata } from "next"
import ServiceDetailPage, { buildServiceMetadata } from "@/components/service-detail-page"
import { getServiceBySlug } from "@/data/serviceData"

const slug = "nail-art-extension-chennai"

export const metadata: Metadata = buildServiceMetadata({
    title: "Nail Art & Nail Extensions in Chennai, Maduravoyal | Creative Nail Designs",
    description: "Professional nail art and nail extensions in Chennai. Gel polish from ₹1,000, gel, acrylic, poly gel extensions, bridal nail art, French nails, chrome, ombre and more at Anaplak Art and Glam, Maduravoyal.",
    keywords: ["nail art chennai", "nail extensions chennai", "best nail art in chennai", "acrylic nails chennai", "bridal nail art chennai", "nail salon chennai", "gel nail extensions chennai", "nail art Maduravoyal", "french nails", "chrome nail art"],
    image: "/nails-2.webp",
    slug,
})

export default function Page() {
    const service = getServiceBySlug(slug)!
    return (
        <ServiceDetailPage
            data={{
                ...service,
                heroTagline: "Nail Art & Nail Extensions in Chennai, Maduravoyal, Express Your Style",
                heroCta: "Book Your Nail Appointment",
                whoItsFor: "Anyone who wants polished, eye-catching nails ,  from elegant everyday designs and bold statement styles to intricate bridal nail art and premium long-lasting extensions.",
                expectedResult: "Beautifully designed nails with professional precision ,  from classic French nails to creative 3D art, customized to your personal style, outfit, or occasion with superior durability and finish.",
                pricing: { startingAt: "₹ 1,000", duration: "40 min to 2 hours", note: "Gel polish from ₹1,000. Nail extensions also available.", disclaimer: "Final price depends on the design, length, and extension type selected." },
                faqs: [
                    { q: "How long do nail extensions last?", a: "Longevity varies depending on the extension type, maintenance routine, and daily activities. Most clients benefit from refills every 2 to 3 weeks." },
                    { q: "Can I get custom bridal nail art?", a: "Yes. Bridal customized nail art is available from ₹1,500 onwards and is tailored to your wedding style, outfit, and preferences. Book a consultation to design your perfect wedding nails." },
                    { q: "How do I remove gel extensions safely?", a: "Professional removal is recommended to protect the natural nail. We offer extension removal service at ₹1,500. Always have extensions professionally removed to avoid nail damage." },
                    { q: "Which extension type is best for me?", a: "The ideal option depends on your lifestyle, desired appearance, and nail goals. Gel extensions offer natural flexibility, acrylic is durable, and poly gel combines strength with flexibility. A consultation helps determine the best choice." },
                    { q: "Do I need refills for my extensions?", a: "Refills help maintain the appearance and structure of nail extensions as your natural nails grow. We recommend scheduling refills based on your extension type and growth rate." },
                ],
                testimonials: [
                    { text: "Ragshree was very patient and did neat nail art work. Really happy with how it turned out!", name: "Archana Mohan", service: "Nail Art" },
                    { text: "Shui Shui was very friendly, patient, and professional. She made me feel comfortable and handled everything with great care. Highly recommended!", name: "Roshini Pooja", service: "Acrylic Nails" },
                    { text: "Ended up doing an emergency gel polish session. Pavithra did an amazing job, she clearly knows what she's doing. Really happy with how it turned out!", name: "Renuka Jayaraman", service: "Gel Polish" },
                ],
            }}
        />
    )
}
