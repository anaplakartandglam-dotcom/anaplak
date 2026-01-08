import Script from 'next/script'

export default function StructuredData() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "HairSalon",
        "name": "Anaplak Art and Glam Salon",
        "image": "https://anaplakartandglamsalon.com/logo_new.jpeg",
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

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://anaplakartandglamsalon.com"
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
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />
        </>
    )
}
