interface BlogSchemaProps {
    articleSchema: Record<string, unknown>
    breadcrumbSchema: Record<string, unknown>
    faqSchema: Record<string, unknown> | null
}

export default function BlogSchema({ articleSchema, breadcrumbSchema, faqSchema }: BlogSchemaProps) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema)
                    }}
                />
            )}
        </>
    )
}