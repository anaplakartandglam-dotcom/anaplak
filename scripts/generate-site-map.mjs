import { writeFileSync } from "node:fs"

const now = Date.now()
let idSeq = 0
const ids = (p) => `${p}_${idSeq++}`
const NUM = (v) => Math.round(v * 10) / 10

const el = (type, props) => {
  const fontSize = props.fontSize ?? 14
  const text = String(props.text ?? "")
  const lines = String(text).split("\n")
  const maxLen = Math.max(...lines.map((l) => l.length), 1)
  const w = props.width ?? Math.min(Math.max(maxLen * fontSize * 0.56, 20), 700)
  const h = props.height ?? lines.length * fontSize * 1.25
  const isText = type === "text"
  return {
    id: ids(type), type, x: NUM(props.x), y: NUM(props.y), width: NUM(w), height: NUM(h),
    angle: 0, strokeColor: props.strokeColor ?? "#1e1e1e",
    backgroundColor: props.backgroundColor ?? "transparent",
    fillStyle: props.fillStyle ?? "solid", strokeWidth: props.strokeWidth ?? 2,
    strokeStyle: "solid", roughness: props.roughness ?? 1, opacity: 100,
    groupIds: [], frameId: null, roundness: isText ? null : { type: 3 },
    seed: 1000 + idSeq * 7919, version: 1, versionNonce: 1, isDeleted: false,
    boundElements: null, updated: now, link: null, locked: false,
    ...(isText ? { text, fontSize, fontFamily: 1, textAlign: "left", verticalAlign: "top", baseline: fontSize, containerId: null, originalText: text, lineHeight: 1.25 } : {}),
    ...(type === "arrow" ? { points: props.points, startBinding: props.startBinding ?? null, endBinding: props.endBinding ?? null, customData: props.customData ?? null, linecap: "round" } : {}),
  }
}

const elements = []
const cards = {}

const text = (x, y, str, fontSize = 12, color = "#222", w) => el("text", { x, y, text: str, fontSize, strokeColor: color, width: w })
const rect = (x, y, w, h, fill, stroke, sw = 1.5, roughness = 0) => el("rectangle", { x, y, width: w, height: h, backgroundColor: fill, strokeColor: stroke, strokeWidth: sw, roughness })

function pill(x, y, label, fill, stroke, textColor = "#111", fontSize = 10) {
  const pw = 14 + label.length * (fontSize * 0.58)
  const ph = 18
  const out = []
  if (fill) out.push(rect(x, y, pw, ph, fill, stroke, 1, 0))
  out.push(text(x + 6, y + ph / 2 - fontSize * 0.7, label, fontSize, textColor))
  return { w: pw, h: ph, els: out }
}

// ---------------------------------------------------------------- content
const CTA = "#F8C8DC"     // pink = conversion tracking
const LINK = "#2e6b8a"    // blue = internal link

