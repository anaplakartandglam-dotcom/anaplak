export interface ServicePageData {
    slug: string
    category: string
    title: string
    description: string
    image: string
    details: string
    benefits: string[]
    process: string[]
    deliverables: string
    keywords: string[]
}

export const servicePages: ServicePageData[] = [
    {
        slug: "complete-bridal-package",
        category: "Bridal",
        title: "Complete Bridal Package",
        description: "Transform into the most radiant version of yourself on your special day",
        image: "/elegant-bride-makeup-and-hairstyling-beauty-portra.webp",
        details: "Our signature bridal experience includes pre-wedding consultations, trial sessions, and day-of services. We create a personalized beauty timeline ensuring you look flawless from ceremony to reception.",
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
        keywords: ["bridal package Chennai", "wedding makeup Maduravoyal", "bridal beauty package", "complete bridal makeup", "wedding day makeup"],
    },
    {
        slug: "engagement-makeup",
        category: "Bridal",
        title: "Engagement Makeup",
        description: "Look stunning for your engagement ceremony and photoshoot",
        image: "/engagement-makeup-look-natural-glowing-beauty.webp",
        details: "Specially designed for engagement ceremonies, this service ensures you look radiant in person and photos. We use high-definition makeup techniques perfect for both traditional and modern celebrations.",
        benefits: [
            "HD makeup for flawless photos",
            "Long-lasting formula",
            "Style consultation included",
            "Complimentary hair styling",
            "Pre-event skin preparation guide",
        ],
        process: [
            "Discuss your outfit and theme",
            "Skin preparation recommendations",
            "Professional makeup application",
            "Final styling and setting",
        ],
        deliverables: "Complete makeup look, hair styling, and touch-up recommendations",
        keywords: ["engagement makeup Chennai", "HD makeup Maduravoyal", "engagement ceremony makeup", "photoshoot makeup"],
    },
    {
        slug: "hair-styling",
        category: "Hair",
        title: "Hair Styling",
        description: "Expert hair styling services for any occasion",
        image: "/transformation-1.webp",
        details: "From everyday styles to special occasion updos, our hair specialists create looks that complement your features and lifestyle. We use premium products to ensure your hair stays healthy and vibrant.",
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
        keywords: ["hair styling Chennai", "hair salon Maduravoyal", "hair cut salon", "hair updos", "party hairstyles"],
    },
    {
        slug: "hair-treatment",
        category: "Hair",
        title: "Hair Treatment",
        description: "Advanced texture treatments for healthy, manageable hair",
        image: "/professional-hair-styling-salon-treatment-luxury.webp",
        details: "Transform your hair with our premium texture treatments. From smoothing and straightening to adding volume and curls, we offer a complete range of advanced hair treatments using the latest techniques and products for long-lasting, beautiful results. Our treatments include Perming, Keratin, Smoothing, Botox, Nano Plastia, and Botoplex - all customized to your hair type and desired results.",
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
        keywords: ["hair treatment Chennai", "keratin treatment Maduravoyal", "hair smoothening", "hair botox", "nano plastia treatment"],
    },
    {
        slug: "hair-coloring",
        category: "Hair",
        title: "Hair Coloring",
        description: "Transform your look with expert color services",
        image: "/hair-coloring.webp",
        details: "Whether you want subtle highlights or a complete color transformation, our colorists use the latest techniques and premium products to achieve stunning, long-lasting results.",
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
        keywords: ["hair coloring Chennai", "balayage Maduravoyal", "hair highlights", "global hair color", "ammonia free color"],
    },
    {
        slug: "hair-extension",
        category: "Hair",
        title: "Hair Extension",
        description: "Add length, volume, and style with premium hair extensions",
        image: "/hair_extension.webp",
        details: "Transform your look instantly with our premium hair extension services. From tape-in to nano extensions, we offer a variety of methods to add length, volume, and dimension to your hair. Our expert stylists ensure seamless blending and natural-looking results.",
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
        keywords: ["hair extension Chennai", "tape hair extension", "nano hair extension", "clip and go extension", "hair volume"],
    },
    {
        slug: "party-makeup",
        category: "Makeup",
        title: "Party Makeup",
        description: "Glamorous looks for any celebration or special event",
        image: "/glamorous-party-makeup-evening-look-celebration.jpg",
        details: "Perfect for birthdays, anniversaries, cocktail parties, and social events. We create stunning looks that photograph beautifully and last throughout your event.",
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
        keywords: ["party makeup Chennai", "event makeup Maduravoyal", "cocktail makeup", "birthday makeup", "celebration makeup"],
    },
    {
        slug: "fashion-editorial-makeup",
        category: "Makeup",
        title: "Fashion & Editorial Makeup",
        description: "Bold, creative looks for photoshoots and fashion events",
        image: "/professional-makeup-artist-beauty-glamour-studio.webp",
        details: "Specialized makeup artistry for fashion shows, editorial shoots, and creative projects. We collaborate with photographers and designers to bring artistic visions to life.",
        benefits: [
            "Avant-garde techniques",
            "Camera and lighting expertise",
            "Collaborative creative process",
            "Portfolio-worthy results",
            "Trend-forward styling",
        ],
        process: [
            "Brief understanding and mood board review",
            "Creative concept development",
            "Artistic application",
            "On-set touch-ups and adjustments",
        ],
        deliverables: "High-fashion makeup looks optimized for photography and runway",
        keywords: ["fashion makeup Chennai", "editorial makeup", "photoshoot makeup", "runway makeup", "creative makeup"],
    },
    {
        slug: "facial-treatments",
        category: "Skin",
        title: "Facial Treatments",
        description: "Rejuvenate and refresh your skin with our signature facials",
        image: "/luxury-facial-treatment-spa-skincare-relaxation.webp",
        details: "Our facial treatments are customized to your skin type and concerns. Using advanced techniques and premium products, we help you achieve healthy, glowing skin.",
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
        keywords: ["facial treatment Chennai", "skin care Maduravoyal", "facial salon", "skin brightening", "anti-aging facial"],
    },
    {
        slug: "anti-aging-treatments",
        category: "Skin",
        title: "Anti-Aging Treatments",
        description: "Advanced solutions for youthful, radiant skin",
        image: "/anti-aging-skincare-treatment-youthful-glowing-ski.webp",
        details: "Combat signs of aging with our specialized treatments that target fine lines, wrinkles, and loss of elasticity. We use clinically-proven ingredients and techniques for visible results.",
        benefits: [
            "Collagen-boosting treatments",
            "Fine line reduction",
            "Improved skin texture",
            "Enhanced firmness",
            "Long-term skin health support",
        ],
        process: [
            "Aging concerns assessment",
            "Deep cleansing and prep",
            "Active ingredient application",
            "Specialized massage and sealing",
        ],
        deliverables: "Visibly younger-looking skin with continued improvement recommendations",
        keywords: ["anti-aging treatment Chennai", "wrinkle treatment", "skin rejuvenation", "collagen facial", "youthful skin"],
    },
    {
        slug: "manicure-pedicure",
        category: "Salon",
        title: "Manicure & Pedicure",
        description: "Pamper yourself with our relaxing nail care services",
        image: "/luxury-manicure-pedicure-nail-salon-spa-treatment.webp",
        details: "Indulge in our luxurious manicure and pedicure services. We use premium products and techniques to give you beautiful, healthy nails while providing a relaxing beauty experience.",
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
        keywords: ["manicure Chennai", "pedicure Maduravoyal", "nail salon", "gel polish", "spa pedicure"],
    },
    {
        slug: "threading-waxing",
        category: "Salon",
        title: "Threading & Waxing",
        description: "Professional hair removal for smooth, beautiful skin",
        image: "/eyebrow-and-waxing.webp",
        details: "Our expert technicians provide gentle, effective hair removal services using premium products. We ensure minimal discomfort while delivering smooth, long-lasting results.",
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
        keywords: ["threading Chennai", "waxing Maduravoyal", "eyebrow threading", "full body waxing", "hair removal salon"],
    },
    {
        slug: "nail-art-extension",
        category: "Salon",
        title: "Nail Art & Extension",
        description: "Creative nail designs and professional nail extensions",
        image: "/nails-2.webp",
        details: "Express your style with our stunning nail art and extension services. From classic French designs to creative 3D art, our skilled nail technicians create beautiful, long-lasting nail designs. We offer a complete range of nail extension options including gel, acrylic, and poly gel extensions.",
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
        keywords: ["nail art Chennai", "nail extension Maduravoyal", "gel nails", "acrylic nails", "bridal nails"],
    },
]

export function getServiceBySlug(slug: string): ServicePageData | undefined {
    return servicePages.find((s) => s.slug === slug)
}

export function getRelatedServices(currentSlug: string, count: number = 3): ServicePageData[] {
    const current = getServiceBySlug(currentSlug)
    if (!current) return servicePages.slice(0, count)

    const sameCategory = servicePages.filter(
        (s) => s.slug !== currentSlug && s.category === current.category
    )
    const other = servicePages.filter(
        (s) => s.slug !== currentSlug && s.category !== current.category
    )

    return [...sameCategory, ...other].slice(0, count)
}
