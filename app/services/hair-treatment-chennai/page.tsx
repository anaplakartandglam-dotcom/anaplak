import { Metadata } from "next"
import ServiceDetailPage, { buildServiceMetadata } from "@/components/service-detail-page"
import { getServiceBySlug } from "@/data/serviceData"

const slug = "hair-treatment-chennai"

export const metadata: Metadata = buildServiceMetadata({
    title: "Hair Texture Treatments in Chennai, Maduravoyal | Keratin, Smoothing & More",
    description: "Professional keratin, smoothing, botox, nano plastia, perming, hair spa and bond strengthening treatments in Chennai, Maduravoyal. Get smoother, healthier, manageable hair at Anaplak Art and Glam, Maduravoyal from ₹3,000.",
    keywords: ["keratin treatment chennai", "hair smoothing chennai", "hair botox chennai", "best keratin treatment in chennai", "hair smoothening cost chennai", "perming hair cost in chennai", "nano plastia chennai", "hair straightening chennai", "keratin treatment Maduravoyal", "hair botox treatment", "hair spa chennai", "dandruff treatment chennai", "bond strengthening treatment chennai", "hair treatment maduravoyal"],
    image: "/professional-hair-styling-salon-treatment-luxury.webp",
    slug,
})

export default function Page() {
    const service = getServiceBySlug(slug)!
    return (
        <ServiceDetailPage
            data={{
                ...service,
                heroTagline: "Hair Treatments in Chennai, Maduravoyal",
                heroCta: "Book Your Hair Treatment",
                whoItsFor: "Anyone struggling with frizz, dryness, or unmanageable hair who wants a long-lasting solution, from partial treatments for specific areas to full-head transformations customized to your hair type.",
                expectedResult: "Silky, smooth, and manageable hair with detailed aftercare instructions so results last 3 to 6 months. Reduces daily styling time and improves overall hair appearance.",
                pricing: { startingAt: "₹ 3,000", duration: "45 min to 4 hours", note: "Depends on treatment type, hair length and density", disclaimer: "Final price depends on treatment type, hair length and density." },
                faqs: [
                    { q: "Which treatment is best for frizzy hair?", a: "For frizzy and difficult-to-manage hair, keratin treatment and smoothing treatment are among the most popular options. Keratin strengthens and smooths the hair while reducing frizz, whereas smoothing helps create a sleeker appearance." },
                    { q: "How long do results last?", a: "Most texture treatments last approximately 3 to 6 months with proper maintenance. Longevity depends on hair type, home care routine, product usage, and environmental factors." },
                    { q: "Is there any downtime after treatment?", a: "Most clients can resume normal activities immediately after their appointment. Your stylist will provide specific aftercare instructions." },
                    { q: "What is the difference between keratin, smoothing, and botox?", a: "Keratin treatment uses keratin protein to smooth and strengthen hair. Smoothing creates a sleeker texture with longer-lasting straightening effects. Hair Botox is a deep conditioning treatment that repairs and nourishes damaged hair without changing the hair structure." },
                    { q: "Can damaged hair undergo these treatments?", a: "Yes. Treatments such as Hair Botox and Botoplex are specifically designed to repair and improve damaged hair. Bond strengthening treatment also helps restore internal hair structure." },
                    { q: "What is nano plastia and botoplex?", a: "Nano Plastia is an advanced smoothing treatment that provides long-lasting results with a formaldehyde-free formula. Botoplex is a professional treatment that repairs and strengthens damaged hair using nano-molecular technology." },
                    { q: "Do you offer hair spa and dandruff treatments?", a: "Yes. We offer hair spa from ₹3,000 for deep nourishment, dandruff treatment from ₹4,000 for scalp health, and hair dryness spa from ₹4,000 for intensive moisture therapy." },
                    { q: "Will my hair become permanently straight?", a: "No. Most texture treatments gradually fade over time as new hair growth occurs. They improve manageability rather than permanently altering hair structure." },
                ],
                testimonials: [
                    { text: "Vignesh, Ranjini thanks for the Keratin treatment. Salon very beautiful, what respects! Parking available, Kalpana & Anto very good talking with me.", name: "Ruth Njoy", service: "Keratin Treatment" },
                    { text: "We visited Anaplak Saloon today and had a truly wonderful experience. The place itself is beautiful. My treatment transformed my hair completely. The staff are welcoming and attentive.", name: "Surya Prakash", service: "Hair Treatment" },
                    { text: "I also took a dandruff treatment, and I'm fully satisfied with the results and the way they handled everything professionally. Highly recommended for anyone looking for quality hair care.", name: "Manesh D", service: "Dandruff Treatment" },
                ],
            }}
            customSection={
                <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-[#0E0E0E] border-t border-white/10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">All Hair Treatments</h2>
                    <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">Choose from our complete range of professional hair treatments. Prices vary based on hair length, density, and specific requirements.</p>
                    
                    <div className="mb-10">
                        <h3 className="text-lg font-bold text-[#F8C8DC] mb-4 text-center">Texture & Smoothing Treatments</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                            {[
                                { title: "Keratin Treatment", price: "from ₹7,000", duration: "2 to 3 hours", text: "Reduces frizz, improves shine and strength with long-lasting smoothness." },
                                { title: "Hair Smoothing", price: "from ₹7,000", duration: "2 to 3 hours", text: "Controls frizz and creates a sleeker, more manageable texture." },
                                { title: "Hair Botox", price: "from ₹7,000", duration: "2 to 3 hours", text: "Deep conditioning treatment to repair and nourish damaged hair." },
                                { title: "Nano Plastia", price: "from ₹9,000", duration: "3 to 4 hours", text: "Advanced smoothing with long-lasting results and formaldehyde-free formula." },
                                { title: "Perming", price: "from ₹3,500", duration: "2 to 3 hours", text: "Adds curls, texture, and volume for a completely new look." },
                                { title: "Botoplex", price: "from ₹8,000", duration: "2 to 3 hours", text: "Repairs and strengthens damaged hair using nano-molecular technology." },
                            ].map((item, i) => (
                                <div key={i} className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-5">
                                    <p className="text-[#F8C8DC] text-xs uppercase tracking-wider font-bold mb-1">{item.title}</p>
                                    <p className="text-white font-bold text-lg mb-1">{item.price}</p>
                                    <p className="text-gray-500 text-xs mb-3">{item.duration}</p>
                                    <p className="text-gray-400 text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#F8C8DC] mb-4 text-center">Hair Care & Spa Treatments</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                            {[
                                { title: "Hair Spa", price: "from ₹3,000", duration: "30 to 45 min", text: "Deep conditioning and nourishment for dry, damaged, and dull hair." },
                                { title: "Dandruff Treatment", price: "from ₹4,000", duration: "45 min to 1 hour", text: "Soothes the scalp, controls flaking, and restores scalp health." },
                                { title: "Bond Strengthening", price: "from ₹5,000", duration: "Varies", text: "Repairs internal hair bonds to restore strength and reduce breakage." },
                                { title: "Hair Dryness Spa", price: "from ₹4,000", duration: "45 min to 1 hour", text: "Intensive moisture therapy for dry, frizzy, and lifeless hair." },
                            ].map((item, i) => (
                                <div key={i} className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-5">
                                    <p className="text-[#F8C8DC] text-xs uppercase tracking-wider font-bold mb-1">{item.title}</p>
                                    <p className="text-white font-bold text-lg mb-1">{item.price}</p>
                                    <p className="text-gray-500 text-xs mb-3">{item.duration}</p>
                                    <p className="text-gray-400 text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            }
        />
    )
}
