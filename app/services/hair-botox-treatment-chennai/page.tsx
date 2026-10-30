import { Metadata } from "next"
import ServiceDetailPage, { buildServiceMetadata } from "@/components/service-detail-page"
import { getServiceBySlug } from "@/data/serviceData"

const slug = "hair-botox-treatment-chennai"

export const metadata: Metadata = buildServiceMetadata({
    title: "Hair Botox Treatment in Chennai",
    description: "Hair botox treatment in Chennai from ₹8,000. Deep-conditioning repair for dry, damaged and frizzy hair at Anaplak Art & Glam, Maduravoyal.",
    image: "/images/services/hair-treatment-chennai.jpg",
    slug,
})

export default function Page() {
    const service = getServiceBySlug(slug)!
    return (
        <ServiceDetailPage
            data={{
                ...service,
                heroTagline: "Hair Botox Treatment in Chennai — Deep Repair for Dry, Damaged Hair",
                heroCta: "Book Hair Botox Consultation",
                whoItsFor: "Anyone with dry, brittle, frizzy or over-processed hair who wants smoother, softer and healthier-looking hair without committing to a straightening treatment. It is especially useful after colouring, bleaching, heat styling or repeated keratin treatments.",
                expectedResult: "Softer, fuller and more manageable hair with reduced frizz and visible shine. Results typically last 4 to 6 weeks, and improve further with the recommended home-care routine.",
                pricing: {
                    startingAt: "₹ 8,000",
                    duration: "2 to 3 hours",
                    note: "Customised by hair length and damage level",
                    disclaimer: "Final price is confirmed after consultation based on hair length and density.",
                },
                faqs: [
                    { q: "What is a hair botox treatment?", a: "Hair botox is a deep-conditioning treatment that fills gaps in damaged hair with proteins, amino acids and conditioning agents. It improves softness, shine and strength without straightening or chemically altering the hair structure." },
                    { q: "Does hair botox straighten hair?", a: "No. Hair botox does not straighten hair the way keratin or smoothening does. It reduces frizz and makes hair smoother and easier to manage while keeping your natural texture." },
                    { q: "How is hair botox different from keratin?", a: "Keratin seals the cuticle and smooths frizz for several months, while hair botox is a reparative conditioning treatment that restores softness and shine for around 4 to 6 weeks. Hair botox is the better choice for damaged or over-processed hair." },
                    { q: "How long does hair botox last?", a: "Results typically last 4 to 6 weeks depending on hair type, washing frequency and home care. Using sulphate-free shampoo and a weekly mask helps extend the result." },
                    { q: "Can I do hair botox after colouring or bleaching?", a: "Yes. Hair botox is often recommended after colouring or bleaching because it helps restore moisture and softness. We assess your hair during consultation to confirm timing and intensity." },
                    { q: "How much does hair botox cost in Chennai?", a: "At Anaplak Art and Glam, hair botox starts at ₹8,000. The final price depends on hair length, density and the level of damage, and is confirmed before the service begins." },
                ],
                testimonials: [
                    { text: "We visited Anaplak Saloon today and had a truly wonderful experience. The place itself is beautiful. My treatment transformed my hair completely. The staff are welcoming and attentive.", name: "Surya Prakash", service: "Hair Treatment" },
                    { text: "The ambiance was very relaxing and premium, and the service was excellent from start to finish. I took a dandruff treatment and I'm fully satisfied with the results and the way they handled everything professionally.", name: "Manesh D", service: "Hair Treatment" },
                ],
            }}
            customSection={
                <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-[#0E0E0E] border-t border-white/10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Hair Botox vs Keratin vs Smoothening</h2>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">Not sure which treatment suits your hair? Here is how the three most requested options compare.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm border border-white/10">
                            <thead className="bg-[#1B1B1B] text-[#F8C8DC]">
                                <tr>
                                    <th className="p-4 border-b border-white/10">Treatment</th>
                                    <th className="p-4 border-b border-white/10">What it does</th>
                                    <th className="p-4 border-b border-white/10">Best for</th>
                                    <th className="p-4 border-b border-white/10">Starts at</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr>
                                    <td className="p-4 border-b border-white/10 font-medium text-white">Hair Botox</td>
                                    <td className="p-4 border-b border-white/10">Deep-conditioning repair; adds softness and shine without straightening</td>
                                    <td className="p-4 border-b border-white/10">Dry, damaged or over-processed hair</td>
                                    <td className="p-4 border-b border-white/10">₹8,000</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b border-white/10 font-medium text-white">Keratin</td>
                                    <td className="p-4 border-b border-white/10">Seals the cuticle and smooths frizz for several months</td>
                                    <td className="p-4 border-b border-white/10">Frizzy hair that needs long-lasting smoothness</td>
                                    <td className="p-4 border-b border-white/10">₹7,000</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-white">Smoothening</td>
                                    <td className="p-4">Creates a sleeker, straighter texture with longer-lasting results</td>
                                    <td className="p-4">Hair that needs a straighter, more controlled finish</td>
                                    <td className="p-4">₹7,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-10 bg-[#1B1B1B] border border-white/10 rounded-xl p-6 md:p-8">
                        <h3 className="text-xl font-bold text-white mb-4">Hair Botox aftercare</h3>
                        <ul className="grid sm:grid-cols-2 gap-3 text-gray-400 text-sm">
                            <li>• Use a sulphate-free shampoo</li>
                            <li>• Apply a weekly hydrating hair mask</li>
                            <li>• Avoid chlorine and salt water for 7 days</li>
                            <li>• Limit heat styling and use a heat protectant</li>
                        </ul>
                    </div>
                </section>
            }
        />
    )
}
