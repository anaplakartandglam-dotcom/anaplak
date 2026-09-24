export interface PaaFaq {
  q: string
  a: string
}

// "People also ask" questions (from live Google PAA research) selected per
// service so each money page answers the most important queries it owns.
// Every price below is copied from the live salon menu (app/menu/page.tsx)
// or the corresponding service page — no external market ranges are stated.

export const HOMEPAGE_FAQS: PaaFaq[] = [
  {
    q: "How do I choose a good salon in Chennai?",
    a: "Look for trained stylists, hygienically cleaned tools, visible pricing, real client reviews and portfolio photos of actual work. At Anaplak Art & Glam in Maduravoyal, every service begins with a consultation so the stylist recommends based on your hair, skin and occasion rather than a fixed menu.",
  },
  {
    q: "How much does a haircut cost in Chennai?",
    a: "Haircut prices vary from budget to premium salons depending on the stylist's experience. At Anaplak, a Premier Stylist cut starts at ₹900 for men and ₹1,200 for women, going up to ₹1,100/₹1,500 with a Top Stylist and ₹1,300/₹1,800 with the Salon Director.",
  },
  {
    q: "Does keratin treatment stop frizzy hair?",
    a: "Yes. Keratin coats the hair cuticle, seals the frizzy outer layer, and adds smoothness for roughly 3 to 6 months with proper care. At Anaplak, keratin treatment is available from ₹3,000 to ₹7,000 depending on hair length, plus Botox, Botoplex and Nano Plastia options for damaged or very frizzy hair.",
  },
  {
    q: "How much does bridal makeup cost in Chennai?",
    a: "Bridal makeup prices vary by artist, package and travel. At Anaplak, bridal looks start at ₹15,000 (Classic), ₹18,000 (HD), ₹22,000 (Glossy) and ₹30,000 (Air Brush).",
  },
  {
    q: "How long do hair extensions last?",
    a: "With correct application and aftercare, tape and nano extensions last about 2 to 4 months before maintenance is needed. At Anaplak, extensions range from ₹20,000 (Clip & Go) to ₹30,000 (Tape or Nano, 100 g onwards), with maintenance visits at ₹10,000 to keep them natural and secure.",
  },
  {
    q: "Where can I get a good facial in Chennai?",
    a: "For a results-oriented facial, look for clean tools, product choice and honest pricing. Anaplak offers Classic Cleanup from ₹2,000, Skin Brightening at ₹3,000, and premium options like the Glutathione, Anaplak Gensly and Casmara facials, plus separate detan services — all customised to your skin type.",
  },
]

