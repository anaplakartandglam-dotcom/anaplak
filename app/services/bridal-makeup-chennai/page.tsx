import { Metadata } from "next"
import ServiceDetailPage, { buildServiceMetadata } from "@/components/service-detail-page"
import { getServiceBySlug } from "@/data/serviceData"

const slug = "bridal-makeup-chennai"

export const metadata: Metadata = buildServiceMetadata({
    title: "Bridal Makeup in Chennai, Maduravoyal | Flawless Wedding Looks from ₹15,000",
    description: "Book professional bridal makeup in Chennai from ₹15,000. HD makeup, hairstyling, draping, trial sessions, and expert bridal beauty planning at Anaplak Art and Glam, Maduravoyal.",
    keywords: ["bridal makeup artist chennai", "best bridal makeup artist in chennai", "bridal makeup chennai", "bridal makeup in chennai", "chennai bridal makeup", "groom makeup chennai", "wedding hairstyling", "bridal hairstyles", "bridal makeup price", "hd makeup chennai", "bridal makeup Maduravoyal"],
    image: "/blogs/elegant-bride-makeup-and-hairstyling-beauty-portra.jpg",
    slug,
})

export default function Page() {
    const service = getServiceBySlug(slug)!
    return (
        <ServiceDetailPage
            data={{
                ...service,
                heroTagline: "Bridal Makeup in Chennai, Maduravoyal, Look Stunning on Your Wedding Day",
                heroCta: "Book Your Bridal Trial",
                whoItsFor: "Brides-to-be who want a stress-free, fully managed bridal beauty experience ,  from pre-wedding consultations and trial sessions to the final touch-up on your special day at Anaplak Art and Glam.",
                expectedResult: "A flawless, photography-ready bridal look with HD makeup, elegant hairstyling, and draping assistance ,  plus a touch-up kit and complimentary anniversary makeup session.",
                pricing: { startingAt: "₹ 15,000", duration: "4 to 6 hours", note: "Trial session at ₹ 3,000", disclaimer: "Final price depends on the chosen bridal look, products, and add-ons." },
                faqs: [
                    { q: "How early should I book my bridal makeup?", a: "Book your bridal package at least 6 to 8 weeks before your wedding date to secure availability and schedule your trial session. Popular dates fill quickly ,  reaching out early is highly recommended." },
                    { q: "What happens during a bridal trial?", a: "The trial includes makeup testing, hairstyle discussions, draping preferences, and customization based on your wedding outfit and personal style. It's one of the most valuable parts of preparation." },
                    { q: "Do you provide saree draping?", a: "Yes. Professional saree draping services are available for bridal bookings at ₹2,000." },
                    { q: "What makeup products do you use?", a: "We use premium professional-grade products selected according to your skin type and desired finish, designed to look flawless in person and in photographs." },
                    { q: "Can you travel to my wedding venue?", a: "Yes. Venue services are available with outdoor charges starting from ₹3,000 depending on distance." },
                    { q: "How long does bridal makeup take?", a: "A complete bridal makeover generally takes between 4 and 6 hours depending on the chosen look and complexity." },
                    { q: "Is HD makeup better than regular bridal makeup?", a: "HD makeup provides a smoother, camera-friendly finish and is often preferred for professional wedding photography." },
                    { q: "What is the difference between HD and Air Brush makeup?", a: "HD makeup is applied traditionally using brushes and sponges, while Air Brush makeup uses specialized equipment for a lightweight, long-lasting finish." },
                ],
                testimonials: [
                    { text: "I absolutely loved all three looks she created for me! Each look was exactly what I had envisioned and suited every occasion perfectly. She paid attention to every detail and made sure I felt confident and beautiful throughout.", name: "Anisha Kamal", service: "Bridal" },
                    { text: "I came here to do my Saree Pre Pleating and Saree Draping, it was a wonderful experience. Calm salon, well behaved staff and ambience was great. I will surely suggest for Premium Salon Services.", name: "Sam Sam", service: "Bridal & Draping" },
                ],
            }}
            customSection={
                <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-[#0E0E0E] border-t border-white/10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Your Bridal Beauty Timeline</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            { step: "8 Weeks Before", text: "Book your bridal package, schedule consultation, and reserve your trial session." },
                            { step: "4 to 6 Weeks Before", text: "Attend your bridal trial. Finalize makeup style, hairstyle, and draping preferences." },
                            { step: "1 Week Before", text: "Complete facial treatments, follow your recommended skincare routine, and confirm the wedding schedule." },
                            { step: "Wedding Day", text: "Flawless makeup application, hairstyling, draping support, and final touch-ups for a radiant look." },
                        ].map((item, i) => (
                            <div key={i} className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-5 text-center">
                                <div className="w-10 h-10 rounded-full bg-[#F8C8DC] text-black font-bold flex items-center justify-center mx-auto mb-3 text-sm">{i + 1}</div>
                                <p className="text-[#F8C8DC] text-xs uppercase tracking-wider font-bold mb-2">{item.step}</p>
                                <p className="text-gray-400 text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            }
        />
    )
}
