export interface Heading {
    id: string;
    text: string;
    level: number;
}

export interface CTAData {
    heading: string;
    text: string;
}

function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

export function addHeadingIds(html: string): string {
    return html.replace(/<(h[234])([^>]*)>(.*?)<\/\1>/gi, (match, tag, attrs, content) => {
        const text = content.replace(/<[^>]*>/g, '').trim();
        const id = slugify(text);
        return `<${tag}${attrs} id="${id}">${content}</${tag}>`;
    });
}

export function extractHeadings(html: string): Heading[] {
    const headings: Heading[] = [];
    const regex = /<(h[234])([^>]*)>(.*?)<\/\1>/gi;
    let match;

    while ((match = regex.exec(html)) !== null) {
        const level = parseInt(match[1][1]);
        const text = match[3].replace(/<[^>]*>/g, '').trim();
        const id = slugify(text);
        headings.push({ id, text, level });
    }

    return headings;
}

export function extractCTA(html: string): CTAData | null {
    const headingMatch = html.match(/<h2[^>]*class=["']blog-cta["'][^>]*>(.*?)<\/h2>/i);
    const textMatch = html.match(/<p[^>]*class=["']blog-cta-text["'][^>]*>(.*?)<\/p>/i);

    if (!headingMatch) return null;

    return {
        heading: headingMatch[1].replace(/<[^>]*>/g, '').trim(),
        text: textMatch ? textMatch[1].replace(/<[^>]*>/g, '').trim() : ''
    };
}

export function stripCTA(html: string): string {
    return html
        .replace(/<h2[^>]*class=["']blog-cta["'][^>]*>.*?<\/h2>/gi, '')
        .replace(/<p[^>]*class=["']blog-cta-text["'][^>]*>.*?<\/p>/gi, '')
        .replace(/\n\s*\n\s*\n/g, '\n\n');
}