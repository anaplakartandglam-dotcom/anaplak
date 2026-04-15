# Blog Creation Guide — Anaplak Art and Glam Salon

This guide describes how to create new blog posts for the Anaplak website. Follow the structure below to ensure SEO optimization, conversion focus, and consistency with existing blogs.

---

## File to Edit

`data/blogData.ts` — Add a new object to the `blogData` array.

---

## Blog Interface

Every blog must conform to this TypeScript interface:

```ts
export interface Blog {
  id: string
  title: string
  description: string
  content: string
  image: string
  category: string
  tags: string[]
  keywords: string[]
  author: string
  authorImage: string
  authorRole: string
  createdAt: string
  readTime: string
  featured?: boolean
  ctaText?: string
  whatsappMessage?: string
}
```

---

## How to Create a New Blog

### Step 1: Generate Metadata

Create the blog metadata following this pattern:

```ts
{
  id: "seo-friendly-slug-from-title",
  title: "SEO Optimized Title Including Primary Keyword and Chennai",
  description: "150-160 character meta description with keyword + benefit for the user.",
  keywords: ["primary keyword Chennai", "secondary keyword Maduravoyal", "long-tail keyword Chennai"],
  // ... remaining fields
}
```

**Rules:**
- `id`: kebab-case, SEO-friendly, e.g. `bridal-makeup-trends-2026`
- `title`: Include primary keyword + "Chennai" for local SEO
- `description`: 150-160 chars max, includes keyword + user benefit
- `keywords`: Array of 5 SEO keywords (used in `<meta name="keywords">` tag). Include "Chennai" or "Maduravoyal" variants for local SEO, e.g. `["keratin treatment Chennai", "hair smoothening Chennai", "frizzy hair treatment Maduravoyal", "keratin hair treatment cost Chennai", "best keratin salon Chennai"]`
- `category`: One of `Bridal`, `Hair Care`, `Hair Color`, `Skincare`, `Makeup`
- `tags`: Array of 5-7 SEO tags including a "Chennai" variant, e.g. `["keratin", "hair treatment", "keratin treatment Chennai"]`
- `readTime`: Typically "5-7 min read" depending on word count

### Step 2: Write Blog Content (HTML String)

The `content` field is an HTML template literal. Follow this structure:

#### Introduction
- Strong hook sentence
- Mention the problem + benefit
- Include **primary keyword + "Chennai"** naturally in the first paragraph

#### Main Sections (H2)
Dynamically generate based on topic. Common patterns:
- What is {{service}}?
- Benefits of {{service}}
- Who should get it?
- Process / Steps
- Tips / Aftercare

#### Internal Linking
- Naturally mention related services offered at Anaplak (bridal, facial, keratin, hair coloring, etc.)
- Use `<strong>` tags for service references, e.g. `<strong>keratin treatment at our Chennai salon</strong>`

#### FAQ Section (Conditional)
- Include FAQs **ONLY IF** the topic has common user doubts
- Use `<h3>Frequently Asked Questions</h3>` as the heading
- Format each FAQ as: `<p><strong>Q: Question?</strong><br>A: Answer.</p>`
- 3-5 questions maximum

#### CTA Section (REQUIRED — Last Section)
- Heading must use: `<h2 class="blog-cta">Book Your {{Service}} in Chennai</h2>`
- Paragraph must use: `<p class="blog-cta-text">Persuasive conversion text.</p>`
- The `.blog-cta` and `.blog-cta-text` CSS classes provide the styled card with gradient and accent bar
- Clickable CTA buttons (Book Appointment + WhatsApp) are **auto-rendered** below the card — do NOT add buttons manually in the content

**Example CTA:**
```html
<h2 class="blog-cta">Book Your Keratin Treatment in Chennai</h2>
<p class="blog-cta-text">Say goodbye to frizz and hello to silky, manageable hair. Our keratin specialists at Anaplak Art and Glam Salon have helped hundreds of Chennai clients transform their hair. Book your personalized consultation today and step out with confidence.</p>
```

### Step 3: Add CTA Button Data

```ts
ctaText: "Book Keratin Consultation",
whatsappMessage: "Hi, I just read your blog about {{service}} and I'm interested. Can I book a consultation?"
```

This message is pre-filled in the WhatsApp link on the blog page.

---

## SEO Rules (Strict)

- Include keyword in: Title, first paragraph, and at least 2 headings
- Use **"Chennai"** naturally for local SEO throughout the content
- Minimum **800 words** per blog post
- Avoid keyword stuffing — write naturally
- Use `<h2>` for main sections, `<h3>` for sub-sections and FAQ heading

---

## CSS Classes Reference

| Class | Usage |
|-------|-------|
| `blog-cta` | Applied to the last `<h2>` — creates a styled gradient card with pink-green accent bar |
| `blog-cta-text` | Applied to the paragraph after the CTA heading — matching card body with "Book Now" pill CTA |
| `blog-article` | Wraps all blog content — provides base typography styles |

The Table of Contents (TOC) auto-generates from all `<h2>` and `<h3>` tags in the content. Headings receive auto-generated `id` attributes for anchor linking. No manual `id` attributes needed.

---

## Dynamic SEO Schema (Auto-Generated)

Each blog page automatically generates structured data (JSON-LD) for Google search results:

| Schema | What It Does |
|--------|-------------|
| **Article** | Blog post metadata (title, description, author, date, image, publisher) |
| **BreadcrumbList** | Home > Blog > Category navigation trail |
| **FAQPage** | Only if the blog content contains Q&A formatted as `<strong>Q: ...</strong><br>A: ...` |

No manual schema setup needed — `lib/blogSchema.ts` handles everything based on the blog data. FAQs are extracted automatically from the HTML content.

---

## After Adding a Blog

1. Run `npm run build` to verify no TypeScript errors
2. Check that the new blog appears at `/blogs` and `/blogs/{slug}`
3. Verify the TOC, CTA section, WhatsApp link, and schema markup work correctly