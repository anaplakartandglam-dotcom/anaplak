"use client"

import Script from "next/script"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

interface PriceItem {
    name: string
    price: string | { men: string; women: string }
    note?: string
}

interface PriceCategory {
    title: string
    subtitle?: string
    items: PriceItem[]
}

export default function PricingPage() {
    const categories: PriceCategory[] = [
        {
            title: "Hair Styling — Men",
            items: [
                // { name: "Senior Stylist", price: "700" },
                { name: "Premier Stylist", price: "900" },
                { name: "Top Stylist", price: "1100" },
                { name: "Salon Director", price: "1300" },
                { name: "Hair Tattoo", price: "800" },
                { name: "Hair Wash", price: "800" },
                { name: "Beard Trim", price: "200" },
                { name: "Beard Design", price: "400" },
                { name: "Executive Shave", price: "400" },
                { name: "Kids Cut (Below 7 Years)", price: "650" },
                { name: "Moustache Colour", price: "250" },
                { name: "Beard Colour", price: "400" },
                { name: "Beard & Moustache Colour", price: "500" },
                { name: "Oil Massage", price: "1000" },
            ],
        },
        {
            title: "Hair Styling — Women",
            items: [
                // { name: "Senior Stylist", price: "900" },
                { name: "Premier Stylist", price: "1200" },
                { name: "Top Stylist", price: "1500" },
                { name: "Salon Director", price: "1800" },
                { name: "Hair Trim", price: "1000" },
                { name: "Kids (Below 7 Years)", price: "750" },
                { name: "Hair Wash & Conditioning", price: "1000" },
                { name: "Oil Massage", price: "1500" },
            ],
        },
        {
            title: "Blow Dry",
            items: [
                { name: "Blow Dry", price: "1500" },
                { name: "Tongs", price: "1700" },
                { name: "Ironing", price: "1800" },
                { name: "Updos", price: "2500" },
                { name: "Bridal Updos", price: "3000" },
            ],
        },
        {
            title: "Hair Colour",
            subtitle: "Men / Women",
            items: [
                {
                    name: "Root Touch Up",
                    price: { men: "1,800", women: "2,000" },
                },
                {
                    name: "Ammonia Free (Root Touch Up)",
                    price: { men: "2,000", women: "2,200" },
                },
                {
                    name: "Global Colour",
                    price: { men: "3,500", women: "4,500" },
                },
                {
                    name: "Ammonia Free (Global Colour)",
                    price: { men: "4,000", women: "5,000" },
                },
                { name: "Fashion", price: { men: "4,000 (onwards)", women: "5,000 (onwards)" } },
                { name: "Partial Head Highlight", price: { men: "3,000 (onwards)", women: "4,500 (onwards)" } },
                { name: "Full Head Highlight", price: { men: "3,500 (onwards)", women: "5,000 (onwards)" } },
                { name: "Colour Refresh", price: { men: "2,000 (onwards)", women: "3,000 (onwards)" } },
                { name: "Creative Colour", price: { men: "5,000 (onwards)", women: "7,000 (onwards)" } },
                { name: "Per Streak", price: { men: "300", women: "400" } },
            ],
        },
        {
            title: "Texture & Smoothing",
            items: [
                { name: "Perming (Partial)", price: "3,500", note: "onwards" },
                { name: "Smoothing (Partial)", price: "3,000", note: "onwards" },
                { name: "Keratin (Partial)", price: "3,000", note: "onwards" },
                { name: "Perming", price: "7,000 (onwards)", note: "onwards" },
                { name: "Smoothing", price: "7,000 (onwards)", note: "onwards" },
                { name: "Keratin", price: "7,000 (onwards)", note: "customised" },
                { name: "Botox", price: "7,000 (onwards)", note: "customised" },
                { name: "Nano Plastia", price: "8,000 (onwards)", note: "customised" },
                { name: "Botoplex", price: "8,000 (onwards)", note: "onwards" },
            ],
        },
        {
            title: "Hair Treatment",
            items: [
                { name: "EPRES (Add On)", price: "2,000" },
                { name: "Deep Conditioning", price: "2,000" },
                { name: "L'Oréal Hair Spa", price: "2,500" },
                { name: "Classic Hair Spa", price: "3,000" },
                { name: "Shea Hair Spa", price: "4,000" },
                { name: "3TENX Hair Spa", price: "4,000" },
            ],
        },
        {
            title: "Hair Extension",
            items: [
                { name: "Tape Hair Extension", price: "30,000", note: "100g onwards" },
                { name: "Nano Hair Extension", price: "30,000", note: "100g onwards" },
                { name: "Clip & Go", price: "20,000", note: "100g onwards" },
                { name: "Maintenance", price: "10,000" },
            ],
        },
        {
            title: "Pedicure",
            items: [
                { name: "Classic Pedicure", price: "1,000" },
                { name: "Spa Pedicure", price: "1,700" },
                { name: "Heel Peel", price: "2,000" },
                { name: "Signature Pedicure", price: "2,500" },
                { name: "Anaplak Signature Pedicure", price: "3,000" },
            ],
        },
        {
            title: "Manicure",
            items: [
                { name: "Classic Manicure", price: "800" },
                { name: "Spa Manicure", price: "1,500" },
                { name: "Signature Manicure", price: "2,000" },
                { name: "Anaplak Signature Manicure", price: "2,500" },
            ],
        },
        {
            title: "Nail Extension",
            items: [
                { name: "Cut & File", price: "150" },
                { name: "Gel Polish", price: "1,000" },
                { name: "Gel Extension", price: "2,500" },
                { name: "Soft Gel Extension", price: "2,500" },
                { name: "Acrylic Extensions", price: "2,700" },
                { name: "Poly Gel Extensions", price: "3,000" },
                { name: "Overlay", price: "2,000" },
                { name: "Temp Extensions + Gel Polish", price: "1,500" },
                { name: "Press On Nails", price: "1,300" },
                { name: "Tip Repair (Per Finger)", price: "500" },
                { name: "Refill", price: "2,000" },
                { name: "Extensions Removal", price: "1,500" },
                { name: "Gel Polish Removal", price: "1,000" },
            ],
        },
        {
            title: "Nail Art",
            items: [
                { name: "Basic Nail Art", price: "500" },
                { name: "French Nail Art (Fingers)", price: "800" },
                { name: "French Nail Art (Toes)", price: "800" },
                { name: "Cat Eye", price: "1,300" },
                { name: "Galaxy with Gel", price: "1,200" },
                { name: "Chrome Art", price: "1,000" },
                { name: "Creative Nail Design", price: "1,500" },
                { name: "Ombre Nail Art", price: "1,000" },
                { name: "Neon Art", price: "700" },
                { name: "3D Art", price: "1,200" },
                { name: "Marble Nail Art", price: "1,000" },
                { name: "Bridal Customised Nail Art", price: "1,500", note: "onwards" },
            ],
        },
        {
            title: "Threading",
            items: [
                { name: "Eyebrow", price: "130" },
                { name: "Upper Lip", price: "100" },
                { name: "Chin", price: "100" },
                { name: "Forehead", price: "100" },
                { name: "Neck", price: "150" },
                { name: "Sides Face", price: "300" },
                { name: "Full Face", price: "700" },
            ],
        },
        {
            title: "Waxing",
            items: [
                { name: "Under Arms", price: "300" },
                { name: "Half Arms", price: "300" },
                { name: "Full Arms", price: "600" },
                { name: "Half Legs", price: "400" },
                { name: "Half Hands", price: "400" },
                { name: "Full Hands", price: "800" },
                { name: "Full Face", price: "1,000" },
                { name: "Full Legs", price: "800" },
                { name: "Half Back", price: "500" },
                { name: "Full Back", price: "1,000" },
                { name: "Abdomen", price: "700" },
                { name: "Full Body", price: "4,500" },
            ],
        },
        {
            title: "Facials",
            items: [
                { name: "Classic Cleanup", price: "2,000" },
                { name: "Skin Brightening", price: "3,000" },
                { name: "Skin Miracle Facial", price: "4,000" },
                { name: "Gensely Facial", price: "5,000", note: "Jamaican Sorrel" },
                { name: "Anaplak Signature Facial", price: "6,000" },
                { name: "Casmara Facial", price: "7,000" },
            ],
        },
        {
            title: "Detan",
            items: [
                { name: "Face / Neck Detan", price: "1,300" },
                { name: "Under Arms Detan", price: "300" },
                { name: "Half Arms Detan", price: "500" },
                { name: "Full Arms Detan", price: "700" },
                { name: "Half Legs Detan", price: "700" },
                { name: "Full Legs Detan", price: "1,100" },
                { name: "Half Back Detan", price: "600" },
                { name: "Full Back Detan", price: "1,000" },
                { name: "Feet Detan", price: "400" },
            ],
        },
        {
            title: "Bridal Makeup",
            items: [
                { name: "Bridal Classic Makeup", price: "15,000" },
                { name: "HD Makeup", price: "18,000" },
                { name: "Glossy Makeup", price: "22,000" },
                { name: "Air Brush", price: "30,000" },
                { name: "Groom (Men's)", price: "6,000" },
                { name: "Bridesmaids Makeup", price: "7,000" },
                { name: "Party Makeup", price: "6,000" },
                { name: "Kids Makeup (Below 15)", price: "3,000" },
                { name: "Saree Drapping", price: "2,000" },
                { name: "Hair Style", price: "3,000" },
                { name: "Trial Makeup", price: "3,000" },
                { name: "Outdoor Charges", price: "3,000" },
            ],
        },
    ]

    const hairStylingMen = categories[0]
    const hairStylingWomen = categories[1]
    const hairColour = categories[3]
    const textureSmoothing = categories[4]
    const hairTreatment = categories[5]
    const hairExtension = categories[6]
    const nailExtension = categories[9]
    const nailArt = categories[10]
    const threading = categories[11]
    const waxing = categories[12]
    const facials = categories[13]
    const detan = categories[14]
    const bridalMakeup = categories[15]
    const blowDry = categories[2]
    const pedicure = categories[7]
    const manicure = categories[8]

    const salonPackages = [
        {
            title: "Classic Package — Men",
            services: ["Premier Stylist", "Beard Trim", "L'Oréal Hair Spa", "Classic Pedicure", "Skin Brightening Facial"],
            originalPrice: "7,600",
            offerPrice: "4,999",
            featured: false,
        },
        {
            title: "Classic Package — Women",
            services: ["Premier Stylist", "L'Oréal Hair Spa", "Gel Polish", "Classic Pedicure", "Eyebrow Threading", "Skin Brightening Facial"],
            originalPrice: "8,830",
            offerPrice: "5,999",
            featured: false,
        },
        {
            title: "Premium Package — Men",
            services: ["Top Stylist", "Beard Trim", "L'Oréal Hair Spa", "Spa Pedicure", "Spa Manicure", "Skin Miracle Facial"],
            originalPrice: "11,000",
            offerPrice: "6,999",
            featured: true,
        },
        {
            title: "Premium Package — Women",
            services: ["Top Stylist", "L'Oréal Hair Spa", "Spa Pedicure", "Spa Manicure", "Gel Polish", "Eyebrow Threading", "Half Arm Waxing", "Half Legs Waxing", "Skin Miracle Facial"],
            originalPrice: "13,030",
            offerPrice: "7,999",
            featured: true,
        },
    ]

    const subscriptionPlans = [
        {
            title: "Men",
            services: ["Top Stylist (6 sittings)", "Beard Trim (6 sittings)", "Ammonia Free (Root Touch Up)", "Spa Pedicure (6 sittings)"],
            originalPrice: "30,000",
            offerPrice: "28,000",
        },
        {
            title: "Women (Basic)",
            services: ["Top Stylist (6 sittings)", "Ammonia Free (Root Touch Up) (6 sittings)", "Spa Pedicure (6 sittings)"],
            originalPrice: "32,400",
            offerPrice: "30,000",
        },
        {
            title: "Women (Hair Spa)",
            services: ["Top Stylist (6 sittings)", "L'Oréal Hair Spa (6 sittings)"],
            originalPrice: "21,600",
            offerPrice: "18,000",
        },
    ]

    const accent = "#F8C8DC"
    const green = "#53675C"
    const yellow = "#d4af37"

    return (
        <>
            <Script
                id="pricing-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Pricing | Salon Services & Packages | Anaplak Art And Glam",
                        "description": "Complete pricing guide for all salon services including hair styling, colour, treatments, bridal makeup, nail art, facials, waxing & more at Anaplak Art And Glam Salon, Chennai.",
                        "url": "https://anaplakartandglamsalon.com/pricing",
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anaplakartandglamsalon.com" },
                                { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://anaplakartandglamsalon.com/pricing" },
                            ],
                        },
                    }),
                }}
            />

            <Header />
            <div className="min-h-screen bg-[#000] mt-10 md:mt-25">
                <PageHeader
                    label="Our Pricing"
                    title="Pricing"
                    titleAccent="Guide"
                    description=""
                />

                <style jsx global>{`
                    .service-row:hover .price-leader {
                        border-color: ${accent};
                        opacity: 0.7;
                    }
                    .price-leader {
                        border-bottom: 1px dotted rgba(255, 255, 255, 0.15);
                        flex-grow: 1;
                        margin: 0 12px;
                        transition: all 0.3s ease;
                    }
                `}</style>

                {/* Hair Styling */}
                <section className="bg-[#0c0c0c] px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                    <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
                        {/* Men — price left, image right */}
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                            <div className="w-full md:w-1/2">
                                <h2
                                    className="text-lg md:text-xl font-reddit-sans font-bold mb-10 flex items-center"
                                    style={{ color: accent }}
                                >
                                    <span className="w-10 h-px mr-4" style={{ backgroundColor: accent }}></span>
                                    HAIR STYLING — MEN
                                </h2>
                                <div className="space-y-4">
                                    {hairStylingMen.items.map((item, idx) => (
                                        <div key={idx} className="service-row flex items-baseline">
                                            <span className="text-gray-300 text-sm">{item.name}</span>
                                            <div className="price-leader"></div>
                                            <span className="text-white text-sm font-medium whitespace-nowrap">
                                                ₹{item.price as string}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="relative w-full aspect-[4/3] overflow-hidden border border-white/10">
                                    <Image
                                        src="/men_hair_stylist.jpg"
                                        alt="Men hair styling"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Women — image left, price right */}
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                            <div className="w-full md:w-1/2 md:order-2">
                                <h2
                                    className="text-lg md:text-xl font-reddit-sans font-bold mb-10 flex items-center"
                                    style={{ color: accent }}
                                >
                                    <span className="w-10 h-px mr-4" style={{ backgroundColor: accent }}></span>
                                    HAIR STYLING — WOMEN
                                </h2>
                                <div className="space-y-4">
                                    {hairStylingWomen.items.map((item, idx) => (
                                        <div key={idx} className="service-row flex items-baseline">
                                            <span className="text-gray-300 text-sm">{item.name}</span>
                                            <div className="price-leader"></div>
                                            <span className="text-white text-sm font-medium whitespace-nowrap">
                                                ₹{item.price as string}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 md:order-1">
                                <div className="relative w-full aspect-[4/3] overflow-hidden border border-white/10">
                                    <Image
                                        src="/women_hair_stylist.jpg"
                                        alt="Women hair styling"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hair Colour Section */}
                <section className="bg-[#0c0c0c] py-16 md:py-24">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                            {/* Left Text */}
                            <div className="w-full md:w-1/3">
                                <h2 className="text-4xl md:text-5xl font-reddit-sans font-bold text-white mb-6 leading-tight">
                                    Hair <br /><span className="italic" style={{ color: accent }}>Colour</span>
                                </h2>
                                <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                                    Transform your look with our professional color specialists. We use premium pigments for lasting radiance and hair health.
                                </p>
                                <div className="p-5 border border-[#F8C8DC]/20 bg-[#F8C8DC]/5">
                                    <span
                                        className="text-xs font-bold tracking-widest uppercase"
                                        style={{ color: accent }}
                                    >
                                        Consultation
                                    </span>
                                    <p className="text-gray-500 text-sm mt-2">
                                        Personalized shade matching included with all color services.
                                    </p>
                                    <a
                                        href="https://wa.me/919840088867?text=Hi%2C%20I%20would%20like%20to%20book%20a%20hair%20colour%20appointment."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-5 inline-block px-6 py-2.5 bg-[#53675C] text-white text-xs font-bold tracking-widest uppercase hover:brightness-110 transition-all"
                                    >
                                        Book an Appointment
                                    </a>
                                </div>
                            </div>

                            {/* Right Table + Image */}
                            <div className="w-full md:w-2/3 space-y-6">
                                <div className="overflow-hidden border border-white/10">
                                    <table className="w-full text-left">
                                        <thead className="bg-[#53675C]">
                                            <tr>
                                                <th className="px-5 py-4 text-xs font-bold tracking-widest uppercase text-white">
                                                    Service
                                                </th>
                                                <th className="px-5 py-4 text-xs font-bold tracking-widest uppercase text-white">
                                                    Men
                                                </th>
                                                <th className="px-5 py-4 text-xs font-bold tracking-widest uppercase text-white">
                                                    Women
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/10">
                                            {hairColour.items.map((item, idx) => {
                                                const p = item.price as { men: string; women: string }
                                                return (
                                                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                                                        <td className="px-5 py-4 text-gray-300 text-sm">
                                                            {item.name}
                                                            {item.note && (
                                                                <span className="text-gray-600 text-xs ml-2">({item.note})</span>
                                                            )}
                                                        </td>
                                                        <td className="px-5 py-4 text-white text-sm font-medium">₹{p.men}</td>
                                                        <td className="px-5 py-4 text-white text-sm font-medium">₹{p.women}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                {/* <div className="relative w-full h-48 overflow-hidden border border-white/10">
                                    <Image
                                        src="/hair_coloring.png"
                                        alt="Hair coloring"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                        className="object-cover"
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Texture & Smoothing + Hair Treatment + Hair Extension */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                        {/* Texture & Smoothing */}
                        <div>
                            <h3
                                className="text-lg md:text-xl font-reddit-sans font-bold mb-10 flex items-center"
                                style={{ color: accent }}
                            >
                                <span className="w-10 h-px mr-4" style={{ backgroundColor: accent }}></span>
                                TEXTURE & SMOOTHING
                            </h3>
                            <div className="space-y-4">
                                {textureSmoothing.items.map((item, idx) => (
                                    <div key={idx} className="service-row flex items-baseline">
                                        <span className="text-gray-300 text-sm">{item.name}</span>
                                        <div className="price-leader"></div>
                                        <span className="text-white text-sm font-medium whitespace-nowrap">
                                            ₹{item.price as string}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hair Treatment & Extension Stack */}
                        <div className="space-y-16">
                            {/* Hair Treatment */}
                            <div>
                                <h3
                                    className="text-lg md:text-xl font-reddit-sans font-bold mb-10 flex items-center"
                                    style={{ color: accent }}
                                >
                                    <span className="w-10 h-px mr-4" style={{ backgroundColor: accent }}></span>
                                    HAIR TREATMENT
                                </h3>
                                <div className="space-y-4">
                                    {hairTreatment.items.map((item, idx) => (
                                        <div key={idx} className="service-row flex items-baseline">
                                            <span className="text-gray-300 text-sm">{item.name}</span>
                                            <div className="price-leader"></div>
                                            <span className="text-white text-sm font-medium whitespace-nowrap">
                                                ₹{item.price as string}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Hair Extension */}
                            <div>
                                <h3
                                    className="text-lg md:text-xl font-reddit-sans font-bold mb-10 flex items-center"
                                    style={{ color: accent }}
                                >
                                    <span className="w-10 h-px mr-4" style={{ backgroundColor: accent }}></span>
                                    HAIR EXTENSION
                                </h3>
                                <div className="space-y-4">
                                    {hairExtension.items.map((item, idx) => (
                                        <div key={idx} className="service-row flex items-baseline">
                                            <span className="text-gray-300 text-sm">
                                                {item.name}
                                                {item.note && (
                                                    <span className="text-gray-600 text-xs ml-1">({item.note})</span>
                                                )}
                                            </span>
                                            <div className="price-leader"></div>
                                            <span className="text-white text-sm font-medium whitespace-nowrap">
                                                ₹{item.price as string}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bridal Packages */}
                <section
                    className="relative border-y border-white/10 overflow-hidden"
                    style={{ backgroundColor: "#0c0c0c" }}
                >
                    <div className="absolute inset-0 z-0 opacity-15">
                        <Image
                            src="/bridal_bg.png"
                            alt=""
                            fill
                            sizes="100vw"
                            className="object-cover"
                        />
                        {/* <div className="absolute inset-0 bg-[#0c0c0c]/70"></div> */}
                    </div>
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                        <div className="text-center mb-14">
                            <p
                                className="uppercase tracking-[0.3em] text-xs mb-4 font-bold"
                                style={{ color: yellow }}
                            >
                                Exclusive Offers
                            </p>
                            <h2 className="text-3xl md:text-5xl font-reddit-sans font-bold mb-4">
                                <span style={{ color: yellow }}>Salon</span>{" "}
                                <span className="italic text-white">Packages</span>
                            </h2>
                            <div
                                className="w-20 h-0.5 mx-auto mt-6"
                                style={{ backgroundColor: yellow }}
                            ></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {salonPackages.map((pkg, idx) => (
                                <div
                                    key={idx}
                                    className={`group relative backdrop-blur-md p-7 transition-all duration-500 ${
                                        pkg.featured
                                            ? "bg-[#0e0e0e]/90 border-2 scale-[1.02] z-10"
                                            : "bg-[#0e0e0e]/60 border border-white/10 hover:border-[#d4af37]/50"
                                    }`}
                                    style={pkg.featured ? { borderColor: yellow } : {}}
                                >
                                    {pkg.featured && (
                                        <div
                                            className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] font-bold tracking-widest uppercase text-black"
                                            style={{ backgroundColor: yellow }}
                                        >
                                            Most Popular
                                        </div>
                                    )}
                                    <h4 className="text-base font-reddit-sans font-bold text-white mb-5 leading-snug">
                                        {pkg.title}
                                    </h4>
                                    <ul className="space-y-2.5 mb-7">
                                        {pkg.services.map((svc, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm leading-snug">
                                                <svg
                                                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                                                    fill="none"
                                                    stroke={yellow}
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                                                </svg>
                                                {svc}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-5 border-t border-white/10">
                                        <p className="text-gray-500 line-through text-xs">₹{pkg.originalPrice}</p>
                                        <p
                                            className="text-3xl font-reddit-sans font-bold mt-1"
                                            style={{ color: yellow }}
                                        >
                                            ₹{pkg.offerPrice}
                                        </p>
                                        <span
                                            className="inline-block bg-[#d4af37]/10 mt-2 px-3 py-1 text-[10px] font-bold tracking-widest uppercase"
                                            style={{ color: yellow }}
                                        >
                                            Offer Price
                                        </span>
                                        <a
                                            href={`https://wa.me/919840088867?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.title} Bridal Package. Please share more details.`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 w-full py-3 border text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:brightness-110 inline-block text-center"
                                            style={{
                                                borderColor: yellow,
                                                color: pkg.featured ? "#000" : yellow,
                                                backgroundColor: pkg.featured ? yellow : "transparent",
                                            }}
                                        >
                                            Choose Plan
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Budget Saver Plans */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center mb-14">
                        <p
                            className="uppercase tracking-[0.3em] text-xs mb-4 font-bold"
                            style={{ color: accent }}
                        >
                            Save More
                        </p>
                        <h2 className="text-3xl md:text-5xl font-reddit-sans font-bold text-white mb-4">
                            <span className="italic" style={{ color: accent }}>Budget Saver</span> Plans
                        </h2>
                        <p className="text-gray-400 text-base max-w-2xl mx-auto">
                            Pay for 6 services & enjoy 8 — 8 months validity plans
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {subscriptionPlans.map((plan, idx) => (
                            <div
                                key={idx}
                                className="group relative flex flex-col items-center text-center p-8 transition-all duration-500 bg-[#1a1a1a] border border-white/10 hover:border-[#F8C8DC]/50"
                            >
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                                    style={{ backgroundColor: "rgba(248,200,220,0.1)", color: accent }}
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 15l-4.24 2.23.81-4.73L5.14 9.27l4.74-.69L12 4.26l2.12 4.32 4.74.69-3.43 3.23.81 4.73z" />
                                    </svg>
                                </div>
                                <h4
                                    className="text-base font-reddit-sans font-bold mb-6 uppercase tracking-widest"
                                    style={{ color: accent }}
                                >
                                    {plan.title}
                                </h4>
                                <div className="flex-grow space-y-2.5 mb-8 text-gray-400 text-sm">
                                    {plan.services.map((svc, i) => (
                                        <p key={i}>{svc}</p>
                                    ))}
                                </div>
                                <div className="w-full pt-6 border-t border-white/10">
                                    <p className="text-gray-500 line-through text-xs">₹{plan.originalPrice}</p>
                                    <p
                                        className="text-3xl font-reddit-sans font-bold mt-1"
                                        style={{ color: accent }}
                                    >
                                        ₹{plan.offerPrice}
                                    </p>
                                    <a
                                        href={`https://wa.me/919840088867?text=${encodeURIComponent(`Hi, I'm interested in the ${plan.title} Membership Plan. Please share more details.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 w-full py-3 border text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:brightness-110 inline-block"
                                        style={{
                                            borderColor: accent,
                                            color: accent,
                                            backgroundColor: "transparent",
                                        }}
                                    >
                                        Choose Plan
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Detailed Price List — Blow Dry, Pedicure, Manicure, Threading */}
                <section className="bg-[#0c0c0c] py-16 md:py-24 border-t border-white/10">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                            <div>
                                <h3
                                    className="text-lg md:text-xl font-reddit-sans font-bold mb-10 flex items-center"
                                    style={{ color: accent }}
                                >
                                    <span className="w-10 h-px mr-4" style={{ backgroundColor: accent }}></span>
                                    BLOW DRY
                                </h3>
                                <div className="space-y-4">
                                    {blowDry.items.map((item, idx) => (
                                        <div key={idx} className="service-row flex items-baseline">
                                            <span className="text-gray-300 text-sm">{item.name}</span>
                                            <div className="price-leader"></div>
                                            <span className="text-white text-sm font-medium whitespace-nowrap">
                                                ₹{item.price as string}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <h3
                                    className="text-lg md:text-xl font-reddit-sans font-bold mt-16 mb-10 flex items-center"
                                    style={{ color: accent }}
                                >
                                    <span className="w-10 h-px mr-4" style={{ backgroundColor: accent }}></span>
                                    PEDICURE
                                </h3>
                                <div className="space-y-4">
                                    {pedicure.items.map((item, idx) => (
                                        <div key={idx} className="service-row flex items-baseline">
                                            <span className="text-gray-300 text-sm">{item.name}</span>
                                            <div className="price-leader"></div>
                                            <span className="text-white text-sm font-medium whitespace-nowrap">
                                                ₹{item.price as string}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <h3
                                    className="text-lg md:text-xl font-reddit-sans font-bold mt-16 mb-10 flex items-center"
                                    style={{ color: accent }}
                                >
                                    <span className="w-10 h-px mr-4" style={{ backgroundColor: accent }}></span>
                                    MANICURE
                                </h3>
                                <div className="space-y-4">
                                    {manicure.items.map((item, idx) => (
                                        <div key={idx} className="service-row flex items-baseline">
                                            <span className="text-gray-300 text-sm">{item.name}</span>
                                            <div className="price-leader"></div>
                                            <span className="text-white text-sm font-medium whitespace-nowrap">
                                                ₹{item.price as string}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3
                                    className="text-lg md:text-xl font-reddit-sans font-bold mb-10 flex items-center"
                                    style={{ color: accent }}
                                >
                                    <span className="w-10 h-px mr-4" style={{ backgroundColor: accent }}></span>
                                    THREADING
                                </h3>
                                <div className="space-y-4">
                                    {threading.items.map((item, idx) => (
                                        <div key={idx} className="service-row flex items-baseline">
                                            <span className="text-gray-300 text-sm">{item.name}</span>
                                            <div className="price-leader"></div>
                                            <span className="text-white text-sm font-medium whitespace-nowrap">
                                                ₹{item.price as string}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <h3
                                    className="text-lg md:text-xl font-reddit-sans font-bold mt-16 mb-10 flex items-center"
                                    style={{ color: accent }}
                                >
                                    <span className="w-10 h-px mr-4" style={{ backgroundColor: accent }}></span>
                                    FACIALS
                                </h3>
                                <div className="space-y-4">
                                    {facials.items.map((item, idx) => (
                                        <div key={idx} className="service-row flex items-baseline">
                                            <span className="text-gray-300 text-sm">
                                                {item.name}
                                                {item.note && (
                                                    <span className="text-gray-600 text-xs ml-1">({item.note})</span>
                                                )}
                                            </span>
                                            <div className="price-leader"></div>
                                            <span className="text-white text-sm font-medium whitespace-nowrap">
                                                ₹{item.price as string}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <h3
                                    className="text-lg md:text-xl font-reddit-sans font-bold mt-16 mb-10 flex items-center"
                                    style={{ color: accent }}
                                >
                                    <span className="w-10 h-px mr-4" style={{ backgroundColor: accent }}></span>
                                    DETAN
                                </h3>
                                <div className="space-y-4">
                                    {detan.items.map((item, idx) => (
                                        <div key={idx} className="service-row flex items-baseline">
                                            <span className="text-gray-300 text-sm">{item.name}</span>
                                            <div className="price-leader"></div>
                                            <span className="text-white text-sm font-medium whitespace-nowrap">
                                                ₹{item.price as string}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nail Extension & Art */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="relative w-full h-52 md:h-64 overflow-hidden border border-white/10 mb-12">
                        <Image
                            src="/nail_styling.jpg"
                            alt="Nail styling"
                            fill
                            sizes="(max-width: 768px) 100vw, 80vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                        <div>
                            <h3
                                className="text-lg md:text-xl font-reddit-sans font-bold mb-10 flex items-center"
                                style={{ color: accent }}
                            >
                                <span className="w-10 h-px mr-4" style={{ backgroundColor: accent }}></span>
                                NAIL EXTENSION
                            </h3>
                            <div className="space-y-4">
                                {nailExtension.items.map((item, idx) => (
                                    <div key={idx} className="service-row flex items-baseline">
                                        <span className="text-gray-300 text-sm">{item.name}</span>
                                        <div className="price-leader"></div>
                                        <span className="text-white text-sm font-medium whitespace-nowrap">
                                            ₹{item.price as string}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3
                                className="text-lg md:text-xl font-reddit-sans font-bold mb-10 flex items-center"
                                style={{ color: accent }}
                            >
                                <span className="w-10 h-px mr-4" style={{ backgroundColor: accent }}></span>
                                NAIL ART
                            </h3>
                            <div className="space-y-4">
                                {nailArt.items.map((item, idx) => (
                                    <div key={idx} className="service-row flex items-baseline">
                                        <span className="text-gray-300 text-sm">
                                            {item.name}
                                            {item.note && (
                                                <span className="text-gray-600 text-xs ml-1">({item.note})</span>
                                            )}
                                        </span>
                                        <div className="price-leader"></div>
                                        <span className="text-white text-sm font-medium whitespace-nowrap">
                                            ₹{item.price as string}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Waxing & Bridal Makeup */}
                <section className="bg-[#0c0c0c] py-16 md:py-24 border-t border-white/10">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                            <div>
                                <h3
                                    className="text-lg md:text-xl font-reddit-sans font-bold mb-10 flex items-center"
                                    style={{ color: accent }}
                                >
                                    <span className="w-10 h-px mr-4" style={{ backgroundColor: accent }}></span>
                                    WAXING
                                </h3>
                                <div className="space-y-4">
                                    {waxing.items.map((item, idx) => (
                                        <div key={idx} className="service-row flex items-baseline">
                                            <span className="text-gray-300 text-sm">{item.name}</span>
                                            <div className="price-leader"></div>
                                            <span className="text-white text-sm font-medium whitespace-nowrap">
                                                ₹{item.price as string}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3
                                    className="text-lg md:text-xl font-reddit-sans font-bold mb-10 flex items-center"
                                    style={{ color: accent }}
                                >
                                    <span className="w-10 h-px mr-4" style={{ backgroundColor: accent }}></span>
                                    BRIDAL MAKEUP
                                </h3>
                                <div className="space-y-4">
                                    {bridalMakeup.items.map((item, idx) => (
                                        <div key={idx} className="service-row flex items-baseline">
                                            <span className="text-gray-300 text-sm">{item.name}</span>
                                            <div className="price-leader"></div>
                                            <span className="text-white text-sm font-medium whitespace-nowrap">
                                                ₹{item.price as string}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Quote */}
                <section className="bg-[#0e0e0e] py-12 md:py-16 px-4 border-t border-white/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p
                            className="uppercase tracking-[0.3em] text-xs mb-6 font-bold"
                            style={{ color: accent }}
                        >
                            The Anaplak Philosophy
                        </p>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                            It is this profound understanding, coupled with our expert skill, that transforms every visit
                            into the creation of your perfect look. Step in and experience the art of transformation, where
                            every detail is orchestrated to ensure you leave feeling nothing less than absolutely radiant.
                        </p>
                        <p
                            className="text-sm font-semibold tracking-widest uppercase"
                            style={{ color: accent }}
                        >
                            — Anaplak Team & Kalpana
                        </p>
                    </div>
                </section>

                {/* Tax Disclaimer */}
                {/* <section className="bg-[#0e0e0e] py-8 px-4 border-t border-white/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-gray-500 text-sm">
                            <span className="font-semibold text-gray-400">*</span> All prices are subject to applicable taxes. Prices may vary based on hair length, density, and product usage. Contact us for personalised consultation and accurate quotes.
                        </p>
                    </div>
                </section> */}
            </div>

            <Footer />
        </>
    )
}
