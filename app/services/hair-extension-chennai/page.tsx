import { Metadata } from "next"
import ServiceDetailPage, { buildServiceMetadata } from "@/components/service-detail-page"
import { getServiceBySlug } from "@/data/serviceData"
import TrackLink from "@/components/track-link"
import { whatsappDeepLink } from "@/data/businessInfo"

const slug = "hair-extension-chennai"

export const metadata: Metadata = buildServiceMetadata({
    title: "Hair Extensions & Men's Bald Patch Coverage in Chennai | Anaplak",
    description: "Premium hair extensions and non-surgical men's bald patch coverage in Chennai. Tape, nano, clip-in extensions and custom hair patches from ₹20,000 at Anaplak Art and Glam, Maduravoyal.",
    image: "/hair_extension.webp",
    slug,
})

export default function Page() {
    const service = getServiceBySlug(slug)!
    return (
        <ServiceDetailPage
            data={{
                ...service,
                heroTagline: "Hair Extensions in Chennai, Maduravoyal, Instantly Add Length and Volume",
                heroCta: "Book Extension Consultation",
                whoItsFor: "Brides wanting fuller hairstyles, clients with fine or thin hair, anyone seeking instant length and volume, or individuals preparing for special events, photoshoots, and celebrations.",
                expectedResult: "Seamlessly blended, natural-looking extensions with professional colour matching ,  giving you longer, fuller, and more voluminous hair instantly with maintenance guidance for lasting results.",
                pricing: { startingAt: "₹ 20,000", duration: "4 to 6 hours", note: "Price depends on hair length and customization. Men bald patches from ₹25,000", disclaimer: "Final price depends on hair length, density, and the extension method selected." },
                faqs: [
                    { q: "What's the difference between tape and nano extensions?", a: "Tape extensions use adhesive strips for attachment and are lightweight and comfortable. Nano extensions use extremely small attachment points that are virtually invisible within the hair, ideal for finer hair types." },
                    { q: "How long do hair extensions last?", a: "Longevity depends on the extension type, maintenance routine, and hair growth cycle. Regular maintenance appointments help extensions remain secure and natural-looking." },
                    { q: "Will extensions damage my natural hair?", a: "When professionally applied and properly maintained, extensions are designed to be worn safely and comfortably without damaging natural hair." },
                    { q: "Can I style my extensions?", a: "Yes. Extensions can be styled similarly to natural hair ,  blow drying, curling, and straightening ,  following professional care recommendations." },
                    { q: "Are extensions suitable for thin hair?", a: "Yes. A consultation helps determine the most suitable method for your hair density. Nano extensions in particular work very well for finer hair types." },
                    { q: "How often do extensions require maintenance?", a: "Maintenance schedules vary depending on the extension type and natural hair growth. We provide detailed aftercare guidance specific to your chosen method." },
                ],
                testimonials: [],
            }}
            customSection={
                <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-[#0E0E0E] border-t border-white/10">
                    <div className="bg-gradient-to-br from-[#1B1B1B] to-[#0E0E0E] border border-[#F8C8DC]/30 rounded-2xl p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <p className="text-[#F8C8DC] text-xs uppercase tracking-[0.3em] font-bold mb-3">Men&apos;s Hair Solutions</p>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Bald Patch Coverage for Men</h2>
                                <p className="text-gray-400 text-base leading-relaxed mb-6">Targeted hair patch solutions for thinning or bald areas. Natural-looking, non-surgical coverage that blends seamlessly with your existing hair for a fuller, more confident look.</p>
                                <div className="space-y-3 mb-6">
                                    {[
                                        "Custom-fitted hair patches for specific bald areas",
                                        "Natural-looking results that blend with your hair",
                                        "Non-surgical, comfortable, and lightweight",
                                        "Professional colour matching for a seamless finish",
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 mt-0.5 text-[#53675C] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" /></svg>
                                            <span className="text-gray-300 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-white font-bold text-2xl">from ₹25,000</p>
                                    <span className="text-gray-500 text-sm">Depends on area size and coverage needed</span>
                                </div>
                            </div>
                            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-4">How It Works</h3>
                                <div className="space-y-4">
                                    {[
                                        { step: "1", title: "Consultation", text: "Assess the bald area, hair texture, and desired coverage." },
                                        { step: "2", title: "Custom Fitting", text: "Hair patch is custom-shaped to match your exact bald area." },
                                        { step: "3", title: "Colour Matching", text: "Patch is colour-matched to blend seamlessly with your natural hair." },
                                        { step: "4", title: "Application", text: "Professional fitting for comfortable, natural-looking results." },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="w-8 h-8 rounded-full bg-[#F8C8DC] text-black font-bold flex items-center justify-center text-sm flex-shrink-0">{item.step}</div>
                                            <div>
                                                <p className="text-white font-medium text-sm">{item.title}</p>
                                                <p className="text-gray-400 text-xs mt-0.5">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <TrackLink kind="whatsapp_click" href={whatsappDeepLink("Hi, I'm interested in men's bald patch coverage at Anaplak.")} target="_blank" rel="noopener noreferrer" className="w-full mt-6 inline-flex items-center justify-center gap-2 py-3 bg-[#F8C8DC] text-black font-semibold rounded-full hover:bg-white transition-all">
                                    Enquire on WhatsApp
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </TrackLink>
                            </div>
                        </div>
                    </div>
                </section>
            }
        />
    )
}
