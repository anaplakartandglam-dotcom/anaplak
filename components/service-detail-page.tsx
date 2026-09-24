import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { MapPin } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getRelatedServices, ServicePageData } from "@/data/serviceData"
import { businessInfo, mapsEmbedSrc, whatsappDeepLink } from "@/data/businessInfo"
import { PAA_BY_SERVICE } from "@/data/paaData"
import { NEARBY_LOCATIONS } from "@/data/nearbyLocations"
import TrackLink from "@/components/track-link"

export interface ServiceDetailMeta {
    title: string
    description: string
    keywords?: string[]
    image: string
    slug: string
}

export interface ServiceDetailData extends ServicePageData {
    heroTagline: string
    heroCta: string
    whoItsFor: string
    expectedResult: string
    pricing: { startingAt: string; duration: string; note?: string; disclaimer?: string }
    faqs: { q: string; a: string }[]
    testimonials?: { text: string; name: string; service: string }[]
    customSection?: React.ReactNode
}

export function buildServiceMetadata(data: ServiceDetailMeta): Metadata {
    return {
        title: `${data.title} | Anaplak Art & Glam`,
        description: data.description,
        openGraph: {
            title: `${data.title} | Anaplak Art & Glam`,
            description: data.description,
            type: "website",
            images: [{ url: data.image, width: 1200, height: 630, alt: data.title }],
        },
        twitter: { card: "summary_large_image", title: `${data.title} | Anaplak Art & Glam`, description: data.description, images: [data.image] },
        alternates: { canonical: `https://anaplakartandglamsalon.com/services/${data.slug}` },
        robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
    }
}

export function StarRating() {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    )
}

const defaultTestimonials = [
    { text: "We had a wonderful experience at this salon today! From the moment we walked in, the hospitality was top-notch and the ambience was so relaxing and stylish. The haircuts turned out perfectly for my daughters.", name: "Satish Kumar", service: "Hair Styling" },
    { text: "One of the best salons in Maduravoyal. Wonderful experience — I had my pedicure done here! Very friendly people, great care, and the massage chair was amazing during the pedicure session. Highly recommended for haircut and styling.", name: "Santhosh Anto", service: "Haircut & Pedicure" },
    { text: "The ambiance was very relaxing and premium, and the service was excellent from start to finish. I took a dandruff treatment and I'm fully satisfied with the results and the way they handled everything professionally.", name: "Manesh D", service: "Hair Treatment" },
]