export const PAA_BY_SERVICE: Record<string, PaaFaq[]> = {
  "bridal-makeup-chennai": [
    {
      q: "What is the average cost of bridal makeup in Chennai?",
      a: "Bridal makeup prices in Chennai vary with the artist and package. At Anaplak, bridal looks start at ₹15,000 (Classic), ₹18,000 (HD), ₹22,000 (Glossy) and ₹30,000 (Air Brush). Trial makeup is ₹3,000 and is recommended 2–3 weeks before the wedding.",
    },
    {
      q: "Which is better for a wedding — airbrush or traditional makeup?",
      a: "Air brush makeup is applied with a spray gun, so it feels very light, holds well in Chennai's humidity and photographs beautifully — ideal for long receptions. Traditional (brush-and-sponge) makeup gives fuller, buildable coverage. The right choice depends on your skin and schedule; we show both options during the ₹3,000 trial.",
    },
    {
      q: "Should I do my own bridal makeup?",
      a: "A wedding look has to last through a 4–6 hour event, photography, humidity and touch-up cycles, which is hard to replicate at home. A professional bridal artist uses HD products, hairstyling and draping support (included in our bridal packages, with party makeup at ₹10,000 and bridesmaid looks at ₹7,000).",
    },
    {
      q: "What is trending in bridal makeup now?",
      a: "For 2026 weddings, brides in Chennai are asking for soft-glam, glossy and 'natural HD' looks — defined brows, dewy skin and wearable lip shades that work from the muhurtam to the reception. Air brush is a common choice for long receptions, and a trial ensures the final look matches photos exactly.",
    },
  ],
  "engagement-makeup-chennai": [
    {
      q: "How much does engagement makeup cost in Chennai?",
      a: "Engagement makeup prices vary by artist and package. At Anaplak, an engagement bridal look starts at ₹15,000 and includes hairstyling; the groom's makeup is ₹6,000 and bridesmaids are ₹7,000 each.",
    },
    {
      q: "What is the difference between HD and regular makeup for an engagement?",
      a: "HD makeup uses finely milled, camera-tested products that look smooth in engagement photographs and under event lighting. At Anaplak, a Classic engagement look starts at ₹15,000, and HD makeup (₹18,000 at bridal rates) is the recommended choice for photography-heavy ceremonies.",
    },
    {
      q: "Do you do engagement makeup at the wedding venue?",
      a: "Yes. All bridal-style packages can travel to the venue with outdoor charges starting from ₹3,000 depending on distance across Chennai and nearby areas.",
    },
  ],
  "party-makeup-chennai": [
    {
      q: "How much does party makeup cost in Chennai?",
      a: "Party makeup prices vary by salon and artist. At Anaplak, party makeup is ₹10,000 and is ideal for receptions, birthdays and celebration events.",
    },
    {
      q: "What is the difference between party makeup and bridal makeup?",
      a: "Party makeup is lighter, quicker (about 3 hours in-salon) and uses less coverage than a bridal look. Bridal packages add draping support, trial sessions and longer wear for the wedding day. Please contact the salon on 98400 88867 for event or group bookings.",
    },
  ],
  "fashion-editorial-makeup-chennai": [
    {
      q: "What is editorial makeup?",
      a: "Editorial makeup is created for camera work — photoshoots, campaigns, runway and creative productions — using techniques and product density that read well under studio or flash lighting rather than a daily wear look.",
    },
    {
      q: "How much does editorial makeup cost?",
      a: "Editorial and fashion projects are priced by scope — number of looks, shoot days, location and creative direction. We provide a free initial consultation, and final quotes are shared after the project brief.",
    },
    {
      q: "Do you work with brands, designers and photographers?",
      a: "Yes. We collaborate with photographers, designers, brands and creative teams on fashion and editorial productions, with location work available depending on the project requirements.",
    },
  ],
  "hair-styling-chennai": [
    {
      q: "How much does hair styling cost in Chennai?",
      a: "Styling prices vary by salon. At Anaplak, blow drys start at ₹1,500, tongs at ₹1,700 and ironing at ₹1,800, and are usually combined with a cut — Premier Stylist cuts are ₹900 (men) and ₹1,200 (women).",
    },
    {
      q: "How long does hair styling last?",
      a: "A blow-dry or ironing typically holds for the day with light styling products, while updos and bridal styles are created to last the full event. Heatless and damp styles have shorter hold — we'll suggest the best hold for your event.",
    },
    {
      q: "Who is the best hair stylist in Chennai?",
      a: "The 'best' stylist is the one who matches your hair type, face shape and budget. Look for trained, senior stylists with portfolios. Anaplak has Premier, Top and Salon Director stylist tiers, so you can pick the experience level that suits you, from ₹900 to ₹1,800 per cut.",
    },
    {
      q: "What is the 3:2:1 rule for haircuts?",
      a: "There is no official 3:2:1 haircut formula — the name is sometimes used for a straightening product mixing rule. For cuts, most professional stylists recommend a trim every 6–8 weeks to protect hair ends and maintain your shape; your stylist will tailor this to your growth rate.",
    },
  ],
  "hair-treatment-chennai": [
    {
      q: "Which salon treatment is best for hair?",
      a: "It depends on your goal. Keratin smooths and seals frizz, smoothing gives a sleeker straight result, Hair Botox deep-repairs damaged strands, and Nano Plastia provides long-lasting straightening. Our stylists match the treatment to your hair condition during the consultation.",
    },
    {
      q: "Which is costly, keratin or smoothing?",
      a: "At Anaplak, keratin treatment is ₹3,000 to ₹7,000 depending on hair length, Hair Botox and Botoplex are from ₹8,000, and Nano Plastia is from ₹9,000. There is no single 'costlier' option — final pricing depends on hair length and density, and is confirmed before the service.",
    },
    {
      q: "What happens after 3 months of keratin treatment?",
      a: "The keratin gradually fades as new, untreated hair grows in, so frizz returns first near the roots. With sulfate-free home care, results typically hold 3–6 months; after that you can book a top-up or switch to smoothing or Nano Plastia.",
    },
    {
      q: "Can I wash my hair after keratin treatment?",
      a: "Usually yes, but only after the waiting period recommended by the stylist — typically about 72 hours — and then only with sulfate-free, keratin-safe shampoo to make the treatment last.",
    },
  ],
  "hair-coloring-chennai": [
    {
      q: "How much does hair coloring cost in Chennai?",
      a: "Colour prices depend on length and technique. At Anaplak, root touch-up starts at ₹1,800 (men) / ₹2,000 (women), global colour at ₹3,500 / ₹4,500, partial highlights from ₹3,000 / ₹4,500, and fashion or creative colours from ₹5,000 / ₹7,000. Ammonia-free options add a small premium.",
    },
    {
      q: "Which hair color is most damaging?",
      a: "High-lift lighteners and aggressive bleach are the most damaging because they strip more pigment. Safer options are ammonia-free dyes and colouring on unbleached hair. We always do a strand test when needed and recommend bond-friendly colour services to limit damage.",
    },
    {
      q: "How often should I colour my hair?",
      a: "Root touch-ups are usually every 4–8 weeks depending on growth, while full colour refresh can wait 6–8 weeks. Overlapping colour too often increases damage — we schedule and space services so your hair stays healthy.",
    },
  ],
  "hair-extension-chennai": [
    {
      q: "How much do hair extensions cost in Chennai?",
      a: "At Anaplak, Clip & Go extensions start at ₹20,000, while Tape and Nano extensions are ₹30,000 for 100 g onwards, with maintenance visits at ₹10,000. Final pricing depends on length, density and the method selected.",
    },
    {
      q: "Can I wash my hair with extensions?",
      a: "Yes. Wash gently in a vertical direction with sulfate-free shampoo, avoid rubbing the attachment points, and follow the aftercare notes provided with your appointment. Proper washing is the biggest factor in how long extensions keep looking natural.",
    },
    {
      q: "How to sleep with hair extensions?",
      a: "Sleep with your extensions loosely braided or in a low ponytail, and use a silk or satin pillowcase to reduce friction, tangling and breakage at the attachment points.",
    },
  ],
  "facial-treatments-chennai": [
    {
      q: "How much does a facial cost in Chennai?",
      a: "Facial prices in Chennai vary widely. At Anaplak, our menu runs from a Classic Cleanup at ₹2,000 and Skin Brightening at ₹3,000 up to premium Glutathione, Anaplak Gensly (₹5,000) and Casmara (₹7,000) facials, with separate detan services from ₹400.",
    },
    {
      q: "Which facial gives instant glow in a parlour?",
      a: "Brightening and peel-based facials give the most immediate glow. In our salon, Skin Brightening (₹3,000), Skin Miracle (₹4,000) and the Anaplak Gensly (₹5,000) are the popular instant-glow choices, followed by a home-care routine to hold the effect.",
    },
    {
      q: "Should I get a facial before my wedding?",
      a: "Yes, but schedule the final facial 1–2 weeks before the wedding so your skin settles. The Bride & Groom Special (₹6,000) is designed for pre-wedding preparation, and we avoid heavy treatments close to the big day.",
    },
  ],
  "anti-aging-treatments-chennai": [
    {
      q: "Which treatment is best for ageing skin?",
      a: "For fine lines and dullness, brightening and firming facials combined with SPF-based home care give the most realistic results. In-salon options like the Anaplak Gensly and Casmara facials (from ₹5,000) are popular anti-aging choices; a skin assessment helps us match treatment to your concerns.",
    },
    {
      q: "Can facials really reduce fine lines?",
      a: "Facials hydrate, exfoliate and firm the skin, which softens the look of fine lines — but they are not clinical treatments. For deeper lines, a dermatologist's plan may be needed. We are transparent that in-salon care improves the skin's appearance, not erases wrinkles.",
    },
  ],
  "manicure-pedicure-chennai": [
    {
      q: "How much does a manicure and pedicure cost in Chennai?",
      a: "At Anaplak, a Classic Manicure is ₹800, Spa Manicure ₹1,500 up to the Anaplak Signature Manicure at ₹2,500; Classic Pedicure is ₹1,000, Spa Pedicure ₹1,700 up to the Signature Pedicure at ₹3,000. Gel polish bundles start at ₹1,000.",
    },
    {
      q: "What does a full pedicure include?",
      a: "A full pedicure includes soaking, foot scrubbing, cuticle care, callus and heel treatment, nail shaping, a relaxing massage and polish. Premium tiers add deeper exfoliation and nourishing masks.",
    },
    {
      q: "Which is better, a manicure or a pedicure?",
      a: "They're complementary — a manicure focuses on hands and cuticles, a pedicure on feet, calluses and nails. Most clients book both together since hygiene tools are separately sanitised and it completes the polished look.",
    },
  ],
  "threading-waxing-chennai": [
    {
      q: "How much does threading cost in Chennai?",
      a: "At Anaplak, eyebrow threading is ₹130, upper lip ₹100, chin ₹100, full face ₹700. Waxing starts at ₹300 for underarms, ₹400 for half legs, and full-body waxing at ₹4,500.",
    },
    {
      q: "What is the 48-hour rule for waxing?",
      a: "For 24–48 hours after waxing, avoid direct sun, heat/sauna, tight clothing and heavy sweating, and skip active exfoliation, so the skin calms and ingrown hairs are less likely to form.",
    },
    {
      q: "Does hair grow back thicker after threading or waxing?",
      a: "No. Threading and waxing pull hair from the root, so it grows back finer and softer over time rather than thicker. Shaving, which cuts the hair mid-shaft, is what makes it feel stubbly.",
    },
  ],
  "nail-art-extension-chennai": [
    {
      q: "How much do nail extensions cost in Chennai?",
      a: "At Anaplak, gel and soft-gel extensions are ₹2,500, acrylic extensions ₹2,700 and poly gel ₹3,000, with refills at ₹2,000 and professional removal at ₹1,500. Nail art or polish alone starts from ₹1,000.",
    },
    {
      q: "Which is better, gel or acrylic nails?",
      a: "Gel is more flexible, lighter and thinner, so it suits natural-length nails, while acrylic is stronger and better for longer extensions. We carry both — the choice depends on your nail state, lifestyle and desired length.",
    },
    {
      q: "Are nail extensions bad for your nails?",
      a: "Not when they are applied, maintained and removed professionally, and you take periodic breaks between sets. At-home removal or picking at extensions is what damages the natural nail — we always recommend in-salon removal (₹1,500).",
    },
  ],
}