import Script from 'next/script'

export default function StructuredData() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "HairSalon",
        "name": "Anaplak Art And Glam Salon",
        "image": "https://anaplakartandglamsalon.com/og-logo.png",
        "@id": "https://anaplakartandglamsalon.com",
        "url": "https://anaplakartandglamsalon.com",
        "telephone": "+919840088867",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "2nd Floor, TNHB, : 3, 2nd Main Rd, 4th Block, CDN Nagar, MMDA Colony",
            "addressLocality": "Maduravoyal",
            "addressRegion": "Chennai",
            "postalCode": "600095",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 13.0515,
            "longitude": 80.1656
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "10:00",
                "closes": "21:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/anaplakartandglam",
            "https://www.instagram.com/anaplak_art_and_glam_salon",
            "https://www.youtube.com/@Anaplakartandglamsalon/"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "28"
        },
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
        "name": "Anaplak Art And Glam Salon",
        "alternateName": "Anaplak Salon",
        "url": "https://anaplakartandglamsalon.com",
        "logo": "https://anaplakartandglamsalon.com/og-logo.png",
        "description": "Premium hair salon and bridal makeup studio in Maduravoyal, Chennai offering expert hair coloring, keratin treatment, facials, and luxury beauty services.",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+919840088867",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Tamil", "Hindi"]
        },
        "sameAs": [
            "https://www.facebook.com/anaplakartandglam",
            "https://www.instagram.com/anaplak_art_and_glam_salon",
            "https://www.youtube.com/@Anaplakartandglamsalon/"
        ]
    }

    // WebSite Schema with Sitelinks SearchBox
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Anaplak Art And Glam Salon",
        "url": "https://anaplakartandglamsalon.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://anaplakartandglamsalon.com/services?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://anaplakartandglamsalon.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://anaplakartandglamsalon.com/about"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Services",
                "item": "https://anaplakartandglamsalon.com/services"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Gallery",
                "item": "https://anaplakartandglamsalon.com/gallery"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "Contact",
                "item": "https://anaplakartandglamsalon.com/contact"
            }
        ]
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
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />
        </>
    )
}
