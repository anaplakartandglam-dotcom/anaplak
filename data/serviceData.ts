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
        slug: "bridal-makeup-chennai",
        category: "Bridal",
        title: "Bridal Makeup",
        description: "Book professional bridal makeup in Chennai from ₹15,000. HD makeup, hairstyling, draping, trial sessions, and expert bridal beauty planning at Anaplak Art and Glam, Maduravoyal.",
        image: "/elegant-bride-makeup.jpg",
        details: "Your wedding photographs will stay with you for a lifetime. The right bridal makeup doesn't just enhance your appearance, it helps you feel confident and radiant throughout every ceremony, photo session, and celebration. At Anaplak Art and Glam Salon in Chennai, Maduravoyal, we provide complete bridal beauty services designed around your unique style, wedding attire, skin tone, and event schedule.",
        benefits: [
            "Personalized bridal consultation and trial session",
            "Professional HD, glossy, and air brush makeup options",
            "Hairstyling and saree draping assistance",
            "Premium long-lasting beauty products",
            "Complimentary anniversary makeup session",
            "Touch-up kit for confidence all day",
        ],
        process: [
            "8 weeks before ,  Book your bridal package and schedule a trial session",
            "4-6 weeks before ,  Attend your trial and finalize makeup, hairstyle, and draping",
            "1 week before ,  Complete facial treatments and skincare routine",
            "Wedding day ,  Flawless makeup application, hairstyling, draping, and final touch-ups",
        ],
        deliverables: "Bridal makeup, hair styling, draping assistance, touch-up kit, and photography-ready finish with complimentary anniversary makeup session",
        keywords: ["bridal makeup artist chennai", "best bridal makeup artist in chennai", "bridal makeup chennai", "bridal makeup in chennai", "chennai bridal makeup", "groom makeup chennai", "wedding hairstyling", "bridal hairstyles", "bridal makeup price", "hd makeup chennai", "bridal makeup Maduravoyal", "bridal beauty package", "complete bridal makeup", "wedding day makeup"],
    },
    {
        slug: "engagement-makeup-chennai",
        category: "Bridal",
        title: "Engagement Makeup",
        description: "Book professional engagement makeup in Chennai from ₹15,000. HD makeup, hairstyling, and long-lasting beauty for engagement ceremonies and photoshoots at Anaplak Art and Glam, Maduravoyal.",
        image: "/engagement-makeup-look-natural-glowing-beauty.webp",
        details: "Your engagement ceremony marks the beginning of an exciting new chapter. It is one of the most photographed events before the wedding, making professional makeup an essential part of your preparation. At Anaplak Art and Glam Salon in Chennai, Maduravoyal, our engagement makeup service uses HD techniques and long-lasting products to create a look that appears flawless both in person and in photographs.",
        benefits: [
            "HD makeup for flawless photos and long-lasting wear",
            "Personalized style consultation based on outfit and event",
            "Complimentary hairstyling included",
            "Skin preparation guidance for better makeup performance",
            "Photo-ready finishing with reduced touch-up requirements",
        ],
        process: [
            "Consultation ,  Discuss your outfit, jewelry, event timing, and preferred look",
            "Skin preparation ,  Your skin is prepared using suitable products",
            "Professional HD makeup application ,  Achieve a polished, camera-ready finish",
            "Hairstyling and final touches ,  Hair is styled and the look is perfected",
        ],
        deliverables: "Complete engagement makeup look with HD techniques, complimentary hairstyling, and long-lasting professional products",
        keywords: ["engagement makeup artist chennai", "engagement makeup price in chennai", "engagement makeup salon chennai", "hd makeup chennai", "engagement makeup in maduravoyal", "engagement photo makeup", "professional makeup for engagement", "best engagement makeup artist in chennai", "engagement ceremony makeup", "photoshoot makeup"],
    },
    {
        slug: "hair-styling-chennai",
        category: "Hair",
        title: "Hair Styling",
        description: "Professional hair styling in Chennai for men and women. Haircuts, blow dry, bridal updos, and special occasion styling at Anaplak Art and Glam, Maduravoyal from ₹900.",
        image: "/hair-styling.jpg",
        details: "Your hairstyle plays a major role in your overall appearance. Whether you're preparing for an important event, attending a wedding, updating your everyday look, or simply maintaining your personal style, professional hair styling helps you look polished and confident. At Anaplak Art and Glam Salon in Chennai, Maduravoyal, our hairstylists create customized looks based on your face shape, hair texture, lifestyle, and personal preferences.",
        benefits: [
            "Precision haircuts for men and women by experienced stylists",
            "Blow dry, tongs, ironing, and updos for events and occasions",
            "Bridal updos and special occasion hairstyling",
            "Personalized recommendations based on face shape and hair type",
            "Premium salon products for style longevity and hair health",
        ],
        process: [
            "Hair assessment ,  Evaluate hair texture, condition, and styling goals",
            "Consultation ,  Discuss preferred styles, maintenance, and suitability",
            "Professional styling ,  Cut, shape, or style using expert techniques",
            "Final finishing ,  Refine the look and provide maintenance tips",
        ],
        deliverables: "Professional hair styling with personalized consultation, premium products, and maintenance guidance",
        keywords: ["hair stylist chennai", "best hair salon in chennai", "best hair stylist in chennai for males", "best haircut salon in chennai", "best hair dresser in chennai", "hair salon chennai", "hair styling Maduravoyal", "hair cut salon", "hair updos", "bridal hair style", "blow dry chennai", "party hairstyles", "men hair salon chennai", "women hair salon chennai"],
    },
    {
        slug: "hair-treatment-chennai",
        category: "Hair",
        title: "Hair Texture Treatments",
        description: "Professional keratin, smoothing, botox, nano plastia, perming, hair spa and bond strengthening treatments in Chennai. Get smoother, healthier, manageable hair at Anaplak Art and Glam, Maduravoyal from ₹3,000.",
        image: "/hair-treatment.jpg",
        details: "Frizzy, difficult-to-manage hair can add unnecessary time to your daily routine. Advanced texture treatments help reduce frizz, improve smoothness, and make hair easier to style while maintaining a healthier appearance. At Anaplak Art and Glam Salon, we offer a complete range of professional hair treatments including keratin, smoothing, perming, botox, nano plastia, botoplex, hair spa, dandruff treatment, and bond strengthening — all customized according to your hair condition and desired results.",
        benefits: [
            "Keratin treatment — Reduces frizz, improves shine and strength — from ₹7,000",
            "Hair smoothing — Controls frizz and creates a sleeker, manageable texture — from ₹7,000",
            "Hair botox — Deep conditioning treatment to repair and nourish damaged hair — from ₹7,000",
            "Nano plastia — Advanced smoothing with long-lasting results — from ₹9,000",
            "Perming — Adds curls, texture, and volume — from ₹3,500",
            "Botoplex — Repairs and strengthens damaged hair — from ₹8,000",
            "Hair spa — Deep nourishment for dry and damaged hair — from ₹3,000",
            "Dandruff treatment — Soothes the scalp and controls flaking — from ₹4,000",
            "Bond strengthening treatment — Repairs internal bonds for stronger, healthier hair — from ₹5,000",
        ],
        process: [
            "Hair analysis ,  Assess hair texture, condition, and concerns",
            "Consultation ,  Treatment recommendations based on your hair goals",
            "Professional application ,  Treatment applied using premium products",
            "Styling and aftercare ,  Hair is styled and detailed maintenance instructions provided",
        ],
        deliverables: "Complete hair texture treatment with detailed aftercare instructions and maintenance schedule for results lasting 3-6 months",
        keywords: ["keratin treatment chennai", "hair smoothing chennai", "hair botox chennai", "best keratin treatment in chennai", "hair smoothening cost chennai", "best hair smoothening in chennai", "perming hair cost in chennai", "nano plastia chennai", "hair straightening chennai", "keratin treatment Maduravoyal", "hair smoothening", "hair botox treatment", "permanent hair straightening"],
    },
    {
        slug: "hair-coloring-chennai",
        category: "Hair",
        title: "Hair Colouring",
        description: "Professional hair colouring in Chennai with highlights, global colour, fashion and creative shades and ammonia-free options. Book your colour consultation at Anaplak Art and Glam, Maduravoyal from ₹1,800.",
        image: "/hair-coloring.jpg",
        details: "Hair colour is one of the most effective ways to refresh your appearance, express your personality, or completely reinvent your look. Whether you're covering greys, adding dimension with highlights, or experimenting with bold fashion shades, professional colour services help achieve beautiful, long-lasting results while maintaining hair health. At Anaplak Art and Glam Salon in Chennai, Maduravoyal, our experienced colour specialists create customized colour solutions based on your hair type, skin tone, lifestyle, and desired outcome.",
        benefits: [
            "Root touch-up and global colour ,  grey coverage and full colour transformation",
            "Partial and full head highlights ,  add dimension, brightness, and movement",
            "Fashion and creative colours ,  bold, personalized looks from ₹5,000",
            "Ammonia-free colour options ,  gentler on sensitive scalps",
            "Colour refresh and per streak options for maintenance",
            "Personalized colour consultation and shade matching included",
        ],
        process: [
            "Colour consultation ,  Discuss your goals, hair history, and desired result",
            "Hair assessment ,  Evaluate hair condition and suitability for colouring",
            "Professional colour application ,  Colour applied using targeted techniques",
            "Finishing and styling ,  Hair is styled and maintenance recommendations provided",
        ],
        deliverables: "Complete hair colouring service with professional consultation, styling, and personalized maintenance guidance",
        keywords: ["hair coloring chennai", "balayage hair color", "global hair color", "highlights for black hair", "hair streaks price", "ammonia free hair color chennai", "hair colour Maduravoyal", "best hair color salon chennai", "hair highlights", "fashion colour chennai", "colour refresh chennai", "creative colour salon"],
    },
    {
        slug: "hair-extension-chennai",
        category: "Hair",
        title: "Hair Extensions",
        description: "Get longer, fuller hair instantly with premium hair extensions in Chennai. Tape, nano and clip-in extensions professionally applied at Anaplak Art and Glam, Maduravoyal from ₹20,000.",
        image: "/hair-extension.jpg",
        details: "Waiting months for your hair to grow isn't the only option. Hair extensions offer an immediate way to achieve longer, fuller, and more voluminous hair while maintaining a natural appearance. At Anaplak Art and Glam Salon in Chennai, Maduravoyal, we offer premium hair extension services designed to blend seamlessly with your natural hair. Whether you're preparing for a wedding, special event, photoshoot, or simply want more volume and length, our specialists help you achieve beautiful, confidence-boosting results. We also provide non-surgical men's bald patch coverage with custom-fitted hair patches for targeted thinning or bald areas.",
        benefits: [
            "Tape hair extensions ,  Lightweight, comfortable, and seamless blending from ₹30,000",
            "Nano hair extensions ,  Ultra-small attachment points, virtually invisible from ₹30,000",
            "Clip & Go extensions ,  Temporary instant volume and length from ₹20,000",
            "Mens patch for bald patches ,  Targeted coverage for thinning or patchy areas from ₹25,000",
            "Professional colour matching for natural-looking results",
            "Extension maintenance services available at ₹10,000",
        ],
        process: [
            "Hair consultation ,  Assess current hair length, density, texture, and desired outcome",
            "Colour matching ,  Extensions carefully selected to match your natural hair colour",
            "Professional application ,  Extension method professionally installed for comfort and blending",
            "Styling and maintenance guidance ,  Hair styled and aftercare recommendations provided",
        ],
        deliverables: "Professional hair extension application with colour matching, styling, and detailed maintenance guidance",
        keywords: ["hair extensions chennai", "tape hair extensions chennai", "nano hair extensions chennai", "hair extension salon chennai", "hair extension Maduravoyal", "clip in hair extensions chennai", "hair volume extensions chennai", "best hair extensions chennai", "hair extension maintenance", "hair transformation", "men bald patch treatment chennai", "hair patch for men chennai", "non-surgical hair replacement chennai", "bald patch coverage chennai"],
    },
    {
        slug: "party-makeup-chennai",
        category: "Makeup",
        title: "Party Makeup",
        description: "Book professional party makeup in Chennai from ₹10,000. Long-lasting, photo-ready makeup for birthdays, anniversaries, cocktail parties, and special events at Anaplak Art and Glam, Maduravoyal.",
        image: "/party-makeup.jpg",
        details: "Every special occasion deserves a look that makes you feel confident, elegant, and camera-ready. Whether you're attending a birthday celebration, anniversary party, engagement function, cocktail event, or corporate gathering, professional makeup helps you look polished throughout the event. At Anaplak Art and Glam Salon in Chennai, Maduravoyal, our party makeup services are designed to complement your outfit, event type, and personal style using professional products and expert techniques.",
        benefits: [
            "Personalized consultation based on your event and outfit",
            "Skin preparation for a smooth, long-lasting base",
            "Professional makeup application with photo-ready finishing",
            "Long-lasting products that remain fresh throughout your event",
            "Quick touch-up guidance for confidence all evening",
        ],
        process: [
            "Consultation ,  Discuss your event, outfit, preferences, and desired makeup style",
            "Skin preparation ,  Skin prepped to create a smooth and long-lasting base",
            "Makeup application ,  Professional products and techniques for your preferred look",
            "Final touches ,  Makeup perfected and set for long-lasting wear",
        ],
        deliverables: "Complete party makeup look with professional application, styling recommendations, and touch-up guidance",
        keywords: ["party makeup chennai", "party makeup artist chennai", "event makeup chennai", "professional makeup chennai", "birthday makeup chennai", "party makeup Maduravoyal", "cocktail party makeup", "reception makeup", "soft glam makeup", "glamorous makeup", "makeup for party near me", "party makeup price"],
    },
    {
        slug: "fashion-editorial-makeup-chennai",
        category: "Makeup",
        title: "Fashion & Editorial Makeup",
        description: "Professional fashion and editorial makeup in Chennai for photoshoots, campaigns, runway shows, and creative projects. Consultation-based pricing at Anaplak Art and Glam, Maduravoyal.",
        image: "/fashion-editorial-makeup.jpg",
        details: "Fashion and editorial makeup is where creativity meets technical expertise. Every photoshoot, campaign, runway show, and creative project requires makeup that performs under professional lighting, high-resolution photography, and artistic direction. At Anaplak Art and Glam Salon in Chennai, Maduravoyal, we provide professional fashion and editorial makeup services tailored to photographers, designers, models, brands, influencers, and creative teams.",
        benefits: [
            "Fashion editorial makeup ,  trend-driven looks designed for fashion shoots",
            "Runway makeup ,  high-impact looks that perform under stage lighting",
            "Commercial campaign makeup for advertising and brand marketing",
            "Creative concept makeup for artistic projects and storytelling",
            "On-site support and collaboration with creative teams",
        ],
        process: [
            "Project brief ,  Share your concept, mood board, references, and project goals",
            "Creative planning ,  Discuss makeup direction, styling requirements, and production needs",
            "Professional application ,  Editorial techniques used to create the final look",
            "Shoot support ,  Additional adjustments made during the shoot if required",
        ],
        deliverables: "Professional editorial and fashion makeup optimized for photography, runway, and creative productions",
        keywords: ["fashion makeup artist chennai", "editorial makeup chennai", "model makeup chennai", "high fashion makeup", "runway makeup chennai", "photoshoot makeup", "commercial makeup artist", "creative makeup chennai", "professional makeup artist"],
    },
    {
        slug: "facial-treatments-chennai",
        category: "Skin",
        title: "Facial Treatments",
        description: "Professional facial treatments in Chennai from ₹2,000. Deep cleansing, hydration, brightening and advanced facials for healthy, glowing skin at Anaplak Art and Glam, Maduravoyal.",
        image: "/facial-treatments.jpg",
        details: "Healthy skin doesn't happen by accident. Daily exposure to pollution, sun damage, stress, and lifestyle factors can leave skin looking dull, tired, and dehydrated. Professional facial treatments help restore balance, improve skin appearance, and support long-term skin health. At Anaplak Art and Glam Salon in Chennai, Maduravoyal, our facial treatments are customized according to your skin type, concerns, and beauty goals.",
        benefits: [
            "Classic Cleanup ,  Regular skin maintenance and deep cleansing from ₹2,000",
            "Skin Brightening Facial ,  Enhanced radiance and improved glow from ₹3,000",
            "Skin Miracle Facial ,  Premium rejuvenation for tired-looking skin from ₹4,000",
            "Furutsu Avocado Facial ,  Hydrating nourishment for dry skin from ₹4,000",
            "Glutathione Facial ,  Brightening treatment for radiant skin from ₹5,000",
            "Anaplak Gensly Facial ,  Signature rejuvenation for glowing skin from ₹5,000",
            "Bride & Groom Facial ,  Pre-wedding glow special from ₹6,000",
            "Casmara Facial ,  Advanced intensive skincare treatment from ₹7,000",
        ],
        process: [
            "Skin assessment ,  Evaluate your skin type and discuss concerns or goals",
            "Treatment selection ,  Facial recommended based on your skin's needs",
            "Professional facial treatment ,  Performed using expert techniques and products",
            "Aftercare guidance ,  Recommendations provided to maintain results at home",
        ],
        deliverables: "Glowing, refreshed skin with a personalized skincare routine and professional aftercare recommendations",
        keywords: ["facial treatment chennai", "facial salon chennai", "skin brightening facial chennai", "professional facial chennai", "facial services chennai", "facial Maduravoyal", "skin care treatment", "deep cleansing facial", "skin rejuvenation", "facial for glowing skin"],
    },
    {
        slug: "anti-aging-treatments-chennai",
        category: "Skin",
        title: "Anti-Aging Treatments",
        description: "Advanced anti-aging treatments in Chennai for youthful, radiant skin. Rejuvenate and revitalize with professional skincare at Anaplak Art and Glam, Maduravoyal.",
        image: "/anti-aging-skincare-treatment-youthful-glowing-ski.webp",
        details: "Combat signs of aging with our specialized treatments that target fine lines, wrinkles, and loss of elasticity. We use clinically-proven ingredients and techniques for visible results at Anaplak Art and Glam Salon, Chennai, Maduravoyal.",
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
        keywords: ["anti-aging treatment Chennai", "wrinkle treatment Maduravoyal", "skin rejuvenation", "collagen facial", "youthful skin"],
    },
    {
        slug: "manicure-pedicure-chennai",
        category: "Salon",
        title: "Manicure & Pedicure",
        description: "Professional manicure and pedicure services in Chennai. Relaxing nail care from ₹800 with gel polish, spa treatments, and signature experiences at Anaplak Art and Glam, Maduravoyal.",
        image: "/luxury-manicure-pedicure-nail-salon-spa-treatment.webp",
        details: "Indulge in our luxurious manicure and pedicure services. We use premium products and techniques to give you beautiful, healthy nails while providing a relaxing beauty experience at Anaplak Art and Glam Salon, Chennai, Maduravoyal.",
        benefits: [
            "Nail health improvement and cuticle care",
            "Relaxing hand and foot massage",
            "Long-lasting gel polish options",
            "Classic, spa, and signature treatments available",
            "Hygiene-focused professional tools",
        ],
        process: [
            "Nail cleaning and shaping",
            "Cuticle treatment",
            "Exfoliation and massage",
            "Polish application and finishing",
        ],
        deliverables: "Perfectly groomed nails with your choice of classic or gel polish",
        keywords: ["manicure Chennai", "pedicure Maduravoyal", "nail salon chennai", "gel polish", "spa pedicure chennai", "best nail salon chennai"],
    },
    {
        slug: "threading-waxing-chennai",
        category: "Salon",
        title: "Threading & Waxing",
        description: "Professional threading and waxing services in Chennai. Eyebrow threading from ₹130, facial threading, body waxing, and full body hair removal at Anaplak Art and Glam, Maduravoyal.",
        image: "/threading-waxing.jpg",
        details: "Professional hair removal helps maintain smooth skin, enhance grooming, and create a polished appearance. Whether you're looking for eyebrow shaping, facial threading, body waxing, or full-body hair removal, professional services deliver cleaner and more precise results than at-home alternatives. At Anaplak Art and Glam Salon in Chennai, Maduravoyal, we offer professional threading and waxing services performed by experienced beauty professionals.",
        benefits: [
            "Eyebrow threading for precise shaping and definition from ₹130",
            "Facial threading ,  upper lip, chin, forehead, neck, sides, and full face",
            "Body waxing ,  arms, legs, underarms, back, and abdomen",
            "Full body waxing service available at ₹4,500",
            "Cleaner results and more precise shaping than at-home methods",
        ],
        process: [
            "Consultation ,  Discuss the treatment area and your requirements",
            "Preparation ,  Treatment area is prepared for hair removal",
            "Professional service ,  Threading or waxing performed by trained professionals",
            "Aftercare guidance ,  Recommendations provided to maintain results",
        ],
        deliverables: "Smooth, hair-free skin with professional aftercare guidance and grooming recommendations",
        keywords: ["threading chennai", "waxing chennai", "eyebrow threading chennai", "full body waxing chennai", "hair removal salon chennai", "threading Maduravoyal", "facial threading", "body waxing", "professional hair removal"],
    },
    {
        slug: "nail-art-extension-chennai",
        category: "Salon",
        title: "Nail Art & Extension",
        description: "Professional nail art and nail extensions in Chennai. Gel polish from ₹1,000, gel, acrylic, poly gel extensions, bridal nail art, French nails, chrome, ombre and more at Anaplak Art and Glam, Maduravoyal.",
        image: "/nails-2.webp",
        details: "Beautiful nails are more than a finishing touch, they're a reflection of your personal style. Whether you prefer elegant everyday designs, bold statement nails, bridal nail art, or long-lasting extensions, professional nail services help create polished, eye-catching results. At Anaplak Art and Glam Salon in Chennai, Maduravoyal, we offer a complete range of nail art and nail extension services designed to suit every occasion and personality.",
        benefits: [
            "Gel extensions and soft gel extensions from ₹2,500",
            "Acrylic extensions for durability from ₹2,700",
            "Poly gel extensions combining strength and flexibility from ₹3,000",
            "Nail art ,  French, cat eye, galaxy, chrome, ombre, marble, 3D, and neon designs",
            "Bridal customized nail art from ₹1,500 onwards",
            "Refill, overlay, extension removal, and tip repair services available",
        ],
        process: [
            "Consultation ,  Discuss your design preferences, event, and desired look",
            "Nail preparation ,  Nails prepared and shaped for the selected service",
            "Professional application ,  Extensions or nail art professionally applied",
            "Finishing and guidance ,  Final touches completed and aftercare recommendations provided",
        ],
        deliverables: "Beautiful nail extensions or nail art with professional finishing and aftercare guidance",
        keywords: ["nail art chennai", "nail extensions chennai", "best nail art in chennai", "acrylic nails chennai", "bridal nail art chennai", "nail salon chennai", "gel nail extensions chennai", "nail art Maduravoyal", "french nails", "chrome nail art", "ombre nail art"],
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