const PAGES = [
  {
    id: "home", name: "HOME", url: "/", accent: "#53675C",
    sections: [
      { t: "Header", c: ["logo · nav · phone · Book Appointment"] },
      { t: "HeroSlider", c: ["H1: PREMIUM SALON · BEAUTY EXPERTS", "4 slides · trust line: Rated 4.8/5 by 1000+", ""], cta: ["Book Appointment", "WhatsApp Now"] },
      { t: "WhyChooseUs", c: ["premium reasons cards", ""], cta: ["Book Appointment", "Call"] },
      { t: "ServicesShowcase", c: ["6 service cards link to money pages"], links: ["/services/*"] },
      { t: "About preview", c: ["brand story + image", ""], links: ["/about"] },
      { t: "Testimonials", c: ["live Google reviews (API / fallback)"] },
      { t: "VideoParallax", c: ["opens video player modal"] },
      { t: "Features", c: ["features grid", ""], cta: ["Book Appointment", "Call"] },
      { t: "BlogPreview", c: ["latest posts"], links: ["/blogs"] },
      { t: "CTASection", c: ["Ready for your transformation?"], cta: ["Book Appointment", "WhatsApp Now"] },
    ],
  },
  {
    id: "about", name: "ABOUT", url: "/about", accent: "#8a5a44",
    sections: [
      { t: "Header", c: ["logo · nav · phone · Book Appointment"] },
      { t: "PageHeader", c: ["About Us — discover our story"] },
      { t: "Unique Beauty", c: ["image w/ dynamic hover corners + heading"] },
      { t: "Services overview", c: ["icons: BEARD TRIM · HAIR TREATMENTS …"] },
      { t: "Video tour", c: ["background image + play button modal"] },
      { t: "Specialist & Working Hours", c: ["Mon–Sun: 10:00 AM – 9:00 PM"] },
      { t: "Stats", c: ["1000+ · 7 Days Open · 100+ · 6+ years"] },
      { t: "FAQ accordion", c: ["4 questions / answers"] },
      { t: "Social cards", c: ["Instagram · YouTube · WhatsApp", ""], cta: ["WhatsApp"] },
      { t: "Meet Kalpana", c: [""], links: ["/kalpana"] },
      { t: "Footer", c: ["phones · social · explore"] },
    ],
  },
  {
    id: "services", name: "SERVICES HUB", url: "/services", accent: "#53675C",
    sections: [
      { t: "Header", c: ["logo · nav · phone · Book Appointment"] },
      { t: "PageHeader", c: ["Our Services"] },
      { t: "Catalog by category", c: ["Bridal 2 · Hair 4 · Makeup 2 · Skin 2 · Salon 3", "= 13 money pages", "each card links to its page"], links: ["/services/*"] },
      { t: "Bottom CTA", c: ["Ready to transform your look?"], cta: ["Book Your Appointment"] },
      { t: "Footer", c: ["phones · social · explore"] },
    ],
  },
  {
    id: "service_detail", name: "SERVICE DETAIL", url: "/services/<slug> ×13", accent: "#53675C",
    sections: [
      { t: "Header", c: ["logo · nav · phone · Book Appointment"] },
      { t: "Hero", c: ["service name + tagline", ""], cta: ["Book", "WhatsApp Us"] },
      { t: "Overview + Quick Info", c: ["duration · price · availability"], cta: ["Check Availability"] },
      { t: "Pricing", c: ["transparent price list"], links: ["/menu"] },
      { t: "Benefits + Process", c: ["what's included · what to expect"], cta: ["Get Consultation"] },
      { t: "Team", c: ["Kalpana overview"] },
      { t: "Testimonials", c: ["real Google reviews"] },
      { t: "FAQs", c: ["accordion"] },
      { t: "Visit Us", c: ["map · address · hours · phones", ""], cta: ["Call"] },
      { t: "Final CTA", c: [""], cta: ["Book", "Ask a Question"] },
      { t: "Related services", c: ["links to sibling pages"], links: ["/services/*"] },
      { t: "Footer", c: ["phones · social · explore"] },
    ],
  },
  {
    id: "pricing", name: "SALON MENU", url: "/menu", accent: "#53675C",
    sections: [
      { t: "Header", c: ["logo · nav · phone · Book Appointment"] },
      { t: "PageHeader", c: ["Pricing Guide"] },
      { t: "Tabs + price lists", c: ["hair · colour · bridal · facials · nails · waxing …"] },
      { t: "Packages & offers", c: ["Classic · Premium · Budget saver plans", ""], cta: ["Book Appointment", "Choose Plan"] },
      { t: "Footer", c: ["phones · social · explore"] },
    ],
  },
  {
    id: "gallery", name: "GALLERY", url: "/gallery", accent: "#8a5a44",
    sections: [
      { t: "Header", c: ["logo · nav · phone · Book Appointment"] },
      { t: "GalleryShowcase", c: ["portfolio of salon work photos"] },
      { t: "Footer", c: ["phones · social · explore"] },
    ],
  },
  {
    id: "blogs", name: "BLOG HUB", url: "/blogs", accent: "#53675C",
    sections: [
      { t: "Header", c: ["logo · nav · phone · Book Appointment"] },
      { t: "PageHeader", c: ["Beauty Insights"] },
      { t: "Blog cards", c: ["15 posts — each links to its article"], links: ["/blogs/<slug>"] },
      { t: "Footer", c: ["phones · social · explore"] },
    ],
  },
  {
    id: "blog_post", name: "BLOG POST", url: "/blogs/<slug> ×15", accent: "#8a5a44",
    sections: [
      { t: "Header", c: ["logo · nav · phone · Book Appointment"] },
      { t: "Breadcrumb", c: ["Home / Blog / category"] },
      { t: "Article header", c: ["category chip · H1 · author (Kalpana) · date · read time"] },
      { t: "TOC + Body", c: ["headings + FAQ content"] },
      { t: "Mid-article CTA", c: [""], cta: ["Book Appointment", "WhatsApp"] },
      { t: "Tags", c: ["#keyword chips"] },
      { t: "Get this done at Anaplak", c: ["links to the money page"], links: ["/services/*"] },
      { t: "Related articles", c: [""], links: ["/blogs/*"] },
      { t: "Final CTA", c: [""], cta: ["Book Appointment", "WhatsApp"] },
      { t: "Footer", c: ["phones · social · explore"] },
    ],
  },
  {
    id: "contact", name: "CONTACT", url: "/contact", accent: "#53675C",
    sections: [
      { t: "Header", c: ["logo · nav · phone · Book Appointment"] },
      { t: "PageHeader", c: ["Connect With Us"] },
      { t: "Google Map embed", c: ["place_id + Map key from env", ""], cta: ["View on Maps"] },
      { t: "Address · Hours · Phone", c: ["MMDA Colony, Maduravoyal 600095", "Mon–Sun 10AM–9PM", "+91 98400 88867 · +91 98400 88861", ""], cta: ["Call", "WhatsApp"] },
      { t: "Social", c: ["Instagram · Facebook · YouTube"] },
      { t: "Footer", c: ["phones · social · explore"] },
    ],
  },
  {
    id: "kalpana", name: "KALPANA", url: "/kalpana", accent: "#8a5a44",
    sections: [
      { t: "Header", c: ["logo · nav · phone · Book Appointment"] },
      { t: "PageHeader", c: ["Founder"] },
      { t: "Profile", c: ["Kalpana image + bio"] },
      { t: "Stats", c: ["1000+ · 6+ Years · 7 Days Open"] },
      { t: "Philosophy", c: ["Artistry · Passion · Trust"] },
      { t: "Social cards", c: ["@_kalpana_makeover_ · @anaplak_art_and_glam_salon"] },
      { t: "CTA", c: ["Transform your look..."], cta: ["Book a Consultation"] },
      { t: "Footer", c: ["phones · social · explore"] },
    ],
  },
  {
    id: "best_salon", name: "BEST SALON", url: "/best-salon-in-chennai", accent: "#8a5a44",
    sections: [
      { t: "Header", c: ["logo · nav · phone · Book Appointment"] },
      { t: "Hero", c: ["Best Salon in Chennai — heading + booking form", ""], cta: ["Call Now"] },
      { t: "Booking form", c: ["name + service → WhatsApp"], cta: ["Book on WhatsApp"] },
      { t: "Services grid", c: ["category cards"], links: ["/services/*"] },
      { t: "Pricing + BlogPreview", c: [""], links: ["/menu", "/blogs"] },
      { t: "Testimonials", c: ["Google reviews"] },
      { t: "Areas we serve", c: ["Maduravoyal · Koyambedu · Anna Nagar …"] },
      { t: "FAQ", c: ["hours: Mon–Sun 10AM–9PM"] },
      { t: "Contact & Map", c: ["phones · map embed", ""], cta: ["Call", "WhatsApp"] },
      { t: "Footer", c: ["phones · social · explore"] },
    ],
  },
]