export default function ServiceDetailPage({ data, customSection }: { data: ServiceDetailData; customSection?: React.ReactNode }) {
    const relatedServices = getRelatedServices(data.slug, 3)
    const p = data.pricing
    const testimonials = data.testimonials ?? defaultTestimonials

    const allFaqs = [...data.faqs, ...(PAA_BY_SERVICE[data.slug] ?? [])]

    const priceDigits = p.startingAt.replace(/[^\d]/g, "")
    const serviceUrl = `${businessInfo.url}/services/${data.slug}`

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.title,
        description: data.description,
        serviceType: data.category,
        url: serviceUrl,
        image: `${businessInfo.url}${data.image}`,
        provider: {
            "@type": "BeautySalon",
            name: businessInfo.name,
            url: businessInfo.url,
            telephone: businessInfo.phone.primary,
            image: `${businessInfo.url}/logo_updated.webp`,
            "@id": `${businessInfo.url}#organization`,
        },
        areaServed: { "@type": "City", name: "Chennai" },
        brand: { "@type": "Brand", name: businessInfo.name },
        ...(priceDigits ? {
            offers: {
                "@type": "Offer",
                price: priceDigits,
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                url: serviceUrl,
            },
        } : {}),
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: allFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: businessInfo.url },
            { "@type": "ListItem", position: 2, name: "Services", item: `${businessInfo.url}/services` },
            { "@type": "ListItem", position: 3, name: data.title, item: serviceUrl },
        ],
    }

    return (
        <main className="min-h-screen bg-black">
            <Script id={`service-schema-${data.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id={`service-faq-${data.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id={`service-breadcrumb-${data.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Header />

            {/* Hero */}
            <section className="relative overflow-hidden mt-6">
                <div className="absolute inset-0 z-0">
                    <Image src={data.image} alt="" fill sizes="100vw" className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/80 md:bg-black/70"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
                </div>
                <nav className="absolute top-14 left-6 sm:left-10 z-10" aria-label="Breadcrumb">
                    <ol className="flex items-center gap-2 text-sm text-gray-400">
                        <li><Link href="/" className="hover:text-[#F8C8DC] transition">Home</Link></li>
                        <li>/</li>
                        <li><Link href="/services" className="hover:text-[#F8C8DC] transition">Services</Link></li>
                        <li>/</li>
                        <li className="text-[#F8C8DC]">{data.title}</li>
                    </ol>
                </nav>
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 mt-15">
                    {/* <span className="inline-block bg-[#F8C8DC]/20 text-[#F8C8DC] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                        {data.category}
                    </span> */}
                    <h1 className="text-3xl md:text-5xl text-center font-bold text-white mb-3 leading-tight">
                        {data.heroTagline}
                    </h1>
                    <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed text-center">
                        {data.description} {p.duration ? `Typically takes ${p.duration}.` : ""} Starting at <strong className="text-[#F8C8DC]">{p.startingAt}</strong>. Available at Anaplak Art and Glam Salon in Chennai, Maduravoyal.
                    </p>
                    <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
                        <TrackLink kind="booking_click" href={businessInfo.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F8C8DC] text-black font-semibold rounded-full hover:bg-white transition-all duration-300 hover:scale-105">
                            {data.heroCta}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </TrackLink>
                        <TrackLink kind="whatsapp_click" href={whatsappDeepLink(`Hi, I'm interested in ${data.title} at Anaplak.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#F8C8DC] text-[#F8C8DC] font-semibold rounded-full hover:bg-[#F8C8DC] hover:text-black transition-all duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.26 9.26 0 01-4.721-1.274l-.339-.2-3.519.924.94-3.433-.223-.357a9.253 9.253 0 01-1.42-4.929c.002-5.12 4.17-9.287 9.293-9.287a9.246 9.246 0 016.585 2.734 9.218 9.218 0 012.708 6.576c-.003 5.12-4.172 9.287-9.295 9.287m8.145-17.442C17.383 1.113 14.823.008 12.05.004 5.46.004.004 5.46.002 12.053c0 1.99.52 3.937 1.51 5.667L0 24l6.405-1.68a11.356 11.356 0 005.426 1.385h.004c6.59 0 11.947-5.363 11.95-11.95a11.854 11.854 0 00-3.494-8.442z" /></svg>
                            WhatsApp Us
                        </TrackLink>
                    </div>
                </div>
            </section>

            {/* Service Overview + Quick Info */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Service Overview</h2>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">{data.details}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-5">
                                <h4 className="text-[#F8C8DC] font-bold text-sm uppercase tracking-wider mb-2">Who It&apos;s For</h4>
                                <p className="text-gray-400 text-sm">{data.whoItsFor}</p>
                            </div>
                            <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-5">
                                <h4 className="text-[#F8C8DC] font-bold text-sm uppercase tracking-wider mb-2">Expected Result</h4>
                                <p className="text-gray-400 text-sm">{data.expectedResult}</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-6 sticky top-28">
                            <h3 className="text-lg font-bold text-white mb-4">Quick Info</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider">Starting at</p>
                                    <p className="text-2xl font-bold text-[#F8C8DC]">{p.startingAt}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider">Duration</p>
                                    <p className="text-white font-medium">{p.duration}</p>
                                </div>
                                {p.note && (
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase tracking-wider">Note</p>
                                        <p className="text-gray-400 text-sm">{p.note}</p>
                                    </div>
                                )}
                                <div className="pt-4 border-t border-[#2A2A2A]">
                                    <p className="text-gray-500 text-xs leading-relaxed">* {p.disclaimer ?? "Final price depends on the specific service and add-ons selected."}</p>
                                    <Link href="/menu" className="text-[#F8C8DC] hover:underline text-xs font-medium mt-1.5 inline-block">
                                        Check the pricing page for the service you want →
                                    </Link>
                                </div>
                                <TrackLink kind="booking_click" href={businessInfo.bookingUrl} target="_blank" rel="noopener noreferrer" className="w-full inline-block text-center py-3 bg-[#F8C8DC] text-black font-semibold rounded-full hover:bg-white transition-all">
                                    Check Availability
                                </TrackLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Section (service-specific) */}
            {customSection}

            {/* Pricing */}
            <section className="bg-[#0E0E0E] py-16 md:py-20 border-t border-white/10 mt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Pricing & Duration</h2>
                    <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">Transparent pricing with no hidden charges. Prices may vary based on specific requirements.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-6 text-center">
                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Starts at</p>
                            <p className="text-3xl font-bold text-[#F8C8DC]">{p.startingAt}</p>
                        </div>
                        <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-6 text-center">
                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Approx. Time</p>
                            <p className="text-3xl font-bold text-white">{p.duration}</p>
                        </div>
                        <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-6 text-center">
                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Consultation</p>
                            <p className="text-3xl font-bold text-[#53675C]">Free</p>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            href="/menu"
                            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#F8C8DC] text-[#F8C8DC] font-semibold rounded-full hover:bg-[#F8C8DC] hover:text-black transition-all duration-300"
                        >
                            Know Exact Pricing
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">What&apos;s Included</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {data.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-4">
                            <svg className="w-5 h-5 mt-0.5 text-[#53675C] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" /></svg>
                            <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section className="bg-[#0E0E0E] py-16 md:py-20 border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">What to Expect</h2>
                    <div className="space-y-0">
                        {data.process.map((step, idx) => (
                            <div key={idx} className="flex gap-5 items-start py-5 border-b border-white/5 last:border-b-0">
                                <div className="w-10 h-10 rounded-full bg-[#53675C] text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">{idx + 1}</div>
                                <div className="pt-1.5">
                                    <p className="text-gray-200 font-medium">{step}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <TrackLink kind="booking_click" href={businessInfo.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#F8C8DC] text-[#F8C8DC] font-semibold rounded-full hover:bg-[#F8C8DC] hover:text-black transition-all">
                            Get Consultation
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </TrackLink>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#F8C8DC]/30">
                        <Image src="/aboutus2.webp" alt="Kalpana, Founder" fill sizes="128px" className="object-cover object-top" />
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-[#F8C8DC] text-xs uppercase tracking-wider font-bold mb-1">Led by</p>
                        <h3 className="text-xl font-bold text-white mb-2">Kalpana, Founder & Creative Director</h3>
                        <p className="text-gray-400 text-sm max-w-xl mb-4">6+ years of artistry, 1000+ satisfied clients. Every service at Anaplak is overseen by Kalpana and her expert beauty team.</p>
                        <Link href="/kalpana" className="inline-flex items-center gap-2 text-[#F8C8DC] font-semibold text-sm hover:underline">Meet Kalpana →</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            {testimonials.length > 0 && (
            <section className="bg-[#0E0E0E] py-16 md:py-20 border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-6">
                                <StarRating />
                                <p className="text-gray-300 text-sm mt-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                                <div className="mt-4 pt-4 border-t border-[#2A2A2A]"><p className="text-white font-medium text-sm">{t.name}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            )}

            {/* FAQs */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-3">
                    {allFaqs.map((faq, idx) => (
                        <details key={idx} className="group bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl overflow-hidden">
                            <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                                <span className="text-white font-medium pr-4">{faq.q}</span>
                                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="px-5 pb-5"><p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p></div>
                        </details>
                    ))}
                </div>
            </section>

            {/* Location */}
            <section className="bg-[#0E0E0E] py-16 md:py-20 border-t border-white/10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Visit Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-5 text-center">
                            <svg className="w-8 h-8 text-[#F8C8DC] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                            <p className="text-gray-400 text-sm">{businessInfo.address.displayLines.map((line, i) => (
                            <span key={i}>{line}<br /></span>
                          ))}</p>
                        </div>
                        <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-5 text-center">
                            <svg className="w-8 h-8 text-[#F8C8DC] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <p className="text-white font-medium text-sm">Business Hours</p>
                            <p className="text-gray-400 text-sm mt-1">{businessInfo.hours.weekdaysLabel}<br />{businessInfo.hours.sundayLabel}</p>
                        </div>
                        <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl p-5 text-center">
                            <svg className="w-8 h-8 text-[#F8C8DC] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                            <p className="text-white font-medium text-sm">Contact</p>
                            <p className="text-gray-400 text-sm mt-1">{businessInfo.phone.primaryDisplay}<br />{businessInfo.phone.secondaryDisplay}</p>
                        </div>
                    </div>
                    <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-[#2A2A2A]">
                        <iframe src={mapsEmbedSrc()} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Anaplak Salon Location" />
                    </div>
                </div>
            </section>

            {/* Near Locations */}
            <section className="py-16 bg-black border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-[#F8C8DC] uppercase tracking-[0.3em] text-xs font-bold mb-3">Areas We Serve</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">The Best {data.category} Studio Near <span className="italic text-[#F8C8DC]">You</span></h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Located in Maduravoyal, MMDA Colony. Our {data.title.toLowerCase()} service is easily accessible from all these Chennai neighbourhoods.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {NEARBY_LOCATIONS.map((loc, i) => (
                            <div key={i} className="bg-[#0E0E0E] border border-[#1E1E1E] rounded-xl p-5 text-center hover:border-[#F8C8DC]/40 transition">
                                <MapPin size={20} className="text-[#F8C8DC] mx-auto mb-2" />
                                <h4 className="text-white font-bold">{loc.name}</h4>
                                <p className="text-gray-500 text-xs mt-1">{loc.distance}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[800px] h-[800px] relative">
                        <div className="absolute inset-0 bg-gradient-conic from-[#F8C8DC] via-transparent to-[#F8C8DC] opacity-20 blur-3xl animate-spin-slow" />
                    </div>
                </div>
                <div className="max-w-3xl mx-auto text-center px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to <span className="text-[#F8C8DC] italic">Book Your Session?</span></h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">Limited slots available. Experience premium {data.title.toLowerCase()} at Chennai&apos;s most trusted salon.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <TrackLink kind="booking_click" href={businessInfo.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F8C8DC] text-black font-semibold rounded-full hover:bg-white transition-all hover:scale-105">
                            Book {data.title}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </TrackLink>
                        <TrackLink kind="whatsapp_click" href={whatsappDeepLink(`Hi, I'd like to know more about ${data.title} at Anaplak.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#F8C8DC] text-[#F8C8DC] font-semibold rounded-full hover:bg-[#F8C8DC] hover:text-black transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.299-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.26 9.26 0 01-4.721-1.274l-.339-.2-3.519.924.94-3.433-.223-.357a9.253 9.253 0 01-1.42-4.929c.002-5.12 4.17-9.287 9.293-9.287a9.246 9.246 0 016.585 2.734 9.218 9.218 0 012.708 6.576c-.003 5.12-4.172 9.287-9.295 9.287m8.145-17.442C17.383 1.113 14.823.008 12.05.004 5.46.004.004 5.46.002 12.053c0 1.99.52 3.937 1.51 5.667L0 24l6.405-1.68a11.356 11.356 0 005.426 1.385h.004c6.59 0 11.947-5.363 11.95-11.95a11.854 11.854 0 00-3.494-8.442z" /></svg>
                            Ask a Question
                        </TrackLink>
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className="py-16 bg-[#0E0E0E] border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-between items-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Explore More Services</h2>
                        <button><a href="/services" className="underline text-secondary">More</a></button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedServices.map((related) => (
                            <Link key={related.slug} href={`/services/${related.slug}`} className="group bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-[#F8C8DC]/50 transition-all duration-300">
                                <div className="relative h-44 overflow-hidden">
                                    <Image src={related.image} alt={related.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-5">
                                    <span className="text-[#F8C8DC] text-xs uppercase tracking-wider">{related.category}</span>
                                    <h3 className="text-white font-bold mt-1 group-hover:text-[#F8C8DC] transition-colors">{related.title}</h3>
                                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">{related.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sticky Mobile CTA */}
            {/* <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 py-3 px-4">
                <div className="flex gap-3">
                    <a href="tel:+919840088867" className="flex-1 inline-flex items-center justify-center gap-2 py-3 border border-[#F8C8DC] text-[#F8C8DC] font-semibold text-sm rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        Call
                    </a>
                    <a href={`https://wa.me/919840088867?text=${encodeURIComponent(`Hi, I'm interested in ${data.title}.`)}`} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-semibold text-sm rounded-full">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.299-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.26 9.26 0 01-4.721-1.274l-.339-.2-3.519.924.94-3.433-.223-.357a9.253 9.253 0 01-1.42-4.929c.002-5.12 4.17-9.287 9.293-9.287a9.246 9.246 0 016.585 2.734 9.218 9.218 0 012.708 6.576c-.003 5.12-4.172 9.287-9.295 9.287m8.145-17.442C17.383 1.113 14.823.008 12.05.004 5.46.004.004 5.46.002 12.053c0 1.99.52 3.937 1.51 5.667L0 24l6.405-1.68a11.356 11.356 0 005.426 1.385h.004c6.59 0 11.947-5.363 11.95-11.95a11.854 11.854 0 00-3.494-8.442z" /></svg>
                        WhatsApp
                    </a>
                </div>
            </div> */}

            <Footer />
        </main>
    )
}
