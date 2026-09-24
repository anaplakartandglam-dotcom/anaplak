"use client"

import { useEffect, useState } from "react"
import { Sparkles, Scissors, Palette, Heart, Crown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { servicePages } from "@/data/serviceData"
import { businessInfo } from "@/data/businessInfo"
import TrackLink from "@/components/track-link"

const CATEGORY_META = [
  {
    category: "Bridal",
    icon: Crown,
    color: "#53675C",
  },
  {
    category: "Hair",
    icon: Scissors,
    color: "#53675C",
  },
  {
    category: "Makeup",
    icon: Palette,
    color: "#53675C",
  },
  {
    category: "Skin",
    icon: Sparkles,
    color: "#53675C",
  },
  {
    category: "Salon",
    icon: Heart,
    color: "#53675C",
  },
]

const services = CATEGORY_META.map((meta) => ({
  ...meta,
  items: servicePages
    .filter((s) => s.category === meta.category)
    .map((s) => ({
      title: s.title,
      description: s.description,
      image: s.image,
      details: s.details,
      benefits: s.benefits,
      process: s.process,
      deliverables: s.deliverables,
      slug: s.slug,
    })),
})).filter((category) => category.items.length > 0)

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
            "url": `${businessInfo.url}/services`,
            "itemListElement": servicePages.map((service, index) => ({
              "@type": "Service",
              "position": index + 1,
              "name": service.title,
              "provider": { "@type": "BeautySalon", "name": businessInfo.name },
              "serviceType": service.category,
              "areaServed": "Chennai",
              "url": `${businessInfo.url}/services/${service.slug}`,
              "description": service.description,
            })),
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
                      key={service.slug}
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
                          href={`/services/${service.slug}`}
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

              <TrackLink
                kind="booking_click"
                href={businessInfo.bookingUrl}
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
              </TrackLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}