// ---------------------------------------------------------------- layout (column stacks)
const COL_X = { c0: 60, c1: 500, c2: 940, c3: 1380, c4: 1820 }
const COLS = {
  c0: ["home", "contact"],
  c1: ["services", "service_detail"],
  c2: ["pricing", "blogs"],
  c3: ["gallery", "blog_post"],
  c4: ["about", "kalpana", "best_salon"],
}
const CARD_W = 400
const GAP = 110
const START_Y = 150

function computeH(p) {
  let h = 40
  for (const s of p.sections) {
    h += 12 + 15 + s.c.length * 13 + 2
    if (s.cta?.length) h += 20
    if (s.links?.length) h += 20
  }
  h += 6 + 20 // footer strip
  return h
}
const hOf = {}
for (const p of PAGES) hOf[p.id] = computeH(p)

// stack columns
const placed = {}
for (const c of Object.keys(COLS)) {
  let y = START_Y
  for (const id of COLS[c]) {
    placed[id] = { x: COL_X[c], y }
    y += hOf[id] + GAP
  }
}
const anchored = PAGES.map((p) => ({ ...p, x: placed[p.id].x, y: placed[p.id].y, h: hOf[p.id] }))
for (const p of anchored) {
  cards[p.id] = { x: p.x, y: p.y, w: CARD_W, h: p.h, cx: p.x + CARD_W / 2, cy: p.y + p.h / 2 }
}

