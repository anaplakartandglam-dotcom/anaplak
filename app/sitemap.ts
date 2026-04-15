import { MetadataRoute } from 'next'
import { blogData } from '@/data/blogData'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://anaplakartandglamsalon.com'
    const currentDate = new Date()

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]

    const blogPages: MetadataRoute.Sitemap = blogData.map((blog) => {
        const [year, month, day] = blog.createdAt.split("-").map(Number)
        return {
            url: `${baseUrl}/blogs/${blog.id}`,
            lastModified: new Date(year, month - 1, day),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }
    })

    return [...staticPages, ...blogPages]
}
