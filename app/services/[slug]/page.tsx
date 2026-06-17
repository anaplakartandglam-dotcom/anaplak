import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { servicePages, getServiceBySlug, getRelatedServices } from "@/data/serviceData"

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const service = getServiceBySlug(slug)

    if (!service) {
        return { title: "Service Not Found | Anaplak Art and Glam Salon" }
    }

    return {
        title: `${service.title} in Chennai | Anaplak Art and Glam Salon`,
        description: service.description,
        keywords: service.keywords,
        openGraph: {
            title: `${service.title} | Anaplak Art and Glam Salon`,
            description: service.description,
            type: "website",
            images: [
                {
                    url: service.image,
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${service.title} | Anaplak Art and Glam Salon`,
            description: service.description,
            images: [service.image],
        },
        alternates: {
            canonical: `https://anaplakartandglamsalon.com/services/${slug}`,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    }
}

export async function generateStaticParams() {
    return servicePages.map((s) => ({ slug: s.slug }))
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params
    const service = getServiceBySlug(slug)

    if (!service) notFound()

    const relatedServices = getRelatedServices(slug, 3)

    return (
        <main className="min-h-screen bg-black mt-10 md:mt-25">
            <Header />

            <article className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <ol className="flex items-center gap-2 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-[#F8C8DC] transition">Home</Link></li>
                            <li>/</li>
                            <li><Link href="/services" className="hover:text-[#F8C8DC] transition">Services</Link></li>
                            <li>/</li>
                            <li className="text-[#F8C8DC]">{service.category}</li>
                        </ol>
                    </nav>

                    {/* Header */}
                    <header className="mb-10">
                        <span className="inline-block bg-[#F8C8DC] text-black text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                            {service.category}
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-gray-300 text-lg">{service.description}</p>
                    </header>

                    {/* Image */}
                    <div className="relative w-full h-[300px] md:h-[450px] mb-12 rounded-2xl overflow-hidden">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Details */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">About This Service</h2>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">{service.details}</p>
                    </section>

                    {/* Benefits */}
                    <section className="mb-12 bg-[#1B1B1B] rounded-2xl p-6 md:p-8 border border-[#2A2A2A]">
                        <h2 className="text-xl font-bold text-white mb-4">What You Get</h2>
                        <ul className="space-y-3">
                            {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                    <svg className="w-5 h-5 mt-0.5 text-[#F8C8DC] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                                    </svg>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Process */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">Our Process</h2>
                        <div className="space-y-6">
                            {service.process.map((step, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#53675C] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                                        {idx + 1}
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-gray-300">{step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Deliverables */}
                    <section className="mb-12 p-6 md:p-8 bg-gradient-to-r from-[#F8C8DC]/10 to-[#53675C]/10 border border-[#F8C8DC]/20 rounded-2xl">
                        <h2 className="text-xl font-bold text-white mb-3">What You&apos;ll Walk Away With</h2>
                        <p className="text-gray-300">{service.deliverables}</p>
                    </section>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                        <a
                            href="https://www.welns.io/product/booking/WFRCHN984305/Anaplak?bk_src=GMAPS110"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F8C8DC] text-black font-semibold rounded-full hover:bg-white transition-all duration-300 hover:scale-105"
                        >
                            Book This Service
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href={`https://wa.me/919840088867?text=${encodeURIComponent(`Hi, I'm interested in the ${service.title} service at Anaplak Art and Glam Salon.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-[#F8C8DC] text-[#F8C8DC] font-semibold rounded-full hover:bg-[#F8C8DC] hover:text-black transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.299-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.26 9.26 0 01-4.721-1.274l-.339-.2-3.519.924.94-3.433-.223-.357a9.253 9.253 0 01-1.42-4.929c.002-5.12 4.17-9.287 9.293-9.287a9.246 9.246 0 016.585 2.734 9.218 9.218 0 012.708 6.576c-.003 5.12-4.172 9.287-9.295 9.287m8.145-17.442C17.383 1.113 14.823.008 12.05.004 5.46.004.004 5.46.002 12.053c0 1.99.52 3.937 1.51 5.667L0 24l6.405-1.68a11.356 11.356 0 005.426 1.385h.004c6.59 0 11.947-5.363 11.95-11.95a11.854 11.854 0 00-3.494-8.442z" />
                            </svg>
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </article>

            {/* Related Services */}
            <section className="py-16 bg-[#0E0E0E]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Related Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedServices.map((related) => (
                            <Link
                                key={related.slug}
                                href={`/services/${related.slug}`}
                                className="group bg-[#1B1B1B] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-[#F8C8DC]/50 transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={related.image}
                                        alt={related.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <span className="text-[#F8C8DC] text-xs uppercase tracking-wider">{related.category}</span>
                                    <h3 className="text-white font-bold mt-1 group-hover:text-[#F8C8DC] transition-colors">{related.title}</h3>
                                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">{related.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