// ---------------------------------------------------------------- render cards
for (const p of anchored) {
  const pad = 14
  elements.push(rect(p.x, p.y, CARD_W, 40, p.accent, p.accent, 1, 0))
  elements.push(text(p.x + pad, p.y + 10, `${p.name}   ${p.url}`, 16, "#ffffff"))

  let cursor = p.y + 40 + pad
  for (const s of p.sections) {
    cursor += 12
    elements.push(text(p.x + pad, cursor, s.t, 12, p.accent))
    cursor += 16
    elements.push(text(p.x + pad + 8, cursor, s.c.join("\n"), 11, "#555"))
    cursor += s.c.length * 13
    if (s.cta?.length) {
      let px = p.x + pad + 6
      for (const c of s.cta) {
        const e = pill(px, cursor, c, CTA, CTA)
        elements.push(...e.els)
        px += e.w + 6
      }
      cursor += 20
    }
    if (s.links?.length) {
      let px = p.x + pad + 6
      for (const l of s.links) {
        const e = pill(px, cursor, `↳ ${l}`, LINK, LINK, "#eaf2f6", 10)
        elements.push(...e.els)
        px += e.w + 6
      }
      cursor += 20
    }
    cursor += 2
  }
  elements.push(rect(p.x, cursor + 4, CARD_W, 20, "#f0ebe3", "#e0d8cc", 1, 0))
  elements.push(text(p.x + pad, cursor + 7, "shared footer: phones · social · explore links", 8.5, "#8a7f70"))
}

const maxBottom = Math.max(...Object.values(cards).map((c) => c.y + c.h))

// ---------------------------------------------------------------- top bands
elements.push(text(60, 28, "ANAPLAK ART & GLAM — SITE STRUCTURE · PAGE LAYOUTS · INTERNAL LINKS", 22, "#1e1e1e"))

const HEADER_Y = 84
const FOOTER_Y = maxBottom + 110
elements.push(rect(60, HEADER_Y, 2160, 40, "#eef3ec", "#53675C", 1.5, 0))
elements.push(text(80, HEADER_Y + 12, "GLOBAL HEADER (every page)   ·   nav → About / Services / Pricing / Gallery / Blogs / Contact     ·     phone [phone_click]     ·     “Book An Appointment” [booking_click]", 11.5, "#3c5a46"))

elements.push(rect(60, FOOTER_Y, 2160, 40, "#f5eee6", "#8a5a44", 1.5, 0))
elements.push(text(80, FOOTER_Y + 12, "GLOBAL FOOTER (every page)   ·   Explore → Home · About · Gallery · Services · Contact     ·     Location [map_click] · +91 98400 88867 / 88861 [phone_click] · WhatsApp [wa_click] · FB / IG / YT", 11.5, "#6b4a35"))

// register band pseudo-cards for arrow endpoints
cards.global_header = { x: 60, y: HEADER_Y, w: 2160, h: 40, cx: 1140, cy: HEADER_Y + 20 }
cards.global_footer = { x: 60, y: FOOTER_Y, w: 2160, h: 40, cx: 1140, cy: FOOTER_Y + 20 }

