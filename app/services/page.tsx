"use client"

import { useEffect, useState } from "react"
import { Sparkles, Scissors, Palette, Heart, Crown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

const services = [
  {
    category: "Bridal",
    icon: Crown,
    color: "#53675C", // Updated to new heading color
    items: [
      {
        title: "Complete Bridal Package",
        description: "Transform into the most radiant version of yourself on your special day",
        image: "/elegant-bride-makeup.jpg",
        details:
          "Our signature bridal experience includes pre-wedding consultations, trial sessions, and day-of services. We create a personalized beauty timeline ensuring you look flawless from ceremony to reception.",
        benefits: [
          "Personalized consultation and trial session",
          "Premium luxury products",
          "Professional styling team",
          "Touch-up kit for the day",
          "Complimentary anniversary makeup session",
        ],
        process: [
          "Initial consultation to understand your vision",
          "Trial session 4-6 weeks before wedding",
          "Final preparation and application on wedding day",
          "Touch-ups throughout your special day",
        ],
        deliverables: "Bridal makeup, hair styling, draping assistance, touch-up kit, and photography-ready finish",
      },
      {
        title: "Engagement Makeup",
        description: "Look stunning for your engagement ceremony and photoshoot",
        image: "/engagement-makeup-look-natural-glowing-beauty.webp",
        details: "Specially designed for engagement ceremonies, this service ensures you look radiant in person and photos.",
        benefits: ["HD makeup for flawless photos", "Long-lasting formula", "Style consultation included"],
        process: ["Discuss your outfit and theme", "Skin prep", "Professional application", "Final styling"],
        deliverables: "Complete makeup look, hair styling, and touch-up recommendations",
      },
    ],
  },
  {
    category: "Hair",
    icon: Scissors,
    color: "#53675C", // Updated to new heading color
    items: [
      {
        title: "Hair Styling",
        description: "Expert hair styling services for any occasion",
        image: "/hair-styling.jpg",
        details:
          "From everyday styles to special occasion updos, our hair specialists create looks that complement your features and lifestyle. We use premium products to ensure your hair stays healthy and vibrant.",
        benefits: [
          "Customized styling solutions",
          "Bridal and party hairstyles",
          "Professional-grade products",
          "Style maintenance tips",
          "Expert consultation included",
        ],
        process: [
          "Hair analysis and consultation",
          "Style planning and preparation",
          "Professional styling application",
          "Final touches and setting",
        ],
        deliverables: "Complete hair styling, maintenance guide, and product recommendations",
      },
      {
        title: "Hair Treatment",
        description: "Advanced texture treatments for healthy, manageable hair",
        image: "/hair-treatment.jpg",
        details:
          "Transform your hair with our premium texture treatments. From smoothing and straightening to adding volume and curls, we offer a complete range of advanced hair treatments using the latest techniques and products for long-lasting, beautiful results. Our treatments include Perming, Keratin, Smoothing, Botox, Nano Plastia, and Botoplex - all customized to your hair type and desired results.",
        benefits: [
          "Perming - Partial & Full (adds volume and curls)",
          "Keratin - Partial & Full (smoothing and strengthening)",
          "Smoothing - Partial & Full (frizz control and shine)",
          "Botox - Customized (deep conditioning and repair)",
          "Nano Plastia - Customized (advanced smoothing)",
          "Botoplex - Customized (bond repair and restoration)",
        ],
        process: [
          "Hair analysis and treatment consultation",
          "Pre-treatment preparation and protection",
          "Professional treatment application",
          "Post-treatment care and styling",
        ],
        deliverables: "Complete hair treatment with detailed aftercare instructions and maintenance schedule",
      },
      {
        title: "Hair Coloring",
        description: "Transform your look with expert color services",
        image: "/hair-coloring.jpg",
        details:
          "Whether you want subtle highlights or a complete color transformation, our colorists use the latest techniques and premium products to achieve stunning, long-lasting results.",
        benefits: [
          "Personalized color consultation",
          "Ammonia-free options available",
          "Color protection treatment",
          "Maintenance schedule",
          "Free color correction within 7 days",
        ],
        process: [
          "Color consultation and strand test",
          "Pre-color hair preparation",
          "Professional color application",
          "Post-color treatment and styling",
        ],
        deliverables: "Complete hair coloring, styling, and aftercare kit",
      },
      {
        title: "Hair Extension",
        description: "Add length, volume, and style with premium hair extensions",
        image: "/hair-extension.jpg",
        details:
          "Transform your look instantly with our premium hair extension services. From tape-in to nano extensions, we offer a variety of methods to add length, volume, and dimension to your hair. Our expert stylists ensure seamless blending and natural-looking results.",
        benefits: [
          "Tape Hair Extension - 100gms (seamless and comfortable)",
          "Nano Hair Extension - 100gms (ultra-fine and invisible)",
          "Clip & Go - 100gms (temporary and easy to use)",
          "Professional maintenance services available",
        ],
        process: [
          "Hair consultation and extension type selection",
          "Color matching and preparation",
          "Professional extension application",
          "Styling and maintenance guidance",
        ],
        deliverables: "Complete hair extension application with care instructions and maintenance schedule",
      },
    ],
  },
  {
    category: "Makeup",
    icon: Palette,
    color: "#53675C", // Updated to new heading color
    items: [
      {
        title: "Party Makeup",
        description: "Glamorous looks for any celebration or special event",
        image: "/party-makeup.jpg",
        details:
          "Perfect for birthdays, anniversaries, cocktail parties, and social events. We create stunning looks that photograph beautifully and last throughout your event.",
        benefits: [
          "Event-appropriate styling",
          "Long-lasting formula",
          "Photo-ready finish",
          "Complementary hairstyling",
          "Quick touch-up guidance",
        ],
        process: [
          "Consultation on event and outfit",
          "Skin prep and priming",
          "Makeup application and blending",
          "Setting and final touches",
        ],
        deliverables: "Complete party makeup look with styling recommendations",
      },
      {
        title: "Fashion & Editorial Makeup",
        description: "Bold, creative looks for photoshoots and fashion events",
        image: "/fashion-editorial-makeup.jpg",
        details: "Specialized makeup artistry for fashion shows, editorial shoots, and creative projects.",
        benefits: ["Avant-garde techniques", "Camera-ready results", "Portfolio-worthy looks"],
        process: ["Brief and mood board", "Creative concept", "Artistic application", "On-set touch-ups"],
        deliverables: "High-fashion makeup optimized for photography and runway",
      },
    ],
  },
  {
    category: "Skin",
    icon: Sparkles,
    color: "#53675C", // Updated to new heading color
    items: [
      {
        title: "Facial Treatments",
        description: "Rejuvenate and refresh your skin with our signature facials",
        image: "/facial-treatments.jpg",
        details:
          "Our facial treatments are customized to your skin type and concerns. Using advanced techniques and premium products, we help you achieve healthy, glowing skin.",
        benefits: [
          "Personalized skin analysis",
          "Deep cleansing and exfoliation",
          "Targeted treatment serums",
          "Relaxing facial massage",
          "Home care recommendations",
        ],
        process: [
          "Skin type assessment",
          "Double cleansing and steam",
          "Exfoliation and extraction",
          "Mask, massage, and moisturizing",
        ],
        deliverables: "Glowing, refreshed skin with a personalized skincare routine",
      },
      {
        title: "Anti-Aging Treatments",
        description: "Advanced solutions for youthful, radiant skin",
        image: "/anti-aging-skincare-treatment-youthful-glowing-ski.webp",
        details: "Combat signs of aging with specialized treatments targeting fine lines, wrinkles, and loss of elasticity.",
        benefits: ["Collagen-boosting", "Fine line reduction", "Improved texture", "Enhanced firmness"],
        process: ["Aging assessment", "Deep cleansing", "Active ingredient application", "Specialized massage"],
        deliverables: "Visibly younger-looking skin with continued improvement recommendations",
      },
    ],
  },
  {
    category: "Salon",
    icon: Heart,
    color: "#53675C", // Updated to new heading color
    items: [
      {
        title: "Manicure & Pedicure",
        description: "Pamper yourself with our relaxing nail care services",
        image: "/luxury-manicure-pedicure-nail-salon-spa-treatment.webp",
        details:
          "Indulge in our luxurious manicure and pedicure services. We use premium products and techniques to give you beautiful, healthy nails while providing a relaxing beauty experience.",
        benefits: [
          "Nail health improvement",
          "Cuticle care and shaping",
          "Relaxing hand/foot massage",
          "Long-lasting polish options",
          "Hygiene-focused tools",
        ],
        process: [
          "Nail cleaning and shaping",
          "Cuticle treatment",
          "Exfoliation and massage",
          "Polish application and finishing",
        ],
        deliverables: "Perfectly groomed nails with your choice of classic or gel polish",
      },
      {
        title: "Threading & Waxing",
        description: "Professional hair removal for smooth, beautiful skin",
        image: "/threading-waxing.jpg",
        details:
          "Our expert technicians provide gentle, effective hair removal services using premium products. We ensure minimal discomfort while delivering smooth, long-lasting results.",
        benefits: [
          "Precise hair removal",
          "Suitable for sensitive skin",
          "Long-lasting smoothness",
          "Professional technique",
          "Soothing post-treatment care",
        ],
        process: [
          "Skin assessment and prep",
          "Gentle hair removal",
          "Soothing treatment application",
          "Post-care instructions",
        ],
        deliverables: "Smooth, hair-free skin with aftercare guidance",
      },
      {
        title: "Nail Art & Extension",
        description: "Creative nail designs and professional nail extensions",
        image: "/nails-2.webp",
        details:
          "Express your style with our stunning nail art and extension services. From classic French designs to creative 3D art, our skilled nail technicians create beautiful, long-lasting nail designs. We offer a complete range of nail extension options including gel, acrylic, and poly gel extensions.",
        benefits: [
          "Gel Extensions - Soft & Poly (natural look and flexibility)",
          "Acrylic Extensions (durable and customizable)",
          "Nail Art - French, Cat Eye, Galaxy, Chrome, Ombre, 3D, Marble",
          "Bridal Customised Nail Art (special occasion designs)",
          "Professional maintenance and repair services",
        ],
        process: [
          "Nail consultation and design selection",
          "Nail preparation and shaping",
          "Extension application or nail art creation",
          "Finishing, sealing, and aftercare guidance",
        ],
        deliverables: "Beautiful nail extensions or nail art with maintenance tips and care instructions",
      },
    ],
  },
]

export default function ServicesSection() {
  const [visibleCategories, setVisibleCategories] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCategories((prev) => new Set(prev).add(entry.target.getAttribute("data-category") || ""))
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[data-category]").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const serviceSlugs: Record<string, string> = {
    "Complete Bridal Package": "/services/bridal-makeup-chennai",
    "Engagement Makeup": "/services/engagement-makeup-chennai",
    "Hair Styling": "/services/hair-styling-chennai",
    "Hair Treatment": "/services/hair-treatment-chennai",
    "Hair Coloring": "/services/hair-coloring-chennai",
    "Hair Extension": "/services/hair-extension-chennai",
    "Party Makeup": "/services/party-makeup-chennai",
    "Fashion & Editorial Makeup": "/services/fashion-editorial-makeup-chennai",
    "Facial Treatments": "/services/facial-treatments-chennai",
    "Anti-Aging Treatments": "/services/anti-aging-treatments-chennai",
    "Manicure & Pedicure": "/services/manicure-pedicure-chennai",
    "Threading & Waxing": "/services/threading-waxing-chennai",
    "Nail Art & Extension": "/services/nail-art-extension-chennai",
  }

  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Hair, Beauty & Bridal Services in Chennai | Anaplak Art & Glam",
            "description": "Discover professional hair coloring, balayage, keratin treatments, hair smoothening, bridal makeup, facials, nail services, and beauty treatments at Anaplak Art & Glam in Chennai, Maduravoyal.",
            "url": "https://anaplakartandglamsalon.com/services",
            "itemListElement": [
              { "@type": "Service", "name": "Complete Bridal Package", "provider": { "@type": "BeautySalon", "name": "Anaplak Art And Glam Salon" }, "serviceType": "Bridal Makeup", "areaServed": "Chennai", "description": "Transform into the most radiant version of yourself on your special day" },
              { "@type": "Service", "name": "Hair Coloring", "provider": { "@type": "BeautySalon", "name": "Anaplak Art And Glam Salon" }, "serviceType": "Hair Services", "areaServed": "Chennai", "description": "Expert hair coloring services with premium products and latest techniques" },
              { "@type": "Service", "name": "Facial Treatments", "provider": { "@type": "BeautySalon", "name": "Anaplak Art And Glam Salon" }, "serviceType": "Skin Care", "areaServed": "Chennai", "description": "Rejuvenating facial treatments customized to your skin type" },
              { "@type": "Service", "name": "Manicure & Pedicure", "provider": { "@type": "BeautySalon", "name": "Anaplak Art And Glam Salon" }, "serviceType": "Nail Care", "areaServed": "Chennai", "description": "Luxury nail care services with premium products" },
            ]
          })
        }}
      />

      <Script
        id="services-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://anaplakartandglamsalon.com" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://anaplakartandglamsalon.com/services" },
            ]
          })
        }}
      />

      <Header />
      <div className="min-h-screen bg-black mt-10 md:mt-25">
        <PageHeader
          label="Our Services"
          title="Our"
          titleAccent="Services"
          description="Discover our comprehensive range of beauty and wellness services, tailored to bring out your natural elegance"
        />

        <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          {services.map((category) => {
            const Icon = category.icon
            const isVisible = visibleCategories.has(category.category)

            return (
              <div
                key={category.category}
                data-category={category.category}
                className={`mb-16 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <div className="mb-8 flex items-center gap-3">
                  <Icon className="h-8 w-8" style={{ color: category.color }} />
                  <h2 className="font-serif text-3xl font-bold" style={{ color: category.color }}>
                    {category.category}
                  </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {category.items.map((service) => (
                    <div
                      key={service.title}
                      className="group relative overflow-hidden rounded-lg bg-zinc-800/50 backdrop-blur transition-all hover:scale-[1.02]"
                      style={{ borderWidth: "1px", borderColor: "#ffffff26" }}
                    >
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/90 to-transparent"></div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                        <p className="mt-2 text-zinc-400 text-sm">{service.description}</p>
                        <Link
                          href={serviceSlugs[service.title] || "#"}
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F8C8DC] hover:text-white transition-colors group/link"
                        >
                          Learn More
                          <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl p-12 text-center" style={{ background: "linear-gradient(135deg, #53675C 0%, #0e0e0e 100%)", borderWidth: "1px", borderColor: "#ffffff26" }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#f8c8dc]/20 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#f2d2bd]/20 via-transparent to-transparent"></div>

            <div className="relative">
              <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Ready to Transform Your Look?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-200">Book your appointment today and experience the luxury of personalized beauty services</p>

              <a
                href="https://www.welns.io/product/booking/WFRCHN984305/Anaplak?bk_src=GMAPS110"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ background: "linear-gradient(90deg, #f8c8dc 0%, #f2d2bd 100%)" }}
              >
                <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
                <span className="relative text-[#0e0e0e]">Book Your Appointment</span>
                <svg className="relative h-5 w-5 text-[#0e0e0e] transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
