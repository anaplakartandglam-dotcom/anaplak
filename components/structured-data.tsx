import Script from 'next/script'
import { businessInfo } from '@/data/businessInfo'

export default function StructuredData() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "BeautySalon",
        "name": businessInfo.name,
        "image": `${businessInfo.url}/logo_updated.webp`,
        "@id": businessInfo.url,
        "url": businessInfo.url,
        "telephone": businessInfo.phone.primary,
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": businessInfo.address.streetAddress,
            "addressLocality": businessInfo.address.addressLocality,
            "addressRegion": businessInfo.address.addressRegion,
            "postalCode": businessInfo.address.postalCode,
            "addressCountry": businessInfo.address.addressCountry
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": businessInfo.geo.latitude,
            "longitude": businessInfo.geo.longitude
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": businessInfo.hours.everyDay,
                "opens": businessInfo.hours.opens,
                "closes": businessInfo.hours.closes
            }
        ],
        "sameAs": businessInfo.sameAs,
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Beauty Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Bridal Makeup",
                        "description": "Complete bridal makeup package with trial session and day-of services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Hair Styling & Treatments",
                        "description": "Professional hair styling, cuts, and treatments"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Hair Coloring",
                        "description": "Expert hair coloring with premium products"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Facial Treatments",
                        "description": "Rejuvenating facial treatments customized to your skin type"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Manicure & Pedicure",
                        "description": "Relaxing nail care services with premium products"
                    }
                }
            ]
        }
    }

    // Organization Schema for better brand recognition
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": businessInfo.name,
        "alternateName": businessInfo.alternateName,
        "url": businessInfo.url,
        "logo": `${businessInfo.url}/logo_updated.webp`,
        "description": businessInfo.description,
        "email": businessInfo.email,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": businessInfo.phone.primary,
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Tamil", "Hindi"]
        },
        "sameAs": businessInfo.sameAs
    }

    // WebSite Schema
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": businessInfo.name,
        "url": businessInfo.url
    }

    return (
        <>
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema)
                }}
            />
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema)
                }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema)
                }}
            />
        </>
    )
}