// ---------------------------------------------------------------- arrows
function arrow(fromId, toId, label, color, fromSide, toSide) {
  const from = cards[fromId], to = cards[toId]
  const concat = (c, side) => ({
    top: [c.cx, c.y], bottom: [c.cx, c.y + c.h], left: [c.x, c.cy], right: [c.x + c.w, c.cy],
  })[side]
  const [sx0, sy0] = fromSide && toSide ? concat(from, fromSide) : [from.cx, from.cy]
  const [ex0, ey0] = fromSide && toSide ? concat(to, toSide) : [to.cx, to.cy]
  const dx = ex0 - sx0, dy = ey0 - sy0
  const len = Math.hypot(dx, dy) || 1
  const ux = dx / len, uy = dy / len
  elements.push(el("arrow", {
    x: sx0, y: sy0, width: dx, height: dy,
    points: [[0, 0], [ux * (len - 6), uy * (len - 6)]],
    strokeColor: color, strokeWidth: 2, roughness: 0,
    startBinding: { elementId: fromId, focus: 0, gap: 4 },
    endBinding: { elementId: toId, focus: 0, gap: 4 },
  }))
  if (label) elements.push(text(NUM((sx0 + ex0) / 2 + 6), NUM((sy0 + ey0) / 2 - 7), label, 11, color))
}

const NAV = "#3c5a46"
const FOOTER = "#8a5a44"
const INTERNAL = "#b07a2e"
const HUBCHILD = "#2e6b8a"

// header nav -> pages
for (const id of ["about", "services", "pricing", "gallery", "blogs", "contact", "home"]) {
  arrow("global_header", id, "", NAV, "bottom", "top")
}

// footer -> pages
for (const id of ["home", "about", "gallery", "services", "contact"]) {
  arrow("global_footer", id, "", FOOTER, "top", "bottom")
}

// home -> services (showcase cards)
arrow("home", "services", "Showcase cards", INTERNAL, "right", "left")

// about -> kalpana (vertical)
arrow("about", "kalpana", "Meet Kalpana", INTERNAL, "bottom", "top")

// services hub -> 13 money pages (vertical)
arrow("services", "service_detail", "13 money pages", HUBCHILD, "bottom", "top")

// service detail -> pricing (neighbor)
arrow("service_detail", "pricing", "price list", INTERNAL, "right", "left")

// blogs hub -> 15 posts (neighbor)
arrow("blogs", "blog_post", "15 posts", HUBCHILD, "right", "left")

// (home -> about / blogs, blog_post -> services, best_salon links are shown as blue chips inside the card)

// ---------------------------------------------------------------- legend
const LEGEND_Y = FOOTER_Y + 90
elements.push(rect(60, LEGEND_Y, 330, 210, "#ffffff", "#d8cfc0", 1.5, 0))
elements.push(text(76, LEGEND_Y + 12, "LINK LEGEND", 14, "#222"))
let ly = LEGEND_Y + 38
const items = [
  [NAV, "Header navigation (global)"],
  [FOOTER, "Footer links (global)"],
  [INTERNAL, "Internal / contextual links"],
  [HUBCHILD, "Hub → child pages"],
]
for (const [col, lab] of items) {
  elements.push(rect(76, ly, 26, 4, col, col, 1, 0))
  elements.push(text(112, ly - 6, lab, 11, "#444"))
  ly += 24
}
elements.push(text(76, ly + 2, "Pink pill = conversion CTA:", 11, "#444"))
elements.push(text(76, ly + 17, "booking_click · whatsapp_click", 10, "#8a7f70"))
elements.push(text(76, ly + 30, "phone_click · map_click", 10, "#8a7f70"))
elements.push(text(76, ly + 43, "booking_form_submit", 10, "#8a7f70"))
elements.push(rect(76, ly + 58, 26, 4, LINK, LINK, 1, 0))
elements.push(text(112, ly + 52, "Blue pill = internal link", 11, "#444"))

// ---------------------------------------------------------------- overlap guard
const ids2 = Object.keys(cards).filter((k) => !k.startsWith("global"))
for (let i = 0; i < ids2.length; i++) for (let j = i + 1; j < ids2.length; j++) {
  const a = cards[ids2[i]], b = cards[ids2[j]]
  if (a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y) {
    throw new Error(`OVERLAP ${ids2[i]} / ${ids2[j]}`)
  }
}

const excalidraw = {
  type: "excalidraw", version: 2, source: "https://excalidraw.com",
  elements,
  appState: { gridSize: null, viewBackgroundColor: "#ffffff", zoom: { value: 0.55 } },
  files: {}, scrollToContent: true,
}

const out = "docs/seo-implementation/anaplak-site-map.excalidraw"
writeFileSync(out, JSON.stringify(excalidraw, null, 2))
console.log("OK  cards:", ids2.length, " elements:", elements.length, " bottom:", LEGEND_Y + 240)