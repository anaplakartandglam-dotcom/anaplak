interface FAQ {
    question: string
    answer: string
}

export function extractFAQs(html: string): FAQ[] {
    const faqs: FAQ[] = []
    const regex = /<strong>\s*Q:\s*(.*?)\s*<\/strong>\s*<br\s*\/?>\s*A:\s*(.*?)(?=<\/p>)/gi
    let match

    while ((match = regex.exec(html)) !== null) {
        const question = match[1].replace(/<[^>]*>/g, '').trim()
        const answer = match[2].replace(/<[^>]*>/g, '').trim()
        if (question && answer) {
            faqs.push({ question, answer })
        }
    }

    return faqs
}

export function generateBlogSchema(blog: {
    title: string
    description: string
    image: string
    author: string
    authorRole: string
    createdAt: string
    category: string
    keywords: string[]
    id: string
}) {
    const siteUrl = "https://anaplakartandglamsalon.com"
    const blogUrl = `${siteUrl}/blogs/${blog.id}`

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": blog.title,
        "description": blog.description,
        "image": `${siteUrl}${blog.image}`,
        "author": {
            "@type": "Person",
            "name": blog.author,
            "jobTitle": blog.authorRole,
            "worksFor": {
                "@type": "Organization",
                "name": "Anaplak Art And Glam Salon",
                "url": siteUrl
            }
        },
        "publisher": {
            "@type": "Organization",
            "name": "Anaplak Art And Glam Salon",
            "url": siteUrl,
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/og-logo.png`
            }
        },
        "datePublished": blog.createdAt,
        "dateModified": blog.createdAt,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": blogUrl
        },
        "url": blogUrl,
        "articleSection": blog.category,
        "keywords": blog.keywords.join(", ")
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${siteUrl}/blogs`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": blog.category,
                "item": `${siteUrl}/blogs/${blog.id}`
            }
        ]
    }

    return { articleSchema, breadcrumbSchema }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    if (faqs.length === 0) return null

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }
}